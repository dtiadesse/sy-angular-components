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
var SyComponentsModule = /** @class */ (function () {
    function SyComponentsModule() {
        library.add(fas, far);
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
    SyComponentsModule.ctorParameters = function () { return []; };
    return SyComponentsModule;
}());
export { SyComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ktY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N5LWNvbXBvbmVudHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQW1CRTtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQXJCRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCO3dCQUNsQyxnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsZUFBZSxDQUFDO29CQUNsQixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQjt3QkFDN0IsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLFlBQVk7d0JBQ1osZ0JBQWdCLENBQUM7aUJBQ3BCOzs7O0lBS0QseUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQUpZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaXN0Ym94Q29tcG9uZW50IH0gZnJvbSAnLi9saXN0Ym94L2xpc3Rib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9jb21wb25lbnQubW9kdWxlJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IEZpZWxkc2V0V3JhcHBlciB9IGZyb20gJy4vd3JhcHBlcnMvZmllbGRzZXQtd3JhcHBlci9maWVsZHNldC13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVwbG9hZE1vZHVsZSB9IGZyb20gJy4vdXBsb2FkL3VwbG9hZC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTeUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3N5LWNvbXBvbmVudHMuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU3lDb21wb25lbnRzQ29tcG9uZW50LFxyXG4gICAgSGlzdG9yeUNvbXBvbmVudCxcclxuICAgIExpc3Rib3hDb21wb25lbnQsXHJcbiAgICBGaWVsZHNldFdyYXBwZXJdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgUm91dGVyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbU3lDb21wb25lbnRzQ29tcG9uZW50LFxyXG4gICAgSGlzdG9yeUNvbXBvbmVudCxcclxuICAgIENvbXBvbmVudE1vZHVsZSxcclxuICAgIFVwbG9hZE1vZHVsZSxcclxuICAgIExpc3Rib3hDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTeUNvbXBvbmVudHNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xyXG4gIH1cclxufVxyXG4iXX0=