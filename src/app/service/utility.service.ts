import { isPlatformBrowser } from "@angular/common";
import { EffectRef, Inject, Injectable, OnDestroy, PLATFORM_ID, effect, signal } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root'
})
export class UtilityService implements OnDestroy {

    darkModeSignal = signal<boolean>(JSON.parse(this.getValue(keyEnum.DARK_MODE) ?? "false"));
    enableMobileMenu = signal<boolean>(false);

    darkModeEffect?: EffectRef;
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {

        this.darkMode();
    }
    darkMode() {
        this.darkModeEffect = effect(() => {
            this.setValue(keyEnum.DARK_MODE, this.darkModeSignal().toString());
        })

    }


    setValue(key: keyEnum, value: string) {

        const isBrowser = isPlatformBrowser(this.platformId);
        if (isBrowser) {
            localStorage.setItem(key, value)
        }

    }
    getValue(key: keyEnum): string | null {
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
    ngOnDestroy(): void {
        this.darkModeEffect?.destroy();
    }

}
export enum keyEnum {
    TOKEN = "token",
    DARK_MODE = "dark_mode"
}
