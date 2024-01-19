import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UtilityService } from '../service/utility.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const utility = inject(UtilityService);
  let user = utility.decodeToken();
  if (!user) {
    return false;
  }

  if (user['role'] == "admin") {
    return true
  }
  return false;

};
