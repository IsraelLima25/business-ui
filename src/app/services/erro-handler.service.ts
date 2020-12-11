import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Injectable()
export class ErroHandlerService {

  constructor(private toastyService: ToastyService) {}

  handler(err){
    let msg: string
    if(typeof err === 'string'){
      msg = err;
    }else{
      console.log(err);
      msg = 'Erro ao processar serviço remoto. Tente novamente.'
    }

    this.toastyService.error(msg);

  }
}
