import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FiltroPessoa } from 'app/models/FiltroPessoa.model';
import { Lancamento } from 'app/models/Lancamento.model';
import { CategoriaService } from 'app/services/categoria.service';
import { PessoaService } from 'app/services/pessoa.service';

import { SelectItem } from 'primeng/components/common/selectitem';

import { LancamentoService } from 'app/services/lancamento.service';
import { ToastyService } from 'ng2-toasty';
import { ErroHandlerService } from 'app/services/erro-handler.service';
import { format } from 'url';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  selectedType: string;
  filtro = new FiltroPessoa();
  lancamento = new Lancamento();

  types: SelectItem[];
  categorias: SelectItem[];
  pessoas: SelectItem[];

  constructor(private pessoaService: PessoaService, private categoriaService: CategoriaService,
    private lancamentoService: LancamentoService, private toastyService: ToastyService, private handlerError: ErroHandlerService) {
   console.log('cons')
  }

  ngOnInit(): void {
    this.carregarTipoLancamento();
    this.carregarCategorias();
    this.carregarPessoas();  
  }

  lancar(form: FormControl){
    console.log(this.lancamento)
    this.lancamentoService.lancar(this.lancamento)
    .then(() => { 
      form.reset();
      this.toastyService.success('Lançamento registrado com sucesso');      
    }).catch(err=> this.handlerError.handler(err))
  } 
  
  carregarTipoLancamento(){
    this.types = [];
    this.types.push({label: 'Despesa', value: 'DESPESA'});
    this.types.push({label: 'Receita', value: 'RECEITA'});  
      
    this.lancamento.tipo = 'DESPESA';
    
   }

   carregarPessoas(){  
     console.log('carregando pessoas')    
      this.pessoaService.pesquisar(this.filtro)
      .then(resposta => {this.pessoas = resposta.pessoas.map(pessoa => {
        return {label: pessoa.nome, value: pessoa.codigo}
      })})
   }

   carregarCategorias(){
     this.categoriaService.listarTodas()
     .then(resposta => this.categorias = resposta.map(categoria => {
       return {label: categoria.nome, value: categoria.codigo }
     }))
   }


}
