import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TextboxNoFormComponent } from './textboxNoForm.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [TextboxNoFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[TextboxNoFormComponent]
})
export class TextBoxNoFormModule { }
