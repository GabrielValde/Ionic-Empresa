import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  Reportes:string[]=['Control de desarrolo','Control de visitas','Estadisticas de tablas','Traduccion de archivos']
  Gestion:string[]=['Usuarios','Roles','Categorias']
  constructor() { }

  ngOnInit() {}

}
