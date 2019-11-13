/**
 * @fileoverview added by tsickle
 * Generated from: lib/history/history.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class HistoryComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF6RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFMNUIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixnN0JBQXVDOzthQUV4Qzs7O2lCQUtFLEtBQUs7bUJBSUwsS0FBSzt3QkFJTCxLQUFLOzs7Ozs7O0lBUk4sOEJBQW9COzs7OztJQUlwQixnQ0FBaUM7Ozs7O0lBSWpDLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGlzdG9yeU5vZGVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzeS1oaXN0b3J5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oaXN0b3J5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSGlzdG9yeUNvbXBvbmVudCB7XG4gLyoqXG4gICAqIHNldHMgdGhlIGlkIGZvciBoaXN0b3J5IGl0ZW1zXG4gICAqL1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICAvKipcbiAgICogc2V0cyB0aGUgbW9kZWwgZm9yIGdlbmVyYXRpbmcgbm9kZXNcbiAgICovXG4gIEBJbnB1dCgpIGRhdGE6IEhpc3RvcnlOb2RlVHlwZVtdO1xuICAvKipcbiAgICogU2V0cyB0aGUgJ2N1cnJlbnQnIG5vZGUgb24gdGhlIGlkIHZhbHVlIGRlZmluZWQgaW4gZGF0YVxuICAgKi9cbiAgQElucHV0KCkgY3VycmVudElkOiBzdHJpbmc7XG5cbn1cbiJdfQ==