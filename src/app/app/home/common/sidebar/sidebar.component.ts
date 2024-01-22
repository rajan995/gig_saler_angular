import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { UtilityService } from "../../../../service/utility.service";

@Component({
    standalone: true,
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.scss',
    imports: [RouterLink, RouterLinkActive]
})
export class SidebarComponent {
  
    menus: Array<Record<string, any>> = [{
        name: 'Home',
        url: '',

    },
    {
        name: 'About',
        url: 'about'
    },
    {
        name: 'Experience',
        url: 'experience'
    },
    {
        name: 'Works',
        url: 'work'
    },
    {
        name: 'Gigs',
        url: 'gig'
    },
    {
        name: 'Orders',
        url: 'order'
    },
    {
        name: 'Chat',
        url: 'chat'
    }
        ,
    {
        name: 'Contact',
        url: 'contact'
    }
    ]
    constructor(public utility:UtilityService) {

    }
    hideSideMenu(){
 this.utility.enableMobileMenu.set(false);
    }
}