import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

 
  action = {
    name: 'edit',
    label: 'Edit',
    icon: 'pencil-alt',
    callback: () => { console.log('click'); }
  };

  codeScript=`action = {
    name: 'edit',
    label: 'Edit',
    icon: 'pencil-alt',
    callback: () => { console.log('click'); }
  };`;

  codeExample=`<sy-action-button [action]="action"></sy-action-button>`;

}
