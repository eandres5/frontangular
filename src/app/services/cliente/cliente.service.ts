import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  baseUrl = environment.endPoint;
  resultado: any;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // metodo para obtener toda la informacion del doccab
  getAll(page: number, size: number): Observable <any>{
    const obj = {
      "page":page,
      "size":size
    };
    this.resultado = this.http.get<any>('http://localhost:8080/api/listClientes');
    return this.resultado;
  }

  saveCliente(clienteDto: any) {    
    this.resultado = this.http.post<any>('http://localhost:8080/api/saveCliente', clienteDto, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this.resultado;
  }

  deleteCliente(idCliente){
    this.resultado = this.http.delete<any>('http://localhost:8080/api/deleteCliente/' + idCliente);
    return this.resultado;
  }
}
