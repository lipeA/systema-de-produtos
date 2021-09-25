import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:8080/pcontroller/produtos";

  constructor(private httpClient: HttpClient) { }

  listarProdutos(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(`${this.url}`);
  }

  inserirProduto(produto: Produto): Observable<Object>{
    return this.httpClient.post(`${this.url}`, produto);
  }

  alterarProduto(id: number, produto: Produto): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, produto);
  }

  excluirProduto(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  consultarProduto(id: number): Observable<Produto>{
    return this.httpClient.get<Produto>(`${this.url}/${id}`);
  }
  
}
