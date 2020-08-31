import { IAuthUser } from './IAuthUser';
import { SimpleEventDispatcher } from 'strongly-typed-events';

export interface IAuthApp {
    isAuth: boolean;
    user: IAuthUser | null;
    onAuthenticate: SimpleEventDispatcher<IAuthUser | null>;
    register(data: any): Promise<IAuthUser>;
    login(data: any): Promise<IAuthUser>;
    logout(): Promise<void>;
}
