import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/Menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  Reportes:string[]=['Control de desarrolo','Control de visitas','Estadisticas de tablas','Traduccion de archivos']
  Gestion:string[]=['Usuarios','Roles','Categorias']
  Colapsar:boolean=false;
  constructor(private ColapsarService:MenuService) {
   }

   Salir(){
      this.ColapsarService.NuevoValorColapsar=true;
   }
  ngOnInit() {
    this.ColapsarService.observableColapsar.subscribe(
      valor => this.Colapsar=valor
    )
    this.ColapsarService.NuevoValorColapsar=true;
  }

}
