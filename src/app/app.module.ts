import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing ,appRoutingProviders} from './app.routing';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FrutaComponent} from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { HomeComponent} from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';
import { ModuloComponent} from './modulo/modulo.component';
import { CochesComponent} from './coches/coches.component';
import { conversorPipe} from './pipes/conversor.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    ContactoComponent,
    HomeComponent,
    ModuloComponent,
    CochesComponent,
    conversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
