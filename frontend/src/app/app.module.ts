import { VeiculoFipeComponent } from './views/veiculo-fipe/veiculo-fipe.component';
import { VeiculoReadComponent } from './components/veiculo/veiculo-read/veiculo-read.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatCardModule  } from '@angular/material/card';
import { MatListModule  } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { MatButtonModule  } from '@angular/material/button';
import { MatSnackBarModule  } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/br';
import { VeiculoClienteReadComponent } from './components/veiculo/veiculo-cliente-read/veiculo-cliente-read.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { VeiculoClienteUpdateComponent } from './components/veiculo/veiculo-cliente-update/veiculo-cliente-update.component';

registerLocaleData(localeBR);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    UsuarioCrudComponent,
    UsuarioCreateComponent,
    UsuarioReadComponent,
    VeiculoReadComponent,
    VeiculoFipeComponent,
    VeiculoClienteReadComponent,
    UsuarioUpdateComponent,
    VeiculoClienteUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
