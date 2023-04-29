import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProjectsComponent } from "./projects/projects.component";
import { NavigationData } from "./navigation-data"

export class RoutingInfo {
    private static instance: RoutingInfo;

    routeInfo = [
        new NavigationData("", " ", AppComponent),
        new NavigationData("About Me", "/about", AboutComponent),
        new NavigationData("My Projects", "/projects", ProjectsComponent),
        new NavigationData("Contact Me", "/contact", ContactComponent)
    ]


    private constructor(){}
    

    public static getInstance(): RoutingInfo{
        if (!RoutingInfo.instance){
            RoutingInfo.instance = new RoutingInfo();
        }
        return RoutingInfo.instance;
    }

    public static getNames(): string[]{
        return ["", ""];
    }
}