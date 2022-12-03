import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemaforoPageRoutingModule } from './semaforo-routing.module';
import { SemaforoPage } from './semaforo.page';
@NgModule({
    declarations: [SemaforoPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SemaforoPageRoutingModule,
    ]
})
export class SemaforoPageModule {}
