/**
 * @fileoverview added by tsickle
 * Generated from: lib/upload/upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { Component, ElementRef, Input, ViewChild, forwardRef, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpRequest } from '@angular/common/http';
import { DragState } from '../directives/drag-drop/drag-drop.directive';
// import { HttpEvent } from '@angular/common/http/src/response';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
/** @enum {number} */
var UploadStatus = {
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
var Upload = /** @class */ (function () {
    function Upload() {
        this.progress = 0.0;
        this.status = UploadStatus.Initial;
    }
    return Upload;
}());
export { Upload };
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
var UploadFile = /** @class */ (function () {
    function UploadFile() {
    }
    return UploadFile;
}());
export { UploadFile };
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
var VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return UploadComponent; })),
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
        var error = {
            'required': 'A file is required.'
        };
        /** @type {?} */
        var model = control.value;
        if (!model || !model.length) {
            return error;
        }
        /** @type {?} */
        var atLeastOneDone = model.some((/**
         * @param {?} uf
         * @return {?}
         */
        function (uf) {
            return uf.upload.status === UploadStatus.Done;
        }));
        if (!atLeastOneDone) {
            return error;
        }
    }
    UploadValidator.Required = Required;
})(UploadValidator || (UploadValidator = {}));
var UploadComponent = /** @class */ (function () {
    function UploadComponent(httpClient) {
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
    UploadComponent.prototype.onDragStateChange = /**
     * @param {?} dragState
     * @return {?}
     */
    function (dragState) {
        dragState !== DragState.NotDragging ?
            this.shouldShowDropTarget = true :
            this.shouldShowDropTarget = false;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UploadComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UploadComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    UploadComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UploadComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && value.length) {
            this._model = value;
        }
        else {
            this._model = [];
            this._clearInput();
        }
    };
    /**
     * @param {?} ev
     * @return {?}
     */
    UploadComponent.prototype.onFilesChange = /**
     * @param {?} ev
     * @return {?}
     */
    function (ev) {
        this.onModelFilesChanges.emit(ev);
        // onFilesChange(files: FileList) {
        /** @type {?} */
        var files = ev.target.files;
        this.onTouched();
        this.showMaxFilesError = false;
        // convert to array for the convience of the standard array functions
        /** @type {?} */
        var asArray = toArray(files);
        /** @type {?} */
        var wouldBeTotal = asArray.length + this._model.length;
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
        var ufs = asArray.map((/**
         * @param {?} f
         * @return {?}
         */
        function (f) {
            return {
                file: f,
                upload: new Upload()
            };
        }));
        this.validateFiles(ufs);
        // concat old items and new items
        this._model = tslib_1.__spread(this._model, ufs);
        if (!this.uploadDeferred) {
            this.doUpload(ufs);
        }
        this.emit();
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype.startUpload = /**
     * @return {?}
     */
    function () {
        this.doUpload(this._model);
    };
    /**
     * @param {?} ufs
     * @return {?}
     */
    UploadComponent.prototype.validateFiles = /**
     * @param {?} ufs
     * @return {?}
     */
    function (ufs) {
        var _this = this;
        ufs.forEach((/**
         * @param {?} uf
         * @return {?}
         */
        function (uf) {
            var file = uf.file;
            if (_this.maxFileSizeInBytes && file.size > _this.maxFileSizeInBytes) {
                uf.upload.status = UploadStatus.Error;
                uf.upload.error = 'File too large';
            }
            if (_this.pattern && !_this.pattern.test(file.name)) {
                uf.upload.status = UploadStatus.Error;
                uf.upload.error = 'File type not supported';
            }
        }));
    };
    /**
     * @param {?} ufs
     * @return {?}
     */
    UploadComponent.prototype.doUpload = /**
     * @param {?} ufs
     * @return {?}
     */
    function (ufs) {
        var _this = this;
        ufs.forEach((/**
         * @param {?} uf
         * @return {?}
         */
        function (uf) {
            var upload = uf.upload;
            if (upload.status !== UploadStatus.Initial) {
                return;
            }
            upload.status = UploadStatus.Uploading;
            /** @type {?} */
            var httpEvent$ = _this._getHttpEventSteam(uf);
            upload.subscription = httpEvent$.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
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
                    _this.emit();
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                console.error('upload error', error);
                /** @type {?} */
                var toJson = {};
                try {
                    toJson = JSON.parse(error);
                }
                catch (ex) {
                }
                upload.error = toJson.statusText || toJson.message || 'Upload failed';
                upload.status = UploadStatus.Error;
                _this.emit();
            }), (/**
             * @return {?}
             */
            function () {
                upload.status = UploadStatus.Done;
                _this.emit();
            }));
        }));
    };
    /**
     * @param {?} uf
     * @return {?}
     */
    UploadComponent.prototype.onCloseClick = /**
     * @param {?} uf
     * @return {?}
     */
    function (uf) {
        var upload = uf.upload;
        if (upload.subscription && upload.status === UploadStatus.Uploading) {
            upload.subscription.unsubscribe();
        }
        else if (this.deleteRequest && upload.status === UploadStatus.Done) {
            this.deleteFile(uf);
        }
        this.removeFileFromList(uf);
    };
    /**
     * @param {?} uf
     * @return {?}
     */
    UploadComponent.prototype.deleteFile = /**
     * @param {?} uf
     * @return {?}
     */
    function (uf) {
        /** @type {?} */
        var delete$ = this._getDeleteRequestForFile(uf);
        // errors are intentionally ignored. In the case of an
        // error, show it in the console, but don't annoy the user.
        // There may be an extra file on the server, but that's
        // not the user's problem
        delete$.subscribe();
    };
    /**
     * @param {?} uf
     * @return {?}
     */
    UploadComponent.prototype.removeFileFromList = /**
     * @param {?} uf
     * @return {?}
     */
    function (uf) {
        this._model = this._model.filter((/**
         * @param {?} _uf
         * @return {?}
         */
        function (_uf) { return _uf !== uf; }));
        if (!this._model.length) {
            this._clearInput();
        }
        this.emit();
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype.anyFiles = /**
     * @return {?}
     */
    function () {
        return !!(this._model && this._model.length);
    };
    /**
     * @param {?} uf
     * @return {?}
     */
    UploadComponent.prototype.shouldShowProgressBar = /**
     * @param {?} uf
     * @return {?}
     */
    function (uf) {
        return uf.upload.status === UploadStatus.Uploading;
    };
    /**
     * @param {?} uf
     * @return {?}
     */
    UploadComponent.prototype.shouldShowError = /**
     * @param {?} uf
     * @return {?}
     */
    function (uf) {
        return uf.upload.status === UploadStatus.Error;
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype.shouldAllowMoreFiles = /**
     * @return {?}
     */
    function () {
        if (!this.maxFiles) {
            return true;
        }
        return this._numFilesValid() < this.maxFiles;
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype.emit = /**
     * @return {?}
     */
    function () {
        this.onChange(this._model);
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype.maxFilesErrorMessage = /**
     * @return {?}
     */
    function () {
        return "The maximum number of files is " + this.maxFiles;
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype._numFilesValid = /**
     * @return {?}
     */
    function () {
        return this._model
            .filter((/**
         * @param {?} uf
         * @return {?}
         */
        function (uf) { return uf.upload.status !== UploadStatus.Error; }))
            .length;
    };
    /**
     * @param {?} uf
     * @return {?}
     */
    UploadComponent.prototype._getDeleteRequestForFile = /**
     * @param {?} uf
     * @return {?}
     */
    function (uf) {
        var _this = this;
        /** @type {?} */
        var request = this.deleteRequest(uf);
        if (request instanceof Observable) {
            return request.pipe(switchMap((/**
             * @param {?} req
             * @return {?}
             */
            function (req) { return _this.httpClient.request(req); })));
        }
        else if (request instanceof HttpRequest) {
            return this.httpClient.request(request);
        }
        else {
            throw new Error('Request must be an HttpRequest or Observerable<HttpRequest>');
        }
    };
    /**
     * @param {?} uf
     * @return {?}
     */
    UploadComponent.prototype._getHttpEventSteam = /**
     * @param {?} uf
     * @return {?}
     */
    function (uf) {
        var _this = this;
        var file = uf.file, upload = uf.upload;
        /** @type {?} */
        var request = this.uploadRequest(file);
        if (request instanceof Observable) {
            return request.pipe(switchMap((/**
             * @param {?} req
             * @return {?}
             */
            function (req) {
                upload.request = req;
                return _this.httpClient.request(req);
            })));
        }
        else if (request instanceof HttpRequest) {
            upload.request = request;
            return this.httpClient.request(request);
        }
        else {
            throw new Error('Request must be an HttpRequest or Observerable<HttpRequest>');
        }
    };
    /**
     * @return {?}
     */
    UploadComponent.prototype._clearInput = /**
     * @return {?}
     */
    function () {
        // clear the input's internal value, or it will not
        // emit the change event if we select a file, deselect that file,
        // and select the same file again
        this.fileInput.nativeElement.value = '';
    };
    /**
     * @param {?} uploadFiles
     * @return {?}
     */
    UploadComponent.prototype._checkAcceptableFileType = /**
     * @param {?} uploadFiles
     * @return {?}
     */
    function (uploadFiles) {
        var _this = this;
        // restrict the file type
        // (<input accept="file_extension|audio/*|video/*|image/*|media_type">)
        uploadFiles.forEach((/**
         * @param {?} uf
         * @return {?}
         */
        function (uf) {
            if (_this.accept && !uf.type.startsWith(_this.accept.split('/')[0])
                && uf.name.indexOf(_this.accept) < 0) {
                _this.isAcceptableFileType = false;
            }
            else {
                _this.isAcceptableFileType = true;
            }
        }));
    };
    UploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-upload',
                    providers: [VALUE_ACCESSOR],
                    template: "<div class=\"sy-upload\">\r\n    <div class=\"file-container\" syDragDrop [disabled]=\"disabled\" (dropEvent)=\"onFilesChange($event)\" [dragState]=\"dragState\" (dragStateChange)=\"onDragStateChange($event)\" [ngClass]=\" { 'disabled': disabled, 'drag-border': shouldShowDropTarget }\" [ngStyle]=\"{'pointer-events': disabled ? 'none' : 'initial'}\">\r\n        <div class=\"file-container-no-drag\" *ngIf=\"!shouldShowDropTarget\">\r\n            <div class=\"text-center upload-cloud\" *ngIf=\"!anyFiles()\">\r\n                <fa-icon [icon]=\"['fas', 'cloud-upload-alt']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;Drag and drop files here, or<a (click)=\"file.click()\">&nbsp;browse</a>\r\n            </div>\r\n            <div *ngFor=\"let uf of _model\" class=\"file-item\">\r\n                <div class=\"file-row\">\r\n                    <div class=\"file-name\">{{ uf.file.name }}</div>\r\n                    <div class=\"file-size\">{{ uf.file.size | filesize }}</div>\r\n                    <div class=\"file-delete\"><span class=\"icon close fa fa-times-circle\" (click)=\"onCloseClick(uf)\"></span></div>\r\n                </div>\r\n                <!-- <div class=\"file-progress\" *ngIf=\"shouldShowProgressBar(uf)\">\r\n                    <sy-progress-bar [value]=\"uf.upload.progress\"></sy-progress-bar>\r\n                </div> -->\r\n                <!-- <div class=\"file-error\" *ngIf=\"shouldShowError(uf)\">Error: {{uf.upload.error}}</div> -->\r\n            </div>\r\n            <div class=\"text-center\" *ngIf=\"anyFiles() && shouldAllowMoreFiles()\">\r\n                <fa-icon [icon]=\"['fas', 'cloud-upload-alt']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;Drag and drop files here, or<a (click)=\"file.click()\">&nbsp;browse</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"file-container-dragging text-center\" *ngIf=\"shouldShowDropTarget\">\r\n            Drop Files Here\r\n            <p class=\"text-center\"><span class=\"fa fa-cloud-upload\"></span></p>\r\n        </div>\r\n        <div *ngIf=\"showMaxFilesError\" class=\"file-max-error\">\r\n            <fa-icon [icon]=\"['fas', 'exclamation-triangle']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;{{maxFilesErrorMessage()}}\r\n        </div>\r\n        <div *ngIf=\"!isAcceptableFileType && !shouldShowDropTarget\" class=\"file-max-error\">\r\n            <span> <fa-icon [icon]=\"['fas', 'exclamation-triangle']\" size=\"2x\"></fa-icon>&nbsp;&nbsp; Please select {{this.accept}} type of file.</span>\r\n        </div>\r\n\r\n        <!-- Hidden input to trigger the browser file selector -->\r\n        <input type=\"file\" #file [attr.id]=\"name\" [attr.accept]=\"accept\" ngModel class=\"hide\" (change)=\"onFilesChange($event)\" [attr.multiple]=\"maxFiles === 0 || maxFiles > 1 ? 'multiple' : null\">\r\n    </div>\r\n</div>",
                    styles: [".sy-upload .icon.close{cursor:pointer;width:2rem;min-width:2rem;font-size:2rem;min-height:2rem;line-height:2rem}.sy-upload .hide{display:none}.sy-upload .disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.sy-upload .file-container{max-width:46rem;border:1px solid #4f4f4f;padding:1rem}.sy-upload .upload-cloud{margin:3rem 0}.sy-upload .text-center a{color:#4bc1d2;font-weight:700;text-decoration:underline}.sy-upload .drag-border{border:3px dashed #9c9c9c;border-radius:1rem}.sy-upload .file-container-dragging{font-size:2.2rem;margin:1.5rem 0;color:#9c9c9c;pointer-events:none}.sy-upload .file-container-dragging *{pointer-events:none}.sy-upload .file-error{color:red}.sy-upload .file-max-error{background-color:#fffaf3;padding:1rem}.sy-upload .file-item{margin-bottom:.7em}.sy-upload .file-row{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.sy-upload .file-row>:not(:first-child){padding-left:.5rem}.sy-upload .file-row .file-name{-webkit-box-flex:1;flex-grow:1;text-align:left;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.sy-upload .file-row .file-size{white-space:nowrap}.sy-upload .file-row .file-progress{width:8rem}.sy-upload .file-row .file-delete{min-width:2rem;text-align:center}.text-center{margin-top:0!important}.text-center a:hover{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    UploadComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
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
    return UploadComponent;
}());
export { UploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUM5QyxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFDbkQsa0JBQWtCLEVBQUUsV0FBVyxFQUFhLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztBQUV4RSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQVEzQyxJQUFZLFlBQVk7SUFDcEIsT0FBTyxHQUFBO0lBQ1AsU0FBUyxHQUFBO0lBQ1QsSUFBSSxHQUFBO0lBQ0osS0FBSyxHQUFBO0VBQ047Ozs7OztBQUVIO0lBQUE7UUFFVyxhQUFRLEdBQVcsR0FBRyxDQUFDO1FBQ3ZCLFdBQU0sR0FBaUIsWUFBWSxDQUFDLE9BQU8sQ0FBQztJQUdyRCxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFOSCxJQU1HOzs7O0lBTEMsOEJBQWtDOztJQUNsQywwQkFBOEI7O0lBQzlCLHdCQUFtRDs7SUFDbkQseUJBQWlDOztJQUNqQyx1QkFBc0I7O0FBRzFCO0lBQUE7SUFHRSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBSEgsSUFHRzs7OztJQUZDLDBCQUFrQjs7SUFDbEIsNEJBQXNCOzs7Ozs7QUFHMUIsU0FBUyxPQUFPLENBQUMsSUFBSTtJ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Qzs7SUFFbkMsK0NBQW9DOztJQUlwQyxpQ0FBc0M7Ozs7O0lBRXRDLG1DQUEyQjs7Ozs7SUFFM0Isb0NBQTRCOzs7OztJQUc1QixvQ0FBaUQ7Ozs7O0lBRXJDLHFDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCxcclxuICBmb3J3YXJkUmVmLCBcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBFdmVudFR5cGUsXHJcbiAgSHR0cEhlYWRlclJlc3BvbnNlLCBIdHRwUmVxdWVzdCwgSHR0cEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBEcmFnU3RhdGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2RyYWctZHJvcC9kcmFnLWRyb3AuZGlyZWN0aXZlJztcclxuLy8gaW1wb3J0IHsgSHR0cEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAvc3JjL3Jlc3BvbnNlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vIGltcG9ydCB7IFVwbG9hZCwgVXBsb2FkRmlsZSB9IGZyb20gJy4vdXBsb2FkLm1vZGVsJztcclxuXHJcbmV4cG9ydCB0eXBlIFJlcXVlc3RHZW5lcmF0b3IgPVxyXG4gIChmaWxlOiBGaWxlKSA9PiBIdHRwUmVxdWVzdDxhbnk+IHwgT2JzZXJ2YWJsZTxIdHRwUmVxdWVzdDxhbnk+PjtcclxuZXhwb3J0IHR5cGUgRGVsZXRlUmVxdWVzdEdlbmVyYXRvciA9XHJcbiAgKHVmOiBVcGxvYWRGaWxlKSA9PiBIdHRwUmVxdWVzdDxhbnk+IHwgT2JzZXJ2YWJsZTxIdHRwUmVxdWVzdDxhbnk+PjtcclxuXHJcbmV4cG9ydCBlbnVtIFVwbG9hZFN0YXR1cyB7XHJcbiAgICBJbml0aWFsLFxyXG4gICAgVXBsb2FkaW5nLFxyXG4gICAgRG9uZSxcclxuICAgIEVycm9yXHJcbiAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZCB7XHJcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3M6IG51bWJlciA9IDAuMDtcclxuICAgIHB1YmxpYyBzdGF0dXM6IFVwbG9hZFN0YXR1cyA9IFVwbG9hZFN0YXR1cy5Jbml0aWFsO1xyXG4gICAgcHVibGljIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT47XHJcbiAgICBwdWJsaWMgZXJyb3I/OiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGUge1xyXG4gICAgcHVibGljIGZpbGU6IEZpbGU7XHJcbiAgICBwdWJsaWMgdXBsb2FkOiBVcGxvYWQ7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gdG9BcnJheShsaXN0KSB7XHJcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QpO1xyXG59XHJcblxyXG5jb25zdCBWQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFVwbG9hZENvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgVXBsb2FkVmFsaWRhdG9yIHtcclxuICBleHBvcnQgZnVuY3Rpb24gUmVxdWlyZWQoY29udHJvbCkge1xyXG4gICAgY29uc3QgZXJyb3IgPSB7XHJcbiAgICAgICdyZXF1aXJlZCc6ICdBIGZpbGUgaXMgcmVxdWlyZWQuJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtb2RlbDogVXBsb2FkRmlsZVtdID0gY29udHJvbC52YWx1ZTtcclxuXHJcbiAgICBpZiAoIW1vZGVsIHx8ICFtb2RlbC5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGF0TGVhc3RPbmVEb25lID0gbW9kZWwuc29tZSgodWY6IFVwbG9hZEZpbGUpID0+IHtcclxuICAgICAgcmV0dXJuIHVmLnVwbG9hZC5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5Eb25lO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFhdExlYXN0T25lRG9uZSkge1xyXG4gICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N5LXVwbG9hZCcsXHJcbiAgcHJvdmlkZXJzOiBbVkFMVUVfQUNDRVNTT1JdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi91cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3VwbG9hZC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByZXF1ZXN0IHRoZSBnZXRzIGNhbGxlZCBhZnRlciBhIGZpbGUgaGFzIGJlZW4gc2VsZWN0ZWQgZm9yIHVwbG9hZC5cclxuICAgKiBSZXBvcnQgcHJvZ3Jlc3MgbXVzdCBiZSB0cnVlIGlmIHlvdSB3YW50IHRoZSBwcm9ncmVzcyBiYXIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZFJlcXVlc3Q6IFJlcXVlc3RHZW5lcmF0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByZXF1ZXN0IHRoYXQgZ2V0cyBjYWxsZWQgd2hlbiB0aGUgdXNlciBjbGljayB0aGUgKHgpLiBJZiB0aGUgdXBsb2FkXHJcbiAgICogaXMgaW4gcHJvZ3Jlc3MsIHRoZSB1cGxvYWQgaXMgc2ltcGx5IGNhbmNlbGVkLiBJZiBkZWxldGUgZmFpbHMsIHRoZSBmaWxlXHJcbiAgICogaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0IGFuZCBubyBlcnJvciBpcyBwcmVzZW50ZWQgdG8gdGhlIHVzZXIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIGRlbGV0ZVJlcXVlc3Q6IERlbGV0ZVJlcXVlc3RHZW5lcmF0b3I7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1heCBudW1iZXIgb2YgZmlsZXMgdGhhdCBjYW4gYmUgdXBsb2FkZWQuIElmIGEgZmlsZSBpcyBpbiB0aGUgZXJyb3Igc3RhdHVzXHJcbiAgICogaXQgZG9lcyBub3QgY291bnQuIDAgZm9yIGluZmluaXRlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIG1heEZpbGVzID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVXBsb2FkcyB3aWxsIG5vdCBzdGFydCB1bnRpbCB0aGUgaG9zdCBjYWxscyBjb21wb25lbnQuc3RhcnRVcGxvYWQoKVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWREZWZlcnJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiAgXCJhY2NlcHRcIiBjYW4gYmUgYW55IHZhbHVlIHdoaWNoIGlzIHZhbGlkIGZvciBpbnB1dFthY2NlcHRdXHJcbiAgICogKDxpbnB1dCBhY2NlcHQ9XCJmaWxlX2V4dGVuc2lvbnxhdWRpby8qfHZpZGVvLyp8aW1hZ2UvKnxtZWRpYV90eXBlXCI+KVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBhY2NlcHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBhbiBlcnJvciBpZiB0aGUgZmlsZSBkb2VzIG1hdGNoIHRoZSByZWd1bGFyIGV4cHJlc3Npb25cclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgcGF0dGVybjogUmVnRXhwO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBtYXhGaWxlU2l6ZUluQnl0ZXMgaXMgZXhjZWVkZWQsIHRoZW4gZGlzcGxheSBhIHdhcm5pbmdcclxuICAgKi9cclxuICBASW5wdXQoKSBwdWJsaWMgbWF4RmlsZVNpemVJbkJ5dGVzOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKlxyXG4gICAqIElucHV0IDUwOCBpZGVudGlmaWVyXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHVibGljIG5hbWUgPSAndXBsb2FkJztcclxuXHJcbiAgQE91dHB1dCgpIG9uTW9kZWxGaWxlc0NoYW5nZXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cclxuICBwdWJsaWMgZHJhZ1N0YXRlOiBEcmFnU3RhdGUgPSBEcmFnU3RhdGUuTm90RHJhZ2dpbmc7XHJcblxyXG4gIHB1YmxpYyBzaG93TWF4RmlsZXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGlzQWNjZXB0YWJsZUZpbGVUeXBlID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHNob3VsZFNob3dEcm9wVGFyZ2V0ID0gZmFsc2U7XHJcblxyXG4gIC8qIFRoZSBsaXN0IG9mIHZpc2libGUgZmlsZXMuIERvZXMgbm90IGluY2x1ZGUgZGVsZXRlZFxyXG4gIGZpbGVzLiBEb2VzIGluY2x1ZGUgZmlsZXMgd2l0aCBlcnJvcnMgKi9cclxuICBwdWJsaWMgX21vZGVsOiBBcnJheTxVcGxvYWRGaWxlPiA9IFtdO1xyXG5cclxuICBwcml2YXRlIG9uQ2hhbmdlOiBGdW5jdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6IEZ1bmN0aW9uO1xyXG5cclxuICAvKiBUaGUgaGlkZGVuIGZpbGUgaW5wdXQgZG9tIGVsZW1lbnQgKi9cclxuICBAVmlld0NoaWxkKCdmaWxlJykgcHJpdmF0ZSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xyXG5cclxuICB9XHJcblxyXG4gIG9uRHJhZ1N0YXRlQ2hhbmdlKGRyYWdTdGF0ZSkge1xyXG4gICAgZHJhZ1N0YXRlICE9PSBEcmFnU3RhdGUuTm90RHJhZ2dpbmcgP1xyXG4gICAgICAgIHRoaXMuc2hvdWxkU2hvd0Ryb3BUYXJnZXQgPSB0cnVlIDpcclxuICAgICAgICB0aGlzLnNob3VsZFNob3dEcm9wVGFyZ2V0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbikge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQpIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bGx8dW5kZWZpbmVkfGFueSkge1xyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9tb2RlbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbW9kZWwgPSBbXTtcclxuICAgICAgdGhpcy5fY2xlYXJJbnB1dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkZpbGVzQ2hhbmdlKGV2KXtcclxuICAgIHRoaXMub25Nb2RlbEZpbGVzQ2hhbmdlcy5lbWl0KGV2KTtcclxuIC8vIG9uRmlsZXNDaGFuZ2UoZmlsZXM6IEZpbGVMaXN0KSB7XHJcbiAgIGNvbnN0IGZpbGVzID0gZXYudGFyZ2V0LmZpbGVzXHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5zaG93TWF4RmlsZXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgdG8gYXJyYXkgZm9yIHRoZSBjb252aWVuY2Ugb2YgdGhlIHN0YW5kYXJkIGFycmF5IGZ1bmN0aW9uc1xyXG4gICAgY29uc3QgYXNBcnJheSA9IHRvQXJyYXkoZmlsZXMpO1xyXG4gICAgY29uc3Qgd291bGRCZVRvdGFsID0gYXNBcnJheS5sZW5ndGggKyB0aGlzLl9tb2RlbC5sZW5ndGg7XHJcbiAgICBpZiAodGhpcy5tYXhGaWxlcyA+IDAgJiYgd291bGRCZVRvdGFsID4gdGhpcy5tYXhGaWxlcykge1xyXG4gICAgICB0aGlzLnNob3dNYXhGaWxlc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY2hlY2tBY2NlcHRhYmxlRmlsZVR5cGUoYXNBcnJheSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzQWNjZXB0YWJsZUZpbGVUeXBlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1ZnMgPSBhc0FycmF5Lm1hcChmID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaWxlOiBmLFxyXG4gICAgICAgIHVwbG9hZDogbmV3IFVwbG9hZCgpXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlRmlsZXModWZzKTtcclxuXHJcbiAgICAvLyBjb25jYXQgb2xkIGl0ZW1zIGFuZCBuZXcgaXRlbXNcclxuICAgIHRoaXMuX21vZGVsID0gWy4uLnRoaXMuX21vZGVsLCAuLi51ZnNdO1xyXG5cclxuICAgIGlmICghdGhpcy51cGxvYWREZWZlcnJlZCkge1xyXG4gICAgICB0aGlzLmRvVXBsb2FkKHVmcyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VXBsb2FkKCkge1xyXG4gICAgdGhpcy5kb1VwbG9hZCh0aGlzLl9tb2RlbCk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUZpbGVzKHVmczogVXBsb2FkRmlsZVtdKSB7XHJcbiAgICB1ZnMuZm9yRWFjaCh1ZiA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZmlsZSB9ID0gdWY7XHJcbiAgICAgIGlmICh0aGlzLm1heEZpbGVTaXplSW5CeXRlcyAmJiBmaWxlLnNpemUgPiB0aGlzLm1heEZpbGVTaXplSW5CeXRlcykge1xyXG4gICAgICAgIHVmLnVwbG9hZC5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuRXJyb3I7XHJcbiAgICAgICAgdWYudXBsb2FkLmVycm9yID0gJ0ZpbGUgdG9vIGxhcmdlJztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXR0ZXJuICYmICF0aGlzLnBhdHRlcm4udGVzdChmaWxlLm5hbWUpKSB7XHJcbiAgICAgICAgdWYudXBsb2FkLnN0YXR1cyA9IFVwbG9hZFN0YXR1cy5FcnJvcjtcclxuICAgICAgICB1Zi51cGxvYWQuZXJyb3IgPSAnRmlsZSB0eXBlIG5vdCBzdXBwb3J0ZWQnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRvVXBsb2FkKHVmczogVXBsb2FkRmlsZVtdKSB7XHJcbiAgICB1ZnMuZm9yRWFjaCh1ZiA9PiB7XHJcbiAgICAgIGNvbnN0IHsgdXBsb2FkIH0gPSB1ZjtcclxuXHJcbiAgICAgIGlmICh1cGxvYWQuc3RhdHVzICE9PSBVcGxvYWRTdGF0dXMuSW5pdGlhbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdXBsb2FkLnN0YXR1cyA9IFVwbG9hZFN0YXR1cy5VcGxvYWRpbmc7XHJcbiAgICAgIGNvbnN0IGh0dHBFdmVudCQgPSB0aGlzLl9nZXRIdHRwRXZlbnRTdGVhbSh1Zik7XHJcbiAgICAgIHVwbG9hZC5zdWJzY3JpcHRpb24gPSBodHRwRXZlbnQkLnN1YnNjcmliZShcclxuICAgICAgICAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdXBsb2FkLnByb2dyZXNzID0gZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWw7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cEhlYWRlclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHVwbG9hZC5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuRG9uZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgICAgICAgICB1cGxvYWQuc3RhdHVzID0gVXBsb2FkU3RhdHVzLkVycm9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGV2ZW50Lm9rID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB1cGxvYWQuZXJyb3IgPSAnVXBsb2FkIGZhaWxlZCc7XHJcbiAgICAgICAgICAgIHVwbG9hZC5zdGF0dXMgPSBVcGxvYWRTdGF0dXMuRXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcigndXBsb2FkIGVycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgbGV0IHRvSnNvbjogYW55ID0ge307XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0b0pzb24gPSBKU09OLnBhcnNlKGVycm9yKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdXBsb2FkLmVycm9yID0gdG9Kc29uLnN0YXR1c1RleHQgfHwgdG9Kc29uLm1lc3NhZ2UgfHwgJ1VwbG9hZCBmYWlsZWQnO1xyXG4gICAgICAgICAgdXBsb2FkLnN0YXR1cyA9IFVwbG9hZFN0YXR1cy5FcnJvcjtcclxuICAgICAgICAgIHRoaXMuZW1pdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdXBsb2FkLnN0YXR1cyA9IFVwbG9hZFN0YXR1cy5Eb25lO1xyXG4gICAgICAgICAgdGhpcy5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkNsb3NlQ2xpY2sodWY6IFVwbG9hZEZpbGUpIHtcclxuICAgIGNvbnN0IHsgdXBsb2FkIH0gPSB1ZjtcclxuICAgIGlmICh1cGxvYWQuc3Vic2NyaXB0aW9uICYmIHVwbG9hZC5zdGF0dXMgPT09IFVwbG9hZFN0YXR1cy5VcGxvYWRpbmcpIHtcclxuICAgICAgdXBsb2FkLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRlbGV0ZVJlcXVlc3QgJiYgdXBsb2FkLnN0YXR1cyA9PT0gVXBsb2FkU3RhdHVzLkRvbmUpIHtcclxuICAgICAgdGhpcy5kZWxldGVGaWxlKHVmKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlRmlsZUZyb21MaXN0KHVmKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUZpbGUodWY6IFVwbG9hZEZpbGUpIHtcclxuICAgIGNvbnN0IGRlbGV0ZSQgPSB0aGlzLl9nZXREZWxldGVSZXF1ZXN0Rm9yRmlsZSh1Zik7XHJcbiAgICAvLyBlcnJvcnMgYXJlIGludGVudGlvbmFsbHkgaWdub3JlZC4gSW4gdGhlIGNhc2Ugb2YgYW5cclxuICAgIC8vIGVycm9yLCBzaG93IGl0IGluIHRoZSBjb25zb2xlLCBidXQgZG9uJ3QgYW5ub3kgdGhlIHVzZXIuXHJcbiAgICAvLyBUaGVyZSBtYXkgYmUgYW4gZXh0cmEgZmlsZSBvbiB0aGUgc2VydmVyLCBidXQgdGhhdCdzXHJcbiAgICAvLyBub3QgdGhlIHVzZXIncyBwcm9ibGVtXHJcbiAgICBkZWxldGUkLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmlsZUZyb21MaXN0KHVmOiBVcGxvYWRGaWxlKSB7XHJcbiAgICB0aGlzLl9tb2RlbCA9IHRoaXMuX21vZGVsLmZpbHRlcihfdWYgPT4gX3VmICE9PSB1Zik7XHJcbiAgICBpZiAoIXRoaXMuX21vZGVsLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9jbGVhcklucHV0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGFueUZpbGVzKCkge1xyXG4gICAgcmV0dXJuICEhKHRoaXMuX21vZGVsICYmIHRoaXMuX21vZGVsLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICBzaG91bGRTaG93UHJvZ3Jlc3NCYXIodWY6IFVwbG9hZEZpbGUpIHtcclxuICAgIHJldHVybiB1Zi51cGxvYWQuc3RhdHVzID09PSBVcGxvYWRTdGF0dXMuVXBsb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkU2hvd0Vycm9yKHVmOiBVcGxvYWRGaWxlKSB7XHJcbiAgICByZXR1cm4gdWYudXBsb2FkLnN0YXR1cyA9PT0gVXBsb2FkU3RhdHVzLkVycm9yO1xyXG4gIH1cclxuXHJcbiAgc2hvdWxkQWxsb3dNb3JlRmlsZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMubWF4RmlsZXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbnVtRmlsZXNWYWxpZCgpIDwgdGhpcy5tYXhGaWxlcztcclxuICB9XHJcblxyXG4gIGVtaXQoKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuX21vZGVsKTtcclxuICB9XHJcblxyXG4gIG1heEZpbGVzRXJyb3JNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIGBUaGUgbWF4aW11bSBudW1iZXIgb2YgZmlsZXMgaXMgJHt0aGlzLm1heEZpbGVzfWA7XHJcbiAgfVxyXG5cclxuICBfbnVtRmlsZXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlbFxyXG4gICAgICAuZmlsdGVyKHVmID0+IHVmLnVwbG9hZC5zdGF0dXMgIT09IFVwbG9hZFN0YXR1cy5FcnJvcilcclxuICAgICAgLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIF9nZXREZWxldGVSZXF1ZXN0Rm9yRmlsZSh1ZjogVXBsb2FkRmlsZSkge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuZGVsZXRlUmVxdWVzdCh1Zik7XHJcblxyXG4gICAgaWYgKHJlcXVlc3QgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcbiAgICAgIHJldHVybiByZXF1ZXN0LnBpcGUoc3dpdGNoTWFwKHJlcSA9PiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdChyZXEpKSk7XHJcbiAgICB9IGVsc2UgaWYgKHJlcXVlc3QgaW5zdGFuY2VvZiBIdHRwUmVxdWVzdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnJlcXVlc3QocmVxdWVzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVlc3QgbXVzdCBiZSBhbiBIdHRwUmVxdWVzdCBvciBPYnNlcnZlcmFibGU8SHR0cFJlcXVlc3Q+Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0SHR0cEV2ZW50U3RlYW0odWY6IFVwbG9hZEZpbGUpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiAge1xyXG4gICAgY29uc3QgeyBmaWxlLCB1cGxvYWQgfSA9IHVmO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMudXBsb2FkUmVxdWVzdChmaWxlKTtcclxuXHJcbiAgICBpZiAocmVxdWVzdCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgcmV0dXJuIHJlcXVlc3QucGlwZShzd2l0Y2hNYXAoKHJlcTogSHR0cFJlcXVlc3Q8YW55PikgPT4ge1xyXG4gICAgICAgIHVwbG9hZC5yZXF1ZXN0ID0gcmVxO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdChyZXEpO1xyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2UgaWYgKHJlcXVlc3QgaW5zdGFuY2VvZiBIdHRwUmVxdWVzdCkge1xyXG4gICAgICB1cGxvYWQucmVxdWVzdCA9IHJlcXVlc3Q7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdChyZXF1ZXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBtdXN0IGJlIGFuIEh0dHBSZXF1ZXN0IG9yIE9ic2VydmVyYWJsZTxIdHRwUmVxdWVzdD4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jbGVhcklucHV0KCkge1xyXG4gICAgLy8gY2xlYXIgdGhlIGlucHV0J3MgaW50ZXJuYWwgdmFsdWUsIG9yIGl0IHdpbGwgbm90XHJcbiAgICAvLyBlbWl0IHRoZSBjaGFuZ2UgZXZlbnQgaWYgd2Ugc2VsZWN0IGEgZmlsZSwgZGVzZWxlY3QgdGhhdCBmaWxlLFxyXG4gICAgLy8gYW5kIHNlbGVjdCB0aGUgc2FtZSBmaWxlIGFnYWluXHJcbiAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tBY2NlcHRhYmxlRmlsZVR5cGUodXBsb2FkRmlsZXMpIHtcclxuICAgIC8vIHJlc3RyaWN0IHRoZSBmaWxlIHR5cGVcclxuICAgIC8vICg8aW5wdXQgYWNjZXB0PVwiZmlsZV9leHRlbnNpb258YXVkaW8vKnx2aWRlby8qfGltYWdlLyp8bWVkaWFfdHlwZVwiPilcclxuICAgIHVwbG9hZEZpbGVzLmZvckVhY2godWYgPT4ge1xyXG4gICAgICBpZiAodGhpcy5hY2NlcHQgJiYgIXVmLnR5cGUuc3RhcnRzV2l0aCh0aGlzLmFjY2VwdC5zcGxpdCgnLycpWzBdKVxyXG4gICAgICAgICYmIHVmLm5hbWUuaW5kZXhPZih0aGlzLmFjY2VwdCkgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjY2VwdGFibGVGaWxlVHlwZSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNBY2NlcHRhYmxlRmlsZVR5cGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19