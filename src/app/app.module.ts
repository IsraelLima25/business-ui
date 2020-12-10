import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LancamentoModule,
    PessoaModule,
    SharedModule,
    CoreModule,
    HttpModule,
    FormsModule    
  ],
  providers: [ {provide: LOCALE_ID, useValue:'pt-BR'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
