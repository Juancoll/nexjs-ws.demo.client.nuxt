<template lang="pug">
    v-card
        h1 Vuex Store
        v-row
            v-col
                div {{storeCounter}}
            v-col
                v-btn.primary(@click="inc") inc
            v-col
                v-btn.secondary(@click="dec") dec
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import CounterStore from '@/store/counter'

@Component
export default class ContentPage extends Vue {
    private store: CounterStore;
    public get storeCounter (): number {
        return this.store.getCounter
    }

    constructor () {
        super()
        console.log('[page-store] constructor')
        this.store = getModule(CounterStore, this.$store)
    }

    // #region [ vue lifecycle ]
    beforeCreate (): void { console.log('[page-store][vue] beforeCreated()') }
    created (): void { console.log('[page-store][vue] created()') }
    beforeMount () { console.log('[page-store][vue] beforeMount()') }
    mounted (): void { console.log('[page-store][vue] mounted()') }
    beforeUpdate (): void { console.log('[page-store][vue] beforeUpdate()') }
    updated (): void { console.log('[page-store][vue] updated()') }
    beforeDestroy (): void { console.log('[page-store][vue] beforeDestroy()') }
    destroyed (): void { console.log('[page-store][vue] destroyed()') }
    // #endregion

    public inc (): void {
        this.store.Increment()
    }

    public dec (): void {
        this.store.Decrement()
    }
}
</script>

<style lang="scss" scoped>
.v-card {
    margin: 20px;
    padding: 20px;
    width: 100%;
}
.v-btn{
    width: 100%;
}
</style>
