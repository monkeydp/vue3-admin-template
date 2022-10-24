<template>
  <div class="layout">
    <div class="navbar">
      导航
    </div>

    <div class="content">
      <div class="content-header">头部</div>
      <main class="content-main">
        <router-view/>
      </main>
      <div class="content-footer">底部</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator'

@Component({})
export default class Layout extends Vue {

}
</script>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  color: white;

  .navbar {
    width: 200px;
    background: blue;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;

    &-header {
      height: 40px;
      background: green;
    }

    &-main {
      flex: 1;
      color: black;
    }

    &-footer {
      height: 25px;
      background: purple;
    }
  }
}
</style>
