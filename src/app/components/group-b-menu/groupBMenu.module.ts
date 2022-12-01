import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { GroupBMenuComponent } from './group-b-menu.component';
@NgModule({
  declarations: [GroupBMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[GroupBMenuComponent]
})
export class GroupBMenuModule { }
