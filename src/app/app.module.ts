import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HeroComponent } from './hero/hero.component';

import { ClienteService } from './clientes/cliente.service';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';

import { FormsModule } from '@angular/forms';

const routes: Routes =[
  /*{path:'', redirectTo:'/clientes', pathMatch: 'full'},*/
  {path:'',component:HomeComponent},
  {path:'directivas',component:DirectivaComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'clientes/:id',component:FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    HeroComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
