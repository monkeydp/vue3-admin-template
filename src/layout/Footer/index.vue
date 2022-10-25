<template>
  <div class="footer">
    <a-layout-footer style="text-align: center">
      Project ©2018 Created by iPotato
    </a-layout-footer>
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
  .ant-layout-footer {
    padding: 6px 15px;
  }
}
</style>
