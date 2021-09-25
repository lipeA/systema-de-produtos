import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-altera-produto',
  templateUrl: './altera-produto.component.html',
  styleUrls: ['./altera-produto.component.css']
})
export class AlteraProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  id!: number;

  constructor(private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produtoService.consultarProduto(this.id).subscribe( data => {
      this.produto = data;
    }, 
    error => console.log(error)
    );
  }

  onSubmit(){
    this.produtoService.alterarProduto(this.id, this.produto).subscribe( data => {
      this.listarProdutos();
    }, error => console.log(error)
    );

  }

  listarProdutos(){
    this.router.navigate(['/lista-produtos']);
  }

}
