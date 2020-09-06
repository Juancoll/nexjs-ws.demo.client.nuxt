
export class DataType {
    public a: string;
    public b: boolean;

    constructor(init?: Partial<DataType>) {  Object.assign(this, init); }


}
