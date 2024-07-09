import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComponentgeneralComponent } from 'src/app/global/components/componentgeneral/componentgeneral.component';
import { ArticuloI } from 'src/app/global/models/articulo.interface';
import { constantes } from 'src/app/global/util/constantes';
import { message } from 'src/app/global/util/menssages';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';
import { DialogArticuloComponent } from '../dialog-articulo/dialog-articulo.component';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  providers: [ComponentgeneralComponent]
})
export class ArticuloComponent implements OnInit {
 // variable para mensajes globales
 msg = message;
 consta = constantes;

 // Propiedades para la paginación
 totalElements: number;
 totalPages: number;
 pageSize: number = 10; // Tamaño de página predeterminado
 pageIndex: number = 0; // Página actual
 pageSizeOptions: any[] = this.consta.numeroRegistros;

 displayedColumns = ['nombre', 'codigo', 'precioUnitario', 'acciones'];


 dataSource: MatTableDataSource<any>;
 ref: DynamicDialogRef;
 formulario: FormGroup;

 listaArticulos: ArticuloI[];
 cols: any[];

 constructor(private _articuloService: ArticuloService,
   private _comGeneral: ComponentgeneralComponent,
   public dialog: MatDialog
 ) { }

  ngOnInit(): void {
    this.getAllArticulos(this.pageIndex, this.pageSize);
  }

  getAllArticulos(page, size){
    this._articuloService.getAll(page, size).subscribe(res=>{
      this.listaArticulos = res.content;
      this.totalElements = res.totalElements;
    });
  }

  onPageChange(event: PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllArticulos(this.pageIndex, this.pageSize);
  }

  newArticulo(){
    const dialogRef = this.dialog.open(DialogArticuloComponent, {
      panelClass: 'over-flow-y-auto',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this._articuloService.saveArticulo(res).subscribe(res=>{
          this._comGeneral.mensajeExito(res.mensaje);
          this.getAllArticulos(this.pageIndex, this.pageSize);
        },error=>{
          this._comGeneral.mensajeError(error);
        });
      }
    });
  }

  deleteArticulo(id){
    this._articuloService.deleteArticulo(id).subscribe(res=>{
      this.getAllArticulos(this.pageIndex, this.pageSize);
    });
  }

}
