import { Component, OnInit } from '@angular/core';
import { ArticuloI } from 'src/app/global/models/articulo.interface';
import { ClienteI } from 'src/app/global/models/cliente.interface';
import { OrdenI } from 'src/app/global/models/orden.interface';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-dialog-orden',
  templateUrl: './dialog-orden.component.html',
  styleUrls: ['./dialog-orden.component.css']
})
export class DialogOrdenComponent implements OnInit {

  orden: OrdenI;
  listaClientes: ClienteI[];
  listaArticulos: ArticuloI[];
  listaDetalleArticulo: any[];
  pageSize: number = 10; // Tamaño de página predeterminado
  pageIndex: number = 0; // Página actual
  constructor(private _articuloService: ArticuloService,
    private _clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.orden = {
      codigo:'',
      detalleOrdenArticulo: [],
      totalArticulos: 0
    }
    this.getAllArticulos(this.pageIndex, this.pageSize);
    this.getAllClientes(this.pageIndex, this.pageSize);
  }

  getAllArticulos(page, size){
    this._articuloService.getAll(page, size).subscribe(res=>{
      this.listaArticulos = res.content;
    });
  }

  getAllClientes(page, size){
    this._clienteService.getAll(page, size).subscribe(res=>{
      this.listaClientes = res.content;
    });
  }

  saveOrden(){

  }

  addArticulo(){

  }

  adddetalles() {
    this.listaDetalleArticulo.push({ nombredetalle: '', descripcion: '' });
  }

}
