/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/progress-bar/progress-bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function ProgressIndicator() { }
if (false) {
    /** @type {?} */
    ProgressIndicator.prototype.type;
    /** @type {?} */
    ProgressIndicator.prototype.min;
    /** @type {?} */
    ProgressIndicator.prototype.max;
    /** @type {?} */
    ProgressIndicator.prototype.value;
    /** @type {?} */
    ProgressIndicator.prototype.valueAsText;
}
/** @enum {string} */
var ProgressIndicatorType = {
    Percent: "percent",
    Nonnumerical: "nonnumerical",
};
export { ProgressIndicatorType };
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        /**
         * Whether the progress should be represented as a percent
         * or a non-numerical value.
         */
        this.type = ProgressIndicatorType.Percent;
        /**
         * The minimum value in the range. If the type is non-numerical,
         * a default number is provided to calculate the progress for
         * screen reader users.
         */
        this.min = 0;
        /**
         * The maximum value in the range. If the type is non-numerical,
         * a default number is provided to calculate the progress for
         * screen reader users.
         */
        this.max = 100;
    }
    /**
     * Calculates the bar fill percentage of the progress bar.
     */
    /**
     * Calculates the bar fill percentage of the progress bar.
     * @return {?}
     */
    ProgressBarComponent.prototype.calculateBarFillPercentage = /**
     * Calculates the bar fill percentage of the progress bar.
     * @return {?}
     */
    function () {
        return Math.min((Math.floor((Math.max(0, this.value) / this.max) * 100)), 100) + '%';
    };
    ProgressBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-progress-bar',
                    template: "<div class=\"progress\">\n    <div class=\"label\">{{ valueAsText }}</div>\n    <ng-container *ngTemplateOutlet=\"type === 'percent' ? percent : time\"></ng-container>\n  </div>\n  \n  <ng-template #percent>\n    <!-- Percent template -->\n    <div class=\"bar\">\n      <div class=\"fill animated\"\n        [style.width]=\"calculateBarFillPercentage()\"\n        role=\"progressbar\"\n        [attr.aria-valuenow]=\"value\"\n        [attr.aria-valuemin]=\"min\"\n        [attr.aria-valuemax]=\"max\"></div>\n    </div>\n  </ng-template>\n  \n  <ng-template #time>\n    <!-- Text value template -->\n    <div class=\"bar\">\n      <div class=\"fill animated\"\n        [style.width]=\"calculateBarFillPercentage()\"\n        role=\"progressbar\" \n        [attr.aria-valuenow]=\"value\"\n        [attr.aria-valuemin]=\"min\"\n        [attr.aria-valuemax]=\"max\"\n        [attr.aria-valuetext]=\"valueAsText\"></div>\n    </div>\n  </ng-template>",
                    styles: [".bar .fill{height:1rem;border-radius:4px;background-color:#4bc1d2;box-shadow:0 0 1px 1px rgba(0,0,0,.25),inset 0 1px rgba(255,255,255,.1)}.bar .fill.animated{-webkit-transition:width .4s linear;transition:width .4s linear}"]
                }] }
    ];
    ProgressBarComponent.propDecorators = {
        type: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        value: [{ type: Input }],
        valueAsText: [{ type: Input }]
    };
    return ProgressBarComponent;
}());
export { ProgressBarComponent };
if (false) {
    /**
     * Whether the progress should be represented as a percent
     * or a non-numerical value.
     * @type {?}
     */
    ProgressBarComponent.prototype.type;
    /**
     * The minimum value in the range. If the type is non-numerical,
     * a default number is provided to calculate the progress for
     * screen reader users.
     * @type {?}
     */
    ProgressBarComponent.prototype.min;
    /**
     * The maximum value in the range. If the type is non-numerical,
     * a default number is provided to calculate the progress for
     * screen reader users.
     * @type {?}
     */
    ProgressBarComponent.prototype.max;
    /**
     * The current value of the progress bar. This number should
     * lie between the min and max.
     * @type {?}
     */
    ProgressBarComponent.prototype.value;
    /**
     * A human readable version of the value. This is provided as
     * a visual display and announced to screen readers if the
     * type is not Percent.
     * @type {?}
     */
    ProgressBarComponent.prototype.valueAsText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXZCLHVDQU1DOzs7SUFMQyxpQ0FBNEI7O0lBQzVCLGdDQUFZOztJQUNaLGdDQUFZOztJQUNaLGtDQUFjOztJQUNkLHdDQUFvQjs7O0FBR3RCLElBQVkscUJBQXFCO0lBQy9CLE9BQU8sV0FBWTtJQUNuQixZQUFZLGdCQUFpQjtFQUM5Qjs7QUFFRDtJQUFBOzs7OztRQVdrQixTQUFJLEdBQTBCLHFCQUFxQixDQUFDLE9BQU8sQ0FBQzs7Ozs7O1FBTTVELFFBQUcsR0FBRyxDQUFDLENBQUM7Ozs7OztRQU1SLFFBQUcsR0FBRyxHQUFHLENBQUM7SUFtQjVCLENBQUM7SUFOQzs7T0FFRzs7Ozs7SUFDSSx5REFBMEI7Ozs7SUFBakM7UUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN2RixDQUFDOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLCs3QkFBNEM7O2lCQUU3Qzs7O3VCQU9FLEtBQUs7c0JBTUwsS0FBSztzQkFNTCxLQUFLO3dCQUtMLEtBQUs7OEJBTUwsS0FBSzs7SUFRUiwyQkFBQztDQUFBLEFBMUNELElBMENDO1NBckNZLG9CQUFvQjs7Ozs7OztJQU0vQixvQ0FBNEU7Ozs7Ozs7SUFNNUUsbUNBQXdCOzs7Ozs7O0lBTXhCLG1DQUEwQjs7Ozs7O0lBSzFCLHFDQUE4Qjs7Ozs7OztJQU05QiwyQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzSW5kaWNhdG9yIHtcbiAgdHlwZTogUHJvZ3Jlc3NJbmRpY2F0b3JUeXBlO1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHZhbHVlQXNUZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIFByb2dyZXNzSW5kaWNhdG9yVHlwZSB7XG4gIFBlcmNlbnQgPSAncGVyY2VudCcsXG4gIE5vbm51bWVyaWNhbCA9ICdub25udW1lcmljYWwnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N5LXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCB7XG5cbiAgIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBwcm9ncmVzcyBzaG91bGQgYmUgcmVwcmVzZW50ZWQgYXMgYSBwZXJjZW50IFxuICAgKiBvciBhIG5vbi1udW1lcmljYWwgdmFsdWUuIFxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHR5cGU6IFByb2dyZXNzSW5kaWNhdG9yVHlwZSA9IFByb2dyZXNzSW5kaWNhdG9yVHlwZS5QZXJjZW50O1xuICAvKipcbiAgICogVGhlIG1pbmltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLiBJZiB0aGUgdHlwZSBpcyBub24tbnVtZXJpY2FsLCBcbiAgICogYSBkZWZhdWx0IG51bWJlciBpcyBwcm92aWRlZCB0byBjYWxjdWxhdGUgdGhlIHByb2dyZXNzIGZvciBcbiAgICogc2NyZWVuIHJlYWRlciB1c2Vycy5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBtaW4gPSAwO1xuICAvKipcbiAgICogVGhlIG1heGltdW0gdmFsdWUgaW4gdGhlIHJhbmdlLiBJZiB0aGUgdHlwZSBpcyBub24tbnVtZXJpY2FsLCBcbiAgICogYSBkZWZhdWx0IG51bWJlciBpcyBwcm92aWRlZCB0byBjYWxjdWxhdGUgdGhlIHByb2dyZXNzIGZvciBcbiAgICogc2NyZWVuIHJlYWRlciB1c2Vycy5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXggPSAxMDA7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiBUaGlzIG51bWJlciBzaG91bGQgXG4gICAqIGxpZSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heC5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuICAvKipcbiAgICogQSBodW1hbiByZWFkYWJsZSB2ZXJzaW9uIG9mIHRoZSB2YWx1ZS4gVGhpcyBpcyBwcm92aWRlZCBhc1xuICAgKiBhIHZpc3VhbCBkaXNwbGF5IGFuZCBhbm5vdW5jZWQgdG8gc2NyZWVuIHJlYWRlcnMgaWYgdGhlIFxuICAgKiB0eXBlIGlzIG5vdCBQZXJjZW50LlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHZhbHVlQXNUZXh0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGJhciBmaWxsIHBlcmNlbnRhZ2Ugb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgICovXG4gIHB1YmxpYyBjYWxjdWxhdGVCYXJGaWxsUGVyY2VudGFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBNYXRoLm1pbigoTWF0aC5mbG9vcigoTWF0aC5tYXgoMCwgdGhpcy52YWx1ZSkgLyB0aGlzLm1heCkgKiAxMDApKSwgMTAwKSArICclJztcbiAgfVxufVxuIl19