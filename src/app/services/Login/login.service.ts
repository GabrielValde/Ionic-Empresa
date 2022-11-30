import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { MensajesService } from '../mensajes/mensajes.service';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HTTP:HttpClient,private Mensajes:MensajesService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  Logear(Usuario:any):Observable<any>{
    return this.HTTP.post<any>("https://crud-user.vercel.app/api/v1/login",Usuario,this.httpOptions).pipe(
      tap(t=>  this.Mensajes.ToastMensaje("Bienvenido",4000,"top"))
    )
  }
  
  
  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
