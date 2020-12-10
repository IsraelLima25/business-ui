import { Component, OnInit } from '@angular/core';

import { FiltroPessoa } from 'app/models/FiltroPessoa.model';
import { PessoaService } from 'app/services/pessoa.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {

 private filtro = new FiltroPessoa();

  constructor(private pessoaService: PessoaService) {}

  pesquisar(){
      this.pessoaService.nextFiltro(this.filtro);
  }

  limparFiltro(){
    this.filtro.nome = '';
    this.pessoaService.nextFiltro(this.filtro);
  }

}
