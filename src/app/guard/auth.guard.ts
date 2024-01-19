import { CanActivateFn } from '@angular/router';
import { UtilityService } from '../service/utility.service';
import { PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const utility = inject(UtilityService);
  let user= utility.decodeToken();
  
  if (!user) {
    return false;
  }

  if (user['role'] == "user" || user['role'] == "admin") {

    return true
  }
  return false;

};

