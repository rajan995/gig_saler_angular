import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from "../../service/api.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute, RouterLink,Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'signup.component.html',
    styleUrl: 'signup.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule,RouterLink]
})
export class SignupComponent {
    form: FormGroup;
    constructor(private router:Router,private route:ActivatedRoute,private fb: FormBuilder, private api: ApiService, private _snackBar: MatSnackBar) {
        this.form = this.fb.group(
            {
                firstName: ['', [Validators.required]],
                lastName: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
            }
        )

    }

    submit() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.api.signup(this.form.value).subscribe({
                next: (data: any) => {

                    console.log(data);
                    this.router.navigate(['../login'],{relativeTo:this.route})
                    this._snackBar.open(data.message, "ok");

                }, error: (err: HttpErrorResponse) => {
                    console.log(err);

                    switch (err.status) {
                        case 0: {
                            this._snackBar.open("server not available please try again after some time");
                            break;
                        }
                        default: {
                            this._snackBar.open(err.error.message);

                        }
                    }

                }

            })
        }
    }
}