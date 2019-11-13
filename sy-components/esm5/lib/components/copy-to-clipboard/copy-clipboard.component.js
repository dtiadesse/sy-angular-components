/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/copy-to-clipboard/copy-clipboard.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Renderer2, } from '@angular/core';
var CopyClipboardComponent = /** @class */ (function () {
    function CopyClipboardComponent(renderer) {
        this.renderer = renderer;
        this.datasource = [];
        this.isIpad = false;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    CopyClipboardComponent.prototype.getText = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var copyText = '';
        copyText = JSON.stringify(data) + ',';
        // copyText = this.removeDuplicate(copyText, ',');
        return copyText;
    };
    /**
     * @param {?} str
     * @param {?} separator
     * @return {?}
     */
    CopyClipboardComponent.prototype.removeDuplicate = /**
     * @param {?} str
     * @param {?} separator
     * @return {?}
     */
    function (str, separator) {
        /** @type {?} */
        var a = str.split(separator);
        /** @type {?} */
        var x2 = [];
        for (var i in a) {
            if (x2.indexOf(a[i]) == -1) {
                x2.push(a[i]);
            }
        }
        return x2.join(separator);
    };
    /**
     * @return {?}
     */
    CopyClipboardComponent.prototype.copyToClipboard = /**
     * @return {?}
     */
    function () {
        this.data = this.datasource;
        /** @type {?} */
        var copyText = this.getText(this.data);
        this.textArea = this.renderer.createElement('textArea');
        this.textArea.textContent = copyText;
        this.renderer.appendChild(document.body, this.textArea);
        this.selectText();
        document.execCommand('copy');
        this.renderer.removeChild(document.body, this.textArea);
    };
    /**
     * @return {?}
     */
    CopyClipboardComponent.prototype.isUserAgentiOS = /**
     * @return {?}
     */
    function () {
        return navigator.userAgent.match(/ipad|iphone/i);
    };
    /**
     * @return {?}
     */
    CopyClipboardComponent.prototype.selectText = /**
     * @return {?}
     */
    function () {
        if (this.isUserAgentiOS()) {
            /** @type {?} */
            var range = document.createRange();
            range.selectNodeContents(this.textArea);
            /** @type {?} */
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            this.textArea.setSelectionRange(0, 999999);
        }
        else {
            this.textArea.select();
        }
    };
    CopyClipboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-copy-clipboard',
                    template: "<div class=\"export-card\">\r\n    <div class=\"action-button\">\r\n        <button class=\"fileter-button\" (click)=\"copyToClipboard()\">\r\n            <fa-icon [icon]=\"['far', 'copy']\" size=\"lg\"></fa-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div id=\"container\" style=\"display:none;\"></div>",
                    styles: [".export-card{padding:5px;margin:0 0 10px 10px;background:#fff;max-width:25rem}.unfiltered-icon{padding:1px;color:#4bc1d2;font-size:16px;border-radius:20px}.action-button button{margin-top:.5em;margin-right:1em;margin-bottom:.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.175rem;color:#fff;cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:1rem;line-height:1;outline:0;padding:.5rem;text-align:center;text-decoration:none;border:2px solid teal}.unfileter-button{background-color:#fff}.fileter-button{background-color:#4bc1d2}"]
                }] }
    ];
    /** @nocollapse */
    CopyClipboardComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    CopyClipboardComponent.propDecorators = {
        datasource: [{ type: Input }]
    };
    return CopyClipboardComponent;
}());
export { CopyClipboardComponent };
if (false) {
    /** @type {?} */
    CopyClipboardComponent.prototype.datasource;
    /** @type {?} */
    CopyClipboardComponent.prototype.textArea;
    /** @type {?} */
    CopyClipboardComponent.prototype.data;
    /** @type {?} */
    CopyClipboardComponent.prototype.isIpad;
    /**
     * @type {?}
     * @private
     */
    CopyClipboardComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS1jbGlwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvcHktdG8tY2xpcGJvYXJkL2NvcHktY2xpcGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsR0FBZSxNQUFNLGVBQWUsQ0FBQztBQUV6RTtJQVlJLGdDQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTDlCLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFJaEMsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUVmLENBQUM7Ozs7O0lBQ0Qsd0NBQU87Ozs7SUFBUCxVQUFRLElBQVc7O1lBQ1gsUUFBUSxHQUFHLEVBQUU7UUFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZDLGtEQUFrRDtRQUNqRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFDRCxnREFBZTs7Ozs7SUFBZixVQUFnQixHQUFXLEVBQUUsU0FBaUI7O1lBQ3BDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7WUFDeEIsRUFBRSxHQUFHLEVBQUU7UUFDYixLQUFLLElBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQjtTQUNKO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFJRCxnREFBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O1lBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELCtDQUFjOzs7SUFBZDtRQUNJLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUNELDJDQUFVOzs7SUFBVjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFOztnQkFDakIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDcEMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Z0JBQ2xDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQzs7Z0JBMURKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixzVUFBOEM7O2lCQUVqRDs7OztnQkFOMEIsU0FBUzs7OzZCQVMvQixLQUFLOztJQW9EViw2QkFBQztDQUFBLEFBM0RELElBMkRDO1NBckRZLHNCQUFzQjs7O0lBQy9CLDRDQUFnQzs7SUFFaEMsMENBQVM7O0lBQ1Qsc0NBQVk7O0lBQ1osd0NBQWU7Ozs7O0lBQ0gsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgUmVuZGVyZXIyLCBFbGVtZW50UmVmLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N5LWNvcHktY2xpcGJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jb3B5LWNsaXBib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jb3B5LWNsaXBib2FyZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29weUNsaXBib2FyZENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBkYXRhc291cmNlOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHRleHRBcmVhO1xyXG4gICAgZGF0YTogYW55W107XHJcbiAgICBpc0lwYWQgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgfVxyXG4gICAgZ2V0VGV4dChkYXRhOiBhbnlbXSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGNvcHlUZXh0ID0gJyc7XHJcbiAgICAgICAgY29weVRleHQgPSBKU09OLnN0cmluZ2lmeShkYXRhKSArICcsJztcclxuICAgICAgIC8vIGNvcHlUZXh0ID0gdGhpcy5yZW1vdmVEdXBsaWNhdGUoY29weVRleHQsICcsJyk7XHJcbiAgICAgICAgcmV0dXJuIGNvcHlUZXh0O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRHVwbGljYXRlKHN0cjogc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgYSA9IHN0ci5zcGxpdChzZXBhcmF0b3IpO1xyXG4gICAgICAgIGNvbnN0IHgyID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIGEpIHtcclxuICAgICAgICAgICAgaWYgKHgyLmluZGV4T2YoYVtpXSkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHgyLnB1c2goYVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHgyLmpvaW4oc2VwYXJhdG9yKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNvcHlUb0NsaXBib2FyZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGFzb3VyY2U7XHJcbiAgICAgICAgY29uc3QgY29weVRleHQgPSB0aGlzLmdldFRleHQodGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLnRleHRBcmVhID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCd0ZXh0QXJlYScpO1xyXG4gICAgICAgIHRoaXMudGV4dEFyZWEudGV4dENvbnRlbnQgPSBjb3B5VGV4dDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHRoaXMudGV4dEFyZWEpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0VGV4dCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCB0aGlzLnRleHRBcmVhKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1VzZXJBZ2VudGlPUygpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pcGFkfGlwaG9uZS9pKTtcclxuICAgIH1cclxuICAgIHNlbGVjdFRleHQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNVc2VyQWdlbnRpT1MoKSkge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aGlzLnRleHRBcmVhKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OTk5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRBcmVhLnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=