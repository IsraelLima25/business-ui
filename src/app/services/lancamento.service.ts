import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FiltroLancamento } from 'app/models/FiltroLancamento.model';
import { URLSearchParams } from '@angular/http';

import * as moment from 'moment'

import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';
  
  private filter = new BehaviorSubject<FiltroLancamento>(undefined);

  constructor(private http: Http) { }

  public nextFiltro(filtro) {
    this.filter.next(filtro);
  }

  getFilter(): Observable<FiltroLancamento> {
    return this.filter.asObservable();
  }

  public pesquisar(filtro: FiltroLancamento): Promise<any> {

    const params = this.addParams(filtro);

    return this.http.get(this.lancamentosUrl, { params })
      .toPromise()
      .then(response => {
        const responseJson = response.json();
        const lancamentos = responseJson.content;

        const resultado = {
          lancamentos : lancamentos,
          total: responseJson.totalElements
        }
        return resultado;
      });
  }

  private addParams(filtro):URLSearchParams {
    
    const params = new URLSearchParams();

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoDe) {
      params.set('dataVencimentoDe', moment(filtro.dataVencimentoDe).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoAte) {
      params.set('dataVencimentoAte', moment(filtro.dataVencimentoAte).format('YYYY-MM-DD'));
    }

    params.set('size', filtro.pagina.size + '');
    params.set('page', filtro.pagina.page + '');

    return params;

  }

}
