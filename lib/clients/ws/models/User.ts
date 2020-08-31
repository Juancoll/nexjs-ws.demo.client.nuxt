import { Model } from './Model'

export class User extends Model {
    public email: string;
    public password: string;
    public roles: string[];
    public name: string;
    public surname: string;
}
