(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/sy-components/src/lib/components/action-button/action-button.component.html":
/*!**********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/action-button/action-button.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"\n        (click)=\"actionClicked()\"\n        [disabled]=\"disabled\"\n        class=\"usa-button action-button\">\n  <!-- <span [ngClass]=\"action?.icon\"></span>&nbsp; -->\n  <fa-icon [icon]=\"action?.icon\" size=\"1x\"></fa-icon>&nbsp;\n  {{ action?.label }}\n</button>\n"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/action-button/action-button.component.scss":
/*!**********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/action-button/action-button.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-button {\n  margin-top: .5em;\n  margin-right: .5em;\n  margin-bottom: .5em;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: #4bc1d2;\n  border: 0;\n  border-radius: .1875rem;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1;\n  outline: 0;\n  padding: 1rem 2rem;\n  text-align: center;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2FjdGlvbi1idXR0b24vQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxhY3Rpb24tYnV0dG9uXFxhY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbi9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9wcm9qZWN0c1xcc3ktY29tcG9uZW50c1xcc3JjXFxzYXNzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQix5QkNpQmdCO0VEaEJoQixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9zeS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL2NvbG9ycyc7XHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjE4NzVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iLCIkY29sb3ItZ3JleTogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4kY29sb3ItYmxhY2s6IHJnYigwLCAwLCAwKTtcclxuJGNvbG9yLXdoaXRlOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGNhcmQtYmFja2dyb3VuZDogI2ZmZjtcclxuJGNvbG9yLWdyZWVuOiM0Mjg1NGE7XHJcbiRjb2xvci1yZWQ6ICNGRjAwMDA7XHJcbiRjb2xvci1ncmVlbi1tZWRpdW06ICM4N2Q5YTM7XHJcbiRjb2xvci1ncmVlbi1saWdodDogI0FERDhCQjtcclxuJGNvbG9yLWdyZXktZGFyazogcmdiYSg4NSwgODQsIDg0LCAwLjEyKTtcclxuJGNvbG9yLWdyZXktbGlnaHQ6ICNmMWYxZjE7XHJcbiRjb2xvci10cmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAuNjUpO1xyXG4kY29sb3ItbGlnaHQtcmVkOiAjZmE2YjZiO1xyXG4kY29sb3ItcmVkLW1lZGl1bTojZmY3ZTY1YTY7XHJcbiRjb2xvci1kZWVwLXB1cnBsZTogI2IzODhmZjtcclxuJGNvbG9yLXRlYWw6ICM0ZDljOGE7XHJcbiRjb2xvci10ZWFsLWxpZ2h0OiM1MmM3Yjg7XHJcbiRjb2xvci1saW1lLWxpZ2h0ZXI6ICNlNmVlOWM7XHJcbiRjb2xvci1saWdodC1vcmFuZ2U6ICNmZmNjYmM7XHJcbiRjb2xvci1pbmRpZ286ICNjMGNmZmY7XHJcbiRjb2xvci1kZWVwLWluZGlnbzogIzdhOTlmZDtcclxuJGNvbG9yLWJsdWU6IzAwMjZjYTtcclxuJGNvbG9yLXRyYW5zcGFyZW50LWRhcms6IHJnYmEoMCwgMCwgMCwgLjc1KTtcclxuJGxpZ2h0LWJyb3duOiAjZWZlYmU5O1xyXG4kZGFyay1icm93bjogI2E2OWI5NztcclxuJGNvbG9yLW9yYW5nZTogcmdiKDIzOCwgMTIwLCAzMCk7XHJcbiRjb2xvci1jeWFuOiAjNGJjMWQyO1xyXG4kY29sb3ItZ3JheTpyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XHJcbiRjb2xvci10cmFuc3BhcmVudC1saWdodDogcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWN5YW47XHJcbiRhbGVydFdhcm5pbmdDb2xvcjogI0Q4NDAwOTtcclxuJGFsZXJ0U3VjY2Vzc0NvbG9yOiAjNGFhNTY0O1xyXG4kYWxlcnRJbmZvQ29sb3I6ICMwMEE3Q0Y7XHJcbiRhbGVydEVycm9yQ29sb3I6ICNFQzE5NDI7XHJcbiRjb2xvci1wcmltYXJ5LWRhcmsgOiAjMDA4MDgwO1xyXG4kaG9yaXpvbnRhbC1wYWRkaW5nOiAxcmVtO1xyXG4kdmVydGljYWwtcGFkZGluZzogM3JlbTtcclxuJGljb24tc2l6ZTogMnJlbTtcclxuJGxpZ2h0LWdyZXk6ICM5YzljOWM7XHJcbiRpbnB1dC1tYXgtd2lkdGg6IDQ2cmVtICFkZWZhdWx0O1xyXG4kd2FybmluZ0JhY2tncm91bmRDb2xvcjogI0ZGRkFGMzsiXX0= */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/action-button/action-button.component.ts":
/*!********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/action-button/action-button.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ActionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonComponent", function() { return ActionButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent() {
        /**
         * Disables the button
         */
        this.disabled = false;
        /**
         * EventEmitter that emits action name when button is clicked
         */
        this.emitAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits the results of the callback
         */
        this.emitCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ActionButtonComponent.prototype.actionClicked = function () {
        this.emitCallback.emit(this.action.callback());
        this.emitAction.emit(this.action);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActionButtonComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ActionButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ActionButtonComponent.prototype, "emitAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ActionButtonComponent.prototype, "emitCallback", void 0);
    ActionButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-action-button',
            template: __webpack_require__(/*! ./action-button.component.html */ "./projects/sy-components/src/lib/components/action-button/action-button.component.html"),
            styles: [__webpack_require__(/*! ./action-button.component.scss */ "./projects/sy-components/src/lib/components/action-button/action-button.component.scss")]
        })
    ], ActionButtonComponent);
    return ActionButtonComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.html":
/*!********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert-fixed-footer\">\r\n    <sy-alert *ngFor=\"let alert of alerts; let i = index\" [dismissTimer]=\"alert.timer\" [showClose]=\"true\" [userMustDismiss]=\"alert.mustDismiss ? alert.mustDismiss : false\" [type]=\"alert.type\" [title]=\"alert.title\" [description]=\"alert.description\" [descriptionList]=\"alert.descriptionList\"\r\n        (dismiss)=\"dismissFooterAlert(i)\">\r\n    </sy-alert>\r\n</div>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.scss":
/*!********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert-fixed-footer {\n  min-width: 300px;\n  min-height: 100px;\n  position: absolute;\n  z-index: 1;\n  bottom: 0%;\n  right: 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0LWZvb3Rlci9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9wcm9qZWN0c1xcc3ktY29tcG9uZW50c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGFsZXJ0LWZvb3RlclxcYWxlcnQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBaUI7RUFDakIsVUFBUztFQUNULFVBQVU7RUFDVixTQUFRLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1maXhlZC1mb290ZXIge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcmlnaHQ6MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AlertFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertFooterComponent", function() { return AlertFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-footer.service */ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.service.ts");



var AlertFooterComponent = /** @class */ (function () {
    function AlertFooterComponent(alertFooterService) {
        this.alertFooterService = alertFooterService;
        this.alerts = [];
        this.dismissAlert = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AlertFooterComponent.prototype.ngOnInit = function () {
        // this.alertFooterService.registerFooterAlert(this.alerts[0]);
        // this.refreshAlerts();
    };
    AlertFooterComponent.prototype.dismissFooterAlert = function (i) {
        this.alertFooterService.dismissFooterAlert(i);
        this.dismissAlert.emit(true);
        this.refreshAlerts();
    };
    AlertFooterComponent.prototype.refreshAlerts = function () {
        this.alerts = this.alertFooterService.getAlerts();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AlertFooterComponent.prototype, "alerts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AlertFooterComponent.prototype, "dismissAlert", void 0);
    AlertFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-alert-footer',
            template: __webpack_require__(/*! ./alert-footer.component.html */ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.html"),
            styles: [__webpack_require__(/*! ./alert-footer.component.scss */ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_alert_footer_service__WEBPACK_IMPORTED_MODULE_2__["AlertFooterService"]])
    ], AlertFooterComponent);
    return AlertFooterComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.service.ts":
/*!****************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/alert-footer/alert-footer.service.ts ***!
  \****************************************************************************************/
/*! exports provided: AlertFooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertFooterService", function() { return AlertFooterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertFooterService = /** @class */ (function () {
    function AlertFooterService() {
        this.alerts = [];
    }
    AlertFooterService.prototype.getAlerts = function () {
        return this.alerts;
    };
    AlertFooterService.prototype.registerFooterAlert = function (data) {
        this.alerts.unshift(data);
    };
    AlertFooterService.prototype.dismissFooterAlert = function (i) {
        this.alerts = this.alerts.filter(function (obj, idx) {
            if (idx === i) {
                return false;
            }
            return true;
        });
    };
    AlertFooterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AlertFooterService);
    return AlertFooterService;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/alert/alert.component.html":
/*!******************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/alert/alert.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"[selectedType]\">\r\n  <div class=\"alert-container\">\r\n    <div class=\"alert-body\">\r\n      <fa-icon [icon]=\"selectedIcon\" size=\"lg\"></fa-icon>\r\n      <span class=\"alert-header\">{{title}}</span>\r\n      <span class=\"sr-only\">{{this.types[this.type]?.sr}}</span>\r\n      <span class=\"float-right\" *ngIf=\"showClose\" (click)=\"closeAlert()\" tabindex=\"0\" (keyup.enter)=\"closeAlert()\">\r\n        <fa-icon icon=\"times-circle\" size=\"1x\">\r\n        </fa-icon>\r\n      </span>\r\n    </div>\r\n    <div class=\"alert-body\">\r\n      <p *ngIf=\"description\">{{description}}</p>\r\n      <div *ngIf=\"descriptionList?.length > 0\">\r\n        <ul *ngFor=\"let desc of descriptionList\" type=\"disc\">\r\n          <li>{{desc}}</li>\r\n        </ul>\r\n      </div>\r\n      <ng-content select=\"[main-content]\"></ng-content>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/alert/alert.component.scss":
/*!******************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/alert/alert.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  background: white; }\n\n.float-right {\n  float: right; }\n\n.alert-body {\n  padding: 10px 5px; }\n\n.alert-body fa-icon {\n    margin-right: 4px;\n    margin-left: 2px; }\n\n.alert-error .alert-body,\n.alert-error .closeIcon {\n  border-left: 15px solid #EC1942 !important; }\n\n.alert-error .alert-body fa-icon,\n  .alert-error .closeIcon fa-icon {\n    color: #EC1942 !important; }\n\n.alert-error .alert-header {\n  color: #EC1942; }\n\n.alert-info .alert-body,\n.alert-info .closeIcon {\n  border-left: 10px solid #00A7CF; }\n\n.alert-info .alert-body fa-icon,\n  .alert-info .closeIcon fa-icon {\n    color: #00A7CF; }\n\n.alert-info .alert-header {\n  color: #00A7CF; }\n\n.alert-success .alert-body,\n.alert-success .closeIcon {\n  border-left: 10px solid #4aa564; }\n\n.alert-success .alert-body fa-icon,\n  .alert-success .closeIcon fa-icon {\n    color: #4aa564; }\n\n.alert-success .alert-header {\n  color: #4aa564; }\n\n.alert-warning .alert-body,\n.alert-warning .closeIcon {\n  border-left: 10px solid #D84009; }\n\n.alert-warning .alert-body fa-icon,\n  .alert-warning .closeIcon fa-icon {\n    color: #D84009; }\n\n.alert-warning .alert-header {\n  color: #D84009; }\n\n.alert-div {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  max-width: 50em;\n  font-size: 16px; }\n\n.alert-header {\n  font-weight: 600;\n  font-size: 20px;\n  margin-bottom: 5px;\n  padding-left: 5px; }\n\n.alert-container {\n  margin-bottom: 15px;\n  margin-top: 15px;\n  max-width: 50em;\n  font-size: 16px;\n  box-shadow: 2px 1px 1px 1px rgba(85, 84, 84, 0.12); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0L0M6XFxVc2Vyc1xceWVycmFcXERlc2t0b3BcXGFuZ3VsYXItY29tcG9uZW50c1xcc3ktYW5ndWxhci1jb21wb25lbnRzL3Byb2plY3RzXFxzeS1jb21wb25lbnRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcYWxlcnRcXGFsZXJ0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcc2Fzc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJDQTZCLEVBQUE7O0FERS9CO0VBQ0UsWUFDRixFQUFBOztBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRG5CO0lBR0ksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQUlwQjs7RUFHSSwwQ0FBbUQsRUFBQTs7QUFIdkQ7O0lBS00seUJBQWtDLEVBQUE7O0FBTHhDO0VBU0ksY0NRcUIsRUFBQTs7QURMekI7O0VBR0ksK0JDQ29CLEVBQUE7O0FESnhCOztJQUtNLGNDRGtCLEVBQUE7O0FESnhCO0VBU0ksY0NMb0IsRUFBQTs7QURReEI7O0VBR0ksK0JDWnVCLEVBQUE7O0FEUzNCOztJQUtNLGNDZHFCLEVBQUE7O0FEUzNCO0VBU0ksY0NsQnVCLEVBQUE7O0FEcUIzQjs7RUFHSSwrQkN6QnVCLEVBQUE7O0FEc0IzQjs7SUFLTSxjQzNCcUIsRUFBQTs7QURzQjNCO0VBU0ksY0MvQnVCLEVBQUE7O0FEa0MzQjtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0RDM0VzQyxFQUFBIiwiZmlsZSI6InByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvY29sb3JzXCI7XHJcbmRpdiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG59XHJcbi5mbG9hdC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0XHJcbn1cclxuLmFsZXJ0LWJvZHkge1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGZhLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0LWVycm9yIHtcclxuICAuYWxlcnQtYm9keSxcclxuICAuY2xvc2VJY29uIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICRhbGVydEVycm9yQ29sb3IgIWltcG9ydGFudDtcclxuICAgIGZhLWljb24ge1xyXG4gICAgICBjb2xvcjogJGFsZXJ0RXJyb3JDb2xvciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWxlcnQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAkYWxlcnRFcnJvckNvbG9yO1xyXG4gIH1cclxufVxyXG4uYWxlcnQtaW5mbyB7XHJcbiAgLmFsZXJ0LWJvZHksXHJcbiAgLmNsb3NlSWNvbiB7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkYWxlcnRJbmZvQ29sb3I7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6ICRhbGVydEluZm9Db2xvcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmFsZXJ0LWhlYWRlciB7XHJcbiAgICBjb2xvcjogJGFsZXJ0SW5mb0NvbG9yO1xyXG4gIH1cclxufVxyXG4uYWxlcnQtc3VjY2VzcyB7XHJcbiAgLmFsZXJ0LWJvZHksXHJcbiAgLmNsb3NlSWNvbiB7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkYWxlcnRTdWNjZXNzQ29sb3I7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6ICRhbGVydFN1Y2Nlc3NDb2xvcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmFsZXJ0LWhlYWRlciB7XHJcbiAgICBjb2xvcjogJGFsZXJ0U3VjY2Vzc0NvbG9yO1xyXG4gIH1cclxufVxyXG4uYWxlcnQtd2FybmluZyB7XHJcbiAgLmFsZXJ0LWJvZHksXHJcbiAgLmNsb3NlSWNvbiB7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkYWxlcnRXYXJuaW5nQ29sb3I7XHJcbiAgICBmYS1pY29uIHtcclxuICAgICAgY29sb3I6ICRhbGVydFdhcm5pbmdDb2xvcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmFsZXJ0LWhlYWRlciB7XHJcbiAgICBjb2xvcjogJGFsZXJ0V2FybmluZ0NvbG9yO1xyXG4gIH1cclxufVxyXG4uYWxlcnQtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXgtd2lkdGg6IDUwZW07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uYWxlcnQtaGVhZGVyIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5hbGVydC1jb250YWluZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXgtd2lkdGg6IDUwZW07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IDFweCAkY29sb3ItZ3JleS1kYXJrO1xyXG59XHJcbiIsIiRjb2xvci1ncmV5OiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbiRjb2xvci1ibGFjazogcmdiKDAsIDAsIDApO1xyXG4kY29sb3Itd2hpdGU6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kY2FyZC1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4kY29sb3ItZ3JlZW46IzQyODU0YTtcclxuJGNvbG9yLXJlZDogI0ZGMDAwMDtcclxuJGNvbG9yLWdyZWVuLW1lZGl1bTogIzg3ZDlhMztcclxuJGNvbG9yLWdyZWVuLWxpZ2h0OiAjQUREOEJCO1xyXG4kY29sb3ItZ3JleS1kYXJrOiByZ2JhKDg1LCA4NCwgODQsIDAuMTIpO1xyXG4kY29sb3ItZ3JleS1saWdodDogI2YxZjFmMTtcclxuJGNvbG9yLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIC42NSk7XHJcbiRjb2xvci1saWdodC1yZWQ6ICNmYTZiNmI7XHJcbiRjb2xvci1yZWQtbWVkaXVtOiNmZjdlNjVhNjtcclxuJGNvbG9yLWRlZXAtcHVycGxlOiAjYjM4OGZmO1xyXG4kY29sb3ItdGVhbDogIzRkOWM4YTtcclxuJGNvbG9yLXRlYWwtbGlnaHQ6IzUyYzdiODtcclxuJGNvbG9yLWxpbWUtbGlnaHRlcjogI2U2ZWU5YztcclxuJGNvbG9yLWxpZ2h0LW9yYW5nZTogI2ZmY2NiYztcclxuJGNvbG9yLWluZGlnbzogI2MwY2ZmZjtcclxuJGNvbG9yLWRlZXAtaW5kaWdvOiAjN2E5OWZkO1xyXG4kY29sb3ItYmx1ZTojMDAyNmNhO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQtZGFyazogcmdiYSgwLCAwLCAwLCAuNzUpO1xyXG4kbGlnaHQtYnJvd246ICNlZmViZTk7XHJcbiRkYXJrLWJyb3duOiAjYTY5Yjk3O1xyXG4kY29sb3Itb3JhbmdlOiByZ2IoMjM4LCAxMjAsIDMwKTtcclxuJGNvbG9yLWN5YW46ICM0YmMxZDI7XHJcbiRjb2xvci1ncmF5OnJnYmEoMjU1LCAyNTUsIDI1NSwgLjI1KTtcclxuJGNvbG9yLXRyYW5zcGFyZW50LWxpZ2h0OiByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItY3lhbjtcclxuJGFsZXJ0V2FybmluZ0NvbG9yOiAjRDg0MDA5O1xyXG4kYWxlcnRTdWNjZXNzQ29sb3I6ICM0YWE1NjQ7XHJcbiRhbGVydEluZm9Db2xvcjogIzAwQTdDRjtcclxuJGFsZXJ0RXJyb3JDb2xvcjogI0VDMTk0MjtcclxuJGNvbG9yLXByaW1hcnktZGFyayA6ICMwMDgwODA7XHJcbiRob3Jpem9udGFsLXBhZGRpbmc6IDFyZW07XHJcbiR2ZXJ0aWNhbC1wYWRkaW5nOiAzcmVtO1xyXG4kaWNvbi1zaXplOiAycmVtO1xyXG4kbGlnaHQtZ3JleTogIzljOWM5YztcclxuJGlucHV0LW1heC13aWR0aDogNDZyZW0gIWRlZmF1bHQ7XHJcbiR3YXJuaW5nQmFja2dyb3VuZENvbG9yOiAjRkZGQUYzOyJdfQ== */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/alert/alert.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/alert/alert.component.ts ***!
  \****************************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



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
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emitted event when toggling content
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.types = {
            'error': { class: 'alert-error', sr: 'error alert' },
            'info': { class: 'alert-info', sr: 'info alert' },
            'success': { class: 'alert-success', sr: 'success alert' },
            'warning': { class: 'alert-warning', sr: 'warning alert' },
        };
        this.selectedIconTypes = {
            'success': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheckCircle"],
            'error': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"],
            'info': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"],
            'warning': _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"]
        };
        this.selectedType = this.types.success.class;
        this.selectedIcon = this.selectedIconTypes.success;
    }
    AlertComponent.prototype.typeNotDefined = function () {
        if (!this.type || this.type.length === 0) {
            return true;
        }
        if (!this.types[this.type]) {
            return true;
        }
        return false;
    };
    AlertComponent.prototype.closeAlert = function () {
        this.onDismissClick();
    };
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.typeNotDefined()) {
            this.selectedType = this.types[this.type].class;
            this.selectedIcon = this.selectedIconTypes[this.type];
        }
        if (this.dismissTimer > 0 && !this.userMustDismiss) {
            setTimeout(function () {
                _this.dismiss.emit();
            }, this.dismissTimer);
        }
    };
    AlertComponent.prototype.onDismissClick = function () {
        this.dismiss.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AlertComponent.prototype, "descriptionList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlertComponent.prototype, "showClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlertComponent.prototype, "userMustDismiss", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AlertComponent.prototype, "dismissTimer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AlertComponent.prototype, "dismiss", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AlertComponent.prototype, "toggle", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./projects/sy-components/src/lib/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./projects/sy-components/src/lib/components/alert/alert.component.scss")]
        })
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.html":
/*!******************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"audit-trail\">\n  <div>\n    <label>Last Modified :</label>\n    <label> {{lastModified  | date : dateFormat }}</label>\n  </div>\n  <div>\n    <label>Last Modified By :</label>\n    <label>\n      <a href=\"mailto:{{lastModifiedByEmail}}\">{{lastModifiedByEmail}}</a>\n    </label>\n  </div>\n  <div>\n    <label>Created :</label>\n    <label>{{created |  date : dateFormat}}</label>\n  </div>\n  <div>\n    <label>Created By :</label>\n    <label>\n      <a href=\"mailto:{{createdByEmail}}\">{{createdByEmail}}</a>\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.scss":
/*!******************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".audit-trail {\n  background-color: #ADD8BB;\n  min-height: 100px;\n  max-width: 600px;\n  padding: 10px; }\n\n.audit-trail div label {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  padding-top: 5px;\n  color: black; }\n\n.audit-trail div label:first-child {\n  width: 150px;\n  font-weight: bold;\n  display: inline-table; }\n\n.audit-trail div a {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2F1ZGl0LXRyYWlsL0M6XFxVc2Vyc1xceWVycmFcXERlc2t0b3BcXGFuZ3VsYXItY29tcG9uZW50c1xcc3ktYW5ndWxhci1jb21wb25lbnRzL3Byb2plY3RzXFxzeS1jb21wb25lbnRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcYXVkaXQtdHJhaWxcXGF1ZGl0LXRyYWlsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYXVkaXQtdHJhaWwvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcc2Fzc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJDS3VCO0VESnZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUViO0VBQ0ksb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixnQkFBZTtFQUNmLFlDVmtCLEVBQUE7O0FEYXRCO0VBQ0ksWUFBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFlLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYXVkaXQtdHJhaWwvYXVkaXQtdHJhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zYXNzL2NvbG9ycyc7XG4uYXVkaXQtdHJhaWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbi1saWdodDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4gICAgLmF1ZGl0LXRyYWlsIGRpdiBsYWJlbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDo1cHg7ICAgICAgXG4gICAgICAgIGNvbG9yOiAkY29sb3ItYmxhY2s7ICBcbiAgICB9XG5cbiAgICAuYXVkaXQtdHJhaWwgZGl2IGxhYmVsOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6MTUwcHg7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlzcGxheTppbmxpbmUtdGFibGU7XG4gICAgfVxuICAgIFxuICAgIC5hdWRpdC10cmFpbCBkaXYgYXtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOjVweDsgICAgICBcbiAgICB9IiwiJGNvbG9yLWdyZXk6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuJGNvbG9yLWJsYWNrOiByZ2IoMCwgMCwgMCk7XHJcbiRjb2xvci13aGl0ZTpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRjYXJkLWJhY2tncm91bmQ6ICNmZmY7XHJcbiRjb2xvci1ncmVlbjojNDI4NTRhO1xyXG4kY29sb3ItcmVkOiAjRkYwMDAwO1xyXG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjODdkOWEzO1xyXG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICNBREQ4QkI7XHJcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoODUsIDg0LCA4NCwgMC4xMik7XHJcbiRjb2xvci1ncmV5LWxpZ2h0OiAjZjFmMWYxO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuJGNvbG9yLWxpZ2h0LXJlZDogI2ZhNmI2YjtcclxuJGNvbG9yLXJlZC1tZWRpdW06I2ZmN2U2NWE2O1xyXG4kY29sb3ItZGVlcC1wdXJwbGU6ICNiMzg4ZmY7XHJcbiRjb2xvci10ZWFsOiAjNGQ5YzhhO1xyXG4kY29sb3ItdGVhbC1saWdodDojNTJjN2I4O1xyXG4kY29sb3ItbGltZS1saWdodGVyOiAjZTZlZTljO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjZmZjY2JjO1xyXG4kY29sb3ItaW5kaWdvOiAjYzBjZmZmO1xyXG4kY29sb3ItZGVlcC1pbmRpZ286ICM3YTk5ZmQ7XHJcbiRjb2xvci1ibHVlOiMwMDI2Y2E7XHJcbiRjb2xvci10cmFuc3BhcmVudC1kYXJrOiByZ2JhKDAsIDAsIDAsIC43NSk7XHJcbiRsaWdodC1icm93bjogI2VmZWJlOTtcclxuJGRhcmstYnJvd246ICNhNjliOTc7XHJcbiRjb2xvci1vcmFuZ2U6IHJnYigyMzgsIDEyMCwgMzApO1xyXG4kY29sb3ItY3lhbjogIzRiYzFkMjtcclxuJGNvbG9yLWdyYXk6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1jeWFuO1xyXG4kYWxlcnRXYXJuaW5nQ29sb3I6ICNEODQwMDk7XHJcbiRhbGVydFN1Y2Nlc3NDb2xvcjogIzRhYTU2NDtcclxuJGFsZXJ0SW5mb0NvbG9yOiAjMDBBN0NGO1xyXG4kYWxlcnRFcnJvckNvbG9yOiAjRUMxOTQyO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrIDogIzAwODA4MDtcclxuJGhvcml6b250YWwtcGFkZGluZzogMXJlbTtcclxuJHZlcnRpY2FsLXBhZGRpbmc6IDNyZW07XHJcbiRpY29uLXNpemU6IDJyZW07XHJcbiRsaWdodC1ncmV5OiAjOWM5YzljO1xyXG4kaW5wdXQtbWF4LXdpZHRoOiA0NnJlbSAhZGVmYXVsdDtcclxuJHdhcm5pbmdCYWNrZ3JvdW5kQ29sb3I6ICNGRkZBRjM7Il19 */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.ts":
/*!****************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AuditTrailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTrailComponent", function() { return AuditTrailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuditTrailComponent = /** @class */ (function () {
    function AuditTrailComponent() {
        this.dateFormat = 'MMM dd, yyyy hh:mm:ss a';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuditTrailComponent.prototype, "lastModifiedByEmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuditTrailComponent.prototype, "createdByEmail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuditTrailComponent.prototype, "created", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuditTrailComponent.prototype, "lastModified", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AuditTrailComponent.prototype, "dateFormat", void 0);
    AuditTrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-audit-trail',
            template: __webpack_require__(/*! ./audit-trail.component.html */ "./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.html"),
            styles: [__webpack_require__(/*! ./audit-trail.component.scss */ "./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.scss")]
        })
    ], AuditTrailComponent);
    return AuditTrailComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.html":
/*!****************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n    <div class=\"container\">\n        <h1 class=\"main_footer\">{{footerTitle}}</h1>\n        <hr>\n        <ng-container *ngTemplateOutlet=\"mainRowTemplate\"></ng-container>\n\n        <hr>\n        <div class=\"row\">\n            <ng-container *ngTemplateOutlet=\"socialMediaTemplate\"></ng-container>\n        </div>\n    </div>\n</div>\n\n<ng-template #mainRowTemplate>\n    <div class=\"row\">\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec1 of footerSection1\">\n                <a href=\"sec1.path\">{{sec1.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec2 of footerSection2\">\n                <a href=\"sec2.path\">{{sec2.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec3 of footerSection3\">\n                <a href=\"sec3.path\">{{sec3.label}}</a>\n            </p>\n        </div>\n        <div class=\"content-container\">\n            <p *ngFor=\"let sec4 of footerSection4\">\n                <a *ngIf=\"!hasLogo\" href=\"sec4.path\">{{sec4.label}}</a>\n            </p>\n            <img *ngIf=\"hasLogo\" [src]=\"imageInfo.path\" [alt]=\"imageInfo.label\" class=\"hidden-xs img-responsive\">\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #socialMediaTemplate>\n    <div class=\"social center-block\">\n        <div class=\"social_facebook\">\n            <a href=\"https://www.facebook.com/delaware.gov\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-facebook-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"facebook-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_twitter\">\n            <a href=\"https://twitter.com/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-twitter-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"twitter-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_flickr\">\n            <a href=\"https://www.flickr.com/groups/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-flickr fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"flickr\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_youtube\">\n            <a href=\"https://www.youtube.com/user/DelawareGovernment\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-youtube-square fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"youtube-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z\">\n                    </path>\n                </svg></a>\n        </div>\n        <div class=\"social_rss\">\n            <a href=\"https://www.instagram.com/delaware_gov/\" target=\"_blank\"><svg\n                    class=\"svg-inline--fa fa-instagram fa-w-14 fa-3x\" aria-hidden=\"true\" data-prefix=\"fab\"\n                    data-icon=\"instagram\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"\n                    data-fa-i2svg=\"\">\n                    <path fill=\"currentColor\"\n                        d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\">\n                    </path>\n                </svg></a>\n        </div>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.scss":
/*!****************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 15px;\n  display: block;\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n.footer_logo {\n  float: left;\n  margin-right: 5px;\n  border: 0px;\n  width: 50px;\n  height: 50px; }\n\n.main_footer {\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n  font-weight: 500;\n  color: #fff !important;\n  font-size: 40px;\n  margin-top: 20px; }\n\nh1 {\n  color: #fff !important; }\n\nhr {\n  -moz-border-bottom-colors: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  -webkit-border-image: none;\n       -o-border-image: none;\n          border-image: none;\n  border: 1px solid #fff;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: white;\n  width: 100%; }\n\np {\n  color: white;\n  display: block;\n  margin: 0;\n  padding: 0;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px; }\n\n#footer a,\n#footer a:link,\n#footer a:visited {\n  text-decoration: none;\n  color: #fff;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  font-size: 16px;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif; }\n\n.row {\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.content-container {\n  width: 22%;\n  float: left;\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-bottom: 25px; }\n\ndiv {\n  display: block; }\n\n.img-responsive > img {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.col-lg-4 {\n  float: left;\n  width: 33.33333333%;\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n#footer {\n  background-color: #2d3032;\n  font-size: 15px;\n  min-height: 100%;\n  clear: both;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  line-height: 1.5rem;\n  max-height: 40rem;\n  width: 100%;\n  color: #fff; }\n\n.social {\n  max-width: 500px; }\n\n.center-block {\n  width: 22%;\n  margin-right: 10px; }\n\n.social {\n  max-width: 500px;\n  display: block;\n  margin-left: 20px; }\n\n.social_facebook {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  display: inline-block; }\n\n.social_facebook img {\n  position: absolute;\n  left: 0;\n  height: 50px;\n  width: 50px;\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out; }\n\n.social_facebook img.top:hover {\n  opacity: 0;\n  height: 50px;\n  width: 50px; }\n\n.social_twitter {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  display: inline-block; }\n\n.social_twitter img {\n  position: absolute;\n  left: 0;\n  height: 50px;\n  width: 50px;\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out; }\n\n.social_twitter img.top:hover {\n  opacity: 0;\n  height: 50px;\n  width: 50px; }\n\n.social_flickr {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  display: inline-block; }\n\n.social_flickr img {\n  position: absolute;\n  left: 0;\n  height: 50px;\n  width: 50px;\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out; }\n\n.social_flickr img.top:hover {\n  opacity: 0;\n  height: 50px;\n  width: 50px; }\n\n.social_youtube {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  display: inline-block; }\n\n.social_youtube img {\n  position: absolute;\n  left: 0;\n  height: 50px;\n  width: 50px;\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out; }\n\n.social_youtube img.top:hover {\n  opacity: 0;\n  height: 50px;\n  width: 50px; }\n\n.social_rss {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  margin: 0 auto;\n  display: inline-block; }\n\n.social_rss img {\n  position: absolute;\n  left: 0;\n  height: 50px;\n  width: 50px;\n  -webkit-transition: opacity 0.5s ease-in-out;\n  transition: opacity 0.5s ease-in-out; }\n\n.social_rss img.top:hover {\n  opacity: 0;\n  height: 50px;\n  width: 50px; }\n\n.footer_logo {\n  float: left;\n  margin-right: 5px;\n  border: 0px;\n  width: 50px;\n  height: 50px; }\n\nimg {\n  vertical-align: middle;\n  border: 0; }\n\n@media (max-width: 624px) {\n  .content-container {\n    width: 90%;\n    float: none;\n    align-content: center; }\n  .row {\n    margin-left: 15%;\n    text-align: left; }\n  .main_footer {\n    font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n    font-weight: 500;\n    color: #fff !important;\n    font-size: 25px;\n    margin-top: 20px; }\n  .img-responsive > img {\n    display: block;\n    max-width: 80%;\n    height: auto;\n    text-align: center;\n    margin-left: -5% !important; }\n  #footer {\n    max-height: 100rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Rvcy1mb290ZXIvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxkb3MtZm9vdGVyXFxkb3MtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBTztVQUFQLE9BQU8sRUFBQTs7QUFHVDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxzREFBc0Q7RUFDdEQsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDBCQUFrQjtPQUFsQixxQkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFNBQVE7RUFDUixVQUFVO0VBR1YseUJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix1QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRXhCOzs7RUFHRSxxQkFBcUI7RUFDckIsV0FBVztFQUlYLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNEQUFzRCxFQUFBOztBQUd4RDtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2Q7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYixtQkFBTztVQUFQLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDRDQUE0QztFQUc1QyxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsNENBQTRDO0VBRzVDLG9DQUFvQyxFQUFBOztBQUV0QztFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCw0Q0FBNEM7RUFHNUMsb0NBQW9DLEVBQUE7O0FBRXRDO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDRDQUE0QztFQUc1QyxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsNENBQTRDO0VBRzVDLG9DQUFvQyxFQUFBOztBQUV0QztFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNCQUFzQjtFQUN0QixTQUFTLEVBQUE7O0FBR1g7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7RUFFdkI7SUFDRSxnQkFBZ0I7SUFDakIsZ0JBQWdCLEVBQUE7RUFFakI7SUFDRSxzREFBc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTRCLEVBQUE7RUFFOUI7SUFDRSxrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9zeS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9kb3MtZm9vdGVyL2Rvcy1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5mb290ZXJfbG9nbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5tYWluX2Zvb3RlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmgxIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbmhyIHtcclxuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xyXG4gIC1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yczogbm9uZTtcclxuICAtbW96LWJvcmRlci10b3AtY29sb3JzOiBub25lO1xyXG4gIGJvcmRlci1pbWFnZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC8vIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gIC8vIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4jZm9vdGVyIGEsXHJcbiNmb290ZXIgYTpsaW5rLFxyXG4jZm9vdGVyIGE6dmlzaXRlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XHJcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDIyJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG5kaXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaW1nLXJlc3BvbnNpdmUgPiBpbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbC1sZy00IHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzMuMzMzMzMzMzMlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDMwMzI7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgbWF4LWhlaWdodDogNDByZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zb2NpYWwge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgd2lkdGg6IDIyJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnNvY2lhbF9mYWNlYm9vayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnNvY2lhbF9mYWNlYm9vayBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5zb2NpYWxfZmFjZWJvb2sgaW1nLnRvcDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnNvY2lhbF90d2l0dGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc29jaWFsX3R3aXR0ZXIgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4uc29jaWFsX3R3aXR0ZXIgaW1nLnRvcDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnNvY2lhbF9mbGlja3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zb2NpYWxfZmxpY2tyIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnNvY2lhbF9mbGlja3IgaW1nLnRvcDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnNvY2lhbF95b3V0dWJlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uc29jaWFsX3lvdXR1YmUgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4uc29jaWFsX3lvdXR1YmUgaW1nLnRvcDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLnNvY2lhbF9yc3Mge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zb2NpYWxfcnNzIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnNvY2lhbF9yc3MgaW1nLnRvcDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5mb290ZXJfbG9nbyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjI0cHgpIHtcclxuICAuY29udGVudC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5tYWluX2Zvb3RlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmltZy1yZXNwb25zaXZlID4gaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTUlICFpbXBvcnRhbnQgO1xyXG4gIH1cclxuICAjZm9vdGVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHJlbTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DosFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosFooterComponent", function() { return DosFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DosFooterComponent.prototype, "footerTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DosFooterComponent.prototype, "footerSection1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DosFooterComponent.prototype, "footerSection4", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DosFooterComponent.prototype, "imageInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DosFooterComponent.prototype, "hasLogo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DosFooterComponent.prototype, "footerSection3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DosFooterComponent.prototype, "footerSection2", void 0);
    DosFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dos-footer',
            template: __webpack_require__(/*! ./dos-footer.component.html */ "./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.html"),
            styles: [__webpack_require__(/*! ./dos-footer.component.scss */ "./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.scss")]
        })
    ], DosFooterComponent);
    return DosFooterComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/dos-header/dos-header.component.html":
/*!****************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/dos-header/dos-header.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dos-header-toolbar\">\n    <div class=\"container clf-header\">\n        <div class=\"navbar-header\">\n            <a href=\"https://delaware.gov\">\n                <img src=\"https://gic.delaware.gov/wp-content/themes/dosgic_GIC_theme/img/delaware_global_d@2x.png\"\n                    alt=\"The Delaware.gov logo\" class=\"border_none delaware_d_logo\">\n            </a>\n            <a href=\"https://delaware.gov\">\n                <img src=\"https://gic.delaware.gov/wp-content/themes/dosgic_GIC_theme/img/delaware_global_text@2x.png\"\n                    alt=\"Delaware.gov - The Offical Website of the First State\" class=\"border_none delaware_text\">\n            </a>\n        </div>\n        <div class=\"masthead-nav\">\n            <ul>\n                <li>\n                    <a target=\"_blank\" href=\"http://delaware.gov/topics/agencylist_alpha\">\n                        <fa-icon [icon]=\"['far', 'building']\" size=\"lg\"></fa-icon>\n                        Agencies\n                    </a>\n                </li>\n                <li>\n                    <a target=\"_blank\" href=\"http://news.delaware.gov\">\n                        <fa-icon [icon]=\"['far', 'newspaper']\" size=\"lg\"></fa-icon>\n                        News\n                    </a>\n                </li>\n                <li>\n                    <a target=\"_blank\" href=\"http://delaware.gov/topics\">\n                        <fa-icon [icon]=\"['far', 'comments']\" size=\"lg\"></fa-icon>\n                        Topics\n                    </a>\n                </li>\n                <li>\n                    <a target=\"_blank\" href=\"http://delaware.gov/help/degov-contact.shtml\">\n                        <fa-icon [icon]=\"['fas', 'mobile-alt']\" size=\"lg\"></fa-icon>\n                        Contact\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/dos-header/dos-header.component.scss":
/*!****************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/dos-header/dos-header.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dos-header-toolbar {\n  max-height: 80px;\n  background-color: #4bc1d2;\n  min-height: 80px;\n  margin: 0px;\n  width: 100%; }\n\n.navbar-header {\n  padding-right: 50px;\n  margin-top: 10px; }\n\n.navbar-header a {\n  margin-bottom: 10px;\n  color: transparent; }\n\nfa-icon {\n  color: white;\n  width: 1.25em;\n  height: 1em;\n  display: inline-block;\n  margin-right: 8px; }\n\n.clf-header {\n  margin-left: 15px;\n  margin-bottom: 1px;\n  background-color: #4bc1d2;\n  color: white;\n  border-top: 10px solid #4bc1d2;\n  border-bottom: 10px solid #4bc1d2; }\n\n.delaware_d_logo {\n  margin-left: 0px;\n  width: 40px;\n  height: 40px; }\n\n.delaware_text {\n  margin-top: 5px;\n  margin-left: 0px;\n  width: 160px;\n  height: 30px; }\n\nimg {\n  border: 0;\n  vertical-align: middle;\n  max-width: 10rem;\n  margin-right: 5px; }\n\n.masthead-nav {\n  display: inline-block;\n  text-align: center; }\n\n.masthead-nav ul li a {\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Open Sans\", sans-serif !important;\n  text-decoration: none;\n  padding-bottom: 15px;\n  border-bottom: 2px solid transparent;\n  margin-right: 20px;\n  max-width: 2rem; }\n\n.masthead-nav > ul > li > a:hover {\n  margin-bottom: 10px;\n  border-bottom: 2px solid rgba(255, 255, 255, 0.25); }\n\n.title {\n  margin-top: 15px;\n  padding-right: 5px; }\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n\nul {\n  display: -webkit-box;\n  display: flex;\n  list-style: none; }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 580px) {\n  .masthead-nav {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Rvcy1oZWFkZXIvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxkb3MtaGVhZGVyXFxkb3MtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZG9zLWhlYWRlci9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9wcm9qZWN0c1xcc3ktY29tcG9uZW50c1xcc3JjXFxzYXNzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJDc0JrQjtFRHJCbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlDbEI2QjtFRG1CN0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxxQkFBcUI7RUFFckIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkNOa0I7RURPbEIsWUM5QjZCO0VEK0I3Qiw4QkNSa0I7RURTbEIsaUNDVGtCLEVBQUE7O0FEWXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUM3RDZCO0VEOEQ3QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLCtDQUErQztFQUMvQyxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUFtQjtFQUNuQixrRENsRGtDLEVBQUE7O0FEcURwQztFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBRWlDO0lBQWlCLGFBQWEsRUFBQSxFQUFJIiwiZmlsZSI6InByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Rvcy1oZWFkZXIvZG9zLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzL2NvbG9yc1wiO1xuLmRvcy1oZWFkZXItdG9vbGJhciB7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1jeWFuO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXZiYXItaGVhZGVyIHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5hdmJhci1oZWFkZXIgYSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuZmEtaWNvbiB7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIHdpZHRoOiAxLjI1ZW07XG4gIGhlaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8vIHZlcnRpY2FsLWFsaWduOiAtMC4xMjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jbGYtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWN5YW47XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgJGNvbG9yLWN5YW47XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgJGNvbG9yLWN5YW47XG59XG5cbi5kZWxhd2FyZV9kX2xvZ28ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZGVsYXdhcmVfdGV4dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmltZyB7XG4gIGJvcmRlcjogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5tYXN0aGVhZC1uYXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hc3RoZWFkLW5hdiB1bCBsaSBhIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMnJlbTtcbn1cblxuLm1hc3RoZWFkLW5hdiA+IHVsID4gbGkgPiBhOmhvdmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvci1ncmF5O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIFxuYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpIFxuYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTgwcHgpIHsgLm1hc3RoZWFkLW5hdiAgeyBkaXNwbGF5OiBub25lOyB9fVxuIiwiJGNvbG9yLWdyZXk6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuJGNvbG9yLWJsYWNrOiByZ2IoMCwgMCwgMCk7XHJcbiRjb2xvci13aGl0ZTpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRjYXJkLWJhY2tncm91bmQ6ICNmZmY7XHJcbiRjb2xvci1ncmVlbjojNDI4NTRhO1xyXG4kY29sb3ItcmVkOiAjRkYwMDAwO1xyXG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjODdkOWEzO1xyXG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICNBREQ4QkI7XHJcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoODUsIDg0LCA4NCwgMC4xMik7XHJcbiRjb2xvci1ncmV5LWxpZ2h0OiAjZjFmMWYxO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuJGNvbG9yLWxpZ2h0LXJlZDogI2ZhNmI2YjtcclxuJGNvbG9yLXJlZC1tZWRpdW06I2ZmN2U2NWE2O1xyXG4kY29sb3ItZGVlcC1wdXJwbGU6ICNiMzg4ZmY7XHJcbiRjb2xvci10ZWFsOiAjNGQ5YzhhO1xyXG4kY29sb3ItdGVhbC1saWdodDojNTJjN2I4O1xyXG4kY29sb3ItbGltZS1saWdodGVyOiAjZTZlZTljO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjZmZjY2JjO1xyXG4kY29sb3ItaW5kaWdvOiAjYzBjZmZmO1xyXG4kY29sb3ItZGVlcC1pbmRpZ286ICM3YTk5ZmQ7XHJcbiRjb2xvci1ibHVlOiMwMDI2Y2E7XHJcbiRjb2xvci10cmFuc3BhcmVudC1kYXJrOiByZ2JhKDAsIDAsIDAsIC43NSk7XHJcbiRsaWdodC1icm93bjogI2VmZWJlOTtcclxuJGRhcmstYnJvd246ICNhNjliOTc7XHJcbiRjb2xvci1vcmFuZ2U6IHJnYigyMzgsIDEyMCwgMzApO1xyXG4kY29sb3ItY3lhbjogIzRiYzFkMjtcclxuJGNvbG9yLWdyYXk6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1jeWFuO1xyXG4kYWxlcnRXYXJuaW5nQ29sb3I6ICNEODQwMDk7XHJcbiRhbGVydFN1Y2Nlc3NDb2xvcjogIzRhYTU2NDtcclxuJGFsZXJ0SW5mb0NvbG9yOiAjMDBBN0NGO1xyXG4kYWxlcnRFcnJvckNvbG9yOiAjRUMxOTQyO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrIDogIzAwODA4MDtcclxuJGhvcml6b250YWwtcGFkZGluZzogMXJlbTtcclxuJHZlcnRpY2FsLXBhZGRpbmc6IDNyZW07XHJcbiRpY29uLXNpemU6IDJyZW07XHJcbiRsaWdodC1ncmV5OiAjOWM5YzljO1xyXG4kaW5wdXQtbWF4LXdpZHRoOiA0NnJlbSAhZGVmYXVsdDtcclxuJHdhcm5pbmdCYWNrZ3JvdW5kQ29sb3I6ICNGRkZBRjM7Il19 */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/dos-header/dos-header.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/dos-header/dos-header.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DosHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DosHeaderComponent", function() { return DosHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var DosHeaderComponent = /** @class */ (function () {
    function DosHeaderComponent() {
        this.building = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBuilding"];
        this.faNewspaper = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faNewspaper"];
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComments"];
        this.faMobileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMobileAlt"];
    }
    DosHeaderComponent.prototype.ngOnInit = function () {
    };
    DosHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dos-header',
            template: __webpack_require__(/*! ./dos-header.component.html */ "./projects/sy-components/src/lib/components/dos-header/dos-header.component.html"),
            styles: [__webpack_require__(/*! ./dos-header.component.scss */ "./projects/sy-components/src/lib/components/dos-header/dos-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DosHeaderComponent);
    return DosHeaderComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/download/download.component.html":
/*!************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/download/download.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"download-container-header\">\r\n    <h2>Packages</h2>\r\n    <ng-container *ngIf=\"packages\">\r\n      <span class=\"download-button\">\r\n        <a class=\"usa-button-small usa-button-gray\" *ngIf=\"hasPublicPackages() && downloadAllUrl\"\r\n          [attr.href]=\"downloadAllUrl\">\r\n          <!-- <span class=\"fa fa-cloud-download\" aria-hidden=\"true\"></span> -->\r\n          <fa-icon [icon]=\"['fas', 'cloud-download-alt']\" size=\"lg\"></fa-icon>\r\n          <span>Download All Packages</span>\r\n        </a>\r\n      </span>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"packages && packages.length > 0\">\r\n    <div class=\"card download-container\" *ngFor=\"let package of packages\">\r\n      <!-- It's public -->\r\n      <div *ngIf=\"package.access.toLowerCase() === 'public'\" class=\"card-header {{ package.accordionState }}\"\r\n        (click)=\"toggleAccordion(package)\" tabindex=\"0\" (keyup.enter)=\"toggleAccordion(package)\">\r\n        <h3>{{ package.name }} ({{ package.resources?.length }})</h3>\r\n        <strong>Type: {{ package.type }}</strong>\r\n      </div>\r\n\r\n      <span *ngIf=\"package.access.toLowerCase() === 'public' && package.downloadUrl\" class=\"download-button\">\r\n        <a class=\"usa-button-small usa-button-gray\" [attr.href]=\"package.downloadUrl\">\r\n          <fa-icon [icon]=\"['fas', 'cloud-download-alt']\" size=\"lg\"></fa-icon>\r\n          <span>Download</span>\r\n        </a>\r\n      </span>\r\n\r\n      <ul *ngIf=\"package.access.toLowerCase() === 'public'\" [@accordion]=\"package.accordionState\"\r\n        class=\"usa-zebra-list\">\r\n        <li *ngFor=\"let resource of package.resources\">\r\n          <div class=\"download-info\">\r\n            <fa-icon [icon]=\"resource.typeInfo.iconClass\" size=\"1x\"></fa-icon>&nbsp;\r\n            <span class=\"download-info-icon\">\r\n              <span class=\"{{resource.typeInfo.iconClass}}\"></span>\r\n            </span>\r\n            <span class=\"download-info-link\">\r\n              <a [attr.href]=\"resource.downloadUrl\">\r\n                {{resource.description}}\r\n                <sup *ngIf=\"resource.size && resource.size != 0\">\r\n                  {{resource.size }}\r\n                </sup>\r\n              </a>\r\n            </span>\r\n            <span class=\"download-info-type\">\r\n              {{resource.typeInfo.name}}\r\n            </span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <!-- Its private -->\r\n      <div *ngIf=\"package.access.toLowerCase() === 'private'\" class=\"card-header-secure\">\r\n        <h3>{{ package.name }} ({{ package.resources?.length }})</h3>\r\n        <strong>Type: {{ package.type }}</strong>\r\n      </div>\r\n\r\n      <div *ngIf=\"package.access.toLowerCase() === 'private'\" class=\"card-secure-content\">\r\n        <p>\r\n          <fa-icon [icon]=\"['fas', 'lock']\" size=\"lg\"></fa-icon>\r\n          <em>Secure/sensitive attachments are not currently available, please go to <a\r\n              href=\"https://www.fbo.gov/\">FBO.gov</a> to view this attachment.</em>\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Extra options -->\r\n      <div class=\"card-extra-content\">\r\n        <div class=\"label-container-inline\">\r\n          <fa-icon [icon]=\"['far', 'calendar-check']\" size=\"lg\"></fa-icon>\r\n\r\n          <strong>Posted on {{ package.postedDate }}</strong>\r\n        </div>\r\n        <div class=\"label-container-inline package-access\">\r\n          <fa-icon [icon]=\"['fas', 'unlock']\" size=\"lg\"></fa-icon>\r\n          <strong>{{isSecure(package.access)}}</strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"card\" *ngIf=\"packages.length < 1 && !attachmentError\">\r\n    <div class=\"card-secure-content usa-text-center\">\r\n      <fa-icon [icon]=\"['fas', 'spinner']\" size=\"lg\"></fa-icon>\r\n      <strong>Loading &hellip;</strong>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" *ngIf=\"packages.length < 1 && attachmentError\">\r\n    <div class=\"card-secure-content usa-text-center\">\r\n      <strong>No packages uploaded.</strong>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/download/download.component.ts":
/*!**********************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/download/download.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



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
    DownloadComponent.prototype.hasPublicPackages = function () {
        for (var _i = 0, _a = this.packages; _i < _a.length; _i++) {
            var pkg = _a[_i];
            if (pkg.access.toLowerCase() === 'public') {
                return true;
            }
        }
        return false;
    };
    DownloadComponent.prototype.toggleAccordion = function (card) {
        card.accordionState =
            card.accordionState === 'expanded' ? 'collapsed' : 'expanded';
    };
    DownloadComponent.prototype.isSecure = function (field) {
        if (field.toLowerCase() === 'public') {
            return 'Public';
        }
        else {
            return 'Secured';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DownloadComponent.prototype, "packages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DownloadComponent.prototype, "attachmentError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DownloadComponent.prototype, "downloadAllUrl", void 0);
    DownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-download',
            template: __webpack_require__(/*! ./download.component.html */ "./projects/sy-components/src/lib/components/download/download.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('accordion', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('intro', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translateY(-30%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s .5s cubic-bezier(0.175, 0.885, 0.320, 1.275)')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translateY(-30%)'
                        }))
                    ])
                ])
            ]
        })
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/export/export.component.html":
/*!********************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/export/export.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"export-card\">\r\n    <div class=\"action-button\">\r\n        <button class=\"fileter-button\" [disabled]=\"isIpad\" (click)=\"exportAsExcelFile()\">\r\n            <fa-icon [icon]=\"['fas', 'file-export']\" size=\"lg\"></fa-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div id=\"container\" style=\"display:none;\"></div>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/export/export.component.scss":
/*!********************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/export/export.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".export-card {\n  padding: 5px;\n  margin: 0px 0px 10px 10px;\n  background: white;\n  max-width: 25rem; }\n\n.unfiltered-icon {\n  padding: 1px;\n  color: #4bc1d2;\n  font-size: 16px;\n  border-radius: 20px 20px; }\n\n.action-button button {\n  margin-top: .5em;\n  margin-right: 1em;\n  margin-bottom: .5em;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: .175rem;\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1rem;\n  line-height: 1;\n  outline: 0;\n  padding: .5rem .5rem;\n  text-align: center;\n  text-decoration: none;\n  border: 2px solid #008080; }\n\n.unfileter-button {\n  background-color: white; }\n\n.fileter-button {\n  background-color: #4bc1d2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2V4cG9ydC9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9wcm9qZWN0c1xcc3ktY29tcG9uZW50c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXGV4cG9ydFxcZXhwb3J0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZXhwb3J0L0M6XFxVc2Vyc1xceWVycmFcXERlc2t0b3BcXGFuZ3VsYXItY29tcG9uZW50c1xcc3ktYW5ndWxhci1jb21wb25lbnRzL3Byb2plY3RzXFxzeS1jb21wb25lbnRzXFxzcmNcXHNhc3NcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJDRjJCO0VERzNCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixjQ2VnQjtFRGRoQixlQUFlO0VBQ2Ysd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFFaEIsc0JBQXNCO0VBQ3RCLFlDdEIyQjtFRHVCM0IsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUJDRHlCLEVBQUE7O0FETTNCO0VBQ0UsdUJDdEMyQixFQUFBOztBRHlDN0I7RUFDRSx5QkNuQmdCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvZXhwb3J0L2V4cG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvY29sb3JzJztcbi5leHBvcnQtY2FyZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xuICAgIG1heC13aWR0aDogMjVyZW07XG59XG5cbi51bmZpbHRlcmVkLWljb24ge1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweDtcbn1cblxuLmFjdGlvbi1idXR0b24gYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IC41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gXG4gICAgYm9yZGVyLXJhZGl1czogLjE3NXJlbTtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLXByaW1hcnktZGFyaztcblxuICB9XG5cblxuICAudW5maWxldGVyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xuICB9XG5cbiAgLmZpbGV0ZXItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgfVxuIiwiJGNvbG9yLWdyZXk6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuJGNvbG9yLWJsYWNrOiByZ2IoMCwgMCwgMCk7XHJcbiRjb2xvci13aGl0ZTpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRjYXJkLWJhY2tncm91bmQ6ICNmZmY7XHJcbiRjb2xvci1ncmVlbjojNDI4NTRhO1xyXG4kY29sb3ItcmVkOiAjRkYwMDAwO1xyXG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjODdkOWEzO1xyXG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICNBREQ4QkI7XHJcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoODUsIDg0LCA4NCwgMC4xMik7XHJcbiRjb2xvci1ncmV5LWxpZ2h0OiAjZjFmMWYxO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuJGNvbG9yLWxpZ2h0LXJlZDogI2ZhNmI2YjtcclxuJGNvbG9yLXJlZC1tZWRpdW06I2ZmN2U2NWE2O1xyXG4kY29sb3ItZGVlcC1wdXJwbGU6ICNiMzg4ZmY7XHJcbiRjb2xvci10ZWFsOiAjNGQ5YzhhO1xyXG4kY29sb3ItdGVhbC1saWdodDojNTJjN2I4O1xyXG4kY29sb3ItbGltZS1saWdodGVyOiAjZTZlZTljO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjZmZjY2JjO1xyXG4kY29sb3ItaW5kaWdvOiAjYzBjZmZmO1xyXG4kY29sb3ItZGVlcC1pbmRpZ286ICM3YTk5ZmQ7XHJcbiRjb2xvci1ibHVlOiMwMDI2Y2E7XHJcbiRjb2xvci10cmFuc3BhcmVudC1kYXJrOiByZ2JhKDAsIDAsIDAsIC43NSk7XHJcbiRsaWdodC1icm93bjogI2VmZWJlOTtcclxuJGRhcmstYnJvd246ICNhNjliOTc7XHJcbiRjb2xvci1vcmFuZ2U6IHJnYigyMzgsIDEyMCwgMzApO1xyXG4kY29sb3ItY3lhbjogIzRiYzFkMjtcclxuJGNvbG9yLWdyYXk6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1jeWFuO1xyXG4kYWxlcnRXYXJuaW5nQ29sb3I6ICNEODQwMDk7XHJcbiRhbGVydFN1Y2Nlc3NDb2xvcjogIzRhYTU2NDtcclxuJGFsZXJ0SW5mb0NvbG9yOiAjMDBBN0NGO1xyXG4kYWxlcnRFcnJvckNvbG9yOiAjRUMxOTQyO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrIDogIzAwODA4MDtcclxuJGhvcml6b250YWwtcGFkZGluZzogMXJlbTtcclxuJHZlcnRpY2FsLXBhZGRpbmc6IDNyZW07XHJcbiRpY29uLXNpemU6IDJyZW07XHJcbiRsaWdodC1ncmV5OiAjOWM5YzljO1xyXG4kaW5wdXQtbWF4LXdpZHRoOiA0NnJlbSAhZGVmYXVsdDtcclxuJHdhcm5pbmdCYWNrZ3JvdW5kQ29sb3I6ICNGRkZBRjM7Il19 */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/export/export.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/export/export.component.ts ***!
  \******************************************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExportComponent = /** @class */ (function () {
    function ExportComponent(renderer) {
        this.renderer = renderer;
        this.fileName = 'export-data';
        this.datasource = [];
        this.isIpad = false;
    }
    ExportComponent.prototype.exportAsExcelFile = function () {
        if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            this.isIpad = true;
        }
        else {
            this.isIpad = false;
            this.data = this.datasource;
            this.fileName = this.fileName + '.csv';
            var csvRows_1 = [];
            var csvheader = [];
            var csvString = '';
            for (var key in this.data[0]) {
                if (key) {
                    csvheader.push(key);
                }
            }
            csvRows_1.push(csvheader);
            this.data.forEach(function (item) {
                var csvrow = [];
                for (var i in item) {
                    if (i) {
                        csvrow.push('"' + item[i] + '"');
                    }
                }
                csvRows_1.push(csvrow);
            });
            csvString = csvRows_1.join('\r\n');
            if (navigator.msSaveBlob) { // IE 10+
                var blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                navigator.msSaveBlob(blob, this.fileName);
            }
            else {
                var csvdatacontent = 'data:text/csv;charset=utf-8,' + csvString;
                var encodedUri = encodeURI(csvdatacontent);
                var tempLink = document.createElement('a');
                tempLink.setAttribute('href', encodedUri);
                tempLink.setAttribute('download', this.fileName);
                document.getElementById('container').appendChild(tempLink);
                tempLink.click();
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ExportComponent.prototype, "fileName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ExportComponent.prototype, "datasource", void 0);
    ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-export',
            template: __webpack_require__(/*! ./export.component.html */ "./projects/sy-components/src/lib/components/export/export.component.html"),
            styles: [__webpack_require__(/*! ./export.component.scss */ "./projects/sy-components/src/lib/components/export/export.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/history-table/history-table.component.html":
/*!**********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/history-table/history-table.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>{{historyConfig.title}}</legend>\n  <table class=\"history-table\">\n    <thead>\n      <tr>\n        <th class=\"history-table-date-column\">\n          <div>{{historyConfig.dateHeaderText}}</div>\n        </th>\n        <th class=\"history-table-change-column history-text-container\">\n          <div>{{historyConfig.detailsHeaderText}}</div>\n          <div>\n            <button *ngIf=\"isExpand\" (click)=\"expand(isExpand)\" aria-label=\"expand more\">\n              <fa-icon [icon]=\"['fas', 'caret-up']\" size=\"2x\"></fa-icon>\n            </button>\n            <button *ngIf=\"!isExpand\" (click)=\"expand(isExpand)\" >\n              <fa-icon [icon]=\"['fas', 'caret-down']\" size=\"2x\"></fa-icon>\n              </button> \n           </div>\n        </th>\n      </tr>\n    </thead>\n    <tbody *ngIf=\"historyData?.length > 0\">\n      <tr *ngFor=\"let history of historyData\">\n        <td>\n          {{history.DateTimeChanged | globaldatetime}}\n        </td>\n        <td>\n          <div *ngIf=\"isExpand\" class=\"general-text\">\n            {{history.SummaryReason}}\n          </div>\n          <div *ngIf=\"!isExpand\" class=\"general-text\">\n            <div>{{history.DetailField}}</div>\n            <div>{{history.DetailOld}}</div>\n            <div>{{history.DetailNew}}</div>\n            <div>{{history.DetailChangedBy}}</div>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</fieldset>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/history-table/history-table.component.scss":
/*!**********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/history-table/history-table.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".history-table tr td {\n  text-align: left;\n  border: 1px #a69b97 solid;\n  padding: 5px; }\n\n.history-table tr th {\n  text-align: left;\n  border: 1px black solid;\n  background-color: rgba(0, 0, 0, 0.65);\n  padding: 5px; }\n\n.history-table thead tr th {\n  text-align: left;\n  min-height: 20px;\n  border: 1px #a69b97 solid;\n  color: white;\n  margin-right: 5px; }\n\n.history-table tr:nth-child(even) {\n  background-color: #efebe9;\n  border: 1px solid #a69b97; }\n\n.history-table-date-column {\n  min-width: 100px;\n  text-align: left; }\n\n.history-table-change-column {\n  min-width: 300px;\n  text-align: left; }\n\n.history-table-change-column div {\n  margin-top: 8px; }\n\n.history-table-change-column button {\n  min-height: 10px; }\n\nfieldset {\n  max-width: 600px; }\n\ntable {\n  border: 2px solid #a69b97;\n  border-collapse: collapse; }\n\n.icon-end {\n  text-align: end; }\n\nbutton {\n  background-color: transparent;\n  border: none; }\n\nfa-icon {\n  color: white;\n  text-align: left;\n  margin: 10px; }\n\n.history-text-container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center; }\n\n.icon-end {\n  text-align: end; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2hpc3RvcnktdGFibGUvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxoaXN0b3J5LXRhYmxlXFxoaXN0b3J5LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaGlzdG9yeS10YWJsZS9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9wcm9qZWN0c1xcc3ktY29tcG9uZW50c1xcc3JjXFxzYXNzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQTZCO0VBQzdCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQix1QkFBOEI7RUFDOUIscUNDQW9DO0VEQ3BDLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQTZCO0VBQzdCLFlDaEI2QjtFRGlCN0IsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UseUJDQW1CO0VEQ25CLHlCQ0FrQixFQUFBOztBREVwQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQ3RCa0I7RUR1QmxCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUN6RDZCO0VEMEQ3QixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9zeS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9oaXN0b3J5LXRhYmxlL2hpc3RvcnktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc2Fzcy9jb2xvcnNcIjtcbi5oaXN0b3J5LXRhYmxlIHRyIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggJGRhcmstYnJvd24gc29saWQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmhpc3RvcnktdGFibGUgdHIgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCAkY29sb3ItYmxhY2sgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10cmFuc3BhcmVudDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaGlzdG9yeS10YWJsZSB0aGVhZCB0ciB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4ICRkYXJrLWJyb3duIHNvbGlkO1xuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5oaXN0b3J5LXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1icm93bjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGRhcmstYnJvd247XG59XG4uaGlzdG9yeS10YWJsZS1kYXRlLWNvbHVtbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaGlzdG9yeS10YWJsZS1jaGFuZ2UtY29sdW1uIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5oaXN0b3J5LXRhYmxlLWNoYW5nZS1jb2x1bW4gZGl2IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmhpc3RvcnktdGFibGUtY2hhbmdlLWNvbHVtbiBidXR0b24ge1xuICBtaW4taGVpZ2h0OiAxMHB4O1xufVxuXG5maWVsZHNldCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyOiAycHggc29saWQgJGRhcmstYnJvd247XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbi5pY29uLWVuZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZmEtaWNvbiB7XG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmhpc3RvcnktdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24tZW5ke1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59IiwiJGNvbG9yLWdyZXk6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuJGNvbG9yLWJsYWNrOiByZ2IoMCwgMCwgMCk7XHJcbiRjb2xvci13aGl0ZTpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRjYXJkLWJhY2tncm91bmQ6ICNmZmY7XHJcbiRjb2xvci1ncmVlbjojNDI4NTRhO1xyXG4kY29sb3ItcmVkOiAjRkYwMDAwO1xyXG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjODdkOWEzO1xyXG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICNBREQ4QkI7XHJcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoODUsIDg0LCA4NCwgMC4xMik7XHJcbiRjb2xvci1ncmV5LWxpZ2h0OiAjZjFmMWYxO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuJGNvbG9yLWxpZ2h0LXJlZDogI2ZhNmI2YjtcclxuJGNvbG9yLXJlZC1tZWRpdW06I2ZmN2U2NWE2O1xyXG4kY29sb3ItZGVlcC1wdXJwbGU6ICNiMzg4ZmY7XHJcbiRjb2xvci10ZWFsOiAjNGQ5YzhhO1xyXG4kY29sb3ItdGVhbC1saWdodDojNTJjN2I4O1xyXG4kY29sb3ItbGltZS1saWdodGVyOiAjZTZlZTljO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjZmZjY2JjO1xyXG4kY29sb3ItaW5kaWdvOiAjYzBjZmZmO1xyXG4kY29sb3ItZGVlcC1pbmRpZ286ICM3YTk5ZmQ7XHJcbiRjb2xvci1ibHVlOiMwMDI2Y2E7XHJcbiRjb2xvci10cmFuc3BhcmVudC1kYXJrOiByZ2JhKDAsIDAsIDAsIC43NSk7XHJcbiRsaWdodC1icm93bjogI2VmZWJlOTtcclxuJGRhcmstYnJvd246ICNhNjliOTc7XHJcbiRjb2xvci1vcmFuZ2U6IHJnYigyMzgsIDEyMCwgMzApO1xyXG4kY29sb3ItY3lhbjogIzRiYzFkMjtcclxuJGNvbG9yLWdyYXk6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1jeWFuO1xyXG4kYWxlcnRXYXJuaW5nQ29sb3I6ICNEODQwMDk7XHJcbiRhbGVydFN1Y2Nlc3NDb2xvcjogIzRhYTU2NDtcclxuJGFsZXJ0SW5mb0NvbG9yOiAjMDBBN0NGO1xyXG4kYWxlcnRFcnJvckNvbG9yOiAjRUMxOTQyO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrIDogIzAwODA4MDtcclxuJGhvcml6b250YWwtcGFkZGluZzogMXJlbTtcclxuJHZlcnRpY2FsLXBhZGRpbmc6IDNyZW07XHJcbiRpY29uLXNpemU6IDJyZW07XHJcbiRsaWdodC1ncmV5OiAjOWM5YzljO1xyXG4kaW5wdXQtbWF4LXdpZHRoOiA0NnJlbSAhZGVmYXVsdDtcclxuJHdhcm5pbmdCYWNrZ3JvdW5kQ29sb3I6ICNGRkZBRjM7Il19 */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/history-table/history-table.component.ts":
/*!********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/history-table/history-table.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HistoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryTableComponent", function() { return HistoryTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var HistoryTableComponent = /** @class */ (function () {
    function HistoryTableComponent() {
        this.faExpand = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExpand"];
        this.historyConfig = {
            title: ' Change History',
            dateHeaderText: 'Date',
            detailsHeaderText: 'Change',
        };
        this.isExpand = true;
    }
    HistoryTableComponent.prototype.expand = function (isExpand) {
        this.isExpand = !isExpand;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HistoryTableComponent.prototype, "historyConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HistoryTableComponent.prototype, "historyData", void 0);
    HistoryTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-history-table',
            template: __webpack_require__(/*! ./history-table.component.html */ "./projects/sy-components/src/lib/components/history-table/history-table.component.html"),
            styles: [__webpack_require__(/*! ./history-table.component.scss */ "./projects/sy-components/src/lib/components/history-table/history-table.component.scss")]
        })
    ], HistoryTableComponent);
    return HistoryTableComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/index.ts":
/*!************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/index.ts ***!
  \************************************************************/
/*! exports provided: AuditTrailComponent, HistoryTableComponent, AlertComponent, DosHeaderComponent, ProgressIndicatorType, ProgressBarComponent, ActionButtonComponent, ToolbarComponent, ExportComponent, RequiredMessageComponent, DosFooterComponent, AlertFooterComponent, DownloadComponent, PointOfContactComponent, VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./projects/sy-components/src/lib/components/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuditTrailComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AuditTrailComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HistoryTableComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["HistoryTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DosHeaderComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DosHeaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorType", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressIndicatorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressBarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButtonComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ActionButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ToolbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ExportComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredMessageComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RequiredMessageComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DosFooterComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DosFooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertFooterComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertFooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DownloadComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointOfContactComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PointOfContactComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["VideoPlayerComponent"]; });




/***/ }),

/***/ "./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.html":
/*!****************************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sy-poc\">\r\n    <span class=\"sy-fullname\" *ngIf=\"data.fullName\">{{data.fullName}}<br></span>\r\n    <ng-container *ngIf=\"data.title\">{{data.title}}</ng-container>\r\n    <ng-container *ngIf=\"data.address\">{{data.address}}, <br></ng-container>\r\n    <ng-container *ngIf=\"data.address2\">{{data.address2}}<br /></ng-container>\r\n    <ng-container *ngIf=\"data.city || data.state || data.zip\">\r\n        <ng-container *ngIf=\"data.city\">{{data.city}}, </ng-container>\r\n        <ng-container *ngIf=\"data.state\">{{data.state}} </ng-container>\r\n        <ng-container *ngIf=\"data.zip\">{{data.zip}}</ng-container><br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.email\">\r\n        <fa-icon [icon]=\"['far', 'envelope']\" size=\"16px\"></fa-icon>\r\n        <a href=\"mailto:{{data.email}}\">{{data.email}}</a> <br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.phone\">\r\n        <fa-icon [icon]=\"['fas', 'phone']\" size=\"16px\"></fa-icon>\r\n\r\n        {{data.phone}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.phone2\">\r\n        <fa-icon [icon]=\"['fas', 'phone']\" size=\"16px\"></fa-icon>\r\n        {{data.phone2}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.fax\">\r\n        <fa-icon [icon]=\"['fas', 'fax']\" size=\"16px\"></fa-icon> {{data.fax}}<br>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"data.website\">\r\n        <fa-icon [icon]=\"['fas', 'globe']\" size=\"16px\"></fa-icon>\r\n        {{data.website}}<br>\r\n    </ng-container>\r\n</div>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.scss":
/*!****************************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sy-fullname {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 0 5px 0 0; }\n\nfa-icon {\n  color: #008080;\n  margin-right: 10px; }\n\n.sy-poc {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3BvaW50LW9mLWNvbnRhY3QvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxwb2ludC1vZi1jb250YWN0XFxwb2ludC1vZi1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcG9pbnQtb2YtY29udGFjdC9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9wcm9qZWN0c1xcc3ktY29tcG9uZW50c1xcc3JjXFxzYXNzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNDeUJ5QjtFRHhCekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3BvaW50LW9mLWNvbnRhY3QvcG9pbnQtb2YtY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zYXNzL2NvbG9yc1wiO1xyXG4uc3ktZnVsbG5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDAgNXB4IDAgMDtcclxufVxyXG5cclxuZmEtaWNvbiB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktZGFyaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnN5LXBvYyB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iLCIkY29sb3ItZ3JleTogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4kY29sb3ItYmxhY2s6IHJnYigwLCAwLCAwKTtcclxuJGNvbG9yLXdoaXRlOnJnYigyNTUsIDI1NSwgMjU1KTtcclxuJGNhcmQtYmFja2dyb3VuZDogI2ZmZjtcclxuJGNvbG9yLWdyZWVuOiM0Mjg1NGE7XHJcbiRjb2xvci1yZWQ6ICNGRjAwMDA7XHJcbiRjb2xvci1ncmVlbi1tZWRpdW06ICM4N2Q5YTM7XHJcbiRjb2xvci1ncmVlbi1saWdodDogI0FERDhCQjtcclxuJGNvbG9yLWdyZXktZGFyazogcmdiYSg4NSwgODQsIDg0LCAwLjEyKTtcclxuJGNvbG9yLWdyZXktbGlnaHQ6ICNmMWYxZjE7XHJcbiRjb2xvci10cmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAuNjUpO1xyXG4kY29sb3ItbGlnaHQtcmVkOiAjZmE2YjZiO1xyXG4kY29sb3ItcmVkLW1lZGl1bTojZmY3ZTY1YTY7XHJcbiRjb2xvci1kZWVwLXB1cnBsZTogI2IzODhmZjtcclxuJGNvbG9yLXRlYWw6ICM0ZDljOGE7XHJcbiRjb2xvci10ZWFsLWxpZ2h0OiM1MmM3Yjg7XHJcbiRjb2xvci1saW1lLWxpZ2h0ZXI6ICNlNmVlOWM7XHJcbiRjb2xvci1saWdodC1vcmFuZ2U6ICNmZmNjYmM7XHJcbiRjb2xvci1pbmRpZ286ICNjMGNmZmY7XHJcbiRjb2xvci1kZWVwLWluZGlnbzogIzdhOTlmZDtcclxuJGNvbG9yLWJsdWU6IzAwMjZjYTtcclxuJGNvbG9yLXRyYW5zcGFyZW50LWRhcms6IHJnYmEoMCwgMCwgMCwgLjc1KTtcclxuJGxpZ2h0LWJyb3duOiAjZWZlYmU5O1xyXG4kZGFyay1icm93bjogI2E2OWI5NztcclxuJGNvbG9yLW9yYW5nZTogcmdiKDIzOCwgMTIwLCAzMCk7XHJcbiRjb2xvci1jeWFuOiAjNGJjMWQyO1xyXG4kY29sb3ItZ3JheTpyZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XHJcbiRjb2xvci10cmFuc3BhcmVudC1saWdodDogcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWN5YW47XHJcbiRhbGVydFdhcm5pbmdDb2xvcjogI0Q4NDAwOTtcclxuJGFsZXJ0U3VjY2Vzc0NvbG9yOiAjNGFhNTY0O1xyXG4kYWxlcnRJbmZvQ29sb3I6ICMwMEE3Q0Y7XHJcbiRhbGVydEVycm9yQ29sb3I6ICNFQzE5NDI7XHJcbiRjb2xvci1wcmltYXJ5LWRhcmsgOiAjMDA4MDgwO1xyXG4kaG9yaXpvbnRhbC1wYWRkaW5nOiAxcmVtO1xyXG4kdmVydGljYWwtcGFkZGluZzogM3JlbTtcclxuJGljb24tc2l6ZTogMnJlbTtcclxuJGxpZ2h0LWdyZXk6ICM5YzljOWM7XHJcbiRpbnB1dC1tYXgtd2lkdGg6IDQ2cmVtICFkZWZhdWx0O1xyXG4kd2FybmluZ0JhY2tncm91bmRDb2xvcjogI0ZGRkFGMzsiXX0= */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.ts":
/*!**************************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: PointOfContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfContactComponent", function() { return PointOfContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PointOfContactComponent = /** @class */ (function () {
    function PointOfContactComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PointOfContactComponent.prototype, "data", void 0);
    PointOfContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-poc',
            template: __webpack_require__(/*! ./point-of-contact.component.html */ "./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.html"),
            styles: [__webpack_require__(/*! ./point-of-contact.component.scss */ "./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.scss")]
        })
    ], PointOfContactComponent);
    return PointOfContactComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.html":
/*!********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\n    <div class=\"label\">{{ valueAsText }}</div>\n    <ng-container *ngTemplateOutlet=\"type === 'percent' ? percent : time\"></ng-container>\n  </div>\n  \n  <ng-template #percent>\n    <!-- Percent template -->\n    <div class=\"bar\">\n      <div class=\"fill animated\"\n        [style.width]=\"calculateBarFillPercentage()\"\n        role=\"progressbar\"\n        [attr.aria-valuenow]=\"value\"\n        [attr.aria-valuemin]=\"min\"\n        [attr.aria-valuemax]=\"max\"></div>\n    </div>\n  </ng-template>\n  \n  <ng-template #time>\n    <!-- Text value template -->\n    <div class=\"bar\">\n      <div class=\"fill animated\"\n        [style.width]=\"calculateBarFillPercentage()\"\n        role=\"progressbar\" \n        [attr.aria-valuenow]=\"value\"\n        [attr.aria-valuemin]=\"min\"\n        [attr.aria-valuemax]=\"max\"\n        [attr.aria-valuetext]=\"valueAsText\"></div>\n    </div>\n  </ng-template>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.scss":
/*!********************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar .fill {\n  height: 1rem;\n  border-radius: 4px; }\n\n.bar .fill {\n  background-color: #4bc1d2;\n  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1); }\n\n.bar .fill.animated {\n  -webkit-transition: 0.4s linear;\n  transition: 0.4s linear;\n  -webkit-transition-property: width;\n  transition-property: width; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9wcm9qZWN0c1xcc3ktY29tcG9uZW50c1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHByb2dyZXNzLWJhclxccHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL0M6XFxVc2Vyc1xceWVycmFcXERlc2t0b3BcXGFuZ3VsYXItY29tcG9uZW50c1xcc3ktYW5ndWxhci1jb21wb25lbnRzL3Byb2plY3RzXFxzeS1jb21wb25lbnRzXFxzcmNcXHNhc3NcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkNpQmdCO0VEaEJoQixpRkFBaUYsRUFBQTs7QUFHckY7RUFDSSwrQkFBdUI7RUFBdkIsdUJBQXVCO0VBQ3ZCLGtDQUEwQjtFQUExQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9zeS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3Nhc3MvY29sb3JzXCI7XG5cbi5iYXIgLmZpbGwge1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5iYXIgLmZpbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmJhciAuZmlsbC5hbmltYXRlZCB7XG4gICAgdHJhbnNpdGlvbjogMC40cyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogd2lkdGg7XG59IiwiJGNvbG9yLWdyZXk6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuJGNvbG9yLWJsYWNrOiByZ2IoMCwgMCwgMCk7XHJcbiRjb2xvci13aGl0ZTpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRjYXJkLWJhY2tncm91bmQ6ICNmZmY7XHJcbiRjb2xvci1ncmVlbjojNDI4NTRhO1xyXG4kY29sb3ItcmVkOiAjRkYwMDAwO1xyXG4kY29sb3ItZ3JlZW4tbWVkaXVtOiAjODdkOWEzO1xyXG4kY29sb3ItZ3JlZW4tbGlnaHQ6ICNBREQ4QkI7XHJcbiRjb2xvci1ncmV5LWRhcms6IHJnYmEoODUsIDg0LCA4NCwgMC4xMik7XHJcbiRjb2xvci1ncmV5LWxpZ2h0OiAjZjFmMWYxO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuJGNvbG9yLWxpZ2h0LXJlZDogI2ZhNmI2YjtcclxuJGNvbG9yLXJlZC1tZWRpdW06I2ZmN2U2NWE2O1xyXG4kY29sb3ItZGVlcC1wdXJwbGU6ICNiMzg4ZmY7XHJcbiRjb2xvci10ZWFsOiAjNGQ5YzhhO1xyXG4kY29sb3ItdGVhbC1saWdodDojNTJjN2I4O1xyXG4kY29sb3ItbGltZS1saWdodGVyOiAjZTZlZTljO1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjZmZjY2JjO1xyXG4kY29sb3ItaW5kaWdvOiAjYzBjZmZmO1xyXG4kY29sb3ItZGVlcC1pbmRpZ286ICM3YTk5ZmQ7XHJcbiRjb2xvci1ibHVlOiMwMDI2Y2E7XHJcbiRjb2xvci10cmFuc3BhcmVudC1kYXJrOiByZ2JhKDAsIDAsIDAsIC43NSk7XHJcbiRsaWdodC1icm93bjogI2VmZWJlOTtcclxuJGRhcmstYnJvd246ICNhNjliOTc7XHJcbiRjb2xvci1vcmFuZ2U6IHJnYigyMzgsIDEyMCwgMzApO1xyXG4kY29sb3ItY3lhbjogIzRiYzFkMjtcclxuJGNvbG9yLWdyYXk6cmdiYSgyNTUsIDI1NSwgMjU1LCAuMjUpO1xyXG4kY29sb3ItdHJhbnNwYXJlbnQtbGlnaHQ6IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1jeWFuO1xyXG4kYWxlcnRXYXJuaW5nQ29sb3I6ICNEODQwMDk7XHJcbiRhbGVydFN1Y2Nlc3NDb2xvcjogIzRhYTU2NDtcclxuJGFsZXJ0SW5mb0NvbG9yOiAjMDBBN0NGO1xyXG4kYWxlcnRFcnJvckNvbG9yOiAjRUMxOTQyO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrIDogIzAwODA4MDtcclxuJGhvcml6b250YWwtcGFkZGluZzogMXJlbTtcclxuJHZlcnRpY2FsLXBhZGRpbmc6IDNyZW07XHJcbiRpY29uLXNpemU6IDJyZW07XHJcbiRsaWdodC1ncmV5OiAjOWM5YzljO1xyXG4kaW5wdXQtbWF4LXdpZHRoOiA0NnJlbSAhZGVmYXVsdDtcclxuJHdhcm5pbmdCYWNrZ3JvdW5kQ29sb3I6ICNGRkZBRjM7Il19 */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ProgressIndicatorType, ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorType", function() { return ProgressIndicatorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressIndicatorType;
(function (ProgressIndicatorType) {
    ProgressIndicatorType["Percent"] = "percent";
    ProgressIndicatorType["Nonnumerical"] = "nonnumerical";
})(ProgressIndicatorType || (ProgressIndicatorType = {}));
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
    ProgressBarComponent.prototype.calculateBarFillPercentage = function () {
        return Math.min((Math.floor((Math.max(0, this.value) / this.max) * 100)), 100) + '%';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressBarComponent.prototype, "min", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProgressBarComponent.prototype, "max", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressBarComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "valueAsText", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.scss")]
        })
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/public_api.ts":
/*!*****************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/public_api.ts ***!
  \*****************************************************************/
/*! exports provided: AuditTrailComponent, HistoryTableComponent, AlertComponent, DosHeaderComponent, ProgressIndicatorType, ProgressBarComponent, ActionButtonComponent, ToolbarComponent, ExportComponent, RequiredMessageComponent, DosFooterComponent, AlertFooterComponent, DownloadComponent, PointOfContactComponent, VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audit-trail/audit-trail.component */ "./projects/sy-components/src/lib/components/audit-trail/audit-trail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuditTrailComponent", function() { return _audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_0__["AuditTrailComponent"]; });

/* harmony import */ var _history_table_history_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-table/history-table.component */ "./projects/sy-components/src/lib/components/history-table/history-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HistoryTableComponent", function() { return _history_table_history_table_component__WEBPACK_IMPORTED_MODULE_1__["HistoryTableComponent"]; });

/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert/alert.component */ "./projects/sy-components/src/lib/components/alert/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]; });

/* harmony import */ var _dos_header_dos_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dos-header/dos-header.component */ "./projects/sy-components/src/lib/components/dos-header/dos-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DosHeaderComponent", function() { return _dos_header_dos_header_component__WEBPACK_IMPORTED_MODULE_3__["DosHeaderComponent"]; });

/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./projects/sy-components/src/lib/components/progress-bar/progress-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorType", function() { return _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"]; });

/* harmony import */ var _action_button_action_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-button/action-button.component */ "./projects/sy-components/src/lib/components/action-button/action-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButtonComponent", function() { return _action_button_action_button_component__WEBPACK_IMPORTED_MODULE_5__["ActionButtonComponent"]; });

/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./projects/sy-components/src/lib/components/toolbar/toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_6__["ToolbarComponent"]; });

/* harmony import */ var _export_export_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./export/export.component */ "./projects/sy-components/src/lib/components/export/export.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return _export_export_component__WEBPACK_IMPORTED_MODULE_7__["ExportComponent"]; });

/* harmony import */ var _required_message_required_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./required-message/required-message.component */ "./projects/sy-components/src/lib/components/required-message/required-message.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredMessageComponent", function() { return _required_message_required_message_component__WEBPACK_IMPORTED_MODULE_8__["RequiredMessageComponent"]; });

/* harmony import */ var _dos_footer_dos_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dos-footer/dos-footer.component */ "./projects/sy-components/src/lib/components/dos-footer/dos-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DosFooterComponent", function() { return _dos_footer_dos_footer_component__WEBPACK_IMPORTED_MODULE_9__["DosFooterComponent"]; });

/* harmony import */ var _alert_footer_alert_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alert-footer/alert-footer.component */ "./projects/sy-components/src/lib/components/alert-footer/alert-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertFooterComponent", function() { return _alert_footer_alert_footer_component__WEBPACK_IMPORTED_MODULE_10__["AlertFooterComponent"]; });

/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./download/download.component */ "./projects/sy-components/src/lib/components/download/download.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return _download_download_component__WEBPACK_IMPORTED_MODULE_11__["DownloadComponent"]; });

/* harmony import */ var _point_of_contact_point_of_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./point-of-contact/point-of-contact.component */ "./projects/sy-components/src/lib/components/point-of-contact/point-of-contact.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointOfContactComponent", function() { return _point_of_contact_point_of_contact_component__WEBPACK_IMPORTED_MODULE_12__["PointOfContactComponent"]; });

/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./video/video.component */ "./projects/sy-components/src/lib/components/video/video.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return _video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoPlayerComponent"]; });

















/***/ }),

/***/ "./projects/sy-components/src/lib/components/required-message/required-message.component.ts":
/*!**************************************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/required-message/required-message.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: RequiredMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredMessageComponent", function() { return RequiredMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequiredMessageComponent = /** @class */ (function () {
    function RequiredMessageComponent() {
        this.message = 'All (*) fields are required';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RequiredMessageComponent.prototype, "message", void 0);
    RequiredMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-required-message',
            template: "<div class=\"msg-container\">\n                <div class=\"label-align-right\">\n                <label>{{message}}</label>\n                </div>              \n            </div>",
            styles: ["\n  .msg-container {\n    display: flex;\n    color: red;\n  }\n  .label-align-right {\n    flex:1;\n    text-align: right;\n   }\n  "]
        })
    ], RequiredMessageComponent);
    return RequiredMessageComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/toolbar/toolbar.component.html":
/*!**********************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/toolbar/toolbar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"toolbar\">\n\n    <div class=\"toolbar-dropdown\">\n      <div class=\"toolbar-select\">\n        <a class=\"toolbar-toggle-button collapsed\" href=\"\">\n          <span>Collapse</span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"toolbar-expanded-content\">\n      <div class=\"accordion\">\n        <div class=\"accordion-header\">\n          <a href=\"\">Navigation</a>\n        </div>\n        <div class=\"accordion-content\">\n          <nav>\n            <ul class=\"usa-sidenav\">\n              <li class=\"usa-sidenav__item\">\n                <a href=\"\">Parent link</a>\n              </li>\n              <li class=\"usa-sidenav__item\">\n                <a href=\"\" class=\"usa-current\">Current page</a>\n                <ul class=\"usa-sidenav__sublist\">\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\">Child link</a>\n                  </li>\n                  <li class=\"usa-sidenav__item\">\n                    <a href=\"\" class=\"usa-current\">Child link</a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"usa-sidenav__item\">\n                <a href=\"\">Parent link</a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n      <div class=\"accordion\">\n        <div class=\"accordion-header\">\n          <a href=\"\">Filters</a>\n        </div>\n        <div class=\"accordion-content\">\n          <div class=\"filters\">\n            <div class=\"filter\">\n              <div class=\"filter-header\">\n                <a href=\"\">Service Classifications</a>\n              </div>\n              <div class=\"filter-content\">\n                <label class=\"usa-label\" for=\"input-type-naics\">NAICS</label>\n                <input class=\"usa-input\" id=\"input-type-naics\" name=\"input-type-naics\" type=\"text\">\n                <div class=\"selected-chips\">\n                  <span class=\"sam-tag sam-tag--chip\">\n                    111140 -- Wheat Farming\n                    <button class=\"sam-tag__close\">\n                      <span class=\"fas fa-times\" aria-hidden=\"true\"></span>\n                    </button>\n                  </span>\n                  <span class=\"sam-tag sam-tag--chip\">\n                    212222 -- Silver Ore Mining\n                    <button class=\"sam-tag__close\">\n                      <span class=\"fas fa-times\" aria-hidden=\"true\"></span>\n                    </button>\n                  </span>\n                  <span class=\"sam-tag sam-tag--chip\">\n                    541850 -- Outdoor Advertising\n                    <button class=\"sam-tag__close\">\n                      <span class=\"fas fa-times\" aria-hidden=\"true\"></span>\n                    </button>\n                  </span>\n                </div>\n                <label class=\"usa-label\" for=\"input-type-psc\">PSC</label>\n                <input class=\"usa-input\" id=\"input-type-psc\" name=\"input-type-psc\" type=\"text\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"page-content-header\">\n    Showing 1 to 10 of 21 registrations\n  </div>\n\n  <div class=\"page-content\">\n    <h3>Frontier Allied Partners, Inc</h3>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet faucibus arcu id bibendum. Mauris eleifend\n      massa purus, eu volutpat erat placerat egestas.\n    </p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/toolbar/toolbar.component.scss":
/*!**********************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/toolbar/toolbar.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: inline-block;\n  border: 1px solid #fff;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  grid-column-start: 1;\n  grid-column-end: 2; }\n\n.toolbar.expanded {\n  border: 1px solid #d8d8d8;\n  width: 300px;\n  box-shadow: 0 14px 24px 0 rgba(0, 0, 0, 0.06);\n  border-radius: 1px;\n  grid-column-end: 3;\n  grid-row-start: 1;\n  grid-row-end: 3; }\n\n.toolbar.expanded .toolbar-dropdown {\n  padding: 10px 15px; }\n\n.toolbar-dropdown {\n  position: relative;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n\n.toolbar-select {\n  background-color: #F7F9FA;\n  border: 1px solid #979797;\n  padding: 6px;\n  border-radius: 4px;\n  width: 45px;\n  height: 44px; }\n\n.toolbar-toggle-button {\n  background-color: #fff;\n  display: block;\n  width: 31px;\n  height: 29px;\n  border: 1px solid #000000;\n  padding: 5px;\n  border-radius: 3px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.29); }\n\n.toolbar-toggle-button span {\n  position: absolute;\n  left: -999em; }\n\n.toolbar-toggle-button::before {\n  content: '';\n  display: block;\n  background-color: #EFF6FB;\n  border: 2px solid #112F4E;\n  width: 9px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out; }\n\n.toolbar-toggle-button:hover::before {\n  background-color: #B7F5BD; }\n\n.toolbar-toggle-button.collapsed::before {\n  height: 9px; }\n\n.toolbar-toggle-button.expanded::before {\n  height: 18px; }\n\n.toolbar-expanded-content {\n  opacity: 0;\n  display: none;\n  -webkit-transition: opacity 0.3s ease-in-out;\n  transition: opacity 0.3s ease-in-out; }\n\n.toolbar-expanded-content.open {\n  opacity: 1;\n  display: block; }\n\n.accordion {\n  padding: 12px 16px;\n  border-top: 1px solid #d8d8d8;\n  border-bottom: 1px solid #d8d8d8;\n  border-left: 1px solid #d8d8d8;\n  border-right: 1px solid #d8d8d8;\n  background-color: #fff;\n  margin-left: -1px;\n  margin-right: -1px;\n  margin-bottom: 6px; }\n\n.accordion.open {\n  background-color: #EFF6FB;\n  box-shadow: inset 0 1px 7px 0 rgba(30, 75, 198, 0.16);\n  border-left: 1px solid #aac0d0;\n  border-right: 1px solid #aac0d0;\n  border-color: #aac0d0;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in; }\n\n.accordion-header a {\n  font-size: 16px;\n  font-weight: 600;\n  color: #373737;\n  text-decoration: none;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n\n.accordion.open .accordion-header a {\n  color: #0A3466; }\n\n.accordion-content {\n  display: none; }\n\n.accordion.open .accordion-content {\n  padding-top: 10px;\n  display: block; }\n\n.page {\n  margin: 20px;\n  display: grid;\n  grid-template-columns: 80px 235px auto;\n  grid-template-rows: 46px auto; }\n\n.page-content-header {\n  grid-column-start: 2;\n  grid-column-end: -1;\n  grid-row-start: 1;\n  grid-row-end: 2;\n  align-self: center; }\n\n.toolbar.expanded + .page-content-header {\n  grid-column-start: 3; }\n\n.page-content {\n  grid-column-start: 1;\n  grid-column-end: -1;\n  grid-row-start: 2;\n  grid-row-end: -1; }\n\n.toolbar.expanded + .page-content-header + .page-content {\n  grid-column-start: 3; }\n\n.accordion-content nav {\n  border: 2px solid #D6D7D9;\n  border-radius: 0px 6px 6px 0px;\n  background-color: white; }\n\n.accordion-content nav .usa-sidenav {\n  border-bottom: none; }\n\n.filters .filter-header a {\n  text-decoration: none;\n  color: #323A45;\n  font-weight: 600; }\n\n.filters .filter-content {\n  display: none;\n  background: #FFFFFF;\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5); }\n\n.filters .filter-content.open {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 12px;\n  margin-left: -10px;\n  margin-right: -10px;\n  padding: 0px 10px 15px 10px; }\n\n.filters .filter-content .selected-chips {\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3Rvb2xiYXIvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvcHJvamVjdHNcXHN5LWNvbXBvbmVudHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFx0b29sYmFyXFx0b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLHdDQUFnQztFQUFoQyxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBRVoseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkNBQTJDLEVBQUE7O0FBRy9DO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLHdDQUFnQztFQUFoQyxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYiw0Q0FBb0M7RUFBcEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixxREFBcUQ7RUFDckQsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsb0NBQTRCO0VBQTVCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQix3Q0FBZ0M7RUFBaEMsZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnREFBaUQsRUFBQTs7QUFHckQ7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvc3ktY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcbn1cblxuLnRvb2xiYXIuZXhwYW5kZWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMztcbn1cblxuLnRvb2xiYXIuZXhwYW5kZWQgLnRvb2xiYXItZHJvcGRvd24ge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLnRvb2xiYXItZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnRvb2xiYXItc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOUZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5Nzk3OTc7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi50b29sYmFyLXRvZ2dsZS1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMxcHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI5KTtcbn1cblxuLnRvb2xiYXItdG9nZ2xlLWJ1dHRvbiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTk5OWVtO1xufVxuXG4udG9vbGJhci10b2dnbGUtYnV0dG9uOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkY2RkI7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzExMkY0RTtcbiAgICB3aWR0aDogOXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4udG9vbGJhci10b2dnbGUtYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCN0Y1QkQ7XG59XG5cbi50b29sYmFyLXRvZ2dsZS1idXR0b24uY29sbGFwc2VkOjpiZWZvcmUge1xuICAgIGhlaWdodDogOXB4O1xufVxuXG4udG9vbGJhci10b2dnbGUtYnV0dG9uLmV4cGFuZGVkOjpiZWZvcmUge1xuICAgIGhlaWdodDogMThweDtcbn1cblxuLnRvb2xiYXItZXhwYW5kZWQtY29udGVudCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnRvb2xiYXItZXhwYW5kZWQtY29udGVudC5vcGVuIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWNjb3JkaW9uIHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uYWNjb3JkaW9uLm9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkY2RkI7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggN3B4IDAgcmdiYSgzMCwgNzUsIDE5OCwgMC4xNik7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYWFjMGQwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNhYWMwZDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjYWFjMGQwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG5cbi5hY2NvcmRpb24taGVhZGVyIGEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzczNzM3O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmFjY29yZGlvbi5vcGVuIC5hY2NvcmRpb24taGVhZGVyIGEge1xuICAgIGNvbG9yOiAjMEEzNDY2O1xufVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hY2NvcmRpb24ub3BlbiAuYWNjb3JkaW9uLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFnZSB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDIzNXB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NnB4IGF1dG87XG59XG5cbi5wYWdlLWNvbnRlbnQtaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtcm93LWVuZDogMjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50b29sYmFyLmV4cGFuZGVkKy5wYWdlLWNvbnRlbnQtaGVhZGVyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAtMTtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLXJvdy1lbmQ6IC0xO1xufVxuXG4udG9vbGJhci5leHBhbmRlZCsucGFnZS1jb250ZW50LWhlYWRlcisucGFnZS1jb250ZW50IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbn1cblxuLmFjY29yZGlvbi1jb250ZW50IG5hdiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q2RDdEOTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggNnB4IDZweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5hY2NvcmRpb24tY29udGVudCBuYXYgLnVzYS1zaWRlbmF2IHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uZmlsdGVycyAuZmlsdGVyLWhlYWRlciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMzMjNBNDU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpbHRlcnMgLmZpbHRlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUwKTtcbn1cblxuLmZpbHRlcnMgLmZpbHRlci1jb250ZW50Lm9wZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDE1cHggMTBweDtcbn1cblxuLmZpbHRlcnMgLmZpbHRlci1jb250ZW50IC5zZWxlY3RlZC1jaGlwcyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/toolbar/toolbar.component.ts":
/*!********************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/toolbar/toolbar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./projects/sy-components/src/lib/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./projects/sy-components/src/lib/components/toolbar/toolbar.component.scss")]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./projects/sy-components/src/lib/components/video/video.component.html":
/*!******************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/video/video.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-container\">\r\n    <h3>{{videoConfig.title}}</h3>\r\n    <video width=\"490\" [poster]=\"videoConfig.poster\" crossorigin=\"anonymous\" controls [title]=\"videoConfig.title\"\r\n        #videoPly>\r\n        <source [src]=\"videoConfig.videoUrl\" type=\"video/mp4\" #videoSrc />\r\n        <track kind=\"captions\" label=\"English captions\" [src]=\"videoConfig.captionsUrl\" srclang=\"en\" default\r\n            #videoTrack />\r\n    </video>\r\n    <div class=\"video-description\">\r\n        <p> {{videoConfig.description}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/video/video.component.scss":
/*!******************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/video/video.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-description {\n  max-width: 450px;\n  word-break: break-word;\n  font-family: 'Open Sans', sans-serif !important;\n  font-size: 16px; }\n\nh3 {\n  color: #ADD8BB !important; }\n\n.video-description a {\n  font-size: 12px; }\n\n.video-container {\n  width: 450px;\n  max-width: 450px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3N5LWNvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3ZpZGVvL0M6XFxVc2Vyc1xceWVycmFcXERlc2t0b3BcXGFuZ3VsYXItY29tcG9uZW50c1xcc3ktYW5ndWxhci1jb21wb25lbnRzL3Byb2plY3RzXFxzeS1jb21wb25lbnRzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwrQ0FBK0M7RUFDL0MsZUFBZSxFQUFBOztBQUduQjtFQUNJLHlCQUFvQyxFQUFBOztBQUd4QztFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osZ0JBQ0osRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9zeS1jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Nhc3MvY29sb3JzJztcclxuLnZpZGVvLWRlc2NyaXB0aW9uIHtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiAkY29sb3ItZ3JlZW4tbGlnaHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZpZGVvLWRlc2NyaXB0aW9uIGEge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udmlkZW8tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIG1heC13aWR0aDogNDUwcHhcclxufSJdfQ== */"

/***/ }),

/***/ "./projects/sy-components/src/lib/components/video/video.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/sy-components/src/lib/components/video/video.component.ts ***!
  \****************************************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoPlayerComponent.prototype, "videoConfig", void 0);
    VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-video-player',
            template: __webpack_require__(/*! ./video.component.html */ "./projects/sy-components/src/lib/components/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./projects/sy-components/src/lib/components/video/video.component.scss")]
        })
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/action-button/action-button.component */ "./src/app/components/action-button/action-button.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _components_alert_footer_alert_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/alert-footer/alert-footer.component */ "./src/app/components/alert-footer/alert-footer.component.ts");
/* harmony import */ var _components_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/audit-trail/audit-trail.component */ "./src/app/components/audit-trail/audit-trail.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _components_history_table_history_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/history-table/history-table.component */ "./src/app/components/history-table/history-table.component.ts");
/* harmony import */ var _components_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/listbox/listbox.component */ "./src/app/components/listbox/listbox.component.ts");
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/progress-bar/progress-bar.component */ "./src/app/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _components_export_export_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/export/export.component */ "./src/app/components/export/export.component.ts");
/* harmony import */ var _components_required_message_required_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/required-message/required-message.component */ "./src/app/components/required-message/required-message.component.ts");
/* harmony import */ var _components_header_footer_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header-footer/header.component */ "./src/app/components/header-footer/header.component.ts");
/* harmony import */ var _components_header_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header-footer/footer.component */ "./src/app/components/header-footer/footer.component.ts");
/* harmony import */ var _components_download_download_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/download/download.component */ "./src/app/components/download/download.component.ts");
/* harmony import */ var _components_point_of_contact_point_of_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/point-of-contact/point-of-contact.component */ "./src/app/components/point-of-contact/point-of-contact.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_copy_to_clipboard_copy_to_clipboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/copy-to-clipboard/copy-to-clipboard.component */ "./src/app/components/copy-to-clipboard/copy-to-clipboard.component.ts");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/video/video.component */ "./src/app/components/video/video.component.ts");




















var routes = [
    {
        path: 'action-button', component: _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_3__["ActionButtonComponent"],
    },
    {
        path: 'alert', component: _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"],
    },
    {
        path: 'alert-footer', component: _components_alert_footer_alert_footer_component__WEBPACK_IMPORTED_MODULE_5__["AlertFooterComponent"],
    },
    {
        path: 'audit-trail', component: _components_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_6__["AuditTrailComponent"],
    },
    {
        path: 'history', component: _components_history_history_component__WEBPACK_IMPORTED_MODULE_7__["HistoryComponent"],
    },
    {
        path: 'header', component: _components_header_footer_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
    },
    {
        path: 'footer', component: _components_header_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
    },
    {
        path: 'history-table', component: _components_history_table_history_table_component__WEBPACK_IMPORTED_MODULE_8__["HistoryTableComponent"],
    },
    {
        path: 'listbox', component: _components_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_9__["ListboxComponent"],
    },
    {
        path: 'progress-bar', component: _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_10__["ProgressBarComponent"],
    },
    {
        path: 'export', component: _components_export_export_component__WEBPACK_IMPORTED_MODULE_11__["ExportComponent"],
    },
    {
        path: 'download', component: _components_download_download_component__WEBPACK_IMPORTED_MODULE_15__["DownloadComponent"],
    },
    {
        path: 'upload', component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_17__["UploadComponent"],
    },
    {
        path: 'required-message', component: _components_required_message_required_message_component__WEBPACK_IMPORTED_MODULE_12__["RequiredMessageComponent"],
    },
    {
        path: 'poc', component: _components_point_of_contact_point_of_contact_component__WEBPACK_IMPORTED_MODULE_16__["POCComponent"]
    },
    {
        path: 'video', component: _components_video_video_component__WEBPACK_IMPORTED_MODULE_19__["VideoPlayComponent"]
    },
    {
        path: 'copy-to-clipboard', component: _components_copy_to_clipboard_copy_to_clipboard_component__WEBPACK_IMPORTED_MODULE_18__["CopyToClipboardComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <dos-header></dos-header> -->\r\n<div class=\"tool-bar\">\r\n    <h1>\r\n        Angular Common Components Demo\r\n    </h1>\r\n</div>\r\n<!-- <button (click)=\"openDocumentation()\">Documentation</button> -->\r\n<div class=\"demo-container\">\r\n    <div class=\"sidenav\">\r\n        <aside>\r\n            <ul class=\"link-style\" *ngFor=\"let link of navLinks\">\r\n                <li>\r\n                    <a [routerLink]=\"link.path\">\r\n            {{link.label}}\r\n          </a>\r\n                </li>\r\n            </ul>\r\n        </aside>\r\n    </div>\r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n\r\n<!-- <dos-footer [footerSection2]=\"footerSection2\"></dos-footer> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n  padding-left: 15px;\n  min-height: 600px; }\n\n.link-style {\n  margin-bottom: 10px;\n  list-style-type: none; }\n\n.link-style li a {\n    font-size: 16px;\n    color: #008080;\n    font-weight: bold; }\n\n.demo-container {\n  max-width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 10px; }\n\n.container {\n  margin-left: 35px;\n  width: 60%;\n  padding: 20px;\n  max-height: 60%;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12); }\n\n.tool-bar {\n  text-align: center;\n  box-shadow: 0px 2px rgba(0, 0, 0, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFJbkI7RUFDRyxtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBRnhCO0lBSU0sZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTs7QUFHdkI7RUFDRSxlQUFlO0VBQ2Ysb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixpSEFBaUgsRUFBQTs7QUFHbkg7RUFDRSxrQkFBa0I7RUFDbEIsc0NBQXVDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtaW4taGVpZ2h0OiA2MDBweDtcblxufVxuXG4ubGluay1zdHlsZSB7XG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBsaSBhe1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICMwMDgwODA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLmRlbW8tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWF4LWhlaWdodDogNjAlO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLnRvb2wtYmFye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDBweCAycHggIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var code_example = "<div class=\"usa-grid-full\">\n  <div class=\"usa-width-one-whole\">\n    <sam-download [packages]=\"packages\" [downloadAllUrl]=\"downloadAllUrl\"></sam-download>\n  </div>\n</div>";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sy-angular-components';
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"];
        this.example = code_example;
        this.navLinks = [
            // {
            //   label: 'Header',
            //   path: '/header'
            // },
            {
                label: 'Action Button',
                path: '/action-button'
            },
            {
                label: 'Alert',
                path: '/alert'
            },
            {
                label: 'Alert Footer',
                path: '/alert-footer'
            },
            {
                label: 'Audit trail',
                path: '/audit-trail'
            },
            {
                label: 'History',
                path: '/history'
            },
            {
                label: 'History Table',
                path: '/history-table'
            },
            {
                label: 'Listbox',
                path: '/listbox'
            },
            {
                label: 'Progress Bar',
                path: '/progress-bar'
            },
            {
                label: 'Export',
                path: '/export'
            },
            // {
            //   label: 'Download',
            //   path: '/download'
            // },
            {
                label: 'Point Of Contact',
                path: '/poc'
            },
            {
                label: 'Upload',
                path: '/upload'
            },
            {
                label: 'Required Message',
                path: '/required-message'
            },
            {
                label: 'Copy To Clipboard',
                path: './copy-to-clipboard'
            },
            {
                label: 'Video Player',
                path: '/video'
            },
        ];
        this.footerSection2 = [
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
            },
        ];
    }
    AppComponent.prototype.openDocumentation = function () {
        window.open('http://127.0.0.1:8080', '_blank');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_document_document_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/document/document.component */ "./src/app/components/document/document.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
/* harmony import */ var _components_history_table_history_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/history-table/history-table.component */ "./src/app/components/history-table/history-table.component.ts");
/* harmony import */ var _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/action-button/action-button.component */ "./src/app/components/action-button/action-button.component.ts");
/* harmony import */ var _components_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/audit-trail/audit-trail.component */ "./src/app/components/audit-trail/audit-trail.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/progress-bar/progress-bar.component */ "./src/app/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _components_export_export_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/export/export.component */ "./src/app/components/export/export.component.ts");
/* harmony import */ var _components_required_message_required_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/required-message/required-message.component */ "./src/app/components/required-message/required-message.component.ts");
/* harmony import */ var _components_header_footer_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header-footer/header.component */ "./src/app/components/header-footer/header.component.ts");
/* harmony import */ var _components_header_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header-footer/footer.component */ "./src/app/components/header-footer/footer.component.ts");
/* harmony import */ var _components_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/listbox/listbox.component */ "./src/app/components/listbox/listbox.component.ts");
/* harmony import */ var _components_alert_footer_alert_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/alert-footer/alert-footer.component */ "./src/app/components/alert-footer/alert-footer.component.ts");
/* harmony import */ var _components_download_download_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/download/download.component */ "./src/app/components/download/download.component.ts");
/* harmony import */ var _components_point_of_contact_point_of_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/point-of-contact/point-of-contact.component */ "./src/app/components/point-of-contact/point-of-contact.component.ts");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/components/upload/upload.component.ts");
/* harmony import */ var _components_copy_to_clipboard_copy_to_clipboard_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/copy-to-clipboard/copy-to-clipboard.component */ "./src/app/components/copy-to-clipboard/copy-to-clipboard.component.ts");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/video/video.component */ "./src/app/components/video/video.component.ts");
/* harmony import */ var sy_components__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! sy-components */ "./node_modules/sy-components/fesm5/sy-components.js");








// import { AlertFooterService } from 'sy-components/lib/components/public_api';



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_header_footer_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _components_header_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _components_document_document_component__WEBPACK_IMPORTED_MODULE_8__["DocumentComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"],
                _components_history_table_history_table_component__WEBPACK_IMPORTED_MODULE_10__["HistoryTableComponent"],
                _components_action_button_action_button_component__WEBPACK_IMPORTED_MODULE_11__["ActionButtonComponent"],
                _components_audit_trail_audit_trail_component__WEBPACK_IMPORTED_MODULE_12__["AuditTrailComponent"],
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_14__["ProgressBarComponent"],
                _components_export_export_component__WEBPACK_IMPORTED_MODULE_15__["ExportComponent"],
                _components_required_message_required_message_component__WEBPACK_IMPORTED_MODULE_16__["RequiredMessageComponent"],
                _components_listbox_listbox_component__WEBPACK_IMPORTED_MODULE_19__["ListboxComponent"],
                _components_alert_footer_alert_footer_component__WEBPACK_IMPORTED_MODULE_20__["AlertFooterComponent"],
                _components_download_download_component__WEBPACK_IMPORTED_MODULE_21__["DownloadComponent"],
                _components_point_of_contact_point_of_contact_component__WEBPACK_IMPORTED_MODULE_22__["POCComponent"],
                _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_23__["UploadComponent"],
                _components_copy_to_clipboard_copy_to_clipboard_component__WEBPACK_IMPORTED_MODULE_24__["CopyToClipboardComponent"],
                _components_video_video_component__WEBPACK_IMPORTED_MODULE_25__["VideoPlayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                sy_components__WEBPACK_IMPORTED_MODULE_26__["SyComponentsModule"]
                // SyComponentsModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/action-button/action-button.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/action-button/action-button.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Action Button Example</h2>\n<sy-action-button [action]=\"action\">\n</sy-action-button>\n\n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n\n<h4>Script(TS)</h4>\n<pre>\n    <code>{{codeScript}}</code>\n</pre>"

/***/ }),

/***/ "./src/app/components/action-button/action-button.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/action-button/action-button.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/action-button/action-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/action-button/action-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: ActionButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonComponent", function() { return ActionButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent() {
        this.action = {
            name: 'edit',
            label: 'Edit',
            icon: 'pencil-alt',
            callback: function () { console.log('click'); }
        };
        this.codeScript = "action = {\n    name: 'edit',\n    label: 'Edit',\n    icon: 'pencil-alt',\n    callback: () => { console.log('click'); }\n  };";
        this.codeExample = "<sy-action-button [action]=\"action\"></sy-action-button>";
    }
    ActionButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-action-button',
            template: __webpack_require__(/*! ./action-button.component.html */ "./src/app/components/action-button/action-button.component.html"),
            styles: [__webpack_require__(/*! ./action-button.component.scss */ "./src/app/components/action-button/action-button.component.scss")]
        })
    ], ActionButtonComponent);
    return ActionButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/alert-footer/alert-footer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/alert-footer/alert-footer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onFooterAlertBtnClick()\">Add Footer alert</button>\n<sy-alert-footer [alerts]=\"alerts\" (dismissAlert)=\"dismissAlert($event)\">\n</sy-alert-footer>"

/***/ }),

/***/ "./src/app/components/alert-footer/alert-footer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/alert-footer/alert-footer.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQtZm9vdGVyL2FsZXJ0LWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/alert-footer/alert-footer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/alert-footer/alert-footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlertFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertFooterComponent", function() { return AlertFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { AlertFooterService } from 'sy-components/lib/components/public_api';
var AlertFooterComponent = /** @class */ (function () {
    function AlertFooterComponent() {
        this.alerts = [];
        this.footerAlertModel = {
            title: 'test title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'error',
            timer: 0,
            mustDismiss: false
        };
    }
    AlertFooterComponent.prototype.onFooterAlertBtnClick = function () {
        this.alerts.unshift(JSON.parse(JSON.stringify(this.footerAlertModel)));
    };
    AlertFooterComponent.prototype.dismissAlert = function (event) {
        this.alerts = [];
    };
    AlertFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-footer',
            template: __webpack_require__(/*! ./alert-footer.component.html */ "./src/app/components/alert-footer/alert-footer.component.html"),
            styles: [__webpack_require__(/*! ./alert-footer.component.scss */ "./src/app/components/alert-footer/alert-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertFooterComponent);
    return AlertFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Alert Example with Success</h2>\r\n<sy-alert type=\"'success'\" [showClose]=\"true\" title=\"Success Message\" description=\"Success message here\">\r\n    <div main-content>\r\n\r\n    </div>\r\n</sy-alert>\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n  <code>{{codeExample}}</code>\r\n</pre>\r\n\r\n<h2>Alert Example with Info custom template</h2>\r\n<sy-alert type=\"info\">\r\n    <div main-content>\r\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, provident. Accusamus doloremque numquam sequi laborum odio aspernatur beatae officia quae, fugit aliquid, architecto, sapiente tenetur perspiciatis pariatur maxime veniam dolorem.\r\n    </div>\r\n</sy-alert>\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n  <code>{{codeExample1}}</code>\r\n</pre>\r\n\r\n\r\n<sy-alert type=\"error\" title=\"Error Message\" [descriptionList]=\"descriptionList\">\r\n</sy-alert>\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n  <code>{{codeExample2}}</code>\r\n</pre>\r\n<h4>Script(TS)</h4>\r\n<pre>\r\n  <code>{{codeScript2}}</code>\r\n</pre>\r\n\r\n<h4>API References</h4>\r\n<pre>\r\n  <code>{{apiRefences}}</code>\r\n</pre>"

/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.descriptionList = [
            'Sorry, there are no matching results.',
            'Try these search suggestions:',
            'Please check your spelling. This search does not auto-correct spelling.'
        ];
        this.codeExample = "<sy-alert type=\"'success'\" title=\"Success Message\" description=\"Success message here\">";
        this.codeExample1 = "<sy-alert type=\"info\">\n  <div main-content>\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n    Aperiam, provident. Accusamus doloremque numquam sequi laborum\n    odio aspernatur beatae officia quae, fugit aliquid, architecto,\n    sapiente tenetur perspiciatis pariatur maxime veniam dolorem.\n  </div>\n</sy-alert>\n";
        this.codeExample2 = "<sy-alert type=\"error\" title=\"Error Message\"  [descriptionList]=\"descriptionList\"></sy-alert>";
        this.codeScript2 = "descriptionList: any[] = [\n  'Sorry, there are no matching results.' ,\n  'Try these search suggestions:' ,\n  'Please check your spelling. This search does not auto-correct spelling.'\n ];";
        this.apiRefences = "\n  @Input() type: string  -- Type of Alert Default is Success;\n\n  @Input() title: string -- Sets the alert title;\n\n  @Input() description: string -- Sets the alert description;\n\n  @Input() descriptionList: any[] -- Sets the alert descriptionList";
    }
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/components/alert/alert.component.scss")]
        })
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/audit-trail/audit-trail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/audit-trail/audit-trail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Example with customised date format</h2>\n\n<sy-audit-trail [lastModifiedByEmail]=\"lastModifiedByEmail\" [createdByEmail]=\"createdByEmail\" [created]=\"created\" [lastModified]=\"lastModified\" [dateFormat]=\"dateFormat\">\n</sy-audit-trail>\n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n\n<h4>Script(TS)</h4>\n<pre>\n    <code>{{codeScript}}</code>\n</pre>\n\n<h2>Example with default date format</h2>\n<sy-audit-trail [lastModifiedByEmail]=\"lastModifiedByEmail1\" [createdByEmail]=\"createdByEmail1\" [created]=\"created1\" [lastModified]=\"lastModified1\">\n</sy-audit-trail>\n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample1}}</code>\n</pre>\n\n<h4>Script(TS)</h4>\n<pre>\n    <code>{{codeScript1}}</code>\n</pre>"

/***/ }),

/***/ "./src/app/components/audit-trail/audit-trail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/audit-trail/audit-trail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXVkaXQtdHJhaWwvYXVkaXQtdHJhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/audit-trail/audit-trail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/audit-trail/audit-trail.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuditTrailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTrailComponent", function() { return AuditTrailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuditTrailComponent = /** @class */ (function () {
    function AuditTrailComponent() {
        this.lastModifiedByEmail = 'dtiadesse@gmail.com';
        this.createdByEmail = 'dtiadesse@gmail.com';
        this.created = Date.now();
        this.lastModified = Date.now();
        this.dateFormat = 'yy-mm-dddd';
        this.lastModifiedByEmail1 = 'dtiadesse@gmail.com';
        this.createdByEmail1 = 'dtiadesse@gmail.com';
        this.created1 = Date.now();
        this.lastModified1 = Date.now();
        this.codeExample = "<sy-audit-trail \n      [lastModifiedByEmail]=\"lastModifiedByEmail\"\n      [createdByEmail]=\"createdByEmail\"\n      [created]=\"created\"\n      [lastModified]=\"lastModified\"\n      [dateFormat]=\"dateFormat\">\n    </sy-audit-trail>";
        this.codeExample1 = "<sy-audit-trail \n      [lastModifiedByEmail]=\"lastModifiedByEmail1\"\n      [createdByEmail]=\"createdByEmail1\"\n      [created]=\"created1\"\n      [lastModified]=\"lastModified1\">\n    </sy-audit-trail>";
        this.codeScript = "lastModifiedByEmail= 'dtiadesse@gmail.com';\n    createdByEmail= 'dtiadesse@gmail.com';\n    created= Date.now();\n    lastModified= Date.now();\n    dateFormat = 'yy-mm-dddd';";
        this.codeScript1 = "lastModifiedByEmail1=  'dtiadesse@gmail.com';\n    createdByEmail1=  'dtiadesse@gmail.com';\n    created1= Date.now();\n    lastModified1= Date.now();\n  ";
    }
    AuditTrailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audit-trail',
            template: __webpack_require__(/*! ./audit-trail.component.html */ "./src/app/components/audit-trail/audit-trail.component.html"),
            styles: [__webpack_require__(/*! ./audit-trail.component.scss */ "./src/app/components/audit-trail/audit-trail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuditTrailComponent);
    return AuditTrailComponent;
}());



/***/ }),

/***/ "./src/app/components/copy-to-clipboard/copy-to-clipboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/copy-to-clipboard/copy-to-clipboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Export to csv Example</h2>\r\n<sy-copy-clipboard [datasource]=\"data\">\r\n</sy-copy-clipboard>\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n    <code>{{codeExample}}</code>\r\n</pre>\r\n\r\n<h4>Script(TS)</h4>\r\n<pre>\r\n    <code>{{codeScript}}</code>\r\n</pre>\r\n\r\n<h4>API References</h4>\r\n<pre>\r\n  <code>{{apiRefences}}</code>\r\n</pre>"

/***/ }),

/***/ "./src/app/components/copy-to-clipboard/copy-to-clipboard.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/copy-to-clipboard/copy-to-clipboard.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29weS10by1jbGlwYm9hcmQvY29weS10by1jbGlwYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/copy-to-clipboard/copy-to-clipboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/copy-to-clipboard/copy-to-clipboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CopyToClipboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyToClipboardComponent", function() { return CopyToClipboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CopyToClipboardComponent = /** @class */ (function () {
    function CopyToClipboardComponent() {
        this.data = [
            {
                DateTimeChanged: Date.now(),
                SummaryReason: 'changed test1',
                DetailField: 'Street Address changed1',
                DetailOld: 'Street1',
                DetailNew: 'Street ts1',
                DetailChangedBy: 'Shilpa Yerram1'
            },
            {
                DateTimeChanged: Date.now(),
                SummaryReason: '1changed test',
                DetailField: '1Street Address changed',
                DetailOld: '1Street',
                DetailNew: '1Street ts',
                DetailChangedBy: 'Yerram'
            }
        ];
        this.codeScript = "data = [\n    {\n      DateTimeChanged: Date.now(),\n      SummaryReason: 'changed test',\n      DetailField: 'Street Address changed',\n      DetailOld: 'Street',\n      DetailNew: 'Street ts',\n      DetailChangedBy: 'Shilpa Yerram'\n    },\n    {\n      DateTimeChanged: Date.now(),\n      SummaryReason: '1changed test',\n      DetailField: '1Street Address changed',\n      DetailOld: '1Street',\n      DetailNew: '1Street ts',\n      DetailChangedBy: 'Yerram'\n    }\n  ];";
        this.codeExample = "<sy-copy-clipboard [datasource]=\"data\"></sy-copy-clipboard> ";
        this.apiRefences = "\n  Data Source to export\n  @Input() datasource: any[] = [];";
    }
    CopyToClipboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-copy-to-clipboard',
            template: __webpack_require__(/*! ./copy-to-clipboard.component.html */ "./src/app/components/copy-to-clipboard/copy-to-clipboard.component.html"),
            styles: [__webpack_require__(/*! ./copy-to-clipboard.component.scss */ "./src/app/components/copy-to-clipboard/copy-to-clipboard.component.scss")]
        })
    ], CopyToClipboardComponent);
    return CopyToClipboardComponent;
}());



/***/ }),

/***/ "./src/app/components/document/document.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/document/document.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Single Example -->\n<pre *ngIf=\"example\" class=\"language-html\"><code class=\"language-html\" [innerHTML]=\"example\"></code></pre>\n"

/***/ }),

/***/ "./src/app/components/document/document.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/document/document.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/document/document.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/document/document.component.ts ***!
  \***********************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);



var DocumentComponent = /** @class */ (function () {
    function DocumentComponent() {
    }
    DocumentComponent.prototype.ngOnInit = function () {
        // ==========================================================
        // Run Prism JS
        // ==========================================================
        if (this.example) {
            this.example = this.example.trim();
            this.example = prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlight(this.example, prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.languages.html);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DocumentComponent.prototype, "example", void 0);
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sy-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/components/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/components/document/document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/components/download/download.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/download/download.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sy-download [packages]=\"packages\" [downloadAllUrl]=\"downloadAllUrl\">\n</sy-download>"

/***/ }),

/***/ "./src/app/components/download/download.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/download/download.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".usa-button-small {\n  font-size: 15px;\n  padding: 8px 12px; }\n\n.download-container {\n  position: relative; }\n\n.download-container .card-header {\n    padding-right: 140px; }\n\n.download-container-header {\n  position: relative; }\n\n.download-container-header .download-button {\n    top: 0px;\n    right: -8px; }\n\n.download-button {\n  position: absolute;\n  top: 8px;\n  right: 10px; }\n\n/* Zebra List */\n\n/*============================*/\n\n.usa-zebra-list {\n  list-style-type: none;\n  padding-left: 0;\n  margin: 0;\n  overflow: hidden; }\n\n.usa-zebra-list > li {\n  margin-bottom: 0;\n  border-top: 1px solid rgba(204, 204, 204, 0.3); }\n\n.usa-zebra-list > li:nth-child(even) {\n  background-color: rgba(241, 241, 241, 0.35); }\n\n.usa-zebra-list > li:hover {\n  background-color: #f1f1f1;\n  -webkit-transition: background-color 300ms ease-out;\n  transition: background-color 300ms ease-out; }\n\n.usa-zebra-list li a {\n  padding: 8px 14px;\n  display: block;\n  text-decoration: none; }\n\n.usa-zebra-list li a:hover {\n  text-decoration: underline; }\n\n/* Download info */\n\n/*============================*/\n\n.download-info-icon,\n.download-info-link,\n.download-info-type {\n  display: inline-block; }\n\n.download-info-icon {\n  width: 28px;\n  vertical-align: top;\n  padding-top: 8px;\n  padding-left: 15px; }\n\n.download-info-link {\n  width: 75%; }\n\n.download-info-link a {\n    padding-left: 0; }\n\n.download-info-link sup {\n    font-weight: 700; }\n\n.download-info-type {\n  width: 18%;\n  text-align: right;\n  vertical-align: top;\n  padding-top: 8px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #5b616b; }\n\n.package-access {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb3dubG9hZC9DOlxcVXNlcnNcXHllcnJhXFxEZXNrdG9wXFxhbmd1bGFyLWNvbXBvbmVudHNcXHN5LWFuZ3VsYXItY29tcG9uZW50cy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZG93bmxvYWRcXGRvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csZUFBZTtFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUlRLG9CQUFvQixFQUFBOztBQUk1QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUlRLFFBQVE7SUFDUixXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2YsZUFBQTs7QUFDQSwrQkFBQTs7QUFDQTtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQjtFQUNoQiw4Q0FBK0MsRUFBQTs7QUFHbkQ7RUFDSSwyQ0FBMkMsRUFBQTs7QUFHL0M7RUFDSSx5QkFBd0M7RUFDeEMsbURBQW1EO0VBSW5ELDJDQUEyQyxFQUFBOztBQUcvQztFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRzlCLGtCQUFBOztBQUNBLCtCQUFBOztBQUNBOzs7RUFHSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFJUSxlQUFlLEVBQUE7O0FBSnZCO0lBUVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNhLWJ1dHRvbi1zbWFsbCB7XHJcbiAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG59XHJcblxyXG4uZG93bmxvYWQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZG93bmxvYWQtY29udGFpbmVyLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmRvd25sb2FkLWJ1dHRvbiB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC04cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kb3dubG9hZC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG5cclxuLyogWmVicmEgTGlzdCAqL1xyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4udXNhLXplYnJhLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnVzYS16ZWJyYS1saXN0PmxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjMwKTtcclxufVxyXG5cclxuLnVzYS16ZWJyYS1saXN0PmxpOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQxLCAyNDEsIDAuMzUpO1xyXG59XHJcblxyXG4udXNhLXplYnJhLWxpc3Q+bGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MSwgMjQxLCAxKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi51c2EtemVicmEtbGlzdCBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi51c2EtemVicmEtbGlzdCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKiBEb3dubG9hZCBpbmZvICovXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5kb3dubG9hZC1pbmZvLWljb24sXHJcbi5kb3dubG9hZC1pbmZvLWxpbmssXHJcbi5kb3dubG9hZC1pbmZvLXR5cGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZG93bmxvYWQtaW5mby1pY29uIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1pbmZvLWxpbmsge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3VwIHtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZG93bmxvYWQtaW5mby10eXBlIHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjNWI2MTZiO1xyXG59XHJcblxyXG4ucGFja2FnZS1hY2Nlc3Mge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/download/download.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/download/download.component.ts ***!
  \***********************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DownloadComponent = /** @class */ (function () {
    function DownloadComponent() {
        this.packages = [
            {
                packageId: '5510527885db16f1d7ae72ecfa8e6567',
                name: 'Industry Day IV Change of Location',
                type: 'Other (Draft RFPs/RFIs, Responses to Questions, etc..)',
                postedDate: 'Apr 07, 2015',
                access: 'Public',
                resources: [
                    {
                        resourceId: '862178b04be2db1778a697464f186836',
                        name: 'J.pdf',
                        type: 'file',
                        description: 'Industry Day IV change of conference room.',
                        size: '83 kB',
                        downloadUrl: 'http://fakesite.com/download/4444',
                        typeInfo: {
                            name: 'PDF document',
                            iconClass: 'file-pdf'
                        }
                    }
                ],
                accordionState: 'collapsed',
                downloadUrl: 'http://fakesite.com/download/3333'
            }
        ];
        this.downloadAllUrl = 'http://fakesite.com/download/1234';
    }
    DownloadComponent.prototype.ngOnInit = function () {
    };
    DownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/components/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.scss */ "./src/app/components/download/download.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/components/export/export.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/export/export.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Export to csv Example</h2>\r\n<sy-export [datasource]=\"data\">\r\n</sy-export>\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n    <code>{{codeExample}}</code>\r\n</pre>\r\n\r\n<h4>Script(TS)</h4>\r\n<pre>\r\n    <code>{{codeScript}}</code>\r\n</pre>\r\n\r\n<h4>API References</h4>\r\n<pre>\r\n  <code>{{apiRefences}}</code>\r\n</pre>"

/***/ }),

/***/ "./src/app/components/export/export.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/export/export.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwb3J0L2V4cG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/export/export.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/export/export.component.ts ***!
  \*******************************************************/
/*! exports provided: ExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportComponent", function() { return ExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExportComponent = /** @class */ (function () {
    function ExportComponent() {
        this.data = [
            {
                DateTimeChanged: Date.now(),
                SummaryReason: 'changed test',
                DetailField: 'Street Address changed',
                DetailOld: 'Street',
                DetailNew: 'Street ts',
                DetailChangedBy: 'Shilpa Yerram'
            },
            {
                DateTimeChanged: Date.now(),
                SummaryReason: '1changed test',
                DetailField: '1Street Address changed',
                DetailOld: '1Street',
                DetailNew: '1Street ts',
                DetailChangedBy: 'Yerram'
            }
        ];
        this.codeScript = "data = [\n    {\n      DateTimeChanged: Date.now(),\n      SummaryReason: 'changed test',\n      DetailField: 'Street Address changed',\n      DetailOld: 'Street',\n      DetailNew: 'Street ts',\n      DetailChangedBy: 'Shilpa Yerram'\n    },\n    {\n      DateTimeChanged: Date.now(),\n      SummaryReason: '1changed test',\n      DetailField: '1Street Address changed',\n      DetailOld: '1Street',\n      DetailNew: '1Street ts',\n      DetailChangedBy: 'Yerram'\n    }\n  ];";
        this.codeExample = "<sy-export [datasource]=\"data\"></sy-export>\n  <sy-export [datasource]=\"data\" [fileName]=\"test-data\"></sy-export>\n  ";
        this.apiRefences = "\n  File name\n  @Input() fileName default name  'export-data';\n\n  Data Source to export\n  @Input() datasource: any[] = [];";
    }
    ExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-export',
            template: __webpack_require__(/*! ./export.component.html */ "./src/app/components/export/export.component.html"),
            styles: [__webpack_require__(/*! ./export.component.scss */ "./src/app/components/export/export.component.scss")]
        })
    ], ExportComponent);
    return ExportComponent;
}());



/***/ }),

/***/ "./src/app/components/header-footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header-footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.codeExample = " <dos-footer></dos-footer>";
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: "\n  <h2>Dept Of State Footer Example</h2>\n <p>Footer is used in the foorter section as below</p>\n  \n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n  "
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header-footer/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/header-footer/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.codeExample = " <dos-header></dos-header>";
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: "\n  <h2>Dept Of State Header Example</h2>\n <p>Header is used in application </p>\n  \n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n  "
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/history-table/history-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/history-table/history-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>History table Example</h2>\n<sy-history-table [historyData]=\"historyData\" [historyConfig]=\"historyConfig\">\n</sy-history-table>\n\n\n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n\n<h4>Script(TS)</h4>\n<pre>\n    <code>{{codeScript}}</code>\n</pre>\n\n<h4>API References</h4>\n<pre>\n  <code>{{apiRefences}}</code>\n</pre>"

/***/ }),

/***/ "./src/app/components/history-table/history-table.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/history-table/history-table.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yeS10YWJsZS9oaXN0b3J5LXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/history-table/history-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/history-table/history-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: HistoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryTableComponent", function() { return HistoryTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HistoryTableComponent = /** @class */ (function () {
    function HistoryTableComponent() {
        this.historyConfig = {
            title: 'Channge History',
            dateHeaderText: 'Date',
            detailsHeaderText: 'Change'
        };
        this.historyData = [
            {
                DateTimeChanged: Date.now(),
                SummaryReason: 'changed test',
                DetailField: 'Street Address changed',
                DetailOld: 'Street',
                DetailNew: 'Street ts',
                DetailChangedBy: 'Shilpa Yerram'
            },
            {
                DateTimeChanged: Date.now(),
                SummaryReason: '1changed test',
                DetailField: '1Street Address changed',
                DetailOld: '1Street',
                DetailNew: '1Street ts',
                DetailChangedBy: 'Yerram'
            }
        ];
        this.codeScript = "historyData=[\n    {\n      DateTimeChanged: Date.now(),\n      SummaryReason: 'changed test',\n      DetailField: 'Street Address changed',\n      DetailOld: 'Street',\n      DetailNew: 'Street ts',\n      DetailChangedBy: 'Shilpa Yerram'\n    },\n    {\n      DateTimeChanged: Date.now(),\n      SummaryReason: '1changed test',\n      DetailField: '1Street Address changed',\n      DetailOld: '1Street',\n      DetailNew: '1Street ts',\n      DetailChangedBy: 'Yerram'\n    }\n  ];";
        this.codeExample = "<sy-history-table [historyData]=\"historyData\" [historyConfig]=\"historyConfig\"></sy-history-table>";
        this.apiRefences = "\n  @Input() historyConfig: HistoryConfig   -- History table Configurations;\n \n  @Input()historyData: HistoryDataType[] -- History Data is a list and the type of HistoryDataType;\n\n  @Input() description: string -- Sets the alert description;\n\n  @Input() descriptionList: any[] -- Sets the alert descriptionList\n  \n  History Configuration interface\n\n  HistoryConfig {\n    title: string;\n    dateHeaderText: string;\n    detailsHeaderText: string;\n  }\n  \n  History data type Interface\n  HistoryDataType {\n    DateTimeChanged: string;\n    SummaryReason: string;\n    DetailField: string;\n    DetailOld: string;\n    DetailNew: string;\n    DetailChangedBy: string;\n  }\n";
    }
    HistoryTableComponent.prototype.ngOnInit = function () {
    };
    HistoryTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history-table',
            template: __webpack_require__(/*! ./history-table.component.html */ "./src/app/components/history-table/history-table.component.html"),
            styles: [__webpack_require__(/*! ./history-table.component.scss */ "./src/app/components/history-table/history-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HistoryTableComponent);
    return HistoryTableComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>History Example</h2>\n<sy-history [data]=\"history\">\n</sy-history>\n\n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n\n<h4>Script(TS)</h4>\n<pre>\n    <code>{{codeScript}}</code>\n</pre>"

/***/ }),

/***/ "./src/app/components/history/history.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/history/history.component.ts ***!
  \*********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
        this.history = [
            {
                authoritative: '0',
                date: 'Feb 04, 2016 8:20am',
                description: 'Lorem Ipsum',
                id: '0564cc38f28e1a85ea66de2bb78dae29',
                index: '1',
                isTagged: false,
                title: 'Original Combined Synopsis/Solicitation',
                url: 'opportunities/0564cc38f28e1a85ea66de2bb78dae29',
            },
            {
                authoritative: '1',
                date: 'Mar 13, 2016 1:21pm',
                description: '',
                id: '1a610c814d73fc23a6b71decc9b4c548',
                index: '2',
                isTagged: false,
                title: 'Award Notice',
                url: 'opportunities/1a610c814d73fc23a6b71decc9b4c548',
            }
        ];
        this.codeScript = "history = [\n    {\n      authoritative: '0',\n      date: 'Feb 04, 2016 8:20am',\n      description: 'Lorem Ipsum',\n      id: '0564cc38f28e1a85ea66de2bb78dae29',\n      index: '1',\n      isTagged: false,\n      title: 'Original Combined Synopsis/Solicitation',\n      url: 'opportunities/0564cc38f28e1a85ea66de2bb78dae29',\n    },\n    {\n      authoritative: '1',\n      date: 'Mar 13, 2016 1:21pm',\n      description: '',\n      id: '1a610c814d73fc23a6b71decc9b4c548',\n      index: '2',\n      isTagged: false,\n      title: 'Award Notice',\n      url: 'opportunities/1a610c814d73fc23a6b71decc9b4c548',\n    }\n  ];";
        this.codeExample = "<sy-history [data]=\"history\"></sy-history>";
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/components/history/history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/listbox/listbox.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/listbox/listbox.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Listbox example with checkbox(multiple) mode</h2>\r\n<sy-listbox [options]=\"options\" [(ngModel)]=\"selectItems2\" [required]=\"true\">\r\n</sy-listbox>\r\n{{selectItems2 |json}}\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n    <code>{{codeExample}}</code>\r\n</pre>\r\n\r\n<h4>Script(TS)</h4>\r\n<pre>\r\n    <code>{{codeScript}}</code>\r\n</pre>\r\n\r\n<h4>API References</h4>\r\n<pre>\r\n  <code>{{apiRefences}}</code>\r\n</pre>\r\n\r\n\r\n<h2>Listbox example with radio button(single) mode</h2>\r\n\r\n<sy-listbox isSingleMode=\"true\" [options]=\"options1\" [(ngModel)]=\"selectItems1\">\r\n</sy-listbox>\r\n{{selectItems1 |json}}\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n    <code>{{codeExample1}}</code>\r\n</pre>\r\n\r\n<h4>Script(TS)</h4>\r\n<pre>\r\n    <code>{{codeScript1}}</code>\r\n</pre>"

/***/ }),

/***/ "./src/app/components/listbox/listbox.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/listbox/listbox.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdGJveC9saXN0Ym94LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/listbox/listbox.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/listbox/listbox.component.ts ***!
  \*********************************************************/
/*! exports provided: ListboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListboxComponent", function() { return ListboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListboxComponent = /** @class */ (function () {
    function ListboxComponent() {
        this.selectItems1 = [];
        this.selectItems2 = [];
        this.options = [
            { name: 'id1', value: 'test1', label: 'test-id1', required: false, checked: false },
            { name: 'id2', value: 'test2', label: 'test-id2', required: true, checked: true },
            { name: 'id3', value: 'test3', label: 'test-id3', required: false, checked: false },
            { name: 'id4', value: 'test4', label: 'test-id4', required: false, checked: false },
            { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },
            { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },
            { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },
            { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },
        ];
        this.options1 = [
            { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },
            { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },
            { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },
            { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },
        ];
        this.codeScript = "public options = [\n    { name: 'id1', value: 'test1', label: 'test-id1', required: false, checked: false },\n    { name: 'id2', value: 'test2', label: 'test-id2', required: true, checked: true },\n    { name: 'id3', value: 'test3', label: 'test-id3', required: false, checked: false },\n    { name: 'id4', value: 'test4', label: 'test-id4', required: false, checked: false },\n    { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },\n    { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },\n    { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },\n    { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },\n  ];";
        this.codeExample = "<sy-listbox [options]=\"options\" [(ngModel)]=\"selectItems2\" [required]=\"true\"></sy-listbox>";
        this.codeScript1 = "public options1 = [\n  { name: 'id5', value: 'test5', label: 'test-id5', required: false, checked: true },\n    { name: 'id6', value: 'test6', label: 'test-id6', required: false, checked: false },\n    { name: 'id7', value: 'test7', label: 'test-id7', required: false, checked: false },\n    { name: 'id8', value: 'test8', label: 'test-id8', required: false, checked: false },\n  ];";
        this.codeExample1 = "<sy-listbox isSingleMode=\"true\" [options]=\"options1\" [(ngModel)]=\"selectItems1\"></sy-listbox>";
        this.apiRefences = "/**\n    * Deprecated, Sets the bound value of the component\n    */\n  @Input() model: any = [];\n  /**\n   * Sets the array of checkbox values and labels (see OptionsType[])\n   */\n  @Input() options: OptionModel[];\n  /**\n   * Sets the label text\n   */\n  @Input() label: string;\n  /**\n   * Sets the semantic description for the component\n   */\n  @Input() name: string;\n  /**\n   * Sets helpful text for the using the component\n   */\n  @Input() hint: string;\n  /**\n   * Sets required text on component\n   */\n  @Input() required: boolean = false;\n  /**\n   * Sets the form control error message\n   */\n  @Input() errorMessage: string;\n  /**\n   * Sets the angular FormControl\n   */\n  @Input() control: FormControl;\n  \n  /**\n    * Sets the id\n    */\n  @Input() id: string;\n  \n  OptionModel {\n    name: string;\n    value: string;\n    label: any;\n    required: boolean;\n    checked: boolean;\n    disabled: boolean;\n  }";
    }
    ListboxComponent.prototype.ngOnInit = function () {
        this.selectItems2 = this.options.filter(function (item) { return item.checked; });
        this.selectItems1 = this.options1.filter(function (item) { return item.checked; });
    };
    ListboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listbox',
            template: __webpack_require__(/*! ./listbox.component.html */ "./src/app/components/listbox/listbox.component.html"),
            styles: [__webpack_require__(/*! ./listbox.component.scss */ "./src/app/components/listbox/listbox.component.scss")]
        })
    ], ListboxComponent);
    return ListboxComponent;
}());



/***/ }),

/***/ "./src/app/components/point-of-contact/point-of-contact.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/point-of-contact/point-of-contact.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Point Of Contact Example</h2>\r\n<sy-poc [data]=\"pointOfContact\">\r\n</sy-poc>\r\n\r\n<h4>HTML</h4>\r\n<pre>\r\n <code>{{codeExample}}</code>\r\n</pre>\r\n\r\n<h4>Script(TS)</h4>\r\n<pre>\r\n  <code>{{codeScript}}</code>\r\n</pre>\r\n\r\n<h4>API References</h4>\r\n<pre>\r\n  <code>{{apiRefences}}</code>\r\n</pre>"

/***/ }),

/***/ "./src/app/components/point-of-contact/point-of-contact.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/point-of-contact/point-of-contact.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9pbnQtb2YtY29udGFjdC9wb2ludC1vZi1jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/point-of-contact/point-of-contact.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/point-of-contact/point-of-contact.component.ts ***!
  \***************************************************************************/
/*! exports provided: POCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POCComponent", function() { return POCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var POCComponent = /** @class */ (function () {
    function POCComponent() {
        this.pointOfContact = {
            fullName: 'John Doe',
            address: '1234 Waterway Rd',
            city: 'Norfolk',
            state: 'VA',
            zip: '12345',
            email: 'jdoe@test.gov',
            phone: '222-222-2222',
            website: 'www.testsite.gov'
        };
        this.codeScript = "pointOfContact = {\n    fullName: 'John Doe',\n    address: '1234 Waterway Rd',\n    city: 'Norfolk',\n    state: 'VA',\n    zip: '12345',\n    email: 'jdoe@test.gov',\n    phone: '222-222-2222',\n    website: 'www.testsite.gov'\n  };";
        this.codeExample = "<sy-poc [data]=\"pointOfContact\"></sy-poc>";
        this.apiRefences = "@Input() data: PointOfContactType;\n\n    PointOfContactType {\n  \n    fullName?: string; --  Sets the full name property\n \n    title?: string; -- Sets the title property\n    \n    address?: string; -- Sets the primary address property\n   \n    address2?: string; -- Sets the secondary address property\n   \n    city?: string; -- Sets the city name property\n  \n    state?: string; -- Sets the state property\n   \n    zip?: string; -- Sets the zip code property\n   \n    email?: string; -- Sets the email property\n   \n    phone?: string; --  Sets the primary phone property\n   \n    phone2?: string; -- Sets the secondary phone property\n   \n    fax?: string; -- Sets the fax number property\n  \n    website?: string; -- Sets the website url\n  }\n  ";
    }
    POCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-point-of-contact',
            template: __webpack_require__(/*! ./point-of-contact.component.html */ "./src/app/components/point-of-contact/point-of-contact.component.html"),
            styles: [__webpack_require__(/*! ./point-of-contact.component.scss */ "./src/app/components/point-of-contact/point-of-contact.component.scss")]
        })
    ], POCComponent);
    return POCComponent;
}());



/***/ }),

/***/ "./src/app/components/progress-bar/progress-bar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/progress-bar/progress-bar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Progress Bar Example</h2>\n<sy-progress-bar [type]=\"percentExample.type\" [min]=\"percentExample.min\" [max]=\"percentExample.max\" [value]=\"percentExample.value\" [valueAsText]=\"percentExample.valueAsText\">\n</sy-progress-bar>\n\n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n\n<h4>Script(TS)</h4>\n<pre>\n    <code>{{codeScript}}</code>\n</pre>"

/***/ }),

/***/ "./src/app/components/progress-bar/progress-bar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/progress-bar/progress-bar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/progress-bar/progress-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/progress-bar/progress-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_sy_components_src_lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/sy-components/src/lib/components */ "./projects/sy-components/src/lib/components/index.ts");



var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.percentExample = {
            type: projects_sy_components_src_lib_components__WEBPACK_IMPORTED_MODULE_2__["ProgressIndicatorType"].Percent,
            min: 0,
            max: 100,
            value: 0,
            valueAsText: '0%'
        };
        this.codeScript = "percentExample: ProgressIndicator = {\n    type: ProgressIndicatorType.Percent,\n    min: 0,\n    max: 100,\n    value: 0,\n    valueAsText: '0%'\n  };\n\n  ngOnInit() {\n    this.startPercentage ();\n  }\n\n  private startPercentage (): void {\n    const intervalId = setInterval(\n      (percentExample: ProgressIndicator) => {\n        // Stop interval on completion\n        if (percentExample.value === 100) {\n          clearInterval(intervalId);\n        } else {\n     \n          percentExample.value = percentExample.value + 25;\n          percentExample.valueAsText = `${percentExample.value}%`;\n        }\n      },\n      250,\n      this.percentExample\n    );\n  }\n";
        this.codeExample = "<sy-progress-bar [type]=\"percentExample.type\"\n      [min]=\"percentExample.min\"\n      [max]=\"percentExample.max\"\n      [value]=\"percentExample.value\"\n      [valueAsText]=\"percentExample.valueAsText\">\n    </sy-progress-bar>";
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.startPercentage();
    };
    ProgressBarComponent.prototype.startPercentage = function () {
        var intervalId = setInterval(function (percentExample) {
            // Stop interval on completion
            if (percentExample.value === 100) {
                clearInterval(intervalId);
            }
            else {
                // Update values
                percentExample.value = percentExample.value + 25;
                percentExample.valueAsText = percentExample.value + "%";
            }
        }, 250, this.percentExample);
    };
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/components/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.scss */ "./src/app/components/progress-bar/progress-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/components/required-message/required-message.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/required-message/required-message.component.ts ***!
  \***************************************************************************/
/*! exports provided: RequiredMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredMessageComponent", function() { return RequiredMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequiredMessageComponent = /** @class */ (function () {
    function RequiredMessageComponent() {
        this.message = "Custom message for required component";
        this.codeExample = "<sy-required-message></sy-required-message>";
        this.codeScript1 = "message=\"Custom message for required component\";";
        this.codeExample1 = "<sy-required-message [message]=\"message\"></sy-required-message>";
    }
    RequiredMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-required-message',
            template: "\n  <h2>Reqired Message with default message Example</h2>\n  <sy-required-message></sy-required-message>\n  \n<h4>HTML</h4>\n<pre>\n    <code>{{codeExample}}</code>\n</pre>\n\n  <h2>Reqired Message with customized message Example</h2>\n  <sy-required-message  [message]=\"message\"></sy-required-message>\n\n  <h4>HTML</h4>\n<pre>\n    <code>{{codeExample1}}</code>\n</pre>\n\n<h4>Script(TS)</h4>\n<pre>\n    <code>{{codeScript1}}</code>\n</pre>\n  "
        })
    ], RequiredMessageComponent);
    return RequiredMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/upload/upload.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/upload/upload.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<sy-upload #upload name=\"additional-documentation\" [uploadDeferred]=\"true\" [(ngModel)]=\"files\" (onModelFilesChanges)=\"onModelFilesChanges.next($event)\">\r\n</sy-upload>\r\n\r\n<input placeholder=\"Select File\" accept=\"pdf/*\" (change)=\"selectFile($event)\" type=\"file\" name=\"agencyName\">\r\n\r\n<sy-action-button class=\"action-button\" [action]=\"action\" (click)=\"onSubmitClick()\">\r\n</sy-action-button>"

/***/ }),

/***/ "./src/app/components/upload/upload.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/upload/upload.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "sy-action-button .action-button {\n  font-size: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvQzpcXFVzZXJzXFx5ZXJyYVxcRGVza3RvcFxcYW5ndWxhci1jb21wb25lbnRzXFxzeS1hbmd1bGFyLWNvbXBvbmVudHMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHVwbG9hZFxcdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzeS1hY3Rpb24tYnV0dG9uIHtcclxuICAgIC5hY3Rpb24tYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/upload/upload.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/upload/upload.component.ts ***!
  \*******************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
        this.files = [];
        this.onModelFilesChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('null');
        this.action = {
            name: 'upload',
            label: 'Upload',
            icon: 'upload',
            callback: function () { console.log('click'); }
        };
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.onModelFilesChanges.subscribe(function (x) {
            return console.log(x.target.files, 'event files');
        });
    };
    UploadComponent.prototype.selectFile = function (ev) {
        console.log(ev.target.files, 'input file');
    };
    UploadComponent.prototype.onSubmitClick = function () {
        console.log(this.files, 'files uploading');
        // array of file name streams
        // if (this.files && this.files.length) {
        //   const getS3Urls$ = this.files.map((uf: any) => {
        //     const fn = `fsd/${uf.file.name}`;
        //     return this.s3.getFsdForUpload(fn).map(s3url => {
        //       return { s3url, uf, fn };
        //     });
        //   });
        //   // array of upload streams
        //   const uploadToS3$ = getS3Urls$.map(s3Url$ => {
        //     return s3Url$.flatMap(o => {
        //       const { s3url, uf, fn } = o;
        //       return this.s3.uploadFile(s3url, uf.file).subscribe(res => {
        //         return fn;
        //       });
        //     });
        //   });
        //   }
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/components/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/components/upload/upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/components/video/video.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/video/video.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Video player Example</h2>\r\n<div *ngFor=\"let video of videos\">\r\n    <sy-video-player [videoConfig]=\"video\">\r\n    </sy-video-player>\r\n</div>\r\n<h4>HTML</h4>\r\n<pre>\r\n    <code>{{codeExample}}</code>\r\n</pre>\r\n\r\n<h4>Script(TS)</h4>\r\n<pre>\r\n    <code>{{codeScript}}</code>\r\n</pre>\r\n\r\n<h4>API References</h4>\r\n<pre>\r\n  <code>{{apiRefences}}</code>\r\n</pre>"

/***/ }),

/***/ "./src/app/components/video/video.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/video/video.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/video/video.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayComponent", function() { return VideoPlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoPlayComponent = /** @class */ (function () {
    function VideoPlayComponent() {
        this.videos = [
            {
                poster: '',
                videoUrl: '/assets/DSPInterview-2.mp4',
                captionsUrl: 'Colin DSP Interview',
                title: 'Colin DSP Interview',
                videoId: 'Colin DSP Interview',
                captionOption: false,
                pdfUrl: '',
                // tslint:disable-next-line:max-line-length
                description: 'This video provides'
                // tslint:enable-next-line:max-line-length
            }
        ];
        this.codeScript = "videos: any[] = [\n            {\n                poster: 'https://nilatst.delaware.gov/assets/images/plant-ind-section.jpg',\n                videoUrl: '/assets/DSPInterview-2.mp4',\n                captionsUrl: '',\n                title: 'Single Sign On',\n                videoId: 'singleSignOn',\n                captionOption: false,\n                pdfUrl: 'https://nilatst.delaware.gov/assets/videos/1-Single_Sign_On.pdf',\n                description: 'The right time and for the right reasons. '\n              },\n           ];";
        this.codeExample = "<div *ngFor=\"let video of videos\">\n          <sy-video-player [videoConfig]=\"video\"></sy-video-player>\n      </div>";
        this.apiRefences = "\n          Data Source to export\n          @Input() videoConfig: VideoConfig\n\n          VideoConfig {\n            poster: string;\n            videoUrl: string;\n            captionsUrl: string;\n            title: string;\n            videoId: string;\n            captionOption: boolean;\n            seekInterval: number;\n            videoTitle: string;\n            description: string;\n            pdfurl: string;\n          }\n\n          ";
    }
    VideoPlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/components/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./src/app/components/video/video.component.scss")]
        })
    ], VideoPlayComponent);
    return VideoPlayComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yerra\Desktop\angular-components\sy-angular-components\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map