import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/Menu/menu.service';
import { OnlyOptions } from 'src/app/interfaces/Menu/only-options';
import { AccordionOptions } from 'src/app/interfaces/Menu/Accordion-options';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  
  Only_Options:OnlyOptions[]=[
    {
      Text:"Semaforo Corporativo",
      Icon:"layers-outline",
      Url:"/home/semaforo"
    },
    {
      Text:"Reportes O&M",
      Icon:"briefcase-outline",
      Url:"/home/oym-reports"
    }
  ]

  AccordeonOptions:AccordionOptions[]=[
    {
      Text:"Reportes administrativos",
      Icon:"speedometer-outline",
      Value:"First",
      Options:[
        {
          Text:"Control de desarrolo",
          Icon:"",
          Url:"/home/development-control"
        },
        {
          Text:"Control de visitas",
          Icon:"",
          Url:"/home/control-of-visits"
        },
        {
          Text:"Estadisticas de tablas",
          Icon:"",
          Url:"/home/table-statistics"
        },
        {
          Text:"Traduccion de archivos",
          Icon:"",
          Url:"/home/file-translation"
        }
      ]
    },
    {
      Text:"Gestion administrativa",
      Icon:"settings-outline",
      Value:"Second",
      Options:[
        {
          Text:"Usuarios",
          Icon:"",
          Url:"/home/users"
        },
        {
          Text:"Roles",
          Icon:"",
          Url:"/home/roles"
        },
        {
          Text:"Categorias",
          Icon:"Roles",
          Url:"/home/categories"
        }
      ]
    }
  ]

  Valores:string[]=[]
  Colapsar:boolean=false;
  constructor(private ColapsarService:MenuService) {
   }
   Restablecer(){
    clearTimeout(this.Timer)
  }

   Timer:any;
   Salir(){
      this.Timer= setTimeout(() => {
        this.ColapsarService.NuevoValorColapsar=true;  
      }, 2500);
      
   }
  ngOnInit() {
    this.ColapsarService.observableColapsar.subscribe(
      valor => this.Colapsar=valor
    )
    this.ColapsarService.NuevoValorColapsar=true;

    this.Valores= this.AccordeonOptions.map(data => data.Value)
  }

}
