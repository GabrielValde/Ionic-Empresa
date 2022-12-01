import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-b-menu',
  templateUrl: './group-b-menu.component.html',
  styleUrls: ['./group-b-menu.component.scss'],
})
export class GroupBMenuComponent implements OnInit {
  @Input() Texto:string="";
  @Input() Valor:string="";
  @Input() Items:string[]=[];
  @Input() Icono:string="";
  constructor() { }

  ngOnInit() {}

}
