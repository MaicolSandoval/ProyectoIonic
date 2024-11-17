import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: 'page-register',
    loadComponent: () => import('./page-register/page-register.page').then( m => m.PageRegisterPage)
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'page-inicio',
    loadComponent: () => import('./page-inicio/page-inicio.page').then( m => m.PageInicioPage)
  },
  {
    path: 'page-estadisticas',
    loadComponent: () => import('./page-estadisticas/page-estadisticas.page').then( m => m.PageEstadisticasPage)
  },
  {
    path: 'page-configuracion',
    loadComponent: () => import('./page-configuracion/page-configuracion.page').then( m => m.PageConfiguracionPage)
  },
  {
    path: 'page-tareas',
    loadComponent: () => import('./page-tareas/page-tareas.page').then( m => m.PageTareasPage)
  },
  {
    path: 'page-crear-tareas',
    loadComponent: () => import('./page-crear-tareas/page-crear-tareas.page').then( m => m.PageCrearTareasPage)
  },
];
