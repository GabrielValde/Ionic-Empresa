import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private Colapsar:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get observableColapsar(){
    return this.Colapsar.asObservable();
  }
  set NuevoValorColapsar(dato:boolean){
    this.Colapsar.next(dato);
  }
  constructor() { }
}
