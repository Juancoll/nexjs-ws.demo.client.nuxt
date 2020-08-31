<template lang="pug">
  v-card.flex.v-container.h-full
    div.flex.v-container.items.h-center.v-center
        div.flex.v-container
            div COMMON VIEW FOR ANY ROLE
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class CommonView extends Vue {}
</script>
