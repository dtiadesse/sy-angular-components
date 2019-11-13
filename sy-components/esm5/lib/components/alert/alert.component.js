/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert/alert.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCheckCircle, faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.type = 'warning';
        /**
         * Controls whether to display/hide the Close button
         */
        this.showClose = false;
        /**
         * Explicitly defines that the alert must be dismissed by the user. Overrides
         * the dismiss timer. Defaults to 'false'
         */
        this.userMustDismiss = false;
        /**
         * Assign a timeout (in milliseconds) to dismiss the alert. 0 is the default
         * and is an infinite wait.
         */
        this.dismissTimer = 0;
        /**
         * Emitted event when an alert is dismissed
         */
        this.dismiss = new EventEmitter();
        /**
         * Emitted event when toggling content
         */
        this.toggle = new EventEmitter();
        this.types = {
            'error': { class: 'alert-error', sr: 'error alert' },
            'info': { class: 'alert-info', sr: 'info alert' },
            'success': { class: 'alert-success', sr: 'success alert' },
            'warning': { class: 'alert-warning', sr: 'warning alert' },
        };
        this.selectedIconTypes = {
            'success': faCheckCircle,
            'error': faExclamationTriangle,
            'info': faInfoCircle,
            'warning': faExclamationTriangle
        };
        this.selectedType = this.types.success.class;
        this.selectedIcon = this.selectedIconTypes.success;
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.typeNotDefined = /**
     * @return {?}
     */
    function () {
        if (!this.type || this.type.length === 0) {
            return true;
        }
        if (!this.types[this.type]) {
            return true;
        }
        return false;
    };
    /**
     * @return {?}
     */
    AlertComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.onDismissClick();
    };
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.typeNotDefined()) {
            this.selectedType = this.types[this.type].class;
            this.selectedIcon = this.selectedIconTypes[this.type];
        }
        if (this.dismissTimer > 0 && !this.userMustDismiss) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.dismiss.emit();
            }), this.dismissTimer);
        }
    };
    /**
     * @private
     * @return {?}
     */
    AlertComponent.prototype.onDismissClick = /**
     * @private
     * @return {?}
     */
    function () {
        this.dismiss.emit();
    };
    AlertComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-alert',
                    template: "<div [ngClass]=\"[selectedType]\">\r\n  <div class=\"alert-container\">\r\n    <div class=\"alert-body\">\r\n      <fa-icon [icon]=\"selectedIcon\" size=\"lg\"></fa-icon>\r\n      <span class=\"alert-header\">{{title}}</span>\r\n      <span class=\"sr-only\">{{this.types[this.type]?.sr}}</span>\r\n      <span class=\"float-right\" *ngIf=\"showClose\" (click)=\"closeAlert()\" tabindex=\"0\" (keyup.enter)=\"closeAlert()\">\r\n        <fa-icon icon=\"times-circle\" size=\"1x\">\r\n        </fa-icon>\r\n      </span>\r\n    </div>\r\n    <div class=\"alert-body\">\r\n      <p *ngIf=\"description\">{{description}}</p>\r\n      <div *ngIf=\"descriptionList?.length > 0\">\r\n        <ul *ngFor=\"let desc of descriptionList\" type=\"disc\">\r\n          <li>{{desc}}</li>\r\n        </ul>\r\n      </div>\r\n      <ng-content select=\"[main-content]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: ["div{background:#fff}.float-right{float:right}.alert-body{padding:10px 5px}.alert-body fa-icon{margin-right:4px;margin-left:2px}.alert-error .alert-body,.alert-error .closeIcon{border-left:15px solid #ec1942!important}.alert-error .alert-body fa-icon,.alert-error .closeIcon fa-icon{color:#ec1942!important}.alert-error .alert-header{color:#ec1942}.alert-info .alert-body,.alert-info .closeIcon{border-left:10px solid #00a7cf}.alert-info .alert-body fa-icon,.alert-info .alert-header,.alert-info .closeIcon fa-icon{color:#00a7cf}.alert-success .alert-body,.alert-success .closeIcon{border-left:10px solid #4aa564}.alert-success .alert-body fa-icon,.alert-success .alert-header,.alert-success .closeIcon fa-icon{color:#4aa564}.alert-warning .alert-body,.alert-warning .closeIcon{border-left:10px solid #d84009}.alert-warning .alert-body fa-icon,.alert-warning .alert-header,.alert-warning .closeIcon fa-icon{color:#d84009}.alert-div{display:-webkit-box;display:flex;margin-bottom:15px;margin-top:15px;max-width:50em;font-size:16px}.alert-header{font-weight:600;font-size:20px;margin-bottom:5px;padding-left:5px}.alert-container{margin-bottom:15px;margin-top:15px;max-width:50em;font-size:16px;box-shadow:2px 1px 1px 1px rgba(85,84,84,.12)}"]
                }] }
    ];
    AlertComponent.propDecorators = {
        type: [{ type: Input }],
        title: [{ type: Input }],
        description: [{ type: Input }],
        descriptionList: [{ type: Input }],
        showClose: [{ type: Input }],
        userMustDismiss: [{ type: Input }],
        dismissTimer: [{ type: Input }],
        dismiss: [{ type: Output }],
        toggle: [{ type: Output }]
    };
    return AlertComponent;
}());
export { AlertComponent };
if (false) {
    /** @type {?} */
    AlertComponent.prototype.type;
    /**
     * Sets the alert title
     * @type {?}
     */
    AlertComponent.prototype.title;
    /**
     * Sets the alert description
     * @type {?}
     */
    AlertComponent.prototype.description;
    /**
     * Sets the alert descriptionList
     * @type {?}
     */
    AlertComponent.prototype.descriptionList;
    /**
     * Controls whether to display/hide the Close button
     * @type {?}
     */
    AlertComponent.prototype.showClose;
    /**
     * Explicitly defines that the alert must be dismissed by the user. Overrides
     * the dismiss timer. Defaults to 'false'
     * @type {?}
     */
    AlertComponent.prototype.userMustDismiss;
    /**
     * Assign a timeout (in milliseconds) to dismiss the alert. 0 is the default
     * and is an infinite wait.
     * @type {?}
     */
    AlertComponent.prototype.dismissTimer;
    /**
     * Emitted event when an alert is dismissed
     * @type {?}
     */
    AlertComponent.prototype.dismiss;
    /**
     * Emitted event when toggling content
     * @type {?}
     */
    AlertComponent.prototype.toggle;
    /** @type {?} */
    AlertComponent.prototype.types;
    /** @type {?} */
    AlertComponent.prototype.selectedIconTypes;
    /** @type {?} */
    AlertComponent.prototype.selectedType;
    /** @type {?} */
    AlertComponent.prototype.selectedIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBdUIsWUFBWSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFNUg7SUFBQTtRQU1XLFNBQUksR0FBVyxTQUFTLENBQUM7Ozs7UUFrQnpCLGNBQVMsR0FBWSxLQUFLLENBQUM7Ozs7O1FBSzNCLG9CQUFlLEdBQVksS0FBSyxDQUFDOzs7OztRQUtqQyxpQkFBWSxHQUFXLENBQUMsQ0FBQzs7OztRQUt4QixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFJckQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTlELFVBQUssR0FBUTtZQUNYLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRTtZQUNwRCxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUU7WUFDakQsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFO1lBQzFELFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLGVBQWUsRUFBRTtTQUMzRCxDQUFDO1FBQ0Ysc0JBQWlCLEdBQUc7WUFDbEIsU0FBUyxFQUFFLGFBQWE7WUFDeEIsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixNQUFNLEVBQUUsWUFBWTtZQUNwQixTQUFTLEVBQUUscUJBQXFCO1NBQ2pDLENBQUM7UUFDRixpQkFBWSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNoRCxpQkFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7SUFnQ2hELENBQUM7Ozs7SUE5QkMsdUNBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVNLG1DQUFVOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNsRCxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3RCLENBQUMsR0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVPLHVDQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkF4RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixtNUJBQXFDOztpQkFFdEM7Ozt1QkFFRSxLQUFLO3dCQUlMLEtBQUs7OEJBSUwsS0FBSztrQ0FLTCxLQUFLOzRCQUtMLEtBQUs7a0NBS0wsS0FBSzsrQkFLTCxLQUFLOzBCQUtMLE1BQU07eUJBSU4sTUFBTTs7SUErQ1QscUJBQUM7Q0FBQSxBQTFGRCxJQTBGQztTQXJGWSxjQUFjOzs7SUFDekIsOEJBQWtDOzs7OztJQUlsQywrQkFBdUI7Ozs7O0lBSXZCLHFDQUE2Qjs7Ozs7SUFLN0IseUNBQWdDOzs7OztJQUtoQyxtQ0FBb0M7Ozs7OztJQUtwQyx5Q0FBMEM7Ozs7OztJQUsxQyxzQ0FBa0M7Ozs7O0lBS2xDLGlDQUErRDs7Ozs7SUFJL0QsZ0NBQThEOztJQUU5RCwrQkFLRTs7SUFDRiwyQ0FLRTs7SUFDRixzQ0FBZ0Q7O0lBQ2hELHNDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhQ2hlY2tDaXJjbGUsIGZhRXhjbGFtYXRpb25DaXJjbGUsIGZhSW5mb0NpcmNsZSwgZmFFeGNsYW1hdGlvblRyaWFuZ2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ktYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ3dhcm5pbmcnO1xuICAvKipcbiAgICAqIFNldHMgdGhlIGFsZXJ0IHRpdGxlXG4gICAgKi9cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFNldHMgdGhlIGFsZXJ0IGRlc2NyaXB0aW9uXG4gICAqL1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gIC8qKlxuICAqIFNldHMgdGhlIGFsZXJ0IGRlc2NyaXB0aW9uTGlzdFxuICAqL1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbkxpc3Q6IGFueVtdO1xuXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIHRvIGRpc3BsYXkvaGlkZSB0aGUgQ2xvc2UgYnV0dG9uXG4gICAqL1xuICBASW5wdXQoKSBzaG93Q2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEV4cGxpY2l0bHkgZGVmaW5lcyB0aGF0IHRoZSBhbGVydCBtdXN0IGJlIGRpc21pc3NlZCBieSB0aGUgdXNlci4gT3ZlcnJpZGVzXG4gICAqIHRoZSBkaXNtaXNzIHRpbWVyLiBEZWZhdWx0cyB0byAnZmFsc2UnXG4gICAqL1xuICBASW5wdXQoKSB1c2VyTXVzdERpc21pc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIEFzc2lnbiBhIHRpbWVvdXQgKGluIG1pbGxpc2Vjb25kcykgdG8gZGlzbWlzcyB0aGUgYWxlcnQuIDAgaXMgdGhlIGRlZmF1bHRcbiAgICogYW5kIGlzIGFuIGluZmluaXRlIHdhaXQuXG4gICAqL1xuICBASW5wdXQoKSBkaXNtaXNzVGltZXI6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEVtaXR0ZWQgZXZlbnQgd2hlbiBhbiBhbGVydCBpcyBkaXNtaXNzZWRcbiAgICovXG4gIEBPdXRwdXQoKSBkaXNtaXNzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogRW1pdHRlZCBldmVudCB3aGVuIHRvZ2dsaW5nIGNvbnRlbnRcbiAgICovXG4gIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdHlwZXM6IGFueSA9IHtcbiAgICAnZXJyb3InOiB7IGNsYXNzOiAnYWxlcnQtZXJyb3InLCBzcjogJ2Vycm9yIGFsZXJ0JyB9LFxuICAgICdpbmZvJzogeyBjbGFzczogJ2FsZXJ0LWluZm8nLCBzcjogJ2luZm8gYWxlcnQnIH0sXG4gICAgJ3N1Y2Nlc3MnOiB7IGNsYXNzOiAnYWxlcnQtc3VjY2VzcycsIHNyOiAnc3VjY2VzcyBhbGVydCcgfSxcbiAgICAnd2FybmluZyc6IHsgY2xhc3M6ICdhbGVydC13YXJuaW5nJywgc3I6ICd3YXJuaW5nIGFsZXJ0JyB9LFxuICB9O1xuICBzZWxlY3RlZEljb25UeXBlcyA9IHtcbiAgICAnc3VjY2Vzcyc6IGZhQ2hlY2tDaXJjbGUsXG4gICAgJ2Vycm9yJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlLFxuICAgICdpbmZvJzogZmFJbmZvQ2lyY2xlLFxuICAgICd3YXJuaW5nJzogZmFFeGNsYW1hdGlvblRyaWFuZ2xlXG4gIH07XG4gIHNlbGVjdGVkVHlwZTogc3RyaW5nID0gdGhpcy50eXBlcy5zdWNjZXNzLmNsYXNzO1xuICBzZWxlY3RlZEljb24gPSB0aGlzLnNlbGVjdGVkSWNvblR5cGVzLnN1Y2Nlc3M7XG5cbiAgdHlwZU5vdERlZmluZWQoKSB7XG4gICAgaWYgKCF0aGlzLnR5cGUgfHwgdGhpcy50eXBlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghdGhpcy50eXBlc1t0aGlzLnR5cGVdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNsb3NlQWxlcnQoKSB7XG4gICAgdGhpcy5vbkRpc21pc3NDbGljaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnR5cGVOb3REZWZpbmVkKCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUeXBlID0gdGhpcy50eXBlc1t0aGlzLnR5cGVdLmNsYXNzO1xuICAgICAgdGhpcy5zZWxlY3RlZEljb24gPSB0aGlzLnNlbGVjdGVkSWNvblR5cGVzW3RoaXMudHlwZV07XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc21pc3NUaW1lciA+IDAgJiYgIXRoaXMudXNlck11c3REaXNtaXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kaXNtaXNzLmVtaXQoKTtcbiAgICAgIH0sIHRoaXMuZGlzbWlzc1RpbWVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uRGlzbWlzc0NsaWNrKCkge1xuICAgIHRoaXMuZGlzbWlzcy5lbWl0KCk7XG4gIH1cblxufVxuIl19