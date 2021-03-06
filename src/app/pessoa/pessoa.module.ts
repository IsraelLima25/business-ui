import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask'
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { SharedModule } from 'app/shared/shared.module';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaService } from 'app/services/pessoa.service';
import { PessoaRoutingModule } from './pessoa-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    DataTableModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TooltipModule,
    SharedModule,
    PessoaRoutingModule,
    RouterModule
  ],
  declarations: [
    ListaPessoasComponent,
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ],
  exports: [],
  providers: [ PessoaService ]
})
export class PessoaModule { }
