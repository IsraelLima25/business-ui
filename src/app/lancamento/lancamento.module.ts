import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { SharedModule } from '../shared/shared.module';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { ListaLancamentosComponent } from './lista-lancamentos/lista-lancamentos.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoService } from 'app/services/lancamento.service';
import { CategoriaService } from 'app/services/categoria.service';
import { LancamentoRoutingModule } from './lancamento-routing.module'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    SelectButtonModule,
    CalendarModule,
    DropdownModule,
    CurrencyMaskModule,
    DataTableModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TooltipModule,    
    SharedModule,
    LancamentoRoutingModule,
    RouterModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    ListaLancamentosComponent
  ],
  exports: [],
  providers: [ LancamentoService, CategoriaService ]
})
export class LancamentoModule { }
