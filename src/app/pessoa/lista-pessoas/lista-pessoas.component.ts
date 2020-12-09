import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent {

  @Input() pessoas = [];

}
