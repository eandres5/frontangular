import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  baseUrl = environment.endPoint;
  resultado: any;

  constructor(private http: HttpClient) { }

  // metodo para obtener toda la informacion del doccab
  getAll(page: number, size: number): Observable <any>{
    const obj = {
      "page":page,
      "size":size
    };
    this.resultado = this.http.get<any>('http://localhost:8080/api/listOrdenes');
    return this.resultado;
  }

  saveOrden(clienteDto: any) {    
    this.resultado = this.http.post<any>('http://localhost:8080/api/saveOrden', clienteDto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this.resultado;
  }
}
