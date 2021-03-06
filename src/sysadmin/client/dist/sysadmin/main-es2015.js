(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XE+":
/*!*****************************************!*\
  !*** ./src/app/alerts/alert.service.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-type */ "ZcUV");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "J7PR");




class AlertService {
    constructor() {
        this.active = [];
    }
    show(message, type = _alert_type__WEBPACK_IMPORTED_MODULE_1__["AlertType"].info) {
        let alert = new _alert__WEBPACK_IMPORTED_MODULE_2__["Alert"](message, type);
        this.active.push(alert);
        setTimeout(() => this.active.shift(), 2000);
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "/yrG":
/*!************************************************************************!*\
  !*** ./src/app/http-interceptors/with-credentials-http-interceptor.ts ***!
  \************************************************************************/
/*! exports provided: WithCredentialsHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithCredentialsHttpInterceptor", function() { return WithCredentialsHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WithCredentialsHttpInterceptor {
    intercept(request, next) {
        let requestWithCredentials = request.clone({
            withCredentials: true
        });
        return next.handle(requestWithCredentials);
    }
}
WithCredentialsHttpInterceptor.ɵfac = function WithCredentialsHttpInterceptor_Factory(t) { return new (t || WithCredentialsHttpInterceptor)(); };
WithCredentialsHttpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WithCredentialsHttpInterceptor, factory: WithCredentialsHttpInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithCredentialsHttpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\senkyr\OneDrive - Střední průmyslová škola, Trutnov, Školní 101\Archive\SPS\projekty\2019-20\2019p2\trida-4ep\projekt-4ep\src\sysadmin\client\src\main.ts */"zUnb");


/***/ }),

/***/ "14tG":
/*!*******************************************!*\
  !*** ./src/app/app-initialize.service.ts ***!
  \*******************************************/
/*! exports provided: AppInitializeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitializeService", function() { return AppInitializeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/users/user.service */ "AE6H");
/* harmony import */ var _core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/sign-in/sign-in.service */ "1Td7");





class AppInitializeService {
    constructor(userService, signInService) {
        this.userService = userService;
        this.signInService = signInService;
    }
    intialize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user = yield this.userService.getSignedIn().toPromise();
            if (user !== null)
                this.signInService.signIn(user);
        });
    }
}
AppInitializeService.ɵfac = function AppInitializeService_Factory(t) { return new (t || AppInitializeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"])); };
AppInitializeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppInitializeService, factory: AppInitializeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppInitializeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"] }]; }, null); })();


/***/ }),

/***/ "1Td7":
/*!*************************************************!*\
  !*** ./src/app/core/sign-in/sign-in.service.ts ***!
  \*************************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SignInService {
    constructor() {
        this.signedUserChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._signedUser = null;
    }
    get signedUser() {
        return this._signedUser;
    }
    signIn(user) {
        this._signedUser = user;
        this.signedUserChanged.emit();
    }
    signOut() {
        this._signedUser = null;
        this.signedUserChanged.emit();
    }
}
SignInService.ɵfac = function SignInService_Factory(t) { return new (t || SignInService)(); };
SignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignInService, factory: SignInService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "20UA":
/*!*********************************!*\
  !*** ./src/app/core/api/api.ts ***!
  \*********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Url of api root.");


/***/ }),

/***/ "3l7y":
/*!************************************************************************!*\
  !*** ./src/app/pages/app/main-navigation/main-navigation.component.ts ***!
  \************************************************************************/
/*! exports provided: SIGN_OUT_URL, USER_MODULE_URL, LIBRARIAN_MODULE_URL, MainNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_URL", function() { return SIGN_OUT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_MODULE_URL", function() { return USER_MODULE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIBRARIAN_MODULE_URL", function() { return LIBRARIAN_MODULE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigationComponent", function() { return MainNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/sign-in/sign-in.service */ "1Td7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MainNavigationComponent_ng_container_3_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Knihovn\u00EDk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.librarianModuleUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MainNavigationComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " U\u017Eivatel\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " U\u017Eivatel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainNavigationComponent_ng_container_3_a_11_Template, 3, 1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavigationComponent_ng_container_3_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Odhl\u00E1sit se ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.userModuleUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signedUser.isLibrarian);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.signedUser.userName, " ");
} }
const SIGN_OUT_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Sign out page url.");
const USER_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("User module root page url.");
const LIBRARIAN_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Librarian module root page url.");
class MainNavigationComponent {
    constructor(signInService, signOutUrl, userModuleUrl, librarianModuleUrl, location) {
        this.signInService = signInService;
        this.signOutUrl = signOutUrl;
        this.userModuleUrl = userModuleUrl;
        this.librarianModuleUrl = librarianModuleUrl;
        this.location = location;
    }
    get signedUser() {
        return this.signInService.signedUser;
    }
    signOut() {
        this.signInService.signOut();
        window.location.href = this.signOutUrl + "?redirectUrl=" + this.userModuleUrl;
    }
}
MainNavigationComponent.ɵfac = function MainNavigationComponent_Factory(t) { return new (t || MainNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SIGN_OUT_URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](USER_MODULE_URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LIBRARIAN_MODULE_URL), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
MainNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavigationComponent, selectors: [["app-main-navigation"]], decls: 4, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/", 1, "navbar-brand"], [4, "ngIf"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], ["routerLink", "/users", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "fas", "fa-user-friends"], [1, "nav-item", "nav-link", 3, "href"], [1, "fas", "fa-book"], ["class", "nav-item nav-link", 3, "href", 4, "ngIf"], [1, "dropdown"], ["role", "button", "id", "userDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle", "nav-item", "nav-link", "active", "text-left", "border-0"], [1, "fas", "fa-user"], ["aria-labelledby", "userDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "dropdown-item", "btn", "btn-link", "pl-3", 3, "click"], [1, "fas", "fa-sign-out-alt", "pr-1"], [1, "fas", "fa-book-medical"]], template: function MainNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Knihovna SP\u0160 Trutnov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainNavigationComponent_ng_container_3_Template, 20, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedUser !== null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9tYWluLW5hdmlnYXRpb24vbWFpbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-navigation',
                templateUrl: './main-navigation.component.html',
                styleUrls: ['./main-navigation.component.scss']
            }]
    }], function () { return [{ type: src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SIGN_OUT_URL]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [USER_MODULE_URL]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [LIBRARIAN_MODULE_URL]
            }] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "5vRF":
/*!********************************************!*\
  !*** ./src/app/pages/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-navigation/main-navigation.component */ "3l7y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-footer/main-footer.component */ "AYlX");
/* harmony import */ var _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../alerts/alert-view/alert-view.component */ "bDBe");






class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "router-outlet-flex-grow-1"], [1, "fixed-top", "p-5", "alert-view-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-alert-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_1__["MainNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_3__["MainFooterComponent"], _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_4__["AlertViewComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.alert-view-container[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hbGVydC12aWV3LWNvbnRhaW5lciB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "7BV3":
/*!************************************************************!*\
  !*** ./src/app/core/users/user-name-already-used-error.ts ***!
  \************************************************************/
/*! exports provided: UserNameAlreadyUsedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameAlreadyUsedError", function() { return UserNameAlreadyUsedError; });
class UserNameAlreadyUsedError extends Error {
}


/***/ }),

/***/ "AE6H":
/*!********************************************!*\
  !*** ./src/app/core/users/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "EKWA");
/* harmony import */ var _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-name-already-used-error */ "7BV3");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/api */ "20UA");
/* harmony import */ var _user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-has-active-borrows-error */ "bid+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");










class UserService {
    constructor(httpClient, apiUrl) {
        this.httpClient = httpClient;
        this.apiUrl = apiUrl;
    }
    getAll(options = {}) {
        let parameters = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, options.idFilter !== undefined && { "id-filter": options.idFilter.toString() }), options.userNameFilter !== undefined && { "user-name-filter": options.userNameFilter }), options.firstNameFilter !== undefined && { "first-name-filter": options.firstNameFilter }), options.lastNameFilter !== undefined && { "last-name-filter": options.lastNameFilter }), options.emailFilter !== undefined && { "email-filter": options.emailFilter }), options.isLibrarianFilter !== undefined && { "is-librarian-filter": options.isLibrarianFilter.toString() }), options.isAdministratorFilter !== undefined && { "is-administrator-filter": options.isAdministratorFilter.toString() });
        return this.httpClient.get(`${this.apiUrl}/users/index.php`, { params: parameters }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => u.map(u => new _user__WEBPACK_IMPORTED_MODULE_4__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator))));
    }
    getById(id) {
        return this.httpClient.get(`${this.apiUrl}/users/index.php?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => new _user__WEBPACK_IMPORTED_MODULE_4__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    getSignedIn() {
        return this.httpClient.get(`${this.apiUrl}/users/index.php?id=`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => e.status === 401 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => u === null ? null : new _user__WEBPACK_IMPORTED_MODULE_4__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    add(user, password) {
        let { id } = user, withoutId = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(user, ["id"]);
        let withPassword = Object.assign(Object.assign({}, withoutId), { password });
        return this.httpClient.post(`${this.apiUrl}/users/index.php`, withPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_5__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => new _user__WEBPACK_IMPORTED_MODULE_4__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    update(user, password) {
        let userData = password === undefined ? user : Object.assign(Object.assign({}, user), { password });
        return this.httpClient.put(`${this.apiUrl}/users/index.php?id=${user.id}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_5__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(u => new _user__WEBPACK_IMPORTED_MODULE_4__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    remove(user) {
        return this.httpClient.delete(`${this.apiUrl}/users/index.php?id=${user.id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new _user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_7__["UserHasActiveBorrowsError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e)));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_api__WEBPACK_IMPORTED_MODULE_6__["API_URL"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_api_api__WEBPACK_IMPORTED_MODULE_6__["API_URL"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AYlX":
/*!****************************************************************!*\
  !*** ./src/app/pages/app/main-footer/main-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MainFooterComponent {
}
MainFooterComponent.ɵfac = function MainFooterComponent_Factory(t) { return new (t || MainFooterComponent)(); };
MainFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainFooterComponent, selectors: [["app-main-footer"]], decls: 5, vars: 0, consts: [[1, "p-1", "pr-2", "text-muted", "text-right", "text-sm"], ["href", "https://www.spstrutnov.cz", "target", "_blank"]], template: function MainFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Administrace knihovny ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SP\u0160 Trutnov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9tYWluLWZvb3Rlci9tYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-footer',
                templateUrl: './main-footer.component.html',
                styleUrls: ['./main-footer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Ag98":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_users_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/users/user */ "EKWA");
/* harmony import */ var _user_view_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-view-model */ "mt7z");
/* harmony import */ var src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/alerts/alert-type */ "ZcUV");
/* harmony import */ var src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/users/user-name-already-used-error */ "7BV3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_users_user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/users/user-has-active-borrows-error */ "bid+");
/* harmony import */ var src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/users/user.service */ "AE6H");
/* harmony import */ var src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/alerts/alert.service */ "+XE+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













function UsersComponent_tr_44_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r4.original.id);
} }
function UsersComponent_tr_44_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
} }
function UsersComponent_tr_44_i_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_tr_44_i_26_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.remove(user_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UsersComponent_tr_44_ng_container_2_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, UsersComponent_tr_44_i_3_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; return user_r4.newUserName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; return user_r4.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; return user_r4.newFirstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; return user_r4.newLastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; return user_r4.newEmail = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; return user_r4.newIsLibrarian = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UsersComponent_tr_44_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; return user_r4.newIsAdministrator = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.save(user_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Ulo\u017Eit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_tr_44_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const user_r4 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.discard(user_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Zahodit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, UsersComponent_tr_44_i_26_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("table-warning", (user_r4.isChanged || user_r4.original === null) && user_r4 !== ctx_r0.newUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r4.original !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r4.original === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", !user_r4.isUserNameValid && user_r4 !== ctx_r0.newUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", user_r4.newUserName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", !user_r4.isPasswordValid && user_r4 !== ctx_r0.newUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", user_r4.original === null ? "Nevypln\u011Bno" : "Nezm\u011Bn\u011Bno")("ngModel", user_r4.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", user_r4.newFirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", user_r4.newLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", !user_r4.isEmailValid && user_r4 !== ctx_r0.newUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", user_r4.newEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", user_r4.newIsLibrarian);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", user_r4.newIsAdministrator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", !user_r4.isChanged && user_r4.original !== null || user_r4 === ctx_r0.newUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !user_r4.isValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", !user_r4.isChanged && user_r4.original !== null || user_r4 === ctx_r0.newUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r4.original !== null);
} }
function UsersComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Na\u010D\u00EDt\u00E1n\u00ED...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Datab\u00E1ze neobsahuje \u017E\u00E1dn\u00E9 z\u00E1znamy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Podle zadan\u00FDch krit\u00E9ri\u00ED nebyly nalezeny \u017E\u00E1dn\u00E9 z\u00E1znamy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UsersComponent {
    constructor(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]("", this.idFilterValidator),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            isLibrarian: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](false),
            isAdministrator: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](false)
        });
        this.filterForm.valueChanges.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.users = undefined;
            yield this.refreshUsers();
            if (!this.isFiltred)
                this.addNewUser();
        }));
    }
    get hasChanges() {
        return this.users !== undefined && this.users.some(u => (u.isChanged || u.original === null) && u !== this.newUser);
    }
    get isAllValid() {
        return this.users === undefined || this.users.every(u => u.isValid || u === this.newUser);
    }
    get isFiltred() {
        return this.filterForm.get("id").value != "" || this.filterForm.get("userName").value != "" || this.filterForm.get("firstName").value != "" ||
            this.filterForm.get("lastName").value != "" || this.filterForm.get("email").value != "" || this.filterForm.get("isLibrarian").value != false ||
            this.filterForm.get("isAdministrator").value != false;
    }
    get isIdFilterValid() {
        return !this.filterForm.get("id").invalid;
    }
    get changesText() {
        if (this.users === undefined)
            return "";
        let changesCount = this.users
            .filter(u => u.isChanged)
            .length;
        if (changesCount === 0)
            return "";
        else if (changesCount === 1)
            return `${changesCount} změna.`;
        else if (changesCount > 1 && changesCount < 5)
            return `${changesCount} změny.`;
        else
            return `${changesCount} změn.`;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.refreshUsers();
            this.addNewUser();
        });
    }
    ngDoCheck() {
        if (this.newUser != undefined && this.newUser.isChanged)
            this.addNewUser();
        if (this.hasChanges)
            this.filterForm.disable({ emitEvent: false });
        else
            this.filterForm.enable({ emitEvent: false });
    }
    refreshUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let idFilterControl = this.filterForm.get("id");
            let idFilter = idFilterControl.value;
            let userNameFilter = this.filterForm.get("userName").value;
            let firstNameFilter = this.filterForm.get("firstName").value;
            let lastNameFilter = this.filterForm.get("lastName").value;
            let emailFilter = this.filterForm.get("email").value;
            let isLibrarianFilter = this.filterForm.get("isLibrarian").value;
            let isAdministratorFilter = this.filterForm.get("isAdministrator").value;
            let options = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, idFilter !== "" && !idFilterControl.invalid && { idFilter: parseInt(idFilter) }), userNameFilter !== "" && { userNameFilter }), firstNameFilter !== "" && { firstNameFilter }), lastNameFilter !== "" && { lastNameFilter }), emailFilter !== "" && { emailFilter }), isLibrarianFilter !== false && { isLibrarianFilter }), isAdministratorFilter !== false && { isAdministratorFilter });
            this.users = (yield this.userService.getAll(options).toPromise())
                .map(u => new _user_view_model__WEBPACK_IMPORTED_MODULE_3__["UserViewModel"](u, u.userName, "", u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator));
        });
    }
    addNewUser() {
        this.newUser = new _user_view_model__WEBPACK_IMPORTED_MODULE_3__["UserViewModel"](null, "", "", "", "", "", false, false);
        this.users.unshift(this.newUser);
    }
    save(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let newUser;
            if (user.original != null) {
                let u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_2__["User"](user.original.id, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                let newPassword = user.newPassword === "" ? undefined : user.newPassword;
                try {
                    newUser = yield this.userService.update(u, newPassword).toPromise();
                }
                catch (e) {
                    if (e instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_5__["UserNameAlreadyUsedError"]) {
                        this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_4__["AlertType"].error);
                        return;
                    }
                    throw e;
                }
            }
            else {
                let u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_2__["User"](0, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                try {
                    newUser = yield this.userService.add(u, user.newPassword).toPromise();
                }
                catch (e) {
                    if (e instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_5__["UserNameAlreadyUsedError"]) {
                        this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_4__["AlertType"].error);
                        return;
                    }
                    throw e;
                }
            }
            user.original = newUser;
            user.resetToOriginal();
        });
    }
    discard(user) {
        if (user.original == null)
            this.users.splice(this.users.indexOf(user), 1);
        else
            user.resetToOriginal();
    }
    remove(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.userService.remove(user.original).toPromise();
                this.users.splice(this.users.indexOf(user), 1);
            }
            catch (e) {
                if (e instanceof src_app_core_users_user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_7__["UserHasActiveBorrowsError"]) {
                    this.alertService.show("Nelze smazat uživatele s aktivními výpůjčkami.", src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_4__["AlertType"].error);
                    return;
                }
                throw e;
            }
        });
    }
    saveAll() {
        this.users
            .filter(u => u.isChanged)
            .forEach(u => this.save(u));
    }
    discardAll() {
        this.users
            .filter(u => u.isChanged || u.original === null && u !== this.newUser)
            .forEach(u => this.discard(u));
    }
    idFilterValidator(control) {
        if (/^(0|(-?[1-9][0-9]*)|)$/.test(control.value))
            return null;
        else
            return { invalidId: true };
    }
    import() {
        let kontrola = 0;
        let validniRadky = [];
        let element = document.createElement("input");
        element.type = "file";
        element.addEventListener("change", () => {
            let file = element.files[0];
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = () => {
                let soubor = reader.result;
                let radky = soubor.split(/\r\n?|\n/);
                for (let i = 0; i < radky.length; i++) {
                    let atributyUsera = radky[i].split(",");
                    if (atributyUsera.length != 7 || (atributyUsera[5] != "true" && atributyUsera[5] != "false") || (atributyUsera[6] != "true" && atributyUsera[6] != "false")) {
                        this.alertService.show("Chyba na řádku " + (i + 1), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_4__["AlertType"].error);
                        kontrola++;
                    }
                    else {
                        validniRadky.push(atributyUsera);
                    }
                }
                if (kontrola == 0) {
                    for (let i = 0; i < radky.length; i++) {
                        let validniRadek = validniRadky.pop();
                        let uzivatel = new _user_view_model__WEBPACK_IMPORTED_MODULE_3__["UserViewModel"](null, validniRadek[0], validniRadek[1], validniRadek[2], validniRadek[3], validniRadek[4], validniRadek[5] === "true", validniRadek[6] === "true");
                        this.users.unshift(uzivatel);
                    }
                }
            };
        });
        element.click();
    }
    export() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let soubor = "";
            let uzivatele = yield this.userService.getAll().toPromise();
            for (let i = 0; i < uzivatele.length; i++) {
                let uzivatel = uzivatele[i];
                if (i != 0)
                    soubor += "\n";
                soubor += uzivatel.userName;
                soubor += ",";
                soubor += uzivatel.firstName;
                soubor += ",";
                soubor += uzivatel.lastName;
                soubor += ",";
                soubor += uzivatel.email;
                soubor += ",";
                soubor += uzivatel.isLibrarian;
                soubor += ",";
                soubor += uzivatel.isAdministrator;
            }
            this.downloadBlob("Sysadmin - export uživatelů.txt", new Blob([soubor]));
        });
    }
    downloadBlob(fileName, blob) {
        let url = URL.createObjectURL(blob);
        let linkElement = document.createElement("a");
        linkElement.download = fileName;
        linkElement.href = url;
        linkElement.click();
        URL.revokeObjectURL(url);
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 48, vars: 13, consts: [[1, "d-flex", "align-items-center"], [1, "m-4", "flex-grow-1"], [1, "btn", "btn-secondary", "m-1", 3, "click"], [1, "btn", "btn-secondary", "m-1", "mr-4", 3, "click"], [1, "table", "table-striped", "table-hover"], [3, "formGroup"], [1, "sticky-top", "bg-white", "table-column-id"], ["type", "text", "formControlName", "id", 1, "form-control", "form-control-sm"], [1, "table-column-fill", "sticky-top", "bg-white"], ["type", "text", "formControlName", "userName", 1, "form-control", "form-control-sm"], [1, "table-column-fill", "sticky-top", "bg-white", "align-top"], ["type", "text", "formControlName", "firstName", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "lastName", 1, "form-control", "form-control-sm"], ["type", "text", "formControlName", "email", 1, "form-control", "form-control-sm"], [1, "sticky-top", "bg-white"], [1, "form-check", "text-center"], ["type", "checkbox", "formControlName", "isLibrarian", 1, "form-check-input", "position-static", 2, "width", "18px", "height", "19px", "cursor", "pointer"], ["type", "checkbox", "formControlName", "isAdministrator", 1, "form-check-input", "position-static", 2, "width", "18px", "height", "19px", "cursor", "pointer"], [1, "sticky-top", "bg-white", "text-nowrap"], [1, "text-muted", "font-weight-normal", "text-center", "d-block", "pb-1"], [1, "btn", "btn-sm", "btn-success", "mr-1", 3, "disabled", "click"], [1, "btn", "btn-sm", "btn-danger", "ml-1", 3, "click"], [3, "table-warning", 4, "ngFor", "ngForOf"], ["class", "flex-grow-1 d-flex justify-content-center align-items-center", 4, "ngIf"], [1, "table-column-id", "align-middle"], [4, "ngIf"], ["class", "fas fa-plus", 4, "ngIf"], [1, "table-column-fill"], ["placeholder", "Nevypln\u011Bno", "type", "text", 1, "form-control", "form-control-sm", "editable-cell", 3, "ngModel", "ngModelChange"], ["type", "password", 1, "form-control", "form-control-sm", "editable-cell", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "checkbox", 1, "form-check-input", "position-static", 2, "width", "18px", "height", "19px", "cursor", "pointer", 3, "ngModel", "ngModelChange"], [1, "pr-0", "text-nowrap"], ["class", "fas fa-trash fa-2x cursor-pointer text-muted", "style", "font-size: 1.5em", 3, "click", 4, "ngIf"], [1, "fas", "fa-plus"], [1, "fas", "fa-trash", "fa-2x", "cursor-pointer", "text-muted", 2, "font-size", "1.5em", 3, "click"], [1, "flex-grow-1", "d-flex", "justify-content-center", "align-items-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "text-muted"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "U\u017Eivatel\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_3_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Exportovat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_5_listener() { return ctx.import(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Importovat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " U\u017Eivatelsk\u00E9 jm\u00E9no ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Heslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Jm\u00E9no ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " P\u0159\u00EDjmen\u00ED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Knihovn\u00EDk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Administr\u00E1tor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_38_listener() { return ctx.saveAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Ulo\u017Eit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_40_listener() { return ctx.discardAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Zahodit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, UsersComponent_tr_44_Template, 27, 24, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, UsersComponent_div_45_Template, 4, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, UsersComponent_div_46_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, UsersComponent_div_47_Template, 3, 0, "div", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.filterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", !ctx.isIdFilterValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.changesText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", !ctx.hasChanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isAllValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("invisible", !ctx.hasChanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users !== undefined && ctx.users.length === 1 && !ctx.isFiltred);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users !== undefined && ctx.users.length === 0 && ctx.isFiltred);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.editable-cell[_ngcontent-%COMP%] {\n  background: initial;\n  border: none;\n  box-shadow: none !important;\n}\n\n.editable-cell.is-invalid[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid[_ngcontent-%COMP%]::placeholder {\n  color: #dc3545;\n}\n\n.table-column-fill[_ngcontent-%COMP%] {\n  width: calc(100% / 5);\n}\n\n.table-column-id[_ngcontent-%COMP%] {\n  min-width: 70px;\n}\n\n.cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.text-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRkE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmVkaXRhYmxlLWNlbGwge1xuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xufVxuXG4uZWRpdGFibGUtY2VsbC5pcy1pbnZhbGlkIHtcbiAgICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLmVkaXRhYmxlLWNlbGwuaXMtaW52YWxpZDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xufVxuXG4udGFibGUtY29sdW1uLWZpbGwge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbn1cblxuLnRhYmxlLWNvbHVtbi1pZCB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "EKWA":
/*!************************************!*\
  !*** ./src/app/core/users/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(id, userName, firstName, lastName, email, isLibrarian, isAdministrator) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.isLibrarian = isLibrarian;
        this.isAdministrator = isAdministrator;
    }
}


/***/ }),

/***/ "J7PR":
/*!*********************************!*\
  !*** ./src/app/alerts/alert.ts ***!
  \*********************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
class Alert {
    constructor(message, type) {
        this.message = message;
        this.type = type;
    }
}


/***/ }),

/***/ "W0X1":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/users/users.component */ "Ag98");
/* harmony import */ var _can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./can-activates/signed-in-can-activate */ "ouvD");






const routes = [
    { path: "users", component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], canActivate: [_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_3__["SignedInCanActivate"]] },
    { path: "**", redirectTo: "users" }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createAppInitializer, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAppInitializer", function() { return createAppInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/app-routing.module */ "W0X1");
/* harmony import */ var _pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/app/app.component */ "5vRF");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/users/users.component */ "Ag98");
/* harmony import */ var _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/app/main-navigation/main-navigation.component */ "3l7y");
/* harmony import */ var _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alerts/alert-view/alert-view.component */ "bDBe");
/* harmony import */ var _core_api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/api/api */ "20UA");
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/confirm-dialog/confirm-dialog.component */ "mXJ6");
/* harmony import */ var _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/app/main-footer/main-footer.component */ "AYlX");
/* harmony import */ var _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routing/can-activates/signed-in-can-activate */ "ouvD");
/* harmony import */ var _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http-interceptors/with-credentials-http-interceptor */ "/yrG");
/* harmony import */ var _app_initialize_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-initialize.service */ "14tG");


















function createAppInitializer(appInitializeService) {
    return () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield appInitializeService.intialize(); });
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__["WithCredentialsHttpInterceptor"],
            multi: true
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["APP_INITIALIZER"],
            useFactory: createAppInitializer,
            deps: [_app_initialize_service__WEBPACK_IMPORTED_MODULE_15__["AppInitializeService"]],
            multi: true
        },
        {
            provide: _core_api_api__WEBPACK_IMPORTED_MODULE_10__["API_URL"],
            useValue: "/knihovna/sysadmin/api"
        },
        {
            provide: _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__["SIGN_IN_URL"],
            useValue: "/knihovna/authentication/signIn.php"
        },
        {
            provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["SIGN_OUT_URL"],
            useValue: "/knihovna/authentication/signOut.php"
        },
        {
            provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["USER_MODULE_URL"],
            useValue: "/knihovna/uzivatel"
        },
        {
            provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["LIBRARIAN_MODULE_URL"],
            useValue: "/knihovna/knihovnik"
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
        _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["MainNavigationComponent"],
        _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__["AlertViewComponent"],
        _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
        _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__["MainFooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [
                    _pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                    _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["MainNavigationComponent"],
                    _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__["AlertViewComponent"],
                    _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
                    _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__["MainFooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__["WithCredentialsHttpInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["APP_INITIALIZER"],
                        useFactory: createAppInitializer,
                        deps: [_app_initialize_service__WEBPACK_IMPORTED_MODULE_15__["AppInitializeService"]],
                        multi: true
                    },
                    {
                        provide: _core_api_api__WEBPACK_IMPORTED_MODULE_10__["API_URL"],
                        useValue: "/knihovna/sysadmin/api"
                    },
                    {
                        provide: _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__["SIGN_IN_URL"],
                        useValue: "/knihovna/authentication/signIn.php"
                    },
                    {
                        provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["SIGN_OUT_URL"],
                        useValue: "/knihovna/authentication/signOut.php"
                    },
                    {
                        provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["USER_MODULE_URL"],
                        useValue: "/knihovna/uzivatel"
                    },
                    {
                        provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["LIBRARIAN_MODULE_URL"],
                        useValue: "/knihovna/knihovnik"
                    }
                ],
                entryComponents: [
                    _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"]
                ],
                bootstrap: [_pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZcUV":
/*!**************************************!*\
  !*** ./src/app/alerts/alert-type.ts ***!
  \**************************************/
/*! exports provided: AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["info"] = 0] = "info";
    AlertType[AlertType["warning"] = 1] = "warning";
    AlertType[AlertType["error"] = 2] = "error";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "bDBe":
/*!***********************************************************!*\
  !*** ./src/app/alerts/alert-view/alert-view.component.ts ***!
  \***********************************************************/
/*! exports provided: AlertViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertViewComponent", function() { return AlertViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alert_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alert-type */ "ZcUV");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert.service */ "+XE+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AlertViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("m-1 shadow-sm alert " + ctx_r0.getAlertClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r1.message, "\n");
} }
class AlertViewComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    get activeAlerts() {
        return this.alertService.active;
    }
    getAlertClass(alert) {
        switch (alert.type) {
            case _alert_type__WEBPACK_IMPORTED_MODULE_1__["AlertType"].warning:
                return "alert-warning";
            case _alert_type__WEBPACK_IMPORTED_MODULE_1__["AlertType"].error:
                return "alert-danger";
            default:
                return "alert-info";
        }
    }
}
AlertViewComponent.ɵfac = function AlertViewComponent_Factory(t) { return new (t || AlertViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
AlertViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertViewComponent, selectors: [["app-alert-view"]], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"]], template: function AlertViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertViewComponent_div_0_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activeAlerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0cy9hbGVydC12aWV3L2FsZXJ0LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert-view',
                templateUrl: './alert-view.component.html',
                styleUrls: ['./alert-view.component.scss']
            }]
    }], function () { return [{ type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "bid+":
/*!*************************************************************!*\
  !*** ./src/app/core/users/user-has-active-borrows-error.ts ***!
  \*************************************************************/
/*! exports provided: UserHasActiveBorrowsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHasActiveBorrowsError", function() { return UserHasActiveBorrowsError; });
class UserHasActiveBorrowsError extends Error {
}


/***/ }),

/***/ "mXJ6":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["modal"];
class ConfirmDialogComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.confirmed = false;
    }
    ngAfterViewInit() {
        // @ts-ignore
        let modalElement = $(this.modal.nativeElement);
        modalElement.modal({});
        modalElement.on("hidden.bs.modal", () => this.close.emit(this.confirmed));
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], viewQuery: function ConfirmDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, inputs: { title: "title", message: "message" }, outputs: { close: "close" }, decls: 17, vars: 2, consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["modal", ""], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-danger"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_15_listener() { return ctx.confirmed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.scss']
            }]
    }], null, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modal", { static: true }]
        }] }); })();


/***/ }),

/***/ "mt7z":
/*!************************************************!*\
  !*** ./src/app/pages/users/user-view-model.ts ***!
  \************************************************/
/*! exports provided: UserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
class UserViewModel {
    constructor(original, newUserName, newPassword, newFirstName, newLastName, newEmail, newIsLibrarian, newIsAdministrator) {
        this.original = original;
        this.newUserName = newUserName;
        this.newPassword = newPassword;
        this.newFirstName = newFirstName;
        this.newLastName = newLastName;
        this.newEmail = newEmail;
        this.newIsLibrarian = newIsLibrarian;
        this.newIsAdministrator = newIsAdministrator;
    }
    get isChanged() {
        if (this.original == null) {
            return this.newUserName !== "" || this.newPassword !== "" || this.newFirstName !== "" || this.newLastName !== "" || this.newEmail !== "" ||
                this.newIsLibrarian !== false || this.newIsAdministrator !== false;
        }
        else {
            return this.newUserName !== this.original.userName || this.newPassword !== "" || this.newFirstName !== this.original.firstName ||
                this.newLastName !== this.original.lastName || this.newEmail !== this.original.email || this.newIsLibrarian !== this.original.isLibrarian ||
                this.newIsAdministrator !== this.original.isAdministrator;
        }
    }
    get isUserNameValid() {
        return this.newUserName.length > 0;
    }
    get isPasswordValid() {
        return this.newPassword.length >= 8 || (this.original !== null && this.newPassword === "");
    }
    get isEmailValid() {
        return this.newEmail === "" || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(this.newEmail);
    }
    get isValid() {
        return this.isUserNameValid && this.isPasswordValid && this.isEmailValid;
    }
    resetToOriginal() {
        if (this.original !== null) {
            this.newUserName = this.original.userName;
            this.newPassword = "";
            this.newFirstName = this.original.firstName;
            this.newLastName = this.original.lastName;
            this.newEmail = this.original.email;
            this.newIsLibrarian = this.original.isLibrarian;
            this.newIsAdministrator = this.original.isAdministrator;
        }
        else {
            this.newUserName = "";
            this.newPassword = "";
            this.newFirstName = "";
            this.newLastName = "";
            this.newEmail = "";
            this.newIsLibrarian = false;
            this.newIsAdministrator = false;
        }
    }
}


/***/ }),

/***/ "ouvD":
/*!*****************************************************************!*\
  !*** ./src/app/routing/can-activates/signed-in-can-activate.ts ***!
  \*****************************************************************/
/*! exports provided: SIGN_IN_URL, SignedInCanActivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_URL", function() { return SIGN_IN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedInCanActivate", function() { return SignedInCanActivate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/sign-in/sign-in.service */ "1Td7");



const SIGN_IN_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Sign in page url.");
class SignedInCanActivate {
    constructor(signInService, signInUrl) {
        this.signInService = signInService;
        this.signInUrl = signInUrl;
    }
    canActivate(route, state) {
        let signedIn = this.signInService.signedUser !== null;
        if (!signedIn)
            window.location.href = this.signInUrl + "?redirectUrl=" + window.location.href;
        return signedIn;
    }
}
SignedInCanActivate.ɵfac = function SignedInCanActivate_Factory(t) { return new (t || SignedInCanActivate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SIGN_IN_URL)); };
SignedInCanActivate.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SignedInCanActivate, factory: SignedInCanActivate.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignedInCanActivate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_1__["SignInService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SIGN_IN_URL]
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map