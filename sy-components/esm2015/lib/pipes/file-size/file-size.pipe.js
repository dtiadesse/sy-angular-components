/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/file-size/file-size.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
// Transforms a filesize in bytes to a human readable decimal filesize using SI prefixes
export class FilesizePipe {
    /**
     * @param {?} size
     * @return {?}
     */
    transform(size) {
        if (typeof size !== 'number') {
            return '0';
        }
        /** @type {?} */
        const symbols = ['B', 'KB', 'MB', 'GB', 'TB'];
        /** @type {?} */
        const sizes = [1, Math.pow(2, 10), Math.pow(2, 20), Math.pow(2, 30), Math.pow(2, 40), Math.pow(2, 50)];
        /** @type {?} */
        let symbol = symbols[0];
        /** @type {?} */
        let base = sizes[0];
        if (size < sizes[1]) {
            return '<1 KB';
        }
        else if (size < sizes[2]) {
            symbol = symbols[1];
            base = sizes[1];
        }
        else if (size < sizes[3]) {
            symbol = symbols[2];
            base = sizes[2];
        }
        else if (size < sizes[4]) {
            symbol = symbols[3];
            base = sizes[3];
        }
        else if (size < sizes[5]) {
            symbol = symbols[4];
            base = sizes[4];
        }
        else {
            console.warn('file size symbol not supported');
        }
        /** @type {?} */
        const rounded = Math.round(size / base);
        return `${rounded} ${symbol}`;
    }
}
FilesizePipe.decorators = [
    { type: Pipe, args: [{ name: 'filesize' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zeS1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2ZpbGUtc2l6ZS9maWxlLXNpemUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUlwRCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFFdkIsU0FBUyxDQUFDLElBQVk7UUFDcEIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxHQUFHLENBQUM7U0FDWjs7Y0FFSyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDOztjQUN2QyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBQSxDQUFDLEVBQUksRUFBRSxDQUFBLEVBQUUsU0FBQSxDQUFDLEVBQUksRUFBRSxDQUFBLEVBQUUsU0FBQSxDQUFDLEVBQUksRUFBRSxDQUFBLEVBQUUsU0FBQSxDQUFDLEVBQUksRUFBRSxDQUFBLEVBQUUsU0FBQSxDQUFDLEVBQUksRUFBRSxDQUFBLENBQUM7O1lBRTFELE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUNuQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFCLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjthQUFNLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDaEQ7O2NBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QyxPQUFPLEdBQUcsT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQWxDRixJQUFJLFNBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gVHJhbnNmb3JtcyBhIGZpbGVzaXplIGluIGJ5dGVzIHRvIGEgaHVtYW4gcmVhZGFibGUgZGVjaW1hbCBmaWxlc2l6ZSB1c2luZyBTSSBwcmVmaXhlc1xyXG5AUGlwZSh7bmFtZTogJ2ZpbGVzaXplJ30pXHJcbmV4cG9ydCBjbGFzcyBGaWxlc2l6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHNpemU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybiAnMCc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ltYm9scyA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQiddO1xyXG4gICAgY29uc3Qgc2l6ZXMgPSBbMSwgMiAqKiAxMCwgMiAqKiAyMCwgMiAqKiAzMCwgMiAqKiA0MCwgMiAqKiA1MF07XHJcblxyXG4gICAgbGV0IHN5bWJvbCA9IHN5bWJvbHNbMF07XHJcbiAgICBsZXQgYmFzZSA9IHNpemVzWzBdO1xyXG5cclxuICAgIGlmIChzaXplIDwgc2l6ZXNbMV0pIHtcclxuICAgICAgcmV0dXJuICc8MSBLQic7XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPCBzaXplc1syXSkge1xyXG4gICAgICBzeW1ib2wgPSBzeW1ib2xzWzFdO1xyXG4gICAgICBiYXNlID0gc2l6ZXNbMV07XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPCBzaXplc1szXSkge1xyXG4gICAgICBzeW1ib2wgPSBzeW1ib2xzWzJdO1xyXG4gICAgICBiYXNlID0gc2l6ZXNbMl07XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPCBzaXplc1s0XSkge1xyXG4gICAgICBzeW1ib2wgPSBzeW1ib2xzWzNdO1xyXG4gICAgICBiYXNlID0gc2l6ZXNbM107XHJcbiAgICB9IGVsc2UgaWYgKHNpemUgPCBzaXplc1s1XSkge1xyXG4gICAgICBzeW1ib2wgPSBzeW1ib2xzWzRdO1xyXG4gICAgICBiYXNlID0gc2l6ZXNbNF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ2ZpbGUgc2l6ZSBzeW1ib2wgbm90IHN1cHBvcnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdW5kZWQgPSBNYXRoLnJvdW5kKHNpemUgLyBiYXNlKTtcclxuICAgIHJldHVybiBgJHtyb3VuZGVkfSAke3N5bWJvbH1gO1xyXG4gIH1cclxufVxyXG5cclxuIl19