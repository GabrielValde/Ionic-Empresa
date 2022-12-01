import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlOfVisitsPage } from './control-of-visits.page';

const routes: Routes = [
  {
    path: '',
    component: ControlOfVisitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlOfVisitsPageRoutingModule {}
