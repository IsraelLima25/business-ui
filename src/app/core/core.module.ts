import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastyModule, ToastyService } from 'ng2-toasty';
import { ConfirmationService, ConfirmDialogModule } from 'primeng/primeng';

import { NavbarComponent } from './navbar/navbar.component';
import { ErroHandlerService } from 'app/services/erro-handler.service';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
  ],

  declarations: [NavbarComponent],
  exports: [NavbarComponent, ToastyModule, ConfirmDialogModule],
  providers: [ConfirmationService, ErroHandlerService]
})
export class CoreModule { }
