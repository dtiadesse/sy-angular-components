/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/alert-footer/alert-footer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class AlertFooterService {
    constructor() {
        this.alerts = [];
    }
    /**
     * @return {?}
     */
    getAlerts() {
        return this.alerts;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    registerFooterAlert(data) {
        this.alerts.unshift(data);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    dismissFooterAlert(i) {
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
    }
}
AlertFooterService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    AlertFooterService.prototype.alerts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtZm9vdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0RCxNQUFNLE9BQU8sa0JBQWtCO0lBRC9CO1FBR1MsV0FBTSxHQUFRLEVBQUUsQ0FBQztJQW1CMUIsQ0FBQzs7OztJQWpCQyxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsbUJBQW1CLENBQUMsSUFBZTtRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRztZQUNoRCxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFwQkYsVUFBVTs7OztJQUdULG9DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFsZXJ0Rm9vdGVyU2VydmljZSB7XG5cbiAgcHVibGljIGFsZXJ0czogYW55ID0gW107XG5cbiAgZ2V0QWxlcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmFsZXJ0cztcbiAgfVxuXG4gIHJlZ2lzdGVyRm9vdGVyQWxlcnQoZGF0YTogQWxlcnRUeXBlKSB7XG4gICAgdGhpcy5hbGVydHMudW5zaGlmdChkYXRhKTtcbiAgfVxuXG4gIGRpc21pc3NGb290ZXJBbGVydChpKSB7XG4gICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0cy5maWx0ZXIoZnVuY3Rpb24ob2JqLCBpZHgpIHtcbiAgICAgIGlmIChpZHggPT09IGkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxufVxuIl19