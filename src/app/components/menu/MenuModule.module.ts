import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { GroupBMenuModule	 } from '../group-b-menu/groupBMenu.module';
import { ButtonMenuModule } from '../button-menu/ButonMenu.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    GroupBMenuModule,
    ButtonMenuModule,
    FormsModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
