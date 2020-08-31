import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({
  name: 'counter',
  stateFactory: true,
  namespaced: true
})
export default class CounterStore extends VuexModule {
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
    INCREMENT () {
      this.counter++
    }

    @Mutation
    DECREMENT () {
      this.counter--
    }
    // #endregion

    // #region  [ actions ]
    @Action
    Increment () {
      this.context.commit('INCREMENT')
    }

    @Action
    Decrement () {
      this.context.commit('DECREMENT')
    }
    // #endregion
}
