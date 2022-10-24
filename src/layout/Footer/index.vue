<template>
  <div class="footer">
    底部
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator'

@Component({})
export default class Footer extends Vue {
}
</script>

<style lang="scss">
.footer {
  height: 25px;
  background: purple;
}
</style>
