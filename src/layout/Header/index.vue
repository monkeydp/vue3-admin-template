<template>
  <div class="header">
    <a-layout-header class="layout-header">
      <Breadcrumb/>
    </a-layout-header>
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
  .layout-header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 48px;
    line-height: 48px;
    padding: 0;
    background: white;
  }
}
</style>
