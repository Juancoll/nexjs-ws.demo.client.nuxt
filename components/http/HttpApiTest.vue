<template lang="pug">
    div.full.flex.v-container
        v-card
            h1 Http Test Api
            h3 No Auth
            v-btn(@click="testNoAuth") No Auth Test

            h3 With Local Auth
            v-btn(@click="testLocalAuth") With Local Auth
            v-btn(@click="testLocalAuthWithRole") With Local Auth  And Role

            h3 With JWT Auth
            v-btn(@click="testJwtAuth") With JWT Auth
            v-btn(@click="testJwtAuthWithRole") With JWT Auth  And Role
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { httpapi } from '@/plugins/httpapi'

@Component
export default class HttpApiTest extends Vue {
    constructor () {
        super()
        console.log('[HttpTestApiView] constructor()')
    }

    mounted (): void {
        console.log('[HttpTestApiView] mounted()')
    }

    destroyed (): void {
        console.log('[HttpTestApiView] destroyed()')
    }

    async testNoAuth (): Promise<void> {
        try {
            console.log('[HttpTestApiView] testNoAuth() request')
            const response = await httpapi.test.testControllerTestNoAuth()
            console.log('[HttpTestApiView] testNoAuth() response', response)
        } catch (err) {
            console.error(err)
        }
    }

    async testLocalAuth (): Promise<void> {
        try {
            console.log('[HttpTestApiView] testLocalAuth() request')
            const response = await httpapi.test.testControllerTestAuthLocal()
            console.log('[HttpTestApiView] testLocalAuth() response', response)
        } catch (err) {
            console.error(err)
        }
    }

    async testLocalAuthWithRole (): Promise<void> {
        try {
            console.log('[HttpTestApiView] testLocalAuthWithRole() request')
            const response = await httpapi.test.testControllerTestAuthLocalWithRole()
            console.log(
                '[HttpTestApiView] testLocalAuthWithRole() response',
                response
            )
        } catch (err) {
            console.error(err)
        }
    }

    async testJwtAuth (): Promise<void> {
        try {
            console.log('[HttpTestApiView] testJwtAuth() request')
            const response = await httpapi.test.testControllerTestAuthJwt()
            console.log('[HttpTestApiView] testJwtAuth() response', response)
        } catch (err) {
            console.error(err)
        }
    }

    async testJwtAuthWithRole (): Promise<void> {
        try {
            console.log('[HttpTestApiView] testJwtAuthWithRole() request')
            const response = await httpapi.test.testControllerTestAuthJwtWithRole()
            console.log(
                '[HttpTestApiView] testJwtAuthWithRole() response',
                response
            )
        } catch (err) {
            console.error(err)
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
h3 {
    color: palevioletred;
    margin-top: 20px;
}
</style>
