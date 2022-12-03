import { Component, OnInit } from '@angular/core';
import { Input,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

/*Este textbox funciona sin necesidad de un formgroup, funciona mediante NGModel, util para operaciones
que no necesiten un formulario extenso */ 
@Component({
  selector: 'app-textboxNoForm',
  templateUrl: './TextboxNoForm.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxNoFormComponent implements OnInit {
  @Input() Tipo:string="";
  @Input() Texto:string="";
  Tipo_o:string="";
  Icono:string="eye-outline";
  Color:string="text-black";
  Valor:any="";
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
