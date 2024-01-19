import { Routes } from '@angular/router';
import { adminGuard } from './guard/admin.guard';

export const routes: Routes = [
    
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(d => d.routes),
    },

    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.routes').then(d => d.routes),
        canActivate:[adminGuard]
    },
   
    {
        path: '',
        loadChildren: () => import('./app/home/main.routes').then(d => d.routes),

    },];
