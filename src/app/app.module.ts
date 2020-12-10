import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService, ConfirmDialogModule } from 'primeng/primeng';


import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LancamentoService } from './services/lancamento.service';
import { PessoaService } from './services/pessoa.service';

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
    FormsModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
  ],
  providers: [LancamentoService, PessoaService, ConfirmationService, {provide: LOCALE_ID, useValue:'pt-BT'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
