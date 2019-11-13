/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/action-button/action-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * @record
 */
export function ActionInterface() { }
if (false) {
    /** @type {?|undefined} */
    ActionInterface.prototype.icon;
    /** @type {?} */
    ActionInterface.prototype.label;
    /** @type {?} */
    ActionInterface.prototype.name;
    /** @type {?|undefined} */
    ActionInterface.prototype.callback;
}
export class ActionButtonComponent {
    constructor() {
        /**
         * Disables the button
         */
        this.disabled = false;
        /**
         * EventEmitter that emits action name when button is clicked
         */
        this.emitAction = new EventEmitter();
        /**
         * Emits the results of the callback
         */
        this.emitCallback = new EventEmitter();
    }
    /**
     * @return {?}
     */
    actionClicked() {
        this.emitCallback.emit(this.action.callback());
        this.emitAction.emit(this.action);
    }
}
ActionButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'sy-action-button',
                template: "<button type=\"button\"\n        (click)=\"actionClicked()\"\n        [disabled]=\"disabled\"\n        class=\"usa-button action-button\">\n  <!-- <span [ngClass]=\"action?.icon\"></span>&nbsp; -->\n  <fa-icon [icon]=\"action?.icon\" size=\"1x\"></fa-icon>&nbsp;\n  {{ action?.label }}\n</button>\n",
                styles: [".action-button{margin-top:.5em;margin-right:.5em;margin-bottom:.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#4bc1d2;border:0;border-radius:.1875rem;color:#fff;cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:1rem;font-weight:700;line-height:1;outline:0;padding:1rem 2rem;text-align:center;text-decoration:none}"]
            }] }
];
ActionButtonComponent.propDecorators = {
    action: [{ type: Input }],
    disabled: [{ type: Input }],
    emitAction: [{ type: Output }],
    emitCallback: [{ type: Output }]
};
if (false) {
    /**
     * Provide the action object for the action button
     * @type {?}
     */
    ActionButtonComponent.prototype.action;
    /**
     * Disables the button
     * @type {?}
     */
    ActionButtonComponent.prototype.disabled;
    /**
     * EventEmitter that emits action name when button is clicked
     * @type {?}
     */
    ActionButtonComponent.prototype.emitAction;
    /**
     * Emits the results of the callback
     * @type {?}
     */
    ActionButtonComponent.prototype.emitCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFdkUscUNBS0M7OztJQUpDLCtCQUFjOztJQUNkLGdDQUFjOztJQUNkLCtCQUFhOztJQUNiLG1DQUFvQjs7QUFRdEIsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQzs7OztRQWNXLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7UUFJekIsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOzs7O1FBSXhELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFPdEUsQ0FBQzs7OztJQUxDLGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsc1RBQTZDOzthQUU5Qzs7O3FCQU1FLEtBQUs7dUJBSUwsS0FBSzt5QkFJTCxNQUFNOzJCQUlOLE1BQU07Ozs7Ozs7SUFaUCx1Q0FBaUM7Ozs7O0lBSWpDLHlDQUFtQzs7Ozs7SUFJbkMsMkNBQWtFOzs7OztJQUlsRSw2Q0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkludGVyZmFjZSB7XG4gIGljb24/OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgY2FsbGJhY2s/OiBGdW5jdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ktYWN0aW9uLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB7XG5cbiAgLyoqXG4gICAqIFByb3ZpZGUgdGhlIGFjdGlvbiBvYmplY3QgZm9yIHRoZSBhY3Rpb24gYnV0dG9uXG4gICAqL1xuICBASW5wdXQoKSBhY3Rpb246IEFjdGlvbkludGVyZmFjZTtcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBidXR0b25cbiAgICovXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBFdmVudEVtaXR0ZXIgdGhhdCBlbWl0cyBhY3Rpb24gbmFtZSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KCkgZW1pdEFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLyoqXG4gICAqIEVtaXRzIHRoZSByZXN1bHRzIG9mIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgQE91dHB1dCgpIGVtaXRDYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBhY3Rpb25DbGlja2VkKCkge1xuICAgIHRoaXMuZW1pdENhbGxiYWNrLmVtaXQodGhpcy5hY3Rpb24uY2FsbGJhY2soKSk7XG4gICAgdGhpcy5lbWl0QWN0aW9uLmVtaXQodGhpcy5hY3Rpb24pO1xuICB9XG5cbn1cbiJdfQ==