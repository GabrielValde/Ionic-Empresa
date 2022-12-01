import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileTranslationPage } from './file-translation.page';

const routes: Routes = [
  {
    path: '',
    component: FileTranslationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileTranslationPageRoutingModule {}
