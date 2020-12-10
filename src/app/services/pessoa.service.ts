import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { FiltroPessoa } from 'app/models/FiltroPessoa.model';

import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { ErroHandlerService } from './erro-handler.service';

@Injectable()
export class PessoaService {

  private pessoaUrl = "http://localhost:8080/pessoas";

  private filterPessoa = new BehaviorSubject<FiltroPessoa>(undefined);

  filtroPessoa: FiltroPessoa;

  constructor(private http: Http, private handlerError: ErroHandlerService) {}

  public nextFiltro(filtro) {
    this.filterPessoa.next(filtro);
  }

  getFilter(): Observable<FiltroPessoa> {
    return this.filterPessoa.asObservable();
  }

  ativar(codigo){
    return this.http.put(`${this.pessoaUrl}/ativar/${codigo}`, null).toPromise()
    .then(() => null)
    .catch(err => this.handlerError.handler(err));
  }

  desativar(codigo){
    return this.http.put(`${this.pessoaUrl}/desativar/${codigo}`, null).toPromise()
    .then(() => null)
    .catch(err => this.handlerError.handler(err));
  }

  excluir(pessoa: any){

    return this.http.delete(`${this.pessoaUrl}/${pessoa.codigo}`).toPromise()
    .then(resposta => null)
    .catch(err => this.handlerError.handler(err))    
  }

  pesquisar(filtroPessoa: FiltroPessoa): Promise<any>{
    
    const params = this.addParamsFiltroPesquisa(filtroPessoa);
    
    return this.http.get(this.pessoaUrl, { params }).toPromise()
    .then(resposta => {
      const responseJson = resposta.json();
      const pessoas = responseJson.content;

      const resultado = {
        pessoas : pessoas,
        total: responseJson.totalElements
      }

      return resultado;
    })
    .catch(err => this.handlerError.handler(err))
  }

  private addParamsFiltroPesquisa(filtroPessoa: FiltroPessoa): URLSearchParams {
    
    const params = new URLSearchParams();

    if(filtroPessoa.nome){   
      params.set('nome', filtroPessoa.nome);
    }

    params.set('size', filtroPessoa.pagina.size + '');
    params.set('page', filtroPessoa.pagina.page + '');
        
    return params;

  }

}
