<template lang="pug">
    v-list-group( @click="goToRoute(route)" v-if="children.length > 0" no-action)
        template( v-slot:activator)
            v-list-item(style="padding: 0px")
                v-list-item-icon
                    v-icon( :color="route.meta.iconColor") {{route.meta.icon}}
                v-list-item-content
                    v-list-item-title {{route.meta.title}}
                    v-list-item-subtitle {{route.meta.subtitle}}

        RouterMenuItem( v-for="(child, index) in children" :key="`${route.name}-${child.name}-${index}`" :route="child")

    v-list-item(@click="goToRoute(route)" v-else="children.length > 0" link)
        v-list-item-icon
            v-icon( :color="route.meta.iconColor") {{route.meta.icon}}

        v-list-item-content
            v-list-item-title {{route.meta.title}}
            v-list-item-subtitle {{route.meta.subtitle}}
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { RouteConfig } from 'vue-router';
import { Prop } from 'vue-property-decorator';
import router from '@/router';

@Component
export default class RouterMenuItem extends Vue {
    // props
    @Prop({ required: true, type: Object }) route:
        | RouteConfig
        | null
        | undefined;

    // computed
    public get children(): RouteConfig[] {
        if (
            !this.route ||
            !this.route.children ||
            this.route.children.length == 0
        ) {
            return [];
        }

        return this.route.children;
    }

    // actions
    public goToRoute(route: RouteConfig): void {
        router.pushIfNotCurrent(route.path);
    }

    mounted(): void {
        console.log('[RouterMenuItem] mounted');
    }
}
</script>
