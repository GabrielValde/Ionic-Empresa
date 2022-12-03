import { Component, Input, OnInit } from '@angular/core';
import { OnlyOptions } from 'src/app/interfaces/Menu/only-options';
import { MenuService } from 'src/app/services/Menu/menu.service';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';
/**
 Este componente aloja un grupo de opciones
 */
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
  Seleccionado:boolean=false;
  Colapsar:boolean=false;
  subscribe:Subscription | undefined
  constructor(private ColapsarService:MenuService, private router:Router) { 
  }
  Expandir(){
    this.ColapsarService.NuevoValorColapsar=false;
  }
  ngOnInit() {
    this.ColapsarService.observableColapsar.subscribe(
      valor=> this.Colapsar=valor 
    )
    
    //Codigo para hacer que el acordeon de un estilo al seleccionar alguno de sus hijos

    /*this.subscribe = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      let Url= event['url'];
      console.log('The URL changed to: ' + Url.split("/")[0])
    });*/
  }
    
}
