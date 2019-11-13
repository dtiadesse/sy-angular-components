/**
 * @fileoverview added by tsickle
 * Generated from: lib/listbox/listbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, forwardRef, Input, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KeyHelper, KEYS } from '../utilities/key-helper';
import { FieldsetWrapper } from '../wrappers/fieldset-wrapper/fieldset-wrapper.component';
/**
 * @record
 */
export function OptionModel() { }
if (false) {
    /** @type {?} */
    OptionModel.prototype.name;
    /** @type {?} */
    OptionModel.prototype.value;
    /** @type {?} */
    OptionModel.prototype.label;
    /** @type {?} */
    OptionModel.prototype.required;
    /** @type {?} */
    OptionModel.prototype.checked;
    /** @type {?} */
    OptionModel.prototype.disabled;
}
export class ListboxComponent {
    constructor() {
        /**
         * Deprecated, Sets the bound value of the component
         */
        this.model = [];
        /**
         * Sets required text on component
         */
        this.required = false;
        this.optionsMode = 'checkbox';
        /**
         * current index
         */
        this.currentIndex = 0;
        this.HighlightedPropertyName = 'highlighted';
        /**
         * Deprecated, Event emitted when the model value changes
         */
        this.modelChange = new EventEmitter();
        this.optionSelected = new EventEmitter();
        /*
          * We want our model to list the checked items in the order that they appear
          * in the options list. This object allows us to efficiently determine if a
          * value is before another value
          */
        this._ordering = {};
        this.onChange = (/**
         * @param {?} c
         * @return {?}
         */
        (c) => undefined);
        this.onTouched = (/**
         * @return {?}
         */
        () => undefined);
    }
    /**
     * @return {?}
     */
    get value() {
        return this.model;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set value(val) {
        this.setSelectedItem(val);
        this.onChange(this.model);
        this.onTouched();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // initialize the order lookup map
        for (let i = 0; i < this.options.length; i++) {
            /** @type {?} */
            const val = this.options[i].value;
            this._ordering[val] = i;
        }
        if (this.control) {
            this.control.valueChanges.subscribe((/**
             * @return {?}
             */
            () => {
                this.wrapper.formatErrors(this.control);
            }));
            this.wrapper.formatErrors(this.control);
        }
        this.optionsMode = this.isSingleMode ? 'radio' : 'checkbox';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setSelectedItem(val) {
        /** @type {?} */
        let returnVal = val;
        if (!Array.isArray(returnVal)) {
            returnVal = [];
        }
        // don't select options that are disabled
        for (const idx in this.options) {
            /** @type {?} */
            const lookup = returnVal.findIndex((/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                return value === this.options[idx].value;
            }));
            if (this.options[idx].disabled && lookup !== -1) {
                returnVal.splice(lookup, 1);
            }
        }
        this.model = returnVal;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isChecked(value) {
        return this.model.indexOf(value) !== -1;
    }
    /**
     * on hovering set current index
     * @param {?} index
     * @return {?}
     */
    onHover(index) {
        this.currentIndex = index;
        this.setfocus();
        this.setHighlightedItem(this.options[this.currentIndex]);
    }
    /**
     * set selected item and emit on keyboard interaction
     * @private
     * @param {?} item
     * @return {?}
     */
    setHighlightedItem(item) {
        if (this.options && this.options.length > 0) {
            if (this.currentItem) {
                this.currentItem[this.HighlightedPropertyName] = false;
            }
            this.currentItem = item;
            this.currentItem[this.HighlightedPropertyName] = true;
            /** @type {?} */
            let message = item['lable'];
            //  this.addScreenReaderMessage(message);
        }
    }
    /**
     * adding Screen Reader Message
     * @private
     * @param {?} message
     * @return {?}
     */
    addScreenReaderMessage(message) {
        /** @type {?} */
        const srResults = document.createElement('li');
        srResults.innerText = message;
        if (this.srOnly && this.srOnly.nativeElement) {
            this.srOnly.nativeElement.appendChild(srResults);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setfocus() {
        this.checkboxListElement.nativeElement.getElementsByTagName("li")[this.currentIndex].getElementsByTagName("input")[0].focus();
    }
    /**
     * @param {?} ev
     * @param {?} option
     * @return {?}
     */
    onChecked(ev, option) {
        this.onTouched();
        if (!ev.target.checked) {
            // If the option was unchecked, remove it from the model
            this.value = this.model.filter((/**
             * @param {?} val
             * @return {?}
             */
            val => val !== option));
        }
        else {
            // Else, insert the checked item into the model in the correct order
            /** @type {?} */
            let i = 0;
            /** @type {?} */
            const thisOrder = this._ordering[option];
            while (i < this.model.length) {
                /** @type {?} */
                const otherValue = this.model[i];
                // If the item being inserted is after the current value, break and
                // insert it.
                if (thisOrder <= this._ordering[otherValue]) {
                    break;
                }
                i++;
            }
            if (this.isSingleMode) {
                this.value = [option];
            }
            else {
                /** @type {?} */
                const clone = this.model.indexOf('') > -1
                    ? this.model.slice(1)
                    : this.model.slice(0);
                clone.splice(i, 0, option);
                this.value = clone;
            }
        }
        this.emitModel();
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onKeyDown(evt) {
        if (KeyHelper.is(KEYS.TAB, evt)) {
            return;
        }
        else if (KeyHelper.is(KEYS.DOWN, evt)) {
            evt.preventDefault();
            if (this.currentIndex < this.options.length - 1) {
                this.currentIndex += 1;
                this.checkboxListElement.nativeElement.scrollTop = this.checkboxListElement.nativeElement.getElementsByTagName("li")[this.currentIndex].offsetTop;
                this.setHighlightedItem(this.options[this.currentIndex]);
                this.setfocus();
            }
        }
        else if (KeyHelper.is(KEYS.UP, evt)) {
            evt.preventDefault();
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
                this.checkboxListElement.nativeElement.scrollTop = this.checkboxListElement.nativeElement.getElementsByTagName("li")[this.currentIndex].offsetTop;
                this.setHighlightedItem(this.options[this.currentIndex]);
                this.setfocus();
            }
        }
        else if (KeyHelper.is(KEYS.SPACE, evt)) {
            this.onChecked(evt, this.currentItem);
        }
    }
    /**
     * @return {?}
     */
    emitModel() {
        this.modelChange.emit(this.model);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        let returnValue = value;
        if (!returnValue) {
            returnValue = [];
        }
        this.setSelectedItem(returnValue);
    }
}
ListboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'sy-listbox',
                template: "<div class=\"listbox-width\">\r\n    <ng-container *ngTemplateOutlet=\"listTemplate\"></ng-container>\r\n</div>\r\n\r\n<ng-template #listTemplate>\r\n    <sy-fieldset-wrapper [label]=\"label\" [hint]=\"hint\" [errorMessage]=\"errorMessage\" [required]=\"required\">\r\n        <div id=\"listboxgroup-lable\" (keydown)=\"onKeyDown($event)\">\r\n            <ul role=\"listboxgroup\" tabindex=\"0\" aria-labelledby=\"listboxgroup-lable\" #checkboxList class=\"usa-unstyled-list checkbox-container\">\r\n\r\n                <li (mouseenter)=\"onHover(i)\" [class]=\"option['highlighted']? 'selected-item':''\" *ngFor=\"let option of options; let i = index;\" role=\"option\" aria-checked=\"false\">\r\n\r\n                    <input [disabled]=\"option.disabled || disabled?'disabled':null \" [attr.id]=\"option.name\" [attr.value]=\"option.value\" [attr.type]=\"optionsMode\" [attr.aria-label]=\"option.name\" [required]=\"option.required\" [checked]=\"option.checked\" name=\"option\" (change)=\"onChecked($event,option)\">\r\n                    <label [attr.for]=\"option.name\">{{option.label}}</label>\r\n                </li>\r\n            </ul>\r\n            <ul #srOnly class=\"usa-sr-only\" aria-live=\"assertive\" aria-relevant=\"additions\"></ul>\r\n        </div>\r\n    </sy-fieldset-wrapper>\r\n</ng-template>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => ListboxComponent)),
                        multi: true
                    }],
                styles: [".checkbox-container{position:relative;height:130px;max-height:145px;overflow-y:scroll;overflow-x:hidden;margin:10px;padding-left:10px}.selected-item{background-color:#0071bc;color:#fff}.listbox-width{max-width:500px}"]
            }] }
];
ListboxComponent.propDecorators = {
    model: [{ type: Input }],
    options: [{ type: Input }],
    label: [{ type: Input }],
    name: [{ type: Input }],
    hint: [{ type: Input }],
    required: [{ type: Input }],
    errorMessage: [{ type: Input }],
    control: [{ type: Input }],
    id: [{ type: Input }],
    srOnly: [{ type: ViewChild, args: ['srOnly',] }],
    checkboxListElement: [{ type: ViewChild, args: ['checkboxList',] }],
    isSingleMode: [{ type: Input }],
    modelChange: [{ type: Output }],
    optionSelected: [{ type: Output }],
    wrapper: [{ type: ViewChild, args: [FieldsetWrapper,] }]
};
if (false) {
    /**
     * Deprecated, Sets the bound value of the component
     * @type {?}
     */
    ListboxComponent.prototype.model;
    /**
     * Sets the array of checkbox values and labels (see OptionsType[])
     * @type {?}
     */
    ListboxComponent.prototype.options;
    /**
     * Sets the label text
     * @type {?}
     */
    ListboxComponent.prototype.label;
    /**
     * Sets the semantic description for the component
     * @type {?}
     */
    ListboxComponent.prototype.name;
    /**
     * Sets helpful text for the using the component
     * @type {?}
     */
    ListboxComponent.prototype.hint;
    /**
     * Sets required text on component
     * @type {?}
     */
    ListboxComponent.prototype.required;
    /**
     * Sets the form control error message
     * @type {?}
     */
    ListboxComponent.prototype.errorMessage;
    /**
     * Sets the angular FormControl
     * @type {?}
     */
    ListboxComponent.prototype.control;
    /**
     * Sets the id
     * @type {?}
     */
    ListboxComponent.prototype.id;
    /** @type {?} */
    ListboxComponent.prototype.optionsMode;
    /**
     * Screen read field
     * @type {?}
     */
    ListboxComponent.prototype.srOnly;
    /**
     * Ul list of elements
     * @type {?}
     */
    ListboxComponent.prototype.checkboxListElement;
    /**
     * Mode to determine if single or multiple selection
     * @type {?}
     */
    ListboxComponent.prototype.isSingleMode;
    /**
     * current index
     * @type {?}
     * @private
     */
    ListboxComponent.prototype.currentIndex;
    /**
     * current Item
     * @type {?}
     * @private
     */
    ListboxComponent.prototype.currentItem;
    /**
     * @type {?}
     * @private
     */
    ListboxComponent.prototype.HighlightedPropertyName;
    /**
     * Deprecated, Event emitted when the model value changes
     * @type {?}
     */
    ListboxComponent.prototype.modelChange;
    /** @type {?} */
    ListboxComponent.prototype.optionSelected;
    /** @type {?} */
    ListboxComponent.prototype.wrapper;
    /**
     * @type {?}
     * @private
     */
    ListboxComponent.prototype._ordering;
    /** @type {?} */
    ListboxComponent.prototype.onChange;
    /** @type {?} */
    ListboxComponent.prototype.onTouched;
    /** @type {?} */
    ListboxComponent.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2xpc3Rib3gvbGlzdGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLE1BQU0sRUFDakIsVUFBVSxFQUFFLEtBQUssRUFDakIsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ3BDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBRVgsaUJBQWlCLEVBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seURBQXlELENBQUM7Ozs7QUFFMUYsaUNBT0M7OztJQU5DLDJCQUFhOztJQUNiLDRCQUFjOztJQUNkLDRCQUFXOztJQUNYLCtCQUFrQjs7SUFDbEIsOEJBQWlCOztJQUNqQiwrQkFBa0I7O0FBYXBCLE1BQU0sT0FBTyxnQkFBZ0I7SUFWN0I7Ozs7UUFjVSxVQUFLLEdBQVEsRUFBRSxDQUFDOzs7O1FBb0JoQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBZTVCLGdCQUFXLEdBQVcsVUFBVSxDQUFDOzs7O1FBb0JoQyxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQU96Qiw0QkFBdUIsR0FBRyxhQUFhLENBQUM7Ozs7UUFLdEMsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV6RCxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOzs7Ozs7UUFTOUQsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUM1QixhQUFROzs7O1FBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBQztRQUNqQyxjQUFTOzs7UUFBUSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUM7SUF3S2xDLENBQUM7Ozs7SUF0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QUl2QixnQ0FBc0I7Ozs7O0lBSXRCLGdDQUFzQjs7Ozs7SUFJdEIsb0NBQW1DOzs7OztJQUluQyx3Q0FBOEI7Ozs7O0lBSTlCLG1DQUE4Qjs7Ozs7SUFLOUIsOEJBQW9COztJQUVwQix1Q0FBd0M7Ozs7O0lBS3hDLGtDQUF3Qzs7Ozs7SUFLeEMsK0NBQTJEOzs7OztJQUszRCx3Q0FBc0M7Ozs7OztJQUt0Qyx3Q0FBaUM7Ozs7OztJQUtqQyx1Q0FBaUM7Ozs7O0lBRWpDLG1EQUFnRDs7Ozs7SUFLaEQsdUNBQW1FOztJQUVuRSwwQ0FBc0U7O0lBRXRFLG1DQUNnQzs7Ozs7SUFNaEMscUNBQTRCOztJQUM1QixvQ0FBaUM7O0lBQ2pDLHFDQUFpQzs7SUFDakMsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIE91dHB1dCxcclxuICBmb3J3YXJkUmVmLCBJbnB1dCxcclxuICBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBLZXlIZWxwZXIsIEtFWVMgfSBmcm9tICcuLi91dGlsaXRpZXMva2V5LWhlbHBlcic7XHJcbmltcG9ydCB7IEZpZWxkc2V0V3JhcHBlciB9IGZyb20gJy4uL3dyYXBwZXJzL2ZpZWxkc2V0LXdyYXBwZXIvZmllbGRzZXQtd3JhcHBlci5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25Nb2RlbCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IGFueTtcclxuICByZXF1aXJlZDogYm9vbGVhbjtcclxuICBjaGVja2VkOiBib29sZWFuO1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N5LWxpc3Rib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0Ym94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9saXN0Ym94LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbe1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBMaXN0Ym94Q29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3Rib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgLyoqXHJcbiAgKiBEZXByZWNhdGVkLCBTZXRzIHRoZSBib3VuZCB2YWx1ZSBvZiB0aGUgY29tcG9uZW50XHJcbiAgKi9cclxuIEBJbnB1dCgpIG1vZGVsOiBhbnkgPSBbXTtcclxuIC8qKlxyXG4gKiBTZXRzIHRoZSBhcnJheSBvZiBjaGVja2JveCB2YWx1ZXMgYW5kIGxhYmVscyAoc2VlIE9wdGlvbnNUeXBlW10pXHJcbiAqL1xyXG4gQElucHV0KCkgb3B0aW9uczogT3B0aW9uTW9kZWxbXTtcclxuIC8qKlxyXG4gKiBTZXRzIHRoZSBsYWJlbCB0ZXh0XHJcbiAqL1xyXG4gQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuIC8qKlxyXG4gKiBTZXRzIHRoZSBzZW1hbnRpYyBkZXNjcmlwdGlvbiBmb3IgdGhlIGNvbXBvbmVudFxyXG4gKi9cclxuIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuIC8qKlxyXG4gKiBTZXRzIGhlbHBmdWwgdGV4dCBmb3IgdGhlIHVzaW5nIHRoZSBjb21wb25lbnRcclxuICovXHJcbiBASW5wdXQoKSBoaW50OiBzdHJpbmc7XHJcbiAvKipcclxuICogU2V0cyByZXF1aXJlZCB0ZXh0IG9uIGNvbXBvbmVudFxyXG4gKi9cclxuIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAvKipcclxuICogU2V0cyB0aGUgZm9ybSBjb250cm9sIGVycm9yIG1lc3NhZ2VcclxuICovXHJcbiBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuIC8qKlxyXG4gKiBTZXRzIHRoZSBhbmd1bGFyIEZvcm1Db250cm9sXHJcbiAqL1xyXG4gQElucHV0KCkgY29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiBcclxuIC8qKlxyXG4gICogU2V0cyB0aGUgaWRcclxuICAqL1xyXG4gQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiBwdWJsaWMgb3B0aW9uc01vZGU6IHN0cmluZyA9ICdjaGVja2JveCc7XHJcblxyXG4gLyoqXHJcbiogU2NyZWVuIHJlYWQgZmllbGRcclxuKi9cclxuIEBWaWV3Q2hpbGQoJ3NyT25seScpIHNyT25seTogRWxlbWVudFJlZjtcclxuXHJcbiAvKipcclxuKiBVbCBsaXN0IG9mIGVsZW1lbnRzIFxyXG4qL1xyXG4gQFZpZXdDaGlsZCgnY2hlY2tib3hMaXN0JykgY2hlY2tib3hMaXN0RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAvKipcclxuKiBNb2RlIHRvIGRldGVybWluZSBpZiBzaW5nbGUgb3IgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiovXHJcbiBASW5wdXQoKSBwdWJsaWMgaXNTaW5nbGVNb2RlOiBib29sZWFuO1xyXG5cclxuIC8qKlxyXG4gKiBjdXJyZW50IGluZGV4XHJcbiAqL1xyXG4gcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gLyoqXHJcbiogY3VycmVudCBJdGVtXHJcbiovXHJcbiBwcml2YXRlIGN1cnJlbnRJdGVtOiBPcHRpb25Nb2RlbDtcclxuXHJcbiBwcml2YXRlIEhpZ2hsaWdodGVkUHJvcGVydHlOYW1lID0gJ2hpZ2hsaWdodGVkJztcclxuXHJcbiAvKipcclxuICogRGVwcmVjYXRlZCwgRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBtb2RlbCB2YWx1ZSBjaGFuZ2VzXHJcbiAqL1xyXG4gQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuIEBPdXRwdXQoKSBvcHRpb25TZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiBAVmlld0NoaWxkKEZpZWxkc2V0V3JhcHBlcilcclxuIHB1YmxpYyB3cmFwcGVyOiBGaWVsZHNldFdyYXBwZXI7XHJcbiAvKlxyXG4gICogV2Ugd2FudCBvdXIgbW9kZWwgdG8gbGlzdCB0aGUgY2hlY2tlZCBpdGVtcyBpbiB0aGUgb3JkZXIgdGhhdCB0aGV5IGFwcGVhclxyXG4gICogaW4gdGhlIG9wdGlvbnMgbGlzdC4gVGhpcyBvYmplY3QgYWxsb3dzIHVzIHRvIGVmZmljaWVudGx5IGRldGVybWluZSBpZiBhXHJcbiAgKiB2YWx1ZSBpcyBiZWZvcmUgYW5vdGhlciB2YWx1ZVxyXG4gICovXHJcbiBwcml2YXRlIF9vcmRlcmluZzogYW55ID0ge307XHJcbiBvbkNoYW5nZTogYW55ID0gKGMpID0+IHVuZGVmaW5lZDtcclxuIG9uVG91Y2hlZDogYW55ID0gKCkgPT4gdW5kZWZpbmVkO1xyXG4gcHVibGljIGRpc2FibGVkOiBib29sZWFuO1xyXG4gZ2V0IHZhbHVlKCkge1xyXG4gICByZXR1cm4gdGhpcy5tb2RlbDtcclxuIH1cclxuXHJcbiBzZXQgdmFsdWUodmFsKSB7XHJcbiAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKHZhbCk7XHJcbiAgIHRoaXMub25DaGFuZ2UodGhpcy5tb2RlbCk7XHJcbiAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiB9XHJcblxyXG4gbmdPbkluaXQoKSB7XHJcbiAgIC8vIGluaXRpYWxpemUgdGhlIG9yZGVyIGxvb2t1cCBtYXBcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnNbaV0udmFsdWU7XHJcbiAgICAgdGhpcy5fb3JkZXJpbmdbdmFsXSA9IGk7XHJcbiAgIH1cclxuXHJcbiAgIGlmICh0aGlzLmNvbnRyb2wpIHtcclxuICAgICB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICB0aGlzLndyYXBwZXIuZm9ybWF0RXJyb3JzKHRoaXMuY29udHJvbCk7XHJcbiAgICAgfSk7XHJcbiAgICAgdGhpcy53cmFwcGVyLmZvcm1hdEVycm9ycyh0aGlzLmNvbnRyb2wpO1xyXG4gICB9XHJcbiAgIHRoaXMub3B0aW9uc01vZGUgPSB0aGlzLmlzU2luZ2xlTW9kZSA/ICdyYWRpbycgOiAnY2hlY2tib3gnO1xyXG4gfVxyXG5cclxuIHNldFNlbGVjdGVkSXRlbSh2YWwpIHtcclxuICAgbGV0IHJldHVyblZhbCA9IHZhbDtcclxuICAgaWYgKCFBcnJheS5pc0FycmF5KHJldHVyblZhbCkpIHtcclxuICAgICByZXR1cm5WYWwgPSBbXTtcclxuICAgfVxyXG4gICAvLyBkb24ndCBzZWxlY3Qgb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZFxyXG4gICBmb3IgKGNvbnN0IGlkeCBpbiB0aGlzLm9wdGlvbnMpIHtcclxuICAgICBjb25zdCBsb29rdXAgPSByZXR1cm5WYWwuZmluZEluZGV4KCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgcmV0dXJuIHZhbHVlID09PSB0aGlzLm9wdGlvbnNbaWR4XS52YWx1ZTtcclxuICAgICB9KTtcclxuICAgICBpZiAodGhpcy5vcHRpb25zW2lkeF0uZGlzYWJsZWQgJiYgbG9va3VwICE9PSAtMSkge1xyXG4gICAgICAgcmV0dXJuVmFsLnNwbGljZShsb29rdXAsIDEpO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICB0aGlzLm1vZGVsID0gcmV0dXJuVmFsO1xyXG4gfVxyXG5cclxuIGlzQ2hlY2tlZCh2YWx1ZSkge1xyXG4gICByZXR1cm4gdGhpcy5tb2RlbC5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XHJcbiB9XHJcblxyXG4gLyoqXHJcbiAgICogb24gaG92ZXJpbmcgc2V0IGN1cnJlbnQgaW5kZXggXHJcbiAgICovXHJcbiBvbkhvdmVyKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgdGhpcy5zZXRmb2N1cygpO1xyXG4gICB0aGlzLnNldEhpZ2hsaWdodGVkSXRlbSh0aGlzLm9wdGlvbnNbdGhpcy5jdXJyZW50SW5kZXhdKTtcclxuIH1cclxuXHJcbiAvKipcclxuICAgKiBzZXQgc2VsZWN0ZWQgaXRlbSBhbmQgZW1pdCBvbiBrZXlib2FyZCBpbnRlcmFjdGlvblxyXG4gICAqL1xyXG4gcHJpdmF0ZSBzZXRIaWdobGlnaHRlZEl0ZW0oaXRlbTogT3B0aW9uTW9kZWwpOiB2b2lkIHtcclxuICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgIGlmICh0aGlzLmN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICB0aGlzLmN1cnJlbnRJdGVtW3RoaXMuSGlnaGxpZ2h0ZWRQcm9wZXJ0eU5hbWVdID0gZmFsc2U7XHJcbiAgICAgfVxyXG4gICAgIHRoaXMuY3VycmVudEl0ZW0gPSBpdGVtO1xyXG4gICAgIHRoaXMuY3VycmVudEl0ZW1bdGhpcy5IaWdobGlnaHRlZFByb3BlcnR5TmFtZV0gPSB0cnVlO1xyXG4gICAgIGxldCBtZXNzYWdlID0gaXRlbVsnbGFibGUnXTtcclxuICAgIC8vICB0aGlzLmFkZFNjcmVlblJlYWRlck1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgIH1cclxuIH1cclxuXHJcbiAvKipcclxuICogYWRkaW5nIFNjcmVlbiBSZWFkZXIgTWVzc2FnZVxyXG4gKi9cclxuIHByaXZhdGUgYWRkU2NyZWVuUmVhZGVyTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgY29uc3Qgc3JSZXN1bHRzOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgIHNyUmVzdWx0cy5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gICBpZiAodGhpcy5zck9ubHkgJiYgdGhpcy5zck9ubHkubmF0aXZlRWxlbWVudCkge1xyXG4gICAgIHRoaXMuc3JPbmx5Lm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JSZXN1bHRzKTtcclxuICAgfVxyXG4gfVxyXG4gcHJpdmF0ZSBzZXRmb2N1cygpIHtcclxuICAgdGhpcy5jaGVja2JveExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKVt0aGlzLmN1cnJlbnRJbmRleF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXS5mb2N1cygpO1xyXG4gfVxyXG5cclxuIG9uQ2hlY2tlZChldiwgb3B0aW9uKSB7XHJcbiAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgIGlmICghZXYudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAvLyBJZiB0aGUgb3B0aW9uIHdhcyB1bmNoZWNrZWQsIHJlbW92ZSBpdCBmcm9tIHRoZSBtb2RlbFxyXG4gICAgIHRoaXMudmFsdWUgPSB0aGlzLm1vZGVsLmZpbHRlcih2YWwgPT4gdmFsICE9PSBvcHRpb24pO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgIC8vIEVsc2UsIGluc2VydCB0aGUgY2hlY2tlZCBpdGVtIGludG8gdGhlIG1vZGVsIGluIHRoZSBjb3JyZWN0IG9yZGVyXHJcbiAgICAgbGV0IGkgPSAwO1xyXG4gICAgIGNvbnN0IHRoaXNPcmRlciA9IHRoaXMuX29yZGVyaW5nW29wdGlvbl07XHJcbiAgICAgd2hpbGUgKGkgPCB0aGlzLm1vZGVsLmxlbmd0aCkge1xyXG4gICAgICAgY29uc3Qgb3RoZXJWYWx1ZSA9IHRoaXMubW9kZWxbaV07XHJcbiAgICAgICAvLyBJZiB0aGUgaXRlbSBiZWluZyBpbnNlcnRlZCBpcyBhZnRlciB0aGUgY3VycmVudCB2YWx1ZSwgYnJlYWsgYW5kXHJcbiAgICAgICAvLyBpbnNlcnQgaXQuXHJcbiAgICAgICBpZiAodGhpc09yZGVyIDw9IHRoaXMuX29yZGVyaW5nW290aGVyVmFsdWVdKSB7XHJcbiAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgfVxyXG4gICAgICAgaSsrO1xyXG4gICAgIH1cclxuICAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcclxuICAgICAgIHRoaXMudmFsdWUgPSBbb3B0aW9uXVxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMubW9kZWwuaW5kZXhPZignJykgPiAtMVxyXG4gICAgICAgICA/IHRoaXMubW9kZWwuc2xpY2UoMSlcclxuICAgICAgICAgOiB0aGlzLm1vZGVsLnNsaWNlKDApO1xyXG4gICAgICAgY2xvbmUuc3BsaWNlKGksIDAsIG9wdGlvbik7XHJcbiAgICAgICB0aGlzLnZhbHVlID0gY2xvbmU7XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgIHRoaXMuZW1pdE1vZGVsKCk7XHJcbiB9XHJcblxyXG4gb25LZXlEb3duKGV2dCk6IHZvaWQge1xyXG4gICBpZiAoS2V5SGVscGVyLmlzKEtFWVMuVEFCLCBldnQpKSB7XHJcbiAgICAgcmV0dXJuO1xyXG4gICB9XHJcbiAgIGVsc2UgaWYgKEtleUhlbHBlci5pcyhLRVlTLkRPV04sIGV2dCkpIHtcclxuICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gMTtcclxuICAgICAgIHRoaXMuY2hlY2tib3hMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuY2hlY2tib3hMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIilbdGhpcy5jdXJyZW50SW5kZXhdLm9mZnNldFRvcDtcclxuICAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRJdGVtKHRoaXMub3B0aW9uc1t0aGlzLmN1cnJlbnRJbmRleF0pO1xyXG4gICAgICAgdGhpcy5zZXRmb2N1cygpO1xyXG4gICAgIH1cclxuICAgfVxyXG4gICBlbHNlIGlmIChLZXlIZWxwZXIuaXMoS0VZUy5VUCwgZXZ0KSkge1xyXG4gICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+IDApIHtcclxuICAgICAgIHRoaXMuY3VycmVudEluZGV4IC09IDE7XHJcbiAgICAgICB0aGlzLmNoZWNrYm94TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmNoZWNrYm94TGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpW3RoaXMuY3VycmVudEluZGV4XS5vZmZzZXRUb3A7XHJcbiAgICAgICB0aGlzLnNldEhpZ2hsaWdodGVkSXRlbSh0aGlzLm9wdGlvbnNbdGhpcy5jdXJyZW50SW5kZXhdKTtcclxuICAgICAgIHRoaXMuc2V0Zm9jdXMoKTtcclxuICAgICB9XHJcbiAgIH1cclxuICAgZWxzZSBpZiAoS2V5SGVscGVyLmlzKEtFWVMuU1BBQ0UsIGV2dCkpIHtcclxuICAgICB0aGlzLm9uQ2hlY2tlZChldnQsIHRoaXMuY3VycmVudEl0ZW0pO1xyXG4gICB9XHJcbiB9XHJcblxyXG4gZW1pdE1vZGVsKCkge1xyXG4gICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5tb2RlbCk7XHJcbiB9XHJcblxyXG4gcmVnaXN0ZXJPbkNoYW5nZShmbikge1xyXG4gICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiB9XHJcblxyXG4gcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcclxuICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuIH1cclxuXHJcbiBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiB9XHJcblxyXG4gd3JpdGVWYWx1ZSh2YWx1ZSkge1xyXG4gICBsZXQgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcclxuICAgaWYgKCFyZXR1cm5WYWx1ZSkge1xyXG4gICAgIHJldHVyblZhbHVlID0gW107XHJcbiAgIH1cclxuICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW0ocmV0dXJuVmFsdWUpO1xyXG4gfVxyXG59XHJcbiJdfQ==