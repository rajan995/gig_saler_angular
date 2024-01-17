import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.development";

@Injectable({providedIn:'root'})
export class ApiService{
    constructor(private http:HttpClient ){
        
    }
    login(data:any){
    return this.http.post(`${environment.baseUrl}/auth/login`,data)
    }
    signup(data:any){
        return this.http.post(`${environment.baseUrl}/auth/signup`,data);
    }
}

