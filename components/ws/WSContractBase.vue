<template lang="pug">
    div.full.flex.v-container
        v-card
            h1  Base Contract
            h3 Pub/Sub Protocol (Hub module)
            v-row
                v-col
                    v-btn(@click="subscribe") subscribe
                v-col
                    v-btn(@click="unsubscribe") unsubscribe
            h3 Req/Res Protocol (Rest Module))
            v-row
                v-col
                    v-btn(@click="print") print
                v-col
                    v-btn(@click="delay") delay
                v-col
                    v-btn(@click="notify") notify
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { wsapi } from '@/plugins/wsapi'

@Component
export default class WSBaseContractView extends Vue {
    url = 'http://localhost:3000';

    constructor () {
        super()
        console.log('[WSBaseContractView] constructor()')
    }

    mounted (): void {
        console.log('[WSBaseContractView] mounted()')
        wsapi.baseContract.onUpdate.on(() =>
            console.log('[baseContract] onUpdate')
        )
        wsapi.baseContract.onDataUpdate.on(data =>
            console.log('[baseContract] onDataUpdate', data)
        )
    }

    destroyed (): void {
        console.log('[WSBaseContractView] destroyed()')
        wsapi.baseContract.onUpdate.off()
        wsapi.baseContract.onDataUpdate.off()
    }

    async subscribe (): Promise<void> {
        try {
            console.log('[WSBaseContractView] subscribe request')
            await wsapi.baseContract.onUpdate.sub()
            await wsapi.baseContract.onDataUpdate.sub()
            console.log('[WSBaseContractView] subscribe response')
        } catch (err) {
            console.warn(err)
        }
    }

    async unsubscribe (): Promise<void> {
        try {
            console.log('[WSBaseContractView] unsubscribe request')
            await wsapi.baseContract.onUpdate.unsub()
            await wsapi.baseContract.onDataUpdate.unsub()
            console.log('[WSBaseContractView] unsubscribe response')
        } catch (err) {
            console.warn(err)
        }
    }

    async print (): Promise<void> {
        try {
            console.log('[WSBaseContractView] print() request')
            await wsapi.baseContract.print()
            console.log('[WSBaseContractView] print() response')
        } catch (err) {
            console.warn(err)
        }
    }

    async delay (): Promise<void> {
        try {
            console.log('[WSBaseContractView] delay() request')
            await wsapi.baseContract.delay(2000)
            console.log('[WSBaseContractView] delay() response')
        } catch (err) {
            console.warn(err)
        }
    }

    async notify (): Promise<void> {
        try {
            console.log('[WSBaseContractView] notify() request')
            await wsapi.baseContract.notify()
            console.log('[WSBaseContractView] notify() response')
        } catch (err) {
            console.warn(err)
        }
    }
}
</script>
<style lang="scss" scoped>
.v-card {
    margin: 10px;
    padding: 20px;
    width: Calc(100% - 20px);
}
.v-btn {
    margin: 5px;
    width: 100%;
}
</style>
