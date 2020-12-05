import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';

import { MessageModule} from 'primeng/components/message/message';

@NgModule({
  imports: [
    CommonModule,
    MessageModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]

})
export class SharedModule { }
