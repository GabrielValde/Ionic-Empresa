import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.scss'],
})
export class BarraMenuComponent implements OnInit {
  Secciones:string[]=["layers-outline","speedometer-outline","settings-outline"]
  constructor() { }

  ngOnInit() {}

}
