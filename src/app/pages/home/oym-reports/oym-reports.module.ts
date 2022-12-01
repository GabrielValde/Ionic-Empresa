import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OYMReportsPageRoutingModule } from './oym-reports-routing.module';

import { OYMReportsPage } from './oym-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OYMReportsPageRoutingModule
  ],
  declarations: [OYMReportsPage]
})
export class OYMReportsPageModule {}
