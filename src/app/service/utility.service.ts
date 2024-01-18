import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() {

    }
    setValue(key: keyEnum, value: string) {
        return localStorage.setItem(key, value)
    }
    getValue(key: keyEnum) {
        return localStorage.getItem(key);
    }
    decodeToken() {
        const token = this.getValue(keyEnum.TOKEN);
        if (token) {

            let jwt = new JwtHelperService();

            if (jwt.isTokenExpired(token)) {
                return false;
            }
            return jwt.decodeToken<Record<string, any>>(token);
        } else {
            return false
        }
    }
    

}
export enum keyEnum {
    TOKEN = "token"
}