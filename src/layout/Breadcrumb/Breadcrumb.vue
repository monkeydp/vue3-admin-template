<template>
  <div class="breadcrumb">
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, routes: routesMatched, paths }">
        <span v-if="!hasRedirect(routesMatched, route)">
          {{ getTitle(route) }}
        </span>
        <router-link v-else to="" @click="handleClick(route, paths, $event)">
          {{ getTitle(route) }}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import {useGo} from '@/hooks/web/UsePage'
import {getTitle} from '@/router/RouteExt'
import _ from 'lodash'
import {Component, Vue, Watch} from 'vue-facing-decorator'
import type {RouteLocationMatched, RouteLocationNormalized, RouteRecord} from 'vue-router'

@Component({})
export default class Breadcrumb extends Vue {

  private routes: RouteRecord[] = []
  private go = useGo()

  created() {
    this.getBreadcrumb()
  }

  private getTitle = getTitle

  private getBreadcrumb() {
    const matched = this.$route.matched.filter((item) => item.meta && item.meta.title)
    this.routes = matched.filter((item) => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false
    })
  }

  @Watch('$route')
  private onRouteChange(route: RouteLocationNormalized) {
    // if you go to the redirect page, do not update the breadcrumbs
    if (route.path.startsWith('/redirect/'))
      return

    this.getBreadcrumb()
  }

  private hasRedirect(routes: RouteLocationMatched[], route: RouteLocationMatched) {
    return routes.indexOf(route) !== routes.length - 1
  }

  private handleClick(route: RouteLocationMatched, paths: string[], e: Event) {
    e?.preventDefault()
    const {children, redirect, meta} = route

    if (children?.length && !redirect) {
      e?.stopPropagation()
      return
    }
    if (meta?.carryParam)
      return

    if (redirect && _.isString(redirect))
      this.go(redirect)
    else {
      let goPath = ''
      if (paths.length === 1) {
        goPath = paths[0]
      } else {
        const ps = paths.slice(1)
        const lastPath = ps.pop() || ''
        goPath = `${lastPath}`
      }
      goPath = /^\//.test(goPath) ? goPath : `/${goPath}`
      this.go(goPath)
    }
  }
}
</script>

<style lang="scss">
.breadcrumb {
  display: flex;
  padding: 0 8px;
  align-items: center;
  $item-color: #999;

  .ant-breadcrumb-link {
    color: $item-color;

    a {
      color: rgb(0 0 0 / 65%);

      &:hover {
        color: $primary-color;
      }
    }
  }

  .ant-breadcrumb-separator {
    color: $item-color;
  }
}
</style>
