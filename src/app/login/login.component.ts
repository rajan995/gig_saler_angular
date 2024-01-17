import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from "../service/api.service";
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule,CommonModule,]
})
export class LoginComponent {
    form: FormGroup;
    constructor(private fb: FormBuilder, private api: ApiService,private _snackBar: MatSnackBar) {
        this.form = this.fb.group(
            {
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
            }
        )

    }

    submit() {
        this._snackBar.open("work","new");
        this.form.markAllAsTouched();
  
        console.log("submit")
        
        if (this.form.valid) {
            this.api.login(this.form.value).subscribe(data=>{
                console.log(data);
                this._snackBar.open("work","new");
            },err=>{
                console.log(err);
            })
        }
    }
}