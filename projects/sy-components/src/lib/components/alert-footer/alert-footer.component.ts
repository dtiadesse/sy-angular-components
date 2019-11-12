import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertFooterService } from './alert-footer.service';
import { AlertType } from '../../types';

@Component({
  selector: 'sy-alert-footer',
  templateUrl: './alert-footer.component.html',
  styleUrls: ['./alert-footer.component.scss']
})
export class AlertFooterComponent implements OnInit {

  @Input() alerts: AlertType[] = [];
  @Output() dismissAlert: EventEmitter<boolean> = new EventEmitter();
  constructor(private alertFooterService: AlertFooterService) { }

  ngOnInit() {
    // this.alertFooterService.registerFooterAlert(this.alerts[0]);
    // this.refreshAlerts();
  }

  dismissFooterAlert(i) {
    this.alertFooterService.dismissFooterAlert(i);
    this.dismissAlert.emit(true);
    this.refreshAlerts();
  }

  refreshAlerts() {
    this.alerts = this.alertFooterService.getAlerts();
  }

}
