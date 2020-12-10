import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/primeng';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

import { FiltroPessoa } from 'app/models/FiltroPessoa.model';
import { PessoaService } from 'app/services/pessoa.service';

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
    private confirmationService: ConfirmationService) {
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
      message: 'Tem certeza que deseja excluir',
      accept: () => {
        this.excluir(pessoa);
      }      
    })    
  }

  excluir(pessoa: any){

    this.pessoaService.excluir(pessoa)
    .then(() => {
      if(this.grid.first === 0){
        this.pesquisar();
      }else{
        this.grid.first = 0;
      }

      this.toastyService.success('Pessoa excluida com sucesso');
    })
  
  }

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
