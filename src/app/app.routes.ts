import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
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
      
        loadChildren: () => import('./app/home/home.routes').then(d => d.routes),

    },];
