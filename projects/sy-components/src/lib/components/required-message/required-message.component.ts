import { Component, Input } from '@angular/core';

@Component({
  selector: 'sy-required-message',
  template: `<div class="msg-container">
                <div class="label-align-right">
                <label>{{message}}</label>
                </div>              
            </div>`,
  styles: [
    `
  .msg-container {
    display: flex;
    color: red;
  }
  .label-align-right {
    flex:1;
    text-align: right;
   }
  `]

})
export class RequiredMessageComponent {
  @Input() message: string = 'All (*) fields are required';
}
