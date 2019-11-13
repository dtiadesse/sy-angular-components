/**
 * @fileoverview added by tsickle
 * Generated from: lib/types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function HistoryNodeType() { }
if (false) {
    /**
     * Identifier for node
     * @type {?}
     */
    HistoryNodeType.prototype.id;
    /**
     * Date value for node
     * @type {?}
     */
    HistoryNodeType.prototype.date;
    /**
     * Optional url value for title
     * @type {?|undefined}
     */
    HistoryNodeType.prototype.url;
    /**
     * Optional query params
     * @type {?|undefined}
     */
    HistoryNodeType.prototype.queryParams;
    /**
     * Title value for node
     * @type {?|undefined}
     */
    HistoryNodeType.prototype.title;
    /**
     * Optional description for node
     * @type {?|undefined}
     */
    HistoryNodeType.prototype.description;
    /**
     * Optional aria label value for node
     * @type {?|undefined}
     */
    HistoryNodeType.prototype.ariaLabel;
}
/**
 * @record
 */
export function AuditTrailInfo() { }
if (false) {
    /** @type {?} */
    AuditTrailInfo.prototype.lastModifiedByEmail;
    /** @type {?} */
    AuditTrailInfo.prototype.createdByEmail;
    /** @type {?} */
    AuditTrailInfo.prototype.created;
    /** @type {?} */
    AuditTrailInfo.prototype.lastModified;
}
/**
 * @record
 */
export function HistoryConfig() { }
if (false) {
    /** @type {?} */
    HistoryConfig.prototype.title;
    /** @type {?} */
    HistoryConfig.prototype.dateHeaderText;
    /** @type {?} */
    HistoryConfig.prototype.detailsHeaderText;
}
/**
 * @record
 */
export function HistoryDataType() { }
if (false) {
    /** @type {?} */
    HistoryDataType.prototype.DateTimeChanged;
    /** @type {?} */
    HistoryDataType.prototype.SummaryReason;
    /** @type {?} */
    HistoryDataType.prototype.DetailField;
    /** @type {?} */
    HistoryDataType.prototype.DetailOld;
    /** @type {?} */
    HistoryDataType.prototype.DetailNew;
    /** @type {?} */
    HistoryDataType.prototype.DetailChangedBy;
}
/**
 * @record
 */
export function PointOfContactType() { }
if (false) {
    /**
     * Sets the full name property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.fullName;
    /**
     * Sets the title property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.title;
    /**
     * Sets the primary address property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.address;
    /**
     * Sets the secondary address property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.address2;
    /**
     * Sets the city name property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.city;
    /**
     * Sets the state property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.state;
    /**
     * Sets the zip code property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.zip;
    /**
     * Sets the email property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.email;
    /**
     * Sets the primary phone property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.phone;
    /**
     * Sets the secondary phone property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.phone2;
    /**
     * Sets the fax number property
     * @type {?|undefined}
     */
    PointOfContactType.prototype.fax;
    /**
     * Sets the website url
     * @type {?|undefined}
     */
    PointOfContactType.prototype.website;
}
/**
 * @record
 */
export function AlertType() { }
if (false) {
    /**
     * Sets the alert title
     * @type {?}
     */
    AlertType.prototype.title;
    /**
     * Sets the alert type
     * @type {?}
     */
    AlertType.prototype.type;
    /**
     * Sets the alert body text
     * @type {?}
     */
    AlertType.prototype.description;
    /**
     * Sets a timeout (in milliseconds) for the alert to dismiss itself. 0 is
     * infinite.
     * @type {?}
     */
    AlertType.prototype.timer;
    /**
     * Explicity defines that user must dismiss alert
     * @type {?|undefined}
     */
    AlertType.prototype.mustDismiss;
    /**
     * Sets the alert body text
     * @type {?|undefined}
     */
    AlertType.prototype.descriptionList;
}
/**
 * @record
 */
export function DownloadPackageType() { }
if (false) {
    /**
     * Sets a package id value
     * @type {?}
     */
    DownloadPackageType.prototype.packageId;
    /**
     * Sets the package name
     * @type {?}
     */
    DownloadPackageType.prototype.name;
    /**
     * Sets the package type
     * @type {?}
     */
    DownloadPackageType.prototype.type;
    /**
     * Sets the packages access property
     * @type {?}
     */
    DownloadPackageType.prototype.access;
    /**
     * Sets the posted date property
     * @type {?}
     */
    DownloadPackageType.prototype.postedDate;
    /**
     * Sets the resources in the package
     * @type {?}
     */
    DownloadPackageType.prototype.resources;
    /**
     * Sets the initial state of package accordion
     * @type {?}
     */
    DownloadPackageType.prototype.accordionState;
    /**
     * Sets the download url for the whole package
     * @type {?}
     */
    DownloadPackageType.prototype.downloadUrl;
}
/**
 * @record
 */
export function DownloadResourceType() { }
if (false) {
    /**
     * Sets a resource id value
     * @type {?}
     */
    DownloadResourceType.prototype.resourceId;
    /**
     * Sets the resource name
     * @type {?}
     */
    DownloadResourceType.prototype.name;
    /**
     * Sets the resource description
     * @type {?}
     */
    DownloadResourceType.prototype.description;
    /**
     * Sets the resource filesize
     * @type {?}
     */
    DownloadResourceType.prototype.size;
    /**
     * Sets the resource download url
     * @type {?}
     */
    DownloadResourceType.prototype.downloadUrl;
    /**
     * Sets the resource type information
     * @type {?}
     */
    DownloadResourceType.prototype.typeInfo;
}
/**
 * @record
 */
export function DownloadResourceTypeInfoType() { }
if (false) {
    /**
     * Sets the resource type name
     * @type {?}
     */
    DownloadResourceTypeInfoType.prototype.name;
    /**
     * Sets the font awesome icon to use for the resource
     * @type {?}
     */
    DownloadResourceTypeInfoType.prototype.iconClass;
}
/**
 * @record
 */
export function VideoConfig() { }
if (false) {
    /** @type {?} */
    VideoConfig.prototype.poster;
    /** @type {?} */
    VideoConfig.prototype.videoUrl;
    /** @type {?} */
    VideoConfig.prototype.captionsUrl;
    /** @type {?} */
    VideoConfig.prototype.title;
    /** @type {?} */
    VideoConfig.prototype.videoId;
    /** @type {?} */
    VideoConfig.prototype.captionOption;
    /** @type {?} */
    VideoConfig.prototype.seekInterval;
    /** @type {?} */
    VideoConfig.prototype.videoTitle;
    /** @type {?} */
    VideoConfig.prototype.description;
    /** @type {?} */
    VideoConfig.prototype.pdfurl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3R5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEscUNBNkJDOzs7Ozs7SUF6QkMsNkJBQVc7Ozs7O0lBSVgsK0JBQWE7Ozs7O0lBSWIsOEJBQWE7Ozs7O0lBSWIsc0NBQWtCOzs7OztJQUlsQixnQ0FBZTs7Ozs7SUFJZixzQ0FBcUI7Ozs7O0lBSXJCLG9DQUFtQjs7Ozs7QUFHckIsb0NBS0M7OztJQUpDLDZDQUE0Qjs7SUFDNUIsd0NBQXVCOztJQUN2QixpQ0FBZ0I7O0lBQ2hCLHNDQUFxQjs7Ozs7QUFHdkIsbUNBSUM7OztJQUhDLDhCQUFjOztJQUNkLHVDQUF1Qjs7SUFDdkIsMENBQTBCOzs7OztBQUc1QixxQ0FPQzs7O0lBTkMsMENBQXdCOztJQUN4Qix3Q0FBc0I7O0lBQ3RCLHNDQUFvQjs7SUFDcEIsb0NBQWtCOztJQUNsQixvQ0FBa0I7O0lBQ2xCLDBDQUF3Qjs7Ozs7QUFHMUIsd0NBaURDOzs7Ozs7SUE3Q0Msc0NBQWtCOzs7OztJQUlsQixtQ0FBZTs7Ozs7SUFJZixxQ0FBaUI7Ozs7O0lBSWpCLHNDQUFrQjs7Ozs7SUFJbEIsa0NBQWM7Ozs7O0lBSWQsbUNBQWU7Ozs7O0lBSWYsaUNBQWE7Ozs7O0lBSWIsbUNBQWU7Ozs7O0lBSWYsbUNBQWU7Ozs7O0lBSWYsb0NBQWdCOzs7OztJQUloQixpQ0FBYTs7Ozs7SUFJYixxQ0FBaUI7Ozs7O0FBR25CLCtCQTJCQzs7Ozs7O0lBdkJDLDBCQUFNOzs7OztJQUlOLHlCQUFLOzs7OztJQUlMLGdDQUFZOzs7Ozs7SUFLWiwwQkFBYzs7Ozs7SUFJZCxnQ0FBc0I7Ozs7O0lBS3RCLG9DQUF3Qjs7Ozs7QUFNMUIseUNBaUNDOzs7Ozs7SUE3QkMsd0NBQWtCOzs7OztJQUlsQixtQ0FBYTs7Ozs7SUFJYixtQ0FBYTs7Ozs7SUFJYixxQ0FBbUI7Ozs7O0lBSW5CLHlDQUFtQjs7Ozs7SUFJbkIsd0NBQWtDOzs7OztJQUlsQyw2Q0FBOEI7Ozs7O0lBSTlCLDBDQUFvQjs7Ozs7QUFFdEIsMENBeUJDOzs7Ozs7SUFyQkMsMENBQW1COzs7OztJQUluQixvQ0FBYTs7Ozs7SUFJYiwyQ0FBb0I7Ozs7O0lBSXBCLG9DQUFhOzs7OztJQUliLDJDQUFvQjs7Ozs7SUFJcEIsd0NBQXVDOzs7OztBQUV6QyxrREFTQzs7Ozs7O0lBTEMsNENBQWE7Ozs7O0lBSWIsaURBQWtCOzs7OztBQUdwQixpQ0FXQzs7O0lBVkMsNkJBQWU7O0lBQ2YsK0JBQWlCOztJQUNqQixrQ0FBb0I7O0lBQ3BCLDRCQUFjOztJQUNkLDhCQUFnQjs7SUFDaEIsb0NBQXVCOztJQUN2QixtQ0FBcUI7O0lBQ3JCLGlDQUFtQjs7SUFDbkIsa0NBQW9COztJQUNwQiw2QkFBZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeU5vZGVUeXBlIHtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVyIGZvciBub2RlXHJcbiAgICovXHJcbiAgaWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBEYXRlIHZhbHVlIGZvciBub2RlXHJcbiAgICovXHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHVybCB2YWx1ZSBmb3IgdGl0bGVcclxuICAgKi9cclxuICB1cmw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgcXVlcnkgcGFyYW1zXHJcbiAgICovXHJcbiAgcXVlcnlQYXJhbXM/OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogVGl0bGUgdmFsdWUgZm9yIG5vZGVcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBPcHRpb25hbCBkZXNjcmlwdGlvbiBmb3Igbm9kZVxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIGFyaWEgbGFiZWwgdmFsdWUgZm9yIG5vZGVcclxuICAgKi9cclxuICBhcmlhTGFiZWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVkaXRUcmFpbEluZm8ge1xyXG4gIGxhc3RNb2RpZmllZEJ5RW1haWw6IHN0cmluZztcclxuICBjcmVhdGVkQnlFbWFpbDogc3RyaW5nO1xyXG4gIGNyZWF0ZWQ6IHN0cmluZztcclxuICBsYXN0TW9kaWZpZWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5Q29uZmlnIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRhdGVIZWFkZXJUZXh0OiBzdHJpbmc7XHJcbiAgZGV0YWlsc0hlYWRlclRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5RGF0YVR5cGUge1xyXG4gIERhdGVUaW1lQ2hhbmdlZDogc3RyaW5nO1xyXG4gIFN1bW1hcnlSZWFzb246IHN0cmluZztcclxuICBEZXRhaWxGaWVsZDogc3RyaW5nO1xyXG4gIERldGFpbE9sZDogc3RyaW5nO1xyXG4gIERldGFpbE5ldzogc3RyaW5nO1xyXG4gIERldGFpbENoYW5nZWRCeTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50T2ZDb250YWN0VHlwZSB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZnVsbCBuYW1lIHByb3BlcnR5XHJcbiAgICovXHJcbiAgZnVsbE5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdGl0bGUgcHJvcGVydHlcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBwcmltYXJ5IGFkZHJlc3MgcHJvcGVydHlcclxuICAgKi9cclxuICBhZGRyZXNzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHNlY29uZGFyeSBhZGRyZXNzIHByb3BlcnR5XHJcbiAgICovXHJcbiAgYWRkcmVzczI/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgY2l0eSBuYW1lIHByb3BlcnR5XHJcbiAgICovXHJcbiAgY2l0eT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBzdGF0ZSBwcm9wZXJ0eVxyXG4gICAqL1xyXG4gIHN0YXRlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHppcCBjb2RlIHByb3BlcnR5XHJcbiAgICovXHJcbiAgemlwPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGVtYWlsIHByb3BlcnR5XHJcbiAgICovXHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgcHJpbWFyeSBwaG9uZSBwcm9wZXJ0eVxyXG4gICAqL1xyXG4gIHBob25lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHNlY29uZGFyeSBwaG9uZSBwcm9wZXJ0eVxyXG4gICAqL1xyXG4gIHBob25lMj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBmYXggbnVtYmVyIHByb3BlcnR5XHJcbiAgICovXHJcbiAgZmF4Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHdlYnNpdGUgdXJsXHJcbiAgICovXHJcbiAgd2Vic2l0ZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbGVydFR5cGUge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGFsZXJ0IHRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGU7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgYWxlcnQgdHlwZVxyXG4gICAqL1xyXG4gIHR5cGU7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgYWxlcnQgYm9keSB0ZXh0XHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb247XHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIHRpbWVvdXQgKGluIG1pbGxpc2Vjb25kcykgZm9yIHRoZSBhbGVydCB0byBkaXNtaXNzIGl0c2VsZi4gMCBpc1xyXG4gICAqIGluZmluaXRlLlxyXG4gICAqL1xyXG4gIHRpbWVyOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogRXhwbGljaXR5IGRlZmluZXMgdGhhdCB1c2VyIG11c3QgZGlzbWlzcyBhbGVydFxyXG4gICAqL1xyXG4gIG11c3REaXNtaXNzPzogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgKiBTZXRzIHRoZSBhbGVydCBib2R5IHRleHRcclxuICAgKi9cclxuICBkZXNjcmlwdGlvbkxpc3Q/OiBhbnlbXTtcclxufVxyXG5cclxuLy8gRG93bmxvYWRcclxuZXhwb3J0IHR5cGUgQWNjZXNzVHlwZSA9ICdQdWJsaWMnfCdQcml2YXRlJztcclxuZXhwb3J0IHR5cGUgRXhwYW5zaW9uVHlwZSA9ICdjb2xsYXBzZWQnfCdleHBhbmRlZCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRQYWNrYWdlVHlwZSB7XHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIHBhY2thZ2UgaWQgdmFsdWVcclxuICAgKi9cclxuICBwYWNrYWdlSWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBwYWNrYWdlIG5hbWVcclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgcGFja2FnZSB0eXBlXHJcbiAgICovXHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHBhY2thZ2VzIGFjY2VzcyBwcm9wZXJ0eVxyXG4gICAqL1xyXG4gIGFjY2VzczogQWNjZXNzVHlwZTtcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBwb3N0ZWQgZGF0ZSBwcm9wZXJ0eVxyXG4gICAqL1xyXG4gIHBvc3RlZERhdGU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSByZXNvdXJjZXMgaW4gdGhlIHBhY2thZ2VcclxuICAgKi9cclxuICByZXNvdXJjZXM6IERvd25sb2FkUmVzb3VyY2VUeXBlW107XHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZSBvZiBwYWNrYWdlIGFjY29yZGlvblxyXG4gICAqL1xyXG4gIGFjY29yZGlvblN0YXRlOiBFeHBhbnNpb25UeXBlO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGRvd25sb2FkIHVybCBmb3IgdGhlIHdob2xlIHBhY2thZ2VcclxuICAgKi9cclxuICBkb3dubG9hZFVybDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRSZXNvdXJjZVR5cGUge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgYSByZXNvdXJjZSBpZCB2YWx1ZVxyXG4gICAqL1xyXG4gIHJlc291cmNlSWQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSByZXNvdXJjZSBuYW1lXHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHJlc291cmNlIGRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSByZXNvdXJjZSBmaWxlc2l6ZVxyXG4gICAqL1xyXG4gIHNpemU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSByZXNvdXJjZSBkb3dubG9hZCB1cmxcclxuICAgKi9cclxuICBkb3dubG9hZFVybDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHJlc291cmNlIHR5cGUgaW5mb3JtYXRpb25cclxuICAgKi9cclxuICB0eXBlSW5mbzogRG93bmxvYWRSZXNvdXJjZVR5cGVJbmZvVHlwZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkUmVzb3VyY2VUeXBlSW5mb1R5cGUge1xyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHJlc291cmNlIHR5cGUgbmFtZVxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBmb250IGF3ZXNvbWUgaWNvbiB0byB1c2UgZm9yIHRoZSByZXNvdXJjZVxyXG4gICAqL1xyXG4gIGljb25DbGFzczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFZpZGVvQ29uZmlnIHtcclxuICBwb3N0ZXI6IHN0cmluZztcclxuICB2aWRlb1VybDogc3RyaW5nO1xyXG4gIGNhcHRpb25zVXJsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB2aWRlb0lkOiBzdHJpbmc7XHJcbiAgY2FwdGlvbk9wdGlvbjogYm9vbGVhbjtcclxuICBzZWVrSW50ZXJ2YWw6IG51bWJlcjtcclxuICB2aWRlb1RpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwZGZ1cmw6IHN0cmluZztcclxufVxyXG5cclxuIl19