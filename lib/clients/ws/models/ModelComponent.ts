
export class ModelComponent {
    public _type: string

    constructor () {
        this._type = this.constructor.name
    }

}
