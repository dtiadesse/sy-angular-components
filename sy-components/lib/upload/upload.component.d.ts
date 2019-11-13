import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { DragState } from '../directives/drag-drop/drag-drop.directive';
import { ControlValueAccessor } from '@angular/forms';
export declare type RequestGenerator = (file: File) => HttpRequest<any> | Observable<HttpRequest<any>>;
export declare type DeleteRequestGenerator = (uf: UploadFile) => HttpRequest<any> | Observable<HttpRequest<any>>;
export declare enum UploadStatus {
    Initial = 0,
    Uploading = 1,
    Done = 2,
    Error = 3
}
export declare class Upload {
    subscription: Subscription;
    progress: number;
    status: UploadStatus;
    request: HttpRequest<any>;
    error?: string;
}
export declare class UploadFile {
    file: File;
    upload: Upload;
}
export declare namespace UploadValidator {
    function Required(control: any): {
        'required': string;
    };
}
export declare class UploadComponent implements ControlValueAccessor {
    private httpClient;
    /**
     * The request the gets called after a file has been selected for upload.
     * Report progress must be true if you want the progress bar.
     */
    uploadRequest: RequestGenerator;
    /**
     * The request that gets called when the user click the (x). If the upload
     * is in progress, the upload is simply canceled. If delete fails, the file
     * is removed from the list and no error is presented to the user.
     */
    deleteRequest: DeleteRequestGenerator;
    /**
     * Max number of files that can be uploaded. If a file is in the error status
     * it does not count. 0 for infinite
     */
    maxFiles: number;
    /**
     * Uploads will not start until the host calls component.startUpload()
     */
    uploadDeferred: boolean;
    /**
     *  "accept" can be any value which is valid for input[accept]
     * (<input accept="file_extension|audio/*|video/*|image/*|media_type">)
     */
    accept: string;
    /**
     * Show an error if the file does match the regular expression
     */
    pattern: RegExp;
    /**
     * If maxFileSizeInBytes is exceeded, then display a warning
     */
    maxFileSizeInBytes: number;
    name: string;
    onModelFilesChanges: EventEmitter<any>;
    dragState: DragState;
    showMaxFilesError: boolean;
    disabled: boolean;
    isAcceptableFileType: boolean;
    shouldShowDropTarget: boolean;
    _model: Array<UploadFile>;
    private onChange;
    private onTouched;
    private fileInput;
    constructor(httpClient: HttpClient);
    onDragStateChange(dragState: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: any): void;
    writeValue(value: null | undefined | any): void;
    onFilesChange(ev: any): void;
    startUpload(): void;
    validateFiles(ufs: UploadFile[]): void;
    doUpload(ufs: UploadFile[]): void;
    onCloseClick(uf: UploadFile): void;
    deleteFile(uf: UploadFile): void;
    removeFileFromList(uf: UploadFile): void;
    anyFiles(): boolean;
    shouldShowProgressBar(uf: UploadFile): boolean;
    shouldShowError(uf: UploadFile): boolean;
    shouldAllowMoreFiles(): boolean;
    emit(): void;
    maxFilesErrorMessage(): string;
    _numFilesValid(): number;
    _getDeleteRequestForFile(uf: UploadFile): Observable<HttpEvent<{}>>;
    _getHttpEventSteam(uf: UploadFile): Observable<HttpEvent<any>>;
    _clearInput(): void;
    _checkAcceptableFileType(uploadFiles: any): void;
}
