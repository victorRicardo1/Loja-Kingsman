import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-camisas',
  templateUrl: './camisas.component.html',
  styleUrls: ['./camisas.component.css']
})
export class CamisasComponent {
  @Input() camisaFoto:string = '';
  @Input() camisaNome:string = '';
  @Input() preco:string = '';
}