import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

  pessoas = [
    {nome : 'Israel Filho', cidade : 'Salvador', estado : 'Bahia', status : true},
    {nome : 'João Vitor', cidade : 'Salvador', estado : 'Bahia', status : true},
    {nome : 'Welson Amaral', cidade : 'Rio de Janeiro', estado : 'Rio de Janeiro', status : false},
    {nome : 'Ruan Conceição', cidade : 'Salvador', estado : 'Salvador', status : true}
  ]


}
