/**
 * @fileoverview added by tsickle
 * Generated from: lib/history/history.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-history',
                    template: "<span aria-hidden=\"true\">\n    <fa-icon [icon]=\"['fas', 'minus']\" size=\"sm\"></fa-icon>\n</span>\n<ul>\n  <li *ngFor=\"let item of data; let i = index;\" [ngClass]=\"'history-item-'+i\"\n    [class.current]=\"item.id && item.id == currentId\"\n    [attr.aria-label]=\" item.id == currentId && item.ariaLabel ? item.ariaLabel : '' \">\n    <span>\n      <strong>{{item.date}}</strong>\n      <a *ngIf=\"item.url && item.title\" [routerLink]='item.url.split(\"/\")'\n       [queryParams]=\"item.queryParams\"\n        [attr.id]=\"id ? (id + i) : undefined\">{{ item.title }}</a>\n      <ng-container *ngIf=\"!item.url && item.title\">{{ item.title }}</ng-container>\n      <br *ngIf=\"item.title && item.description\" />\n      <p *ngIf=\"item.description\" [innerHTML]=\"item.description\"></p>\n    </span>\n  </li>\n</ul>\n\n<span aria-hidden=\"true\">\n    <fa-icon [icon]=\"['fas', 'minus']\" size=\"sm\"></fa-icon>\n</span>",
                    styles: ["fa-icon{color:#ccc;padding-left:4px}ul{list-style-type:none;padding-left:10px;margin:-10px 0}ul li{margin:0 0 0 -8px;padding:15px 0;border-left:2px solid #ccc;content:\"\\F111\";font:17px/1 FontAwesome;color:#5b616b;background-color:#fff}ul span{display:inline-table;margin-left:4px;width:90%}ul span em{padding-left:5px;display:block}ul span strong{display:block}ul .fa{font-size:12px;color:#fdb81e;padding-left:5px}"]
                }] }
    ];
    HistoryComponent.propDecorators = {
        id: [{ type: Input }],
        data: [{ type: Input }],
        currentId: [{ type: Input }]
    };
    return HistoryComponent;
}());
export { HistoryComponent };
if (false) {
    /**
     * sets the id for history items
     * @type {?}
     */
    HistoryComponent.prototype.id;
    /**
     * sets the model for generating nodes
     * @type {?}
     */
    HistoryComponent.prototype.data;
    /**
     * Sets the 'current' node on the id value defined in data
     * @type {?}
     */
    HistoryComponent.prototype.currentId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RDtJQUFBO0lBbUJBLENBQUM7O2dCQW5CQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGc3QkFBdUM7O2lCQUV4Qzs7O3FCQUtFLEtBQUs7dUJBSUwsS0FBSzs0QkFJTCxLQUFLOztJQUVSLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxnQkFBZ0I7Ozs7OztJQUkzQiw4QkFBb0I7Ozs7O0lBSXBCLGdDQUFpQzs7Ozs7SUFJakMscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIaXN0b3J5Tm9kZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N5LWhpc3RvcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vaGlzdG9yeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hpc3RvcnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIaXN0b3J5Q29tcG9uZW50IHtcbiAvKipcbiAgICogc2V0cyB0aGUgaWQgZm9yIGhpc3RvcnkgaXRlbXNcbiAgICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBzZXRzIHRoZSBtb2RlbCBmb3IgZ2VuZXJhdGluZyBub2Rlc1xuICAgKi9cbiAgQElucHV0KCkgZGF0YTogSGlzdG9yeU5vZGVUeXBlW107XG4gIC8qKlxuICAgKiBTZXRzIHRoZSAnY3VycmVudCcgbm9kZSBvbiB0aGUgaWQgdmFsdWUgZGVmaW5lZCBpbiBkYXRhXG4gICAqL1xuICBASW5wdXQoKSBjdXJyZW50SWQ6IHN0cmluZztcblxufVxuIl19