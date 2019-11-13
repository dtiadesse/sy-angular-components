/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/video/video.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class VideoPlayerComponent {
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
if (false) {
    /** @type {?} */
    VideoPlayerComponent.prototype.videoConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3ktY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU2pELE1BQU0sT0FBTyxvQkFBb0I7OztZQU5oQyxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsNGtCQUFxQzs7YUFFeEM7OzswQkFHSSxLQUFLOzs7O0lBQU4sMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWRlb0NvbmZpZyB9IGZyb20gJy4uLy4uL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzeS12aWRlby1wbGF5ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZGVvLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3ZpZGVvLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWRlb1BsYXllckNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdmlkZW9Db25maWc6IFZpZGVvQ29uZmlnO1xyXG59XHJcbiJdfQ==