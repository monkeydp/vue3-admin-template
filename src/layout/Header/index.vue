<template>
  <div class="header">
    顶部栏
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator'

@Component({})
export default class Header extends Vue {
}
</script>

<style lang="scss">
.header {
  height: 40px;
  background: green;
}
</style>
