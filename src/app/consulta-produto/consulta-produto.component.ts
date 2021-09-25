import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-consulta-produto',
  templateUrl: './consulta-produto.component.html',
  styleUrls: ['./consulta-produto.component.css']
})
export class ConsultaProdutoComponent implements OnInit {

  id!: number;
  produto!: Produto;

  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produto = new Produto();
    this.produtoService.consultarProduto(this.id).subscribe( data => {
      this.produto = data;
    });
  }


  retornarLista(){
    this.router.navigate(['lista-produtos']);
  }
}
