import { WSServiceBase, HubNotification, HubNotificationCredentials, HubNotificationCredentialsData, HubNotificationData } from '@nexjs/wsclient';

import { DataType } from '../../models/DataType';

export class CredentialsContractWSService extends WSServiceBase {
    //#region [ implement WSServiceBase ]
    public readonly name = 'credentialsContract';
    //#endregion

    //#region [ hub ]

    // isAuth: false
    public readonly onUpdate = new HubNotificationCredentials<string>(this._hub, this.name, 'onUpdate');

    // isAuth: false
    public readonly onDataUpdate = new HubNotificationCredentialsData<string, DataType>(this._hub, this.name, 'onDataUpdate');
    //#endregion

    //#region [ rest ]

     // isAuth: false
    public print(credentials: any): Promise<void> {
        return this.request<void>( 'print', null, credentials );
    }

     // isAuth: false
    public notify(): Promise<void> {
        return this.request<void>( 'notify', null, null );
    }
    //#endregion
}
