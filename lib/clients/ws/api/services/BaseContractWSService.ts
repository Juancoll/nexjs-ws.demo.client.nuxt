import { lib } from '../..'

import { DataType } from '../../models/DataType'

export class BaseContractWSService extends lib.WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'baseContract'
    //#endregion

    //#region [ hub ]

    // isAuth: false
    public readonly onUpdate = new lib.HubEvent( this._hub, this.name, 'onUpdate' )

    // isAuth: false
    public readonly onDataUpdate = new lib.HubEventData<DataType>( this._hub, this.name, 'onDataUpdate' )
    //#endregion

    //#region [ rest ]

    // isAuth: false
    public print ( ): Promise<void> {
        return this.request<void>( 'print', null)
    }

    // isAuth: false
    public delay ( value: number ): Promise<number> {
        return this.request<number>( 'delay', value)
    }

    // isAuth: false
    public notify ( ): Promise<void> {
        return this.request<void>( 'notify', null)
    }
    //#endregion
}
