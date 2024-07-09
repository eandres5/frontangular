import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentgeneralComponent } from 'src/app/global/components/componentgeneral/componentgeneral.component';
import { message } from 'src/app/global/util/menssages';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ComponentgeneralComponent]
})
export class LoginComponent implements OnInit, OnDestroy {

  //variable para mostrar la contraseña
  usuario: any;
  value: string;
  msg = message;
  formulario: FormGroup;
  
  constructor(private _comGeneral: ComponentgeneralComponent,
    private _router: Router,
    private formBuilder: FormBuilder,
    private _spinnerService: SpinnerService,
    private _cookieService: CookieService) { }

  ngOnInit(): void {
    // this._cookieService.set(this.msg.authToken, 'TOKEN');
    // this._spinnerService.verSpinner();
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      // ...
    });
  }

  ngOnDestroy(): void {
    // se debe destruir la conexion al login
  }

  login(){
    if (this.formulario.valid) {
      this._router.navigate(['/home/cliente/clientes']);
    } else {
      this._comGeneral.mensajeError(message.ERROR_CAMPOS_REQUERIDOS);
    }
  }

}