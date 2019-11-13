/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/download/download.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
export class DownloadComponent {
    constructor() {
        /**
         * model for populating downloads
         */
        this.packages = [];
        /**
         * pass in an attachment error to trigger a message
         */
        this.attachmentError = false;
    }
    /**
     * @return {?}
     */
    hasPublicPackages() {
        for (const pkg of this.packages) {
            if (pkg.access.toLowerCase() === 'public') {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} card
     * @return {?}
     */
    toggleAccordion(card) {
        card.accordionState =
            card.accordionState === 'expanded' ? 'collapsed' : 'expanded';
    }
    /**
     * @param {?} field
     * @return {?}
     */
    isSecure(field) {
        if (field.toLowerCase() === 'public') {
            return 'Public';
        }
        else {
            return 'Secured';
        }
    }
}
DownloadComponent.decorators = [
    { type: Component, args: [{
                selector: 'sy-download',
                template: "<section>\r\n  <div class=\"download-container-header\">\r\n    <h2>Packages</h2>\r\n    <ng-container *ngIf=\"packages\">\r\n      <span class=\"download-button\">\r\n        <a class=\"usa-button-small usa-button-gray\" *ngIf=\"hasPublicPackages() && downloadAllUrl\"\r\n          [attr.href]=\"downloadAllUrl\">\r\n          <!-- <span class=\"fa fa-cloud-download\" aria-hidden=\"true\"></span> -->\r\n          <fa-icon [icon]=\"['fas', 'cloud-download-alt']\" size=\"lg\"></fa-icon>\r\n          <span>Download All Packages</span>\r\n        </a>\r\n      </span>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"packages && packages.length > 0\">\r\n    <div class=\"card download-container\" *ngFor=\"let package of packages\">\r\n      <!-- It's public -->\r\n      <div *ngIf=\"package.access.toLowerCase() === 'public'\" class=\"card-header {{ package.accordionState }}\"\r\n        (click)=\"toggleAccordion(package)\" tabindex=\"0\" (keyup.enter)=\"toggleAccordion(package)\">\r\n        <h3>{{ package.name }} ({{ package.resources?.length }})</h3>\r\n        <strong>Type: {{ package.type }}</strong>\r\n      </div>\r\n\r\n      <span *ngIf=\"package.access.toLowerCase() === 'public' && package.downloadUrl\" class=\"download-button\">\r\n        <a class=\"usa-button-small usa-button-gray\" [attr.href]=\"package.downloadUrl\">\r\n          <fa-icon [icon]=\"['fas', 'cloud-download-alt']\" size=\"lg\"></fa-icon>\r\n          <span>Download</span>\r\n        </a>\r\n      </span>\r\n\r\n      <ul *ngIf=\"package.access.toLowerCase() === 'public'\" [@accordion]=\"package.accordionState\"\r\n        class=\"usa-zebra-list\">\r\n        <li *ngFor=\"let resource of package.resources\">\r\n          <div class=\"download-info\">\r\n            <fa-icon [icon]=\"resource.typeInfo.iconClass\" size=\"1x\"></fa-icon>&nbsp;\r\n            <span class=\"download-info-icon\">\r\n              <span class=\"{{resource.typeInfo.iconClass}}\"></span>\r\n            </span>\r\n            <span class=\"download-info-link\">\r\n              <a [attr.href]=\"resource.downloadUrl\">\r\n                {{resource.description}}\r\n                <sup *ngIf=\"resource.size && resource.size != 0\">\r\n                  {{resource.size }}\r\n                </sup>\r\n              </a>\r\n            </span>\r\n            <span class=\"download-info-type\">\r\n              {{resource.typeInfo.name}}\r\n            </span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Its private -->\r\n      <div *ngIf=\"package.access.toLowerCase() === 'private'\" class=\"card-header-secure\">\r\n        <h3>{{ package.name }} ({{ package.resources?.length }})</h3>\r\n        <strong>Type: {{ package.type }}</strong>\r\n      </div>\r\n\r\n      <div *ngIf=\"package.access.toLowerCase() === 'private'\" class=\"card-secure-content\">\r\n        <p>\r\n          <fa-icon [icon]=\"['fas', 'lock']\" size=\"lg\"></fa-icon>\r\n          <em>Secure/sensitive attachments are not currently available, please go to <a\r\n              href=\"https://www.fbo.gov/\">FBO.gov</a> to view this attachment.</em>\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Extra options -->\r\n      <div class=\"card-extra-content\">\r\n        <div class=\"label-container-inline\">\r\n          <fa-icon [icon]=\"['far', 'calendar-check']\" size=\"lg\"></fa-icon>\r\n\r\n          <strong>Posted on {{ package.postedDate }}</strong>\r\n        </div>\r\n        <div class=\"label-container-inline package-access\">\r\n          <fa-icon [icon]=\"['fas', 'unlock']\" size=\"lg\"></fa-icon>\r\n          <strong>{{isSecure(package.access)}}</strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"card\" *ngIf=\"packages.length < 1 && !attachmentError\">\r\n    <div class=\"card-secure-content usa-text-center\">\r\n      <fa-icon [icon]=\"['fas', 'spinner']\" size=\"lg\"></fa-icon>\r\n      <strong>Loading &hellip;</strong>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"packages.length < 1 && attachmentError\">\r\n    <div class=\"card-secure-content usa-text-center\">\r\n      <strong>No packages uploaded.</strong>\r\n    </div>\r\n  </div>\r\n</section>",
                animations: [
                    trigger('accordion', [
                        state('collapsed', style({
                            height: '0px',
                        })),
                        state('expanded', style({
                            height: '*',
                        })),
                        transition('collapsed => expanded', animate('100ms ease-in')),
                        transition('expanded => collapsed', animate('100ms ease-out'))
                    ]),
                    trigger('intro', [
                        state('fade', style({
                            opacity: 1,
                            transform: 'translateY(0)'
                        })),
                        transition('void => *', [
                            style({
                                opacity: 0,
                                transform: 'translateY(-30%)'
                            }),
                            animate('.5s .5s cubic-bezier(0.175, 0.885, 0.320, 1.275)')
                        ]),
                        transition('* => void', [
                            animate('.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)', style({
                                opacity: 0,
                                transform: 'translateY(-30%)'
                            }))
                        ])
                    ])
                ]
            }] }
];
DownloadComponent.propDecorators = {
    packages: [{ type: Input }],
    attachmentError: [{ type: Input }],
    downloadAllUrl: [{ type: Input }]
};
if (false) {
    /**
     * model for populating downloads
     * @type {?}
     */
    DownloadComponent.prototype.packages;
    /**
     * pass in an attachment error to trigger a message
     * @type {?}
     */
    DownloadComponent.prototype.attachmentError;
    /**
     * sets download all url link
     * @type {?}
     */
    DownloadComponent.prototype.downloadAllUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFzQ2pGLE1BQU0sT0FBTyxpQkFBaUI7SUFuQzlCOzs7O1FBdUNrQixhQUFRLEdBQTBCLEVBQUUsQ0FBQzs7OztRQUlyQyxvQkFBZSxHQUFZLEtBQUssQ0FBQztJQTJCbkQsQ0FBQzs7OztJQXJCUSxpQkFBaUI7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQzlCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLEVBQUU7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsSUFBSTtRQUN6QixJQUFJLENBQUMsY0FBYztZQUNqQixJQUFJLENBQUMsY0FBYyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDcEMsT0FBTyxRQUFRLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNHFJQUF3QztnQkFDeEMsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ25CLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDOzRCQUN2QixNQUFNLEVBQUUsS0FBSzt5QkFDZCxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7NEJBQ3RCLE1BQU0sRUFBRSxHQUFHO3lCQUNaLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUM3RCxVQUFVLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQy9ELENBQUM7b0JBQ0YsT0FBTyxDQUFDLE9BQU8sRUFBRTt3QkFDZixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDbEIsT0FBTyxFQUFFLENBQUM7NEJBQ1YsU0FBUyxFQUFFLGVBQWU7eUJBQzNCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFFLENBQUM7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQUMsa0RBQWtELENBQUM7eUJBQzVELENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsT0FBTyxDQUFDLDhDQUE4QyxFQUFFLEtBQUssQ0FBQztnQ0FDNUQsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQyxDQUFDO3lCQUNKLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDthQUNGOzs7dUJBS0UsS0FBSzs4QkFJTCxLQUFLOzZCQUlMLEtBQUs7Ozs7Ozs7SUFSTixxQ0FBcUQ7Ozs7O0lBSXJELDRDQUFpRDs7Ozs7SUFJakQsMkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBEb3dubG9hZFBhY2thZ2VUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzeS1kb3dubG9hZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb3dubG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdhY2NvcmRpb24nLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcwcHgnLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2NvbGxhcHNlZCA9PiBleHBhbmRlZCcsIGFuaW1hdGUoJzEwMG1zIGVhc2UtaW4nKSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcxMDBtcyBlYXNlLW91dCcpKVxuICAgIF0pLFxuICAgIHRyaWdnZXIoJ2ludHJvJywgW1xuICAgICAgc3RhdGUoJ2ZhZGUnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTMwJSknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcuNXMgLjVzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjI3NSknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIGFuaW1hdGUoJy41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4yNzUpJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMzAlKSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRG93bmxvYWRDb21wb25lbnQge1xuICAvKipcbiAgICogbW9kZWwgZm9yIHBvcHVsYXRpbmcgZG93bmxvYWRzXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgcGFja2FnZXM6IERvd25sb2FkUGFja2FnZVR5cGVbXSA9IFtdO1xuICAvKipcbiAgICogcGFzcyBpbiBhbiBhdHRhY2htZW50IGVycm9yIHRvIHRyaWdnZXIgYSBtZXNzYWdlXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgYXR0YWNobWVudEVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiBzZXRzIGRvd25sb2FkIGFsbCB1cmwgbGlua1xuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGRvd25sb2FkQWxsVXJsOiBzdHJpbmc7XG5cbiAgcHVibGljIGhhc1B1YmxpY1BhY2thZ2VzKCkge1xuICAgIGZvciAoY29uc3QgcGtnIG9mIHRoaXMucGFja2FnZXMpe1xuICAgICAgaWYgKHBrZy5hY2Nlc3MudG9Mb3dlckNhc2UoKSA9PT0gJ3B1YmxpYycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVBY2NvcmRpb24oY2FyZCkge1xuICAgIGNhcmQuYWNjb3JkaW9uU3RhdGUgPVxuICAgICAgY2FyZC5hY2NvcmRpb25TdGF0ZSA9PT0gJ2V4cGFuZGVkJyA/ICdjb2xsYXBzZWQnIDogJ2V4cGFuZGVkJztcbiAgfVxuXG4gIGlzU2VjdXJlKGZpZWxkOiBzdHJpbmcpIHtcbiAgICBpZiAoZmllbGQudG9Mb3dlckNhc2UoKSA9PT0gJ3B1YmxpYycpIHtcbiAgICAgIHJldHVybiAnUHVibGljJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdTZWN1cmVkJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==