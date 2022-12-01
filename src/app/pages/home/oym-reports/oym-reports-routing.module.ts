import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OYMReportsPage } from './oym-reports.page';

const routes: Routes = [
  {
    path: '',
    component: OYMReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OYMReportsPageRoutingModule {}
