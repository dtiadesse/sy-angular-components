/**
 * @fileoverview added by tsickle
 * Generated from: lib/utilities/key-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        this._setAllowedKeys.apply(this, tslib_1.__spread(keys));
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
            .reduce((/**
         * @param {?} val
         * @param {?} key
         * @return {?}
         */
        function (val, key) {
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
        keys.forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
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
        return tests.reduce((/**
         * @param {?} val
         * @param {?} test
         * @return {?}
         */
        function (val, test) {
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
export { KeyHelper };
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeyHelper.prototype._allowedKeys;
    /**
     * @type {?}
     * @private
     */
    KeyHelper.prototype._currentlySupported;
}
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
export { KEYS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0aWVzL2tleS1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7SUF5Qkk7UUFBWSxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQXZCWCxpQkFBWSxHQUFhLEVBQUUsQ0FBQztRQUU1Qix3QkFBbUIsR0FBRztZQUM1QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTztZQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQzVELEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBa0JBLElBQUksQ0FBQyxlQUFlLE9BQXBCLElBQUksbUJBQW9CLElBQUksR0FBRTtJQUNoQyxDQUFDOzs7OztJQWpCYSxvQkFBVTs7OztJQUF4QixVQUF5QixLQUFVO1FBRS9CLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDbEI7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQU1JLDZCQUFTOzs7O0lBQWhCLFVBQWlCLEtBQUs7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S0FBSyxDQUFDO2VBQ1gsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFO2VBQ2hCLENBQUMsQ0FBQyxPQUFPLEtBQUssR0FBRztlQUNqQixDQUFDLENBQUMsYUFBYSxLQUFLLFFBQVE7ZUFDNUIsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDbkIsT0FBTyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7Ozs7O0lBRWMsMkJBQWlCOzs7Ozs7SUFBaEMsVUFBa0MsUUFBUSxFQUFFLEtBQUs7UUFFL0MsT0FBTyxRQUFRLEtBQUssU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFSCxnQkFBQztBQUFELENBQUMsQUE1WkgsSUE0Wkc7Ozs7Ozs7SUExWkMsaUNBQW9DOzs7OztJQUVwQyx3Q0FJRTs7O0FBc1pKLElBQVksSUFBSTtJQUNkLE9BQU8sU0FBVTtJQUNqQixJQUFJLE1BQU87SUFDWCxNQUFNLFFBQVM7SUFDZixNQUFNLFFBQVM7SUFDZixPQUFPLFNBQVU7SUFDakIsS0FBSyxPQUFRO0lBQ2IsS0FBSyxPQUFRO0lBQ2IsT0FBTyxTQUFVO0lBQ2pCLE9BQU8sU0FBVTtJQUNqQixXQUFXLGFBQWM7SUFDekIsS0FBSyxLQUFNO0lBQ1gsS0FBSyxLQUFNO0lBQ1gsT0FBTyxLQUFNO0lBQ2IsTUFBTSxLQUFNO0lBQ1osTUFBTSxLQUFNO0lBQ1osS0FBSyxLQUFNO0lBQ1gsT0FBTyxLQUFNO0lBQ2IsT0FBTyxLQUFNO0lBQ2IsTUFBTSxLQUFNO0lBQ1osTUFBTSxLQUFNO0lBQ1osUUFBUSxVQUFXO0VBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEtleUhlbHBlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWxsb3dlZEtleXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudGx5U3VwcG9ydGVkID0gW1xyXG4gICAgICAnZW50ZXInLCAndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0JywgJ3RhYicsICdlc2MnLCAnc3BhY2UnLFxyXG4gICAgICAnc2hpZnQnLCAnYmFja3NwYWNlJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsXHJcbiAgICAgICc5JywgJzAnLCAnZGVsZXRlJ1xyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEtleUNvZGUoZXZlbnQ6IGFueSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGlmICghZXZlbnQpIHtcclxuICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXkpIHtcclxuICAgICAgICAgIHJldHVybiBldmVudC5rZXk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5jb2RlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZXZlbnQuY29kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUlkZW50aWZpZXIpIHtcclxuICAgICAgICAgIHJldHVybiBldmVudC5rZXlJZGVudGlmaWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLmtleXMpIHtcclxuICAgICAgdGhpcy5fc2V0QWxsb3dlZEtleXMoLi4ua2V5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQWxsb3dlZChldmVudCk6IGJvb2xlYW4ge1xyXG4gICAgICBjb25zdCB2YWwgPSB0aGlzLl9hbGxvd2VkS2V5c1xyXG4gICAgICAgIC5yZWR1Y2UoXHJcbiAgICAgICAgICAodmFsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIEtleUhlbHBlci5pcyhrZXksIGV2ZW50KSB8fCB2YWw7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NldEFsbG93ZWRLZXlzKC4uLmtleXMpIHtcclxuICAgICAga2V5cy5mb3JFYWNoKFxyXG4gICAgICAgIGtleSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fY3VycmVudGx5U3VwcG9ydGVkLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWxsb3dlZEtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgb2sgPSB0aGlzLl9hbGxvd2VkVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc3QgbXNnID0gYE9ubHkgc3VwcG9ydHMgJHtva30gYXQgdGhpcyB0aW1lYDtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hbGxvd2VkVG9TdHJpbmcgKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9hbGxvd2VkS2V5cy5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE51bWJlckZyb21LZXkgKGV2ZW50KTogbnVtYmVyIHtcclxuICAgICAgY29uc3QgdGVzdHMgPSBbXHJcbiAgICAgICAgS2V5SGVscGVyLl96ZXJvLCBLZXlIZWxwZXIuX29uZSwgS2V5SGVscGVyLl90d28sXHJcbiAgICAgICAgS2V5SGVscGVyLl90aHJlZSwgS2V5SGVscGVyLl9mb3VyLCBLZXlIZWxwZXIuX2ZpdmUsXHJcbiAgICAgICAgS2V5SGVscGVyLl9zaXgsIEtleUhlbHBlci5fc2V2ZW4sIEtleUhlbHBlci5fZWlnaHQsXHJcbiAgICAgICAgS2V5SGVscGVyLl9uaW5lXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4gdGVzdHMucmVkdWNlKFxyXG4gICAgICAgICh2YWw6IG51bWJlciB8IHVuZGVmaW5lZCwgdGVzdDogRnVuY3Rpb24pID0+IHtcclxuICAgICAgICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHZhbFxyXG4gICAgICAgICAgICA6IHRlc3QoZXZlbnQpO1xyXG4gICAgICAgIH0sIHVuZGVmaW5lZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaXMgKFxyXG4gICAgICB2YWxpZEtleVBhcmFtOiBzdHJpbmcsXHJcbiAgICAgIGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgYW55KTogYm9vbGVhbiB7XHJcbiAgICAgIGxldCBsb3dlcmNhc2VkID0gdmFsaWRLZXlQYXJhbS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBzd2l0Y2ggKGxvd2VyY2FzZWQpIHtcclxuICAgICAgICBjYXNlICdlbnRlcic6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNFbnRlcihldmVudCk7XHJcbiAgICAgICAgY2FzZSAndXAnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXJyb3dVcChldmVudCk7XHJcbiAgICAgICAgY2FzZSAnZG93bic6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNBcnJvd0Rvd24oZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXJyb3dMZWZ0KGV2ZW50KTtcclxuICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNBcnJvd1JpZ2h0KGV2ZW50KTtcclxuICAgICAgICBjYXNlICd0YWInOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVGFiKGV2ZW50KTtcclxuICAgICAgICBjYXNlICdlc2MnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXNjYXBlKGV2ZW50KTtcclxuICAgICAgICBjYXNlICdzcGFjZSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNTcGFjZShldmVudCk7XHJcbiAgICAgICAgY2FzZSAnc2hpZnQnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2hpZnQoZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJ2JhY2tzcGFjZSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNCYWNrc3BhY2UoZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNEZWxldGUoZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzAnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoMCwgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoMSwgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoMiwgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoMywgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzQnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoNCwgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzUnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoNSwgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzYnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoNiwgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzcnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoNywgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzgnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoOCwgZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJzknOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwZWN0ZWROdW1iZXIoOSwgZXZlbnQpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNFbnRlciAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdFbnRlcidcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdFbnRlcidcclxuICAgICAgICB8fCBlLndoaWNoID09PSAxM1xyXG4gICAgICAgIHx8IGUuY2hhckNvZGUgPT09IDEzXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0Fycm93VXAgKGU6IEtleWJvYXJkRXZlbnQgfCBhbnkpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93VXAnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdBcnJvd1VwJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnVXAnXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVXAnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gMzhcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQXJyb3dEb3duIChlOiBLZXlib2FyZEV2ZW50IHwgYW55KSB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd0Rvd24nXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdBcnJvd0Rvd24nXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdEb3duJ1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ0Rvd24nXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNDBcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQXJyb3dMZWZ0IChlOiBLZXlib2FyZEV2ZW50IHwgYW55KSB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd0xlZnQnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdBcnJvd0xlZnQnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdMZWZ0J1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ0xlZnQnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gMzdcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzQXJyb3dSaWdodCAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dSaWdodCdcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ0Fycm93UmlnaHQnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdSaWdodCdcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdSaWdodCdcclxuICAgICAgICB8fCBlLndoaWNoID09PSAzOVxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNUYWIgKGU6IEtleWJvYXJkRXZlbnQgfCBhbnkpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ1RhYidcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ1RhYidcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMDknXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gOVxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gOSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0VzY2FwZSAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRXNjYXBlJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnRXNjYXBlJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnRXNjJ1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAxQidcclxuICAgICAgICB8fCBlLndoaWNoID09PSAyN1xyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNTcGFjZSAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnU3BhY2UnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICcgJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnU3BhY2ViYXInXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDIwJ1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDMyXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAzMikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc1NoaWZ0IChlOiBLZXlib2FyZEV2ZW50IHwgYW55KSB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdTaGlmdExlZnQnXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnU2hpZnRSaWdodCdcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ1NoaWZ0J1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1NoaWZ0J1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDE2XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAxNikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0JhY2tzcGFjZSAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnQmFja3NwYWNlJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnQmFja3NwYWNlJ1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAwOCdcclxuICAgICAgICB8fCBlLndoaWNoID09PSA4XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzRGVsZXRlIChlOiBLZXlib2FyZEV2ZW50IHwgYW55KSB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEZWxldGUnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdEZWxldGUnXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDdGJ1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDQ2XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA0Nikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF96ZXJvIChlKTogbnVtYmVyIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0MCdcclxuICAgICAgICB8fCBlLmNvZGUgPT09ICdOdW1wYWQwJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAwXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA0OFxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gOTZcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMzAnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNDgpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX29uZSAoZSk6IG51bWJlciB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDEnXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnTnVtcGFkMSdcclxuICAgICAgICB8fCBlLmtleSA9PT0gMVxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNDlcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDk3XHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDMxJ1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDQ5KSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF90d28gKGUpOiBudW1iZXIge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQyJ1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ051bXBhZDInXHJcbiAgICAgICAgfHwgZS5rZXkgPT09IDJcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDUwXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA5OFxyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzMidcclxuICAgICAgICB8fCBlLndoaWNoID09PSA1MCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdGhyZWUgKGUpOiBudW1iZXIge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQzJ1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ051bXBhZDMnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09IDNcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDUxXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA5OVxyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzMydcclxuICAgICAgICB8fCBlLndoaWNoID09PSA1MSkge1xyXG4gICAgICAgIHJldHVybiAzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZm91ciAoZSk6IG51bWJlciB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDQnXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnTnVtcGFkNCdcclxuICAgICAgICB8fCBlLmtleSA9PT0gNFxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNTJcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDEwMFxyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzNCdcclxuICAgICAgICB8fCBlLndoaWNoID09PSA1Mikge1xyXG4gICAgICAgIHJldHVybiA0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIF9maXZlIChlKTogbnVtYmVyIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0NSdcclxuICAgICAgICB8fCBlLmNvZGUgPT09ICdOdW1wYWQ1J1xyXG4gICAgICAgIHx8IGUua2V5ID09PSA1XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA1M1xyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMTAxXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDM1J1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDUzKSB7XHJcbiAgICAgICAgcmV0dXJuIDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9zaXggKGUpOiBudW1iZXIge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQ2J1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ051bXBhZDYnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09IDZcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDU0XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAxMDJcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMzYnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNTQpIHtcclxuICAgICAgICByZXR1cm4gNjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NldmVuIChlKTogbnVtYmVyIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0NydcclxuICAgICAgICB8fCBlLmNvZGUgPT09ICdOdW1wYWQ3J1xyXG4gICAgICAgIHx8IGUua2V5ID09PSA3XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA1NVxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMTAzXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDM3J1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDU1KSB7XHJcbiAgICAgICAgcmV0dXJuIDc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9laWdodCAoZSk6IG51bWJlciB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDgnXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnTnVtcGFkOCdcclxuICAgICAgICB8fCBlLmtleSA9PT0gOFxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNTZcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDEwNFxyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzOCdcclxuICAgICAgICB8fCBlLndoaWNoID09PSA1Nikge1xyXG4gICAgICAgIHJldHVybiA4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfbmluZSAoZSk6IG51bWJlciB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDknXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnTnVtcGFkOSdcclxuICAgICAgICB8fCBlLmtleSA9PT0gOVxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNTdcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDEwNVxyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzOSdcclxuICAgICAgICB8fCBlLndoaWNoID09PSA1Nykge1xyXG4gICAgICAgIHJldHVybiA5O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNFeHBlY3RlZE51bWJlciAoZXhwZWN0ZWQsIGV2ZW50KVxyXG4gICAgICA6IGJvb2xlYW4ge1xyXG4gICAgICByZXR1cm4gZXhwZWN0ZWQgPT09IEtleUhlbHBlci5nZXROdW1iZXJGcm9tS2V5KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBLRVlTIHtcclxuICAgICdFTlRFUicgPSAnZW50ZXInLFxyXG4gICAgJ1VQJyA9ICd1cCcsXHJcbiAgICAnRE9XTicgPSAnZG93bicsXHJcbiAgICAnTEVGVCcgPSAnbGVmdCcsXHJcbiAgICAnUklHSFQnID0gJ3JpZ2h0JyxcclxuICAgICdUQUInID0gJ3RhYicsXHJcbiAgICAnRVNDJyA9ICdlc2MnLFxyXG4gICAgJ1NQQUNFJyA9ICdzcGFjZScsXHJcbiAgICAnU0hJRlQnID0gJ3NoaWZ0JyxcclxuICAgICdCQUNLU1BBQ0UnID0gJ2JhY2tzcGFjZScsXHJcbiAgICAnT05FJyA9ICcxJyxcclxuICAgICdUV08nID0gJzInLFxyXG4gICAgJ1RIUkVFJyA9ICczJyxcclxuICAgICdGT1VSJyA9ICc0JyxcclxuICAgICdGSVZFJyA9ICc1JyxcclxuICAgICdTSVgnID0gJzYnLFxyXG4gICAgJ1NFVkVOJyA9ICc3JyxcclxuICAgICdFSUdIVCcgPSAnOCcsXHJcbiAgICAnTklORScgPSAnOScsXHJcbiAgICAnWkVSTycgPSAnMCcsXHJcbiAgICAnREVMRVRFJyA9ICdkZWxldGUnXHJcbiAgfVxyXG5cclxuIl19