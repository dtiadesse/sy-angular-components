/**
 * @fileoverview added by tsickle
 * Generated from: lib/wrappers/fieldset-wrapper/fieldset-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
export class FieldsetWrapper {
    // semaphore
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        /**
         * Add an array of errorMessages
         */
        this.errorMessages = [];
        /**
         * toggles the required text
         */
        this.required = false;
        this.showToggle = false;
        this.toggleOpen = false;
        this.lineLimit = 2;
        this.checkMore = false; // semaphore
    }
    /**
     * set a single error message
     * @param {?} message
     * @return {?}
     */
    set errorMessage(message) {
        if (!!message) {
            this.errorMessages = [];
            this.errorMessages.push(message);
        }
        else {
            this.errorMessages = [];
        }
    }
    ;
    /**
     * @return {?}
     */
    get errorMessage() {
        return this.errorMessages[0];
    }
    /**
     * @param {?} c
     * @return {?}
     */
    ngOnChanges(c) {
        if (!this.checkMore
            && c.hint
            && c.hint.previousValue !== c.hint.currentValue) {
            // needs to be open to recalc correctly in
            // ngAfterViewChecked
            this.showToggle = false;
            this.toggleOpen = false;
            this.checkMore = true;
            this.cdr.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.calcToggle();
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.checkMore && !this.showToggle) {
            this.calcToggle();
            this.cdr.detectChanges();
            this.checkMore = false;
        }
    }
    /**
     * @return {?}
     */
    calcToggle() {
        if (this.hintContainer) {
            /** @type {?} */
            const numOfLines = this.calculateNumberOfLines(this.hintContainer.nativeElement);
            this.showToggle = numOfLines > this.lineLimit
                ? true
                : false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        // needs to be open to recalc correctly in
        // ngAfterViewChecked
        this.showToggle = false;
        this.toggleOpen = false;
        this.checkMore = true;
        this.cdr.detectChanges();
    }
    /**
     * @param {?} status
     * @return {?}
     */
    toggleHint(status) {
        this.toggleOpen = !status;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    calculateNumberOfLines(obj) {
        if (!this.lineSize) {
            /** @type {?} */
            const other = obj.cloneNode(true);
            other.innerHTML = 'a<br>b';
            other.style.visibility = 'hidden';
            /** @type {?} */
            const el = (/** @type {?} */ (document
                .getElementsByTagName('body')[0]));
            el.appendChild(other);
            this.lineSize = other.offsetHeight / 2;
            el.removeChild(other);
        }
        /** @type {?} */
        const val = Math.floor(obj.offsetHeight / this.lineSize);
        return val;
    }
    /**
     * @param {...?} controls
     * @return {?}
     */
    formatErrors(...controls) {
        this.errorMessages = [];
        controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        control => this._formatError(control)));
    }
    /**
     * @return {?}
     */
    clearError() {
        this.errorMessages = [];
    }
    /**
     * @return {?}
     */
    displayErrors() {
        return this.errorMessages.length > 0;
    }
    /**
     * @return {?}
     */
    displayErrorList() {
        return this.errorMessages.length > 1;
    }
    /**
     * @return {?}
     */
    setOverflow() {
        return (this.showToggle && !this.toggleOpen)
            ? 'hidden'
            : '';
    }
    /**
     * @return {?}
     */
    setHeight() {
        return (this.showToggle && !this.toggleOpen)
            ? '2.88em'
            : '';
    }
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    _formatError(control) {
        if (!control) {
            return;
        }
        if (control.pristine) {
            this.errorMessage = '';
            return;
        }
        if (control.invalid && control.errors) {
            this.formatInvalidErrors(control);
        }
        else if (!control.errors) {
            this.errorMessage = '';
        }
    }
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    formatInvalidErrors(control) {
        for (const k in control.errors) {
            /** @type {?} */
            const errorObject = control.errors[k];
            if (errorObject.message) {
                if (Object.prototype.toString.call(errorObject.message)
                    === '[object String]') {
                    this.errorMessages.push(errorObject.message);
                    return;
                }
            }
            else {
                this.setInvalidError(k, errorObject);
            }
        }
    }
    /**
     * @private
     * @param {?} error
     * @param {?} errorObject
     * @return {?}
     */
    setInvalidError(error, errorObject) {
        /** @type {?} */
        let msg;
        switch (error) {
            case 'maxlength':
                /** @type {?} */
                const actualLength = errorObject.actualLength;
                /** @type {?} */
                const requiredLength = errorObject.requiredLength;
                msg = actualLength
                    + ' characters input but max length is '
                    + requiredLength;
                this.errorMessages.push(msg);
                return;
            case 'required':
                msg = 'This field is required';
                this.errorMessages.push(msg);
                return;
            case 'isNotBeforeToday':
                msg = 'Date must not be before today';
                this.errorMessages.push(msg);
                return;
            default:
                msg = 'Invalid';
                this.errorMessages.push(msg);
                return;
        }
    }
}
FieldsetWrapper.decorators = [
    { type: Component, args: [{
                selector: 'sy-fieldset-wrapper',
                template: "<div [class.sy-input-error]=\"displayErrors()\">\r\n\r\n    <fieldset class=\"fieldset\">\r\n\r\n        <legend *ngIf=\"label || required\" [class.required-text]=\"displayErrors()\">\r\n            {{label}}\r\n            <span *ngIf=\"required\" class=\"required-text\">\r\n        Required\r\n      </span>\r\n            <ng-content select=\"[label-right]\"></ng-content>\r\n        </legend>\r\n\r\n        <div #hintContainer *ngIf=\"hint\" class=\"sy-form-hint\" aria-live=\"polite\" [innerHTML]=\"hint\" [style.overflow]=\"setOverflow()\" [style.height]=\"setHeight()\">\r\n        </div>\r\n\r\n        <div *ngIf=\"showToggle\" class=\"toggle-more\">\r\n            <a href=\"javascript:void(0)\" (click)=\"toggleHint(toggleOpen)\">\r\n        {{ toggleOpen?\"less\":\"more\"}}\r\n      </a>\r\n        </div>\r\n\r\n        <span *ngIf=\"displayErrors()\" class=\"usa-input-error-message\" aria-live=\"assertive\">\r\n      <ng-container *ngIf=\"displayErrorList() else single\">\r\n        <ul>\r\n          <li *ngFor=\"let msg of errorMessages\">\r\n            {{ msg }}\r\n          </li>\r\n        </ul>\r\n      </ng-container>\r\n      <ng-template #single>\r\n        {{ errorMessages[0] }}\r\n      </ng-template>\r\n    </span>\r\n\r\n        <ng-content></ng-content>\r\n\r\n    </fieldset>\r\n\r\n</div>",
                styles: [".checkbox-container{position:relative;height:130px;max-height:145px;overflow-y:scroll;overflow-x:hidden;margin:10px;padding-left:10px}.selected-item{background-color:#0071bc;color:#fff}.required-text{color:red}.sy-form-hint{font-size:14px}.sy-input-error{color:red}fieldset{border:none}"]
            }] }
];
/** @nocollapse */
FieldsetWrapper.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
FieldsetWrapper.propDecorators = {
    label: [{ type: Input }],
    hint: [{ type: Input }],
    errorMessages: [{ type: Input }],
    errorMessage: [{ type: Input }],
    required: [{ type: Input }],
    hintContainer: [{ type: ViewChild, args: ['hintContainer',] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
if (false) {
    /**
     * sets the label text
     * @type {?}
     */
    FieldsetWrapper.prototype.label;
    /**
     * sets the hint text
     * @type {?}
     */
    FieldsetWrapper.prototype.hint;
    /**
     * Add an array of errorMessages
     * @type {?}
     */
    FieldsetWrapper.prototype.errorMessages;
    /**
     * toggles the required text
     * @type {?}
     */
    FieldsetWrapper.prototype.required;
    /** @type {?} */
    FieldsetWrapper.prototype.hintContainer;
    /** @type {?} */
    FieldsetWrapper.prototype.showToggle;
    /** @type {?} */
    FieldsetWrapper.prototype.toggleOpen;
    /**
     * @type {?}
     * @private
     */
    FieldsetWrapper.prototype.lineSize;
    /**
     * @type {?}
     * @private
     */
    FieldsetWrapper.prototype.lineLimit;
    /**
     * @type {?}
     * @private
     */
    FieldsetWrapper.prototype.checkMore;
    /**
     * @type {?}
     * @private
     */
    FieldsetWrapper.prototype.cdr;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3dyYXBwZXJzL2ZpZWxkc2V0LXdyYXBwZXIvZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8sZUFBZTs7Ozs7SUF1QzFCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBM0IxQixrQkFBYSxHQUFVLEVBQUUsQ0FBQzs7OztRQW1CMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVuQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFM0IsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsWUFBWTtJQUVPLENBQUM7Ozs7OztJQXZCL0MsSUFBb0IsWUFBWSxDQUFFLE9BQWU7UUFDL0MsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUFBLENBQUM7Ozs7SUFFRixJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBY00sV0FBVyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO2VBQ2QsQ0FBQyxDQUFDLElBQUk7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QkFJTCxLQUFLOzRCQUlMLEtBQUs7MkJBSUwsS0FBSzt1QkFlTCxLQUFLOzRCQUNMLFNBQVMsU0FBQyxlQUFlO3VCQThDekIsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQTFFekMsZ0NBQThCOzs7OztJQUk5QiwrQkFBNkI7Ozs7O0lBSTdCLHdDQUEwQzs7Ozs7SUFtQjFDLG1DQUEwQzs7SUFDMUMsd0NBQXNEOztJQUN0RCxxQ0FBbUM7O0lBQ25DLHFDQUFtQzs7Ozs7SUFDbkMsbUNBQXlCOzs7OztJQUN6QixvQ0FBOEI7Ozs7O0lBQzlCLG9DQUEwQjs7Ozs7SUFFZCw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3ktZmllbGRzZXQtd3JhcHBlcicsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9maWVsZHNldC13cmFwcGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRzZXRXcmFwcGVyIHtcclxuICAvKipcclxuICAgKiBzZXRzIHRoZSBsYWJlbCB0ZXh0XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogc2V0cyB0aGUgaGludCB0ZXh0XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGhpbnQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBZGQgYW4gYXJyYXkgb2YgZXJyb3JNZXNzYWdlc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBlcnJvck1lc3NhZ2VzOiBhbnlbXSA9IFtdO1xyXG4gIC8qKlxyXG4gICAqIHNldCBhIHNpbmdsZSBlcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHNldCBlcnJvck1lc3NhZ2UgKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgaWYgKCEhbWVzc2FnZSkge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBbXTtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBbXTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWJsaWMgZ2V0IGVycm9yTWVzc2FnZSAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZXNbMF07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHRvZ2dsZXMgdGhlIHJlcXVpcmVkIHRleHRcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdoaW50Q29udGFpbmVyJykgcHVibGljIGhpbnRDb250YWluZXI6IGFueTtcclxuICBwdWJsaWMgc2hvd1RvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0b2dnbGVPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBsaW5lU2l6ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgbGluZUxpbWl0OiBudW1iZXIgPSAyO1xyXG4gIHByaXZhdGUgY2hlY2tNb3JlID0gZmFsc2U7IC8vIHNlbWFwaG9yZVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoYykge1xyXG4gICAgaWYgKCF0aGlzLmNoZWNrTW9yZVxyXG4gICAgICAmJiBjLmhpbnRcclxuICAgICAgJiYgYy5oaW50LnByZXZpb3VzVmFsdWUgIT09IGMuaGludC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgLy8gbmVlZHMgdG8gYmUgb3BlbiB0byByZWNhbGMgY29ycmVjdGx5IGluXHJcbiAgICAgIC8vIG5nQWZ0ZXJWaWV3Q2hlY2tlZFxyXG4gICAgICB0aGlzLnNob3dUb2dnbGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b2dnbGVPcGVuID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY2hlY2tNb3JlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2FsY1RvZ2dsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcclxuICAgIGlmICh0aGlzLmNoZWNrTW9yZSAmJiAhdGhpcy5zaG93VG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMuY2FsY1RvZ2dsZSgpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIHRoaXMuY2hlY2tNb3JlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsY1RvZ2dsZSgpIHtcclxuICAgIGlmICh0aGlzLmhpbnRDb250YWluZXIpIHtcclxuICAgICAgY29uc3QgbnVtT2ZMaW5lcyA9XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVOdW1iZXJPZkxpbmVzKFxyXG4gICAgICAgICAgdGhpcy5oaW50Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgICApO1xyXG4gICAgICB0aGlzLnNob3dUb2dnbGUgPSBudW1PZkxpbmVzID4gdGhpcy5saW5lTGltaXRcclxuICAgICAgICA/IHRydWVcclxuICAgICAgICA6IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXHJcbiAgcHVibGljIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICAvLyBuZWVkcyB0byBiZSBvcGVuIHRvIHJlY2FsYyBjb3JyZWN0bHkgaW5cclxuICAgIC8vIG5nQWZ0ZXJWaWV3Q2hlY2tlZFxyXG4gICAgdGhpcy5zaG93VG9nZ2xlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvZ2dsZU9wZW4gPSBmYWxzZTtcclxuICAgIHRoaXMuY2hlY2tNb3JlID0gdHJ1ZTtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVIaW50KHN0YXR1cykge1xyXG4gICAgdGhpcy50b2dnbGVPcGVuID0gIXN0YXR1cztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYWxjdWxhdGVOdW1iZXJPZkxpbmVzKG9iaikge1xyXG4gICAgaWYgKCF0aGlzLmxpbmVTaXplKSB7XHJcbiAgICAgIGNvbnN0IG90aGVyID0gb2JqLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgb3RoZXIuaW5uZXJIVE1MID0gJ2E8YnI+Yic7XHJcbiAgICAgIG90aGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgY29uc3QgZWwgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnRcclxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcclxuICAgICAgZWwuYXBwZW5kQ2hpbGQob3RoZXIpO1xyXG4gICAgICB0aGlzLmxpbmVTaXplID0gb3RoZXIub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgZWwucmVtb3ZlQ2hpbGQob3RoZXIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsID0gTWF0aC5mbG9vcihvYmoub2Zmc2V0SGVpZ2h0IC8gIHRoaXMubGluZVNpemUpO1xyXG4gICAgcmV0dXJuIHZhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb3JtYXRFcnJvcnMoLi4uY29udHJvbHM6IEFic3RyYWN0Q29udHJvbFtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBbXTtcclxuICAgIGNvbnRyb2xzLmZvckVhY2goXHJcbiAgICAgIGNvbnRyb2wgPT4gdGhpcy5fZm9ybWF0RXJyb3IoY29udHJvbClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXJFcnJvcigpIHtcclxuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BsYXlFcnJvcnMgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRpc3BsYXlFcnJvckxpc3QgKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAxO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldE92ZXJmbG93ICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICh0aGlzLnNob3dUb2dnbGUgJiYgIXRoaXMudG9nZ2xlT3BlbilcclxuICAgICAgPyAnaGlkZGVuJ1xyXG4gICAgICA6ICcnIDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRIZWlnaHQgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKHRoaXMuc2hvd1RvZ2dsZSAmJiAhdGhpcy50b2dnbGVPcGVuKVxyXG4gICAgICA/ICcyLjg4ZW0nXHJcbiAgICAgIDogJydcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Zvcm1hdEVycm9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xyXG4gICAgaWYgKCFjb250cm9sKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udHJvbC5wcmlzdGluZSkge1xyXG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRyb2wuaW52YWxpZCAmJiBjb250cm9sLmVycm9ycykge1xyXG4gICAgICB0aGlzLmZvcm1hdEludmFsaWRFcnJvcnMoY29udHJvbCk7XHJcbiAgICB9IGVsc2UgaWYgKCFjb250cm9sLmVycm9ycykge1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdEludmFsaWRFcnJvcnMoY29udHJvbCkge1xyXG4gICAgZm9yIChjb25zdCBrIGluIGNvbnRyb2wuZXJyb3JzKSB7XHJcbiAgICAgIGNvbnN0IGVycm9yT2JqZWN0ID0gY29udHJvbC5lcnJvcnNba107XHJcblxyXG4gICAgICBpZiAoZXJyb3JPYmplY3QubWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZXJyb3JPYmplY3QubWVzc2FnZSlcclxuICAgICAgICAgID09PSAnW29iamVjdCBTdHJpbmddJykge1xyXG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzLnB1c2goZXJyb3JPYmplY3QubWVzc2FnZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0SW52YWxpZEVycm9yKGssIGVycm9yT2JqZWN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRJbnZhbGlkRXJyb3IoZXJyb3IsIGVycm9yT2JqZWN0KSB7XHJcbiAgICBsZXQgbXNnO1xyXG4gICAgc3dpdGNoIChlcnJvcikge1xyXG4gICAgICBjYXNlICdtYXhsZW5ndGgnOlxyXG4gICAgICAgIGNvbnN0IGFjdHVhbExlbmd0aCA9IGVycm9yT2JqZWN0LmFjdHVhbExlbmd0aDtcclxuICAgICAgICBjb25zdCByZXF1aXJlZExlbmd0aCA9IGVycm9yT2JqZWN0LnJlcXVpcmVkTGVuZ3RoO1xyXG4gICAgICAgIG1zZyA9IGFjdHVhbExlbmd0aFxyXG4gICAgICAgICAgKyAnIGNoYXJhY3RlcnMgaW5wdXQgYnV0IG1heCBsZW5ndGggaXMgJ1xyXG4gICAgICAgICAgKyByZXF1aXJlZExlbmd0aDtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSAncmVxdWlyZWQnOlxyXG4gICAgICAgIG1zZyA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgY2FzZSAnaXNOb3RCZWZvcmVUb2RheSc6XHJcbiAgICAgICAgbXNnID0nRGF0ZSBtdXN0IG5vdCBiZSBiZWZvcmUgdG9kYXknO1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcy5wdXNoKG1zZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIG1zZyA9ICdJbnZhbGlkJ1xyXG4gICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcy5wdXNoKG1zZyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=