import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FiltroPessoa } from 'app/models/FiltroPessoa.model';
import { PessoaService } from 'app/services/pessoa.service';
import { ToastyService } from 'ng2-toasty';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { ConfirmationService } from 'primeng/primeng';

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
