<template>
  <div class="navbar">
    导航
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator'

@Component({})
export default class Navbar extends Vue {
}
</script>

<style lang="scss">
.navbar {
  width: 200px;
  background: blue;
}
</style>
