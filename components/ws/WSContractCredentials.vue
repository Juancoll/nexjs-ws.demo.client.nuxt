<template lang="pug">
    div.full.flex.v-container
        v-card
            h1 Credentials Contract
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
export default class WSCredentialContractView extends Vue {
    constructor () {
        super()
        console.log( '[WSCredentialContractView] constructor()' )
    }

    mounted (): void {
        console.log( '[WSCredentialContractView] mounted()' )
        wsapi.credentialContract.onUpdate.on( () =>
            console.log( '[credentialContract] onUpdate' ),
        )
        wsapi.credentialContract.onUpdateData.on( data =>
            console.log( '[credentialContract] onUpdateData', data ),
        )

        wsapi.credentialContract.onUpdateSelection.on( () =>
            console.log( '[credentialContract] onUpdateSelection' ),
        )
        wsapi.credentialContract.onUpdateSelectionData.on( data =>
            console.log( '[credentialContract] onUpdateSelectionData', data ),
        )

        wsapi.credentialContract.onUpdateValidation.on( () =>
            console.log( '[credentialContract] onUpdateValidation' ),
        )
        wsapi.credentialContract.onUpdateValidationData.on( data =>
            console.log( '[credentialContract] onUpdateValidationData', data ),
        )

        wsapi.credentialContract.onUpdateValidationSelection.on( () =>
            console.log( '[credentialContract] onUpdateValidationSelection' ),
        )
        wsapi.credentialContract.onUpdateValidationSelectionData.on( data =>
            console.log( '[credentialContract] onUpdateValidationData', data ),
        )
    }
    destroyed (): void {
        console.log( '[WSCredentialContractView] destroyed()' )
        wsapi.credentialContract.onUpdate.off()
        wsapi.credentialContract.onUpdateData.off()
        wsapi.credentialContract.onUpdateSelection.off()
        wsapi.credentialContract.onUpdateSelectionData.off()
        wsapi.credentialContract.onUpdateValidation.off()
        wsapi.credentialContract.onUpdateValidationData.off()
        wsapi.credentialContract.onUpdateValidationSelection.off()
        wsapi.credentialContract.onUpdateValidationSelectionData.off()
    }

    async subscribe (): Promise<void> {
        try {
            console.log( '[WSCredentialContractComponent] subscribe request' )
            await wsapi.credentialContract.onUpdate.sub()
            await wsapi.credentialContract.onUpdateData.sub()
            await wsapi.credentialContract.onUpdateSelection.sub()
            await wsapi.credentialContract.onUpdateSelectionData.sub()
            await wsapi.credentialContract.onUpdateValidation.sub( 1234 )
            await wsapi.credentialContract.onUpdateValidationData.sub( 1234 )
            await wsapi.credentialContract.onUpdateValidationSelection.sub(
                1234,
            )
            await wsapi.credentialContract.onUpdateValidationSelectionData.sub(
                1234,
            )
            console.log( '[WSCredentialContractComponent] subscribe response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async unsubscribe (): Promise<void> {
        try {
            console.log( '[WSCredentialContractComponent] unsubscribe request' )
            await wsapi.credentialContract.onUpdate.unsub()
            await wsapi.credentialContract.onUpdateData.unsub()
            await wsapi.credentialContract.onUpdateSelection.unsub()
            await wsapi.credentialContract.onUpdateSelectionData.unsub()
            await wsapi.credentialContract.onUpdateValidation.unsub()
            await wsapi.credentialContract.onUpdateValidationData.unsub()
            await wsapi.credentialContract.onUpdateValidationSelection.unsub()
            await wsapi.credentialContract.onUpdateValidationSelectionData.unsub()
            console.log( '[WSCredentialContractComponent] unsubscribe response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async print (): Promise<void> {
        try {
            console.log( '[WSCredentialContractComponent] print() request' )
            await wsapi.credentialContract.print()
            console.log( '[WSCredentialContractComponent] print() response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async notify (): Promise<void> {
        try {
            console.log( '[WSCredentialContractComponent] notify() request' )
            await wsapi.credentialContract.notify()
            console.log( '[WSCredentialContractComponent] notify() response' )
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
