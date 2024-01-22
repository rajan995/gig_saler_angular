import { Routes } from "@angular/router";
import { NotFoundComponent } from "./notFound/notfound.component";
import { GigComponent } from "./gig/gig.component";
import { MainComponent } from "./main.component";
import { HomeComponent } from "./home/home.component";
import path from "path";
import { GigDetails } from "./gig/gigDetails/gigDetails.component";

export const routes: Routes = [
    {

        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }, {
                path: 'gig',
                component: GigComponent,
            },
            {
                path: 'details',
                component: GigDetails
            }




        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];