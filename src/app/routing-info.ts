import { Component, Type } from "@angular/core"
import { Route } from "@angular/router";

// The entire purpose of this interface is to allow us to determine what name to give links that route to different components

interface RoutingInfo extends Route {
    pathName: string;
}

