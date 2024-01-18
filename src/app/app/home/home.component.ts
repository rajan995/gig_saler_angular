import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavComponent } from "./common/nav/nav.component";
import { SidebarComponent } from "./common/sidebar/sidebar.component";
import { FooterComponent } from "./common/footer/footer.component";

@Component({
    standalone:true,
    selector:'home',
    templateUrl:'home.component.html',
    styleUrl:'home.component.scss',
    imports:[RouterOutlet,NavComponent],
    
})
export class HomeComponent{
    constructor(){
        console.log("homecom")
    }
}