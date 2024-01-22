import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
@Component({
    standalone:true,
    selector:'gig',
    templateUrl:'gig.component.html',
    styleUrl:'gig.component.scss',
    imports:[RouterLink]
})
export class GigComponent{
    datas = [1,2,3,4,5,6,7,8,9,10]
    constructor(){}
}