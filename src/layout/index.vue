<template>
  <div class="layout">
    <Navbar/>

    <div class="content">
      <Header/>
      <main class="content-main">
        <router-view/>
      </main>
      <Footer/>
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

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;

    &-main {
      flex: 1;
      color: black;
    }
  }
}
</style>
