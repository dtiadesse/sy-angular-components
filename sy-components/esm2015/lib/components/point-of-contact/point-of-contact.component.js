/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/point-of-contact/point-of-contact.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class PointOfContactComponent {
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
if (false) {
    /**
     * Populates the component with the provided data
     * @type {?}
     */
    PointOfContactComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnQtb2YtY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcG9pbnQtb2YtY29udGFjdC9wb2ludC1vZi1jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELE1BQU0sT0FBTyx1QkFBdUI7OztZQU5uQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLGtpREFBZ0Q7O2FBRWpEOzs7bUJBTUUsS0FBSzs7Ozs7OztJQUFOLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9pbnRPZkNvbnRhY3RUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeS1wb2MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb2ludC1vZi1jb250YWN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb2ludC1vZi1jb250YWN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludE9mQ29udGFjdENvbXBvbmVudCAge1xyXG4gIC8qKlxyXG4gICAqIFBvcHVsYXRlcyB0aGUgY29tcG9uZW50IHdpdGggdGhlIHByb3ZpZGVkIGRhdGFcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRhOiBQb2ludE9mQ29udGFjdFR5cGU7XHJcbn1cclxuIl19