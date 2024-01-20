import { Component, OnDestroy, afterNextRender } from "@angular/core";
import { ApiService } from "../../../service/api.service";
import { ResumeInterface } from "../../../interface/resume.interface";
import {  Subscription } from "rxjs";
@Component({
    standalone: true,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss'
})
export class HomeComponent implements OnDestroy{
data?:ResumeInterface;
resumeSubsctiption?:Subscription;
    constructor(private api: ApiService) {
   afterNextRender(()=>{
    this.getApiCall();
   })
    }
    getApiCall() {
      this.resumeSubsctiption=  this.api.getResume().subscribe({
            next: (data) => {
               
                this.data = data;
            },
            error: (err) => {

            }
        })
    }
    ngOnDestroy(): void {
        this.resumeSubsctiption?.unsubscribe();
    }
}