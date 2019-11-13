/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert-footer/alert-footer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var AlertFooterService = /** @class */ (function () {
    function AlertFooterService() {
        this.alerts = [];
    }
    /**
     * @return {?}
     */
    AlertFooterService.prototype.getAlerts = /**
     * @return {?}
     */
    function () {
        return this.alerts;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    AlertFooterService.prototype.registerFooterAlert = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.alerts.unshift(data);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    AlertFooterService.prototype.dismissFooterAlert = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.alerts = this.alerts.filter((/**
         * @param {?} obj
         * @param {?} idx
         * @return {?}
         */
        function (obj, idx) {
            if (idx === i) {
                return false;
            }
            return true;
        }));
    };
    AlertFooterService.decorators = [
        { type: Injectable }
    ];
    return AlertFooterService;
}());
export { AlertFooterService };
if (false) {
    /** @type {?} */
    AlertFooterService.prototype.alerts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZm9vdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RDtJQUFBO1FBR1MsV0FBTSxHQUFRLEVBQUUsQ0FBQztJQW1CMUIsQ0FBQzs7OztJQWpCQyxzQ0FBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBZTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELCtDQUFrQjs7OztJQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7OztRQUFDLFVBQVMsR0FBRyxFQUFFLEdBQUc7WUFDaEQsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO2dCQUNiLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBcEJGLFVBQVU7O0lBc0JYLHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksa0JBQWtCOzs7SUFFN0Isb0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWxlcnRGb290ZXJTZXJ2aWNlIHtcblxuICBwdWJsaWMgYWxlcnRzOiBhbnkgPSBbXTtcblxuICBnZXRBbGVydHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxlcnRzO1xuICB9XG5cbiAgcmVnaXN0ZXJGb290ZXJBbGVydChkYXRhOiBBbGVydFR5cGUpIHtcbiAgICB0aGlzLmFsZXJ0cy51bnNoaWZ0KGRhdGEpO1xuICB9XG5cbiAgZGlzbWlzc0Zvb3RlckFsZXJ0KGkpIHtcbiAgICB0aGlzLmFsZXJ0cyA9IHRoaXMuYWxlcnRzLmZpbHRlcihmdW5jdGlvbihvYmosIGlkeCkge1xuICAgICAgaWYgKGlkeCA9PT0gaSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=