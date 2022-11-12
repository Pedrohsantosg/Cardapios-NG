import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { ListaCardapiosComponent } from './components/lista-cardapios/lista-cardapios.component';
import {HttpClientModule}  from '@angular/common/http' 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardapioComponent,
    ListaCardapiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
