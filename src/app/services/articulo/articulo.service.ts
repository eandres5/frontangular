import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  baseUrl = environment.endPoint;
  resultado: any;

  constructor(private http: HttpClient) { }

  // metodo para obtener toda la informacion del doccab
  getAll(page: number, size: number): Observable <any>{
    const obj = {
      "page":page,
      "size":size
    };
    this.resultado = this.http.get<any>('http://localhost:8080/apiArticulo/listArticulos');
    return this.resultado;
  }

  saveArticulo(articulo: any) {    
    this.resultado = this.http.post<any>('http://localhost:8080/apiArticulo/saveArticulo', articulo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this.resultado;
  }

  deleteArticulo(idArticulo){
    this.resultado = this.http.delete<any>('http://localhost:8080/apiArticulo/deleteArticulo/' + idArticulo);
    return this.resultado;
  }
  
}
