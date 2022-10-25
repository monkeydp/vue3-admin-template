<template>
  <div class="nav-item" v-for="item in items">
    <a-menu-item v-if="!item.children|| item.children.size==0" :key="item.path">
      <router-link :to="item.path">
        <span>{{ item.label }}</span>
      </router-link>
    </a-menu-item>

    <a-sub-menu v-else :key="item.path">
      <template #title>
        <span>{{ item.label }}</span>
      </template>
      <NavItem :items="item.children"/>
    </a-sub-menu>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-facing-decorator'
import type NavItemInfo from './NavItemInfo'

@Component({})
export default class NavItem extends Vue {

  @Prop()
  items!: NavItemInfo[]
}
</script>

<style lang="scss">
.nav-item {
}
</style>
