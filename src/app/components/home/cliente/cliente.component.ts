import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComponentgeneralComponent } from 'src/app/global/components/componentgeneral/componentgeneral.component';
import { constantes } from 'src/app/global/util/constantes';
import { message } from 'src/app/global/util/menssages';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { DialogClienteComponent } from '../dialog-cliente/dialog-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { ClienteI } from 'src/app/global/models/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ComponentgeneralComponent]
})
export class ClienteComponent implements OnInit {

  // variable para mensajes globales
  msg = message;
  consta = constantes;

  // Propiedades para la paginación
  totalElements: number;
  totalPages: number;
  pageSize: number = 10; // Tamaño de página predeterminado
  pageIndex: number = 0; // Página actual
  pageSizeOptions: any[] = this.consta.numeroRegistros;

  displayedColumns = ['nombres', 'apellidos', 'telefono', 'direccion', 'acciones'];


  dataSource: MatTableDataSource<any>;
  ref: DynamicDialogRef;
  formulario: FormGroup;

  listaClientes: ClienteI[];
  cols: any[];

  constructor(private _clienteService: ClienteService,
    private _comGeneral: ComponentgeneralComponent,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllClientes(this.pageIndex,this.pageSize);
  }

  getAllClientes(page, size) {
    this._clienteService.getAll(page, size).subscribe(res => {  
      this.listaClientes = res.content;
      this.totalElements = res.totalElements;
    }, error =>{
      this._comGeneral.mensajeError(error);
    });

  }

  onPageChange(event: PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllClientes(this.pageIndex, this.pageSize);
  }

  nuevoCliente(){
    const dialogRef = this.dialog.open(DialogClienteComponent, {
      panelClass: 'over-flow-y-auto',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this._clienteService.saveCliente(res).subscribe(res=>{
          this._comGeneral.mensajeExito(res.mensaje);
          this.getAllClientes(0,10);
        },error=>{
          this._comGeneral.mensajeError(error);
        });
      }
    });
  }

  deleteCliente(id){
    this._clienteService.deleteCliente(id).subscribe(res=>{
      this.getAllClientes(this.pageIndex, this.pageSize);
    });
  }

}
