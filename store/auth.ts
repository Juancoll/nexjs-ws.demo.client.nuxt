import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

import { User } from '~/lib/clients/http/models'
import { httpapi } from '~/services/httpapi'

@Module({
    name: 'auth',
    stateFactory: true,
    namespaced: true
})
export default class AuthStore extends VuexModule {
    // #region  [ state ]
    user: User | null = null;
    token: string| null = null;
    // #endregion

    // #region  [ getters ]
    get isAuth (): boolean {
        return this.user != undefined
    }

    get getUser (): User | null {
        return this.user
    }

    get getToken (): string | null {
        return this.token
    }
    // #endregion

    // #region [ mutations ]
    @Mutation
    SET_USER (user: User) {
        this.user = user
    }

    @Mutation
    SET_TOKEN (token: string) {
        this.token = token
    }

    @Mutation
    CLEAR () {
        this.user = null
        this.token = null
    }
    // #endregion

    // #region  [ actions ]
    @Action({ rawError: true })
    async login (data: {email:string, password:string}): Promise<void> {
        try {
            const response = await httpapi.localLogin(data.email, data.password)
            const user:User = response.data
            this.SET_USER(user)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
    }

    @Action({ rawError: true })
    async logout () {
        await httpapi.localLogout()
        this.context.commit('CLEAR')
    }
    // #endregion
}
