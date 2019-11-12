import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ActionInterface {
  icon?: string;
  label: string;
  name: string;
  callback?: Function;
}

@Component({
  selector: 'sy-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  /**
   * Provide the action object for the action button
   */
  @Input() action: ActionInterface;
  /**
   * Disables the button
   */
  @Input() disabled: boolean = false;
  /**
   * EventEmitter that emits action name when button is clicked
   */
  @Output() emitAction: EventEmitter<any> = new EventEmitter<any>();
  /**
   * Emits the results of the callback
   */
  @Output() emitCallback: EventEmitter<any> = new EventEmitter<any>();

  actionClicked() {
    this.emitCallback.emit(this.action.callback());
    this.emitAction.emit(this.action);
  }

}
