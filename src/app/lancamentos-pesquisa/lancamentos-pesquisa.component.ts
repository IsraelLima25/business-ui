import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [{tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2020, 5, 1),
    dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Freitas'},
  {tipo: 'RECEITA', descricao: 'Venda de Item', dataVencimento: new Date(2020, 2, 25),
    dataPagamento: null, valor: 8650.00, pessoa: 'Oficina do Jonas'},
    {tipo: 'RECEITA', descricao: 'Venda de Item', dataVencimento: new Date(2020, 2, 25),
    dataPagamento: null, valor: 1500.00, pessoa: 'Oficina do Jonas'}
  ];

}
