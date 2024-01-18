import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UtilityService } from '../service/utility.service';
import { isPlatformBrowser } from '@angular/common';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const  utility = inject(UtilityService);
 const platformId = inject(PLATFORM_ID);
 const isBrowser = isPlatformBrowser(platformId);
 
 let user :any;

if(isBrowser){
  user =  utility.decodeToken();
}
 
if(!user){
  return false;
}

 if(user['role'] == "admin"){
  
  return true
 }
 return false;
  
};
