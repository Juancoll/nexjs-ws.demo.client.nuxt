import { lib } from '../..'

import { DataType } from '../../models/DataType'

export class CredentialsContractWSService extends lib.WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'credentialsContract'
    //#endregion

    //#region [ hub ]

    // isAuth: false
    public readonly onUpdate = new lib.HubEventSelector<string>( this._hub, this.name, 'onUpdate' )

    // isAuth: false
    public readonly onDataUpdate = new lib.HubEventSelectorData<string, DataType>( this._hub, this.name, 'onDataUpdate' )
    //#endregion

    //#region [ rest ]

    // isAuth: false
    public print ( ): Promise<void> {
        return this.request<void>( 'print', null )
    }

    // isAuth: false
    public notify ( ): Promise<void> {
        return this.request<void>( 'notify', null )
    }
    //#endregion
}
