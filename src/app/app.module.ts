import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//others
import { KeysPipe } from './pipes/keys.pipe';
import { app_routing } from './app.routes';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListarComponent } from './components/listar/listar.component';
import { MyDatePickerModule } from '../assets/my-date-picker/index';

import {VacacionesService} from './services/vacaciones.service';
import { VerComponent } from './components/ver/ver.component';
import { EditarComponent } from './components/editar/editar.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgregarComponent,
    ListarComponent,
    VerComponent,
    EditarComponent,
    KeysPipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    app_routing,
    MyDatePickerModule
  ],
  providers: [
    VacacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
