import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bolacha } from '../model/bolacha';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BolachaService {

  constructor(private http:HttpClient) { }

  public gravar(obj:Bolacha): Observable<any>
  {
    return this.http.post("http://localhost:3000/api/produto", obj);
  }  

  public alterar(obj:Bolacha): Observable<any>{
    return this.http.put("http://localhost:3000/api/produto", obj);
  }

  public apagar(codigo:number): Observable<any> {
    return this.http.delete("http://localhost:3000/api/produto/"+codigo);
  }

  public carregar(codigo:number): Observable<any> {
    return this.http.get("http://localhost:3000/api/produto/" + codigo);
  }

  public carregarVitrine():  Observable<any>{
    return this.http.get("http://localhost:3000/api/produtos/vitrine");
  }

  public fazerBusca(termo:string): Observable<any>{
    return this.http.get("http://localhost:3000/api/produtos/busca/" + termo);
  }
}
