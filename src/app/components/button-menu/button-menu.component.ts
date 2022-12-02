import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from 'src/app/services/Menu/menu.service';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss'],
})
export class ButtonMenuComponent implements OnInit {
  @Input() Text:string="";
  @Input() Icon:string="";
  @Input() Link:string="";
  Estilo:string[]=[];
  @Input() TypeStyle:boolean=false;
  Colapsar:boolean=false;
  constructor(private ColapsarService:MenuService) {   
  }
  Expandir(){
    this.ColapsarService.NuevoValorColapsar=false;
  }

  ngOnInit() {
    this.ColapsarService.observableColapsar.subscribe(
      valor=> this.Colapsar=valor
    )
    this.Estilo= this.TypeStyle? ['bg-red-300','text-red-600','rounded-3xl'] : ['text-red-600','font-bold']
  }

}
