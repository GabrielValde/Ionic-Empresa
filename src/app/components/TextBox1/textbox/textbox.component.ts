import { Component, OnInit } from '@angular/core';
import { Input,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 Textbox que funciona con formulario, util para trabajar con formularios extensos 
 */

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent implements OnInit {
  @Input() Tipo:string="";
  @Input() Texto:string="";
  @Input() Nombre:string="";
  @Input() Formulario!:FormGroup;
  Tipo_o:string="";
  Icono:string="eye-outline";
  Color:string="text-black"
  Mostrar(input:any){
    if (input.type=="text"){
      input.type="password"
      this.Icono="eye-outline";
    }else{
      input.type="text"
      this.Icono="eye-off-outline"
    }
  }
  Blur(event:any){
    let Elemento= event.target as HTMLInputElement;
    Elemento.style.border="solid 4px red"
  }
  Foco(event:any){
    let Elemento= event.target as HTMLInputElement;
    Elemento.style.border="solid 4px red"
  }
  constructor(private Form:FormBuilder) { }

  ngOnInit() {
    this.Tipo_o=this.Tipo;
  }

}
