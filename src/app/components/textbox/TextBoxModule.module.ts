import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TextboxComponent } from './textbox.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TextboxComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[TextboxComponent]
})
export class TextBoxModule { }
