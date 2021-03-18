import { lib } from '../..'

import { User } from '../../models/User'
import { Model } from '../../models/Model'
import { ModelComponent } from '../../models/ModelComponent'

export class UsersWSService extends lib.WSServiceBase {
    // #region [ implement WSServiceBase ]
    public readonly name = 'users'
    // #endregion

    // #region [ hub ]
    // #endregion

    // #region [ rest ]

    // isAuth: false
    public me (): Promise<User> {
        return this.request<User>('me', null)
    }
    // #endregion
}
