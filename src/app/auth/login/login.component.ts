import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ApiService } from "../../service/api.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { UtilityService, keyEnum } from "../../service/utility.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterLink],
    providers: [UtilityService]
})
export class LoginComponent {
    form: FormGroup;
    constructor(private router:Router,private fb: FormBuilder, private api: ApiService, private _snackBar: MatSnackBar, private utilityService: UtilityService) {
        this.form = this.fb.group(
            {
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
            }
        )

    }

    submit() {
        this.form.markAllAsTouched();
        console.log("submit")
        if (this.form.valid) {
            this.api.login(this.form.value).subscribe({
                next: (data: any) => {
                    if (data.token) {
                        this.utilityService.setValue(keyEnum.TOKEN, data.token);
                     this.router.navigate(['']);
                    }
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