import { SimpleEventDispatcher } from 'strongly-typed-events';

import { WSApiBase } from '@nexjs/wsclient';

import { IAuthApp, IAuthUser } from '@/lib/authApp';
import { env } from '@/services/env';
import { LocalStorageRepository } from '@/lib/localStorage';

export class WSAuthApp implements IAuthApp {
    private _repo = new LocalStorageRepository('ws-authapp', true);

    constructor(
        private wsapi: WSApiBase<any, any>
    ) {
        this.wsapi.auth.onAuthenticateChange.sub(() => {
            this.onAuthenticate.dispatch(
                this.wsapi.auth.authInfo
                    ? this.wsapi.auth.authInfo.user
                    : undefined,
            );

            if (this.wsapi.auth.authInfo) {
                this._repo.save(this.wsapi.auth.authInfo.token);
            } else {
                this._repo.clear();
            }
        });

        const token = this._repo.open();
        if (token) {
            this.authenticate(token);
        }
    }

    //#region [ IAuthApp ]
    public get isAuth(): boolean {
        return this.wsapi.auth.authInfo ? true : false;
    }
    public get user(): IAuthUser | null {
        return this.wsapi.auth.authInfo
            ? this.wsapi.auth.authInfo.user
            : null;
    }
    public readonly onAuthenticate = new SimpleEventDispatcher<IAuthUser | null>();

    public async register(data: any): Promise<IAuthUser> {
        if (!this.wsapi.ws.isConnected) {
            await this.wsapi.ws.connectAsync(
                env.vars.wsapi.url,
                env.vars.wsapi.path,
                env.vars.wsapi.nsp,
            );
        }
        const res = await this.wsapi.auth.register(data);
        return res.user;
    }
    public async login(data: any): Promise<IAuthUser> {
        if (!this.wsapi.ws.isConnected) {
            await this.wsapi.ws.connectAsync(
                env.vars.wsapi.url,
                env.vars.wsapi.path,
                env.vars.wsapi.nsp,
            );
        }
        const res = await this.wsapi.auth.login(data);
        return res.user;
    }
    public async logout(): Promise<void> {
        await this.wsapi.auth.logout();
        this.wsapi.ws.disconnect();
    }
    //#endregion

    //#region [ private ]
    private async authenticate(token: any): Promise<void> {
        if (!this.wsapi.ws.isConnected) {
            await this.wsapi.ws.connectAsync(
                env.vars.wsapi.url,
                env.vars.wsapi.path,
                env.vars.wsapi.nsp,
            );
        }
        await this.wsapi.auth.authenticate(token);
    }
    //#endregion
}
