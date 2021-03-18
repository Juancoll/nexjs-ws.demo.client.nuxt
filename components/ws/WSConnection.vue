<template lang="pug">
    div.full.flex.v-container
        v-card
            v-alert(outlined  type="warning"  border="left") See Action Result on browser Console. (Press F12 to open)
            h1  @nexjs Websocket Connection
            v-row
                v-col
                    v-text-field( v-model="url" label="url")
                v-col
                    v-text-field( v-model="path" label="path")
                v-col
                    v-text-field( v-model="nsp" label="nsp")
            v-btn(@click="connect") connect
            v-btn(@click="disconnect") disconnect
            br
            br
            h1 @nexjs Websocket Auth Module
            v-row
                v-col
                    v-text-field( :value="registerEmail" label="email")
                v-col
                    v-text-field( :value="registerPassword" label="password")
                v-col
                    v-btn(@click="register") register
            v-row
                v-col
                    v-text-field( :value="loginEmail" label="email")
                v-col
                    v-text-field( :value="loginPassword" label="password")
                v-col
                    v-btn(@click="login") login

            v-btn(@click="logout") logout
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { wsapi } from '@/plugins/wsapi'

@Component
export default class WSConnectionView extends Vue {
    url = 'http://localhost:3000';
    path = '/wsapi';
    nsp = '/';

    registerEmail = 'juan@any.com';
    registerPassword = '123456';

    loginEmail = 'juan@any.com';
    loginPassword = '123456';

    constructor () {
        super()
        console.log( '[WSConnectionView] constructor()' )
    }

    mounted (): void {
        console.log( '[WSConnectionView] mounted()' )
    }
    destroyed (): void {
        console.log( '[WSConnectionView] destroyed()' )
    }

    async connect (): Promise<void> {
        try {
            console.log( '[WSConnectionView] connect() request' )
            await wsapi.ws.connectAsync( this.url, this.path, this.nsp )
            console.log( '[WSConnectionView] connect() response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async disconnect (): Promise<void> {
        try {
            console.log( '[WSConnectionView] disconnect() request' )
            await wsapi.ws.disconnect()
            console.log( '[WSConnectionView] disconnect() response' )
        } catch ( err ) {
            console.warn( err )
        }
    }

    //#region [ auth module ]
    async register (): Promise<void> {
        try {
            console.log( '[WSAuthContractComponent] register' )
            await wsapi.auth.register( {
                email: this.registerEmail,
                password: this.registerPassword,
            } )
        } catch ( err ) {
            console.warn( err )
        }
    }

    async login (): Promise<void> {
        try {
            console.log( '[WSAuthContractComponent] login' )
            await wsapi.auth.login( {
                email: this.registerEmail,
                password: this.registerPassword,
            } )
        } catch ( err ) {
            console.warn( err )
        }
    }
    async logout (): Promise<void> {
        try {
            console.log( '[WSAuthContractComponent] logout' )
            await wsapi.auth.logout()
        } catch ( err ) {
            console.warn( err )
        }
    }
    //#endregion
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
