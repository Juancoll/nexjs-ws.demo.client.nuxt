<template lang="pug">
    div.full.flex.v-container
        v-card
            v-alert(outlined  type="warning"  border="left") See Action Result on browser Console. (Press F12 to open) 
            h1  Http Api            
            v-text-field( :value="url" label="url")
            v-btn(@click="setUrl") set      

            h1 Http Auth Local Module
            v-row
                v-col 
                    v-text-field( v-model="registerEmail" label="email")
                v-col 
                    v-text-field( v-model="registerPassword" label="password")
                v-col 
                    v-btn(@click="register") register

            h3.primary--text Local Authentication            
            v-row
                v-col 
                    v-text-field( v-model="loginEmail" label="email")
                v-col 
                    v-text-field( v-model="loginPassword" label="password")
                v-col 
                    v-btn(@click="localLogin") local login 

            v-btn(@click="localLogout") local logout                
            h3.primary--text(style="margin-top: 20px") JWT Authentication
            v-row
                v-col 
                    v-text-field( v-model="registerEmail" label="email")
                v-col 
                    v-text-field( v-model="registerPassword" label="password")
                v-col 
                    v-btn(@click="jwtLogin") JWT login    
            v-btn(@click="jwtLogout") JWT logout 
        router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { httpapi } from '@/services/httpapi';

@Component
export default class HttpConnectionView extends Vue {
    url = httpapi.url;
    registerEmail = 'juan@any.com';
    registerPassword = '123456';

    loginEmail = 'juan@any.com';
    loginPassword = '123456';

    constructor() {
        super();
        console.log('[HttpConnectionView] constructor()');
    }

    mounted(): void {
        console.log('[HttpConnectionView] mounted()');
    }
    destroyed(): void {
        console.log('[HttpConnectionView] destroyed()');
    }

    setUrl(): void {
        console.log('[HttpConnectionView] setUrl()');
        httpapi.url = this.url;
    }

    //#region  [ auth api ]
    async register(): Promise<void> {
        try {
            console.log('[HttpAuthApiView] register() request');
            const response = await httpapi.auth.authControllerRegister({
                email: this.registerEmail,
                password: this.registerPassword,
            });
            console.log('[HttpAuthApiView] register response', response.data);
        } catch (err) {
            console.warn(err);
        }
    }

    async localLogin(): Promise<void> {
        try {
            console.log('[HttpAuthApiView] localLogin request');
            const response = await httpapi.localLogin(
                this.loginEmail,
                this.loginPassword,
            );
            console.log('[HttpAuthApiView] localLogin response', response.data);
        } catch (err) {
            console.warn(err);
        }
    }
    async localLogout(): Promise<void> {
        try {
            console.log('[HttpAuthApiView] localLogout request');
            await httpapi.localLogout();
            console.log('[HttpAuthApiView] localLogout response');
        } catch (err) {
            console.warn(err);
        }
    }

    async jwtLogin(): Promise<void> {
        try {
            console.log('[HttpAuthApiView] jwtLogin() request');
            const response = await httpapi.jwtLogin(
                this.loginEmail,
                this.loginPassword,
            );
            console.log('[HttpAuthApiView] jwtLogin() response', response.data);
        } catch (err) {
            console.warn(err);
        }
    }
    jwtLogout(): void {
        try {
            console.log('[HttpAuthApiView] jwtLogout() request');
            httpapi.jwtLogout();
            console.log('[HttpAuthApiView] jwtLogout() response');
        } catch (err) {
            console.warn(err);
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
