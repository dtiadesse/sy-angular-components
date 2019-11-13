/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/audit-trail/audit-trail.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var AuditTrailComponent = /** @class */ (function () {
    function AuditTrailComponent() {
        this.dateFormat = 'MMM dd, yyyy hh:mm:ss a';
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
    return AuditTrailComponent;
}());
export { AuditTrailComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXQtdHJhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1ZGl0LXRyYWlsL2F1ZGl0LXRyYWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pEO0lBQUE7UUFVVyxlQUFVLEdBQVkseUJBQXlCLENBQUM7SUFDM0QsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDhqQkFBMkM7O2lCQUU1Qzs7O3NDQUVFLEtBQUs7aUNBQ0wsS0FBSzswQkFDTCxLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7SUFDUiwwQkFBQztDQUFBLEFBWEQsSUFXQztTQU5ZLG1CQUFtQjs7O0lBQzlCLGtEQUFxQzs7SUFDckMsNkNBQWdDOztJQUNoQyxzQ0FBc0I7O0lBQ3RCLDJDQUEyQjs7SUFDM0IseUNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXVkaXRUcmFpbEluZm8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N5LWF1ZGl0LXRyYWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1ZGl0LXRyYWlsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXVkaXQtdHJhaWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBdWRpdFRyYWlsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbGFzdE1vZGlmaWVkQnlFbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBjcmVhdGVkQnlFbWFpbDogc3RyaW5nO1xuICBASW5wdXQoKSBjcmVhdGVkOiBhbnk7XG4gIEBJbnB1dCgpIGxhc3RNb2RpZmllZDogYW55O1xuICBASW5wdXQoKSBkYXRlRm9ybWF0IDogc3RyaW5nID0gJ01NTSBkZCwgeXl5eSBoaDptbTpzcyBhJztcbn1cbiJdfQ==