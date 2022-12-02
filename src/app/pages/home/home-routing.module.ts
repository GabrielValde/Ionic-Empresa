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
        path: 'administrativeReports/development-control',
        loadChildren: () => import('./development-control/development-control.module').then( m => m.DevelopmentControlPageModule)
      },
      {
        path: 'oym-reports',
        loadChildren: () => import('./oym-reports/oym-reports.module').then( m => m.OYMReportsPageModule)
      },
      {
        path: 'administrativeReports/control-of-visits',
        loadChildren: () => import('./control-of-visits/control-of-visits.module').then( m => m.ControlOfVisitsPageModule)
      },
      {
        path: 'administrativeManagement/users',
        loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
      },
      {
        path: 'administrativeManagement/roles',
        loadChildren: () => import('./roles/roles.module').then( m => m.RolesPageModule)
      },
      {
        path: 'administrativeManagement/categories',
        loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'administrativeReports/table-statistics',
        loadChildren: () => import('./table-statistics/table-statistics.module').then( m => m.TableStatisticsPageModule)
      },
      {
        path: 'administrativeReports/file-translation',
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
