import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'semaforo',
        loadChildren: () => import('./semaforo/semaforo.module').then( m => m.SemaforoPageModule)
      },
      {
        path: 'development-control',
        loadChildren: () => import('./development-control/development-control.module').then( m => m.DevelopmentControlPageModule)
      },
      {
        path: 'oym-reports',
        loadChildren: () => import('./oym-reports/oym-reports.module').then( m => m.OYMReportsPageModule)
      },
      {
        path: 'control-of-visits',
        loadChildren: () => import('./control-of-visits/control-of-visits.module').then( m => m.ControlOfVisitsPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then( m => m.RolesPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'table-statistics',
        loadChildren: () => import('./table-statistics/table-statistics.module').then( m => m.TableStatisticsPageModule)
      },
      {
        path: 'file-translation',
        loadChildren: () => import('./file-translation/file-translation.module').then( m => m.FileTranslationPageModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
