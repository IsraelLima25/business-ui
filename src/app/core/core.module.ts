import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmationService, ConfirmDialogModule } from 'primeng/primeng';

import { NavbarComponent } from './navbar/navbar.component';
import { ErroHandlerService } from 'app/services/erro-handler.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Title } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,   
    RouterModule,  
    ToastyModule.forRoot(),
  ],

  declarations: [NavbarComponent, PageNotFoundComponent],
  exports: [NavbarComponent, ToastyModule, ConfirmDialogModule],
  providers: [ConfirmationService, ErroHandlerService, Title]
})
export class CoreModule { }
