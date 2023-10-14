import { Component } from '@angular/core';
import { CamisasComponent } from './camisas/camisas.component';
import{ Camisa } from './camisas/camisa.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loja';
  carrinho: Camisa[] = [];
  carrinhoVisivel = false;
  iconeCarrinhoVisivel = true;
  maxCamisasNoCarrinho = 4;
  camisasAdicionadas = 0; 

  adicionarAoCarrinho(camisa: Camisa){
    if (this.camisasAdicionadas >= this.maxCamisasNoCarrinho) {
      this.carrinho.pop();
    }
    this.carrinho.unshift(camisa);
    this.camisasAdicionadas++;
  }

  exibirCarrinho() {
    this.carrinhoVisivel = true;
    this.iconeCarrinhoVisivel = false;
    console.log('acessado');

    const carrinhoContent = document.getElementById('carrinhoContent');
    if (carrinhoContent) {
    carrinhoContent.scrollTop = carrinhoContent.scrollHeight;
    }
  }

  fecharCarrinho() {
    this.carrinhoVisivel = false;
    this.iconeCarrinhoVisivel = true;
    console.log("acessado")
  }
}
