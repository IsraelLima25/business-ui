import { Component, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

import { FiltroLancamento } from 'app/models/FiltroLancamento.model';
import { LancamentoService } from 'app/services/lancamento.service';
import { ConfirmationService } from 'primeng/primeng';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-lista-lancamentos',
  templateUrl: './lista-lancamentos.component.html',
  styleUrls: ['./lista-lancamentos.component.css']
})

export class ListaLancamentosComponent   {

  lancamentos = [];
  filtroLancamento = new FiltroLancamento();
  totalRegistros;
  @ViewChild('tabela') grid;

  constructor(private lancamentoService: LancamentoService, private confirmationService: ConfirmationService,
    private toastyService: ToastyService) {
    this.lancamentos = [];
    this.filtroLancamento.pagina.size = 5;
  }
  ngOnInit(): void {
    this.lancamentoService.getFilter().subscribe(filtro => {
      if(filtro !== undefined){
        this.filtroLancamento.descricao = filtro.descricao;
        this.filtroLancamento.dataVencimentoDe = filtro.dataVencimentoDe;
        this.filtroLancamento.dataVencimentoAte = filtro.dataVencimentoAte;
        this.pesquisar();
      }      
    });
  }

  confirm(pessoa: any){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () =>{ this.excluir(pessoa) }
    })
  }

  excluir(pessoa){
    this.lancamentoService.excluir(pessoa.codigo)
    .then(() => {
      if(this.grid.first === 0){
        this.pesquisar();
      }else{
        this.grid.first = 0;
      }

      this.toastyService.success('Pessoa excluida com sucesso');
    })
  }

  pesquisar(pagina = 0) {   
    this.filtroLancamento.pagina.page = pagina;
    this.lancamentoService.pesquisar(this.filtroLancamento)
    .then(resposta => {
      this.totalRegistros = resposta.total;
      this.lancamentos = resposta.lancamentos;
    })
  }

  aoMudarPagina(event: LazyLoadEvent) {    
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
