import { Component, Input, OnInit } from '@angular/core';
import { OnlyOptions } from 'src/app/interfaces/Menu/only-options';
import { MenuService } from 'src/app/services/Menu/menu.service';

@Component({
  selector: 'app-group-b-menu',
  templateUrl: './group-b-menu.component.html',
  styleUrls: ['./group-b-menu.component.scss'],
})
export class GroupBMenuComponent implements OnInit {
  @Input() Texto:string="";
  @Input() Valor:string="";
  @Input() Items:OnlyOptions[]=[];
  @Input() Icono:string="";
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
  }
    
}
