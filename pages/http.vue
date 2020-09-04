<template lang="pug">
    div.full.flex.v-container
        HttpConnection
        HttpApiDefault
        HttpApiTest
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HttpApiDefault from '~/components/http/HttpApiDefault.vue'
import HttpApiTest from '~/components/http/HttpApiTest.vue'
import HttpConnection from '~/components/http/HttpConnection.vue'

@Component({
    components: {
        HttpConnection,
        HttpApiDefault,
        HttpApiTest
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
