import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteraProdutoComponent } from './altera-produto/altera-produto.component';
import { ConsultaProdutoComponent } from './consulta-produto/consulta-produto.component';
import { InsereProdutoComponent } from './insere-produto/insere-produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

const routes: Routes = [

  {path: '', redirectTo: 'lista-produtos', pathMatch: 'full'},
  {path: 'lista-produtos', component: ListaProdutoComponent},
  {path: 'insere-produto', component: InsereProdutoComponent},
  {path: 'altera-produto/:id', component: AlteraProdutoComponent},
  {path: 'consulta-produto/:id', component: ConsultaProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
