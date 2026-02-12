import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: 'login',
    loadChildren: () =>
      import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard-module').then(m => m.DashboardModule)
  },
  {
    path: 'flights',
    loadChildren: () =>
      import('./flights/flights-module').then(m => m.FlightsModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];
