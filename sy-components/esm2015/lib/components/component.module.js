/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/component.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const COMPONENT_COMPONENTS = [
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
export class ComponentModule {
}
ComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FontAwesomeModule,
                    ReactiveFormsModule
                ],
                declarations: [
                    ...COMPONENT_COMPONENTS
                ],
                exports: [
                    ...COMPONENT_COMPONENTS
                ],
                providers: [AlertFooterService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb21wb25lbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUUvRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUc7SUFDaEMsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsb0JBQW9CO0NBRXZCO0FBaUJELE1BQU0sT0FBTyxlQUFlOzs7WUFoQjNCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsbUJBQW1CO2lCQUN0QjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsR0FBRyxvQkFBb0I7aUJBQ3RCO2dCQUNMLE9BQU8sRUFBRTtvQkFDTCxHQUFHLG9CQUFvQjtpQkFDMUI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFFbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgR2xvYmFsRGF0ZVRpbWUgfSBmcm9tICcuLi9nbG9iYWxkYXRldGltZS5waXBlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IENvcHlDbGlwYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2NvcHktdG8tY2xpcGJvYXJkL2NvcHktY2xpcGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1ZGl0VHJhaWxDb21wb25lbnQgfSBmcm9tICcuL2F1ZGl0LXRyYWlsL2F1ZGl0LXRyYWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhpc3RvcnlUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vaGlzdG9yeS10YWJsZS9oaXN0b3J5LXRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbGVydEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb3NIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2Rvcy1oZWFkZXIvZG9zLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXhwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi9leHBvcnQvZXhwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlcXVpcmVkTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vcmVxdWlyZWQtbWVzc2FnZS9yZXF1aXJlZC1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvc0Zvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZG9zLWZvb3Rlci9kb3MtZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERvd25sb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9kb3dubG9hZC9kb3dubG9hZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb2ludE9mQ29udGFjdENvbXBvbmVudCB9IGZyb20gJy4vcG9pbnQtb2YtY29udGFjdC9wb2ludC1vZi1jb250YWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0Rm9vdGVyU2VydmljZSB9IGZyb20gJy4vYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmlkZW9QbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ09NUE9ORU5UX0NPTVBPTkVOVFMgPSBbXHJcbiAgICBBdWRpdFRyYWlsQ29tcG9uZW50LFxyXG4gICAgR2xvYmFsRGF0ZVRpbWUsXHJcbiAgICBIaXN0b3J5VGFibGVDb21wb25lbnQsXHJcbiAgICBBbGVydENvbXBvbmVudCxcclxuICAgIEFsZXJ0Rm9vdGVyQ29tcG9uZW50LFxyXG4gICAgRG9zSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgUHJvZ3Jlc3NCYXJDb21wb25lbnQsXHJcbiAgICBBY3Rpb25CdXR0b25Db21wb25lbnQsXHJcbiAgICBUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgRXhwb3J0Q29tcG9uZW50LFxyXG4gICAgUmVxdWlyZWRNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgRG9zRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgRG93bmxvYWRDb21wb25lbnQsXHJcbiAgICBQb2ludE9mQ29udGFjdENvbXBvbmVudCxcclxuICAgIENvcHlDbGlwYm9hcmRDb21wb25lbnQsXHJcbiAgICBWaWRlb1BsYXllckNvbXBvbmVudCxcclxuICAgIFxyXG5dO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgLi4uQ09NUE9ORU5UX0NPTVBPTkVOVFNcclxuICAgICAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIC4uLkNPTVBPTkVOVF9DT01QT05FTlRTXHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQWxlcnRGb290ZXJTZXJ2aWNlXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudE1vZHVsZSB7IH1cclxuIl19