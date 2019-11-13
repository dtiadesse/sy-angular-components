/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/export/export.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, } from '@angular/core';
/**
 * @record
 */
export function DataConfiguration() { }
if (false) {
    /** @type {?} */
    DataConfiguration.prototype.EmailFieldName;
    /** @type {?} */
    DataConfiguration.prototype.StreetAddressFieldName;
    /** @type {?} */
    DataConfiguration.prototype.CityFieldName;
    /** @type {?} */
    DataConfiguration.prototype.StateCodeFieldName;
    /** @type {?} */
    DataConfiguration.prototype.ZipCodeFieldName;
}
export class ExportComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.fileName = 'export-data';
        this.datasource = [];
        this.isIpad = false;
    }
    /**
     * @return {?}
     */
    exportAsExcelFile() {
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            this.isIpad = true;
        }
        else {
            this.isIpad = false;
            this.data = this.datasource;
            this.fileName = this.fileName + '.csv';
            /** @type {?} */
            const csvRows = [];
            /** @type {?} */
            const csvheader = [];
            /** @type {?} */
            let csvString = '';
            for (const key in this.data[0]) {
                if (key) {
                    csvheader.push(key);
                }
            }
            csvRows.push(csvheader);
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                /** @type {?} */
                const csvrow = [];
                for (const i in item) {
                    if (i) {
                        csvrow.push('"' + item[i] + '"');
                    }
                }
                csvRows.push(csvrow);
            }));
            csvString = csvRows.join('\r\n');
            if (navigator.msSaveBlob) { // IE 10+
                // IE 10+
                /** @type {?} */
                const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                navigator.msSaveBlob(blob, this.fileName);
            }
            else {
                /** @type {?} */
                const csvdatacontent = 'data:text/csv;charset=utf-8,' + csvString;
                /** @type {?} */
                const encodedUri = encodeURI(csvdatacontent);
                /** @type {?} */
                const tempLink = document.createElement('a');
                tempLink.setAttribute('href', encodedUri);
                tempLink.setAttribute('download', this.fileName);
                document.getElementById('container').appendChild(tempLink);
                tempLink.click();
            }
        }
    }
}
ExportComponent.decorators = [
    { type: Component, args: [{
                selector: 'sy-export',
                template: "<div class=\"export-card\">\r\n    <div class=\"action-button\">\r\n        <button class=\"fileter-button\" [disabled]=\"isIpad\" (click)=\"exportAsExcelFile()\">\r\n            <fa-icon [icon]=\"['fas', 'file-export']\" size=\"lg\"></fa-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div id=\"container\" style=\"display:none;\"></div>",
                styles: [".export-card{padding:5px;margin:0 0 10px 10px;background:#fff;max-width:25rem}.unfiltered-icon{padding:1px;color:#4bc1d2;font-size:16px;border-radius:20px}.action-button button{margin-top:.5em;margin-right:1em;margin-bottom:.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.175rem;color:#fff;cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:1rem;line-height:1;outline:0;padding:.5rem;text-align:center;text-decoration:none;border:2px solid teal}.unfileter-button{background-color:#fff}.fileter-button{background-color:#4bc1d2}"]
            }] }
];
/** @nocollapse */
ExportComponent.ctorParameters = () => [
    { type: Renderer2 }
];
ExportComponent.propDecorators = {
    fileName: [{ type: Input }],
    datasource: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ExportComponent.prototype.fileName;
    /** @type {?} */
    ExportComponent.prototype.datasource;
    /** @type {?} */
    ExportComponent.prototype.data;
    /** @type {?} */
    ExportComponent.prototype.isIpad;
    /**
     * @type {?}
     * @private
     */
    ExportComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBZSxNQUFNLGVBQWUsQ0FBQzs7OztBQUV6RSx1Q0FPQzs7O0lBTkcsMkNBQXVCOztJQUN2QixtREFBK0I7O0lBQy9CLDBDQUFzQjs7SUFDdEIsK0NBQTJCOztJQUMzQiw2Q0FBeUI7O0FBVTdCLE1BQU0sT0FBTyxlQUFlOzs7O0lBS3hCLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKOUIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBRWhDLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFFZixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQzs7a0JBQ2pDLE9BQU8sR0FBRyxFQUFFOztrQkFDWixTQUFTLEdBQUcsRUFBRTs7Z0JBQ2hCLFNBQVMsR0FBRyxFQUFFO1lBQ2xCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkI7YUFDSjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7O3NCQUNmLE1BQU0sR0FBRyxFQUFFO2dCQUNqQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3FCQUNwQztpQkFDSjtnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFBQyxDQUFDO1lBQ0gsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHakMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsU0FBUzs7O3NCQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxDQUFDO2dCQUN2RSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0M7aUJBQU07O3NCQUNHLGNBQWMsR0FBRyw4QkFBOEIsR0FBRyxTQUFTOztzQkFDM0QsVUFBVSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7O3NCQUN0QyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQzVDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMxQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDcEI7U0FDSjtJQUNMLENBQUM7OztZQXZESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHFXQUFzQzs7YUFFekM7Ozs7WUFmMEIsU0FBUzs7O3VCQWtCL0IsS0FBSzt5QkFDTCxLQUFLOzs7O0lBRE4sbUNBQWtDOztJQUNsQyxxQ0FBZ0M7O0lBQ2hDLCtCQUFZOztJQUNaLGlDQUFlOzs7OztJQUNILG1DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFJlbmRlcmVyMiwgRWxlbWVudFJlZiwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUNvbmZpZ3VyYXRpb24ge1xyXG4gICAgRW1haWxGaWVsZE5hbWU6IHN0cmluZztcclxuICAgIFN0cmVldEFkZHJlc3NGaWVsZE5hbWU6IHN0cmluZztcclxuICAgIENpdHlGaWVsZE5hbWU6IHN0cmluZztcclxuICAgIFN0YXRlQ29kZUZpZWxkTmFtZTogc3RyaW5nO1xyXG4gICAgWmlwQ29kZUZpZWxkTmFtZTogc3RyaW5nO1xyXG5cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N5LWV4cG9ydCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXhwb3J0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2V4cG9ydC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRXhwb3J0Q29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGZpbGVOYW1lID0gJ2V4cG9ydC1kYXRhJztcclxuICAgIEBJbnB1dCgpIGRhdGFzb3VyY2U6IGFueVtdID0gW107XHJcbiAgICBkYXRhOiBhbnlbXTtcclxuICAgIGlzSXBhZCA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB9XHJcbiBcclxuICAgIGV4cG9ydEFzRXhjZWxGaWxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pcGFkfGlwb2R8aXBob25lL2kpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJcGFkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzSXBhZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGFzb3VyY2U7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZU5hbWUgPSB0aGlzLmZpbGVOYW1lICsgJy5jc3YnO1xyXG4gICAgICAgICAgICBjb25zdCBjc3ZSb3dzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNzdmhlYWRlciA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY3N2U3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGF0YVswXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNzdmhlYWRlci5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3N2Um93cy5wdXNoKGNzdmhlYWRlcik7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3N2cm93ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzdnJvdy5wdXNoKCdcIicgKyBpdGVtW2ldICsgJ1wiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3N2Um93cy5wdXNoKGNzdnJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjc3ZTdHJpbmcgPSBjc3ZSb3dzLmpvaW4oJ1xcclxcbicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IubXNTYXZlQmxvYikgeyAvLyBJRSAxMCtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbY3N2U3RyaW5nXSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgdGhpcy5maWxlTmFtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjc3ZkYXRhY29udGVudCA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJyArIGNzdlN0cmluZztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuY29kZWRVcmkgPSBlbmNvZGVVUkkoY3N2ZGF0YWNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBlbmNvZGVkVXJpKTtcclxuICAgICAgICAgICAgICAgIHRlbXBMaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCB0aGlzLmZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKS5hcHBlbmRDaGlsZCh0ZW1wTGluayk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wTGluay5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBcclxufVxyXG4iXX0=