/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/video/video.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent() {
    }
    VideoPlayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sy-video-player',
                    template: "<div class=\"video-container\">\r\n    <h3>{{videoConfig.title}}</h3>\r\n    <video width=\"490\" [poster]=\"videoConfig.poster\" crossorigin=\"anonymous\" controls [title]=\"videoConfig.title\"\r\n        #videoPly>\r\n        <source [src]=\"videoConfig.videoUrl\" type=\"video/mp4\" #videoSrc />\r\n        <track kind=\"captions\" label=\"English captions\" [src]=\"videoConfig.captionsUrl\" srclang=\"en\" default\r\n            #videoTrack />\r\n    </video>\r\n    <div class=\"video-description\">\r\n        <p> {{videoConfig.description}}</p>\r\n    </div>\r\n</div>",
                    styles: [".video-description{max-width:450px;word-break:break-word;font-family:'Open Sans',sans-serif!important;font-size:16px}h3{color:#add8bb!important}.video-description a{font-size:12px}.video-container{width:450px;max-width:450px}"]
                }] }
    ];
    VideoPlayerComponent.propDecorators = {
        videoConfig: [{ type: Input }]
    };
    return VideoPlayerComponent;
}());
export { VideoPlayerComponent };
if (false) {
    /** @type {?} */
    VideoPlayerComponent.prototype.videoConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pEO0lBQUE7SUFRQSxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsNGtCQUFxQzs7aUJBRXhDOzs7OEJBR0ksS0FBSzs7SUFDViwyQkFBQztDQUFBLEFBUkQsSUFRQztTQUZZLG9CQUFvQjs7O0lBQzdCLDJDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmlkZW9Db25maWcgfSBmcm9tICcuLi8uLi90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3ktdmlkZW8tcGxheWVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWRlby5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi92aWRlby5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIHZpZGVvQ29uZmlnOiBWaWRlb0NvbmZpZztcclxufVxyXG4iXX0=