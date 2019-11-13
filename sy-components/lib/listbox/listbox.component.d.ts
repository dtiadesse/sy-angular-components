import { EventEmitter, ElementRef } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';
import { FieldsetWrapper } from '../wrappers/fieldset-wrapper/fieldset-wrapper.component';
export interface OptionModel {
    name: string;
    value: string;
    label: any;
    required: boolean;
    checked: boolean;
    disabled: boolean;
}
export declare class ListboxComponent implements ControlValueAccessor {
    /**
    * Deprecated, Sets the bound value of the component
    */
    model: any;
    /**
    * Sets the array of checkbox values and labels (see OptionsType[])
    */
    options: OptionModel[];
    /**
    * Sets the label text
    */
    label: string;
    /**
    * Sets the semantic description for the component
    */
    name: string;
    /**
    * Sets helpful text for the using the component
    */
    hint: string;
    /**
    * Sets required text on component
    */
    required: boolean;
    /**
    * Sets the form control error message
    */
    errorMessage: string;
    /**
    * Sets the angular FormControl
    */
    control: FormControl;
    /**
     * Sets the id
     */
    id: string;
    optionsMode: string;
    /**
   * Screen read field
   */
    srOnly: ElementRef;
    /**
   * Ul list of elements
   */
    checkboxListElement: ElementRef;
    /**
   * Mode to determine if single or multiple selection
   */
    isSingleMode: boolean;
    /**
    * current index
    */
    private currentIndex;
    /**
   * current Item
   */
    private currentItem;
    private HighlightedPropertyName;
    /**
    * Deprecated, Event emitted when the model value changes
    */
    modelChange: EventEmitter<any>;
    optionSelected: EventEmitter<any>;
    wrapper: FieldsetWrapper;
    private _ordering;
    onChange: any;
    onTouched: any;
    disabled: boolean;
    value: any;
    ngOnInit(): void;
    setSelectedItem(val: any): void;
    isChecked(value: any): boolean;
    /**
      * on hovering set current index
      */
    onHover(index: number): void;
    /**
      * set selected item and emit on keyboard interaction
      */
    private setHighlightedItem;
    /**
    * adding Screen Reader Message
    */
    private addScreenReaderMessage;
    private setfocus;
    onChecked(ev: any, option: any): void;
    onKeyDown(evt: any): void;
    emitModel(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
}
