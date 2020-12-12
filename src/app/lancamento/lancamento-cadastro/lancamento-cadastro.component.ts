import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { SelectItem } from 'primeng/components/common/selectitem';
import { ToastyService } from 'ng2-toasty';
import * as moment from 'moment';


import { FiltroPessoa } from 'app/models/FiltroPessoa.model';
import { Lancamento } from 'app/models/Lancamento.model';
import { CategoriaService } from 'app/services/categoria.service';
import { PessoaService } from 'app/services/pessoa.service';
import { LancamentoService } from 'app/services/lancamento.service';
import { ErroHandlerService } from 'app/services/erro-handler.service';

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
    private lancamentoService: LancamentoService, private activatedRoute: ActivatedRoute, 
    private toastyService: ToastyService, private handlerError: ErroHandlerService, private router: Router,
    private title: Title) {
  }

  ngOnInit(): void {
    this.carregarTipoLancamento();
    this.carregarCategorias();
    this.carregarPessoas();    
    this.carregarPessoaPorCodigo();

    this.title.setTitle('Cadastrar Lançamento')    
  }

  get editando():Boolean{
   return Boolean(this.lancamento.codigo);
  }

  salvar(form: FormControl){
    if(this.editando){
      this.atualizarLancamento();
    }else{
      this.lancar(form);
    }
  }
  
  lancar(form: FormControl){
    this.lancamentoService.lancar(this.lancamento)
    .then((lancamentoSalvo) => {
      this.lancamento = lancamentoSalvo;
      this.toastyService.success('Lançamento registrado com sucesso');            
    }).catch(err=> this.handlerError.handler(err))
  }
  
  atualizarLancamento(){
    this.lancamentoService.atualizar(this.lancamento)
    .then(lancamentoAtualizado => {
      this.lancamento = lancamentoAtualizado;
      this.toastyService.success('Lançamento atualizado com sucesso');
    })
  }
  
  carregarPessoaPorCodigo(){
    let codigo: number = this.activatedRoute.snapshot.params['codigo'];
      if(codigo != undefined)
        this.lancamentoService.buscarPorCodigo(codigo)
        .then((lancamento: Lancamento) => {         
          lancamento.dataPagamento = this.converterStringsParaData(lancamento.dataPagamento);
          lancamento.dataVencimento = this.converterStringsParaData(lancamento.dataVencimento);
          this.title.setTitle('Editando Lançamento');
          this.lancamento = lancamento;        
        });
    }
  
  carregarTipoLancamento(){
    this.types = [];
    this.types.push({label: 'Despesa', value: 'DESPESA'});
    this.types.push({label: 'Receita', value: 'RECEITA'});  
    
    this.lancamento.tipo = 'DESPESA';
    
  }
  
  carregarPessoas(){  
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

   novo(form: FormControl){
      form.reset();
      setTimeout(function(){
        this.lancamento = new Lancamento();
      }.bind(this),1)
      this.title.setTitle('Cadastrar')
      this.router.navigate['/lancamentos/novo']
   }

   converterStringsParaData(dataString: any): Date{
   return new Date(moment(dataString).format('YYYY-MM-DD'));
  }
}
