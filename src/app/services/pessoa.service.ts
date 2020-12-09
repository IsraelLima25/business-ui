import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { FiltroPessoa } from 'app/models/FiltroPessoa.model';

import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {

  private pessoaUrl = "http://localhost:8080/pessoas";

  private filterPessoa = new BehaviorSubject<FiltroPessoa>(undefined);

  filtroPessoa: FiltroPessoa;

  constructor(private http: Http) {}

  public nextFiltro(filtro) {
    this.filterPessoa.next(filtro);
  }

  getFilter(): Observable<FiltroPessoa> {
    return this.filterPessoa.asObservable();
  }

  excluir(pessoa: any){

    return this.http.delete(`${this.pessoaUrl}/${pessoa.codigo}`).toPromise()
    .then(resposta => null)    
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
