import { Component } from "@angular/core";
import { UtilityService } from "../../../../service/utility.service";

@Component({
    standalone:true,
    selector:'nav-ctr',
    templateUrl:'nav.component.html',
    styleUrl:'nav.component.scss'
})
export class NavComponent{
    constructor(public utility:UtilityService){

    }
    notification(){

    }
    menue(){
        
    }
}