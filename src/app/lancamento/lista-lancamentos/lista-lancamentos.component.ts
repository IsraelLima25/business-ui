import { Component } from '@angular/core';
import { FiltroLancamento } from 'app/models/FiltroLancamento.model';
import { LancamentoService } from 'app/services/lancamento.service';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';

@Component({
  selector: 'app-lista-lancamentos',
  templateUrl: './lista-lancamentos.component.html',
  styleUrls: ['./lista-lancamentos.component.css']
})

export class ListaLancamentosComponent   {

  lancamentos = [];
  filtroLancamento = new FiltroLancamento();
  totalRegistros;

  constructor(private lancamentoService: LancamentoService) {
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
