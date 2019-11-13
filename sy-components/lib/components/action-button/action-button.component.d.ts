import { EventEmitter } from '@angular/core';
export interface ActionInterface {
    icon?: string;
    label: string;
    name: string;
    callback?: Function;
}
export declare class ActionButtonComponent {
    /**
     * Provide the action object for the action button
     */
    action: ActionInterface;
    /**
     * Disables the button
     */
    disabled: boolean;
    /**
     * EventEmitter that emits action name when button is clicked
     */
    emitAction: EventEmitter<any>;
    /**
     * Emits the results of the callback
     */
    emitCallback: EventEmitter<any>;
    actionClicked(): void;
}
