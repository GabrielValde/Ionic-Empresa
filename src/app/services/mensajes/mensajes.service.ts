import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private Toast:ToastController, private  Alert:AlertController) { }

  async ToastMensaje(Mensaje:string,Duracion:number,position: 'top' | 'middle' | 'bottom') {
    const toast = await this.Toast.create({
      message: Mensaje,
      duration: Duracion,
      position: position
    });

    await toast.present();
  }
}
