/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/drag-drop/drag-drop.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, EventEmitter, Output, Input } from '@angular/core';
/** @enum {number} */
var DragState = {
    NotDragging: 0,
    DraggingInTarget: 1,
    DraggingOutsideTarget: 2,
};
export { DragState };
DragState[DragState.NotDragging] = 'NotDragging';
DragState[DragState.DraggingInTarget] = 'DraggingInTarget';
DragState[DragState.DraggingOutsideTarget] = 'DraggingOutsideTarget';
var DragDropDirective = /** @class */ (function () {
    function DragDropDirective(_elementRef) {
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
    DragDropDirective.prototype._eventIsInTarget = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this._elementRef.nativeElement.contains(event.target);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype._eventHasFiles = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.dataTransfer
            && event.dataTransfer.files
            && event.dataTransfer.files.length > 0;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype._eventIsInTargetWithFiles = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this._eventHasFiles(event)
            && this._eventIsInTarget(event);
    };
    /**
     * @param {?} dragState
     * @return {?}
     */
    DragDropDirective.prototype._updateDragState = /**
     * @param {?} dragState
     * @return {?}
     */
    function (dragState) {
        this.dragState = dragState;
        this.dragStateChange.emit(dragState);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype.onElementDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
        if (this.disabled) {
            event.dataTransfer.dropEffect = 'none';
            return;
        }
        this._processFileEvent(event);
        this._updateDragState(DragState.NotDragging);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype.onElementDragOver = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
        if (this.disabled) {
            event.dataTransfer.dropEffect = 'none';
            return;
        }
        this._processDragEvent(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype.onElementDragend = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._updateDragState(DragState.NotDragging);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype.onWindowDragover = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype.onWindowDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Prevent file from loading in the browser tab
        event.preventDefault();
        event.stopPropagation();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype._processFileEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dropIsValid = this._eventIsInTargetWithFiles(event);
        if (dropIsValid) {
            /** @type {?} */
            var files = event.dataTransfer.files;
            this.dropEvent.emit(files);
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    DragDropDirective.prototype._processDragEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var dropIsValid = this._eventIsInTarget(event);
        if (dropIsValid) {
            this._updateDragState(DragState.DraggingInTarget);
            event.dataTransfer.dropEffect = 'copy';
        }
        else {
            this._updateDragState(DragState.DraggingOutsideTarget);
            event.dataTransfer.dropEffect = 'none';
        }
    };
    DragDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[syDragDrop]',
                },] }
    ];
    /** @nocollapse */
    DragDropDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return DragDropDirective;
}());
export { DragDropDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9kcmFnLWRyb3AvZHJhZy1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakMsSUFBWSxTQUFTO0lBQ2pCLFdBQVcsR0FBQTtJQUNYLGdCQUFnQixHQUFBO0lBQ2hCLHFCQUFxQixHQUFBO0VBQ3RCOzs7OztBQUVIO0lBc0JJLDJCQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7OztRQWYzQixhQUFRLEdBQVksS0FBSyxDQUFDOzs7OztRQUsxQixjQUFTLEdBQWMsU0FBUyxDQUFDLFdBQVcsQ0FBQzs7OztRQUk1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7Ozs7UUFJaEQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFFVCxDQUFDOzs7OztJQUVoRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBSztRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsS0FBSztRQUNsQixPQUFPLEtBQUssQ0FBQyxZQUFZO2VBQ3BCLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSztlQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQscURBQXlCOzs7O0lBQXpCLFVBQTBCLEtBQWdCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7ZUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLFNBQW9CO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBR00seUNBQWE7Ozs7SUFEcEIsVUFDcUIsS0FBSztRQUN4QiwrQ0FBK0M7UUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3ZDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBR00sNkNBQWlCOzs7O0lBRHhCLFVBQ3lCLEtBQUs7UUFDNUIsK0NBQStDO1FBQy9DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN2QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFHTSw0Q0FBZ0I7Ozs7SUFEdkIsVUFDd0IsS0FBSztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBR00sNENBQWdCOzs7O0lBRHZCLFVBQ3dCLEtBQUs7UUFDM0IsK0NBQStDO1FBQy9DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHTSx3Q0FBWTs7OztJQURuQixVQUNvQixLQUFLO1FBQ3ZCLCtDQUErQztRQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVPLDZDQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBSzs7WUFDdkIsV0FBVyxHQUNmLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7UUFFdkMsSUFBSSxXQUFXLEVBQUU7O2dCQUNULEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFFTyw2Q0FBaUI7Ozs7O0lBQXpCLFVBQTBCLEtBQUs7O1lBQ3ZCLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2xELEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUN4QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztTQUN4QztJQUNILENBQUM7O2dCQS9HSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQWRDLFVBQVU7OzsyQkFtQlQsS0FBSzs0QkFLTCxLQUFLO2tDQUlMLE1BQU07NEJBSU4sTUFBTTtnQ0F3Qk4sWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztvQ0FlL0IsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzttQ0FjbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzttQ0FLcEMsWUFBWSxTQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDOytCQU8xQyxZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQTJCekMsd0JBQUM7Q0FBQSxBQWhISCxJQWdIRztTQTdHWSxpQkFBaUI7Ozs7OztJQUk1QixxQ0FBMEM7Ozs7OztJQUsxQyxzQ0FBNkQ7Ozs7O0lBSTdELDRDQUFpRTs7Ozs7SUFJakUsc0NBQXdEOzs7OztJQUU1Qyx3Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEhvc3RMaXN0ZW5lcixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIE91dHB1dCxcclxuICAgIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgZW51bSBEcmFnU3RhdGUge1xyXG4gICAgTm90RHJhZ2dpbmcsXHJcbiAgICBEcmFnZ2luZ0luVGFyZ2V0LFxyXG4gICAgRHJhZ2dpbmdPdXRzaWRlVGFyZ2V0LFxyXG4gIH1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbc3lEcmFnRHJvcF0nLFxyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIERyYWdEcm9wRGlyZWN0aXZlIHtcclxuICAgIC8qKlxyXG4gICAgICogRGlzYWJsZXMgdGhlIGVmZmVjdFxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBkcmFnIHN0YXRlICgnTm90RHJhZ2dpbmcnLFxyXG4gICAgICogJ0RyYWdnaW5nSW5UYXJnZXQnLCAnRHJhZ2dpbmdPdXRzaWRlVGFyZ2V0JylcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgcHVibGljIGRyYWdTdGF0ZTogRHJhZ1N0YXRlID0gRHJhZ1N0YXRlLk5vdERyYWdnaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiBFdmVudCBlbWl0dGVyIGZvciBkcmFnIHN0YXRlIGNoYW5nZXNcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBkcmFnU3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdTdGF0ZT4oKTtcclxuICAgIC8qKlxyXG4gICAgICogRW1pdHRlciBmb3IgZHJvcCBldmVudHNcclxuICAgICAqL1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBkcm9wRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBfZXZlbnRJc0luVGFyZ2V0KGV2ZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBfZXZlbnRIYXNGaWxlcyhldmVudCkge1xyXG4gICAgICByZXR1cm4gZXZlbnQuZGF0YVRyYW5zZmVyXHJcbiAgICAgICAgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzXHJcbiAgICAgICAgJiYgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgX2V2ZW50SXNJblRhcmdldFdpdGhGaWxlcyhldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9ldmVudEhhc0ZpbGVzKGV2ZW50KVxyXG4gICAgICAgICYmIHRoaXMuX2V2ZW50SXNJblRhcmdldChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgX3VwZGF0ZURyYWdTdGF0ZShkcmFnU3RhdGU6IERyYWdTdGF0ZSkge1xyXG4gICAgICB0aGlzLmRyYWdTdGF0ZSA9IGRyYWdTdGF0ZTtcclxuICAgICAgdGhpcy5kcmFnU3RhdGVDaGFuZ2UuZW1pdChkcmFnU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxyXG4gICAgcHVibGljIG9uRWxlbWVudERyb3AoZXZlbnQpIHtcclxuICAgICAgLy8gUHJldmVudCBmaWxlIGZyb20gbG9hZGluZyBpbiB0aGUgYnJvd3NlciB0YWJcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fcHJvY2Vzc0ZpbGVFdmVudChldmVudCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZURyYWdTdGF0ZShEcmFnU3RhdGUuTm90RHJhZ2dpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbkVsZW1lbnREcmFnT3ZlcihldmVudCkge1xyXG4gICAgICAvLyBQcmV2ZW50IGZpbGUgZnJvbSBsb2FkaW5nIGluIHRoZSBicm93c2VyIHRhYlxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbm9uZSc7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9wcm9jZXNzRHJhZ0V2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxyXG4gICAgcHVibGljIG9uRWxlbWVudERyYWdlbmQoZXZlbnQpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlRHJhZ1N0YXRlKERyYWdTdGF0ZS5Ob3REcmFnZ2luZyk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmRyYWdvdmVyJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbldpbmRvd0RyYWdvdmVyKGV2ZW50KSB7XHJcbiAgICAgIC8vIFByZXZlbnQgZmlsZSBmcm9tIGxvYWRpbmcgaW4gdGhlIGJyb3dzZXIgdGFiXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpkcm9wJywgWyckZXZlbnQnXSlcclxuICAgIHB1YmxpYyBvbldpbmRvd0Ryb3AoZXZlbnQpIHtcclxuICAgICAgLy8gUHJldmVudCBmaWxlIGZyb20gbG9hZGluZyBpbiB0aGUgYnJvd3NlciB0YWJcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcHJvY2Vzc0ZpbGVFdmVudChldmVudCk6IHZvaWQge1xyXG4gICAgICBjb25zdCBkcm9wSXNWYWxpZCA9XHJcbiAgICAgICAgdGhpcy5fZXZlbnRJc0luVGFyZ2V0V2l0aEZpbGVzKGV2ZW50KTtcclxuXHJcbiAgICAgIGlmIChkcm9wSXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzO1xyXG4gICAgICAgIHRoaXMuZHJvcEV2ZW50LmVtaXQoZmlsZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcHJvY2Vzc0RyYWdFdmVudChldmVudCk6IHZvaWQge1xyXG4gICAgICBjb25zdCBkcm9wSXNWYWxpZCA9IHRoaXMuX2V2ZW50SXNJblRhcmdldChldmVudCk7XHJcbiAgICAgIGlmIChkcm9wSXNWYWxpZCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZURyYWdTdGF0ZShEcmFnU3RhdGUuRHJhZ2dpbmdJblRhcmdldCk7XHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlRHJhZ1N0YXRlKERyYWdTdGF0ZS5EcmFnZ2luZ091dHNpZGVUYXJnZXQpO1xyXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19