import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle, faExclamationCircle, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sy-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() type: string = 'warning';
  /**
    * Sets the alert title
    */
  @Input() title: string;
  /**
   * Sets the alert description
   */
  @Input() description: string;

  /**
  * Sets the alert descriptionList
  */
  @Input() descriptionList: any[];

  /**
   * Controls whether to display/hide the Close button
   */
  @Input() showClose: boolean = false;
  /**
   * Explicitly defines that the alert must be dismissed by the user. Overrides
   * the dismiss timer. Defaults to 'false'
   */
  @Input() userMustDismiss: boolean = false;
  /**
   * Assign a timeout (in milliseconds) to dismiss the alert. 0 is the default
   * and is an infinite wait.
   */
  @Input() dismissTimer: number = 0;

  /**
   * Emitted event when an alert is dismissed
   */
  @Output() dismiss: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Emitted event when toggling content
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  types: any = {
    'error': { class: 'alert-error', sr: 'error alert' },
    'info': { class: 'alert-info', sr: 'info alert' },
    'success': { class: 'alert-success', sr: 'success alert' },
    'warning': { class: 'alert-warning', sr: 'warning alert' },
  };
  selectedIconTypes = {
    'success': faCheckCircle,
    'error': faExclamationTriangle,
    'info': faInfoCircle,
    'warning': faExclamationTriangle
  };
  selectedType: string = this.types.success.class;
  selectedIcon = this.selectedIconTypes.success;

  typeNotDefined() {
    if (!this.type || this.type.length === 0) {
      return true;
    }
    if (!this.types[this.type]) {
      return true;
    }
    return false;
  }

  public closeAlert() {
    this.onDismissClick();
  }

  ngOnInit() {
    if (!this.typeNotDefined()) {
      this.selectedType = this.types[this.type].class;
      this.selectedIcon = this.selectedIconTypes[this.type];
    }
    if (this.dismissTimer > 0 && !this.userMustDismiss) {
      setTimeout(() => {
        this.dismiss.emit();
      }, this.dismissTimer);
    }
  }

  private onDismissClick() {
    this.dismiss.emit();
  }

}
