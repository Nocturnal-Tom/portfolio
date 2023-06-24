import { Route, Routes } from "@angular/router";


type RouteType = "Main Page" | "Project" | "Layout" | "Titlebar" | "Other";
type RouteInfos = RouteInfo[];


// The entire purpose of this interface is to allow us to determine what name to give links that route to different components
export interface RouteInfo extends Route {
    pathName?: string;   // The text in <a> (or component) should be this string
    routeType: RouteType;    // Used when generating components, some components only interested in Main Pages, or Project etc...
    path: string;   // forces the path property of Route to be mandatory since it must be present for RouteInfo
    children?: Array<RouteInfo> | Array<Route>;   // Helps a lot with the autocomplete & checking validity
}


export function isRouteInfo(route: Route): route is RouteInfo {
    // ESLint complains if you do route.hasOwnProperty("pathname")
    return Object.prototype.hasOwnProperty.call(route, "pathName");
}


export function extractAllRoutes(routes: Routes): Routes {
    let allRoutes: Routes = []
    routes.forEach((route: Route) => {
        allRoutes.push(route);
        if (route.children){    
            allRoutes = allRoutes.concat(extractAllRoutes(route.children));
        }
    })
    return allRoutes;
}


export function filterRouteInfoByType(routes: Routes, routeType: RouteType): RouteInfos {
    return routes.filter((route: Route) => {
        if (isRouteInfo(route)){
            return route.routeType === routeType;
        }
        return false;
    }) as RouteInfos; // We know this will only ever return an array that can be casted up to this
}

// Unique routes are defined by their path
export function filterOnlyUniqueRoutes(routes: Routes): RouteInfos {
    let knownRoutes: string[] = [];
    return routes.filter((value: Route) => {
        if (!isRouteInfo(value) || knownRoutes.includes(value.path)){
            return false;
        }
        knownRoutes.push(value.path);
        return true;
    }) as RouteInfos; // Guarenteed to be RouteInfos
}