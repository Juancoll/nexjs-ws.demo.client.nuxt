import { IAuthApp, IAuthUser } from '@/lib/authApp';
import { HttpApi } from '@/services/httpapi';
import { LocalStorageRepository } from '@/lib/localStorage';
import { SimpleEventDispatcher } from 'strongly-typed-events';

export class HttpLocalAuthApp implements IAuthApp {
    private _repo = new LocalStorageRepository('http-authapp', true);

    constructor(
        private httpapi: HttpApi) {
    }

    //#region [ IAuthApp ]
    public get isAuth(): boolean {
        return this._repo.open() != undefined;
    }
    public get user(): IAuthUser | null {
        if (this.isAuth) {
            return this._repo.open();
        }
        return null;
    }
    onAuthenticate = new SimpleEventDispatcher<IAuthUser | null>();
    async register(data: any): Promise<IAuthUser> {
        if (!data.email) throw new Error("email required");
        if (!data.password) throw new Error("password required");

        await this.httpapi.auth.authControllerRegister({
            email: data.email,
            password: data.password
        });
        const user = await this.login(data);
        return user;
    }
    async login(data: any): Promise<IAuthUser> {
        if (!data.email) throw new Error("email required");
        if (!data.password) throw new Error("password required");

        const response = await this.httpapi.localLogin(data.email, data.password);
        if (response.status == 201) {
            this._repo.save({
                uid: response.data.email,
                roles: response.data.roles,
            } as IAuthUser);
            this.onAuthenticate.dispatch(this.user);
            if (this.user)
                return this.user;
            else
                throw new Error('login error: user not found');
        } else {
            throw new Error(response.statusText);
        }
    }
    async logout(): Promise<void> {
        await this.httpapi.localLogout();
        this._repo.clear();
        this.onAuthenticate.dispatch(null);
    }
    //#endregion

}
