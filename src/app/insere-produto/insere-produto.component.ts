import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-insere-produto',
  templateUrl: './insere-produto.component.html',
  styleUrls: ['./insere-produto.component.css']
})
export class InsereProdutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
  }



  onSubmit(){
    //console.log(this.produto);
    this.insereProduto();
  }

  insereProduto(){
    this.produtoService.inserirProduto(this.produto).subscribe(data => {
      console.log(data);
      this.listarProduto();
    },
    error => console.log(error));
  }

  listarProduto(){
    this.router.navigate(['lista-produtos']);
  }

}
