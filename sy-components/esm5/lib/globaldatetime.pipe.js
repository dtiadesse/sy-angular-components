/**
 * @fileoverview added by tsickle
 * Generated from: lib/globaldatetime.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
var GlobalDateTime = /** @class */ (function () {
    function GlobalDateTime() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    GlobalDateTime.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'MMM dd, yyyy hh:mm:ss a');
        return value;
    };
    GlobalDateTime.decorators = [
        { type: Pipe, args: [{
                    name: 'globaldatetime',
                },] }
    ];
    return GlobalDateTime;
}());
export { GlobalDateTime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsZGF0ZXRpbWUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZ2xvYmFsZGF0ZXRpbWUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQUFBO0lBU0EsQ0FBQzs7Ozs7SUFMRyxrQ0FBUzs7OztJQUFULFVBQVUsS0FBYTs7WUFDYixRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3RDLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7O2dCQVJKLElBQUksU0FBQztvQkFDRixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN6Qjs7SUFPRCxxQkFBQztDQUFBLEFBVEQsSUFTQztTQU5ZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZ2xvYmFsZGF0ZXRpbWUnLFxufSlcbmV4cG9ydCBjbGFzcyBHbG9iYWxEYXRlVGltZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGVQaXBlID0gbmV3IERhdGVQaXBlKCdlbi1VUycpO1xuICAgICAgICB2YWx1ZSA9IGRhdGVQaXBlLnRyYW5zZm9ybSh2YWx1ZSwgJ01NTSBkZCwgeXl5eSBoaDptbTpzcyBhJyk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG4iXX0=