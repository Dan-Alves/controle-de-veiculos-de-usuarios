import { VeiculoClienteUpdateComponent } from './components/veiculo/veiculo-cliente-update/veiculo-cliente-update.component';
import { VeiculoClienteReadComponent } from './components/veiculo/veiculo-cliente-read/veiculo-cliente-read.component';
import { VeiculoFipeComponent } from './views/veiculo-fipe/veiculo-fipe.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { VeiculoClienteCreateComponent } from './components/veiculo/veiculo-cliente-create/veiculo-cliente-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { VeiculoClienteDeleteComponent } from './components/veiculo/veiculo-cliente-delete/veiculo-cliente-delete.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "usuarios",
    component: UsuarioCrudComponent
  },
  {
    path: "usuarios/create",
    component: UsuarioCreateComponent
  },
  {
    path: "veiculos",
    component: VeiculoFipeComponent
  },
  {
    path: "veiculos/view/:id",
    component: VeiculoClienteReadComponent
  },
  {
    path: "usuarios/update/:id",
    component: UsuarioUpdateComponent
  },
  {
    path: "veiculos/update/:id",
    component: VeiculoClienteUpdateComponent
  },
  {
    path: "veiculos/create/:id",
    component: VeiculoClienteCreateComponent
  },
  {
    path: "usuarios/delete/:id",
    component: UsuarioDeleteComponent
  },
  {
    path: "veiculos/delete/:id",
    component: VeiculoClienteDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
