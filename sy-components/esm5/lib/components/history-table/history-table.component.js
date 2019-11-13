/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/history-table/history-table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
var HistoryTableComponent = /** @class */ (function () {
    function HistoryTableComponent() {
        this.faExpand = faExpand;
        this.historyConfig = {
            title: ' Change History',
            dateHeaderText: 'Date',
            detailsHeaderText: 'Change',
        };
        this.isExpand = true;
    }
    /**
     * @param {?} isExpand
     * @return {?}
     */
    HistoryTableComponent.prototype.expand = /**
     * @param {?} isExpand
     * @return {?}
     */
    function (isExpand) {
        this.isExpand = !isExpand;
    };
    HistoryTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-history-table',
                    template: "<fieldset>\n  <legend>{{historyConfig.title}}</legend>\n  <table class=\"history-table\">\n    <thead>\n      <tr>\n        <th class=\"history-table-date-column\">\n          <div>{{historyConfig.dateHeaderText}}</div>\n        </th>\n        <th class=\"history-table-change-column history-text-container\">\n          <div>{{historyConfig.detailsHeaderText}}</div>\n          <div>\n            <button *ngIf=\"isExpand\" (click)=\"expand(isExpand)\" aria-label=\"expand more\">\n              <fa-icon [icon]=\"['fas', 'caret-up']\" size=\"2x\"></fa-icon>\n            </button>\n            <button *ngIf=\"!isExpand\" (click)=\"expand(isExpand)\" >\n              <fa-icon [icon]=\"['fas', 'caret-down']\" size=\"2x\"></fa-icon>\n              </button> \n           </div>\n        </th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"historyData?.length > 0\">\n      <tr *ngFor=\"let history of historyData\">\n        <td>\n          {{history.DateTimeChanged | globaldatetime}}\n        </td>\n        <td>\n          <div *ngIf=\"isExpand\" class=\"general-text\">\n            {{history.SummaryReason}}\n          </div>\n          <div *ngIf=\"!isExpand\" class=\"general-text\">\n            <div>{{history.DetailField}}</div>\n            <div>{{history.DetailOld}}</div>\n            <div>{{history.DetailNew}}</div>\n            <div>{{history.DetailChangedBy}}</div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</fieldset>",
                    styles: [".history-table tr td{text-align:left;border:1px solid #a69b97;padding:5px}.history-table tr th{text-align:left;border:1px solid #000;background-color:rgba(0,0,0,.65);padding:5px}.history-table thead tr th{text-align:left;min-height:20px;border:1px solid #a69b97;color:#fff;margin-right:5px}.history-table tr:nth-child(even){background-color:#efebe9;border:1px solid #a69b97}.history-table-date-column{min-width:100px;text-align:left}.history-table-change-column{min-width:300px;text-align:left}.history-table-change-column div{margin-top:8px}.history-table-change-column button{min-height:10px}fieldset{max-width:600px}table{border:2px solid #a69b97;border-collapse:collapse}button{background-color:transparent;border:none}fa-icon{color:#fff;text-align:left;margin:10px}.history-text-container{display:-webkit-box;display:flex;flex-wrap:wrap;text-align:center}.icon-end{text-align:end}"]
                }] }
    ];
    HistoryTableComponent.propDecorators = {
        historyConfig: [{ type: Input }],
        historyData: [{ type: Input }]
    };
    return HistoryTableComponent;
}());
export { HistoryTableComponent };
if (false) {
    /** @type {?} */
    HistoryTableComponent.prototype.faExpand;
    /** @type {?} */
    HistoryTableComponent.prototype.historyConfig;
    /** @type {?} */
    HistoryTableComponent.prototype.historyData;
    /** @type {?} */
    HistoryTableComponent.prototype.isExpand;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGlzdG9yeS10YWJsZS9oaXN0b3J5LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM3RDtJQUFBO1FBTUUsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNYLGtCQUFhLEdBQWlCO1lBQ3JDLEtBQUssRUFBQyxpQkFBaUI7WUFDdkIsY0FBYyxFQUFFLE1BQU07WUFDdEIsaUJBQWlCLEVBQUUsUUFBUTtTQUM1QixDQUFDO1FBRUYsYUFBUSxHQUFZLElBQUksQ0FBQztJQUszQixDQUFDOzs7OztJQUpDLHNDQUFNOzs7O0lBQU4sVUFBTyxRQUFpQjtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzVCLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMDhDQUE2Qzs7aUJBRTlDOzs7Z0NBR0UsS0FBSzs4QkFLTCxLQUFLOztJQU1SLDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSxxQkFBcUI7OztJQUNoQyx5Q0FBb0I7O0lBQ3BCLDhDQUlFOztJQUNGLDRDQUF3Qzs7SUFDeEMseUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGlzdG9yeURhdGFUeXBlLCBIaXN0b3J5Q29uZmlnIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZmFFeHBhbmQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ktaGlzdG9yeS10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9oaXN0b3J5LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGlzdG9yeS10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhpc3RvcnlUYWJsZUNvbXBvbmVudCB7XG4gIGZhRXhwYW5kID0gZmFFeHBhbmQ7XG4gIEBJbnB1dCgpIGhpc3RvcnlDb25maWc6IEhpc3RvcnlDb25maWcgPXtcbiAgICB0aXRsZTonIENoYW5nZSBIaXN0b3J5JyxcbiAgICBkYXRlSGVhZGVyVGV4dDogJ0RhdGUnLFxuICAgIGRldGFpbHNIZWFkZXJUZXh0OiAnQ2hhbmdlJyxcbiAgfTsgXG4gIEBJbnB1dCgpIGhpc3RvcnlEYXRhOiBIaXN0b3J5RGF0YVR5cGVbXTtcbiAgaXNFeHBhbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBleHBhbmQoaXNFeHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzRXhwYW5kID0gIWlzRXhwYW5kO1xuICB9XG5cbn1cblxuIl19