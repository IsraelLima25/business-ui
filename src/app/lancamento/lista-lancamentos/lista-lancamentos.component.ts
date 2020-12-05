import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-lancamentos',
  templateUrl: './lista-lancamentos.component.html',
  styleUrls: ['./lista-lancamentos.component.css']
})
export class ListaLancamentosComponent {

 @Input() lancamentos: [''];

}
