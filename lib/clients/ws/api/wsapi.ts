import { WSApiBase, IWSBase } from '@nexjs/wsclient'

import { AuthContractWSService } from './services/AuthContractWSService'
import { BaseContractWSService } from './services/BaseContractWSService'
import { CredentialsContractWSService } from './services/CredentialsContractWSService'

export class WSApi<TUser, Token> extends WSApiBase<TUser, Token> {
    public readonly authContract = new AuthContractWSService ( this.rest, this.hub )
    public readonly baseContract = new BaseContractWSService ( this.rest, this.hub )
    public readonly credentialsContract = new CredentialsContractWSService ( this.rest, this.hub )

    constructor ( ws: IWSBase ){
        super( ws )
    }
}
