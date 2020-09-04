<template lang="pug">
    div.full.flex.v-container
        WSConnection
        WSContractBase
        WSContractAuth
        WSContractCredentials
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WSConnection from '~/components/ws/WSConnection.vue'
import WSContractAuth from '~/components/ws/WSContractAuth.vue'
import WSContractBase from '~/components/ws/WSContractBase.vue'
import WSContractCredentials from '~/components/ws/WSContractCredentials.vue'

@Component({
    components: {
        WSConnection,
        WSContractAuth,
        WSContractBase,
        WSContractCredentials
    }
})
export default class WSConnectionView extends Vue {
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
