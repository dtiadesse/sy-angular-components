/**
 * @fileoverview added by tsickle
 * Generated from: lib/sy-components.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { ListboxComponent } from './listbox/listbox.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from './components/component.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FieldsetWrapper } from './wrappers/fieldset-wrapper/fieldset-wrapper.component';
import { UploadModule } from './upload/upload.module';
import { HttpClientModule } from '@angular/common/http';
import { SyComponentsComponent } from './sy-components.component';
export class SyComponentsModule {
    constructor() {
        library.add(fas, far);
    }
}
SyComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SyComponentsComponent,
                    HistoryComponent,
                    ListboxComponent,
                    FieldsetWrapper],
                imports: [
                    FormsModule,
                    CommonModule,
                    FontAwesomeModule,
                    HttpClientModule,
                    RouterModule
                ],
                exports: [SyComponentsComponent,
                    HistoryComponent,
                    ComponentModule,
                    UploadModule,
                    ListboxComponent]
            },] }
];
/** @nocollapse */
SyComponentsModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ktY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N5LWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQW9CbEUsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCO29CQUNsQyxnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsZUFBZSxDQUFDO2dCQUNsQixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQjtvQkFDN0IsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLFlBQVk7b0JBQ1osZ0JBQWdCLENBQUM7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIaXN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGlzdGJveENvbXBvbmVudCB9IGZyb20gJy4vbGlzdGJveC9saXN0Ym94LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50Lm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBGaWVsZHNldFdyYXBwZXIgfSBmcm9tICcuL3dyYXBwZXJzL2ZpZWxkc2V0LXdyYXBwZXIvZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVcGxvYWRNb2R1bGUgfSBmcm9tICcuL3VwbG9hZC91cGxvYWQubW9kdWxlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU3lDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9zeS1jb21wb25lbnRzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1N5Q29tcG9uZW50c0NvbXBvbmVudCxcclxuICAgIEhpc3RvcnlDb21wb25lbnQsXHJcbiAgICBMaXN0Ym94Q29tcG9uZW50LFxyXG4gICAgRmllbGRzZXRXcmFwcGVyXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1N5Q29tcG9uZW50c0NvbXBvbmVudCxcclxuICAgIEhpc3RvcnlDb21wb25lbnQsXHJcbiAgICBDb21wb25lbnRNb2R1bGUsXHJcbiAgICBVcGxvYWRNb2R1bGUsXHJcbiAgICBMaXN0Ym94Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3lDb21wb25lbnRzTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcclxuICB9XHJcbn1cclxuIl19