import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Pessoa } from 'app/models/Pessoa.model';
import { PessoaService } from 'app/services/pessoa.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

 pessoa = new Pessoa();

 constructor(private pessoaService: PessoaService, private toastyService: ToastyService,
  private activatedRoute: ActivatedRoute, private title: Title, private router: Router) {}

 ngOnInit(): void {
  this.carregarPessoaPorCodigo();
  
 }

 salvar(){
  if(this.editando){    
    this.atualizarPessoa();
  }else{
    this.cadastrar();
  }
}

 cadastrar(){
  this.pessoa.endereco.cep = this.removerMascaraCep(this.pessoa.endereco.cep);
  this.pessoaService.cadastrar(this.pessoa)
  .then((pessoaCadastrada) => {
    this.pessoa = pessoaCadastrada;
    this.toastyService.success('Pessoa cadastrada com sucesso');
    })
 }

 atualizarPessoa(){
  this.pessoaService.atualizar(this.pessoa)
  .then(pessoaAtualizada => {
    this.pessoa = pessoaAtualizada;

    this.toastyService.success('Pessoa atualizada com sucesso');
  })
}


 get editando():Boolean{
   return Boolean(this.pessoa.codigo);
 }

 carregarPessoaPorCodigo(){
  let codigo: number = this.activatedRoute.snapshot.params['codigo'];
    if(codigo != undefined){
      this.title.setTitle('Editando Pessoa');
      this.pessoaService.buscarPorCodigo(codigo)
      .then((pessoa: Pessoa) => {  
        this.pessoa = pessoa;        
      });
    }else{
      this.title.setTitle('Cadastrando Pessoa');
    }
  }

 removerMascaraCep(cep: string): string{
   return cep.replace(/[^\d]+/g,'');
 }

 novo(form: FormControl){
  form.reset();
  this.title.setTitle('Cadastrar Pessoa');
  this.router.navigate['/lancamentos/novo']
}

}
