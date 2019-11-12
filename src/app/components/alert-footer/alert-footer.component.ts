import { Component, OnInit } from '@angular/core';
// import { AlertFooterService } from 'sy-components/lib/components/public_api';

@Component({
  selector: 'app-alert-footer',
  templateUrl: './alert-footer.component.html',
  styleUrls: ['./alert-footer.component.scss']
})
export class AlertFooterComponent {
  private alerts: any = [];

  constructor() { }
  footerAlertModel = {
    title: 'test title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'error',
    timer: 0,
    mustDismiss: false
  };

  onFooterAlertBtnClick() {
    this.alerts.unshift(JSON.parse(JSON.stringify(this.footerAlertModel)));
  }

  dismissAlert(event) {
   this.alerts = [];
  }
}
