import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID, effect, signal } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { json } from "stream/consumers";
@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    darkModeSignal = signal<boolean>( JSON.parse(this.getValue(keyEnum.DARK_MODE ) ?? "false") );

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
     
        this.darkMode();
    }
    darkMode() {
       effect(()=>{
        this.setValue(keyEnum.DARK_MODE,this.darkModeSignal().toString());
       })

    }
   

    setValue(key: keyEnum, value: string) {

        const isBrowser = isPlatformBrowser(this.platformId);
        if (isBrowser) {
             localStorage.setItem(key, value)
        }
      
    }
    getValue(key: keyEnum):string|null {
        const isBrowser = isPlatformBrowser(this.platformId);
        if (isBrowser) {
            return localStorage.getItem(key);
        }
        return null;
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
    TOKEN = "token",
    DARK_MODE = "dark_mode"
}
