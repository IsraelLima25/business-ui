import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pessoa } from 'app/models/Pessoa.model';
import { PessoaService } from 'app/services/pessoa.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {

 pessoa = new Pessoa();

 constructor(private pessoaService: PessoaService, private toastyService: ToastyService) {}

 cadastrar(form: FormControl){
  this.pessoa.endereco.cep = this.removerMascaraCep(this.pessoa.endereco.cep);
  this.pessoaService.cadastrar(this.pessoa)
  .then(() => {
      this.toastyService.success('Pessoa cadastrada com sucesso');
      form.reset();
      this.pessoa = new Pessoa();
  })
 }

 removerMascaraCep(cep: string): string{
   return cep.replace(/[^\d]+/g,'');
 }

}
