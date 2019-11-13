/**
 * @fileoverview added by tsickle
 * Generated from: lib/wrappers/fieldset-wrapper/fieldset-wrapper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
var FieldsetWrapper = /** @class */ (function () {
    function FieldsetWrapper(cdr) {
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
    Object.defineProperty(FieldsetWrapper.prototype, "errorMessage", {
        get: /**
         * @return {?}
         */
        function () {
            return this.errorMessages[0];
        },
        /**
         * set a single error message
         */
        set: /**
         * set a single error message
         * @param {?} message
         * @return {?}
         */
        function (message) {
            if (!!message) {
                this.errorMessages = [];
                this.errorMessages.push(message);
            }
            else {
                this.errorMessages = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param {?} c
     * @return {?}
     */
    FieldsetWrapper.prototype.ngOnChanges = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
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
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calcToggle();
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.checkMore && !this.showToggle) {
            this.calcToggle();
            this.cdr.detectChanges();
            this.checkMore = false;
        }
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.calcToggle = /**
     * @return {?}
     */
    function () {
        if (this.hintContainer) {
            /** @type {?} */
            var numOfLines = this.calculateNumberOfLines(this.hintContainer.nativeElement);
            this.showToggle = numOfLines > this.lineLimit
                ? true
                : false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FieldsetWrapper.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // needs to be open to recalc correctly in
        // ngAfterViewChecked
        this.showToggle = false;
        this.toggleOpen = false;
        this.checkMore = true;
        this.cdr.detectChanges();
    };
    /**
     * @param {?} status
     * @return {?}
     */
    FieldsetWrapper.prototype.toggleHint = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        this.toggleOpen = !status;
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    FieldsetWrapper.prototype.calculateNumberOfLines = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!this.lineSize) {
            /** @type {?} */
            var other = obj.cloneNode(true);
            other.innerHTML = 'a<br>b';
            other.style.visibility = 'hidden';
            /** @type {?} */
            var el = (/** @type {?} */ (document
                .getElementsByTagName('body')[0]));
            el.appendChild(other);
            this.lineSize = other.offsetHeight / 2;
            el.removeChild(other);
        }
        /** @type {?} */
        var val = Math.floor(obj.offsetHeight / this.lineSize);
        return val;
    };
    /**
     * @param {...?} controls
     * @return {?}
     */
    FieldsetWrapper.prototype.formatErrors = /**
     * @param {...?} controls
     * @return {?}
     */
    function () {
        var _this = this;
        var controls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            controls[_i] = arguments[_i];
        }
        this.errorMessages = [];
        controls.forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) { return _this._formatError(control); }));
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.clearError = /**
     * @return {?}
     */
    function () {
        this.errorMessages = [];
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.displayErrors = /**
     * @return {?}
     */
    function () {
        return this.errorMessages.length > 0;
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.displayErrorList = /**
     * @return {?}
     */
    function () {
        return this.errorMessages.length > 1;
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.setOverflow = /**
     * @return {?}
     */
    function () {
        return (this.showToggle && !this.toggleOpen)
            ? 'hidden'
            : '';
    };
    /**
     * @return {?}
     */
    FieldsetWrapper.prototype.setHeight = /**
     * @return {?}
     */
    function () {
        return (this.showToggle && !this.toggleOpen)
            ? '2.88em'
            : '';
    };
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    FieldsetWrapper.prototype._formatError = /**
     * @private
     * @param {?} control
     * @return {?}
     */
    function (control) {
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
    };
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    FieldsetWrapper.prototype.formatInvalidErrors = /**
     * @private
     * @param {?} control
     * @return {?}
     */
    function (control) {
        for (var k in control.errors) {
            /** @type {?} */
            var errorObject = control.errors[k];
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
    };
    /**
     * @private
     * @param {?} error
     * @param {?} errorObject
     * @return {?}
     */
    FieldsetWrapper.prototype.setInvalidError = /**
     * @private
     * @param {?} error
     * @param {?} errorObject
     * @return {?}
     */
    function (error, errorObject) {
        /** @type {?} */
        var msg;
        switch (error) {
            case 'maxlength':
                /** @type {?} */
                var actualLength = errorObject.actualLength;
                /** @type {?} */
                var requiredLength = errorObject.requiredLength;
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
    };
    FieldsetWrapper.decorators = [
        { type: Component, args: [{
                    selector: 'sy-fieldset-wrapper',
                    template: "<div [class.sy-input-error]=\"displayErrors()\">\r\n\r\n    <fieldset class=\"fieldset\">\r\n\r\n        <legend *ngIf=\"label || required\" [class.required-text]=\"displayErrors()\">\r\n            {{label}}\r\n            <span *ngIf=\"required\" class=\"required-text\">\r\n        Required\r\n      </span>\r\n            <ng-content select=\"[label-right]\"></ng-content>\r\n        </legend>\r\n\r\n        <div #hintContainer *ngIf=\"hint\" class=\"sy-form-hint\" aria-live=\"polite\" [innerHTML]=\"hint\" [style.overflow]=\"setOverflow()\" [style.height]=\"setHeight()\">\r\n        </div>\r\n\r\n        <div *ngIf=\"showToggle\" class=\"toggle-more\">\r\n            <a href=\"javascript:void(0)\" (click)=\"toggleHint(toggleOpen)\">\r\n        {{ toggleOpen?\"less\":\"more\"}}\r\n      </a>\r\n        </div>\r\n\r\n        <span *ngIf=\"displayErrors()\" class=\"usa-input-error-message\" aria-live=\"assertive\">\r\n      <ng-container *ngIf=\"displayErrorList() else single\">\r\n        <ul>\r\n          <li *ngFor=\"let msg of errorMessages\">\r\n            {{ msg }}\r\n          </li>\r\n        </ul>\r\n      </ng-container>\r\n      <ng-template #single>\r\n        {{ errorMessages[0] }}\r\n      </ng-template>\r\n    </span>\r\n\r\n        <ng-content></ng-content>\r\n\r\n    </fieldset>\r\n\r\n</div>",
                    styles: [".checkbox-container{position:relative;height:130px;max-height:145px;overflow-y:scroll;overflow-x:hidden;margin:10px;padding-left:10px}.selected-item{background-color:#0071bc;color:#fff}.required-text{color:red}.sy-form-hint{font-size:14px}.sy-input-error{color:red}fieldset{border:none}"]
                }] }
    ];
    /** @nocollapse */
    FieldsetWrapper.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    FieldsetWrapper.propDecorators = {
        label: [{ type: Input }],
        hint: [{ type: Input }],
        errorMessages: [{ type: Input }],
        errorMessage: [{ type: Input }],
        required: [{ type: Input }],
        hintContainer: [{ type: ViewChild, args: ['hintContainer',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
    };
    return FieldsetWrapper;
}());
export { FieldsetWrapper };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3dyYXBwZXJzL2ZpZWxkc2V0LXdyYXBwZXIvZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQTRDRSx5QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUEzQjFCLGtCQUFhLEdBQVUsRUFBRSxDQUFDOzs7O1FBbUIxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRW5DLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUUzQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxZQUFZO0lBRU8sQ0FBQztJQXZCL0Msc0JBQW9CLHlDQUFZOzs7O1FBU2hDO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFkRDs7V0FFRzs7Ozs7O1FBQ0gsVUFBa0MsT0FBZTtZQUMvQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQzs7O09BQUE7SUFBQSxDQUFDOzs7OztJQWtCSyxxQ0FBVzs7OztJQUFsQixVQUFtQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztlQUNkLENB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RyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87WUFDVDtnQkFDRSxHQUFHLEdBQUcsU0FBUyxDQUFBO2dCQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixPQUFPO1NBQ1Y7SUFDSCxDQUFDOztnQkF4TUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBRS9CLDZ6Q0FBZ0Q7O2lCQUNqRDs7OztnQkFSQyxpQkFBaUI7Ozt3QkFhaEIsS0FBSzt1QkFJTCxLQUFLO2dDQUlMLEtBQUs7K0JBSUwsS0FBSzsyQkFlTCxLQUFLO2dDQUNMLFNBQVMsU0FBQyxlQUFlOzJCQThDekIsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFzSDNDLHNCQUFDO0NBQUEsQUF6TUQsSUF5TUM7U0FwTVksZUFBZTs7Ozs7O0lBSTFCLGdDQUE4Qjs7Ozs7SUFJOUIsK0JBQTZCOzs7OztJQUk3Qix3Q0FBMEM7Ozs7O0lBbUIxQyxtQ0FBMEM7O0lBQzFDLHdDQUFzRDs7SUFDdEQscUNBQW1DOztJQUNuQyxxQ0FBbUM7Ozs7O0lBQ25DLG1DQUF5Qjs7Ozs7SUFDekIsb0NBQThCOzs7OztJQUM5QixvQ0FBMEI7Ozs7O0lBRWQsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N5LWZpZWxkc2V0LXdyYXBwZXInLFxyXG4gIHN0eWxlVXJsczogWycuL2ZpZWxkc2V0LXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkc2V0V3JhcHBlciB7XHJcbiAgLyoqXHJcbiAgICogc2V0cyB0aGUgbGFiZWwgdGV4dFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHNldHMgdGhlIGhpbnQgdGV4dFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoaW50OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWRkIGFuIGFycmF5IG9mIGVycm9yTWVzc2FnZXNcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgZXJyb3JNZXNzYWdlczogYW55W10gPSBbXTtcclxuICAvKipcclxuICAgKiBzZXQgYSBzaW5nbGUgZXJyb3IgbWVzc2FnZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzZXQgZXJyb3JNZXNzYWdlIChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGlmICghIW1lc3NhZ2UpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gW107XHJcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gW107XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGdldCBlcnJvck1lc3NhZ2UgKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5lcnJvck1lc3NhZ2VzWzBdO1xyXG4gIH1cclxuICAvKipcclxuICAgKiB0b2dnbGVzIHRoZSByZXF1aXJlZCB0ZXh0XHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZCgnaGludENvbnRhaW5lcicpIHB1YmxpYyBoaW50Q29udGFpbmVyOiBhbnk7XHJcbiAgcHVibGljIHNob3dUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgdG9nZ2xlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbGluZVNpemU6IG51bWJlcjtcclxuICBwcml2YXRlIGxpbmVMaW1pdDogbnVtYmVyID0gMjtcclxuICBwcml2YXRlIGNoZWNrTW9yZSA9IGZhbHNlOyAvLyBzZW1hcGhvcmVcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGMpIHtcclxuICAgIGlmICghdGhpcy5jaGVja01vcmVcclxuICAgICAgJiYgYy5oaW50XHJcbiAgICAgICYmIGMuaGludC5wcmV2aW91c1ZhbHVlICE9PSBjLmhpbnQuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIC8vIG5lZWRzIHRvIGJlIG9wZW4gdG8gcmVjYWxjIGNvcnJlY3RseSBpblxyXG4gICAgICAvLyBuZ0FmdGVyVmlld0NoZWNrZWRcclxuICAgICAgdGhpcy5zaG93VG9nZ2xlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudG9nZ2xlT3BlbiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNoZWNrTW9yZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNhbGNUb2dnbGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja01vcmUgJiYgIXRoaXMuc2hvd1RvZ2dsZSkge1xyXG4gICAgICB0aGlzLmNhbGNUb2dnbGUoKTtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB0aGlzLmNoZWNrTW9yZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbGNUb2dnbGUoKSB7XHJcbiAgICBpZiAodGhpcy5oaW50Q29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnN0IG51bU9mTGluZXMgPVxyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlTnVtYmVyT2ZMaW5lcyhcclxuICAgICAgICAgIHRoaXMuaGludENvbnRhaW5lci5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgICAgdGhpcy5zaG93VG9nZ2xlID0gbnVtT2ZMaW5lcyA+IHRoaXMubGluZUxpbWl0XHJcbiAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgOiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIHB1YmxpYyBvblJlc2l6ZShldmVudCkge1xyXG4gICAgLy8gbmVlZHMgdG8gYmUgb3BlbiB0byByZWNhbGMgY29ycmVjdGx5IGluXHJcbiAgICAvLyBuZ0FmdGVyVmlld0NoZWNrZWRcclxuICAgIHRoaXMuc2hvd1RvZ2dsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy50b2dnbGVPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNoZWNrTW9yZSA9IHRydWU7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlSGludChzdGF0dXMpIHtcclxuICAgIHRoaXMudG9nZ2xlT3BlbiA9ICFzdGF0dXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsY3VsYXRlTnVtYmVyT2ZMaW5lcyhvYmopIHtcclxuICAgIGlmICghdGhpcy5saW5lU2l6ZSkge1xyXG4gICAgICBjb25zdCBvdGhlciA9IG9iai5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgIG90aGVyLmlubmVySFRNTCA9ICdhPGJyPmInO1xyXG4gICAgICBvdGhlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgIGNvbnN0IGVsID0gPEhUTUxFbGVtZW50PmRvY3VtZW50XHJcbiAgICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XHJcbiAgICAgIGVsLmFwcGVuZENoaWxkKG90aGVyKTtcclxuICAgICAgdGhpcy5saW5lU2l6ZSA9IG90aGVyLm9mZnNldEhlaWdodCAvIDI7XHJcbiAgICAgIGVsLnJlbW92ZUNoaWxkKG90aGVyKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZhbCA9IE1hdGguZmxvb3Iob2JqLm9mZnNldEhlaWdodCAvICB0aGlzLmxpbmVTaXplKTtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9ybWF0RXJyb3JzKC4uLmNvbnRyb2xzOiBBYnN0cmFjdENvbnRyb2xbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gW107XHJcbiAgICBjb250cm9scy5mb3JFYWNoKFxyXG4gICAgICBjb250cm9sID0+IHRoaXMuX2Zvcm1hdEVycm9yKGNvbnRyb2wpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyRXJyb3IoKSB7XHJcbiAgICB0aGlzLmVycm9yTWVzc2FnZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNwbGF5RXJyb3JzICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNwbGF5RXJyb3JMaXN0ICgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmVycm9yTWVzc2FnZXMubGVuZ3RoID4gMTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRPdmVyZmxvdyAoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAodGhpcy5zaG93VG9nZ2xlICYmICF0aGlzLnRvZ2dsZU9wZW4pXHJcbiAgICAgID8gJ2hpZGRlbidcclxuICAgICAgOiAnJyA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0SGVpZ2h0ICgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuICh0aGlzLnNob3dUb2dnbGUgJiYgIXRoaXMudG9nZ2xlT3BlbilcclxuICAgICAgPyAnMi44OGVtJ1xyXG4gICAgICA6ICcnXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9mb3JtYXRFcnJvcihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcclxuICAgIGlmICghY29udHJvbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRyb2wucHJpc3RpbmUpIHtcclxuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250cm9sLmludmFsaWQgJiYgY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgdGhpcy5mb3JtYXRJbnZhbGlkRXJyb3JzKGNvbnRyb2wpO1xyXG4gICAgfSBlbHNlIGlmICghY29udHJvbC5lcnJvcnMpIHtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRJbnZhbGlkRXJyb3JzKGNvbnRyb2wpIHtcclxuICAgIGZvciAoY29uc3QgayBpbiBjb250cm9sLmVycm9ycykge1xyXG4gICAgICBjb25zdCBlcnJvck9iamVjdCA9IGNvbnRyb2wuZXJyb3JzW2tdO1xyXG5cclxuICAgICAgaWYgKGVycm9yT2JqZWN0Lm1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVycm9yT2JqZWN0Lm1lc3NhZ2UpXHJcbiAgICAgICAgICA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlcy5wdXNoKGVycm9yT2JqZWN0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEludmFsaWRFcnJvcihrLCBlcnJvck9iamVjdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW52YWxpZEVycm9yKGVycm9yLCBlcnJvck9iamVjdCkge1xyXG4gICAgbGV0IG1zZztcclxuICAgIHN3aXRjaCAoZXJyb3IpIHtcclxuICAgICAgY2FzZSAnbWF4bGVuZ3RoJzpcclxuICAgICAgICBjb25zdCBhY3R1YWxMZW5ndGggPSBlcnJvck9iamVjdC5hY3R1YWxMZW5ndGg7XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRMZW5ndGggPSBlcnJvck9iamVjdC5yZXF1aXJlZExlbmd0aDtcclxuICAgICAgICBtc2cgPSBhY3R1YWxMZW5ndGhcclxuICAgICAgICAgICsgJyBjaGFyYWN0ZXJzIGlucHV0IGJ1dCBtYXggbGVuZ3RoIGlzICdcclxuICAgICAgICAgICsgcmVxdWlyZWRMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcclxuICAgICAgICBtc2cgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGNhc2UgJ2lzTm90QmVmb3JlVG9kYXknOlxyXG4gICAgICAgIG1zZyA9J0RhdGUgbXVzdCBub3QgYmUgYmVmb3JlIHRvZGF5JztcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBtc2cgPSAnSW52YWxpZCdcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19