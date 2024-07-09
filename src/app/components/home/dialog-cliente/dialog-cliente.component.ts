import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteI } from 'src/app/global/models/cliente.interface';

@Component({
  selector: 'app-dialog-cliente',
  templateUrl: './dialog-cliente.component.html',
  styleUrls: ['./dialog-cliente.component.css']
})
export class DialogClienteComponent implements OnInit {

  cliente: ClienteI;

  constructor(public dialogRef: MatDialogRef<DialogClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.cliente = {
      'nombres': '',
      'apellidos': '',
      'telefono': '',
      'direccion': ''
    }
  }

  saveCliente(){
    this.dialogRef.close(this.cliente);
  }

}
