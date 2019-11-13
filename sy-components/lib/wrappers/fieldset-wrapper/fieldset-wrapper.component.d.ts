import { ChangeDetectorRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
export declare class FieldsetWrapper {
    private cdr;
    /**
     * sets the label text
     */
    label: string;
    /**
     * sets the hint text
     */
    hint: string;
    /**
     * Add an array of errorMessages
     */
    errorMessages: any[];
    /**
     * set a single error message
     */
    errorMessage: string;
    /**
     * toggles the required text
     */
    required: boolean;
    hintContainer: any;
    showToggle: boolean;
    toggleOpen: boolean;
    private lineSize;
    private lineLimit;
    private checkMore;
    constructor(cdr: ChangeDetectorRef);
    ngOnChanges(c: any): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    calcToggle(): void;
    onResize(event: any): void;
    toggleHint(status: any): void;
    calculateNumberOfLines(obj: any): number;
    formatErrors(...controls: AbstractControl[]): void;
    clearError(): void;
    displayErrors(): boolean;
    displayErrorList(): boolean;
    setOverflow(): string;
    setHeight(): string;
    private _formatError;
    private formatInvalidErrors;
    private setInvalidError;
}
