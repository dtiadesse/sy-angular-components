/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/audit-trail/audit-trail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class AuditTrailComponent {
    constructor() {
        this.dateFormat = 'MMM dd, yyyy hh:mm:ss a';
    }
}
AuditTrailComponent.decorators = [
    { type: Component, args: [{
                selector: 'sy-audit-trail',
                template: "<div class=\"audit-trail\">\n  <div>\n    <label>Last Modified :</label>\n    <label> {{lastModified  | date : dateFormat }}</label>\n  </div>\n  <div>\n    <label>Last Modified By :</label>\n    <label>\n      <a href=\"mailto:{{lastModifiedByEmail}}\">{{lastModifiedByEmail}}</a>\n    </label>\n  </div>\n  <div>\n    <label>Created :</label>\n    <label>{{created |  date : dateFormat}}</label>\n  </div>\n  <div>\n    <label>Created By :</label>\n    <label>\n      <a href=\"mailto:{{createdByEmail}}\">{{createdByEmail}}</a>\n    </label>\n  </div>\n</div>",
                styles: [".audit-trail{background-color:#add8bb;min-height:100px;max-width:600px;padding:10px}.audit-trail div label{font-family:'Open Sans',sans-serif;font-size:14px;padding-top:5px;color:#000}.audit-trail div label:first-child{width:150px;font-weight:700;display:inline-table}.audit-trail div a{font-family:'Open Sans',sans-serif;font-size:14px;padding-top:5px}"]
            }] }
];
AuditTrailComponent.propDecorators = {
    lastModifiedByEmail: [{ type: Input }],
    createdByEmail: [{ type: Input }],
    created: [{ type: Input }],
    lastModified: [{ type: Input }],
    dateFormat: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AuditTrailComponent.prototype.lastModifiedByEmail;
    /** @type {?} */
    AuditTrailComponent.prototype.createdByEmail;
    /** @type {?} */
    AuditTrailComponent.prototype.created;
    /** @type {?} */
    AuditTrailComponent.prototype.lastModified;
    /** @type {?} */
    AuditTrailComponent.prototype.dateFormat;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQtdHJhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1ZGl0LXRyYWlsL2F1ZGl0LXRyYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUWpELE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFVVyxlQUFVLEdBQVkseUJBQXlCLENBQUM7SUFDM0QsQ0FBQzs7O1lBWEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDhqQkFBMkM7O2FBRTVDOzs7a0NBRUUsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzs7O0lBSk4sa0RBQXFDOztJQUNyQyw2Q0FBZ0M7O0lBQ2hDLHNDQUFzQjs7SUFDdEIsMkNBQTJCOztJQUMzQix5Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdWRpdFRyYWlsSW5mbyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ktYXVkaXQtdHJhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXVkaXQtdHJhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hdWRpdC10cmFpbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1ZGl0VHJhaWxDb21wb25lbnQge1xuICBASW5wdXQoKSBsYXN0TW9kaWZpZWRCeUVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNyZWF0ZWRCeUVtYWlsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNyZWF0ZWQ6IGFueTtcbiAgQElucHV0KCkgbGFzdE1vZGlmaWVkOiBhbnk7XG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQgOiBzdHJpbmcgPSAnTU1NIGRkLCB5eXl5IGhoOm1tOnNzIGEnO1xufVxuIl19