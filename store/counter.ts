import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module( {
    name: 'counter',
    stateFactory: true,
    namespaced: true,
} )
export default class AuthStore extends VuexModule {
    // #region  [ state ]
    counter: number = 0; // initialise empty for now
    // #endregion

    // #region  [ getters ]
    get getCounter (): number {
        return this.counter
    }
    // #endregion

    // #region [ mutations ]
    @Mutation
    INCREMENT (): void {
        this.counter++
    }

    @Mutation
    DECREMENT (): void {
        this.counter--
    }
    // #endregion

    // #region  [ actions ]
    @Action( { rawError: true } )
    Increment (): void {
        this.context.commit( 'INCREMENT' )
    }

    @Action( { rawError: true } )
    Decrement (): void {
        this.context.commit( 'DECREMENT' )
    }
    // #endregion
}
