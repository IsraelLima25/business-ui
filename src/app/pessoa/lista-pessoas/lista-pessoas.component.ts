import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/primeng';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

import { FiltroPessoa } from 'app/models/FiltroPessoa.model';
import { PessoaService } from 'app/services/pessoa.service';
import { ErroHandlerService } from 'app/services/erro-handler.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  pessoas = [];

  filtroPessoa = new FiltroPessoa();

  totalRegistros;
  
  @ViewChild('tabela') grid;

  constructor(private pessoaService: PessoaService, private toastyService: ToastyService,
    private confirmationService: ConfirmationService, private handlerService: ErroHandlerService,
    private title: Title) {
    this.filtroPessoa.pagina.size = 5;
  }

  desativar(pessoa){    
    this.pessoaService.desativar(pessoa.codigo).
    then(()=>{
      let paginaAtual = this.grid.first / this.filtroPessoa.pagina.size;
      this.pesquisar(paginaAtual);
      this.toastyService.success('Pessoa desativada com sucesso.');
    });
  }

  ativar(pessoa){    
    this.pessoaService.ativar(pessoa.codigo).
    then(()=>{
      let paginaAtual = this.grid.first / this.filtroPessoa.pagina.size;
      this.pesquisar(paginaAtual);
      this.toastyService.success('Pessoa ativada com sucesso.');
    });
  }

  ngOnInit(): void {
    this.pessoaService.getFilter().subscribe(filtro => {
      if(filtro != undefined){
        this.filtroPessoa.nome = filtro.nome;
        this.pesquisar();
        this.grid.first = 0;
      }
    })
  }
  
  pesquisar(pagina = 0){
    this.filtroPessoa.pagina.page = pagina;
    this.pessoaService.pesquisar(this.filtroPessoa)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.pessoas = resultado.pessoas;
    });
  }

  confirm(pessoa){
    
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }      
    })    
  }

  excluir(pessoa: any){
    
    this.pessoaService.excluir(pessoa)
    .then(() => {
      this.toastyService.success('Pessoa excluída com sucesso');
    })
    .catch(err => {
      this.handlerService.handler(err)
    })     
  }

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
