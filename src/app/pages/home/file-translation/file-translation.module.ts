import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileTranslationPageRoutingModule } from './file-translation-routing.module';

import { FileTranslationPage } from './file-translation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileTranslationPageRoutingModule
  ],
  declarations: [FileTranslationPage]
})
export class FileTranslationPageModule {}
