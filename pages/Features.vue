<template lang="pug">
    div.flex.v-container.full
        div.flex.v-container
            v-card
                h3 Notifications and Status bar
                img(alt="Vue logo" v-bind:src="logo")
                div.flex.v-container
                    v-btn.primary( @click="send") send to status bar
                    v-btn.secondary(@click="showNotifications") show notification
            v-card
                h3 Separated files (ts, scss, pug or html) component

            v-card
                h3 Vuex Store
                v-row
                    v-col
                        div counter
                    v-col
                        div {{storeCounter}}
                v-row
                    v-col
                        v-btn.primary(@click="storeInc") Increment
                    v-col
                        v-btn.secondary(@click="storeDec") Decrement
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { events, EventKeys as K } from '@/services/events'
import moment from 'moment'
import { getModule } from 'vuex-module-decorators'
import CounterStore from '@/store/modules/counter'

@Component
export default class FeaturesView extends Vue {
    public logo = require('@/assets/icons/icon_256.png');
    public counter = 0;

    private store: CounterStore;

    public get storeCounter (): number {
      return this.store.counter
    }

    constructor () {
      super()
      console.log('[FeaturesView] constructor()')
      this.store = getModule(CounterStore, this.$store)
    }

    mounted (): void {
      console.log('[FeaturesView] mounted()')
    }

    destroyed (): void {
      console.log('[FeaturesView] destroyed()')
    }

    public send (): void {
      events.$emit(
        K.toolbar.left,
            `Hello from Home view counter ${this.counter++}`
      )
    }

    public showNotifications (): void {
      // this.$notify({
      //   group: 'top',
      //   title: `Device Timeout ${moment().calendar()}`,
      //   type: 'success',
      //   text: 'Welcome from notification center'
      // })
      // this.$notify({
      //   group: 'bottom',
      //   title: `Device Timeout ${moment().calendar()}`,
      //   type: 'error',
      //   text: 'Welcome from notification center'
      // })
    }

    public storeInc (): void {
      this.store.Increment()
    }

    public storeDec (): void {
      this.store.Decrement()
    }
}
</script>
<style lang="scss" scoped>
.v-btn {
    margin: 1px;
    width: 100%;
}
.v-card {
    margin: 10px;
    padding: 10px;
    text-align: center;
}
</style>
