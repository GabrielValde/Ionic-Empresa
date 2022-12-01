import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableStatisticsPage } from './table-statistics.page';

const routes: Routes = [
  {
    path: '',
    component: TableStatisticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableStatisticsPageRoutingModule {}
