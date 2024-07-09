import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticuloI } from 'src/app/global/models/articulo.interface';

@Component({
  selector: 'app-dialog-articulo',
  templateUrl: './dialog-articulo.component.html',
  styleUrls: ['./dialog-articulo.component.css']
})
export class DialogArticuloComponent implements OnInit {

  articulo: ArticuloI;

  constructor(public dialogRef: MatDialogRef<DialogArticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.articulo = {
      nombre: '',
      codigo: '',
      precioUnitario: 0
    }
  }

  saveArticulo(){
    this.dialogRef.close(this.articulo);
  }
}
