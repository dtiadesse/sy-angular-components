import { OnInit, EventEmitter } from '@angular/core';
export declare class AlertComponent implements OnInit {
    type: string;
    /**
      * Sets the alert title
      */
    title: string;
    /**
     * Sets the alert description
     */
    description: string;
    /**
    * Sets the alert descriptionList
    */
    descriptionList: any[];
    /**
     * Controls whether to display/hide the Close button
     */
    showClose: boolean;
    /**
     * Explicitly defines that the alert must be dismissed by the user. Overrides
     * the dismiss timer. Defaults to 'false'
     */
    userMustDismiss: boolean;
    /**
     * Assign a timeout (in milliseconds) to dismiss the alert. 0 is the default
     * and is an infinite wait.
     */
    dismissTimer: number;
    /**
     * Emitted event when an alert is dismissed
     */
    dismiss: EventEmitter<any>;
    /**
     * Emitted event when toggling content
     */
    toggle: EventEmitter<any>;
    types: any;
    selectedIconTypes: {
        'success': import("@fortawesome/fontawesome-common-types").IconDefinition;
        'error': import("@fortawesome/fontawesome-common-types").IconDefinition;
        'info': import("@fortawesome/fontawesome-common-types").IconDefinition;
        'warning': import("@fortawesome/fontawesome-common-types").IconDefinition;
    };
    selectedType: string;
    selectedIcon: import("@fortawesome/fontawesome-common-types").IconDefinition;
    typeNotDefined(): boolean;
    closeAlert(): void;
    ngOnInit(): void;
    private onDismissClick;
}
