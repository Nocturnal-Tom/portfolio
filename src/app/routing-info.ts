import { Component, Type } from "@angular/core"
import { Route } from "@angular/router";


export function isRouteInfo(route: Route): boolean {
    return route.hasOwnProperty("routeType")
}

// The entire purpose of this interface is to allow us to determine what name to give links that route to different components

export interface RouteInfo extends Route {
    pathName: string;   // The text in <a> should be this string
    routeType: "Main Page" | "Project" | "Other";
    path: string;   // Required for now
}

