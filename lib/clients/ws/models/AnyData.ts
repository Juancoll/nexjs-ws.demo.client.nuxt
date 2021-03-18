
export class AnyData {
    public a!: string
    public b!: boolean

    constructor (init?: Partial<AnyData>) {
        Object.assign(this, init)
    }
}
