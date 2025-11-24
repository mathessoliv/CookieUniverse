import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
   constructor(private http: HttpClient) { }

   gravar(cliente: Cliente): Observable<any> {
     return this.http.post("http://localhost:3000/api/cliente", cliente);
   }
}
