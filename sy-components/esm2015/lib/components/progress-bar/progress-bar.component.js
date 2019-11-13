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
const ProgressIndicatorType = {
    Percent: "percent",
    Nonnumerical: "nonnumerical",
};
export { ProgressIndicatorType };
export class ProgressBarComponent {
    constructor() {
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
     * @return {?}
     */
    calculateBarFillPercentage() {
        return Math.min((Math.floor((Math.max(0, this.value) / this.max) * 100)), 100) + '%';
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXZCLHVDQU1DOzs7SUFMQyxpQ0FBNEI7O0lBQzVCLGdDQUFZOztJQUNaLGdDQUFZOztJQUNaLGtDQUFjOztJQUNkLHdDQUFvQjs7O0FBR3RCLE1BQVkscUJBQXFCO0lBQy9CLE9BQU8sV0FBWTtJQUNuQixZQUFZLGdCQUFpQjtFQUM5Qjs7QUFPRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDOzs7OztRQVdrQixTQUFJLEdBQTBCLHFCQUFxQixDQUFDLE9BQU8sQ0FBQzs7Ozs7O1FBTTVELFFBQUcsR0FBRyxDQUFDLENBQUM7Ozs7OztRQU1SLFFBQUcsR0FBRyxHQUFHLENBQUM7SUFtQjVCLENBQUM7Ozs7O0lBSFEsMEJBQTBCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3ZGLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsKzdCQUE0Qzs7YUFFN0M7OzttQkFPRSxLQUFLO2tCQU1MLEtBQUs7a0JBTUwsS0FBSztvQkFLTCxLQUFLOzBCQU1MLEtBQUs7Ozs7Ozs7O0lBdkJOLG9DQUE0RTs7Ozs7OztJQU01RSxtQ0FBd0I7Ozs7Ozs7SUFNeEIsbUNBQTBCOzs7Ozs7SUFLMUIscUNBQThCOzs7Ozs7O0lBTTlCLDJDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NJbmRpY2F0b3Ige1xuICB0eXBlOiBQcm9ncmVzc0luZGljYXRvclR5cGU7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlcjtcbiAgdmFsdWVBc1RleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gUHJvZ3Jlc3NJbmRpY2F0b3JUeXBlIHtcbiAgUGVyY2VudCA9ICdwZXJjZW50JyxcbiAgTm9ubnVtZXJpY2FsID0gJ25vbm51bWVyaWNhbCdcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ktcHJvZ3Jlc3MtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyQ29tcG9uZW50IHtcblxuICAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHByb2dyZXNzIHNob3VsZCBiZSByZXByZXNlbnRlZCBhcyBhIHBlcmNlbnQgXG4gICAqIG9yIGEgbm9uLW51bWVyaWNhbCB2YWx1ZS4gXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogUHJvZ3Jlc3NJbmRpY2F0b3JUeXBlID0gUHJvZ3Jlc3NJbmRpY2F0b3JUeXBlLlBlcmNlbnQ7XG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuIElmIHRoZSB0eXBlIGlzIG5vbi1udW1lcmljYWwsIFxuICAgKiBhIGRlZmF1bHQgbnVtYmVyIGlzIHByb3ZpZGVkIHRvIGNhbGN1bGF0ZSB0aGUgcHJvZ3Jlc3MgZm9yIFxuICAgKiBzY3JlZW4gcmVhZGVyIHVzZXJzLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIG1pbiA9IDA7XG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuIElmIHRoZSB0eXBlIGlzIG5vbi1udW1lcmljYWwsIFxuICAgKiBhIGRlZmF1bHQgbnVtYmVyIGlzIHByb3ZpZGVkIHRvIGNhbGN1bGF0ZSB0aGUgcHJvZ3Jlc3MgZm9yIFxuICAgKiBzY3JlZW4gcmVhZGVyIHVzZXJzLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIG1heCA9IDEwMDtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBiYXIuIFRoaXMgbnVtYmVyIHNob3VsZCBcbiAgICogbGllIGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4LlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBBIGh1bWFuIHJlYWRhYmxlIHZlcnNpb24gb2YgdGhlIHZhbHVlLiBUaGlzIGlzIHByb3ZpZGVkIGFzXG4gICAqIGEgdmlzdWFsIGRpc3BsYXkgYW5kIGFubm91bmNlZCB0byBzY3JlZW4gcmVhZGVycyBpZiB0aGUgXG4gICAqIHR5cGUgaXMgbm90IFBlcmNlbnQuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgdmFsdWVBc1RleHQ6IHN0cmluZztcblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgYmFyIGZpbGwgcGVyY2VudGFnZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgKi9cbiAgcHVibGljIGNhbGN1bGF0ZUJhckZpbGxQZXJjZW50YWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIE1hdGgubWluKChNYXRoLmZsb29yKChNYXRoLm1heCgwLCB0aGlzLnZhbHVlKSAvIHRoaXMubWF4KSAqIDEwMCkpLCAxMDApICsgJyUnO1xuICB9XG59XG4iXX0=