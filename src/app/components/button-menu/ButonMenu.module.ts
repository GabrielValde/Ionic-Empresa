import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ButtonMenuComponent } from './button-menu.component';
@NgModule({
  declarations: [ButtonMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[ButtonMenuComponent]
})
export class ButtonMenuModule { }
