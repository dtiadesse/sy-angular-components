import { ElementRef, EventEmitter } from '@angular/core';
export declare enum DragState {
    NotDragging = 0,
    DraggingInTarget = 1,
    DraggingOutsideTarget = 2
}
export declare class DragDropDirective {
    private _elementRef;
    /**
     * Disables the effect
     */
    disabled: boolean;
    /**
     * Sets the current drag state ('NotDragging',
     * 'DraggingInTarget', 'DraggingOutsideTarget')
     */
    dragState: DragState;
    /**
     * Event emitter for drag state changes
     */
    dragStateChange: EventEmitter<DragState>;
    /**
     * Emitter for drop events
     */
    dropEvent: EventEmitter<File[]>;
    constructor(_elementRef: ElementRef);
    _eventIsInTarget(event: any): any;
    _eventHasFiles(event: any): boolean;
    _eventIsInTargetWithFiles(event: DragEvent): any;
    _updateDragState(dragState: DragState): void;
    onElementDrop(event: any): void;
    onElementDragOver(event: any): void;
    onElementDragend(event: any): void;
    onWindowDragover(event: any): void;
    onWindowDrop(event: any): void;
    private _processFileEvent;
    private _processDragEvent;
}
