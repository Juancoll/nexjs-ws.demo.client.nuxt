import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient'

import { DataType } from '../../models/DataType'

export class BaseContractWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'baseContract'
    //#endregion

    //#region [ hub ]

    // isAuth: false
    public readonly onUpdate = new HubNotification( this._hub, this.name, 'onUpdate' )

    // isAuth: false
    public readonly onDataUpdate = new HubNotificationData<DataType>( this._hub, this.name, 'onDataUpdate' )
    //#endregion

    //#region [ rest ]

    // isAuth: false
    public print ( ): Promise<void> {
        return this.request<void>( 'print', null, null )
    }

    // isAuth: false
    public delay ( value: number ): Promise<number> {
        return this.request<number>( 'delay', value, null )
    }

    // isAuth: false
    public notify ( ): Promise<void> {
        return this.request<void>( 'notify', null, null )
    }
    //#endregion
}
