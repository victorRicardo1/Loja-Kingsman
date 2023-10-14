import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Camisa } from './camisa.model';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent{
  @Input() camisaFoto:string = '';
  @Input() camisaNome:string = '';
  @Input() preco:string = '';
  @Input() nome:string = '';

  @Output() adicionadoAoCarrinho = new EventEmitter<Camisa>();

  adicionarAoCarrinho(){
    const camisa = new Camisa(this.camisaNome, this.preco, this.nome, this.camisaFoto);
    this.adicionadoAoCarrinho.emit(camisa)
  }
  
}