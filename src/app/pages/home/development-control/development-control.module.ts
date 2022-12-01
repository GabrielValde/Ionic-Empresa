import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevelopmentControlPageRoutingModule } from './development-control-routing.module';

import { DevelopmentControlPage } from './development-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevelopmentControlPageRoutingModule
  ],
  declarations: [DevelopmentControlPage]
})
export class DevelopmentControlPageModule {}
