import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableStatisticsPageRoutingModule } from './table-statistics-routing.module';

import { TableStatisticsPage } from './table-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableStatisticsPageRoutingModule
  ],
  declarations: [TableStatisticsPage]
})
export class TableStatisticsPageModule {}
