import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tarea',
    loadComponent: () => import('./pages/tarea/tarea.page').then( m => m.TareaPage)
  },
  {
    path: 'tarea-detalles/:id',
    loadComponent: () => import('./pages/tarea-detalles/tarea-detalles.page').then( m => m.TareaDetallesPage)
  },
];
