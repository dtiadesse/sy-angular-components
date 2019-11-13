/**
 * @fileoverview added by tsickle
 * Generated from: lib/upload/upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { Component, ElementRef, Input, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpRequest } from '@angular/common/http';
import { DragState } from '../directives/drag-drop/drag-drop.directive';
// import { HttpEvent } from '@angular/common/http/src/response';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
/** @enum {number} */
const UploadStatus = {
    Initial: 0,
    Uploading: 1,
    Done: 2,
    Error: 3,
};
export { UploadStatus };
UploadStatus[UploadStatus.Initial] = 'Initial';
UploadStatus[UploadStatus.Uploading] = 'Uploading';
UploadStatus[UploadStatus.Done] = 'Done';
UploadStatus[UploadStatus.Error] = 'Error';
export class Upload {
    constructor() {
        this.progress = 0.0;
        this.status = UploadStatus.Initial;
    }
}
if (false) {
    /** @type {?} */
    Upload.prototype.subscription;
    /** @type {?} */
    Upload.prototype.progress;
    /** @type {?} */
    Upload.prototype.status;
    /** @type {?} */
    Upload.prototype.request;
    /** @type {?} */
    Upload.prototype.error;
}
export class UploadFile {
}
if (false) {
    /** @type {?} */
    UploadFile.prototype.file;
    /** @type {?} */
    UploadFile.prototype.upload;
}
/**
 * @param {?} list
 * @return {?}
 */
function toArray(list) {
    return Array.prototype.slice.call(list);
}
/** @type {?} */
const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => UploadComponent)),
    multi: true
};
export var UploadValidator;
(function (UploadValidator) {
    /**
     * @param {?} control
     * @return {?}
     */
    function Required(control) {
        /** @type {?} */
        const error = {
            'required': 'A file is required.'
        };
        /** @type {?} */
        const model = control.value;
        if (!model || !model.length) {
            return error;
        }
        /** @type {?} */
        const atLeastOneDone = model.some((/**
         * @param {?} uf
         * @return {?}
         */
        (uf) => {
            return uf.upload.status === UploadStatus.Done;
        }));
        if (!atLeastOneDone) {
            return error;
        }
    }
    UploadValidator.Required = Required;
})(UploadValidator || (UploadValidator = {}));
export class UploadComponent {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
        /**
         * Max number of files that can be uploaded. If a file is in the error status
         * it does not count. 0 for infinite
         */
        this.maxFiles = 0;
        /**
         * Uploads will not start until the host calls component.startUpload()
         */
        this.uploadDeferred = false;
        /**
         * If maxFileSizeInBytes is exceeded, then display a warning
         */
        this.maxFileSizeInBytes = 0;
        /*
           * Input 508 identifier
           */
        this.name = 'upload';
        this.onModelFilesChanges = new EventEmitter();
        this.dragState = DragState.NotDragging;
        this.showMaxFilesError = false;
        this.disabled = false;
        this.isAcceptableFileType = true;
        this.shouldShowDropTarget = false;
        /* The list of visible files. Does not include deleted
          files. Does include files with errors */
        this._model = [];
    }
    /**
     * @param {?} dragState
     * @return {?}
     */
    onDragStateChange(dragState) {
        dragState !== DragState.NotDragging ?
            this.shouldShowDropTarget = true :
            this.shouldShowDropTarget = false;
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
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && value.length) {
            this._model = value;
        }
        else {
            this._model = [];
            this._clearInput();
        }
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onFilesChange(ev) {
        this.onModelFilesChanges.emit(ev);
        // onFilesChange(files: FileList) {
        /** @type {?} */
        const files = ev.target.files;
        this.onTouched();
        this.showMaxFilesError = false;
        // convert to array for the convience of the standard array functions
        /** @type {?} */
        const asArray = toArray(files);
        /** @type {?} */
        const wouldBeTotal = asArray.length + this._model.length;
        if (this.maxFiles > 0 && wouldBeTotal > this.maxFiles) {
            this.showMaxFilesError = true;
            return;
        }
        if (asArray.length === 0) {
            return;
        }
        this._checkAcceptableFileType(asArray);
        if (!this.isAcceptableFileType) {
            return;
        }
        /** @type {?} */
        const ufs = asArray.map((/**
         * @param {?} f
         * @return {?}
         */
        f => {
            return {
                file: f,
                upload: new Upload()
            };
        }));
        this.validateFiles(ufs);
        // concat old items and new items
        this._model = [...this._model, ...ufs];
        if (!this.uploadDeferred) {
            this.doUpload(ufs);
        }
        this.emit();
    }
    /**
     * @return {?}
     */
    startUpload() {
        this.doUpload(this._model);
    }
    /**
     * @param {?} ufs
     * @return {?}
     */
    validateFiles(ufs) {
        ufs.forEach((/**
         * @param {?} uf
         * @return {?}
         */
        uf => {
            const { file } = uf;
            if (this.maxFileSizeInBytes && file.size > this.maxFileSizeInBytes) {
                uf.upload.status = UploadStatus.Error;
                uf.upload.error = 'File too large';
            }
            if (this.pattern && !this.pattern.test(file.name)) {
                uf.upload.status = UploadStatus.Error;
                uf.upload.error = 'File type not supported';
            }
        }));
    }
    /**
     * @param {?} ufs
     * @return {?}
     */
    doUpload(ufs) {
        ufs.forEach((/**
         * @param {?} uf
         * @return {?}
         */
        uf => {
            const { upload } = uf;
            if (upload.status !== UploadStatus.Initial) {
                return;
            }
            upload.status = UploadStatus.Uploading;
            /** @type {?} */
            const httpEvent$ = this._getHttpEventSteam(uf);
            upload.subscription = httpEvent$.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                if (event.type === HttpEventType.UploadProgress) {
                    upload.progress = event.loaded / event.total;
                }
                else if (event instanceof HttpHeaderResponse) {
                    upload.status = UploadStatus.Done;
                }
                else if (event instanceof HttpErrorResponse) {
                    upload.status = UploadStatus.Error;
                }
                if (event.ok === false) {
                    upload.error = 'Upload failed';
                    upload.status = UploadStatus.Error;
                    this.emit();
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                console.error('upload error', error);
                /** @type {?} */
                let toJson = {};
                try {
                    toJson = JSON.parse(error);
                }
                catch (ex) {
                }
                upload.error = toJson.statusText || toJson.message || 'Upload failed';
                upload.status = UploadStatus.Error;
                this.emit();
            }), (/**
             * @return {?}
             */
            () => {
                upload.status = UploadStatus.Done;
                this.emit();
            }));
        }));
    }
    /**
     * @param {?} uf
     * @return {?}
     */
    onCloseClick(uf) {
        const { upload } = uf;
        if (upload.subscription && upload.status === UploadStatus.Uploading) {
            upload.subscription.unsubscribe();
        }
        else if (this.deleteRequest && upload.status === UploadStatus.Done) {
            this.deleteFile(uf);
        }
        this.removeFileFromList(uf);
    }
    /**
     * @param {?} uf
     * @return {?}
     */
    deleteFile(uf) {
        /** @type {?} */
        const delete$ = this._getDeleteRequestForFile(uf);
        // errors are intentionally ignored. In the case of an
        // error, show it in the console, but don't annoy the user.
        // There may be an extra file on the server, but that's
        // not the user's problem
        delete$.subscribe();
    }
    /**
     * @param {?} uf
     * @return {?}
     */
    removeFileFromList(uf) {
        this._model = this._model.filter((/**
         * @param {?} _uf
         * @return {?}
         */
        _uf => _uf !== uf));
        if (!this._model.length) {
            this._clearInput();
        }
        this.emit();
    }
    /**
     * @return {?}
     */
    anyFiles() {
        return !!(this._model && this._model.length);
    }
    /**
     * @param {?} uf
     * @return {?}
     */
    shouldShowProgressBar(uf) {
        return uf.upload.status === UploadStatus.Uploading;
    }
    /**
     * @param {?} uf
     * @return {?}
     */
    shouldShowError(uf) {
        return uf.upload.status === UploadStatus.Error;
    }
    /**
     * @return {?}
     */
    shouldAllowMoreFiles() {
        if (!this.maxFiles) {
            return true;
        }
        return this._numFilesValid() < this.maxFiles;
    }
    /**
     * @return {?}
     */
    emit() {
        this.onChange(this._model);
    }
    /**
     * @return {?}
     */
    maxFilesErrorMessage() {
        return `The maximum number of files is ${this.maxFiles}`;
    }
    /**
     * @return {?}
     */
    _numFilesValid() {
        return this._model
            .filter((/**
         * @param {?} uf
         * @return {?}
         */
        uf => uf.upload.status !== UploadStatus.Error))
            .length;
    }
    /**
     * @param {?} uf
     * @return {?}
     */
    _getDeleteRequestForFile(uf) {
        /** @type {?} */
        const request = this.deleteRequest(uf);
        if (request instanceof Observable) {
            return request.pipe(switchMap((/**
             * @param {?} req
             * @return {?}
             */
            req => this.httpClient.request(req))));
        }
        else if (request instanceof HttpRequest) {
            return this.httpClient.request(request);
        }
        else {
            throw new Error('Request must be an HttpRequest or Observerable<HttpRequest>');
        }
    }
    /**
     * @param {?} uf
     * @return {?}
     */
    _getHttpEventSteam(uf) {
        const { file, upload } = uf;
        /** @type {?} */
        const request = this.uploadRequest(file);
        if (request instanceof Observable) {
            return request.pipe(switchMap((/**
             * @param {?} req
             * @return {?}
             */
            (req) => {
                upload.request = req;
                return this.httpClient.request(req);
            })));
        }
        else if (request instanceof HttpRequest) {
            upload.request = request;
            return this.httpClient.request(request);
        }
        else {
            throw new Error('Request must be an HttpRequest or Observerable<HttpRequest>');
        }
    }
    /**
     * @return {?}
     */
    _clearInput() {
        // clear the input's internal value, or it will not
        // emit the change event if we select a file, deselect that file,
        // and select the same file again
        this.fileInput.nativeElement.value = '';
    }
    /**
     * @param {?} uploadFiles
     * @return {?}
     */
    _checkAcceptableFileType(uploadFiles) {
        // restrict the file type
        // (<input accept="file_extension|audio/*|video/*|image/*|media_type">)
        uploadFiles.forEach((/**
         * @param {?} uf
         * @return {?}
         */
        uf => {
            if (this.accept && !uf.type.startsWith(this.accept.split('/')[0])
                && uf.name.indexOf(this.accept) < 0) {
                this.isAcceptableFileType = false;
            }
            else {
                this.isAcceptableFileType = true;
            }
        }));
    }
}
UploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'sy-upload',
                providers: [VALUE_ACCESSOR],
                template: "<div class=\"sy-upload\">\r\n    <div class=\"file-container\" syDragDrop [disabled]=\"disabled\" (dropEvent)=\"onFilesChange($event)\" [dragState]=\"dragState\" (dragStateChange)=\"onDragStateChange($event)\" [ngClass]=\" { 'disabled': disabled, 'drag-border': shouldShowDropTarget }\" [ngStyle]=\"{'pointer-events': disabled ? 'none' : 'initial'}\">\r\n        <div class=\"file-container-no-drag\" *ngIf=\"!shouldShowDropTarget\">\r\n            <div class=\"text-center upload-cloud\" *ngIf=\"!anyFiles()\">\r\n                <fa-icon [icon]=\"['fas', 'cloud-upload-alt']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;Drag and drop files here, or<a (click)=\"file.click()\">&nbsp;browse</a>\r\n            </div>\r\n            <div *ngFor=\"let uf of _model\" class=\"file-item\">\r\n                <div class=\"file-row\">\r\n                    <div class=\"file-name\">{{ uf.file.name }}</div>\r\n                    <div class=\"file-size\">{{ uf.file.size | filesize }}</div>\r\n                    <div class=\"file-delete\"><span class=\"icon close fa fa-times-circle\" (click)=\"onCloseClick(uf)\"></span></div>\r\n                </div>\r\n                <!-- <div class=\"file-progress\" *ngIf=\"shouldShowProgressBar(uf)\">\r\n                    <sy-progress-bar [value]=\"uf.upload.progress\"></sy-progress-bar>\r\n                </div> -->\r\n                <!-- <div class=\"file-error\" *ngIf=\"shouldShowError(uf)\">Error: {{uf.upload.error}}</div> -->\r\n            </div>\r\n            <div class=\"text-center\" *ngIf=\"anyFiles() && shouldAllowMoreFiles()\">\r\n                <fa-icon [icon]=\"['fas', 'cloud-upload-alt']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;Drag and drop files here, or<a (click)=\"file.click()\">&nbsp;browse</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"file-container-dragging text-center\" *ngIf=\"shouldShowDropTarget\">\r\n            Drop Files Here\r\n            <p class=\"text-center\"><span class=\"fa fa-cloud-upload\"></span></p>\r\n        </div>\r\n        <div *ngIf=\"showMaxFilesError\" class=\"file-max-error\">\r\n            <fa-icon [icon]=\"['fas', 'exclamation-triangle']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;{{maxFilesErrorMessage()}}\r\n        </div>\r\n        <div *ngIf=\"!isAcceptableFileType && !shouldShowDropTarget\" class=\"file-max-error\">\r\n            <span> <fa-icon [icon]=\"['fas', 'exclamation-triangle']\" size=\"2x\"></fa-icon>&nbsp;&nbsp; Please select {{this.accept}} type of file.</span>\r\n        </div>\r\n\r\n        <!-- Hidden input to trigger the browser file selector -->\r\n        <input type=\"file\" #file [attr.id]=\"name\" [attr.accept]=\"accept\" ngModel class=\"hide\" (change)=\"onFilesChange($event)\" [attr.multiple]=\"maxFiles === 0 || maxFiles > 1 ? 'multiple' : null\">\r\n    </div>\r\n</div>",
                styles: [".sy-upload .icon.close{cursor:pointer;width:2rem;min-width:2rem;font-size:2rem;min-height:2rem;line-height:2rem}.sy-upload .hide{display:none}.sy-upload .disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.sy-upload .file-container{max-width:46rem;border:1px solid #4f4f4f;padding:1rem}.sy-upload .upload-cloud{margin:3rem 0}.sy-upload .text-center a{color:#4bc1d2;font-weight:700;text-decoration:underline}.sy-upload .drag-border{border:3px dashed #9c9c9c;border-radius:1rem}.sy-upload .file-container-dragging{font-size:2.2rem;margin:1.5rem 0;color:#9c9c9c;pointer-events:none}.sy-upload .file-container-dragging *{pointer-events:none}.sy-upload .file-error{color:red}.sy-upload .file-max-error{background-color:#fffaf3;padding:1rem}.sy-upload .file-item{margin-bottom:.7em}.sy-upload .file-row{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.sy-upload .file-row>:not(:first-child){padding-left:.5rem}.sy-upload .file-row .file-name{-webkit-box-flex:1;flex-grow:1;text-align:left;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.sy-upload .file-row .file-size{white-space:nowrap}.sy-upload .file-row .file-progress{width:8rem}.sy-upload .file-row .file-delete{min-width:2rem;text-align:center}.text-center{margin-top:0!important}.text-center a:hover{cursor:pointer}"]
            }] }
];
/** @nocollapse */
UploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
UploadComponent.propDecorators = {
    uploadRequest: [{ type: Input }],
    deleteRequest: [{ type: Input }],
    maxFiles: [{ type: Input }],
    uploadDeferred: [{ type: Input }],
    accept: [{ type: Input }],
    pattern: [{ type: Input }],
    maxFileSizeInBytes: [{ type: Input }],
    name: [{ type: Input }],
    onModelFilesChanges: [{ type: Output }],
    fileInput: [{ type: ViewChild, args: ['file',] }]
};
if (false) {
    /**
     * The request the gets called after a file has been selected for upload.
     * Report progress must be true if you want the progress bar.
     * @type {?}
     */
    UploadComponent.prototype.uploadRequest;
    /**
     * The request that gets called when the user click the (x). If the upload
     * is in progress, the upload is simply canceled. If delete fails, the file
     * is removed from the list and no error is presented to the user.
     * @type {?}
     */
    UploadComponent.prototype.deleteRequest;
    /**
     * Max number of files that can be uploaded. If a file is in the error status
     * it does not count. 0 for infinite
     * @type {?}
     */
    UploadComponent.prototype.maxFiles;
    /**
     * Uploads will not start until the host calls component.startUpload()
     * @type {?}
     */
    UploadComponent.prototype.uploadDeferred;
    /**
     *  "accept" can be any value which is valid for input[accept]
     * (<input accept="file_extension|audio/*|video/*|image/*|media_type">)
     * @type {?}
     */
    UploadComponent.prototype.accept;
    /**
     * Show an error if the file does match the regular expression
     * @type {?}
     */
    UploadComponent.prototype.pattern;
    /**
     * If maxFileSizeInBytes is exceeded, then display a warning
     * @type {?}
     */
    UploadComponent.prototype.maxFileSizeInBytes;
    /** @type {?} */
    UploadComponent.prototype.name;
    /** @type {?} */
    UploadComponent.prototype.onModelFilesChanges;
    /** @type {?} */
    UploadComponent.prototype.dragState;
    /** @type {?} */
    UploadComponent.prototype.showMaxFilesError;
    /** @type {?} */
    UploadComponent.prototype.disabled;
    /** @type {?} */
    UploadComponent.prototype.isAcceptableFileType;
    /** @type {?} */
    UploadComponent.prototype.shouldShowDropTarget;
    /** @type {?} */
    UploadComponent.prototype._model;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype.fileInput;
    /**
     * @type {?}
     * @private
     */
    UploadComponent.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQzlDLFVBQVUsRUFDVixNQUFNLEVBQ04sWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUNuRCxrQkFBa0IsRUFBRSxXQUFXLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0FBRXhFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBUTNDLE1BQVksWUFBWTtJQUNwQixPQUFPLEdBQUE7SUFDUCxTQUFTLEdBQUE7SUFDVCxJQUFJLEdBQUE7SUFDSixLQUFLLEdBQUE7RUFDTjs7Ozs7O0FBRUgsTUFBTSxPQUFPLE1BQU07SUFBbkI7UUFFVyxhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLFdBQU0sR0FBaUIsWUFBWSxDQUFDLE9BQU8sQ0FBQztJQUdyRCxDQUFDO0NBQUE7OztJQUxDLDhCQUFrQzs7SUFDbEMsMEJBQThCOztJQUM5Qix3QkFBbUQ7O0lBQ25ELHlCQUFpQzs7SUFDakMsdUJBQXNCOztBQUcxQixNQUFNLE9BQU8sVUFBVTtDQUdwQjs7O0lBRkMsMEJBQWtCOztJQUNsQiw0QkFBc0I7Ozs7OztBQUcxQixTQUFTLE9BQU8sQ0FBQyxJQUFJO0lBQ25CLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENB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QUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzttQkFDNUQsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoVUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzNCLHd4RkFBc0M7O2FBRXZDOzs7O1lBdEVRLFVBQVU7Ozs0QkE2RWhCLEtBQUs7NEJBT0wsS0FBSzt1QkFNTCxLQUFLOzZCQUtMLEtBQUs7cUJBTUwsS0FBSztzQkFLTCxLQUFLO2lDQUtMLEtBQUs7bUJBS0wsS0FBSztrQ0FFTCxNQUFNO3dCQXNCTixTQUFTLFNBQUMsTUFBTTs7Ozs7Ozs7SUEvRGpCLHdDQUFnRDs7Ozs7OztJQU9oRCx3Q0FBc0Q7Ozs7OztJQU10RCxtQ0FBNkI7Ozs7O0lBSzdCLHlDQUFnRDs7Ozs7O0lBTWhELGlDQUErQjs7Ozs7SUFLL0Isa0NBQWdDOzs7OztJQUtoQyw2Q0FBK0M7O0lBSy9DLCtCQUFnQzs7SUFFaEMsOENBQTJFOztJQUczRSxvQ0FBb0Q7O0lBRXBELDRDQUEwQzs7SUFFMUMsbUNBQWlDOztJQUVqQywrQ0FBbUM7O0lBRW5DLCtDQUFvQzs7SUFJcEMsaUNBQXNDOzs7OztJQUV0QyxtQ0FBMkI7Ozs7O0lBRTNCLG9DQUE0Qjs7Ozs7SUFHNUIsb0NBQWlEOzs7OztJQUVyQyxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsXHJcbiAgZm9yd2FyZFJlZiwgXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwRXZlbnRUeXBlLFxyXG4gIEh0dHBIZWFkZXJSZXNwb25zZSwgSHR0cFJlcXVlc3QsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRHJhZ1N0YXRlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9kcmFnLWRyb3AvZHJhZy1kcm9wLmRpcmVjdGl2ZSc7XHJcbi8vIGltcG9ydCB7IEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwL3NyYy9yZXNwb25zZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgeyBVcGxvYWQsIFVwbG9hZEZpbGUgfSBmcm9tICcuL3VwbG9hZC5tb2RlbCc7XHJcblxyXG5leHBvcnQgdHlwZSBSZXF1ZXN0R2VuZXJhdG9yID1cclxuICAoZmlsZTogRmlsZSkgPT4gSHR0cFJlcXVlc3Q8YW55PiB8IE9ic2VydmFibGU8SHR0cFJlcXVlc3Q8YW55Pj47XHJcbmV4cG9ydCB0eXBlIERlbGV0ZVJlcXVlc3RHZW5lcmF0b3IgPVxyXG4gICh1ZjogVXBsb2FkRmlsZSkgPT4gSHR0cFJlcXVlc3Q8YW55PiB8IE9ic2VydmFibGU8SHR0cFJlcXVlc3Q8YW55Pj47XHJcblxyXG5leHBvcnQgZW51bSBVcGxvYWRTdGF0dXMge1xyXG4gICAgSW5pdGlhbCxcclxuICAgIFVwbG9hZGluZyxcclxuICAgIERvbmUsXHJcbiAgICBFcnJvclxyXG4gIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWQge1xyXG4gICAgcHVibGljIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHVibGljIHByb2dyZXNzOiBudW1iZXIgPSAwLjA7XHJcbiAgICBwdWJsaWMgc3RhdHVzOiBVcGxvYWRTdGF0dXMgPSBVcGxvYWRTdGF0dXMuSW5pdGlhbDtcclxuICAgIHB1YmxpYyByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+O1xyXG4gICAgcHVibGljIGVycm9yPzogc3RyaW5nO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRGaWxlIHtcclxuICAgIHB1YmxpYyBmaWxlOiBGaWxlO1xyXG4gICAgcHVibGljIHVwbG9hZDogVXBsb2FkO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHRvQXJyYXkobGlzdCkge1xyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0KTtcclxufVxyXG5cclxuY29uc3QgVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVcGxvYWRDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgbmFtZXNwYWNlIFVwbG9hZFZhbGlkYXRvciB7XHJcbiAgZXhwb3J0IGZ1bmN0aW9uIFJlcXVpcmVkKGNvbnRyb2wpIHtcclxuICAgIGNvbnN0IGVycm9yID0ge1xyXG4gICAgICAncmVxdWlyZWQnOiAnQSBmaWxlIGlzIHJlcXVpcmVkLidcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbW9kZWw6IFVwbG9hZEZpbGVbXSA9IGNvbnRyb2wudmFsdWU7XHJcblxyXG4gICAgaWYgKCFtb2RlbCB8fCAhbW9kZWwubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhdExlYXN0T25lRG9uZSA9IG1vZGVsLnNvbWUoKHVmOiBVcGxvYWRGaWxlKSA9PiB7XHJcbiAgICAgIHJldHVybiB1Zi51cGxvYWQuc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuRG9uZTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghYXRMZWFzdE9uZURvbmUpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzeS11cGxvYWQnLFxyXG4gIHByb3ZpZGVyczogW1ZBTFVFX0FDQ0VTU09SXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi91cGxvYWQuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcmVxdWVzdCB0aGUgZ2V0cyBjYWxsZWQgYWZ0ZXIgYSBmaWxlIGhhcyBiZWVuIHNlbGVjdGVkIGZvciB1cGxvYWQuXHJcbiAgICogUmVwb3J0IHByb2dyZXNzIG11c3QgYmUgdHJ1ZSBpZiB5b3Ugd2FudCB0aGUgcHJvZ3Jlc3MgYmFyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRSZXF1ZXN0OiBSZXF1ZXN0R2VuZXJhdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcmVxdWVzdCB0aGF0IGdldHMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgY2xpY2sgdGhlICh4KS4gSWYgdGhlIHVwbG9hZFxyXG4gICAqIGlzIGluIHByb2dyZXNzLCB0aGUgdXBsb2FkIGlzIHNpbXBseSBjYW5jZWxlZC4gSWYgZGVsZXRlIGZhaWxzLCB0aGUgZmlsZVxyXG4gICAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCBhbmQgbm8gZXJyb3IgaXMgcHJlc2VudGVkIHRvIHRoZSB1c2VyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkZWxldGVSZXF1ZXN0OiBEZWxldGVSZXF1ZXN0R2VuZXJhdG9yO1xyXG5cclxuICAvKipcclxuICAgKiBNYXggbnVtYmVyIG9mIGZpbGVzIHRoYXQgY2FuIGJlIHVwbG9hZGVkLiBJZiBhIGZpbGUgaXMgaW4gdGhlIGVycm9yIHN0YXR1c1xyXG4gICAqIGl0IGRvZXMgbm90IGNvdW50LiAwIGZvciBpbmZpbml0ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhGaWxlcyA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwbG9hZHMgd2lsbCBub3Qgc3RhcnQgdW50aWwgdGhlIGhvc3QgY2FsbHMgY29tcG9uZW50LnN0YXJ0VXBsb2FkKClcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkRGVmZXJyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogIFwiYWNjZXB0XCIgY2FuIGJlIGFueSB2YWx1ZSB3aGljaCBpcyB2YWxpZCBmb3IgaW5wdXRbYWNjZXB0XVxyXG4gICAqICg8aW5wdXQgYWNjZXB0PVwiZmlsZV9leHRlbnNpb258YXVkaW8vKnx2aWRlby8qfGltYWdlLyp8bWVkaWFfdHlwZVwiPilcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgYWNjZXB0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgYW4gZXJyb3IgaWYgdGhlIGZpbGUgZG9lcyBtYXRjaCB0aGUgcmVndWxhciBleHByZXNzaW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHBhdHRlcm46IFJlZ0V4cDtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgbWF4RmlsZVNpemVJbkJ5dGVzIGlzIGV4Y2VlZGVkLCB0aGVuIGRpc3BsYXkgYSB3YXJuaW5nXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIG1heEZpbGVTaXplSW5CeXRlczogbnVtYmVyID0gMDtcclxuXHJcbiAgLypcclxuICAgKiBJbnB1dCA1MDggaWRlbnRpZmllclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBuYW1lID0gJ3VwbG9hZCc7XHJcblxyXG4gIEBPdXRwdXQoKSBvbk1vZGVsRmlsZXNDaGFuZ2VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuXHJcbiAgcHVibGljIGRyYWdTdGF0ZTogRHJhZ1N0YXRlID0gRHJhZ1N0YXRlLk5vdERyYWdnaW5nO1xyXG5cclxuICBwdWJsaWMgc2hvd01heEZpbGVzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBpc0FjY2VwdGFibGVGaWxlVHlwZSA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBzaG91bGRTaG93RHJvcFRhcmdldCA9IGZhbHNlO1xyXG5cclxuICAvKiBUaGUgbGlzdCBvZiB2aXNpYmxlIGZpbGVzLiBEb2VzIG5vdCBpbmNsdWRlIGRlbGV0ZWRcclxuICBmaWxlcy4gRG9lcyBpbmNsdWRlIGZpbGVzIHdpdGggZXJyb3JzICovXHJcbiAgcHVibGljIF9tb2RlbDogQXJyYXk8VXBsb2FkRmlsZT4gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNoYW5nZTogRnVuY3Rpb247XHJcblxyXG4gIHByaXZhdGUgb25Ub3VjaGVkOiBGdW5jdGlvbjtcclxuXHJcbiAgLyogVGhlIGhpZGRlbiBmaWxlIGlucHV0IGRvbSBlbGVtZW50ICovXHJcbiAgQFZpZXdDaGlsZCgnZmlsZScpIHByaXZhdGUgZmlsZUlucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgfVxyXG5cclxuICBvbkRyYWdTdGF0ZUNoYW5nZShkcmFnU3RhdGUpIHtcclxuICAgIGRyYWdTdGF0ZSAhPT0gRHJhZ1N0YXRlLk5vdERyYWdnaW5nID9cclxuICAgICAgICB0aGlzLnNob3VsZFNob3dEcm9wVGFyZ2V0ID0gdHJ1ZSA6XHJcbiAgICAgICAgdGhpcy5zaG91bGRTaG93RHJvcFRhcmdldCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm4pIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudWxsfHVuZGVmaW5lZHxhbnkpIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fbW9kZWwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX21vZGVsID0gW107XHJcbiAgICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcclxuICAgIH1cclxuICB9XHJcbiAgb25GaWxlc0NoYW5nZShldil7XHJcbiAgICB0aGlzLm9uTW9kZWxGaWxlc0NoYW5nZXMuZW1pdChldik7XHJcbiAvLyBvbkZpbGVzQ2hhbmdlKGZpbGVzOiBGaWxlTGlzdCkge1xyXG4gICBjb25zdCBmaWxlcyA9IGV2LnRhcmdldC5maWxlc1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuc2hvd01heEZpbGVzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IHRvIGFycmF5IGZvciB0aGUgY29udmllbmNlIG9mIHRoZSBzdGFuZGFyZCBhcnJheSBmdW5jdGlvbnNcclxuICAgIGNvbnN0IGFzQXJyYXkgPSB0b0FycmF5KGZpbGVzKTtcclxuICAgIGNvbnN0IHdvdWxkQmVUb3RhbCA9IGFzQXJyYXkubGVuZ3RoICsgdGhpcy5fbW9kZWwubGVuZ3RoO1xyXG4gICAgaWYgKHRoaXMubWF4RmlsZXMgPiAwICYmIHdvdWxkQmVUb3RhbCA+IHRoaXMubWF4RmlsZXMpIHtcclxuICAgICAgdGhpcy5zaG93TWF4RmlsZXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NoZWNrQWNjZXB0YWJsZUZpbGVUeXBlKGFzQXJyYXkpO1xyXG5cclxuICAgIGlmICghdGhpcy5pc0FjY2VwdGFibGVGaWxlVHlwZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdWZzID0gYXNBcnJheS5tYXAoZiA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmlsZTogZixcclxuICAgICAgICB1cGxvYWQ6IG5ldyBVcGxvYWQoKVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52YWxpZGF0ZUZpbGVzKHVmcyk7XHJcblxyXG4gICAgLy8gY29uY2F0IG9sZCBpdGVtcyBhbmQgbmV3IGl0ZW1zXHJcbiAgICB0aGlzLl9tb2RlbCA9IFsuLi50aGlzLl9tb2RlbCwgLi4udWZzXTtcclxuXHJcbiAgICBpZiAoIXRoaXMudXBsb2FkRGVmZXJyZWQpIHtcclxuICAgICAgdGhpcy5kb1VwbG9hZCh1ZnMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVwbG9hZCgpIHtcclxuICAgIHRoaXMuZG9VcGxvYWQodGhpcy5fbW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVGaWxlcyh1ZnM6IFVwbG9hZEZpbGVbXSkge1xyXG4gICAgdWZzLmZvckVhY2godWYgPT4ge1xyXG4gICAgICBjb25zdCB7IGZpbGUgfSA9IHVmO1xyXG4gICAgICBpZiAodGhpcy5tYXhGaWxlU2l6ZUluQnl0ZXMgJiYgZmlsZS5zaXplID4gdGhpcy5tYXhGaWxlU2l6ZUluQnl0ZXMpIHtcclxuICAgICAgICB1Zi51cGxvYWQuc3RhdHVzID0gVXBsb2FkU3RhdHVzLkVycm9yO1xyXG4gICAgICAgIHVmLnVwbG9hZC5lcnJvciA9ICdGaWxlIHRvbyBsYXJnZSc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGF0dGVybiAmJiAhdGhpcy5wYXR0ZXJuLnRlc3QoZmlsZS5uYW1lKSkge1xyXG4gICAgICAgIHVmLnVwbG9hZC5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuRXJyb3I7XHJcbiAgICAgICAgdWYudXBsb2FkLmVycm9yID0gJ0ZpbGUgdHlwZSBub3Qgc3VwcG9ydGVkJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb1VwbG9hZCh1ZnM6IFVwbG9hZEZpbGVbXSkge1xyXG4gICAgdWZzLmZvckVhY2godWYgPT4ge1xyXG4gICAgICBjb25zdCB7IHVwbG9hZCB9ID0gdWY7XHJcblxyXG4gICAgICBpZiAodXBsb2FkLnN0YXR1cyAhPT0gVXBsb2FkU3RhdHVzLkluaXRpYWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVwbG9hZC5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuVXBsb2FkaW5nO1xyXG4gICAgICBjb25zdCBodHRwRXZlbnQkID0gdGhpcy5fZ2V0SHR0cEV2ZW50U3RlYW0odWYpO1xyXG4gICAgICB1cGxvYWQuc3Vic2NyaXB0aW9uID0gaHR0cEV2ZW50JC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIHVwbG9hZC5wcm9ncmVzcyA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBIZWFkZXJSZXNwb25zZSkge1xyXG4gICAgICAgICAgICB1cGxvYWQuc3RhdHVzID0gVXBsb2FkU3RhdHVzLkRvbmU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdXBsb2FkLnN0YXR1cyA9IFVwbG9hZFN0YXR1cy5FcnJvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChldmVudC5vayA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdXBsb2FkLmVycm9yID0gJ1VwbG9hZCBmYWlsZWQnO1xyXG4gICAgICAgICAgICB1cGxvYWQuc3RhdHVzID0gVXBsb2FkU3RhdHVzLkVycm9yO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3VwbG9hZCBlcnJvcicsIGVycm9yKTtcclxuICAgICAgICAgIGxldCB0b0pzb246IGFueSA9IHt9O1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdG9Kc29uID0gSlNPTi5wYXJzZShlcnJvcik7XHJcbiAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVwbG9hZC5lcnJvciA9IHRvSnNvbi5zdGF0dXNUZXh0IHx8IHRvSnNvbi5tZXNzYWdlIHx8ICdVcGxvYWQgZmFpbGVkJztcclxuICAgICAgICAgIHVwbG9hZC5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuRXJyb3I7XHJcbiAgICAgICAgICB0aGlzLmVtaXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHVwbG9hZC5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuRG9uZTtcclxuICAgICAgICAgIHRoaXMuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25DbG9zZUNsaWNrKHVmOiBVcGxvYWRGaWxlKSB7XHJcbiAgICBjb25zdCB7IHVwbG9hZCB9ID0gdWY7XHJcbiAgICBpZiAodXBsb2FkLnN1YnNjcmlwdGlvbiAmJiB1cGxvYWQuc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuVXBsb2FkaW5nKSB7XHJcbiAgICAgIHVwbG9hZC5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5kZWxldGVSZXF1ZXN0ICYmIHVwbG9hZC5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5Eb25lKSB7XHJcbiAgICAgIHRoaXMuZGVsZXRlRmlsZSh1Zik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUZpbGVGcm9tTGlzdCh1Zik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVGaWxlKHVmOiBVcGxvYWRGaWxlKSB7XHJcbiAgICBjb25zdCBkZWxldGUkID0gdGhpcy5fZ2V0RGVsZXRlUmVxdWVzdEZvckZpbGUodWYpO1xyXG4gICAgLy8gZXJyb3JzIGFyZSBpbnRlbnRpb25hbGx5IGlnbm9yZWQuIEluIHRoZSBjYXNlIG9mIGFuXHJcbiAgICAvLyBlcnJvciwgc2hvdyBpdCBpbiB0aGUgY29uc29sZSwgYnV0IGRvbid0IGFubm95IHRoZSB1c2VyLlxyXG4gICAgLy8gVGhlcmUgbWF5IGJlIGFuIGV4dHJhIGZpbGUgb24gdGhlIHNlcnZlciwgYnV0IHRoYXQnc1xyXG4gICAgLy8gbm90IHRoZSB1c2VyJ3MgcHJvYmxlbVxyXG4gICAgZGVsZXRlJC5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpbGVGcm9tTGlzdCh1ZjogVXBsb2FkRmlsZSkge1xyXG4gICAgdGhpcy5fbW9kZWwgPSB0aGlzLl9tb2RlbC5maWx0ZXIoX3VmID0+IF91ZiAhPT0gdWYpO1xyXG4gICAgaWYgKCF0aGlzLl9tb2RlbC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fY2xlYXJJbnB1dCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBhbnlGaWxlcygpIHtcclxuICAgIHJldHVybiAhISh0aGlzLl9tb2RlbCAmJiB0aGlzLl9tb2RlbC5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkU2hvd1Byb2dyZXNzQmFyKHVmOiBVcGxvYWRGaWxlKSB7XHJcbiAgICByZXR1cm4gdWYudXBsb2FkLnN0YXR1cyA9PT0gVXBsb2FkU3RhdHVzLlVwbG9hZGluZztcclxuICB9XHJcblxyXG4gIHNob3VsZFNob3dFcnJvcih1ZjogVXBsb2FkRmlsZSkge1xyXG4gICAgcmV0dXJuIHVmLnVwbG9hZC5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5FcnJvcjtcclxuICB9XHJcblxyXG4gIHNob3VsZEFsbG93TW9yZUZpbGVzKCkge1xyXG4gICAgaWYgKCF0aGlzLm1heEZpbGVzKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX251bUZpbGVzVmFsaWQoKSA8IHRoaXMubWF4RmlsZXM7XHJcbiAgfVxyXG5cclxuICBlbWl0KCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLl9tb2RlbCk7XHJcbiAgfVxyXG5cclxuICBtYXhGaWxlc0Vycm9yTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiBgVGhlIG1heGltdW0gbnVtYmVyIG9mIGZpbGVzIGlzICR7dGhpcy5tYXhGaWxlc31gO1xyXG4gIH1cclxuXHJcbiAgX251bUZpbGVzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9kZWxcclxuICAgICAgLmZpbHRlcih1ZiA9PiB1Zi51cGxvYWQuc3RhdHVzICE9PSBVcGxvYWRTdGF0dXMuRXJyb3IpXHJcbiAgICAgIC5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBfZ2V0RGVsZXRlUmVxdWVzdEZvckZpbGUodWY6IFVwbG9hZEZpbGUpIHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmRlbGV0ZVJlcXVlc3QodWYpO1xyXG5cclxuICAgIGlmIChyZXF1ZXN0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICByZXR1cm4gcmVxdWVzdC5waXBlKHN3aXRjaE1hcChyZXEgPT4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3QocmVxKSkpO1xyXG4gICAgfSBlbHNlIGlmIChyZXF1ZXN0IGluc3RhbmNlb2YgSHR0cFJlcXVlc3QpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5yZXF1ZXN0KHJlcXVlc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IG11c3QgYmUgYW4gSHR0cFJlcXVlc3Qgb3IgT2JzZXJ2ZXJhYmxlPEh0dHBSZXF1ZXN0PicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2dldEh0dHBFdmVudFN0ZWFtKHVmOiBVcGxvYWRGaWxlKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4gIHtcclxuICAgIGNvbnN0IHsgZmlsZSwgdXBsb2FkIH0gPSB1ZjtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLnVwbG9hZFJlcXVlc3QoZmlsZSk7XHJcblxyXG4gICAgaWYgKHJlcXVlc3QgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgIHJldHVybiByZXF1ZXN0LnBpcGUoc3dpdGNoTWFwKChyZXE6IEh0dHBSZXF1ZXN0PGFueT4pID0+IHtcclxuICAgICAgICB1cGxvYWQucmVxdWVzdCA9IHJlcTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3QocmVxKTtcclxuICAgICAgfSkpO1xyXG4gICAgfSBlbHNlIGlmIChyZXF1ZXN0IGluc3RhbmNlb2YgSHR0cFJlcXVlc3QpIHtcclxuICAgICAgdXBsb2FkLnJlcXVlc3QgPSByZXF1ZXN0O1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3QocmVxdWVzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgbXVzdCBiZSBhbiBIdHRwUmVxdWVzdCBvciBPYnNlcnZlcmFibGU8SHR0cFJlcXVlc3Q+Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2xlYXJJbnB1dCgpIHtcclxuICAgIC8vIGNsZWFyIHRoZSBpbnB1dCdzIGludGVybmFsIHZhbHVlLCBvciBpdCB3aWxsIG5vdFxyXG4gICAgLy8gZW1pdCB0aGUgY2hhbmdlIGV2ZW50IGlmIHdlIHNlbGVjdCBhIGZpbGUsIGRlc2VsZWN0IHRoYXQgZmlsZSxcclxuICAgIC8vIGFuZCBzZWxlY3QgdGhlIHNhbWUgZmlsZSBhZ2FpblxyXG4gICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrQWNjZXB0YWJsZUZpbGVUeXBlKHVwbG9hZEZpbGVzKSB7XHJcbiAgICAvLyByZXN0cmljdCB0aGUgZmlsZSB0eXBlXHJcbiAgICAvLyAoPGlucHV0IGFjY2VwdD1cImZpbGVfZXh0ZW5zaW9ufGF1ZGlvLyp8dmlkZW8vKnxpbWFnZS8qfG1lZGlhX3R5cGVcIj4pXHJcbiAgICB1cGxvYWRGaWxlcy5mb3JFYWNoKHVmID0+IHtcclxuICAgICAgaWYgKHRoaXMuYWNjZXB0ICYmICF1Zi50eXBlLnN0YXJ0c1dpdGgodGhpcy5hY2NlcHQuc3BsaXQoJy8nKVswXSlcclxuICAgICAgICAmJiB1Zi5uYW1lLmluZGV4T2YodGhpcy5hY2NlcHQpIDwgMCkge1xyXG4gICAgICAgIHRoaXMuaXNBY2NlcHRhYmxlRmlsZVR5cGUgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzQWNjZXB0YWJsZUZpbGVUeXBlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==