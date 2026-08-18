import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login),
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('./pages/forgot-password/forgot-password').then(m => m.ForgotPassword),
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then(m => m.Profile),
    },
    {
        path: '**',
        redirectTo: 'login',
    },
];


