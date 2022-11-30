import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss'],
})
export class ButtonMenuComponent implements OnInit {
  @Input() Texto:string="";
  @Input() Icono:string="";
  constructor() { }

  ngOnInit() {}

}
