import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ComponentgeneralComponent } from './global/components/componentgeneral/componentgeneral.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login/login.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { PasswordModule } from 'primeng/password';
import { NgxSpinnerModule } from "ngx-spinner";
import { CookieService } from 'ngx-cookie-service';
import { GeneralinterceptorService } from './core/interceptors/generalinterceptor.service';
import { MensajeserrorComponent } from './global/components/mensajeserror/mensajeserror.component';
import { DropdownModule } from 'primeng/dropdown';
import { ClienteComponent } from './components/home/cliente/cliente.component';
import { DialogClienteComponent } from './components/home/dialog-cliente/dialog-cliente.component';
import {MatInputModule} from '@angular/material/input';
import { ArticuloComponent } from './components/home/articulo/articulo.component';
import { DialogArticuloComponent } from './components/home/dialog-articulo/dialog-articulo.component';
import { OrdenComponent } from './components/home/orden/orden.component';
import { DialogOrdenComponent } from './components/home/dialog-orden/dialog-orden.component'; 
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentgeneralComponent,
    LoginComponent,
    ErrorpageComponent,
    MensajeserrorComponent,
    ClienteComponent,
    DialogClienteComponent,
    ArticuloComponent,
    DialogArticuloComponent,
    OrdenComponent,
    DialogOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MatTableModule,
    MatDialogModule,
    DynamicDialogModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    PasswordModule,
    NgxSpinnerModule,
    DropdownModule,
    MatInputModule,
    MatSelectModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 2000,
      closeButton: true
    }),
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralinterceptorService,
      multi: true
    },
    CookieService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
