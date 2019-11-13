/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert-footer/alert-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertFooterService } from './alert-footer.service';
var AlertFooterComponent = /** @class */ (function () {
    function AlertFooterComponent(alertFooterService) {
        this.alertFooterService = alertFooterService;
        this.alerts = [];
        this.dismissAlert = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AlertFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.alertFooterService.registerFooterAlert(this.alerts[0]);
        // this.refreshAlerts();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    AlertFooterComponent.prototype.dismissFooterAlert = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.alertFooterService.dismissFooterAlert(i);
        this.dismissAlert.emit(true);
        this.refreshAlerts();
    };
    /**
     * @return {?}
     */
    AlertFooterComponent.prototype.refreshAlerts = /**
     * @return {?}
     */
    function () {
        this.alerts = this.alertFooterService.getAlerts();
    };
    AlertFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-alert-footer',
                    template: "<div class=\"alert-fixed-footer\">\r\n    <sy-alert *ngFor=\"let alert of alerts; let i = index\" [dismissTimer]=\"alert.timer\" [showClose]=\"true\" [userMustDismiss]=\"alert.mustDismiss ? alert.mustDismiss : false\" [type]=\"alert.type\" [title]=\"alert.title\" [description]=\"alert.description\" [descriptionList]=\"alert.descriptionList\"\r\n        (dismiss)=\"dismissFooterAlert(i)\">\r\n    </sy-alert>\r\n</div>",
                    styles: [".alert-fixed-footer{min-width:300px;min-height:100px;position:absolute;z-index:1;bottom:0;right:0}"]
                }] }
    ];
    /** @nocollapse */
    AlertFooterComponent.ctorParameters = function () { return [
        { type: AlertFooterService }
    ]; };
    AlertFooterComponent.propDecorators = {
        alerts: [{ type: Input }],
        dismissAlert: [{ type: Output }]
    };
    return AlertFooterComponent;
}());
export { AlertFooterComponent };
if (false) {
    /** @type {?} */
    AlertFooterComponent.prototype.alerts;
    /** @type {?} */
    AlertFooterComponent.prototype.dismissAlert;
    /**
     * @type {?}
     * @private
     */
    AlertFooterComponent.prototype.alertFooterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9hbGVydC1mb290ZXIvYWxlcnQtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHNUQ7SUFTRSw4QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFGakQsV0FBTSxHQUFnQixFQUFFLENBQUM7UUFDeEIsaUJBQVksR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNMLENBQUM7Ozs7SUFFL0QsdUNBQVE7OztJQUFSO1FBQ0UsK0RBQStEO1FBQy9ELHdCQUF3QjtJQUMxQixDQUFDOzs7OztJQUVELGlEQUFrQjs7OztJQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDRDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BELENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsZ2JBQTRDOztpQkFFN0M7Ozs7Z0JBUFEsa0JBQWtCOzs7eUJBVXhCLEtBQUs7K0JBQ0wsTUFBTTs7SUFrQlQsMkJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXJCWSxvQkFBb0I7OztJQUUvQixzQ0FBa0M7O0lBQ2xDLDRDQUFtRTs7Ozs7SUFDdkQsa0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRGb290ZXJTZXJ2aWNlIH0gZnJvbSAnLi9hbGVydC1mb290ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBbGVydFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N5LWFsZXJ0LWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hbGVydC1mb290ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBbGVydEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgYWxlcnRzOiBBbGVydFR5cGVbXSA9IFtdO1xuICBAT3V0cHV0KCkgZGlzbWlzc0FsZXJ0OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRGb290ZXJTZXJ2aWNlOiBBbGVydEZvb3RlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIHRoaXMuYWxlcnRGb290ZXJTZXJ2aWNlLnJlZ2lzdGVyRm9vdGVyQWxlcnQodGhpcy5hbGVydHNbMF0pO1xuICAgIC8vIHRoaXMucmVmcmVzaEFsZXJ0cygpO1xuICB9XG5cbiAgZGlzbWlzc0Zvb3RlckFsZXJ0KGkpIHtcbiAgICB0aGlzLmFsZXJ0Rm9vdGVyU2VydmljZS5kaXNtaXNzRm9vdGVyQWxlcnQoaSk7XG4gICAgdGhpcy5kaXNtaXNzQWxlcnQuZW1pdCh0cnVlKTtcbiAgICB0aGlzLnJlZnJlc2hBbGVydHMoKTtcbiAgfVxuXG4gIHJlZnJlc2hBbGVydHMoKSB7XG4gICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0Rm9vdGVyU2VydmljZS5nZXRBbGVydHMoKTtcbiAgfVxuXG59XG4iXX0=