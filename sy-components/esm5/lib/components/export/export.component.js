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
var ExportComponent = /** @class */ (function () {
    function ExportComponent(renderer) {
        this.renderer = renderer;
        this.fileName = 'export-data';
        this.datasource = [];
        this.isIpad = false;
    }
    /**
     * @return {?}
     */
    ExportComponent.prototype.exportAsExcelFile = /**
     * @return {?}
     */
    function () {
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            this.isIpad = true;
        }
        else {
            this.isIpad = false;
            this.data = this.datasource;
            this.fileName = this.fileName + '.csv';
            /** @type {?} */
            var csvRows_1 = [];
            /** @type {?} */
            var csvheader = [];
            /** @type {?} */
            var csvString = '';
            for (var key in this.data[0]) {
                if (key) {
                    csvheader.push(key);
                }
            }
            csvRows_1.push(csvheader);
            this.data.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var csvrow = [];
                for (var i in item) {
                    if (i) {
                        csvrow.push('"' + item[i] + '"');
                    }
                }
                csvRows_1.push(csvrow);
            }));
            csvString = csvRows_1.join('\r\n');
            if (navigator.msSaveBlob) { // IE 10+
                // IE 10+
                /** @type {?} */
                var blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                navigator.msSaveBlob(blob, this.fileName);
            }
            else {
                /** @type {?} */
                var csvdatacontent = 'data:text/csv;charset=utf-8,' + csvString;
                /** @type {?} */
                var encodedUri = encodeURI(csvdatacontent);
                /** @type {?} */
                var tempLink = document.createElement('a');
                tempLink.setAttribute('href', encodedUri);
                tempLink.setAttribute('download', this.fileName);
                document.getElementById('container').appendChild(tempLink);
                tempLink.click();
            }
        }
    };
    ExportComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-export',
                    template: "<div class=\"export-card\">\r\n    <div class=\"action-button\">\r\n        <button class=\"fileter-button\" [disabled]=\"isIpad\" (click)=\"exportAsExcelFile()\">\r\n            <fa-icon [icon]=\"['fas', 'file-export']\" size=\"lg\"></fa-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div id=\"container\" style=\"display:none;\"></div>",
                    styles: [".export-card{padding:5px;margin:0 0 10px 10px;background:#fff;max-width:25rem}.unfiltered-icon{padding:1px;color:#4bc1d2;font-size:16px;border-radius:20px}.action-button button{margin-top:.5em;margin-right:1em;margin-bottom:.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.175rem;color:#fff;cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:1rem;line-height:1;outline:0;padding:.5rem;text-align:center;text-decoration:none;border:2px solid teal}.unfileter-button{background-color:#fff}.fileter-button{background-color:#4bc1d2}"]
                }] }
    ];
    /** @nocollapse */
    ExportComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    ExportComponent.propDecorators = {
        fileName: [{ type: Input }],
        datasource: [{ type: Input }]
    };
    return ExportComponent;
}());
export { ExportComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9leHBvcnQvZXhwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBZSxNQUFNLGVBQWUsQ0FBQzs7OztBQUV6RSx1Q0FPQzs7O0lBTkcsMkNBQXVCOztJQUN2QixtREFBK0I7O0lBQy9CLDBDQUFzQjs7SUFDdEIsK0NBQTJCOztJQUMzQiw2Q0FBeUI7O0FBSTdCO0lBV0kseUJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKOUIsYUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN6QixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBRWhDLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFFZixDQUFDOzs7O0lBRUQsMkNBQWlCOzs7SUFBakI7UUFDSSxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDOztnQkFDakMsU0FBTyxHQUFHLEVBQUU7O2dCQUNaLFNBQVMsR0FBRyxFQUFFOztnQkFDaEIsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLEdBQUcsRUFBRTtvQkFDTCxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN2QjthQUNKO1lBQ0QsU0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLElBQUk7O29CQUNaLE1BQU0sR0FBRyxFQUFFO2dCQUNqQixLQUFLLElBQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEVBQUU7d0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3FCQUNwQztpQkFDSjtnQkFDRCxTQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFBQyxDQUFDO1lBQ0gsU0FBUyxHQUFHLFNBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHakMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsU0FBUzs7O29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxDQUFDO2dCQUN2RSxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0M7aUJBQU07O29CQUNHLGNBQWMsR0FBRyw4QkFBOEIsR0FBRyxTQUFTOztvQkFDM0QsVUFBVSxHQUFHLFNBQVMsQ0FBQyxjQUFjLENBQUM7O29CQUN0QyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQzVDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMxQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDcEI7U0FDSjtJQUNMLENBQUM7O2dCQXZESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHFXQUFzQzs7aUJBRXpDOzs7O2dCQWYwQixTQUFTOzs7MkJBa0IvQixLQUFLOzZCQUNMLEtBQUs7O0lBa0RWLHNCQUFDO0NBQUEsQUExREQsSUEwREM7U0FwRFksZUFBZTs7O0lBQ3hCLG1DQUFrQzs7SUFDbEMscUNBQWdDOztJQUNoQywrQkFBWTs7SUFDWixpQ0FBZTs7Ozs7SUFDSCxtQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBSZW5kZXJlcjIsIEVsZW1lbnRSZWYsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFDb25maWd1cmF0aW9uIHtcclxuICAgIEVtYWlsRmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBTdHJlZXRBZGRyZXNzRmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBDaXR5RmllbGROYW1lOiBzdHJpbmc7XHJcbiAgICBTdGF0ZUNvZGVGaWVsZE5hbWU6IHN0cmluZztcclxuICAgIFppcENvZGVGaWVsZE5hbWU6IHN0cmluZztcclxuXHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzeS1leHBvcnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2V4cG9ydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9leHBvcnQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4cG9ydENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBmaWxlTmFtZSA9ICdleHBvcnQtZGF0YSc7XHJcbiAgICBASW5wdXQoKSBkYXRhc291cmNlOiBhbnlbXSA9IFtdO1xyXG4gICAgZGF0YTogYW55W107XHJcbiAgICBpc0lwYWQgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgfVxyXG4gXHJcbiAgICBleHBvcnRBc0V4Y2VsRmlsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaXBhZHxpcG9kfGlwaG9uZS9pKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSXBhZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0lwYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhc291cmNlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVOYW1lID0gdGhpcy5maWxlTmFtZSArICcuY3N2JztcclxuICAgICAgICAgICAgY29uc3QgY3N2Um93cyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBjc3ZoZWFkZXIgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNzdlN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRhdGFbMF0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjc3ZoZWFkZXIucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNzdlJvd3MucHVzaChjc3ZoZWFkZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNzdnJvdyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3Zyb3cucHVzaCgnXCInICsgaXRlbVtpXSArICdcIicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNzdlJvd3MucHVzaChjc3Zyb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY3N2U3RyaW5nID0gY3N2Um93cy5qb2luKCdcXHJcXG4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAobmF2aWdhdG9yLm1zU2F2ZUJsb2IpIHsgLy8gSUUgMTArXHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NzdlN0cmluZ10sIHsgdHlwZTogJ3RleHQvY3N2O2NoYXJzZXQ9dXRmLTg7JyB9KTtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIHRoaXMuZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3N2ZGF0YWNvbnRlbnQgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBjc3ZTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKGNzdmRhdGFjb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICAgICAgdGVtcExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgZW5jb2RlZFVyaSk7XHJcbiAgICAgICAgICAgICAgICB0ZW1wTGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgdGhpcy5maWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJykuYXBwZW5kQ2hpbGQodGVtcExpbmspO1xyXG4gICAgICAgICAgICAgICAgdGVtcExpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgXHJcbn1cclxuIl19