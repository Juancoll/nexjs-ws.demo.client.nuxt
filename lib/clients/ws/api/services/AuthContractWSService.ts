import { lib } from '../..'

import { DataType } from '../../models/DataType'

export class AuthContractWSService extends lib.WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'authContract'
    //#endregion

    //#region [ hub ]

    // isAuth: true
    public readonly onUpdate = new lib.HubEventSelector<string>( this._hub, this.name, 'onUpdate' )

    // isAuth: true
    public readonly onDataUpdate = new lib.HubEventSelectorData<string, DataType>( this._hub, this.name, 'onDataUpdate' )
    //#endregion

    //#region [ rest ]

    // isAuth: true
    public print ( ): Promise<void> {
        return this.request<void>( 'print', null)
    }

    // isAuth: true
    public notify ( ): Promise<void> {
        return this.request<void>( 'notify', null)
    }
    //#endregion
}
