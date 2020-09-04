<template lang="pug">
    img(:src="logo")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LogoComponent extends Vue {
    logo = require('~/assets/icons/icon_256.png');
}
</script>
