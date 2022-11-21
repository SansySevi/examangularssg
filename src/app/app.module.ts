import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApiCubosService } from './services/apicubos.service';
import { CubosMarcaComponent } from './components/cubos-marca/cubos-marca.component';
import { DetallesCuboComponent } from './components/detalles-cubo/detalles-cubo.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CubosMarcaComponent,
    DetallesCuboComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiCubosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
