import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavComponent } from "./common/nav/nav.component";
import { SidebarComponent } from "./common/sidebar/sidebar.component";
import { FooterComponent } from "./common/footer/footer.component";

@Component({
    standalone:true,
    selector:'main',
    templateUrl:'main.component.html',
    styleUrl:'main.component.scss',
    imports:[RouterOutlet,NavComponent,SidebarComponent],
    
})
export class MainComponent{
    constructor(){
       
    }
  
}