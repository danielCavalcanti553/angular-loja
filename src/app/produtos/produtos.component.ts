import { Component, OnInit } from '@angular/core';
import { Produto } from "../model/produto";
import { PRODUTOS } from "../model/mock-produto";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = PRODUTOS; // produtos da lista
  carrinho: Produto[]; // produtos do carrinho
  total: number = 0;

  constructor() {
    this.carrinho = new Array<Produto>();
  }

  ngOnInit() {
  }

  addCarrinho(produto: Produto) { // metodo que recebe o produto

    //if (!this.verificaItemCarrinho(produto)) {
      this.carrinho.push(produto); // produto recebido no método é adicionado em carrinho
      //console.log(this.carrinho.length);
      this.totalCarrinho();
    //}
  }

  totalCarrinho(): void {
    let tot = 0;
    for (let item of this.carrinho) {
      tot = tot + item.preco;
    }
    this.total = tot;

  }


  verificaItemCarrinho(produto: Produto): boolean {
    let existe = false;

    for (let item of this.carrinho) {
      if (item.id === produto.id) {
        existe = true;
      }
    }

      return existe;
  }


}


  


}
