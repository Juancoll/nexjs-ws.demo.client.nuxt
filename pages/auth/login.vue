<template lang="pug">
    v-container.flex.v-container.full.items.h-center.v-center
        v-card
            div.flex.v-container
                div.flex.v-container(style="padding:2rem")
                    div(style="text-align:center;max-width:100vw;margin:2rem")
                        img(v-bind:src="logo" alt='logo' style="width:100%")
                        h4(style="margin-top:10px") Hello! let&apos;s get started
                        h5.font-weight-light Register in to continue.
                    div
                        v-form(@keyup.native.enter="login")
                            div
                                v-text-field(label="email" type='email'  v-model="email" required)
                            div
                                v-text-field(label="password"  type='password' v-model="password" required)
                            v-btn.flex.h-center.h-full.primary(@click="login") SIGN IN
                    div.h-full.flex.v-container.items.right(style="margin-top:5px")
                        router-link(to="/auth/register") ...or register
                v-progress-linear(v-if="isWaiting" indeterminate  color="primary")
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getModule } from 'vuex-module-decorators'
import AuthStore from '~/store/auth'

@Component
export default class LoginView extends Vue {
    // #region [ data ]
    public logo = require('@/assets/icons/icon_256.png');
    public email: string = 'juan@any.com';
    public password: string = '123456';
    public isWaiting = false;
    // #endregion

    private authStore: AuthStore;

    constructor () {
        super()
        this.authStore = getModule(AuthStore, this.$store)
    }

    // #region [ methods ]
    async login (): Promise<void> {
        try {
            await this.authStore.login({ email: this.email, password: this.password })
            this.$nuxt.context.redirect('/authenticated')
        } catch (err) {
            console.log(err)
        } finally {
            this.isWaiting = false
        }
    }
    // #endregion

    // #region [ private ]
    private validation (): void {
        // tslint:disable-next-line: max-line-length
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (this.email.trim() == '') {
            throw new Error('Email is empty')
        }

        if (!re.test(this.email.toLowerCase())) {
            throw new Error('Email bad format')
        }
        if (this.password.trim() == '') {
            throw new Error('Password is empty')
        }
        if (this.password.length < 6) {
            throw new Error('Password required 6 character minimum')
        }
    }
    // #endregion
}
</script>
