<template lang="pug">
    div.full.flex.v-container
        v-card
            h1 Auth Contract
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
                    v-btn(@click="notify") notify
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { wsapi } from '@/plugins/wsapi'

@Component
export default class WSAuthContractView extends Vue {
    constructor () {
        super()
        console.log( '[WSAuthContractView] constructor()' )
    }

    //#region [ lifecycle ]
    mounted (): void {
        console.log( '[WSAuthContractView] mounted()' )
        wsapi.authContract.onUpdate.on( () =>
            console.log( '[credentialContract] onUpdate' ),
        )
        wsapi.authContract.onDataUpdate.on( data =>
            console.log( '[credentialContract] onDataUpdate', data ),
        )
    }
    destroyed (): void {
        console.log( '[WSAuthContractView] destroyed()' )
        wsapi.authContract.onUpdate.off()
        wsapi.authContract.onDataUpdate.off()
    }
    //#endregion

    async subscribe (): Promise<void> {
        try {
            console.log( '[WSAuthContractView] subscribe request' )
            await wsapi.authContract.onUpdate.sub( )
            await wsapi.authContract.onDataUpdate.sub( )
            console.log( '[WSAuthContractView] subscribe response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async unsubscribe (): Promise<void> {
        try {
            console.log( '[WSAuthContractView] unsubscribe request' )
            await wsapi.authContract.onUpdate.unsub()
            await wsapi.authContract.onDataUpdate.unsub()
            console.log( '[WSAuthContractView] unsubscribe response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async print (): Promise<void> {
        try {
            console.log( '[WSAuthContractView] print() request' )
            await wsapi.authContract.print()
            console.log( '[WSAuthContractView] print() response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async notify (): Promise<void> {
        try {
            console.log( '[WSAuthContractView] notify() request' )
            await wsapi.authContract.notify()
            console.log( '[WSAuthContractView] notify() response' )
        } catch ( err ) {
            console.warn( err )
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
