import type {RouteMeta, RouteRecordName} from 'vue-router'
import _ from 'lodash'

export function getTitle(route: { name?: RouteRecordName, meta?: RouteMeta }): string | null {
    if (
        route.meta
        && _.isString(route.meta.title)
        && !_.isEmpty(route.meta.title)
    )
        return route.meta.title

    if (_.isString(route.name) && !_.isEmpty(route.name))
        return route.name

    return null
}
