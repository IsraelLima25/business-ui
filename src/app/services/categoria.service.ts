import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { ErroHandlerService } from './erro-handler.service';

@Injectable()
export class CategoriaService {

  categoriaUrl = 'http://localhost:8080/categorias'

  constructor(private http: Http, private handerError: ErroHandlerService) { }

  listarTodas(){
    return this.http.get(this.categoriaUrl).toPromise()
    .then(resposta => resposta.json())
    .catch(err => this.handerError.handler(err))
  }

}
