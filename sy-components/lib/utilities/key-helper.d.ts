export declare class KeyHelper {
    private _allowedKeys;
    private _currentlySupported;
    static getKeyCode(event: any): string;
    constructor(...keys: any[]);
    isAllowed(event: any): boolean;
    private _setAllowedKeys;
    private _allowedToString;
    static getNumberFromKey(event: any): number;
    static is(validKeyParam: string, event: KeyboardEvent | any): boolean;
    private static _isEnter;
    private static _isArrowUp;
    private static _isArrowDown;
    private static _isArrowLeft;
    private static _isArrowRight;
    private static _isTab;
    private static _isEscape;
    private static _isSpace;
    private static _isShift;
    private static _isBackspace;
    private static _isDelete;
    private static _zero;
    private static _one;
    private static _two;
    private static _three;
    private static _four;
    private static _five;
    private static _six;
    private static _seven;
    private static _eight;
    private static _nine;
    private static _isExpectedNumber;
}
export declare enum KEYS {
    'ENTER' = "enter",
    'UP' = "up",
    'DOWN' = "down",
    'LEFT' = "left",
    'RIGHT' = "right",
    'TAB' = "tab",
    'ESC' = "esc",
    'SPACE' = "space",
    'SHIFT' = "shift",
    'BACKSPACE' = "backspace",
    'ONE' = "1",
    'TWO' = "2",
    'THREE' = "3",
    'FOUR' = "4",
    'FIVE' = "5",
    'SIX' = "6",
    'SEVEN' = "7",
    'EIGHT' = "8",
    'NINE' = "9",
    'ZERO' = "0",
    'DELETE' = "delete"
}
