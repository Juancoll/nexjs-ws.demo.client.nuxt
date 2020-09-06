import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';

import { DataType } from '../../models/DataType';

export class AuthContractWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'authContract';
    //#endregion

    //#region [ hub ]

    // isAuth: true
    public readonly onUpdate = new HubNotificationCredentials<string>(this._hub, this.name, 'onUpdate');

    // isAuth: true
    public readonly onDataUpdate = new HubNotificationCredentialsData<string, DataType>(this._hub, this.name, 'onDataUpdate');
    //#endregion

    //#region [ rest ]

     // isAuth: true
    public print(): Promise<void> {
        return this.request<void>( 'print', null, null );
    }

     // isAuth: true
    public notify(): Promise<void> {
        return this.request<void>( 'notify', null, null );
    }
    //#endregion
}
