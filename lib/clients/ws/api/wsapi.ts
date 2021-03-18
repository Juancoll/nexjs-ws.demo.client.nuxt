import { lib } from '../'

import { AuthContractWSService } from './services/AuthContractWSService'
import { BaseContractWSService } from './services/BaseContractWSService'
import { CredentialContractWSService } from './services/CredentialContractWSService'
import { UsersWSService } from './services/UsersWSService'

export class WSApi<TUser, Token> extends lib.WSApiBase<TUser, Token> {
    public readonly authContract = new AuthContractWSService ( this.rest, this.hub )
    public readonly baseContract = new BaseContractWSService ( this.rest, this.hub )
    public readonly credentialContract = new CredentialContractWSService ( this.rest, this.hub )
    public readonly users = new UsersWSService ( this.rest, this.hub )

    constructor ( ws: lib.IWSBase ){
        super( ws )
    }
}
