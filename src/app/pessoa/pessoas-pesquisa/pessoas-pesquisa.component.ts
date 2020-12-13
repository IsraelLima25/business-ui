import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FiltroPessoa } from 'app/models/FiltroPessoa.model';
import { PessoaService } from 'app/services/pessoa.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

 private filtro = new FiltroPessoa();

  constructor(private pessoaService: PessoaService, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Lista Lançamentos');
  }

  pesquisar(){
      this.pessoaService.nextFiltro(this.filtro);
  }

  limparFiltro(){
    this.filtro.nome = '';
    this.pessoaService.nextFiltro(this.filtro);
  }

}
