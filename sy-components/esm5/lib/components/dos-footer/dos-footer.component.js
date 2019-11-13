/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/dos-footer/dos-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function SectionInfo() { }
if (false) {
    /** @type {?} */
    SectionInfo.prototype.path;
    /** @type {?} */
    SectionInfo.prototype.label;
}
var DosFooterComponent = /** @class */ (function () {
    function DosFooterComponent() {
        this.footerTitle = 'Delaware\'s Government';
        this.footerSection1 = [
            {
                path: 'https://governor.delaware.gov',
                label: 'Delaware\'s Governor'
            },
            {
                path: 'https://delaware.gov/topics/agencylist_alpha',
                label: 'State Agencies'
            },
            {
                path: 'https://delaware.gov/topics/yourgovernment',
                label: 'Elected Officials'
            },
            {
                path: 'https://legis.delaware.gov/',
                label: 'General Assembly'
            },
            {
                path: 'https://courts.delaware.gov/',
                label: 'Delaware Courts'
            },
            {
                path: 'https://dhr.delaware.gov/personnel/employee-resources.shtml',
                label: 'State Employees'
            },
            {
                path: 'https://delaware.gov/topics/municipalities',
                label: 'Cities &amp; Towns'
            },
            {
                path: 'http://delcode.delaware.gov/',
                label: 'Delaware State Code'
            },
            {
                path: 'http://regulations.delaware.gov/',
                label: 'State Regulations'
            },
            {
                path: 'https://firststeps.delaware.gov/',
                label: 'Business First Steps'
            }
        ];
        this.imageInfo = {
            path: 'https://gic.delaware.gov/wp-content/themes/dosgic_GIC_theme/img/portal_footer_seal.png',
            label: 'State Seal of Delaware'
        };
        this.hasLogo = true;
        this.footerSection3 = [
            {
                path: 'https://delaware.gov/help/degov-contact.shtml',
                label: 'Contact Us'
            },
            {
                path: 'https://corp.delaware.gov/',
                label: 'Corporations'
            },
            {
                path: 'https://corp.delaware.gov/paytaxes.shtml',
                label: 'Franchise Tax'
            },
            {
                path: 'https://grossreceiptstax.delaware.gov/grtpublic/',
                label: 'Gross Receipts Tax'
            },
            {
                path: 'https://dorweb.revenue.delaware.gov/EDIOnline/EDIOnline.dll',
                label: 'Withholding Tax'
            },
            {
                path: 'https://delaware.gov/topics/',
                label: 'Delaware Topics'
            },
            {
                path: 'https://delaware.gov/help/',
                label: 'Help Center'
            },
            {
                path: 'https://delaware.gov/topics/apps',
                label: 'Mobile Apps'
            },
            {
                path: 'https://delaware.gov/topics/subscribeemail',
                label: 'E-mail / Text Alerts'
            },
            {
                path: 'https://delaware.gov/topics/socialmedia',
                label: 'Social Media'
            }
        ];
        this.footerSection2 = [
            {
                path: 'https://phonedirectory.delaware.gov',
                label: 'Phone Directory'
            },
            {
                path: 'https://delaware.gov/locationsdirectory/',
                label: 'Locations Directory'
            },
            {
                path: 'https://publicmeetings.delaware.gov/',
                label: 'Public Meetings'
            },
            {
                path: 'https://elections.delaware.gov',
                label: 'Voting &amp; Elections'
            },
            {
                path: 'https://delaware.gov/topics/transparency',
                label: 'Transparency'
            },
            {
                path: 'https://www.choosehealthde.com/Health-Insurance',
                label: 'Tax Center'
            },
            {
                path: 'https://revenue.delaware.gov/pit_onlinefiling.shtml',
                label: 'Personal Income Tax'
            },
            {
                path: 'https://delaware.gov/help/privacy',
                label: 'Privacy Policy'
            },
            {
                path: 'https://delaware.gov/topics/weatherpage',
                label: 'Weather &amp; Travel'
            }
        ];
    }
    DosFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dos-footer',
                    template: "<div id=\"footer\">\n    <div class=\"container\">\n        <h1 class=\"main_footer\">{{footerTitle}}</h1>\n        <hr>\n        <ng-container *ngTemplateOutlet=\"mainRowTemplate\"></ng-container>\n\n        <hr>\n        <div class=\"row\">\n            <ng-container *ngTemplateOutlet=\"socialMediaTemplate\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<ng-template #mainRowTemplate>\n    <div class=\"row\">\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec1 of footerSection1\">\n                <a href=\"sec1.path\">{{sec1.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec2 of footerSection2\">\n                <a href=\"sec2.path\">{{sec2.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec3 of footerSection3\">\n                <a href=\"sec3.path\">{{sec3.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec4 of footerSection4\">\n                <a *ngIf=\"!hasLogo\" href=\"sec4.path\">{{sec4.label}}</a>\n            </p>\n            <img *ngIf=\"hasLogo\" [src]=\"imageInfo.path\" [alt]=\"imageInfo.label\" class=\"hidden-xs img-responsive\">\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #socialMediaTemplate>\n    <div class=\"social center-block\">\n        <div class=\"social_facebook\">\n            <a href=\"https://www.facebook.com/delaware.gov\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-facebook-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"facebook-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_twitter\">\n            <a href=\"https://twitter.com/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-twitter-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"twitter-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_flickr\">\n            <a href=\"https://www.flickr.com/groups/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-flickr fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"flickr\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_youtube\">\n            <a href=\"https://www.youtube.com/user/DelawareGovernment\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-youtube-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"youtube-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_rss\">\n            <a href=\"https://www.instagram.com/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-instagram fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"instagram\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\">\n                    </path>\n                </svg></a>\n        </div>\n    </div>\n</ng-template>",
                    styles: [".container{padding:15px;display:block;-webkit-box-flex:1;flex:1}.main_footer{font-family:\"Open Sans\",Helvetica,Arial,sans-serif;font-weight:500;color:#fff!important;font-size:40px;margin-top:20px}h1{color:#fff!important}hr{-moz-border-bottom-colors:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;-webkit-border-image:none;-o-border-image:none;border-image:none;border:1px solid #fff;margin-bottom:20px;margin-top:20px;color:#fff;width:100%}p{color:#fff;display:block;margin:0;padding:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}#footer a,#footer a:link,#footer a:visited{text-decoration:none;color:#fff;-webkit-transition:.5s;transition:.5s;font-size:16px;font-family:\"Open Sans\",Helvetica,Arial,sans-serif}.row{margin-right:-15px;margin-left:-15px}.content-container{width:22%;float:left;position:relative;min-height:1px;padding-right:15px;padding-left:15px;padding-bottom:25px}div{display:block}.img-responsive>img{display:block;max-width:100%;height:auto}.pull-right{float:right!important}.col-lg-4{float:left;width:33.33333333%;position:relative;min-height:1px;padding-right:15px;padding-left:15px}#footer{background-color:#2d3032;font-size:15px;min-height:100%;clear:both;display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;line-height:1.5rem;max-height:40rem;width:100%;color:#fff}.social{max-width:500px;max-width:500px;display:block;margin-left:20px}.center-block{width:22%;margin-right:10px}.social_facebook{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_facebook img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_facebook img.top:hover{opacity:0;height:50px;width:50px}.social_twitter{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_twitter img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_twitter img.top:hover{opacity:0;height:50px;width:50px}.social_flickr{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_flickr img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_flickr img.top:hover{opacity:0;height:50px;width:50px}.social_youtube{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_youtube img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_youtube img.top:hover{opacity:0;height:50px;width:50px}.social_rss{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_rss img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_rss img.top:hover{opacity:0;height:50px;width:50px}.footer_logo{float:left;margin-right:5px;border:0;width:50px;height:50px}img{vertical-align:middle;border:0}@media (max-width:624px){.content-container{width:90%;float:none;align-content:center}.row{margin-left:15%;text-align:left}.main_footer{font-family:\"Open Sans\",Helvetica,Arial,sans-serif;font-weight:500;color:#fff!important;font-size:25px;margin-top:20px}.img-responsive>img{display:block;max-width:80%;height:auto;text-align:center;margin-left:-5%!important}#footer{max-height:100rem}}"]
                }] }
    ];
    DosFooterComponent.propDecorators = {
        footerTitle: [{ type: Input }],
        footerSection1: [{ type: Input }],
        footerSection4: [{ type: Input }],
        imageInfo: [{ type: Input }],
        hasLogo: [{ type: Input }],
        footerSection3: [{ type: Input }],
        footerSection2: [{ type: Input }]
    };
    return DosFooterComponent;
}());
export { DosFooterComponent };
if (false) {
    /** @type {?} */
    DosFooterComponent.prototype.footerTitle;
    /** @type {?} */
    DosFooterComponent.prototype.footerSection1;
    /** @type {?} */
    DosFooterComponent.prototype.footerSection4;
    /** @type {?} */
    DosFooterComponent.prototype.imageInfo;
    /** @type {?} */
    DosFooterComponent.prototype.hasLogo;
    /** @type {?} */
    DosFooterComponent.prototype.footerSection3;
    /** @type {?} */
    DosFooterComponent.prototype.footerSection2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9zLWZvb3Rlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZG9zLWZvb3Rlci9kb3MtZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELGlDQUdDOzs7SUFGRCwyQkFBYTs7SUFDYiw0QkFBYzs7QUFHZDtJQUFBO1FBT1csZ0JBQVcsR0FBVyx3QkFBd0IsQ0FBQztRQUUvQyxtQkFBYyxHQUFrQjtZQUN2QztnQkFDRSxJQUFJLEVBQUUsK0JBQStCO2dCQUNyQyxLQUFLLEVBQUUsc0JBQXNCO2FBQzlCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDhDQUE4QztnQkFDcEQsS0FBSyxFQUFFLGdCQUFnQjthQUN4QjtZQUNEO2dCQUNFLElBQUksRUFBRSw0Q0FBNEM7Z0JBQ2xELEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsNkJBQTZCO2dCQUNuQyxLQUFLLEVBQUUsa0JBQWtCO2FBQzFCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDhCQUE4QjtnQkFDcEMsS0FBSyxFQUFFLGlCQUFpQjthQUN6QjtZQUNEO2dCQUNFLElBQUksRUFBRSw2REFBNkQ7Z0JBQ25FLEtBQUssRUFBRSxpQkFBaUI7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsNENBQTRDO2dCQUNsRCxLQUFLLEVBQUUsb0JBQW9CO2FBQzVCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDhCQUE4QjtnQkFDcEMsS0FBSyxFQUFFLHFCQUFxQjthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxrQ0FBa0M7Z0JBQ3hDLEtBQUssRUFBRSxtQkFBbUI7YUFDM0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxLQUFLLEVBQUUsc0JBQXNCO2FBQzlCO1NBQ0YsQ0FBQztRQUdPLGNBQVMsR0FDaEI7WUFDRSxJQUFJLEVBQUUsd0ZBQXdGO1lBQzlGLEtBQUssRUFBRSx3QkFBd0I7U0FDaEMsQ0FBQztRQUVLLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsbUJBQWMsR0FBa0I7WUFDdkM7Z0JBQ0UsSUFBSSxFQUFFLCtDQUErQztnQkFDckQsS0FBSyxFQUFFLFlBQVk7YUFDcEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQyxLQUFLLEVBQUUsY0FBYzthQUN0QjtZQUNEO2dCQUNFLElBQUksRUFBRSwwQ0FBMEM7Z0JBQ2hELEtBQUssRUFBRSxlQUFlO2FBQ3ZCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGtEQUFrRDtnQkFDeEQsS0FBSyxFQUFFLG9CQUFvQjthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSw2REFBNkQ7Z0JBQ25FLEtBQUssRUFBRSxpQkFBaUI7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsOEJBQThCO2dCQUNwQyxLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDRCQUE0QjtnQkFDbEMsS0FBSyxFQUFFLGFBQWE7YUFDckI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxLQUFLLEVBQUUsYUFBYTthQUNyQjtZQUNEO2dCQUNFLElBQUksRUFBRSw0Q0FBNEM7Z0JBQ2xELEtBQUssRUFBRSxzQkFBc0I7YUFDOUI7WUFDRDtnQkFDRSxJQUFJLEVBQUUseUNBQXlDO2dCQUMvQyxLQUFLLEVBQUUsY0FBYzthQUN0QjtTQUNGLENBQUM7UUFHTyxtQkFBYyxHQUFpQjtZQUN4QztnQkFDRSxJQUFJLEVBQUUscUNBQXFDO2dCQUMzQyxLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDBDQUEwQztnQkFDaEQsS0FBSyxFQUFFLHFCQUFxQjthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxzQ0FBc0M7Z0JBQzVDLEtBQUssRUFBRSxpQkFBaUI7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsZ0NBQWdDO2dCQUN0QyxLQUFLLEVBQUUsd0JBQXdCO2FBQ2hDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLDBDQUEwQztnQkFDaEQsS0FBSyxFQUFFLGNBQWM7YUFDdEI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsaURBQWlEO2dCQUN2RCxLQUFLLEVBQUUsWUFBWTthQUNwQjtZQUNEO2dCQUNFLElBQUksRUFBRSxxREFBcUQ7Z0JBQzNELEtBQUssRUFBRSxxQkFBcUI7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsbUNBQW1DO2dCQUN6QyxLQUFLLEVBQUUsZ0JBQWdCO2FBQ3hCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHlDQUF5QztnQkFDL0MsS0FBSyxFQUFFLHNCQUFzQjthQUM5QjtTQUNGLENBQUM7SUFDRixDQUFDOztnQkE5SUEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qixzb05BQTBDOztpQkFFM0M7Ozs4QkFHRSxLQUFLO2lDQUVMLEtBQUs7aUNBMkNMLEtBQUs7NEJBQ0wsS0FBSzswQkFNTCxLQUFLO2lDQUNMLEtBQUs7aUNBNENMLEtBQUs7O0lBc0NSLHlCQUFDO0NBQUEsQUE5SUQsSUE4SUM7U0F6SVksa0JBQWtCOzs7SUFFN0IseUNBQXdEOztJQUV4RCw0Q0F5Q0U7O0lBRUYsNENBQXVDOztJQUN2Qyx1Q0FJSTs7SUFFSixxQ0FBaUM7O0lBQ2pDLDRDQXlDRTs7SUFHRiw0Q0FxQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbkluZm8ge1xucGF0aDogc3RyaW5nO1xubGFiZWw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZG9zLWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb3MtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZG9zLWZvb3Rlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERvc0Zvb3RlckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZm9vdGVyVGl0bGU6IHN0cmluZyA9ICdEZWxhd2FyZVxcJ3MgR292ZXJubWVudCc7XG4gXG4gIEBJbnB1dCgpIGZvb3RlclNlY3Rpb24xOiBTZWN0aW9uSW5mb1tdID0gW1xuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2dvdmVybm9yLmRlbGF3YXJlLmdvdicsXG4gICAgICBsYWJlbDogJ0RlbGF3YXJlXFwncyBHb3Zlcm5vcidcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2RlbGF3YXJlLmdvdi90b3BpY3MvYWdlbmN5bGlzdF9hbHBoYScsXG4gICAgICBsYWJlbDogJ1N0YXRlIEFnZW5jaWVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2h0dHBzOi8vZGVsYXdhcmUuZ292L3RvcGljcy95b3VyZ292ZXJubWVudCcsXG4gICAgICBsYWJlbDogJ0VsZWN0ZWQgT2ZmaWNpYWxzJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2h0dHBzOi8vbGVnaXMuZGVsYXdhcmUuZ292LycsXG4gICAgICBsYWJlbDogJ0dlbmVyYWwgQXNzZW1ibHknXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cHM6Ly9jb3VydHMuZGVsYXdhcmUuZ292LycsXG4gICAgICBsYWJlbDogJ0RlbGF3YXJlIENvdXJ0cydcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2Roci5kZWxhd2FyZS5nb3YvcGVyc29ubmVsL2VtcGxveWVlLXJlc291cmNlcy5zaHRtbCcsXG4gICAgICBsYWJlbDogJ1N0YXRlIEVtcGxveWVlcydcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2RlbGF3YXJlLmdvdi90b3BpY3MvbXVuaWNpcGFsaXRpZXMnLFxuICAgICAgbGFiZWw6ICdDaXRpZXMgJmFtcDsgVG93bnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cDovL2RlbGNvZGUuZGVsYXdhcmUuZ292LycsXG4gICAgICBsYWJlbDogJ0RlbGF3YXJlIFN0YXRlIENvZGUnXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cDovL3JlZ3VsYXRpb25zLmRlbGF3YXJlLmdvdi8nLFxuICAgICAgbGFiZWw6ICdTdGF0ZSBSZWd1bGF0aW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2ZpcnN0c3RlcHMuZGVsYXdhcmUuZ292LycsXG4gICAgICBsYWJlbDogJ0J1c2luZXNzIEZpcnN0IFN0ZXBzJ1xuICAgIH1cbiAgXTtcblxuICBASW5wdXQoKSBmb290ZXJTZWN0aW9uNDogU2VjdGlvbkluZm9bXTtcbiAgQElucHV0KCkgaW1hZ2VJbmZvOiBTZWN0aW9uSW5mbyA9IFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2dpYy5kZWxhd2FyZS5nb3Yvd3AtY29udGVudC90aGVtZXMvZG9zZ2ljX0dJQ190aGVtZS9pbWcvcG9ydGFsX2Zvb3Rlcl9zZWFsLnBuZycsXG4gICAgICBsYWJlbDogJ1N0YXRlIFNlYWwgb2YgRGVsYXdhcmUnXG4gICAgfTtcbiAgXG4gIEBJbnB1dCgpIGhhc0xvZ286IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXJTZWN0aW9uMzogU2VjdGlvbkluZm9bXSA9IFtcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cHM6Ly9kZWxhd2FyZS5nb3YvaGVscC9kZWdvdi1jb250YWN0LnNodG1sJyxcbiAgICAgIGxhYmVsOiAnQ29udGFjdCBVcydcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2NvcnAuZGVsYXdhcmUuZ292LycsXG4gICAgICBsYWJlbDogJ0NvcnBvcmF0aW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2NvcnAuZGVsYXdhcmUuZ292L3BheXRheGVzLnNodG1sJyxcbiAgICAgIGxhYmVsOiAnRnJhbmNoaXNlIFRheCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2dyb3NzcmVjZWlwdHN0YXguZGVsYXdhcmUuZ292L2dydHB1YmxpYy8nLFxuICAgICAgbGFiZWw6ICdHcm9zcyBSZWNlaXB0cyBUYXgnXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cHM6Ly9kb3J3ZWIucmV2ZW51ZS5kZWxhd2FyZS5nb3YvRURJT25saW5lL0VESU9ubGluZS5kbGwnLFxuICAgICAgbGFiZWw6ICdXaXRoaG9sZGluZyBUYXgnXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cHM6Ly9kZWxhd2FyZS5nb3YvdG9waWNzLycsXG4gICAgICBsYWJlbDogJ0RlbGF3YXJlIFRvcGljcydcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICdodHRwczovL2RlbGF3YXJlLmdvdi9oZWxwLycsXG4gICAgICBsYWJlbDogJ0hlbHAgQ2VudGVyJ1xuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2h0dHBzOi8vZGVsYXdhcmUuZ292L3RvcGljcy9hcHBzJyxcbiAgICAgIGxhYmVsOiAnTW9iaWxlIEFwcHMnXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cHM6Ly9kZWxhd2FyZS5nb3YvdG9waWNzL3N1YnNjcmliZWVtYWlsJyxcbiAgICAgIGxhYmVsOiAnRS1tYWlsIC8gVGV4dCBBbGVydHMnXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnaHR0cHM6Ly9kZWxhd2FyZS5nb3YvdG9waWNzL3NvY2lhbG1lZGlhJyxcbiAgICAgIGxhYmVsOiAnU29jaWFsIE1lZGlhJ1xuICAgIH1cbiAgXTtcblxuXG4gIEBJbnB1dCgpIGZvb3RlclNlY3Rpb24yOiBTZWN0aW9uSW5mb1tdID1bXG4gIHtcbiAgICBwYXRoOiAnaHR0cHM6Ly9waG9uZWRpcmVjdG9yeS5kZWxhd2FyZS5nb3YnLFxuICAgIGxhYmVsOiAnUGhvbmUgRGlyZWN0b3J5J1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2h0dHBzOi8vZGVsYXdhcmUuZ292L2xvY2F0aW9uc2RpcmVjdG9yeS8nLFxuICAgIGxhYmVsOiAnTG9jYXRpb25zIERpcmVjdG9yeSdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdodHRwczovL3B1YmxpY21lZXRpbmdzLmRlbGF3YXJlLmdvdi8nLFxuICAgIGxhYmVsOiAnUHVibGljIE1lZXRpbmdzJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2h0dHBzOi8vZWxlY3Rpb25zLmRlbGF3YXJlLmdvdicsXG4gICAgbGFiZWw6ICdWb3RpbmcgJmFtcDsgRWxlY3Rpb25zJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2h0dHBzOi8vZGVsYXdhcmUuZ292L3RvcGljcy90cmFuc3BhcmVuY3knLFxuICAgIGxhYmVsOiAnVHJhbnNwYXJlbmN5J1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2h0dHBzOi8vd3d3LmNob29zZWhlYWx0aGRlLmNvbS9IZWFsdGgtSW5zdXJhbmNlJyxcbiAgICBsYWJlbDogJ1RheCBDZW50ZXInXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnaHR0cHM6Ly9yZXZlbnVlLmRlbGF3YXJlLmdvdi9waXRfb25saW5lZmlsaW5nLnNodG1sJyxcbiAgICBsYWJlbDogJ1BlcnNvbmFsIEluY29tZSBUYXgnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnaHR0cHM6Ly9kZWxhd2FyZS5nb3YvaGVscC9wcml2YWN5JyxcbiAgICBsYWJlbDogJ1ByaXZhY3kgUG9saWN5J1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2h0dHBzOi8vZGVsYXdhcmUuZ292L3RvcGljcy93ZWF0aGVycGFnZScsXG4gICAgbGFiZWw6ICdXZWF0aGVyICZhbXA7IFRyYXZlbCdcbiAgfVxuXTtcbn1cbiJdfQ==