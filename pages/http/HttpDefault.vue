<template lang="pug">
    div.full.flex.v-container
        v-card
            h1  Http Default Api            
            v-row
                v-col 
                    v-btn(@click="getHello") getHello() ( .../api/ )
                v-col 
                    v-btn(@click="getPackage") getPackage() ( .../api/package )           
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { httpapi } from '@/services/httpapi';

@Component
export default class HttpDefaultView extends Vue {
    constructor() {
        super();
        console.log('[HttpDefaultView] constructor()');
    }

    mounted(): void {
        console.log('[HttpDefaultView] mounted()');
    }
    destroyed(): void {
        console.log('[HttpDefaultView] destroyed()');
    }

    async getHello(): Promise<void> {
        try {
            console.log('[HttpDefaultView] getHello() ( .../api/ )');
            const response = await httpapi.default.appControllerGetHello();
            console.log('[HttpDefaultView] getHello() response', response.data);
        } catch (err) {
            console.warn(err);
        }
    }

    async getPackage(): Promise<void> {
        try {
            console.log('[HttpDefaultView] getPackage() ( .../api/package )');
            const response = await httpapi.default.appControllerGetPackage();
            console.log(
                '[HttpDefaultView] getPackage() response',
                response.data,
            );
        } catch (err) {
            console.warn(err);
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
