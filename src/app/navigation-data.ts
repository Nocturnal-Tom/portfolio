import { Component, Type } from "@angular/core"

export class NavigationData {
    name: string;
    routerName: string;
    component: Type<any>;

    constructor(name: string, routerName: string, component: Type<any>){
        this.name = name;
        this.routerName = routerName;
        this.component = component;
    }
}