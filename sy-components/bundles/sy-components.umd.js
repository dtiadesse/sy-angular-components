(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/animations'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('rxjs'), require('@angular/forms'), require('rxjs/operators'), require('@angular/common'), require('@angular/core'), require('@fortawesome/angular-fontawesome'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('sy-components', ['exports', '@angular/router', '@angular/animations', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons', 'rxjs', '@angular/forms', 'rxjs/operators', '@angular/common', '@angular/core', '@fortawesome/angular-fontawesome', '@angular/common/http'], factory) :
    (factory((global['sy-components'] = {}),global.ng.router,global.ng.animations,global.fontawesomeSvgCore,global.freeSolidSvgIcons,global.freeRegularSvgIcons,global.rxjs,global.ng.forms,global.rxjs.operators,global.ng.common,global.ng.core,global.angularFontawesome,global.ng.common.http));
}(this, (function (exports,router,animations,fontawesomeSvgCore,freeSolidSvgIcons,freeRegularSvgIcons,rxjs,forms,operators,common,i0,angularFontawesome,http) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sy-components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SyComponentsService = /** @class */ (function () {
        function SyComponentsService() {
        }
        SyComponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SyComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SyComponentsService.ngInjectableDef = i0.defineInjectable({ factory: function SyComponentsService_Factory() { return new SyComponentsService(); }, token: SyComponentsService, providedIn: "root" });
        return SyComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sy-components.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SyComponentsComponent = /** @class */ (function () {
        function SyComponentsComponent() {
        }
        /**
         * @return {?}
         */
        SyComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        SyComponentsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-sy-components',
                        template: "\n    <p>\n      sy-components works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SyComponentsComponent.ctorParameters = function () { return []; };
        return SyComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/history/history.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HistoryComponent = /** @class */ (function () {
        function HistoryComponent() {
        }
        HistoryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-history',
                        template: "<span aria-hidden=\"true\">\n    <fa-icon [icon]=\"['fas', 'minus']\" size=\"sm\"></fa-icon>\n</span>\n<ul>\n  <li *ngFor=\"let item of data; let i = index;\" [ngClass]=\"'history-item-'+i\"\n    [class.current]=\"item.id && item.id == currentId\"\n    [attr.aria-label]=\" item.id == currentId && item.ariaLabel ? item.ariaLabel : '' \">\n    <span>\n      <strong>{{item.date}}</strong>\n      <a *ngIf=\"item.url && item.title\" [routerLink]='item.url.split(\"/\")'\n       [queryParams]=\"item.queryParams\"\n        [attr.id]=\"id ? (id + i) : undefined\">{{ item.title }}</a>\n      <ng-container *ngIf=\"!item.url && item.title\">{{ item.title }}</ng-container>\n      <br *ngIf=\"item.title && item.description\" />\n      <p *ngIf=\"item.description\" [innerHTML]=\"item.description\"></p>\n    </span>\n  </li>\n</ul>\n\n<span aria-hidden=\"true\">\n    <fa-icon [icon]=\"['fas', 'minus']\" size=\"sm\"></fa-icon>\n</span>",
                        styles: ["fa-icon{color:#ccc;padding-left:4px}ul{list-style-type:none;padding-left:10px;margin:-10px 0}ul li{margin:0 0 0 -8px;padding:15px 0;border-left:2px solid #ccc;content:\"\\F111\";font:17px/1 FontAwesome;color:#5b616b;background-color:#fff}ul span{display:inline-table;margin-left:4px;width:90%}ul span em{padding-left:5px;display:block}ul span strong{display:block}ul .fa{font-size:12px;color:#fdb81e;padding-left:5px}"]
                    }] }
        ];
        HistoryComponent.propDecorators = {
            id: [{ type: i0.Input }],
            data: [{ type: i0.Input }],
            currentId: [{ type: i0.Input }]
        };
        return HistoryComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/utilities/key-helper.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KeyHelper = /** @class */ (function () {
        function KeyHelper() {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            this._allowedKeys = [];
            this._currentlySupported = [
                'enter', 'up', 'down', 'left', 'right', 'tab', 'esc', 'space',
                'shift', 'backspace', '1', '2', '3', '4', '5', '6', '7', '8',
                '9', '0', 'delete'
            ];
            this._setAllowedKeys.apply(this, __spread(keys));
        }
        /**
         * @param {?} event
         * @return {?}
         */
        KeyHelper.getKeyCode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!event) {
                    return undefined;
                }
                else if (event.key) {
                    return event.key;
                }
                else if (event.code) {
                    return event.code;
                }
                else if (event.keyIdentifier) {
                    return event.keyIdentifier;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        KeyHelper.prototype.isAllowed = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var val = this._allowedKeys
                    .reduce(( /**
             * @param {?} val
             * @param {?} key
             * @return {?}
             */function (val, key) {
                    return KeyHelper.is(key, event) || val;
                }), false);
                return val;
            };
        /**
         * @private
         * @param {...?} keys
         * @return {?}
         */
        KeyHelper.prototype._setAllowedKeys = /**
         * @private
         * @param {...?} keys
         * @return {?}
         */
            function () {
                var _this = this;
                var keys = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    keys[_i] = arguments[_i];
                }
                keys.forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    if (_this._currentlySupported.indexOf(key) !== -1) {
                        _this._allowedKeys.push(key);
                    }
                    else {
                        /** @type {?} */
                        var ok = _this._allowedToString();
                        /** @type {?} */
                        var msg = "Only supports " + ok + " at this time";
                        throw new TypeError(msg);
                    }
                }));
            };
        /**
         * @private
         * @return {?}
         */
        KeyHelper.prototype._allowedToString = /**
         * @private
         * @return {?}
         */
            function () {
                return this._allowedKeys.join(', ');
            };
        /**
         * @param {?} event
         * @return {?}
         */
        KeyHelper.getNumberFromKey = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var tests = [
                    KeyHelper._zero, KeyHelper._one, KeyHelper._two,
                    KeyHelper._three, KeyHelper._four, KeyHelper._five,
                    KeyHelper._six, KeyHelper._seven, KeyHelper._eight,
                    KeyHelper._nine
                ];
                return tests.reduce(( /**
                 * @param {?} val
                 * @param {?} test
                 * @return {?}
                 */function (val, test) {
                    return val !== undefined
                        ? val
                        : test(event);
                }), undefined);
            };
        /**
         * @param {?} validKeyParam
         * @param {?} event
         * @return {?}
         */
        KeyHelper.is = /**
         * @param {?} validKeyParam
         * @param {?} event
         * @return {?}
         */
            function (validKeyParam, event) {
                /** @type {?} */
                var lowercased = validKeyParam.toLowerCase();
                switch (lowercased) {
                    case 'enter':
                        return this._isEnter(event);
                    case 'up':
                        return this._isArrowUp(event);
                    case 'down':
                        return this._isArrowDown(event);
                    case 'left':
                        return this._isArrowLeft(event);
                    case 'right':
                        return this._isArrowRight(event);
                    case 'tab':
                        return this._isTab(event);
                    case 'esc':
                        return this._isEscape(event);
                    case 'space':
                        return this._isSpace(event);
                    case 'shift':
                        return this._isShift(event);
                    case 'backspace':
                        return this._isBackspace(event);
                    case 'delete':
                        return this._isDelete(event);
                    case '0':
                        return this._isExpectedNumber(0, event);
                    case '1':
                        return this._isExpectedNumber(1, event);
                    case '2':
                        return this._isExpectedNumber(2, event);
                    case '3':
                        return this._isExpectedNumber(3, event);
                    case '4':
                        return this._isExpectedNumber(4, event);
                    case '5':
                        return this._isExpectedNumber(5, event);
                    case '6':
                        return this._isExpectedNumber(6, event);
                    case '7':
                        return this._isExpectedNumber(7, event);
                    case '8':
                        return this._isExpectedNumber(8, event);
                    case '9':
                        return this._isExpectedNumber(9, event);
                    default:
                        return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isEnter = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Enter'
                    || e.key === 'Enter'
                    || e.keyIdentifier === 'Enter'
                    || e.which === 13
                    || e.charCode === 13
                    || e.keyCode === 13) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isArrowUp = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'ArrowUp'
                    || e.key === 'ArrowUp'
                    || e.key === 'Up'
                    || e.keyIdentifier === 'Up'
                    || e.which === 38
                    || e.keyCode === 38) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isArrowDown = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'ArrowDown'
                    || e.key === 'ArrowDown'
                    || e.key === 'Down'
                    || e.keyIdentifier === 'Down'
                    || e.which === 40
                    || e.keyCode === 40) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isArrowLeft = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'ArrowLeft'
                    || e.key === 'ArrowLeft'
                    || e.key === 'Left'
                    || e.keyIdentifier === 'Left'
                    || e.which === 37
                    || e.keyCode === 37) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isArrowRight = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'ArrowRight'
                    || e.key === 'ArrowRight'
                    || e.key === 'Right'
                    || e.keyIdentifier === 'Right'
                    || e.which === 39
                    || e.keyCode === 39) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isTab = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Tab'
                    || e.key === 'Tab'
                    || e.keyIdentifier === 'U+0009'
                    || e.which === 9
                    || e.keyCode === 9) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isEscape = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Escape'
                    || e.key === 'Escape'
                    || e.key === 'Esc'
                    || e.keyIdentifier === 'U+001B'
                    || e.which === 27
                    || e.keyCode === 27) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isSpace = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Space'
                    || e.key === ' '
                    || e.key === 'Spacebar'
                    || e.keyIdentifier === 'U+0020'
                    || e.which === 32
                    || e.keyCode === 32) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isShift = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'ShiftLeft'
                    || e.code === 'ShiftRight'
                    || e.key === 'Shift'
                    || e.keyIdentifier === 'Shift'
                    || e.which === 16
                    || e.keyCode === 16) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isBackspace = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Backspace'
                    || e.key === 'Backspace'
                    || e.keyIdentifier === 'U+0008'
                    || e.which === 8
                    || e.keyCode === 8) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._isDelete = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Delete'
                    || e.key === 'Delete'
                    || e.keyIdentifier === 'U+007F'
                    || e.which === 46
                    || e.keyCode === 46) {
                    return true;
                }
                else {
                    return false;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._zero = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit0'
                    || e.code === 'Numpad0'
                    || e.key === 0
                    || e.keyCode === 48
                    || e.keyCode === 96
                    || e.keyIdentifier === 'U+0030'
                    || e.which === 48) {
                    return 0;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._one = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit1'
                    || e.code === 'Numpad1'
                    || e.key === 1
                    || e.keyCode === 49
                    || e.keyCode === 97
                    || e.keyIdentifier === 'U+0031'
                    || e.which === 49) {
                    return 1;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._two = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit2'
                    || e.code === 'Numpad2'
                    || e.key === 2
                    || e.keyCode === 50
                    || e.keyCode === 98
                    || e.keyIdentifier === 'U+0032'
                    || e.which === 50) {
                    return 2;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._three = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit3'
                    || e.code === 'Numpad3'
                    || e.key === 3
                    || e.keyCode === 51
                    || e.keyCode === 99
                    || e.keyIdentifier === 'U+0033'
                    || e.which === 51) {
                    return 3;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._four = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit4'
                    || e.code === 'Numpad4'
                    || e.key === 4
                    || e.keyCode === 52
                    || e.keyCode === 100
                    || e.keyIdentifier === 'U+0034'
                    || e.which === 52) {
                    return 4;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._five = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit5'
                    || e.code === 'Numpad5'
                    || e.key === 5
                    || e.keyCode === 53
                    || e.keyCode === 101
                    || e.keyIdentifier === 'U+0035'
                    || e.which === 53) {
                    return 5;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._six = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit6'
                    || e.code === 'Numpad6'
                    || e.key === 6
                    || e.keyCode === 54
                    || e.keyCode === 102
                    || e.keyIdentifier === 'U+0036'
                    || e.which === 54) {
                    return 6;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._seven = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit7'
                    || e.code === 'Numpad7'
                    || e.key === 7
                    || e.keyCode === 55
                    || e.keyCode === 103
                    || e.keyIdentifier === 'U+0037'
                    || e.which === 55) {
                    return 7;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._eight = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit8'
                    || e.code === 'Numpad8'
                    || e.key === 8
                    || e.keyCode === 56
                    || e.keyCode === 104
                    || e.keyIdentifier === 'U+0038'
                    || e.which === 56) {
                    return 8;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} e
         * @return {?}
         */
        KeyHelper._nine = /**
         * @private
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (e.code === 'Digit9'
                    || e.code === 'Numpad9'
                    || e.key === 9
                    || e.keyCode === 57
                    || e.keyCode === 105
                    || e.keyIdentifier === 'U+0039'
                    || e.which === 57) {
                    return 9;
                }
                else {
                    return undefined;
                }
            };
        /**
         * @private
         * @param {?} expected
         * @param {?} event
         * @return {?}
         */
        KeyHelper._isExpectedNumber = /**
         * @private
         * @param {?} expected
         * @param {?} event
         * @return {?}
         */
            function (expected, event) {
                return expected === KeyHelper.getNumberFromKey(event);
            };
        return KeyHelper;
    }());
    /** @enum {string} */
    var KEYS = {
        'ENTER': "enter",
        'UP': "up",
        'DOWN': "down",
        'LEFT': "left",
        'RIGHT': "right",
        'TAB': "tab",
        'ESC': "esc",
        'SPACE': "space",
        'SHIFT': "shift",
        'BACKSPACE': "backspace",
        'ONE': "1",
        'TWO': "2",
        'THREE': "3",
        'FOUR': "4",
        'FIVE': "5",
        'SIX': "6",
        'SEVEN': "7",
        'EIGHT': "8",
        'NINE': "9",
        'ZERO': "0",
        'DELETE': "delete",
    };

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/wrappers/fieldset-wrapper/fieldset-wrapper.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FieldsetWrapper = /** @class */ (function () {
        function FieldsetWrapper(cdr) {
            this.cdr = cdr;
            /**
             * Add an array of errorMessages
             */
            this.errorMessages = [];
            /**
             * toggles the required text
             */
            this.required = false;
            this.showToggle = false;
            this.toggleOpen = false;
            this.lineLimit = 2;
            this.checkMore = false; // semaphore
        }
        Object.defineProperty(FieldsetWrapper.prototype, "errorMessage", {
            get: /**
             * @return {?}
             */ function () {
                return this.errorMessages[0];
            },
            /**
             * set a single error message
             */
            set: /**
             * set a single error message
             * @param {?} message
             * @return {?}
             */ function (message) {
                if (!!message) {
                    this.errorMessages = [];
                    this.errorMessages.push(message);
                }
                else {
                    this.errorMessages = [];
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} c
         * @return {?}
         */
        FieldsetWrapper.prototype.ngOnChanges = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                if (!this.checkMore
                    && c.hint
                    && c.hint.previousValue !== c.hint.currentValue) {
                    // needs to be open to recalc correctly in
                    // ngAfterViewChecked
                    this.showToggle = false;
                    this.toggleOpen = false;
                    this.checkMore = true;
                    this.cdr.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.calcToggle();
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (this.checkMore && !this.showToggle) {
                    this.calcToggle();
                    this.cdr.detectChanges();
                    this.checkMore = false;
                }
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.calcToggle = /**
         * @return {?}
         */
            function () {
                if (this.hintContainer) {
                    /** @type {?} */
                    var numOfLines = this.calculateNumberOfLines(this.hintContainer.nativeElement);
                    this.showToggle = numOfLines > this.lineLimit
                        ? true
                        : false;
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        FieldsetWrapper.prototype.onResize = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // needs to be open to recalc correctly in
                // ngAfterViewChecked
                this.showToggle = false;
                this.toggleOpen = false;
                this.checkMore = true;
                this.cdr.detectChanges();
            };
        /**
         * @param {?} status
         * @return {?}
         */
        FieldsetWrapper.prototype.toggleHint = /**
         * @param {?} status
         * @return {?}
         */
            function (status) {
                this.toggleOpen = !status;
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        FieldsetWrapper.prototype.calculateNumberOfLines = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                if (!this.lineSize) {
                    /** @type {?} */
                    var other = obj.cloneNode(true);
                    other.innerHTML = 'a<br>b';
                    other.style.visibility = 'hidden';
                    /** @type {?} */
                    var el = ( /** @type {?} */(document
                        .getElementsByTagName('body')[0]));
                    el.appendChild(other);
                    this.lineSize = other.offsetHeight / 2;
                    el.removeChild(other);
                }
                /** @type {?} */
                var val = Math.floor(obj.offsetHeight / this.lineSize);
                return val;
            };
        /**
         * @param {...?} controls
         * @return {?}
         */
        FieldsetWrapper.prototype.formatErrors = /**
         * @param {...?} controls
         * @return {?}
         */
            function () {
                var _this = this;
                var controls = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    controls[_i] = arguments[_i];
                }
                this.errorMessages = [];
                controls.forEach(( /**
                 * @param {?} control
                 * @return {?}
                 */function (control) { return _this._formatError(control); }));
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.clearError = /**
         * @return {?}
         */
            function () {
                this.errorMessages = [];
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.displayErrors = /**
         * @return {?}
         */
            function () {
                return this.errorMessages.length > 0;
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.displayErrorList = /**
         * @return {?}
         */
            function () {
                return this.errorMessages.length > 1;
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.setOverflow = /**
         * @return {?}
         */
            function () {
                return (this.showToggle && !this.toggleOpen)
                    ? 'hidden'
                    : '';
            };
        /**
         * @return {?}
         */
        FieldsetWrapper.prototype.setHeight = /**
         * @return {?}
         */
            function () {
                return (this.showToggle && !this.toggleOpen)
                    ? '2.88em'
                    : '';
            };
        /**
         * @private
         * @param {?} control
         * @return {?}
         */
        FieldsetWrapper.prototype._formatError = /**
         * @private
         * @param {?} control
         * @return {?}
         */
            function (control) {
                if (!control) {
                    return;
                }
                if (control.pristine) {
                    this.errorMessage = '';
                    return;
                }
                if (control.invalid && control.errors) {
                    this.formatInvalidErrors(control);
                }
                else if (!control.errors) {
                    this.errorMessage = '';
                }
            };
        /**
         * @private
         * @param {?} control
         * @return {?}
         */
        FieldsetWrapper.prototype.formatInvalidErrors = /**
         * @private
         * @param {?} control
         * @return {?}
         */
            function (control) {
                for (var k in control.errors) {
                    /** @type {?} */
                    var errorObject = control.errors[k];
                    if (errorObject.message) {
                        if (Object.prototype.toString.call(errorObject.message)
                            === '[object String]') {
                            this.errorMessages.push(errorObject.message);
                            return;
                        }
                    }
                    else {
                        this.setInvalidError(k, errorObject);
                    }
                }
            };
        /**
         * @private
         * @param {?} error
         * @param {?} errorObject
         * @return {?}
         */
        FieldsetWrapper.prototype.setInvalidError = /**
         * @private
         * @param {?} error
         * @param {?} errorObject
         * @return {?}
         */
            function (error, errorObject) {
                /** @type {?} */
                var msg;
                switch (error) {
                    case 'maxlength':
                        /** @type {?} */
                        var actualLength = errorObject.actualLength;
                        /** @type {?} */
                        var requiredLength = errorObject.requiredLength;
                        msg = actualLength
                            + ' characters input but max length is '
                            + requiredLength;
                        this.errorMessages.push(msg);
                        return;
                    case 'required':
                        msg = 'This field is required';
                        this.errorMessages.push(msg);
                        return;
                    case 'isNotBeforeToday':
                        msg = 'Date must not be before today';
                        this.errorMessages.push(msg);
                        return;
                    default:
                        msg = 'Invalid';
                        this.errorMessages.push(msg);
                        return;
                }
            };
        FieldsetWrapper.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-fieldset-wrapper',
                        template: "<div [class.sy-input-error]=\"displayErrors()\">\r\n\r\n    <fieldset class=\"fieldset\">\r\n\r\n        <legend *ngIf=\"label || required\" [class.required-text]=\"displayErrors()\">\r\n            {{label}}\r\n            <span *ngIf=\"required\" class=\"required-text\">\r\n        Required\r\n      </span>\r\n            <ng-content select=\"[label-right]\"></ng-content>\r\n        </legend>\r\n\r\n        <div #hintContainer *ngIf=\"hint\" class=\"sy-form-hint\" aria-live=\"polite\" [innerHTML]=\"hint\" [style.overflow]=\"setOverflow()\" [style.height]=\"setHeight()\">\r\n        </div>\r\n\r\n        <div *ngIf=\"showToggle\" class=\"toggle-more\">\r\n            <a href=\"javascript:void(0)\" (click)=\"toggleHint(toggleOpen)\">\r\n        {{ toggleOpen?\"less\":\"more\"}}\r\n      </a>\r\n        </div>\r\n\r\n        <span *ngIf=\"displayErrors()\" class=\"usa-input-error-message\" aria-live=\"assertive\">\r\n      <ng-container *ngIf=\"displayErrorList() else single\">\r\n        <ul>\r\n          <li *ngFor=\"let msg of errorMessages\">\r\n            {{ msg }}\r\n          </li>\r\n        </ul>\r\n      </ng-container>\r\n      <ng-template #single>\r\n        {{ errorMessages[0] }}\r\n      </ng-template>\r\n    </span>\r\n\r\n        <ng-content></ng-content>\r\n\r\n    </fieldset>\r\n\r\n</div>",
                        styles: [".checkbox-container{position:relative;height:130px;max-height:145px;overflow-y:scroll;overflow-x:hidden;margin:10px;padding-left:10px}.selected-item{background-color:#0071bc;color:#fff}.required-text{color:red}.sy-form-hint{font-size:14px}.sy-input-error{color:red}fieldset{border:none}"]
                    }] }
        ];
        /** @nocollapse */
        FieldsetWrapper.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef }
            ];
        };
        FieldsetWrapper.propDecorators = {
            label: [{ type: i0.Input }],
            hint: [{ type: i0.Input }],
            errorMessages: [{ type: i0.Input }],
            errorMessage: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            hintContainer: [{ type: i0.ViewChild, args: ['hintContainer',] }],
            onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }]
        };
        return FieldsetWrapper;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/listbox/listbox.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListboxComponent = /** @class */ (function () {
        function ListboxComponent() {
            /**
             * Deprecated, Sets the bound value of the component
             */
            this.model = [];
            /**
             * Sets required text on component
             */
            this.required = false;
            this.optionsMode = 'checkbox';
            /**
             * current index
             */
            this.currentIndex = 0;
            this.HighlightedPropertyName = 'highlighted';
            /**
             * Deprecated, Event emitted when the model value changes
             */
            this.modelChange = new i0.EventEmitter();
            this.optionSelected = new i0.EventEmitter();
            /*
              * We want our model to list the checked items in the order that they appear
              * in the options list. This object allows us to efficiently determine if a
              * value is before another value
              */
            this._ordering = {};
            this.onChange = ( /**
             * @param {?} c
             * @return {?}
             */function (c) { return undefined; });
            this.onTouched = ( /**
             * @return {?}
             */function () { return undefined; });
        }
        Object.defineProperty(ListboxComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this.model;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
                this.setSelectedItem(val);
                this.onChange(this.model);
                this.onTouched();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ListboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // initialize the order lookup map
                for (var i = 0; i < this.options.length; i++) {
                    /** @type {?} */
                    var val = this.options[i].value;
                    this._ordering[val] = i;
                }
                if (this.control) {
                    this.control.valueChanges.subscribe(( /**
                     * @return {?}
                     */function () {
                        _this.wrapper.formatErrors(_this.control);
                    }));
                    this.wrapper.formatErrors(this.control);
                }
                this.optionsMode = this.isSingleMode ? 'radio' : 'checkbox';
            };
        /**
         * @param {?} val
         * @return {?}
         */
        ListboxComponent.prototype.setSelectedItem = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                var _this = this;
                /** @type {?} */
                var returnVal = val;
                if (!Array.isArray(returnVal)) {
                    returnVal = [];
                }
                var _loop_1 = function (idx) {
                    /** @type {?} */
                    var lookup = returnVal.findIndex(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        return value === _this.options[idx].value;
                    }));
                    if (this_1.options[idx].disabled && lookup !== -1) {
                        returnVal.splice(lookup, 1);
                    }
                };
                var this_1 = this;
                // don't select options that are disabled
                for (var idx in this.options) {
                    _loop_1(idx);
                }
                this.model = returnVal;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ListboxComponent.prototype.isChecked = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this.model.indexOf(value) !== -1;
            };
        /**
          * on hovering set current index
          */
        /**
         * on hovering set current index
         * @param {?} index
         * @return {?}
         */
        ListboxComponent.prototype.onHover = /**
         * on hovering set current index
         * @param {?} index
         * @return {?}
         */
            function (index) {
                this.currentIndex = index;
                this.setfocus();
                this.setHighlightedItem(this.options[this.currentIndex]);
            };
        /**
          * set selected item and emit on keyboard interaction
          */
        /**
         * set selected item and emit on keyboard interaction
         * @private
         * @param {?} item
         * @return {?}
         */
        ListboxComponent.prototype.setHighlightedItem = /**
         * set selected item and emit on keyboard interaction
         * @private
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (this.options && this.options.length > 0) {
                    if (this.currentItem) {
                        this.currentItem[this.HighlightedPropertyName] = false;
                    }
                    this.currentItem = item;
                    this.currentItem[this.HighlightedPropertyName] = true;
                    /** @type {?} */
                    var message = item['lable'];
                    //  this.addScreenReaderMessage(message);
                }
            };
        /**
        * adding Screen Reader Message
        */
        /**
         * adding Screen Reader Message
         * @private
         * @param {?} message
         * @return {?}
         */
        ListboxComponent.prototype.addScreenReaderMessage = /**
         * adding Screen Reader Message
         * @private
         * @param {?} message
         * @return {?}
         */
            function (message) {
                /** @type {?} */
                var srResults = document.createElement('li');
                srResults.innerText = message;
                if (this.srOnly && this.srOnly.nativeElement) {
                    this.srOnly.nativeElement.appendChild(srResults);
                }
            };
        /**
         * @private
         * @return {?}
         */
        ListboxComponent.prototype.setfocus = /**
         * @private
         * @return {?}
         */
            function () {
                this.checkboxListElement.nativeElement.getElementsByTagName("li")[this.currentIndex].getElementsByTagName("input")[0].focus();
            };
        /**
         * @param {?} ev
         * @param {?} option
         * @return {?}
         */
        ListboxComponent.prototype.onChecked = /**
         * @param {?} ev
         * @param {?} option
         * @return {?}
         */
            function (ev, option) {
                this.onTouched();
                if (!ev.target.checked) {
                    // If the option was unchecked, remove it from the model
                    this.value = this.model.filter(( /**
                     * @param {?} val
                     * @return {?}
                     */function (val) { return val !== option; }));
                }
                else {
                    // Else, insert the checked item into the model in the correct order
                    /** @type {?} */
                    var i = 0;
                    /** @type {?} */
                    var thisOrder = this._ordering[option];
                    while (i < this.model.length) {
                        /** @type {?} */
                        var otherValue = this.model[i];
                        // If the item being inserted is after the current value, break and
                        // insert it.
                        if (thisOrder <= this._ordering[otherValue]) {
                            break;
                        }
                        i++;
                    }
                    if (this.isSingleMode) {
                        this.value = [option];
                    }
                    else {
                        /** @type {?} */
                        var clone = this.model.indexOf('') > -1
                            ? this.model.slice(1)
                            : this.model.slice(0);
                        clone.splice(i, 0, option);
                        this.value = clone;
                    }
                }
                this.emitModel();
            };
        /**
         * @param {?} evt
         * @return {?}
         */
        ListboxComponent.prototype.onKeyDown = /**
         * @param {?} evt
         * @return {?}
         */
            function (evt) {
                if (KeyHelper.is(KEYS.TAB, evt)) {
                    return;
                }
                else if (KeyHelper.is(KEYS.DOWN, evt)) {
                    evt.preventDefault();
                    if (this.currentIndex < this.options.length - 1) {
                        this.currentIndex += 1;
                        this.checkboxListElement.nativeElement.scrollTop = this.checkboxListElement.nativeElement.getElementsByTagName("li")[this.currentIndex].offsetTop;
                        this.setHighlightedItem(this.options[this.currentIndex]);
                        this.setfocus();
                    }
                }
                else if (KeyHelper.is(KEYS.UP, evt)) {
                    evt.preventDefault();
                    if (this.currentIndex > 0) {
                        this.currentIndex -= 1;
                        this.checkboxListElement.nativeElement.scrollTop = this.checkboxListElement.nativeElement.getElementsByTagName("li")[this.currentIndex].offsetTop;
                        this.setHighlightedItem(this.options[this.currentIndex]);
                        this.setfocus();
                    }
                }
                else if (KeyHelper.is(KEYS.SPACE, evt)) {
                    this.onChecked(evt, this.currentItem);
                }
            };
        /**
         * @return {?}
         */
        ListboxComponent.prototype.emitModel = /**
         * @return {?}
         */
            function () {
                this.modelChange.emit(this.model);
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        ListboxComponent.prototype.registerOnChange = /**
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
        ListboxComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        ListboxComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ListboxComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var returnValue = value;
                if (!returnValue) {
                    returnValue = [];
                }
                this.setSelectedItem(returnValue);
            };
        ListboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-listbox',
                        template: "<div class=\"listbox-width\">\r\n    <ng-container *ngTemplateOutlet=\"listTemplate\"></ng-container>\r\n</div>\r\n\r\n<ng-template #listTemplate>\r\n    <sy-fieldset-wrapper [label]=\"label\" [hint]=\"hint\" [errorMessage]=\"errorMessage\" [required]=\"required\">\r\n        <div id=\"listboxgroup-lable\" (keydown)=\"onKeyDown($event)\">\r\n            <ul role=\"listboxgroup\" tabindex=\"0\" aria-labelledby=\"listboxgroup-lable\" #checkboxList class=\"usa-unstyled-list checkbox-container\">\r\n\r\n                <li (mouseenter)=\"onHover(i)\" [class]=\"option['highlighted']? 'selected-item':''\" *ngFor=\"let option of options; let i = index;\" role=\"option\" aria-checked=\"false\">\r\n\r\n                    <input [disabled]=\"option.disabled || disabled?'disabled':null \" [attr.id]=\"option.name\" [attr.value]=\"option.value\" [attr.type]=\"optionsMode\" [attr.aria-label]=\"option.name\" [required]=\"option.required\" [checked]=\"option.checked\" name=\"option\" (change)=\"onChecked($event,option)\">\r\n                    <label [attr.for]=\"option.name\">{{option.label}}</label>\r\n                </li>\r\n            </ul>\r\n            <ul #srOnly class=\"usa-sr-only\" aria-live=\"assertive\" aria-relevant=\"additions\"></ul>\r\n        </div>\r\n    </sy-fieldset-wrapper>\r\n</ng-template>",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(( /**
                                 * @return {?}
                                 */function () { return ListboxComponent; })),
                                multi: true
                            }],
                        styles: [".checkbox-container{position:relative;height:130px;max-height:145px;overflow-y:scroll;overflow-x:hidden;margin:10px;padding-left:10px}.selected-item{background-color:#0071bc;color:#fff}.listbox-width{max-width:500px}"]
                    }] }
        ];
        ListboxComponent.propDecorators = {
            model: [{ type: i0.Input }],
            options: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            hint: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            errorMessage: [{ type: i0.Input }],
            control: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            srOnly: [{ type: i0.ViewChild, args: ['srOnly',] }],
            checkboxListElement: [{ type: i0.ViewChild, args: ['checkboxList',] }],
            isSingleMode: [{ type: i0.Input }],
            modelChange: [{ type: i0.Output }],
            optionSelected: [{ type: i0.Output }],
            wrapper: [{ type: i0.ViewChild, args: [FieldsetWrapper,] }]
        };
        return ListboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/globaldatetime.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalDateTime = /** @class */ (function () {
        function GlobalDateTime() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        GlobalDateTime.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var datePipe = new common.DatePipe('en-US');
                value = datePipe.transform(value, 'MMM dd, yyyy hh:mm:ss a');
                return value;
            };
        GlobalDateTime.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'globaldatetime',
                    },] }
        ];
        return GlobalDateTime;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/copy-to-clipboard/copy-clipboard.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CopyClipboardComponent = /** @class */ (function () {
        function CopyClipboardComponent(renderer) {
            this.renderer = renderer;
            this.datasource = [];
            this.isIpad = false;
        }
        /**
         * @param {?} data
         * @return {?}
         */
        CopyClipboardComponent.prototype.getText = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                /** @type {?} */
                var copyText = '';
                copyText = JSON.stringify(data) + ',';
                // copyText = this.removeDuplicate(copyText, ',');
                return copyText;
            };
        /**
         * @param {?} str
         * @param {?} separator
         * @return {?}
         */
        CopyClipboardComponent.prototype.removeDuplicate = /**
         * @param {?} str
         * @param {?} separator
         * @return {?}
         */
            function (str, separator) {
                /** @type {?} */
                var a = str.split(separator);
                /** @type {?} */
                var x2 = [];
                for (var i in a) {
                    if (x2.indexOf(a[i]) == -1) {
                        x2.push(a[i]);
                    }
                }
                return x2.join(separator);
            };
        /**
         * @return {?}
         */
        CopyClipboardComponent.prototype.copyToClipboard = /**
         * @return {?}
         */
            function () {
                this.data = this.datasource;
                /** @type {?} */
                var copyText = this.getText(this.data);
                this.textArea = this.renderer.createElement('textArea');
                this.textArea.textContent = copyText;
                this.renderer.appendChild(document.body, this.textArea);
                this.selectText();
                document.execCommand('copy');
                this.renderer.removeChild(document.body, this.textArea);
            };
        /**
         * @return {?}
         */
        CopyClipboardComponent.prototype.isUserAgentiOS = /**
         * @return {?}
         */
            function () {
                return navigator.userAgent.match(/ipad|iphone/i);
            };
        /**
         * @return {?}
         */
        CopyClipboardComponent.prototype.selectText = /**
         * @return {?}
         */
            function () {
                if (this.isUserAgentiOS()) {
                    /** @type {?} */
                    var range = document.createRange();
                    range.selectNodeContents(this.textArea);
                    /** @type {?} */
                    var selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    this.textArea.setSelectionRange(0, 999999);
                }
                else {
                    this.textArea.select();
                }
            };
        CopyClipboardComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-copy-clipboard',
                        template: "<div class=\"export-card\">\r\n    <div class=\"action-button\">\r\n        <button class=\"fileter-button\" (click)=\"copyToClipboard()\">\r\n            <fa-icon [icon]=\"['far', 'copy']\" size=\"lg\"></fa-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div id=\"container\" style=\"display:none;\"></div>",
                        styles: [".export-card{padding:5px;margin:0 0 10px 10px;background:#fff;max-width:25rem}.unfiltered-icon{padding:1px;color:#4bc1d2;font-size:16px;border-radius:20px}.action-button button{margin-top:.5em;margin-right:1em;margin-bottom:.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.175rem;color:#fff;cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:1rem;line-height:1;outline:0;padding:.5rem;text-align:center;text-decoration:none;border:2px solid teal}.unfileter-button{background-color:#fff}.fileter-button{background-color:#4bc1d2}"]
                    }] }
        ];
        /** @nocollapse */
        CopyClipboardComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 }
            ];
        };
        CopyClipboardComponent.propDecorators = {
            datasource: [{ type: i0.Input }]
        };
        return CopyClipboardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/action-button/action-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ActionButtonComponent = /** @class */ (function () {
        function ActionButtonComponent() {
            /**
             * Disables the button
             */
            this.disabled = false;
            /**
             * EventEmitter that emits action name when button is clicked
             */
            this.emitAction = new i0.EventEmitter();
            /**
             * Emits the results of the callback
             */
            this.emitCallback = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        ActionButtonComponent.prototype.actionClicked = /**
         * @return {?}
         */
            function () {
                this.emitCallback.emit(this.action.callback());
                this.emitAction.emit(this.action);
            };
        ActionButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-action-button',
                        template: "<button type=\"button\"\n        (click)=\"actionClicked()\"\n        [disabled]=\"disabled\"\n        class=\"usa-button action-button\">\n  <!-- <span [ngClass]=\"action?.icon\"></span>&nbsp; -->\n  <fa-icon [icon]=\"action?.icon\" size=\"1x\"></fa-icon>&nbsp;\n  {{ action?.label }}\n</button>\n",
                        styles: [".action-button{margin-top:.5em;margin-right:.5em;margin-bottom:.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#4bc1d2;border:0;border-radius:.1875rem;color:#fff;cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:1rem;font-weight:700;line-height:1;outline:0;padding:1rem 2rem;text-align:center;text-decoration:none}"]
                    }] }
        ];
        ActionButtonComponent.propDecorators = {
            action: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            emitAction: [{ type: i0.Output }],
            emitCallback: [{ type: i0.Output }]
        };
        return ActionButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/audit-trail/audit-trail.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuditTrailComponent = /** @class */ (function () {
        function AuditTrailComponent() {
            this.dateFormat = 'MMM dd, yyyy hh:mm:ss a';
        }
        AuditTrailComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-audit-trail',
                        template: "<div class=\"audit-trail\">\n  <div>\n    <label>Last Modified :</label>\n    <label> {{lastModified  | date : dateFormat }}</label>\n  </div>\n  <div>\n    <label>Last Modified By :</label>\n    <label>\n      <a href=\"mailto:{{lastModifiedByEmail}}\">{{lastModifiedByEmail}}</a>\n    </label>\n  </div>\n  <div>\n    <label>Created :</label>\n    <label>{{created |  date : dateFormat}}</label>\n  </div>\n  <div>\n    <label>Created By :</label>\n    <label>\n      <a href=\"mailto:{{createdByEmail}}\">{{createdByEmail}}</a>\n    </label>\n  </div>\n</div>",
                        styles: [".audit-trail{background-color:#add8bb;min-height:100px;max-width:600px;padding:10px}.audit-trail div label{font-family:'Open Sans',sans-serif;font-size:14px;padding-top:5px;color:#000}.audit-trail div label:first-child{width:150px;font-weight:700;display:inline-table}.audit-trail div a{font-family:'Open Sans',sans-serif;font-size:14px;padding-top:5px}"]
                    }] }
        ];
        AuditTrailComponent.propDecorators = {
            lastModifiedByEmail: [{ type: i0.Input }],
            createdByEmail: [{ type: i0.Input }],
            created: [{ type: i0.Input }],
            lastModified: [{ type: i0.Input }],
            dateFormat: [{ type: i0.Input }]
        };
        return AuditTrailComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/history-table/history-table.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HistoryTableComponent = /** @class */ (function () {
        function HistoryTableComponent() {
            this.faExpand = freeSolidSvgIcons.faExpand;
            this.historyConfig = {
                title: ' Change History',
                dateHeaderText: 'Date',
                detailsHeaderText: 'Change',
            };
            this.isExpand = true;
        }
        /**
         * @param {?} isExpand
         * @return {?}
         */
        HistoryTableComponent.prototype.expand = /**
         * @param {?} isExpand
         * @return {?}
         */
            function (isExpand) {
                this.isExpand = !isExpand;
            };
        HistoryTableComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-history-table',
                        template: "<fieldset>\n  <legend>{{historyConfig.title}}</legend>\n  <table class=\"history-table\">\n    <thead>\n      <tr>\n        <th class=\"history-table-date-column\">\n          <div>{{historyConfig.dateHeaderText}}</div>\n        </th>\n        <th class=\"history-table-change-column history-text-container\">\n          <div>{{historyConfig.detailsHeaderText}}</div>\n          <div>\n            <button *ngIf=\"isExpand\" (click)=\"expand(isExpand)\" aria-label=\"expand more\">\n              <fa-icon [icon]=\"['fas', 'caret-up']\" size=\"2x\"></fa-icon>\n            </button>\n            <button *ngIf=\"!isExpand\" (click)=\"expand(isExpand)\" >\n              <fa-icon [icon]=\"['fas', 'caret-down']\" size=\"2x\"></fa-icon>\n              </button> \n           </div>\n        </th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"historyData?.length > 0\">\n      <tr *ngFor=\"let history of historyData\">\n        <td>\n          {{history.DateTimeChanged | globaldatetime}}\n        </td>\n        <td>\n          <div *ngIf=\"isExpand\" class=\"general-text\">\n            {{history.SummaryReason}}\n          </div>\n          <div *ngIf=\"!isExpand\" class=\"general-text\">\n            <div>{{history.DetailField}}</div>\n            <div>{{history.DetailOld}}</div>\n            <div>{{history.DetailNew}}</div>\n            <div>{{history.DetailChangedBy}}</div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</fieldset>",
                        styles: [".history-table tr td{text-align:left;border:1px solid #a69b97;padding:5px}.history-table tr th{text-align:left;border:1px solid #000;background-color:rgba(0,0,0,.65);padding:5px}.history-table thead tr th{text-align:left;min-height:20px;border:1px solid #a69b97;color:#fff;margin-right:5px}.history-table tr:nth-child(even){background-color:#efebe9;border:1px solid #a69b97}.history-table-date-column{min-width:100px;text-align:left}.history-table-change-column{min-width:300px;text-align:left}.history-table-change-column div{margin-top:8px}.history-table-change-column button{min-height:10px}fieldset{max-width:600px}table{border:2px solid #a69b97;border-collapse:collapse}button{background-color:transparent;border:none}fa-icon{color:#fff;text-align:left;margin:10px}.history-text-container{display:-webkit-box;display:flex;flex-wrap:wrap;text-align:center}.icon-end{text-align:end}"]
                    }] }
        ];
        HistoryTableComponent.propDecorators = {
            historyConfig: [{ type: i0.Input }],
            historyData: [{ type: i0.Input }]
        };
        return HistoryTableComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/alert/alert.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
            this.type = 'warning';
            /**
             * Controls whether to display/hide the Close button
             */
            this.showClose = false;
            /**
             * Explicitly defines that the alert must be dismissed by the user. Overrides
             * the dismiss timer. Defaults to 'false'
             */
            this.userMustDismiss = false;
            /**
             * Assign a timeout (in milliseconds) to dismiss the alert. 0 is the default
             * and is an infinite wait.
             */
            this.dismissTimer = 0;
            /**
             * Emitted event when an alert is dismissed
             */
            this.dismiss = new i0.EventEmitter();
            /**
             * Emitted event when toggling content
             */
            this.toggle = new i0.EventEmitter();
            this.types = {
                'error': { class: 'alert-error', sr: 'error alert' },
                'info': { class: 'alert-info', sr: 'info alert' },
                'success': { class: 'alert-success', sr: 'success alert' },
                'warning': { class: 'alert-warning', sr: 'warning alert' },
            };
            this.selectedIconTypes = {
                'success': freeSolidSvgIcons.faCheckCircle,
                'error': freeSolidSvgIcons.faExclamationTriangle,
                'info': freeSolidSvgIcons.faInfoCircle,
                'warning': freeSolidSvgIcons.faExclamationTriangle
            };
            this.selectedType = this.types.success.class;
            this.selectedIcon = this.selectedIconTypes.success;
        }
        /**
         * @return {?}
         */
        AlertComponent.prototype.typeNotDefined = /**
         * @return {?}
         */
            function () {
                if (!this.type || this.type.length === 0) {
                    return true;
                }
                if (!this.types[this.type]) {
                    return true;
                }
                return false;
            };
        /**
         * @return {?}
         */
        AlertComponent.prototype.closeAlert = /**
         * @return {?}
         */
            function () {
                this.onDismissClick();
            };
        /**
         * @return {?}
         */
        AlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.typeNotDefined()) {
                    this.selectedType = this.types[this.type].class;
                    this.selectedIcon = this.selectedIconTypes[this.type];
                }
                if (this.dismissTimer > 0 && !this.userMustDismiss) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.dismiss.emit();
                    }), this.dismissTimer);
                }
            };
        /**
         * @private
         * @return {?}
         */
        AlertComponent.prototype.onDismissClick = /**
         * @private
         * @return {?}
         */
            function () {
                this.dismiss.emit();
            };
        AlertComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-alert',
                        template: "<div [ngClass]=\"[selectedType]\">\r\n  <div class=\"alert-container\">\r\n    <div class=\"alert-body\">\r\n      <fa-icon [icon]=\"selectedIcon\" size=\"lg\"></fa-icon>\r\n      <span class=\"alert-header\">{{title}}</span>\r\n      <span class=\"sr-only\">{{this.types[this.type]?.sr}}</span>\r\n      <span class=\"float-right\" *ngIf=\"showClose\" (click)=\"closeAlert()\" tabindex=\"0\" (keyup.enter)=\"closeAlert()\">\r\n        <fa-icon icon=\"times-circle\" size=\"1x\">\r\n        </fa-icon>\r\n      </span>\r\n    </div>\r\n    <div class=\"alert-body\">\r\n      <p *ngIf=\"description\">{{description}}</p>\r\n      <div *ngIf=\"descriptionList?.length > 0\">\r\n        <ul *ngFor=\"let desc of descriptionList\" type=\"disc\">\r\n          <li>{{desc}}</li>\r\n        </ul>\r\n      </div>\r\n      <ng-content select=\"[main-content]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</div>",
                        styles: ["div{background:#fff}.float-right{float:right}.alert-body{padding:10px 5px}.alert-body fa-icon{margin-right:4px;margin-left:2px}.alert-error .alert-body,.alert-error .closeIcon{border-left:15px solid #ec1942!important}.alert-error .alert-body fa-icon,.alert-error .closeIcon fa-icon{color:#ec1942!important}.alert-error .alert-header{color:#ec1942}.alert-info .alert-body,.alert-info .closeIcon{border-left:10px solid #00a7cf}.alert-info .alert-body fa-icon,.alert-info .alert-header,.alert-info .closeIcon fa-icon{color:#00a7cf}.alert-success .alert-body,.alert-success .closeIcon{border-left:10px solid #4aa564}.alert-success .alert-body fa-icon,.alert-success .alert-header,.alert-success .closeIcon fa-icon{color:#4aa564}.alert-warning .alert-body,.alert-warning .closeIcon{border-left:10px solid #d84009}.alert-warning .alert-body fa-icon,.alert-warning .alert-header,.alert-warning .closeIcon fa-icon{color:#d84009}.alert-div{display:-webkit-box;display:flex;margin-bottom:15px;margin-top:15px;max-width:50em;font-size:16px}.alert-header{font-weight:600;font-size:20px;margin-bottom:5px;padding-left:5px}.alert-container{margin-bottom:15px;margin-top:15px;max-width:50em;font-size:16px;box-shadow:2px 1px 1px 1px rgba(85,84,84,.12)}"]
                    }] }
        ];
        AlertComponent.propDecorators = {
            type: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            description: [{ type: i0.Input }],
            descriptionList: [{ type: i0.Input }],
            showClose: [{ type: i0.Input }],
            userMustDismiss: [{ type: i0.Input }],
            dismissTimer: [{ type: i0.Input }],
            dismiss: [{ type: i0.Output }],
            toggle: [{ type: i0.Output }]
        };
        return AlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/alert-footer/alert-footer.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertFooterService = /** @class */ (function () {
        function AlertFooterService() {
            this.alerts = [];
        }
        /**
         * @return {?}
         */
        AlertFooterService.prototype.getAlerts = /**
         * @return {?}
         */
            function () {
                return this.alerts;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        AlertFooterService.prototype.registerFooterAlert = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                this.alerts.unshift(data);
            };
        /**
         * @param {?} i
         * @return {?}
         */
        AlertFooterService.prototype.dismissFooterAlert = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.alerts = this.alerts.filter(( /**
                 * @param {?} obj
                 * @param {?} idx
                 * @return {?}
                 */function (obj, idx) {
                    if (idx === i) {
                        return false;
                    }
                    return true;
                }));
            };
        AlertFooterService.decorators = [
            { type: i0.Injectable }
        ];
        return AlertFooterService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/alert-footer/alert-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertFooterComponent = /** @class */ (function () {
        function AlertFooterComponent(alertFooterService) {
            this.alertFooterService = alertFooterService;
            this.alerts = [];
            this.dismissAlert = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        AlertFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // this.alertFooterService.registerFooterAlert(this.alerts[0]);
                // this.refreshAlerts();
            };
        /**
         * @param {?} i
         * @return {?}
         */
        AlertFooterComponent.prototype.dismissFooterAlert = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                this.alertFooterService.dismissFooterAlert(i);
                this.dismissAlert.emit(true);
                this.refreshAlerts();
            };
        /**
         * @return {?}
         */
        AlertFooterComponent.prototype.refreshAlerts = /**
         * @return {?}
         */
            function () {
                this.alerts = this.alertFooterService.getAlerts();
            };
        AlertFooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-alert-footer',
                        template: "<div class=\"alert-fixed-footer\">\r\n    <sy-alert *ngFor=\"let alert of alerts; let i = index\" [dismissTimer]=\"alert.timer\" [showClose]=\"true\" [userMustDismiss]=\"alert.mustDismiss ? alert.mustDismiss : false\" [type]=\"alert.type\" [title]=\"alert.title\" [description]=\"alert.description\" [descriptionList]=\"alert.descriptionList\"\r\n        (dismiss)=\"dismissFooterAlert(i)\">\r\n    </sy-alert>\r\n</div>",
                        styles: [".alert-fixed-footer{min-width:300px;min-height:100px;position:absolute;z-index:1;bottom:0;right:0}"]
                    }] }
        ];
        /** @nocollapse */
        AlertFooterComponent.ctorParameters = function () {
            return [
                { type: AlertFooterService }
            ];
        };
        AlertFooterComponent.propDecorators = {
            alerts: [{ type: i0.Input }],
            dismissAlert: [{ type: i0.Output }]
        };
        return AlertFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dos-header/dos-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DosHeaderComponent = /** @class */ (function () {
        function DosHeaderComponent() {
            this.building = freeSolidSvgIcons.faBuilding;
            this.faNewspaper = freeSolidSvgIcons.faNewspaper;
            this.faComments = freeSolidSvgIcons.faComments;
            this.faMobileAlt = freeSolidSvgIcons.faMobileAlt;
        }
        /**
         * @return {?}
         */
        DosHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DosHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'dos-header',
                        template: "<div class=\"dos-header-toolbar\">\n    <div class=\"container clf-header\">\n        <div class=\"navbar-header\">\n            <a href=\"https://delaware.gov\">\n                <img src=\"https://gic.delaware.gov/wp-content/themes/dosgic_GIC_theme/img/delaware_global_d@2x.png\"\n                    alt=\"The Delaware.gov logo\" class=\"border_none delaware_d_logo\">\n            </a>\n            <a href=\"https://delaware.gov\">\n                <img src=\"https://gic.delaware.gov/wp-content/themes/dosgic_GIC_theme/img/delaware_global_text@2x.png\"\n                    alt=\"Delaware.gov - The Offical Website of the First State\" class=\"border_none delaware_text\">\n            </a>\n        </div>\n        <div class=\"masthead-nav\">\n            <ul>\n                <li>\n                    <a target=\"_blank\" href=\"http://delaware.gov/topics/agencylist_alpha\">\n                        <fa-icon [icon]=\"['far', 'building']\" size=\"lg\"></fa-icon>\n                        Agencies\n                    </a>\n                </li>\n                <li>\n                    <a target=\"_blank\" href=\"http://news.delaware.gov\">\n                        <fa-icon [icon]=\"['far', 'newspaper']\" size=\"lg\"></fa-icon>\n                        News\n                    </a>\n                </li>\n                <li>\n                    <a target=\"_blank\" href=\"http://delaware.gov/topics\">\n                        <fa-icon [icon]=\"['far', 'comments']\" size=\"lg\"></fa-icon>\n                        Topics\n                    </a>\n                </li>\n                <li>\n                    <a target=\"_blank\" href=\"http://delaware.gov/help/degov-contact.shtml\">\n                        <fa-icon [icon]=\"['fas', 'mobile-alt']\" size=\"lg\"></fa-icon>\n                        Contact\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>",
                        styles: [".dos-header-toolbar{max-height:80px;background-color:#4bc1d2;min-height:80px;margin:0;width:100%}.navbar-header{padding-right:50px;margin-top:10px}.navbar-header a{margin-bottom:10px;color:transparent}fa-icon{color:#fff;width:1.25em;height:1em;display:inline-block;margin-right:8px}.clf-header{margin-left:15px;margin-bottom:1px;background-color:#4bc1d2;color:#fff;border-top:10px solid #4bc1d2;border-bottom:10px solid #4bc1d2}.delaware_d_logo{margin-left:0;width:40px;height:40px}.delaware_text{margin-top:5px;margin-left:0;width:160px;height:30px}img{border:0;vertical-align:middle;max-width:10rem;margin-right:5px}.masthead-nav{display:inline-block;text-align:center}.masthead-nav ul li a{color:#fff;font-size:16px;font-weight:700;font-family:\"Open Sans\",sans-serif!important;text-decoration:none;padding-bottom:15px;border-bottom:2px solid transparent;margin-right:20px;max-width:2rem}.masthead-nav>ul>li>a:hover{margin-bottom:10px;border-bottom:2px solid rgba(255,255,255,.25)}.title{margin-top:15px;padding-right:5px}.container{display:-webkit-box;display:flex;flex-wrap:wrap}ul{display:-webkit-box;display:flex;list-style:none}@media only screen and (min-device-width:320px) and (max-device-width:580px){.masthead-nav{display:none}}"]
                    }] }
        ];
        /** @nocollapse */
        DosHeaderComponent.ctorParameters = function () { return []; };
        return DosHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/progress-bar/progress-bar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ProgressIndicatorType = {
        Percent: "percent",
        Nonnumerical: "nonnumerical",
    };
    var ProgressBarComponent = /** @class */ (function () {
        function ProgressBarComponent() {
            /**
             * Whether the progress should be represented as a percent
             * or a non-numerical value.
             */
            this.type = ProgressIndicatorType.Percent;
            /**
             * The minimum value in the range. If the type is non-numerical,
             * a default number is provided to calculate the progress for
             * screen reader users.
             */
            this.min = 0;
            /**
             * The maximum value in the range. If the type is non-numerical,
             * a default number is provided to calculate the progress for
             * screen reader users.
             */
            this.max = 100;
        }
        /**
         * Calculates the bar fill percentage of the progress bar.
         */
        /**
         * Calculates the bar fill percentage of the progress bar.
         * @return {?}
         */
        ProgressBarComponent.prototype.calculateBarFillPercentage = /**
         * Calculates the bar fill percentage of the progress bar.
         * @return {?}
         */
            function () {
                return Math.min((Math.floor((Math.max(0, this.value) / this.max) * 100)), 100) + '%';
            };
        ProgressBarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-progress-bar',
                        template: "<div class=\"progress\">\n    <div class=\"label\">{{ valueAsText }}</div>\n    <ng-container *ngTemplateOutlet=\"type === 'percent' ? percent : time\"></ng-container>\n  </div>\n  \n  <ng-template #percent>\n    <!-- Percent template -->\n    <div class=\"bar\">\n      <div class=\"fill animated\"\n        [style.width]=\"calculateBarFillPercentage()\"\n        role=\"progressbar\"\n        [attr.aria-valuenow]=\"value\"\n        [attr.aria-valuemin]=\"min\"\n        [attr.aria-valuemax]=\"max\"></div>\n    </div>\n  </ng-template>\n  \n  <ng-template #time>\n    <!-- Text value template -->\n    <div class=\"bar\">\n      <div class=\"fill animated\"\n        [style.width]=\"calculateBarFillPercentage()\"\n        role=\"progressbar\" \n        [attr.aria-valuenow]=\"value\"\n        [attr.aria-valuemin]=\"min\"\n        [attr.aria-valuemax]=\"max\"\n        [attr.aria-valuetext]=\"valueAsText\"></div>\n    </div>\n  </ng-template>",
                        styles: [".bar .fill{height:1rem;border-radius:4px;background-color:#4bc1d2;box-shadow:0 0 1px 1px rgba(0,0,0,.25),inset 0 1px rgba(255,255,255,.1)}.bar .fill.animated{-webkit-transition:width .4s linear;transition:width .4s linear}"]
                    }] }
        ];
        ProgressBarComponent.propDecorators = {
            type: [{ type: i0.Input }],
            min: [{ type: i0.Input }],
            max: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            valueAsText: [{ type: i0.Input }]
        };
        return ProgressBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/toolbar/toolbar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ToolbarComponent = /** @class */ (function () {
        function ToolbarComponent() {
            this.toolbarEl = document.querySelector('.toolbar');
            this.toggleBtnEl = document.querySelector('.toolbar-toggle-button');
            this.toolbarExpandCtnEl = document.querySelector('.toolbar-expanded-content');
            // toggleBtnEl.addEventListener('click', function (event) {
            //   toggleBtnEl.classList.toggle('expanded');
            //   if (toggleBtnEl.classList.contains('expanded')) {
            //     toolbarEl.classList.add('expanded');
            //     toolbarExpandCtnEl.classList.add('open');
            //     toggleBtnEl.querySelector('span').innerHTML = 'Expand';
            //   } else {
            //     toolbarEl.classList.remove('expanded');
            //     toolbarExpandCtnEl.classList.remove('open');
            //     toggleBtnEl.querySelector('span').innerHTML = 'Collapse';
            //   }
            //   event.preventDefault();
            // });
            // Array.prototype.slice.call(document.querySelectorAll('.accordion')).forEach(function (accordion) {
            //   const accordionTriggerEl = accordion.querySelector('.accordion-header a');
            //   accordionTriggerEl.addEventListener('click', ((event) => {
            //     accordion.classList.toggle('open');
            //     event.preventDefault();
            //   }));
            // });
            // Array.prototype.slice.call(document.querySelectorAll('.filters')).forEach(function (filter) {
            //   const filterTriggerEl = filter.querySelector('.filter-header a');
            //   const filterContentEl = filter.querySelector('.filter-content');
            //   filterTriggerEl.addEventListener('click', ((event) => {
            //     filterContentEl.classList.toggle('open');
            //     event.preventDefault();
            //   }));
            // });
        }
        ToolbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-toolbar',
                        template: "<div class=\"page\">\n  <div class=\"toolbar\">\n\n    <div class=\"toolbar-dropdown\">\n      <div class=\"toolbar-select\">\n        <a class=\"toolbar-toggle-button collapsed\" href=\"\">\n          <span>Collapse</span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"toolbar-expanded-content\">\n      <div class=\"accordion\">\n        <div class=\"accordion-header\">\n          <a href=\"\">Navigation</a>\n        </div>\n        <div class=\"accordion-content\">\n          <nav>\n            <ul class=\"usa-sidenav\">\n              <li class=\"usa-sidenav__item\">\n                <a href=\"\">Parent link</a>\n              </li>\n              <li class=\"usa-sidenav__item\">\n                <a href=\"\" class=\"usa-current\">Current page</a>\n                <ul class=\"usa-sidenav__sublist\">\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\" class=\"usa-current\">Child link</a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"usa-sidenav__item\">\n                <a href=\"\">Parent link</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n      <div class=\"accordion\">\n        <div class=\"accordion-header\">\n          <a href=\"\">Filters</a>\n        </div>\n        <div class=\"accordion-content\">\n          <div class=\"filters\">\n            <div class=\"filter\">\n              <div class=\"filter-header\">\n                <a href=\"\">Service Classifications</a>\n              </div>\n              <div class=\"filter-content\">\n                <label class=\"usa-label\" for=\"input-type-naics\">NAICS</label>\n                <input class=\"usa-input\" id=\"input-type-naics\" name=\"input-type-naics\" type=\"text\">\n                <div class=\"selected-chips\">\n                  <span class=\"sam-tag sam-tag--chip\">\n                    111140 -- Wheat Farming\n                    <button class=\"sam-tag__close\">\n                      <span class=\"fas fa-times\" aria-hidden=\"true\"></span>\n                    </button>\n                  </span>\n                  <span class=\"sam-tag sam-tag--chip\">\n                    212222 -- Silver Ore Mining\n                    <button class=\"sam-tag__close\">\n                      <span class=\"fas fa-times\" aria-hidden=\"true\"></span>\n                    </button>\n                  </span>\n                  <span class=\"sam-tag sam-tag--chip\">\n                    541850 -- Outdoor Advertising\n                    <button class=\"sam-tag__close\">\n                      <span class=\"fas fa-times\" aria-hidden=\"true\"></span>\n                    </button>\n                  </span>\n                </div>\n                <label class=\"usa-label\" for=\"input-type-psc\">PSC</label>\n                <input class=\"usa-input\" id=\"input-type-psc\" name=\"input-type-psc\" type=\"text\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"page-content-header\">\n    Showing 1 to 10 of 21 registrations\n  </div>\n\n  <div class=\"page-content\">\n    <h3>Frontier Allied Partners, Inc</h3>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet faucibus arcu id bibendum. Mauris eleifend\n      massa purus, eu volutpat erat placerat egestas.\n    </p>\n  </div>\n</div>\n\n",
                        styles: [".toolbar{display:inline-block;border:1px solid #fff;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2}.toolbar.expanded{border:1px solid #d8d8d8;width:300px;box-shadow:0 14px 24px 0 rgba(0,0,0,.06);border-radius:1px;-ms-grid-column-span:3;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:2;grid-row-end:3}.toolbar.expanded .toolbar-dropdown{padding:10px 15px}.toolbar-dropdown{position:relative;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.toolbar-select{background-color:#f7f9fa;border:1px solid #979797;padding:6px;border-radius:4px;width:45px;height:44px}.toolbar-toggle-button{background-color:#fff;display:block;width:31px;height:29px;border:1px solid #000;padding:5px;border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,.29)}.toolbar-toggle-button span{position:absolute;left:-999em}.toolbar-toggle-button::before{content:'';display:block;background-color:#eff6fb;border:2px solid #112f4e;width:9px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.toolbar-toggle-button:hover::before{background-color:#b7f5bd}.toolbar-toggle-button.collapsed::before{height:9px}.toolbar-toggle-button.expanded::before{height:18px}.toolbar-expanded-content{opacity:0;display:none;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}.toolbar-expanded-content.open{opacity:1;display:block}.accordion{padding:12px 16px;border-top:1px solid #d8d8d8;border-bottom:1px solid #d8d8d8;border-left:1px solid #d8d8d8;border-right:1px solid #d8d8d8;background-color:#fff;margin-left:-1px;margin-right:-1px;margin-bottom:6px}.accordion.open{background-color:#eff6fb;box-shadow:inset 0 1px 7px 0 rgba(30,75,198,.16);border-left:1px solid #aac0d0;border-right:1px solid #aac0d0;border-color:#aac0d0;-webkit-transition:.2s ease-in;transition:.2s ease-in}.accordion-header a{font-size:16px;font-weight:600;color:#373737;text-decoration:none;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.accordion.open .accordion-header a{color:#0a3466}.accordion-content{display:none}.accordion.open .accordion-content{padding-top:10px;display:block}.page{margin:20px;display:-ms-grid;display:grid;-ms-grid-columns:80px 235px auto;grid-template-columns:80px 235px auto;-ms-grid-rows:46px auto;grid-template-rows:46px auto}.page-content-header{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:-3;grid-column-end:-1;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2;-ms-grid-row-align:center;align-self:center}.toolbar.expanded+.page-content-header{-ms-grid-column:3;grid-column-start:3}.page-content{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:-2;grid-column-end:-1;-ms-grid-row:2;grid-row-start:2;-ms-grid-row-span:-3;grid-row-end:-1}.toolbar.expanded+.page-content-header+.page-content{-ms-grid-column:3;grid-column-start:3}.accordion-content nav{border:2px solid #d6d7d9;border-radius:0 6px 6px 0;background-color:#fff}.accordion-content nav .usa-sidenav{border-bottom:none}.filters .filter-header a{text-decoration:none;color:#323a45;font-weight:600}.filters .filter-content{display:none;background:#fff;box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.5)}.filters .filter-content.open{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;margin-top:12px;margin-left:-10px;margin-right:-10px;padding:0 10px 15px}.filters .filter-content .selected-chips{margin-top:5px}"]
                    }] }
        ];
        return ToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/export/export.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExportComponent = /** @class */ (function () {
        function ExportComponent(renderer) {
            this.renderer = renderer;
            this.fileName = 'export-data';
            this.datasource = [];
            this.isIpad = false;
        }
        /**
         * @return {?}
         */
        ExportComponent.prototype.exportAsExcelFile = /**
         * @return {?}
         */
            function () {
                if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    this.isIpad = true;
                }
                else {
                    this.isIpad = false;
                    this.data = this.datasource;
                    this.fileName = this.fileName + '.csv';
                    /** @type {?} */
                    var csvRows_1 = [];
                    /** @type {?} */
                    var csvheader = [];
                    /** @type {?} */
                    var csvString = '';
                    for (var key in this.data[0]) {
                        if (key) {
                            csvheader.push(key);
                        }
                    }
                    csvRows_1.push(csvheader);
                    this.data.forEach(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        /** @type {?} */
                        var csvrow = [];
                        for (var i in item) {
                            if (i) {
                                csvrow.push('"' + item[i] + '"');
                            }
                        }
                        csvRows_1.push(csvrow);
                    }));
                    csvString = csvRows_1.join('\r\n');
                    if (navigator.msSaveBlob) { // IE 10+
                        // IE 10+
                        /** @type {?} */
                        var blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                        navigator.msSaveBlob(blob, this.fileName);
                    }
                    else {
                        /** @type {?} */
                        var csvdatacontent = 'data:text/csv;charset=utf-8,' + csvString;
                        /** @type {?} */
                        var encodedUri = encodeURI(csvdatacontent);
                        /** @type {?} */
                        var tempLink = document.createElement('a');
                        tempLink.setAttribute('href', encodedUri);
                        tempLink.setAttribute('download', this.fileName);
                        document.getElementById('container').appendChild(tempLink);
                        tempLink.click();
                    }
                }
            };
        ExportComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-export',
                        template: "<div class=\"export-card\">\r\n    <div class=\"action-button\">\r\n        <button class=\"fileter-button\" [disabled]=\"isIpad\" (click)=\"exportAsExcelFile()\">\r\n            <fa-icon [icon]=\"['fas', 'file-export']\" size=\"lg\"></fa-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div id=\"container\" style=\"display:none;\"></div>",
                        styles: [".export-card{padding:5px;margin:0 0 10px 10px;background:#fff;max-width:25rem}.unfiltered-icon{padding:1px;color:#4bc1d2;font-size:16px;border-radius:20px}.action-button button{margin-top:.5em;margin-right:1em;margin-bottom:.5em;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.175rem;color:#fff;cursor:pointer;display:inline-block;font-family:'Open Sans',sans-serif;font-size:1rem;line-height:1;outline:0;padding:.5rem;text-align:center;text-decoration:none;border:2px solid teal}.unfileter-button{background-color:#fff}.fileter-button{background-color:#4bc1d2}"]
                    }] }
        ];
        /** @nocollapse */
        ExportComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 }
            ];
        };
        ExportComponent.propDecorators = {
            fileName: [{ type: i0.Input }],
            datasource: [{ type: i0.Input }]
        };
        return ExportComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/required-message/required-message.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RequiredMessageComponent = /** @class */ (function () {
        function RequiredMessageComponent() {
            this.message = 'All (*) fields are required';
        }
        RequiredMessageComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-required-message',
                        template: "<div class=\"msg-container\">\n                <div class=\"label-align-right\">\n                <label>{{message}}</label>\n                </div>              \n            </div>",
                        styles: ["\n  .msg-container {\n    display: flex;\n    color: red;\n  }\n  .label-align-right {\n    flex:1;\n    text-align: right;\n   }\n  "]
                    }] }
        ];
        RequiredMessageComponent.propDecorators = {
            message: [{ type: i0.Input }]
        };
        return RequiredMessageComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/dos-footer/dos-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'dos-footer',
                        template: "<div id=\"footer\">\n    <div class=\"container\">\n        <h1 class=\"main_footer\">{{footerTitle}}</h1>\n        <hr>\n        <ng-container *ngTemplateOutlet=\"mainRowTemplate\"></ng-container>\n\n        <hr>\n        <div class=\"row\">\n            <ng-container *ngTemplateOutlet=\"socialMediaTemplate\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<ng-template #mainRowTemplate>\n    <div class=\"row\">\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec1 of footerSection1\">\n                <a href=\"sec1.path\">{{sec1.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec2 of footerSection2\">\n                <a href=\"sec2.path\">{{sec2.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec3 of footerSection3\">\n                <a href=\"sec3.path\">{{sec3.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec4 of footerSection4\">\n                <a *ngIf=\"!hasLogo\" href=\"sec4.path\">{{sec4.label}}</a>\n            </p>\n            <img *ngIf=\"hasLogo\" [src]=\"imageInfo.path\" [alt]=\"imageInfo.label\" class=\"hidden-xs img-responsive\">\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #socialMediaTemplate>\n    <div class=\"social center-block\">\n        <div class=\"social_facebook\">\n            <a href=\"https://www.facebook.com/delaware.gov\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-facebook-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"facebook-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_twitter\">\n            <a href=\"https://twitter.com/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-twitter-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"twitter-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_flickr\">\n            <a href=\"https://www.flickr.com/groups/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-flickr fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"flickr\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_youtube\">\n            <a href=\"https://www.youtube.com/user/DelawareGovernment\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-youtube-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"youtube-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_rss\">\n            <a href=\"https://www.instagram.com/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-instagram fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"instagram\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\">\n                    </path>\n                </svg></a>\n        </div>\n    </div>\n</ng-template>",
                        styles: [".container{padding:15px;display:block;-webkit-box-flex:1;flex:1}.main_footer{font-family:\"Open Sans\",Helvetica,Arial,sans-serif;font-weight:500;color:#fff!important;font-size:40px;margin-top:20px}h1{color:#fff!important}hr{-moz-border-bottom-colors:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;-webkit-border-image:none;-o-border-image:none;border-image:none;border:1px solid #fff;margin-bottom:20px;margin-top:20px;color:#fff;width:100%}p{color:#fff;display:block;margin:0;padding:0;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0}#footer a,#footer a:link,#footer a:visited{text-decoration:none;color:#fff;-webkit-transition:.5s;transition:.5s;font-size:16px;font-family:\"Open Sans\",Helvetica,Arial,sans-serif}.row{margin-right:-15px;margin-left:-15px}.content-container{width:22%;float:left;position:relative;min-height:1px;padding-right:15px;padding-left:15px;padding-bottom:25px}div{display:block}.img-responsive>img{display:block;max-width:100%;height:auto}.pull-right{float:right!important}.col-lg-4{float:left;width:33.33333333%;position:relative;min-height:1px;padding-right:15px;padding-left:15px}#footer{background-color:#2d3032;font-size:15px;min-height:100%;clear:both;display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1;line-height:1.5rem;max-height:40rem;width:100%;color:#fff}.social{max-width:500px;max-width:500px;display:block;margin-left:20px}.center-block{width:22%;margin-right:10px}.social_facebook{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_facebook img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_facebook img.top:hover{opacity:0;height:50px;width:50px}.social_twitter{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_twitter img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_twitter img.top:hover{opacity:0;height:50px;width:50px}.social_flickr{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_flickr img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_flickr img.top:hover{opacity:0;height:50px;width:50px}.social_youtube{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_youtube img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_youtube img.top:hover{opacity:0;height:50px;width:50px}.social_rss{position:relative;height:50px;width:50px;margin:0 auto;display:inline-block}.social_rss img{position:absolute;left:0;height:50px;width:50px;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.social_rss img.top:hover{opacity:0;height:50px;width:50px}.footer_logo{float:left;margin-right:5px;border:0;width:50px;height:50px}img{vertical-align:middle;border:0}@media (max-width:624px){.content-container{width:90%;float:none;align-content:center}.row{margin-left:15%;text-align:left}.main_footer{font-family:\"Open Sans\",Helvetica,Arial,sans-serif;font-weight:500;color:#fff!important;font-size:25px;margin-top:20px}.img-responsive>img{display:block;max-width:80%;height:auto;text-align:center;margin-left:-5%!important}#footer{max-height:100rem}}"]
                    }] }
        ];
        DosFooterComponent.propDecorators = {
            footerTitle: [{ type: i0.Input }],
            footerSection1: [{ type: i0.Input }],
            footerSection4: [{ type: i0.Input }],
            imageInfo: [{ type: i0.Input }],
            hasLogo: [{ type: i0.Input }],
            footerSection3: [{ type: i0.Input }],
            footerSection2: [{ type: i0.Input }]
        };
        return DosFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/download/download.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DownloadComponent = /** @class */ (function () {
        function DownloadComponent() {
            /**
             * model for populating downloads
             */
            this.packages = [];
            /**
             * pass in an attachment error to trigger a message
             */
            this.attachmentError = false;
        }
        /**
         * @return {?}
         */
        DownloadComponent.prototype.hasPublicPackages = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                try {
                    for (var _b = __values(this.packages), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var pkg = _c.value;
                        if (pkg.access.toLowerCase() === 'public') {
                            return true;
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                return false;
            };
        /**
         * @param {?} card
         * @return {?}
         */
        DownloadComponent.prototype.toggleAccordion = /**
         * @param {?} card
         * @return {?}
         */
            function (card) {
                card.accordionState =
                    card.accordionState === 'expanded' ? 'collapsed' : 'expanded';
            };
        /**
         * @param {?} field
         * @return {?}
         */
        DownloadComponent.prototype.isSecure = /**
         * @param {?} field
         * @return {?}
         */
            function (field) {
                if (field.toLowerCase() === 'public') {
                    return 'Public';
                }
                else {
                    return 'Secured';
                }
            };
        DownloadComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-download',
                        template: "<section>\r\n  <div class=\"download-container-header\">\r\n    <h2>Packages</h2>\r\n    <ng-container *ngIf=\"packages\">\r\n      <span class=\"download-button\">\r\n        <a class=\"usa-button-small usa-button-gray\" *ngIf=\"hasPublicPackages() && downloadAllUrl\"\r\n          [attr.href]=\"downloadAllUrl\">\r\n          <!-- <span class=\"fa fa-cloud-download\" aria-hidden=\"true\"></span> -->\r\n          <fa-icon [icon]=\"['fas', 'cloud-download-alt']\" size=\"lg\"></fa-icon>\r\n          <span>Download All Packages</span>\r\n        </a>\r\n      </span>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"packages && packages.length > 0\">\r\n    <div class=\"card download-container\" *ngFor=\"let package of packages\">\r\n      <!-- It's public -->\r\n      <div *ngIf=\"package.access.toLowerCase() === 'public'\" class=\"card-header {{ package.accordionState }}\"\r\n        (click)=\"toggleAccordion(package)\" tabindex=\"0\" (keyup.enter)=\"toggleAccordion(package)\">\r\n        <h3>{{ package.name }} ({{ package.resources?.length }})</h3>\r\n        <strong>Type: {{ package.type }}</strong>\r\n      </div>\r\n\r\n      <span *ngIf=\"package.access.toLowerCase() === 'public' && package.downloadUrl\" class=\"download-button\">\r\n        <a class=\"usa-button-small usa-button-gray\" [attr.href]=\"package.downloadUrl\">\r\n          <fa-icon [icon]=\"['fas', 'cloud-download-alt']\" size=\"lg\"></fa-icon>\r\n          <span>Download</span>\r\n        </a>\r\n      </span>\r\n\r\n      <ul *ngIf=\"package.access.toLowerCase() === 'public'\" [@accordion]=\"package.accordionState\"\r\n        class=\"usa-zebra-list\">\r\n        <li *ngFor=\"let resource of package.resources\">\r\n          <div class=\"download-info\">\r\n            <fa-icon [icon]=\"resource.typeInfo.iconClass\" size=\"1x\"></fa-icon>&nbsp;\r\n            <span class=\"download-info-icon\">\r\n              <span class=\"{{resource.typeInfo.iconClass}}\"></span>\r\n            </span>\r\n            <span class=\"download-info-link\">\r\n              <a [attr.href]=\"resource.downloadUrl\">\r\n                {{resource.description}}\r\n                <sup *ngIf=\"resource.size && resource.size != 0\">\r\n                  {{resource.size }}\r\n                </sup>\r\n              </a>\r\n            </span>\r\n            <span class=\"download-info-type\">\r\n              {{resource.typeInfo.name}}\r\n            </span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Its private -->\r\n      <div *ngIf=\"package.access.toLowerCase() === 'private'\" class=\"card-header-secure\">\r\n        <h3>{{ package.name }} ({{ package.resources?.length }})</h3>\r\n        <strong>Type: {{ package.type }}</strong>\r\n      </div>\r\n\r\n      <div *ngIf=\"package.access.toLowerCase() === 'private'\" class=\"card-secure-content\">\r\n        <p>\r\n          <fa-icon [icon]=\"['fas', 'lock']\" size=\"lg\"></fa-icon>\r\n          <em>Secure/sensitive attachments are not currently available, please go to <a\r\n              href=\"https://www.fbo.gov/\">FBO.gov</a> to view this attachment.</em>\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Extra options -->\r\n      <div class=\"card-extra-content\">\r\n        <div class=\"label-container-inline\">\r\n          <fa-icon [icon]=\"['far', 'calendar-check']\" size=\"lg\"></fa-icon>\r\n\r\n          <strong>Posted on {{ package.postedDate }}</strong>\r\n        </div>\r\n        <div class=\"label-container-inline package-access\">\r\n          <fa-icon [icon]=\"['fas', 'unlock']\" size=\"lg\"></fa-icon>\r\n          <strong>{{isSecure(package.access)}}</strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"card\" *ngIf=\"packages.length < 1 && !attachmentError\">\r\n    <div class=\"card-secure-content usa-text-center\">\r\n      <fa-icon [icon]=\"['fas', 'spinner']\" size=\"lg\"></fa-icon>\r\n      <strong>Loading &hellip;</strong>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"packages.length < 1 && attachmentError\">\r\n    <div class=\"card-secure-content usa-text-center\">\r\n      <strong>No packages uploaded.</strong>\r\n    </div>\r\n  </div>\r\n</section>",
                        animations: [
                            animations.trigger('accordion', [
                                animations.state('collapsed', animations.style({
                                    height: '0px',
                                })),
                                animations.state('expanded', animations.style({
                                    height: '*',
                                })),
                                animations.transition('collapsed => expanded', animations.animate('100ms ease-in')),
                                animations.transition('expanded => collapsed', animations.animate('100ms ease-out'))
                            ]),
                            animations.trigger('intro', [
                                animations.state('fade', animations.style({
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                })),
                                animations.transition('void => *', [
                                    animations.style({
                                        opacity: 0,
                                        transform: 'translateY(-30%)'
                                    }),
                                    animations.animate('.5s .5s cubic-bezier(0.175, 0.885, 0.320, 1.275)')
                                ]),
                                animations.transition('* => void', [
                                    animations.animate('.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)', animations.style({
                                        opacity: 0,
                                        transform: 'translateY(-30%)'
                                    }))
                                ])
                            ])
                        ]
                    }] }
        ];
        DownloadComponent.propDecorators = {
            packages: [{ type: i0.Input }],
            attachmentError: [{ type: i0.Input }],
            downloadAllUrl: [{ type: i0.Input }]
        };
        return DownloadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/point-of-contact/point-of-contact.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PointOfContactComponent = /** @class */ (function () {
        function PointOfContactComponent() {
        }
        PointOfContactComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-poc',
                        template: "<div class=\"sy-poc\">\r\n    <span class=\"sy-fullname\" *ngIf=\"data.fullName\">{{data.fullName}}<br></span>\r\n    <ng-container *ngIf=\"data.title\">{{data.title}}</ng-container>\r\n    <ng-container *ngIf=\"data.address\">{{data.address}}, <br></ng-container>\r\n    <ng-container *ngIf=\"data.address2\">{{data.address2}}<br /></ng-container>\r\n    <ng-container *ngIf=\"data.city || data.state || data.zip\">\r\n        <ng-container *ngIf=\"data.city\">{{data.city}}, </ng-container>\r\n        <ng-container *ngIf=\"data.state\">{{data.state}} </ng-container>\r\n        <ng-container *ngIf=\"data.zip\">{{data.zip}}</ng-container><br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.email\">\r\n        <fa-icon [icon]=\"['far', 'envelope']\" size=\"16px\"></fa-icon>\r\n        <a href=\"mailto:{{data.email}}\">{{data.email}}</a> <br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.phone\">\r\n        <fa-icon [icon]=\"['fas', 'phone']\" size=\"16px\"></fa-icon>\r\n\r\n        {{data.phone}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.phone2\">\r\n        <fa-icon [icon]=\"['fas', 'phone']\" size=\"16px\"></fa-icon>\r\n        {{data.phone2}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.fax\">\r\n        <fa-icon [icon]=\"['fas', 'fax']\" size=\"16px\"></fa-icon> {{data.fax}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.website\">\r\n        <fa-icon [icon]=\"['fas', 'globe']\" size=\"16px\"></fa-icon>\r\n        {{data.website}}<br>\r\n    </ng-container>\r\n</div>",
                        styles: [".sy-fullname{font-size:16px;font-weight:700;margin:0 5px 0 0}fa-icon{color:teal;margin-right:10px}.sy-poc{margin:10px}"]
                    }] }
        ];
        PointOfContactComponent.propDecorators = {
            data: [{ type: i0.Input }]
        };
        return PointOfContactComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/video/video.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VideoPlayerComponent = /** @class */ (function () {
        function VideoPlayerComponent() {
        }
        VideoPlayerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'sy-video-player',
                        template: "<div class=\"video-container\">\r\n    <h3>{{videoConfig.title}}</h3>\r\n    <video width=\"490\" [poster]=\"videoConfig.poster\" crossorigin=\"anonymous\" controls [title]=\"videoConfig.title\"\r\n        #videoPly>\r\n        <source [src]=\"videoConfig.videoUrl\" type=\"video/mp4\" #videoSrc />\r\n        <track kind=\"captions\" label=\"English captions\" [src]=\"videoConfig.captionsUrl\" srclang=\"en\" default\r\n            #videoTrack />\r\n    </video>\r\n    <div class=\"video-description\">\r\n        <p> {{videoConfig.description}}</p>\r\n    </div>\r\n</div>",
                        styles: [".video-description{max-width:450px;word-break:break-word;font-family:'Open Sans',sans-serif!important;font-size:16px}h3{color:#add8bb!important}.video-description a{font-size:12px}.video-container{width:450px;max-width:450px}"]
                    }] }
        ];
        VideoPlayerComponent.propDecorators = {
            videoConfig: [{ type: i0.Input }]
        };
        return VideoPlayerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/component.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENT_COMPONENTS = [
        AuditTrailComponent,
        GlobalDateTime,
        HistoryTableComponent,
        AlertComponent,
        AlertFooterComponent,
        DosHeaderComponent,
        ProgressBarComponent,
        ActionButtonComponent,
        ToolbarComponent,
        ExportComponent,
        RequiredMessageComponent,
        DosFooterComponent,
        DownloadComponent,
        PointOfContactComponent,
        CopyClipboardComponent,
        VideoPlayerComponent,
    ];
    var ComponentModule = /** @class */ (function () {
        function ComponentModule() {
        }
        ComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angularFontawesome.FontAwesomeModule,
                            forms.ReactiveFormsModule
                        ],
                        declarations: __spread(COMPONENT_COMPONENTS),
                        exports: __spread(COMPONENT_COMPONENTS),
                        providers: [AlertFooterService]
                    },] }
        ];
        return ComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/drag-drop/drag-drop.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var DragState = {
        NotDragging: 0,
        DraggingInTarget: 1,
        DraggingOutsideTarget: 2,
    };
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
            this.dragStateChange = new i0.EventEmitter();
            /**
             * Emitter for drop events
             */
            this.dropEvent = new i0.EventEmitter();
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
            { type: i0.Directive, args: [{
                        selector: '[syDragDrop]',
                    },] }
        ];
        /** @nocollapse */
        DragDropDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        DragDropDirective.propDecorators = {
            disabled: [{ type: i0.Input }],
            dragState: [{ type: i0.Input }],
            dragStateChange: [{ type: i0.Output }],
            dropEvent: [{ type: i0.Output }],
            onElementDrop: [{ type: i0.HostListener, args: ['drop', ['$event'],] }],
            onElementDragOver: [{ type: i0.HostListener, args: ['dragover', ['$event'],] }],
            onElementDragend: [{ type: i0.HostListener, args: ['dragleave', ['$event'],] }],
            onWindowDragover: [{ type: i0.HostListener, args: ['window:dragover', ['$event'],] }],
            onWindowDrop: [{ type: i0.HostListener, args: ['window:drop', ['$event'],] }]
        };
        return DragDropDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/upload/upload.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var UploadStatus = {
        Initial: 0,
        Uploading: 1,
        Done: 2,
        Error: 3,
    };
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
    /**
     * @param {?} list
     * @return {?}
     */
    function toArray(list) {
        return Array.prototype.slice.call(list);
    }
    /** @type {?} */
    var VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(( /**
         * @return {?}
         */function () { return UploadComponent; })),
        multi: true
    };
    var UploadValidator;
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
            var atLeastOneDone = model.some(( /**
             * @param {?} uf
             * @return {?}
             */function (uf) {
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
            this.onModelFilesChanges = new i0.EventEmitter();
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
                var ufs = asArray.map(( /**
                 * @param {?} f
                 * @return {?}
                 */function (f) {
                    return {
                        file: f,
                        upload: new Upload()
                    };
                }));
                this.validateFiles(ufs);
                // concat old items and new items
                this._model = __spread(this._model, ufs);
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
                ufs.forEach(( /**
                 * @param {?} uf
                 * @return {?}
                 */function (uf) {
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
                ufs.forEach(( /**
                 * @param {?} uf
                 * @return {?}
                 */function (uf) {
                    var upload = uf.upload;
                    if (upload.status !== UploadStatus.Initial) {
                        return;
                    }
                    upload.status = UploadStatus.Uploading;
                    /** @type {?} */
                    var httpEvent$ = _this._getHttpEventSteam(uf);
                    upload.subscription = httpEvent$.subscribe(( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) {
                        if (event.type === http.HttpEventType.UploadProgress) {
                            upload.progress = event.loaded / event.total;
                        }
                        else if (event instanceof http.HttpHeaderResponse) {
                            upload.status = UploadStatus.Done;
                        }
                        else if (event instanceof http.HttpErrorResponse) {
                            upload.status = UploadStatus.Error;
                        }
                        if (event.ok === false) {
                            upload.error = 'Upload failed';
                            upload.status = UploadStatus.Error;
                            _this.emit();
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
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
                    }), ( /**
                     * @return {?}
                     */function () {
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
                this._model = this._model.filter(( /**
                 * @param {?} _uf
                 * @return {?}
                 */function (_uf) { return _uf !== uf; }));
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
                    .filter(( /**
             * @param {?} uf
             * @return {?}
             */function (uf) { return uf.upload.status !== UploadStatus.Error; }))
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
                if (request instanceof rxjs.Observable) {
                    return request.pipe(operators.switchMap(( /**
                     * @param {?} req
                     * @return {?}
                     */function (req) { return _this.httpClient.request(req); })));
                }
                else if (request instanceof http.HttpRequest) {
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
                if (request instanceof rxjs.Observable) {
                    return request.pipe(operators.switchMap(( /**
                     * @param {?} req
                     * @return {?}
                     */function (req) {
                        upload.request = req;
                        return _this.httpClient.request(req);
                    })));
                }
                else if (request instanceof http.HttpRequest) {
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
                uploadFiles.forEach(( /**
                 * @param {?} uf
                 * @return {?}
                 */function (uf) {
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
            { type: i0.Component, args: [{
                        selector: 'sy-upload',
                        providers: [VALUE_ACCESSOR],
                        template: "<div class=\"sy-upload\">\r\n    <div class=\"file-container\" syDragDrop [disabled]=\"disabled\" (dropEvent)=\"onFilesChange($event)\" [dragState]=\"dragState\" (dragStateChange)=\"onDragStateChange($event)\" [ngClass]=\" { 'disabled': disabled, 'drag-border': shouldShowDropTarget }\" [ngStyle]=\"{'pointer-events': disabled ? 'none' : 'initial'}\">\r\n        <div class=\"file-container-no-drag\" *ngIf=\"!shouldShowDropTarget\">\r\n            <div class=\"text-center upload-cloud\" *ngIf=\"!anyFiles()\">\r\n                <fa-icon [icon]=\"['fas', 'cloud-upload-alt']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;Drag and drop files here, or<a (click)=\"file.click()\">&nbsp;browse</a>\r\n            </div>\r\n            <div *ngFor=\"let uf of _model\" class=\"file-item\">\r\n                <div class=\"file-row\">\r\n                    <div class=\"file-name\">{{ uf.file.name }}</div>\r\n                    <div class=\"file-size\">{{ uf.file.size | filesize }}</div>\r\n                    <div class=\"file-delete\"><span class=\"icon close fa fa-times-circle\" (click)=\"onCloseClick(uf)\"></span></div>\r\n                </div>\r\n                <!-- <div class=\"file-progress\" *ngIf=\"shouldShowProgressBar(uf)\">\r\n                    <sy-progress-bar [value]=\"uf.upload.progress\"></sy-progress-bar>\r\n                </div> -->\r\n                <!-- <div class=\"file-error\" *ngIf=\"shouldShowError(uf)\">Error: {{uf.upload.error}}</div> -->\r\n            </div>\r\n            <div class=\"text-center\" *ngIf=\"anyFiles() && shouldAllowMoreFiles()\">\r\n                <fa-icon [icon]=\"['fas', 'cloud-upload-alt']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;Drag and drop files here, or<a (click)=\"file.click()\">&nbsp;browse</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"file-container-dragging text-center\" *ngIf=\"shouldShowDropTarget\">\r\n            Drop Files Here\r\n            <p class=\"text-center\"><span class=\"fa fa-cloud-upload\"></span></p>\r\n        </div>\r\n        <div *ngIf=\"showMaxFilesError\" class=\"file-max-error\">\r\n            <fa-icon [icon]=\"['fas', 'exclamation-triangle']\" size=\"2x\"></fa-icon>&nbsp;&nbsp;{{maxFilesErrorMessage()}}\r\n        </div>\r\n        <div *ngIf=\"!isAcceptableFileType && !shouldShowDropTarget\" class=\"file-max-error\">\r\n            <span> <fa-icon [icon]=\"['fas', 'exclamation-triangle']\" size=\"2x\"></fa-icon>&nbsp;&nbsp; Please select {{this.accept}} type of file.</span>\r\n        </div>\r\n\r\n        <!-- Hidden input to trigger the browser file selector -->\r\n        <input type=\"file\" #file [attr.id]=\"name\" [attr.accept]=\"accept\" ngModel class=\"hide\" (change)=\"onFilesChange($event)\" [attr.multiple]=\"maxFiles === 0 || maxFiles > 1 ? 'multiple' : null\">\r\n    </div>\r\n</div>",
                        styles: [".sy-upload .icon.close{cursor:pointer;width:2rem;min-width:2rem;font-size:2rem;min-height:2rem;line-height:2rem}.sy-upload .hide{display:none}.sy-upload .disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.sy-upload .file-container{max-width:46rem;border:1px solid #4f4f4f;padding:1rem}.sy-upload .upload-cloud{margin:3rem 0}.sy-upload .text-center a{color:#4bc1d2;font-weight:700;text-decoration:underline}.sy-upload .drag-border{border:3px dashed #9c9c9c;border-radius:1rem}.sy-upload .file-container-dragging{font-size:2.2rem;margin:1.5rem 0;color:#9c9c9c;pointer-events:none}.sy-upload .file-container-dragging *{pointer-events:none}.sy-upload .file-error{color:red}.sy-upload .file-max-error{background-color:#fffaf3;padding:1rem}.sy-upload .file-item{margin-bottom:.7em}.sy-upload .file-row{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.sy-upload .file-row>:not(:first-child){padding-left:.5rem}.sy-upload .file-row .file-name{-webkit-box-flex:1;flex-grow:1;text-align:left;overflow-x:hidden;text-overflow:ellipsis;white-space:nowrap}.sy-upload .file-row .file-size{white-space:nowrap}.sy-upload .file-row .file-progress{width:8rem}.sy-upload .file-row .file-delete{min-width:2rem;text-align:center}.text-center{margin-top:0!important}.text-center a:hover{cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        UploadComponent.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
        UploadComponent.propDecorators = {
            uploadRequest: [{ type: i0.Input }],
            deleteRequest: [{ type: i0.Input }],
            maxFiles: [{ type: i0.Input }],
            uploadDeferred: [{ type: i0.Input }],
            accept: [{ type: i0.Input }],
            pattern: [{ type: i0.Input }],
            maxFileSizeInBytes: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            onModelFilesChanges: [{ type: i0.Output }],
            fileInput: [{ type: i0.ViewChild, args: ['file',] }]
        };
        return UploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/directive.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DirectivesModule = /** @class */ (function () {
        function DirectivesModule() {
        }
        DirectivesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            DragDropDirective
                        ],
                        exports: [
                            DragDropDirective
                        ]
                    },] }
        ];
        return DirectivesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pipes/file-size/file-size.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Transforms a filesize in bytes to a human readable decimal filesize using SI prefixes
    var FilesizePipe = /** @class */ (function () {
        function FilesizePipe() {
        }
        /**
         * @param {?} size
         * @return {?}
         */
        FilesizePipe.prototype.transform = /**
         * @param {?} size
         * @return {?}
         */
            function (size) {
                if (typeof size !== 'number') {
                    return '0';
                }
                /** @type {?} */
                var symbols = ['B', 'KB', 'MB', 'GB', 'TB'];
                /** @type {?} */
                var sizes = [1, Math.pow(2, 10), Math.pow(2, 20), Math.pow(2, 30), Math.pow(2, 40), Math.pow(2, 50)];
                /** @type {?} */
                var symbol = symbols[0];
                /** @type {?} */
                var base = sizes[0];
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
                var rounded = Math.round(size / base);
                return rounded + " " + symbol;
            };
        FilesizePipe.decorators = [
            { type: i0.Pipe, args: [{ name: 'filesize' },] }
        ];
        return FilesizePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pipes/pipes.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PipesModule = /** @class */ (function () {
        function PipesModule() {
        }
        PipesModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FilesizePipe],
                        exports: [FilesizePipe],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return PipesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/upload/upload.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UploadModule = /** @class */ (function () {
        function UploadModule() {
        }
        UploadModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [UploadComponent],
                        exports: [UploadComponent],
                        imports: [
                            common.CommonModule,
                            DirectivesModule,
                            ComponentModule,
                            PipesModule,
                            angularFontawesome.FontAwesomeModule,
                        ]
                    },] }
        ];
        return UploadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/sy-components.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SyComponentsModule = /** @class */ (function () {
        function SyComponentsModule() {
            fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeRegularSvgIcons.far);
        }
        SyComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [SyComponentsComponent,
                            HistoryComponent,
                            ListboxComponent,
                            FieldsetWrapper],
                        imports: [
                            forms.FormsModule,
                            common.CommonModule,
                            angularFontawesome.FontAwesomeModule,
                            http.HttpClientModule,
                            router.RouterModule
                        ],
                        exports: [SyComponentsComponent,
                            HistoryComponent,
                            ComponentModule,
                            UploadModule,
                            ListboxComponent]
                    },] }
        ];
        /** @nocollapse */
        SyComponentsModule.ctorParameters = function () { return []; };
        return SyComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: sy-components.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.SyComponentsService = SyComponentsService;
    exports.SyComponentsComponent = SyComponentsComponent;
    exports.SyComponentsModule = SyComponentsModule;
    exports.ɵn = ActionButtonComponent;
    exports.ɵj = AlertFooterComponent;
    exports.ɵk = AlertFooterService;
    exports.ɵi = AlertComponent;
    exports.ɵf = AuditTrailComponent;
    exports.ɵd = COMPONENT_COMPONENTS;
    exports.ɵe = ComponentModule;
    exports.ɵu = CopyClipboardComponent;
    exports.ɵr = DosFooterComponent;
    exports.ɵl = DosHeaderComponent;
    exports.ɵs = DownloadComponent;
    exports.ɵp = ExportComponent;
    exports.ɵh = HistoryTableComponent;
    exports.ɵt = PointOfContactComponent;
    exports.ɵm = ProgressBarComponent;
    exports.ɵq = RequiredMessageComponent;
    exports.ɵo = ToolbarComponent;
    exports.ɵv = VideoPlayerComponent;
    exports.ɵy = DirectivesModule;
    exports.ɵz = DragDropDirective;
    exports.ɵg = GlobalDateTime;
    exports.ɵa = HistoryComponent;
    exports.ɵb = ListboxComponent;
    exports.ɵbb = FilesizePipe;
    exports.ɵba = PipesModule;
    exports.ɵx = UploadComponent;
    exports.ɵw = UploadModule;
    exports.ɵc = FieldsetWrapper;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=sy-components.umd.js.map