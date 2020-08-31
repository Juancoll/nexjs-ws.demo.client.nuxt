<template lang="pug">
    div.full.flex.v-container
        v-card
            h1 About
            v-alert(outlined  type="warning"  border="left") This is an about page
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class AboutView extends Vue {}
</script>

<style lang="scss" scoped>
.v-card {
  margin: 10px;
  padding: 20px;
  width: calc(100% - 20px);
}
.v-btn {
  margin: 5px;
  width: 100%;
}
</style>
