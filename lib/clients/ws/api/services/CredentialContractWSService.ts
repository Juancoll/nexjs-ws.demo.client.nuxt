import { lib } from '../..'

import { AnyData } from '../../models/AnyData'

export class CredentialContractWSService extends lib.WSServiceBase {
    // #region [ implement WSServiceBase ]
    public readonly name = 'credentialContract'
    // #endregion

    // #region [ hub ]

    // isAuth: false
    public readonly onUpdate = new lib.HubEvent(this._hub, this.name, 'onUpdate')

    // isAuth: false
    public readonly onUpdateData = new lib.HubEventData<AnyData>(this._hub, this.name, 'onUpdateData')

    // isAuth: false
    public readonly onUpdateSelection = new lib.HubEvent(this._hub, this.name, 'onUpdateSelection')

    // isAuth: false
    public readonly onUpdateSelectionData = new lib.HubEventData<AnyData>(this._hub, this.name, 'onUpdateSelectionData')

    // isAuth: false
    public readonly onUpdateValidation = new lib.HubEventValidation<number>(this._hub, this.name, 'onUpdateValidation')

    // isAuth: false
    public readonly onUpdateValidationData = new lib.HubEventValidationData<number, AnyData>(this._hub, this.name, 'onUpdateValidationData')

    // isAuth: false
    public readonly onUpdateValidationSelection = new lib.HubEventValidation<number>(this._hub, this.name, 'onUpdateValidationSelection')

    // isAuth: false
    public readonly onUpdateValidationSelectionData = new lib.HubEventValidationData<number, AnyData>(this._hub, this.name, 'onUpdateValidationSelectionData')
    // #endregion

    // #region [ rest ]

    // isAuth: false
    public print (): Promise<void> {
        return this.request<void>('print', null)
    }

    // isAuth: false
    public notify (): Promise<void> {
        return this.request<void>('notify', null)
    }
    // #endregion
}
