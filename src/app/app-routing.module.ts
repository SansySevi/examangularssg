import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './components/compras/compras.component';
import { CubosMarcaComponent } from './components/cubos-marca/cubos-marca.component';
import { DetallesCuboComponent } from './components/detalles-cubo/detalles-cubo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"cubosmarca/:marca", component: CubosMarcaComponent},
  {path:"cubo/:idcubo", component: DetallesCuboComponent},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"compras", component: ComprasComponent},
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
