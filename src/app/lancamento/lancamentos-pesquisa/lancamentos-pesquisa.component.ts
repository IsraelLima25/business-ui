import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { FiltroLancamento } from 'app/models/FiltroLancamento.model';
import { CategoriaService } from 'app/services/categoria.service';
import { LancamentoService } from 'app/services/lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  lancamentos = [];
  filtroLancamento = new FiltroLancamento();
  totalRegistros;

  constructor(private lancamentoService: LancamentoService, private categoriaService: CategoriaService,
    private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Lista de lançamentos');
  }

  public pesquisar() {
    
    this.lancamentoService.nextFiltro(this.filtroLancamento);
  }

  public limparFiltro(){
    this.filtroLancamento.descricao = '';
    this.filtroLancamento.dataVencimentoDe = null;
    this.filtroLancamento.dataVencimentoAte = null;   

    this.lancamentoService.nextFiltro(this.filtroLancamento);
  }

}
