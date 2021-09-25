import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { InsereProdutoComponent } from './insere-produto/insere-produto.component';
import { FormsModule } from '@angular/forms';
import { AlteraProdutoComponent } from './altera-produto/altera-produto.component';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutoComponent,
    InsereProdutoComponent,
    AlteraProdutoComponent,
    ConsultaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
