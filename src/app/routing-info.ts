import { Component, Type } from "@angular/core"
import { Route, Routes } from "@angular/router";


type RouteType = "Main Page" | "Project" | "Layout" | "Other"

// The entire purpose of this interface is to allow us to determine what name to give links that route to different components
export interface RouteInfo extends Route {
    pathName: string;   // The text in <a> (or component) should be this string
    routeType: RouteType;    // Used when generating components, some components only interested in Main Pages, or Project etc...
    path: string;   // If we need a RouteInfo object, path will be mandatory
    children: Array<RouteInfo> | Array<Route>   // Helps a lot with the autocomplete & checking validity
}

type RouteInfos = Array<RouteInfo>

// Surprised typescript doesn't have a built-in way of detecting if an object implements and interface, this works for now.
export function isRouteInfo(route: Route): route is RouteInfo {
    return route.hasOwnProperty("routeType")
}


export function extractAllRoutes(routes: Routes): Routes {
    let allRoutes: Routes = []
    routes.forEach((route: Route) => {
        allRoutes.push(route)
        if (route.children){    
            allRoutes = allRoutes.concat(extractAllRoutes(route.children))
        }
    })
    return allRoutes
}



export function filterRouteInfoByType(routes: Routes, routeType: RouteType): RouteInfos {
    return routes.filter((route: Route) => {
        if (isRouteInfo(route)){
            const ri: RouteInfo = route as RouteInfo
            return ri.routeType == routeType
        }
        return false
    }) as RouteInfos // We know this will only ever return an array that can be casted up to this
}

export function filterOnlyUniqueRoutes(routes: Routes): Routes{
    routes = Object.assign({}, routes)
    return routes
}


class TestClass{

}

function test(ty: TestClass){
    
}

test(TestClass)