import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  types: SelectItem[];

  selectedType: string;

  categorias: SelectItem[];
  dropDownCategoria: String;

  pessoas: SelectItem[];
  dropDownPessoa: String;

  constructor() {
      this.types = [];
      this.types.push({label: 'Despesa', value: 'DESPESA'});
      this.types.push({label: 'Receita', value: 'RECEITA'});

      this.selectedType = 'DESPESA';

      this.categorias = [];
      this.categorias.push({label: 'Selecione', value: null})
      this.categorias.push({label: 'Diversos', value: '1'});
      this.categorias.push({label: 'Serviço de Terceiros', value: '2'});

      this.pessoas = [];
      this.pessoas.push({label: 'Selecione', value: null});
      this.pessoas.push({label: 'Lucas Alves', value: '1'});
      this.pessoas.push({label: 'Matias Souza', value: '2'});
   }

  clear() {
      this.selectedType = null;
  }

  ngOnInit(): void {}

}
