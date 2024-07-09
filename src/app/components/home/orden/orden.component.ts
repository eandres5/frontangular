import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComponentgeneralComponent } from 'src/app/global/components/componentgeneral/componentgeneral.component';
import { OrdenI } from 'src/app/global/models/orden.interface';
import { constantes } from 'src/app/global/util/constantes';
import { message } from 'src/app/global/util/menssages';
import { OrdenService } from 'src/app/services/orden/orden.service';
import { DialogOrdenComponent } from '../dialog-orden/dialog-orden.component';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css'],
  providers: [ComponentgeneralComponent]
})
export class OrdenComponent implements OnInit {

  // variable para mensajes globales
 msg = message;
 consta = constantes;

 // Propiedades para la paginación
 totalElements: number;
 totalPages: number;
 pageSize: number = 10; // Tamaño de página predeterminado
 pageIndex: number = 0; // Página actual
 pageSizeOptions: any[] = this.consta.numeroRegistros;

 displayedColumns = ['cliente', 'codigo', 'totalArticulos'];


 dataSource: MatTableDataSource<any>;
 ref: DynamicDialogRef;
 formulario: FormGroup;

 listOrdenes: OrdenI[];
 cols: any[];

 constructor(private _ordenService: OrdenService,
   private _comGeneral: ComponentgeneralComponent,
   public dialog: MatDialog
 ) { }

  ngOnInit(): void {
    this.getAllOrdenes(this.pageIndex, this.pageSize);
  }

  getAllOrdenes(page, size){
    this._ordenService.getAll(page, size).subscribe(res=>{
      this.listOrdenes = res.content;
      this.totalElements = res.totalElements;
    });
  }

  newOrden(){
    const dialogRef = this.dialog.open(DialogOrdenComponent, {
      width: '50%',
      panelClass: 'over-flow-y-auto',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this._ordenService.saveOrden(res).subscribe(res=>{
          this._comGeneral.mensajeExito(res.mensaje);
          this.getAllOrdenes(this.pageIndex, this.pageSize);
        },error=>{
          this._comGeneral.mensajeError(error);
        });
      }
    });
  }

  onPageChange(event: PageEvent){
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllOrdenes(this.pageIndex, this.pageSize);
  }

}
