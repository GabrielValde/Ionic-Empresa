import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopmentControlPage } from './development-control.page';

const routes: Routes = [
  {
    path: '',
    component: DevelopmentControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopmentControlPageRoutingModule {}
