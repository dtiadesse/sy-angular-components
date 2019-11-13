/**
 * @fileoverview added by tsickle
 * Generated from: lib/utilities/key-helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class KeyHelper {
    /**
     * @param {...?} keys
     */
    constructor(...keys) {
        this._allowedKeys = [];
        this._currentlySupported = [
            'enter', 'up', 'down', 'left', 'right', 'tab', 'esc', 'space',
            'shift', 'backspace', '1', '2', '3', '4', '5', '6', '7', '8',
            '9', '0', 'delete'
        ];
        this._setAllowedKeys(...keys);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    static getKeyCode(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    isAllowed(event) {
        /** @type {?} */
        const val = this._allowedKeys
            .reduce((/**
         * @param {?} val
         * @param {?} key
         * @return {?}
         */
        (val, key) => {
            return KeyHelper.is(key, event) || val;
        }), false);
        return val;
    }
    /**
     * @private
     * @param {...?} keys
     * @return {?}
     */
    _setAllowedKeys(...keys) {
        keys.forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (this._currentlySupported.indexOf(key) !== -1) {
                this._allowedKeys.push(key);
            }
            else {
                /** @type {?} */
                const ok = this._allowedToString();
                /** @type {?} */
                const msg = `Only supports ${ok} at this time`;
                throw new TypeError(msg);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _allowedToString() {
        return this._allowedKeys.join(', ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    static getNumberFromKey(event) {
        /** @type {?} */
        const tests = [
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
        (val, test) => {
            return val !== undefined
                ? val
                : test(event);
        }), undefined);
    }
    /**
     * @param {?} validKeyParam
     * @param {?} event
     * @return {?}
     */
    static is(validKeyParam, event) {
        /** @type {?} */
        let lowercased = validKeyParam.toLowerCase();
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isEnter(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isArrowUp(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isArrowDown(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isArrowLeft(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isArrowRight(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isTab(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isEscape(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isSpace(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isShift(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isBackspace(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _isDelete(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _zero(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _one(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _two(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _three(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _four(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _five(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _six(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _seven(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _eight(e) {
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
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    static _nine(e) {
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
    }
    /**
     * @private
     * @param {?} expected
     * @param {?} event
     * @return {?}
     */
    static _isExpectedNumber(expected, event) {
        return expected === KeyHelper.getNumberFromKey(event);
    }
}
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
const KEYS = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3N5LWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0aWVzL2tleS1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sU0FBUzs7OztJQXlCbEIsWUFBWSxHQUFHLElBQUk7UUF2QlgsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFFNUIsd0JBQW1CLEdBQUc7WUFDNUIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU87WUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUM1RCxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVE7U0FDbkIsQ0FBQztRQWtCQSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFqQk0sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFVO1FBRS9CLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLFNBQVMsQ0FBQztTQUNsQjthQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDbEI7YUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQztTQUM1QjthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQU1JLFNBQVMsQ0FBQyxLQUFLOztjQUNkLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWTthQUMx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QUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNuQixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUM7Ozs7Ozs7SUFFTyxNQUFNLENBQUMsaUJBQWlCLENBQUUsUUFBUSxFQUFFLEtBQUs7UUFFL0MsT0FBTyxRQUFRLEtBQUssU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FFRjs7Ozs7O0lBMVpDLGlDQUFvQzs7Ozs7SUFFcEMsd0NBSUU7OztBQXNaSixNQUFZLElBQUk7SUFDZCxPQUFPLFNBQVU7SUFDakIsSUFBSSxNQUFPO0lBQ1gsTUFBTSxRQUFTO0lBQ2YsTUFBTSxRQUFTO0lBQ2YsT0FBTyxTQUFVO0lBQ2pCLEtBQUssT0FBUTtJQUNiLEtBQUssT0FBUTtJQUNiLE9BQU8sU0FBVTtJQUNqQixPQUFPLFNBQVU7SUFDakIsV0FBVyxhQUFjO0lBQ3pCLEtBQUssS0FBTTtJQUNYLEtBQUssS0FBTTtJQUNYLE9BQU8sS0FBTTtJQUNiLE1BQU0sS0FBTTtJQUNaLE1BQU0sS0FBTTtJQUNaLEtBQUssS0FBTTtJQUNYLE9BQU8sS0FBTTtJQUNiLE9BQU8sS0FBTTtJQUNiLE1BQU0sS0FBTTtJQUNaLE1BQU0sS0FBTTtJQUNaLFFBQVEsVUFBVztFQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBLZXlIZWxwZXIge1xyXG5cclxuICAgIHByaXZhdGUgX2FsbG93ZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRseVN1cHBvcnRlZCA9IFtcclxuICAgICAgJ2VudGVyJywgJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCcsICd0YWInLCAnZXNjJywgJ3NwYWNlJyxcclxuICAgICAgJ3NoaWZ0JywgJ2JhY2tzcGFjZScsICcxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLFxyXG4gICAgICAnOScsICcwJywgJ2RlbGV0ZSdcclxuICAgIF07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRLZXlDb2RlKGV2ZW50OiBhbnkpOiBzdHJpbmcge1xyXG5cclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICByZXR1cm4gZXZlbnQua2V5O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGV2ZW50LmNvZGU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICByZXR1cm4gZXZlbnQua2V5SWRlbnRpZmllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5rZXlzKSB7XHJcbiAgICAgIHRoaXMuX3NldEFsbG93ZWRLZXlzKC4uLmtleXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0FsbG93ZWQoZXZlbnQpOiBib29sZWFuIHtcclxuICAgICAgY29uc3QgdmFsID0gdGhpcy5fYWxsb3dlZEtleXNcclxuICAgICAgICAucmVkdWNlKFxyXG4gICAgICAgICAgKHZhbCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBLZXlIZWxwZXIuaXMoa2V5LCBldmVudCkgfHwgdmFsO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgKTtcclxuICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zZXRBbGxvd2VkS2V5cyguLi5rZXlzKSB7XHJcbiAgICAgIGtleXMuZm9yRWFjaChcclxuICAgICAgICBrZXkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRseVN1cHBvcnRlZC5pbmRleE9mKGtleSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FsbG93ZWRLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9rID0gdGhpcy5fYWxsb3dlZFRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBPbmx5IHN1cHBvcnRzICR7b2t9IGF0IHRoaXMgdGltZWA7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWxsb3dlZFRvU3RyaW5nICgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdGhpcy5fYWxsb3dlZEtleXMuam9pbignLCAnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROdW1iZXJGcm9tS2V5IChldmVudCk6IG51bWJlciB7XHJcbiAgICAgIGNvbnN0IHRlc3RzID0gW1xyXG4gICAgICAgIEtleUhlbHBlci5femVybywgS2V5SGVscGVyLl9vbmUsIEtleUhlbHBlci5fdHdvLFxyXG4gICAgICAgIEtleUhlbHBlci5fdGhyZWUsIEtleUhlbHBlci5fZm91ciwgS2V5SGVscGVyLl9maXZlLFxyXG4gICAgICAgIEtleUhlbHBlci5fc2l4LCBLZXlIZWxwZXIuX3NldmVuLCBLZXlIZWxwZXIuX2VpZ2h0LFxyXG4gICAgICAgIEtleUhlbHBlci5fbmluZVxyXG4gICAgICBdO1xyXG5cclxuICAgICAgcmV0dXJuIHRlc3RzLnJlZHVjZShcclxuICAgICAgICAodmFsOiBudW1iZXIgfCB1bmRlZmluZWQsIHRlc3Q6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyB2YWxcclxuICAgICAgICAgICAgOiB0ZXN0KGV2ZW50KTtcclxuICAgICAgICB9LCB1bmRlZmluZWRcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzIChcclxuICAgICAgdmFsaWRLZXlQYXJhbTogc3RyaW5nLFxyXG4gICAgICBldmVudDogS2V5Ym9hcmRFdmVudCB8IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICBsZXQgbG93ZXJjYXNlZCA9IHZhbGlkS2V5UGFyYW0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgc3dpdGNoIChsb3dlcmNhc2VkKSB7XHJcbiAgICAgICAgY2FzZSAnZW50ZXInOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRW50ZXIoZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0Fycm93VXAoZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXJyb3dEb3duKGV2ZW50KTtcclxuICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0Fycm93TGVmdChldmVudCk7XHJcbiAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXJyb3dSaWdodChldmVudCk7XHJcbiAgICAgICAgY2FzZSAndGFiJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc1RhYihldmVudCk7XHJcbiAgICAgICAgY2FzZSAnZXNjJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0VzY2FwZShldmVudCk7XHJcbiAgICAgICAgY2FzZSAnc3BhY2UnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzU3BhY2UoZXZlbnQpO1xyXG4gICAgICAgIGNhc2UgJ3NoaWZ0JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc1NoaWZ0KGV2ZW50KTtcclxuICAgICAgICBjYXNlICdiYWNrc3BhY2UnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQmFja3NwYWNlKGV2ZW50KTtcclxuICAgICAgICBjYXNlICdkZWxldGUnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVsZXRlKGV2ZW50KTtcclxuICAgICAgICBjYXNlICcwJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDAsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDEsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDIsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICczJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDMsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDQsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICc1JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDUsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICc2JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDYsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDcsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICc4JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDgsIGV2ZW50KTtcclxuICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9pc0V4cGVjdGVkTnVtYmVyKDksIGV2ZW50KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzRW50ZXIgKGU6IEtleWJvYXJkRXZlbnQgfCBhbnkpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnRW50ZXInXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnRW50ZXInXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gMTNcclxuICAgICAgICB8fCBlLmNoYXJDb2RlID09PSAxM1xyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNBcnJvd1VwIChlOiBLZXlib2FyZEV2ZW50IHwgYW55KSB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdBcnJvd1VwJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnQXJyb3dVcCdcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ1VwJ1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1VwJ1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDM4XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0Fycm93RG93biAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dEb3duJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnQXJyb3dEb3duJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnRG93bidcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdEb3duJ1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDQwXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0Fycm93TGVmdCAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnQXJyb3dMZWZ0J1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnQXJyb3dMZWZ0J1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnTGVmdCdcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdMZWZ0J1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDM3XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0Fycm93UmlnaHQgKGU6IEtleWJvYXJkRXZlbnQgfCBhbnkpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0Fycm93UmlnaHQnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdBcnJvd1JpZ2h0J1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnUmlnaHQnXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnUmlnaHQnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gMzlcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzVGFiIChlOiBLZXlib2FyZEV2ZW50IHwgYW55KSB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdUYWInXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdUYWInXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDA5J1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDlcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNFc2NhcGUgKGU6IEtleWJvYXJkRXZlbnQgfCBhbnkpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZSdcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ0VzY2FwZSdcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ0VzYydcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMUInXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gMjdcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzU3BhY2UgKGU6IEtleWJvYXJkRXZlbnQgfCBhbnkpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ1NwYWNlJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnICdcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ1NwYWNlYmFyJ1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAyMCdcclxuICAgICAgICB8fCBlLndoaWNoID09PSAzMlxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNTaGlmdCAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnU2hpZnRMZWZ0J1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ1NoaWZ0UmlnaHQnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09ICdTaGlmdCdcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdTaGlmdCdcclxuICAgICAgICB8fCBlLndoaWNoID09PSAxNlxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMTYpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaXNCYWNrc3BhY2UgKGU6IEtleWJvYXJkRXZlbnQgfCBhbnkpIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0JhY2tzcGFjZSdcclxuICAgICAgICB8fCBlLmtleSA9PT0gJ0JhY2tzcGFjZSdcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMDgnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gOFxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gOCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pc0RlbGV0ZSAoZTogS2V5Ym9hcmRFdmVudCB8IGFueSkge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGVsZXRlJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAnRGVsZXRlJ1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDA3RidcclxuICAgICAgICB8fCBlLndoaWNoID09PSA0NlxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNDYpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfemVybyAoZSk6IG51bWJlciB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDAnXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnTnVtcGFkMCdcclxuICAgICAgICB8fCBlLmtleSA9PT0gMFxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNDhcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDk2XHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDMwJ1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDQ4KSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9vbmUgKGUpOiBudW1iZXIge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQxJ1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ051bXBhZDEnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09IDFcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDQ5XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA5N1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzMSdcclxuICAgICAgICB8fCBlLndoaWNoID09PSA0OSkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdHdvIChlKTogbnVtYmVyIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0MidcclxuICAgICAgICB8fCBlLmNvZGUgPT09ICdOdW1wYWQyJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAyXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA1MFxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gOThcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMzInXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNTApIHtcclxuICAgICAgICByZXR1cm4gMjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RocmVlIChlKTogbnVtYmVyIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0MydcclxuICAgICAgICB8fCBlLmNvZGUgPT09ICdOdW1wYWQzJ1xyXG4gICAgICAgIHx8IGUua2V5ID09PSAzXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA1MVxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gOTlcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMzMnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNTEpIHtcclxuICAgICAgICByZXR1cm4gMztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2ZvdXIgKGUpOiBudW1iZXIge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQ0J1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ051bXBhZDQnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09IDRcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDUyXHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAxMDBcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMzQnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNTIpIHtcclxuICAgICAgICByZXR1cm4gNDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZml2ZSAoZSk6IG51bWJlciB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDUnXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnTnVtcGFkNSdcclxuICAgICAgICB8fCBlLmtleSA9PT0gNVxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNTNcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDEwMVxyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzNSdcclxuICAgICAgICB8fCBlLndoaWNoID09PSA1Mykge1xyXG4gICAgICAgIHJldHVybiA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2l4IChlKTogbnVtYmVyIHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0NidcclxuICAgICAgICB8fCBlLmNvZGUgPT09ICdOdW1wYWQ2J1xyXG4gICAgICAgIHx8IGUua2V5ID09PSA2XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSA1NFxyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gMTAyXHJcbiAgICAgICAgfHwgZS5rZXlJZGVudGlmaWVyID09PSAnVSswMDM2J1xyXG4gICAgICAgIHx8IGUud2hpY2ggPT09IDU0KSB7XHJcbiAgICAgICAgcmV0dXJuIDY7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9zZXZlbiAoZSk6IG51bWJlciB7XHJcbiAgICAgIGlmIChlLmNvZGUgPT09ICdEaWdpdDcnXHJcbiAgICAgICAgfHwgZS5jb2RlID09PSAnTnVtcGFkNydcclxuICAgICAgICB8fCBlLmtleSA9PT0gN1xyXG4gICAgICAgIHx8IGUua2V5Q29kZSA9PT0gNTVcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDEwM1xyXG4gICAgICAgIHx8IGUua2V5SWRlbnRpZmllciA9PT0gJ1UrMDAzNydcclxuICAgICAgICB8fCBlLndoaWNoID09PSA1NSkge1xyXG4gICAgICAgIHJldHVybiA3O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZWlnaHQgKGUpOiBudW1iZXIge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQ4J1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ051bXBhZDgnXHJcbiAgICAgICAgfHwgZS5rZXkgPT09IDhcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDU2XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAxMDRcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMzgnXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNTYpIHtcclxuICAgICAgICByZXR1cm4gODtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX25pbmUgKGUpOiBudW1iZXIge1xyXG4gICAgICBpZiAoZS5jb2RlID09PSAnRGlnaXQ5J1xyXG4gICAgICAgIHx8IGUuY29kZSA9PT0gJ051bXBhZDknXHJcbiAgICAgICAgfHwgZS5rZXkgPT09IDlcclxuICAgICAgICB8fCBlLmtleUNvZGUgPT09IDU3XHJcbiAgICAgICAgfHwgZS5rZXlDb2RlID09PSAxMDVcclxuICAgICAgICB8fCBlLmtleUlkZW50aWZpZXIgPT09ICdVKzAwMzknXHJcbiAgICAgICAgfHwgZS53aGljaCA9PT0gNTcpIHtcclxuICAgICAgICByZXR1cm4gOTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2lzRXhwZWN0ZWROdW1iZXIgKGV4cGVjdGVkLCBldmVudClcclxuICAgICAgOiBib29sZWFuIHtcclxuICAgICAgcmV0dXJuIGV4cGVjdGVkID09PSBLZXlIZWxwZXIuZ2V0TnVtYmVyRnJvbUtleShldmVudCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGVudW0gS0VZUyB7XHJcbiAgICAnRU5URVInID0gJ2VudGVyJyxcclxuICAgICdVUCcgPSAndXAnLFxyXG4gICAgJ0RPV04nID0gJ2Rvd24nLFxyXG4gICAgJ0xFRlQnID0gJ2xlZnQnLFxyXG4gICAgJ1JJR0hUJyA9ICdyaWdodCcsXHJcbiAgICAnVEFCJyA9ICd0YWInLFxyXG4gICAgJ0VTQycgPSAnZXNjJyxcclxuICAgICdTUEFDRScgPSAnc3BhY2UnLFxyXG4gICAgJ1NISUZUJyA9ICdzaGlmdCcsXHJcbiAgICAnQkFDS1NQQUNFJyA9ICdiYWNrc3BhY2UnLFxyXG4gICAgJ09ORScgPSAnMScsXHJcbiAgICAnVFdPJyA9ICcyJyxcclxuICAgICdUSFJFRScgPSAnMycsXHJcbiAgICAnRk9VUicgPSAnNCcsXHJcbiAgICAnRklWRScgPSAnNScsXHJcbiAgICAnU0lYJyA9ICc2JyxcclxuICAgICdTRVZFTicgPSAnNycsXHJcbiAgICAnRUlHSFQnID0gJzgnLFxyXG4gICAgJ05JTkUnID0gJzknLFxyXG4gICAgJ1pFUk8nID0gJzAnLFxyXG4gICAgJ0RFTEVURScgPSAnZGVsZXRlJ1xyXG4gIH1cclxuXHJcbiJdfQ==