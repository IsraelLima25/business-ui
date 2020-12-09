import { Component } from '@angular/core';
import { FiltroLancamento } from 'app/models/FiltroLancamento.model';
import { LancamentoService } from 'app/services/lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [];
  filtroLancamento = new FiltroLancamento();
  totalRegistros;

  constructor(private lancamentoService: LancamentoService) {}

  public pesquisar() {
    this.filtroLancamento.pagina.page = 0;
    this.lancamentoService.nextFiltro(this.filtroLancamento);
  }

}
