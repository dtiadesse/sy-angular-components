/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/component.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalDateTime } from '../globaldatetime.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CopyClipboardComponent } from './copy-to-clipboard/copy-clipboard.component';
import { ActionButtonComponent } from './action-button/action-button.component';
import { AuditTrailComponent } from './audit-trail/audit-trail.component';
import { HistoryTableComponent } from './history-table/history-table.component';
import { AlertComponent } from './alert/alert.component';
import { AlertFooterComponent } from './alert-footer/alert-footer.component';
import { DosHeaderComponent } from './dos-header/dos-header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ExportComponent } from './export/export.component';
import { RequiredMessageComponent } from './required-message/required-message.component';
import { DosFooterComponent } from './dos-footer/dos-footer.component';
import { DownloadComponent } from './download/download.component';
import { PointOfContactComponent } from './point-of-contact/point-of-contact.component';
import { AlertFooterService } from './alert-footer/alert-footer.service';
import { VideoPlayerComponent } from './video/video.component';
/** @type {?} */
export var COMPONENT_COMPONENTS = [
    AuditTrailComponent,
    GlobalDateTime,
    HistoryTableComponent,
    AlertComponent,
    AlertFooterComponent,
    DosHeaderComponent,
    ProgressBarComponent,
    ActionButtonComponent,
    ToolbarComponent,
    ExportComponent,
    RequiredMessageComponent,
    DosFooterComponent,
    DownloadComponent,
    PointOfContactComponent,
    CopyClipboardComponent,
    VideoPlayerComponent,
];
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        FontAwesomeModule,
                        ReactiveFormsModule
                    ],
                    declarations: tslib_1.__spread(COMPONENT_COMPONENTS),
                    exports: tslib_1.__spread(COMPONENT_COMPONENTS),
                    providers: [AlertFooterService]
                },] }
    ];
    return ComponentModule;
}());
export { ComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21wb25lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFL0QsTUFBTSxLQUFPLG9CQUFvQixHQUFHO0lBQ2hDLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtDQUV2QjtBQUNEO0lBQUE7SUFnQitCLENBQUM7O2dCQWhCL0IsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3RCO29CQUNELFlBQVksbUJBQ0wsb0JBQW9CLENBQ3RCO29CQUNMLE9BQU8sbUJBQ0Esb0JBQW9CLENBQzFCO29CQUNELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUVsQzs7SUFDOEIsc0JBQUM7Q0FBQSxBQWhCaEMsSUFnQmdDO1NBQW5CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR2xvYmFsRGF0ZVRpbWUgfSBmcm9tICcuLi9nbG9iYWxkYXRldGltZS5waXBlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IENvcHlDbGlwYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvcHktdG8tY2xpcGJvYXJkL2NvcHktY2xpcGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1ZGl0VHJhaWxDb21wb25lbnQgfSBmcm9tICcuL2F1ZGl0LXRyYWlsL2F1ZGl0LXRyYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpc3RvcnlUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS10YWJsZS9oaXN0b3J5LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb3NIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2Rvcy1oZWFkZXIvZG9zLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9leHBvcnQvZXhwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcXVpcmVkTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtbWVzc2FnZS9yZXF1aXJlZC1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvc0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZG9zLWZvb3Rlci9kb3MtZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvd25sb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb2ludE9mQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vcG9pbnQtb2YtY29udGFjdC9wb2ludC1vZi1jb250YWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0Rm9vdGVyU2VydmljZSB9IGZyb20gJy4vYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmlkZW9QbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0NPTVBPTkVOVFMgPSBbXHJcbiAgICBBdWRpdFRyYWlsQ29tcG9uZW50LFxyXG4gICAgR2xvYmFsRGF0ZVRpbWUsXHJcbiAgICBIaXN0b3J5VGFibGVDb21wb25lbnQsXHJcbiAgICBBbGVydENvbXBvbmVudCxcclxuICAgIEFsZXJ0Rm9vdGVyQ29tcG9uZW50LFxyXG4gICAgRG9zSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXHJcbiAgICBBY3Rpb25CdXR0b25Db21wb25lbnQsXHJcbiAgICBUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgRXhwb3J0Q29tcG9uZW50LFxyXG4gICAgUmVxdWlyZWRNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgRG9zRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgRG93bmxvYWRDb21wb25lbnQsXHJcbiAgICBQb2ludE9mQ29udGFjdENvbXBvbmVudCxcclxuICAgIENvcHlDbGlwYm9hcmRDb21wb25lbnQsXHJcbiAgICBWaWRlb1BsYXllckNvbXBvbmVudCxcclxuICAgIFxyXG5dO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgLi4uQ09NUE9ORU5UX0NPTVBPTkVOVFNcclxuICAgICAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIC4uLkNPTVBPTkVOVF9DT01QT05FTlRTXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQWxlcnRGb290ZXJTZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZHVsZSB7IH1cclxuIl19