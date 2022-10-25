<template>
  <div class="layout">
    <a-layout style="min-height: 100vh">
      <Navbar/>

      <a-layout>
        <Header/>

        <a-layout-content class="content">
          <router-view/>
        </a-layout-content>

        <Footer/>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator'

@Component({})
export default class Layout extends Vue {
  selectedKeys = [1]
}
</script>

<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  display: flex;

  .content {
    flex: 1;
    padding: 5px;
    margin: 5px 5px 0;
    background: white;
    height: 100%;
  }
}
</style>
