import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() severity: string;
  @Input() text: string;
  @Input() typeError: string;
  @Input() control: FormControl;

  temErro(): boolean {
   return this.control.hasError(this.typeError) && this.control.dirty;
  }

}
