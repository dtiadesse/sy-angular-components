/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/drag-drop/drag-drop.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, EventEmitter, Output, Input } from '@angular/core';
/** @enum {number} */
const DragState = {
    NotDragging: 0,
    DraggingInTarget: 1,
    DraggingOutsideTarget: 2,
};
export { DragState };
DragState[DragState.NotDragging] = 'NotDragging';
DragState[DragState.DraggingInTarget] = 'DraggingInTarget';
DragState[DragState.DraggingOutsideTarget] = 'DraggingOutsideTarget';
export class DragDropDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        /**
         * Disables the effect
         */
        this.disabled = false;
        /**
         * Sets the current drag state ('NotDragging',
         * 'DraggingInTarget', 'DraggingOutsideTarget')
         */
        this.dragState = DragState.NotDragging;
        /**
         * Event emitter for drag state changes
         */
        this.dragStateChange = new EventEmitter();
        /**
         * Emitter for drop events
         */
        this.dropEvent = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _eventIsInTarget(event) {
        return this._elementRef.nativeElement.contains(event.target);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _eventHasFiles(event) {
        return event.dataTransfer
            && event.dataTransfer.files
            && event.dataTransfer.files.length > 0;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _eventIsInTargetWithFiles(event) {
        return this._eventHasFiles(event)
            && this._eventIsInTarget(event);
    }
    /**
     * @param {?} dragState
     * @return {?}
     */
    _updateDragState(dragState) {
        this.dragState = dragState;
        this.dragStateChange.emit(dragState);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onElementDrop(event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
        if (this.disabled) {
            event.dataTransfer.dropEffect = 'none';
            return;
        }
        this._processFileEvent(event);
        this._updateDragState(DragState.NotDragging);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onElementDragOver(event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
        if (this.disabled) {
            event.dataTransfer.dropEffect = 'none';
            return;
        }
        this._processDragEvent(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onElementDragend(event) {
        this._updateDragState(DragState.NotDragging);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowDragover(event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowDrop(event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _processFileEvent(event) {
        /** @type {?} */
        const dropIsValid = this._eventIsInTargetWithFiles(event);
        if (dropIsValid) {
            /** @type {?} */
            const files = event.dataTransfer.files;
            this.dropEvent.emit(files);
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _processDragEvent(event) {
        /** @type {?} */
        const dropIsValid = this._eventIsInTarget(event);
        if (dropIsValid) {
            this._updateDragState(DragState.DraggingInTarget);
            event.dataTransfer.dropEffect = 'copy';
        }
        else {
            this._updateDragState(DragState.DraggingOutsideTarget);
            event.dataTransfer.dropEffect = 'none';
        }
    }
}
DragDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[syDragDrop]',
            },] }
];
/** @nocollapse */
DragDropDirective.ctorParameters = () => [
    { type: ElementRef }
];
DragDropDirective.propDecorators = {
    disabled: [{ type: Input }],
    dragState: [{ type: Input }],
    dragStateChange: [{ type: Output }],
    dropEvent: [{ type: Output }],
    onElementDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onElementDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onElementDragend: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
    onWindowDragover: [{ type: HostListener, args: ['window:dragover', ['$event'],] }],
    onWindowDrop: [{ type: HostListener, args: ['window:drop', ['$event'],] }]
};
if (false) {
    /**
     * Disables the effect
     * @type {?}
     */
    DragDropDirective.prototype.disabled;
    /**
     * Sets the current drag state ('NotDragging',
     * 'DraggingInTarget', 'DraggingOutsideTarget')
     * @type {?}
     */
    DragDropDirective.prototype.dragState;
    /**
     * Event emitter for drag state changes
     * @type {?}
     */
    DragDropDirective.prototype.dragStateChange;
    /**
     * Emitter for drop events
     * @type {?}
     */
    DragDropDirective.prototype.dropEvent;
    /**
     * @type {?}
     * @private
     */
    DragDropDirective.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9kcmFnLWRyb3AvZHJhZy1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakMsTUFBWSxTQUFTO0lBQ2pCLFdBQVcsR0FBQTtJQUNYLGdCQUFnQixHQUFBO0lBQ2hCLHFCQUFxQixHQUFBO0VBQ3RCOzs7OztBQUtELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFtQjVCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7O1FBZjNCLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7O1FBSzFCLGNBQVMsR0FBYyxTQUFTLENBQUMsV0FBVyxDQUFDOzs7O1FBSTVDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQzs7OztRQUloRCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUVULENBQUM7Ozs7O0lBRWhELGdCQUFnQixDQUFDLEtBQUs7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQUs7UUFDbEIsT0FBTyxLQUFLLENBQUMsWUFBWTtlQUNwQixLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUs7ZUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLEtBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7ZUFD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LFlBQVksU0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFPMUMsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQTlFdkMscUNBQTBDOzs7Ozs7SUFLMUMsc0NBQTZEOzs7OztJQUk3RCw0Q0FBaUU7Ozs7O0lBSWpFLHNDQUF3RDs7Ozs7SUFFNUMsd0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBIb3N0TGlzdGVuZXIsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGVudW0gRHJhZ1N0YXRlIHtcclxuICAgIE5vdERyYWdnaW5nLFxyXG4gICAgRHJhZ2dpbmdJblRhcmdldCxcclxuICAgIERyYWdnaW5nT3V0c2lkZVRhcmdldCxcclxuICB9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3N5RHJhZ0Ryb3BdJyxcclxuICB9KVxyXG4gIGV4cG9ydCBjbGFzcyBEcmFnRHJvcERpcmVjdGl2ZSB7XHJcbiAgICAvKipcclxuICAgICAqIERpc2FibGVzIHRoZSBlZmZlY3RcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgZHJhZyBzdGF0ZSAoJ05vdERyYWdnaW5nJyxcclxuICAgICAqICdEcmFnZ2luZ0luVGFyZ2V0JywgJ0RyYWdnaW5nT3V0c2lkZVRhcmdldCcpXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkcmFnU3RhdGU6IERyYWdTdGF0ZSA9IERyYWdTdGF0ZS5Ob3REcmFnZ2luZztcclxuICAgIC8qKlxyXG4gICAgICogRXZlbnQgZW1pdHRlciBmb3IgZHJhZyBzdGF0ZSBjaGFuZ2VzXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZHJhZ1N0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhdGU+KCk7XHJcbiAgICAvKipcclxuICAgICAqIEVtaXR0ZXIgZm9yIGRyb3AgZXZlbnRzXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgZHJvcEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgX2V2ZW50SXNJblRhcmdldChldmVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2V2ZW50SGFzRmlsZXMoZXZlbnQpIHtcclxuICAgICAgcmV0dXJuIGV2ZW50LmRhdGFUcmFuc2ZlclxyXG4gICAgICAgICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlc1xyXG4gICAgICAgICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIF9ldmVudElzSW5UYXJnZXRXaXRoRmlsZXMoZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZXZlbnRIYXNGaWxlcyhldmVudClcclxuICAgICAgICAmJiB0aGlzLl9ldmVudElzSW5UYXJnZXQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVEcmFnU3RhdGUoZHJhZ1N0YXRlOiBEcmFnU3RhdGUpIHtcclxuICAgICAgdGhpcy5kcmFnU3RhdGUgPSBkcmFnU3RhdGU7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXRlQ2hhbmdlLmVtaXQoZHJhZ1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbkVsZW1lbnREcm9wKGV2ZW50KSB7XHJcbiAgICAgIC8vIFByZXZlbnQgZmlsZSBmcm9tIGxvYWRpbmcgaW4gdGhlIGJyb3dzZXIgdGFiXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdub25lJztcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3Byb2Nlc3NGaWxlRXZlbnQoZXZlbnQpO1xyXG4gICAgICB0aGlzLl91cGRhdGVEcmFnU3RhdGUoRHJhZ1N0YXRlLk5vdERyYWdnaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25FbGVtZW50RHJhZ092ZXIoZXZlbnQpIHtcclxuICAgICAgLy8gUHJldmVudCBmaWxlIGZyb20gbG9hZGluZyBpbiB0aGUgYnJvd3NlciB0YWJcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fcHJvY2Vzc0RyYWdFdmVudChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbkVsZW1lbnREcmFnZW5kKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZURyYWdTdGF0ZShEcmFnU3RhdGUuTm90RHJhZ2dpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpkcmFnb3ZlcicsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25XaW5kb3dEcmFnb3ZlcihldmVudCkge1xyXG4gICAgICAvLyBQcmV2ZW50IGZpbGUgZnJvbSBsb2FkaW5nIGluIHRoZSBicm93c2VyIHRhYlxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6ZHJvcCcsIFsnJGV2ZW50J10pXHJcbiAgICBwdWJsaWMgb25XaW5kb3dEcm9wKGV2ZW50KSB7XHJcbiAgICAgIC8vIFByZXZlbnQgZmlsZSBmcm9tIGxvYWRpbmcgaW4gdGhlIGJyb3dzZXIgdGFiXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Byb2Nlc3NGaWxlRXZlbnQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgY29uc3QgZHJvcElzVmFsaWQgPVxyXG4gICAgICAgIHRoaXMuX2V2ZW50SXNJblRhcmdldFdpdGhGaWxlcyhldmVudCk7XHJcblxyXG4gICAgICBpZiAoZHJvcElzVmFsaWQpIHtcclxuICAgICAgICBjb25zdCBmaWxlcyA9IGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICB0aGlzLmRyb3BFdmVudC5lbWl0KGZpbGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3Byb2Nlc3NEcmFnRXZlbnQoZXZlbnQpOiB2b2lkIHtcclxuICAgICAgY29uc3QgZHJvcElzVmFsaWQgPSB0aGlzLl9ldmVudElzSW5UYXJnZXQoZXZlbnQpO1xyXG4gICAgICBpZiAoZHJvcElzVmFsaWQpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVEcmFnU3RhdGUoRHJhZ1N0YXRlLkRyYWdnaW5nSW5UYXJnZXQpO1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZURyYWdTdGF0ZShEcmFnU3RhdGUuRHJhZ2dpbmdPdXRzaWRlVGFyZ2V0KTtcclxuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdub25lJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==