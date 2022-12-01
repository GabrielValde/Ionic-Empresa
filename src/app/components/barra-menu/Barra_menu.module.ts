import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BarraMenuComponent } from './barra-menu.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [BarraMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[BarraMenuComponent]
})
export class BarraMenuModule { }
