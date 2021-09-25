import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from "../produto";
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produtos!: Produto[];

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {

      this.carregaListaProdutos();
  }

  private carregaListaProdutos(){
    this.produtoService.listarProdutos().subscribe(data => {
       this.produtos = data;
    });
  }

  alterarProduto(id: number){
    this.router.navigate(['altera-produto', id]);
  }

  excluirProduto(id: number){
    this.produtoService.excluirProduto(id).subscribe(data => {
      console.log(data);
      this.carregaListaProdutos();
    });
  }

  consultarProduto(id: number){
    this.router.navigate(['consulta-produto', id]);
  }

}
