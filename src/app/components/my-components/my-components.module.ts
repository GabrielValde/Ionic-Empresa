import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TextboxComponent } from '../textbox/textbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { ButtonMenuComponent } from '../button-menu/button-menu.component';
import { GroupBMenuComponent } from '../group-b-menu/group-b-menu.component';
import { BarraMenuComponent } from '../barra-menu/barra-menu.component';

@NgModule({
  declarations: [TextboxComponent,MenuComponent,ButtonMenuComponent,GroupBMenuComponent,BarraMenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[TextboxComponent,MenuComponent,ButtonMenuComponent,GroupBMenuComponent,BarraMenuComponent]
})
export class MyComponentsModule { }
