import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlOfVisitsPageRoutingModule } from './control-of-visits-routing.module';

import { ControlOfVisitsPage } from './control-of-visits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlOfVisitsPageRoutingModule
  ],
  declarations: [ControlOfVisitsPage]
})
export class ControlOfVisitsPageModule {}
