/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/point-of-contact/point-of-contact.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var PointOfContactComponent = /** @class */ (function () {
    function PointOfContactComponent() {
    }
    PointOfContactComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-poc',
                    template: "<div class=\"sy-poc\">\r\n    <span class=\"sy-fullname\" *ngIf=\"data.fullName\">{{data.fullName}}<br></span>\r\n    <ng-container *ngIf=\"data.title\">{{data.title}}</ng-container>\r\n    <ng-container *ngIf=\"data.address\">{{data.address}}, <br></ng-container>\r\n    <ng-container *ngIf=\"data.address2\">{{data.address2}}<br /></ng-container>\r\n    <ng-container *ngIf=\"data.city || data.state || data.zip\">\r\n        <ng-container *ngIf=\"data.city\">{{data.city}}, </ng-container>\r\n        <ng-container *ngIf=\"data.state\">{{data.state}} </ng-container>\r\n        <ng-container *ngIf=\"data.zip\">{{data.zip}}</ng-container><br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.email\">\r\n        <fa-icon [icon]=\"['far', 'envelope']\" size=\"16px\"></fa-icon>\r\n        <a href=\"mailto:{{data.email}}\">{{data.email}}</a> <br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.phone\">\r\n        <fa-icon [icon]=\"['fas', 'phone']\" size=\"16px\"></fa-icon>\r\n\r\n        {{data.phone}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.phone2\">\r\n        <fa-icon [icon]=\"['fas', 'phone']\" size=\"16px\"></fa-icon>\r\n        {{data.phone2}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.fax\">\r\n        <fa-icon [icon]=\"['fas', 'fax']\" size=\"16px\"></fa-icon> {{data.fax}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.website\">\r\n        <fa-icon [icon]=\"['fas', 'globe']\" size=\"16px\"></fa-icon>\r\n        {{data.website}}<br>\r\n    </ng-container>\r\n</div>",
                    styles: [".sy-fullname{font-size:16px;font-weight:700;margin:0 5px 0 0}fa-icon{color:teal;margin-right:10px}.sy-poc{margin:10px}"]
                }] }
    ];
    PointOfContactComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return PointOfContactComponent;
}());
export { PointOfContactComponent };
if (false) {
    /**
     * Populates the component with the provided data
     * @type {?}
     */
    PointOfContactComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQtb2YtY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcG9pbnQtb2YtY29udGFjdC9wb2ludC1vZi1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pEO0lBQUE7SUFXQSxDQUFDOztnQkFYQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLGtpREFBZ0Q7O2lCQUVqRDs7O3VCQU1FLEtBQUs7O0lBQ1IsOEJBQUM7Q0FBQSxBQVhELElBV0M7U0FMWSx1QkFBdUI7Ozs7OztJQUlsQyx1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvaW50T2ZDb250YWN0VHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3ktcG9jJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9pbnQtb2YtY29udGFjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9pbnQtb2YtY29udGFjdC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnRPZkNvbnRhY3RDb21wb25lbnQgIHtcclxuICAvKipcclxuICAgKiBQb3B1bGF0ZXMgdGhlIGNvbXBvbmVudCB3aXRoIHRoZSBwcm92aWRlZCBkYXRhXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0YTogUG9pbnRPZkNvbnRhY3RUeXBlO1xyXG59XHJcbiJdfQ==