<template>
  <div class="navbar">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="navbar-header">{{ title }}</div>

      <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
      >
        <NavItem :items="items"/>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-facing-decorator'
import {routes} from '@/router'
import type NavItemInfo from './NavItemInfo'
import type {RouteRecordRaw} from 'vue-router'
import _ from 'lodash'
import {getTitle} from '@/router/RouteExt'

@Component({})
export default class Navbar extends Vue {

  private title = import.meta.env.VITE_APP_TITLE

  private items: NavItemInfo[] = []
  private selectedKeys: string[] = []
  private collapsed = false

  created() {
    this.items = this.routes2items(routes)
    const first = this.items[0]
    if (first)
      this.selectedKeys = [first.path]
  }

  private routes2items(routes: RouteRecordRaw[]): NavItemInfo[] {
    return routes.map(it => {
      const label = getTitle(it) ?? '<未设置>'
      const info: NavItemInfo = {
        path: it.path,
        label: label,
      }
      if (it.children && !_.isEmpty(it.children)) {
        if (it.children.length == 1)
          return this.routes2items(it.children)[0]
        info['children'] = this.routes2items(it.children)
      }

      return info
    })
  }
}
</script>

<style lang="scss">
.navbar {

  &-header {
    color: white;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
    height: 48px;
    line-height: 48px;
    padding-left: 24px;
  }

  .ant-layout-sider {
    height: 100%;
  }
}
</style>
