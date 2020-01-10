(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alert-view/alert-view.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alert-view/alert-view.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of activeAlerts\" [class]=\"'m-1 shadow-sm alert ' + getAlertClass(alert)\">\n    {{alert.message}}\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #modal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{title}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">{{message}}</div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Ne</button>\n                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"confirmed = true\">Ano</button>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/app.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/app.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-navigation></app-main-navigation>\n<router-outlet class=\"router-outlet-flex-grow-1\"></router-outlet>\n<app-main-footer></app-main-footer>\n    \n<div class=\"fixed-top p-5 alert-view-container\">\n    <app-alert-view></app-alert-view>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-footer/main-footer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-footer/main-footer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-1 pr-2 text-muted text-right text-sm\">\n    <small>\n        Administrace knihovny\n        <a href=\"https://www.spstrutnov.cz\" target=\"_blank\">SPŠ Trutnov</a>\n    </small>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-navigation/main-navigation.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-navigation/main-navigation.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Knihovna SPŠ Trutnov</a>\n    <ng-container *ngIf=\"signedUser !== null\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n            aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n            <div class=\"navbar-nav\">\n                <a class=\"nav-item nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">\n                    <i class=\"fas fa-user-friends\"></i>\n                    Uživatelé\n                </a>\n                <a class=\"nav-item nav-link\" href=\"{{userModuleUrl}}\">\n                    <i class=\"fas fa-book\"></i>\n                    Uživatel\n                </a>\n                <a *ngIf=\"signedUser.isLibrarian\" class=\"nav-item nav-link\" href=\"{{librarianModuleUrl}}\">\n                    <i class=\"fas fa-book-medical\"></i>\n                    Knihovník\n                </a>\n                <div class=\"dropdown\">\n                    <button class=\"btn btn-link dropdown-toggle nav-item nav-link active text-left border-0\"\n                        role=\"button\" id=\"userDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                        aria-expanded=\"false\">\n                        <i class=\"fas fa-user\"></i>\n                        {{signedUser.userName}}\n                    </button>\n\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdownMenuLink\">\n                        <a class=\"dropdown-item btn btn-link pl-3\" (click)=\"signOut()\">\n                            <i class=\"fas fa-sign-out-alt pr-1\"></i>\n                            Odhlásit se\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex align-items-center\">\n    <h2 class=\"m-4 flex-grow-1\">Uživatelé</h2>\n    <button class=\"btn btn-secondary m-1\" (click)=\"export()\">Exportovat</button>\n    <button class=\"btn btn-secondary m-1 mr-4\"(click)=\"import()\">Importovat</button>\n</div>\n<table class=\"table table-striped table-hover\">\n    <thead>\n        <tr [formGroup]=\"filterForm\">\n            <th class=\"sticky-top bg-white table-column-id\">\n                Id\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"id\" [class.is-invalid]=\"!isIdFilterValid\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Uživatelské jméno\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"userName\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white align-top\">Heslo</th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Jméno\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"firstName\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Příjmení\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"lastName\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Email\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"email\">\n            </th>\n            <th class=\"sticky-top bg-white\">\n                Knihovník\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" formControlName=\"isLibrarian\">\n                </div>\n            </th>\n            <th class=\"sticky-top bg-white\">\n                Administrátor\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" formControlName=\"isAdministrator\">\n                </div>\n            </th>\n            <th class=\"sticky-top bg-white text-nowrap\">\n                <small class=\"text-muted font-weight-normal text-center d-block pb-1\">{{changesText}}</small>\n                <button [class.invisible]=\"!hasChanges\" [disabled]=\"!isAllValid\" class=\"btn btn-sm btn-success mr-1\"\n                    (click)=\"saveAll()\">Uložit</button>\n                <button [class.invisible]=\"!hasChanges\" class=\"btn btn-sm btn-danger ml-1\"\n                    (click)=\"discardAll()\">Zahodit</button>\n            </th>\n            <th class=\"sticky-top bg-white\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of users\"\n            [class.table-warning]=\"(user.isChanged || user.original === null) && user !== newUser\">\n            <td class=\"table-column-id align-middle\">\n                <ng-container *ngIf=\"user.original !== null\">{{user.original.id}}</ng-container>\n                <i *ngIf=\"user.original === null\" class=\"fas fa-plus\"></i>\n            </td>\n            <td class=\"table-column-fill\">\n                <input [class.is-invalid]=\"!user.isUserNameValid && user !== newUser\"\n                    class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newUserName\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input [class.is-invalid]=\"!user.isPasswordValid && user !== newUser\"\n                    class=\"form-control form-control-sm editable-cell\"\n                    [placeholder]=\"user.original === null ? 'Nevyplněno' : 'Nezměněno'\" type=\"password\"\n                    [(ngModel)]=\"user.newPassword\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newFirstName\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newLastName\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input [class.is-invalid]=\"!user.isEmailValid && user !== newUser\"\n                    class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newEmail\">\n            </td>\n            <td>\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" [(ngModel)]=\"user.newIsLibrarian\">\n                </div>\n            </td>\n            <td>\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" [(ngModel)]=\"user.newIsAdministrator\">\n                </div>\n            </td>\n            <td class=\"pr-0 text-nowrap\">\n                <button [class.invisible]=\"!user.isChanged && user.original !== null || user === newUser\"\n                    [disabled]=\"!user.isValid\" class=\"btn btn-sm btn-success mr-1\" (click)=\"save(user)\">Uložit</button>\n                <button [class.invisible]=\"!user.isChanged && user.original !== null || user === newUser\"\n                    class=\"btn btn-sm btn-danger ml-1\" (click)=\"discard(user)\">Zahodit</button>\n            </td>\n            <td>\n                <i *ngIf=\"user.original !== null\" class=\"fas fa-trash fa-2x cursor-pointer text-muted\"\n                    style=\"font-size: 1.5em\" (click)=\"remove(user)\"></i>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div *ngIf=\"users === undefined\" class=\"flex-grow-1 d-flex justify-content-center align-items-center\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Načítání...</span>\n    </div>\n</div>\n<div *ngIf=\"users !== undefined && users.length === 1 && !isFiltred\" class=\"flex-grow-1 d-flex justify-content-center align-items-center\">\n    <span class=\"text-muted\">Databáze neobsahuje žádné záznamy.</span>\n</div>\n<div *ngIf=\"users !== undefined && users.length === 0 && isFiltred\" class=\"flex-grow-1 d-flex justify-content-center align-items-center\">\n    <span class=\"text-muted\">Podle zadaných kritérií nebyly nalezeny žádné záznamy.</span>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/alerts/alert-type.ts":
/*!**************************************!*\
  !*** ./src/app/alerts/alert-type.ts ***!
  \**************************************/
/*! exports provided: AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AlertType;
(function (AlertType) {
    AlertType[AlertType["info"] = 0] = "info";
    AlertType[AlertType["warning"] = 1] = "warning";
    AlertType[AlertType["error"] = 2] = "error";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/alerts/alert-view/alert-view.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/alerts/alert-view/alert-view.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0cy9hbGVydC12aWV3L2FsZXJ0LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/alerts/alert-view/alert-view.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/alerts/alert-view/alert-view.component.ts ***!
  \***********************************************************/
/*! exports provided: AlertViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertViewComponent", function() { return AlertViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert.service */ "./src/app/alerts/alert.service.ts");
/* harmony import */ var _alert_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert-type */ "./src/app/alerts/alert-type.ts");




let AlertViewComponent = class AlertViewComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    get activeAlerts() {
        return this.alertService.active;
    }
    getAlertClass(alert) {
        switch (alert.type) {
            case _alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].warning:
                return "alert-warning";
            case _alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].error:
                return "alert-danger";
            default:
                return "alert-info";
        }
    }
};
AlertViewComponent.ctorParameters = () => [
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AlertViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alert-view/alert-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert-view.component.scss */ "./src/app/alerts/alert-view/alert-view.component.scss")).default]
    })
], AlertViewComponent);



/***/ }),

/***/ "./src/app/alerts/alert.service.ts":
/*!*****************************************!*\
  !*** ./src/app/alerts/alert.service.ts ***!
  \*****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _alert_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-type */ "./src/app/alerts/alert-type.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert */ "./src/app/alerts/alert.ts");




let AlertService = class AlertService {
    constructor() {
        this.active = [];
    }
    show(message, type = _alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].info) {
        let alert = new _alert__WEBPACK_IMPORTED_MODULE_3__["Alert"](message, type);
        this.active.push(alert);
        setTimeout(() => this.active.shift(), 2000);
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/alerts/alert.ts":
/*!*********************************!*\
  !*** ./src/app/alerts/alert.ts ***!
  \*********************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(message, type) {
        this.message = message;
        this.type = type;
    }
}


/***/ }),

/***/ "./src/app/app-initialize.service.ts":
/*!*******************************************!*\
  !*** ./src/app/app-initialize.service.ts ***!
  \*******************************************/
/*! exports provided: AppInitializeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitializeService", function() { return AppInitializeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/users/user.service */ "./src/app/core/users/user.service.ts");
/* harmony import */ var _core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/sign-in/sign-in.service */ "./src/app/core/sign-in/sign-in.service.ts");




let AppInitializeService = class AppInitializeService {
    constructor(userService, signInService) {
        this.userService = userService;
        this.signInService = signInService;
    }
    intialize() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let user = yield this.userService.getSignedIn().toPromise();
            if (user !== null)
                this.signInService.signIn(user);
        });
    }
};
AppInitializeService.ctorParameters = () => [
    { type: _core_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"] }
];
AppInitializeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppInitializeService);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/app/app.component */ "./src/app/pages/app/app.component.ts");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/app/main-navigation/main-navigation.component */ "./src/app/pages/app/main-navigation/main-navigation.component.ts");
/* harmony import */ var _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alerts/alert-view/alert-view.component */ "./src/app/alerts/alert-view/alert-view.component.ts");
/* harmony import */ var _core_api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/api/api */ "./src/app/core/api/api.ts");
/* harmony import */ var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialogs/confirm-dialog/confirm-dialog.component */ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/app/main-footer/main-footer.component */ "./src/app/pages/app/main-footer/main-footer.component.ts");
/* harmony import */ var _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routing/can-activates/signed-in-can-activate */ "./src/app/routing/can-activates/signed-in-can-activate.ts");
/* harmony import */ var _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http-interceptors/with-credentials-http-interceptor */ "./src/app/http-interceptors/with-credentials-http-interceptor.ts");
/* harmony import */ var _app_initialize_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-initialize.service */ "./src/app/app-initialize.service.ts");

















function createAppInitializer(appInitializeService) {
    return () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return yield appInitializeService.intialize(); });
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
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
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/api/api.ts":
/*!*********************************!*\
  !*** ./src/app/core/api/api.ts ***!
  \*********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Url of api root.");


/***/ }),

/***/ "./src/app/core/sign-in/sign-in.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/sign-in/sign-in.service.ts ***!
  \*************************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignInService = class SignInService {
    constructor() {
        this.signedUserChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
};
SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SignInService);



/***/ }),

/***/ "./src/app/core/users/user-name-already-used-error.ts":
/*!************************************************************!*\
  !*** ./src/app/core/users/user-name-already-used-error.ts ***!
  \************************************************************/
/*! exports provided: UserNameAlreadyUsedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameAlreadyUsedError", function() { return UserNameAlreadyUsedError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserNameAlreadyUsedError extends Error {
}


/***/ }),

/***/ "./src/app/core/users/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/core/users/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "./src/app/core/users/user.ts");
/* harmony import */ var _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-name-already-used-error */ "./src/app/core/users/user-name-already-used-error.ts");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/api */ "./src/app/core/api/api.ts");








let UserService = class UserService {
    constructor(httpClient, apiUrl) {
        this.httpClient = httpClient;
        this.apiUrl = apiUrl;
    }
    getAll(options = {}) {
        let parameters = Object.assign({}, options.idFilter !== undefined && { "id-filter": options.idFilter.toString() }, options.userNameFilter !== undefined && { "user-name-filter": options.userNameFilter }, options.firstNameFilter !== undefined && { "first-name-filter": options.firstNameFilter }, options.lastNameFilter !== undefined && { "last-name-filter": options.lastNameFilter }, options.emailFilter !== undefined && { "email-filter": options.emailFilter }, options.isLibrarianFilter !== undefined && { "is-librarian-filter": options.isLibrarianFilter.toString() }, options.isAdministratorFilter !== undefined && { "is-administrator-filter": options.isAdministratorFilter.toString() });
        return this.httpClient.get(`${this.apiUrl}/users/index.php`, { params: parameters }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(u => u.map(u => new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator))));
    }
    getById(id) {
        return this.httpClient.get(`${this.apiUrl}/users/index.php?id=${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(u => new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    getSignedIn() {
        return this.httpClient.get(`${this.apiUrl}/users/index.php?id=`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => e.status === 401 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(u => u === null ? null : new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    add(user, password) {
        let { id } = user, withoutId = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](user, ["id"]);
        let withPassword = Object.assign({}, withoutId, { password });
        return this.httpClient.post(`${this.apiUrl}/users/index.php`, withPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_6__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(u => new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    update(user, password) {
        let userData = password === undefined ? user : Object.assign({}, user, { password });
        return this.httpClient.put(`${this.apiUrl}/users/index.php?id=${user.id}`, userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((e) => e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_6__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(u => new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator)));
    }
    remove(user) {
        return this.httpClient.delete(`${this.apiUrl}/users/index.php?id=${user.id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_api_api__WEBPACK_IMPORTED_MODULE_7__["API_URL"],] }] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_api_api__WEBPACK_IMPORTED_MODULE_7__["API_URL"]))
], UserService);



/***/ }),

/***/ "./src/app/core/users/user.ts":
/*!************************************!*\
  !*** ./src/app/core/users/user.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirmed = false;
    }
    ngAfterViewInit() {
        // @ts-ignore
        let modalElement = $(this.modal.nativeElement);
        modalElement.modal({});
        modalElement.on("hidden.bs.modal", () => this.close.emit(this.confirmed));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmDialogComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmDialogComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ConfirmDialogComponent.prototype, "close", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modal", { static: true })
], ConfirmDialogComponent.prototype, "modal", void 0);
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/dialogs/confirm-dialog/confirm-dialog.component.scss")).default]
    })
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/http-interceptors/with-credentials-http-interceptor.ts":
/*!************************************************************************!*\
  !*** ./src/app/http-interceptors/with-credentials-http-interceptor.ts ***!
  \************************************************************************/
/*! exports provided: WithCredentialsHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithCredentialsHttpInterceptor", function() { return WithCredentialsHttpInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WithCredentialsHttpInterceptor = class WithCredentialsHttpInterceptor {
    intercept(request, next) {
        let requestWithCredentials = request.clone({
            withCredentials: true
        });
        return next.handle(requestWithCredentials);
    }
};
WithCredentialsHttpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WithCredentialsHttpInterceptor);



/***/ }),

/***/ "./src/app/pages/app/app.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/app/app.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.alert-view-container {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwL0M6XFxVc2Vyc1xcc2Vua3lyXFxPbmVEcml2ZVxcU291cmNlXFxwcm9qZWt0eVxcdHJpZGEtNGVwXFxwcm9qZWt0LTRlcFxcc3JjXFxzeXNhZG1pblxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWxlcnQtdmlldy1jb250YWluZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWxlcnQtdmlldy1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/app/app.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/app/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/pages/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/pages/app/main-footer/main-footer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/app/main-footer/main-footer.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9tYWluLWZvb3Rlci9tYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/app/main-footer/main-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/app/main-footer/main-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainFooterComponent = class MainFooterComponent {
};
MainFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-footer/main-footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-footer.component.scss */ "./src/app/pages/app/main-footer/main-footer.component.scss")).default]
    })
], MainFooterComponent);



/***/ }),

/***/ "./src/app/pages/app/main-navigation/main-navigation.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/app/main-navigation/main-navigation.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9tYWluLW5hdmlnYXRpb24vbWFpbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/app/main-navigation/main-navigation.component.ts":
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/sign-in/sign-in.service */ "./src/app/core/sign-in/sign-in.service.ts");



const SIGN_OUT_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Sign out page url.");
const USER_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("User module root page url.");
const LIBRARIAN_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Librarian module root page url.");
let MainNavigationComponent = class MainNavigationComponent {
    constructor(signInService, signOutUrl, userModuleUrl, librarianModuleUrl) {
        this.signInService = signInService;
        this.signOutUrl = signOutUrl;
        this.userModuleUrl = userModuleUrl;
        this.librarianModuleUrl = librarianModuleUrl;
    }
    get signedUser() {
        return this.signInService.signedUser;
    }
    signOut() {
        this.signInService.signOut();
        window.location.href = this.signOutUrl + "?redirectUrl=" + window.location.href;
    }
};
MainNavigationComponent.ctorParameters = () => [
    { type: src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [SIGN_OUT_URL,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [USER_MODULE_URL,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIBRARIAN_MODULE_URL,] }] }
];
MainNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-navigation/main-navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-navigation.component.scss */ "./src/app/pages/app/main-navigation/main-navigation.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SIGN_OUT_URL)),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(USER_MODULE_URL)), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LIBRARIAN_MODULE_URL))
], MainNavigationComponent);



/***/ }),

/***/ "./src/app/pages/users/user-view-model.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/user-view-model.ts ***!
  \************************************************/
/*! exports provided: UserViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModel", function() { return UserViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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

/***/ "./src/app/pages/users/users.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/users/users.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-direction: column;\n}\n\n.editable-cell {\n  background: initial;\n  border: none;\n  box-shadow: none !important;\n}\n\n.editable-cell.is-invalid {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::-webkit-input-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::-moz-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::-ms-input-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::placeholder {\n  color: #dc3545;\n}\n\n.table-column-fill {\n  width: calc(100% / 5);\n}\n\n.table-column-id {\n  min-width: 70px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvQzpcXFVzZXJzXFxzZW5reXJcXE9uZURyaXZlXFxTb3VyY2VcXHByb2pla3R5XFx0cmlkYS00ZXBcXHByb2pla3QtNGVwXFxzcmNcXHN5c2FkbWluXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFx1c2Vyc1xcdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREZBO0VBQ0ksY0FBQTtBQ0NKOztBREZBO0VBQ0ksY0FBQTtBQ0NKOztBREZBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lZGl0YWJsZS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbn1cblxuLmVkaXRhYmxlLWNlbGwuaXMtaW52YWxpZCB7XG4gICAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5lZGl0YWJsZS1jZWxsLmlzLWludmFsaWQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLnRhYmxlLWNvbHVtbi1maWxsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG59XG5cbi50YWJsZS1jb2x1bW4taWQge1xuICAgIG1pbi13aWR0aDogNzBweDtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lZGl0YWJsZS1jZWxsIHtcbiAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0YWJsZS1jZWxsLmlzLWludmFsaWQge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLmVkaXRhYmxlLWNlbGwuaXMtaW52YWxpZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLnRhYmxlLWNvbHVtbi1maWxsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xufVxuXG4udGFibGUtY29sdW1uLWlkIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LW5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/users/user.service */ "./src/app/core/users/user.service.ts");
/* harmony import */ var src_app_core_users_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/users/user */ "./src/app/core/users/user.ts");
/* harmony import */ var _user_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-view-model */ "./src/app/pages/users/user-view-model.ts");
/* harmony import */ var src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/alerts/alert.service */ "./src/app/alerts/alert.service.ts");
/* harmony import */ var src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/alerts/alert-type */ "./src/app/alerts/alert-type.ts");
/* harmony import */ var src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/users/user-name-already-used-error */ "./src/app/core/users/user-name-already-used-error.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let UsersComponent = class UsersComponent {
    constructor(userService, alertService) {
        this.userService = userService;
        this.alertService = alertService;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", this.idFilterValidator),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            isLibrarian: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](false),
            isAdministrator: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](false)
        });
        this.filterForm.valueChanges.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let idFilterControl = this.filterForm.get("id");
            let idFilter = idFilterControl.value;
            let userNameFilter = this.filterForm.get("userName").value;
            let firstNameFilter = this.filterForm.get("firstName").value;
            let lastNameFilter = this.filterForm.get("lastName").value;
            let emailFilter = this.filterForm.get("email").value;
            let isLibrarianFilter = this.filterForm.get("isLibrarian").value;
            let isAdministratorFilter = this.filterForm.get("isAdministrator").value;
            let options = Object.assign({}, idFilter !== "" && !idFilterControl.invalid && { idFilter: parseInt(idFilter) }, userNameFilter !== "" && { userNameFilter }, firstNameFilter !== "" && { firstNameFilter }, lastNameFilter !== "" && { lastNameFilter }, emailFilter !== "" && { emailFilter }, isLibrarianFilter !== false && { isLibrarianFilter }, isAdministratorFilter !== false && { isAdministratorFilter });
            this.users = (yield this.userService.getAll(options).toPromise())
                .map(u => new _user_view_model__WEBPACK_IMPORTED_MODULE_4__["UserViewModel"](u, u.userName, "", u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator));
        });
    }
    addNewUser() {
        this.newUser = new _user_view_model__WEBPACK_IMPORTED_MODULE_4__["UserViewModel"](null, "", "", "", "", "", false, false);
        this.users.unshift(this.newUser);
    }
    save(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let newUser;
            if (user.original != null) {
                let u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_3__["User"](user.original.id, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                let newPassword = user.newPassword === "" ? undefined : user.newPassword;
                try {
                    newUser = yield this.userService.update(u, newPassword).toPromise();
                }
                catch (e) {
                    if (e instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_7__["UserNameAlreadyUsedError"]) {
                        this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__["AlertType"].error);
                        return;
                    }
                    throw e;
                }
            }
            else {
                let u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_3__["User"](0, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                try {
                    newUser = yield this.userService.add(u, user.newPassword).toPromise();
                }
                catch (e) {
                    if (e instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_7__["UserNameAlreadyUsedError"]) {
                        this.alertService.show(`Uživatelské jméno '${u.userName}' již používá někdo jiný.`, src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__["AlertType"].error);
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.userService.remove(user.original).toPromise();
            this.users.splice(this.users.indexOf(user), 1);
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
                        this.alertService.show("Chyba na řádku " + (i + 1), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__["AlertType"].error);
                        kontrola++;
                    }
                    else {
                        validniRadky.push(atributyUsera);
                    }
                }
                if (kontrola == 0) {
                    for (let i = 0; i < radky.length; i++) {
                        let validniRadek = validniRadky.pop();
                        let uzivatel = new _user_view_model__WEBPACK_IMPORTED_MODULE_4__["UserViewModel"](null, validniRadek[0], validniRadek[1], validniRadek[2], validniRadek[3], validniRadek[4], validniRadek[5] === "true", validniRadek[6] === "true");
                        this.users.unshift(uzivatel);
                    }
                }
            };
        });
        element.click();
    }
    export() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
};
UsersComponent.ctorParameters = () => [
    { type: src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.scss */ "./src/app/pages/users/users.component.scss")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/users/users.component */ "./src/app/pages/users/users.component.ts");
/* harmony import */ var _can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./can-activates/signed-in-can-activate */ "./src/app/routing/can-activates/signed-in-can-activate.ts");





const routes = [
    { path: "users", component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], canActivate: [_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_4__["SignedInCanActivate"]] },
    { path: "**", redirectTo: "users" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/routing/can-activates/signed-in-can-activate.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routing/can-activates/signed-in-can-activate.ts ***!
  \*****************************************************************/
/*! exports provided: SIGN_IN_URL, SignedInCanActivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_URL", function() { return SIGN_IN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignedInCanActivate", function() { return SignedInCanActivate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/sign-in/sign-in.service */ "./src/app/core/sign-in/sign-in.service.ts");



const SIGN_IN_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Sign in page url.");
let SignedInCanActivate = class SignedInCanActivate {
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
};
SignedInCanActivate.ctorParameters = () => [
    { type: src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [SIGN_IN_URL,] }] }
];
SignedInCanActivate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SIGN_IN_URL))
], SignedInCanActivate);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\senkyr\OneDrive\Source\projekty\trida-4ep\projekt-4ep\src\sysadmin\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map