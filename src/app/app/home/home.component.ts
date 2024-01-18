import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    standalone:true,
    selector:'home',
    templateUrl:'home.component.html',
    styleUrl:'home.component.scss',
    imports:[RouterOutlet]
})
export class HomeComponent{
    constructor(){
        console.log("homecom")
    }
}