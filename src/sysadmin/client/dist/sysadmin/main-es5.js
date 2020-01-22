function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alert-view/alert-view.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alert-view/alert-view.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlertsAlertViewAlertViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let alert of activeAlerts\" [class]=\"'m-1 shadow-sm alert ' + getAlertClass(alert)\">\n    {{alert.message}}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogsConfirmDialogConfirmDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #modal class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">{{title}}</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">{{message}}</div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Ne</button>\n                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"confirmed = true\">Ano</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/app.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/app.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-navigation></app-main-navigation>\n<router-outlet class=\"router-outlet-flex-grow-1\"></router-outlet>\n<app-main-footer></app-main-footer>\n    \n<div class=\"fixed-top p-5 alert-view-container\">\n    <app-alert-view></app-alert-view>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-footer/main-footer.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-footer/main-footer.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppMainFooterMainFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-1 pr-2 text-muted text-right text-sm\">\n    <small>\n        Administrace knihovny\n        <a href=\"https://www.spstrutnov.cz\" target=\"_blank\">SPŠ Trutnov</a>\n    </small>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-navigation/main-navigation.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-navigation/main-navigation.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAppMainNavigationMainNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Knihovna SPŠ Trutnov</a>\n    <ng-container *ngIf=\"signedUser !== null\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n            aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavAltMarkup\">\n            <div class=\"navbar-nav\">\n                <a class=\"nav-item nav-link\" routerLink=\"/users\" routerLinkActive=\"active\">\n                    <i class=\"fas fa-user-friends\"></i>\n                    Uživatelé\n                </a>\n                <a class=\"nav-item nav-link\" href=\"{{userModuleUrl}}\">\n                    <i class=\"fas fa-book\"></i>\n                    Uživatel\n                </a>\n                <a *ngIf=\"signedUser.isLibrarian\" class=\"nav-item nav-link\" href=\"{{librarianModuleUrl}}\">\n                    <i class=\"fas fa-book-medical\"></i>\n                    Knihovník\n                </a>\n                <div class=\"dropdown\">\n                    <button class=\"btn btn-link dropdown-toggle nav-item nav-link active text-left border-0\"\n                        role=\"button\" id=\"userDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                        aria-expanded=\"false\">\n                        <i class=\"fas fa-user\"></i>\n                        {{signedUser.userName}}\n                    </button>\n\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdownMenuLink\">\n                        <a class=\"dropdown-item btn btn-link pl-3\" (click)=\"signOut()\">\n                            <i class=\"fas fa-sign-out-alt pr-1\"></i>\n                            Odhlásit se\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-container>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex align-items-center\">\n    <h2 class=\"m-4 flex-grow-1\">Uživatelé</h2>\n    <button class=\"btn btn-secondary m-1\" (click)=\"export()\">Exportovat</button>\n    <button class=\"btn btn-secondary m-1 mr-4\"(click)=\"import()\">Importovat</button>\n</div>\n<table class=\"table table-striped table-hover\">\n    <thead>\n        <tr [formGroup]=\"filterForm\">\n            <th class=\"sticky-top bg-white table-column-id\">\n                Id\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"id\" [class.is-invalid]=\"!isIdFilterValid\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Uživatelské jméno\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"userName\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white align-top\">Heslo</th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Jméno\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"firstName\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Příjmení\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"lastName\">\n            </th>\n            <th class=\"table-column-fill sticky-top bg-white\">\n                Email\n                <input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"email\">\n            </th>\n            <th class=\"sticky-top bg-white\">\n                Knihovník\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" formControlName=\"isLibrarian\">\n                </div>\n            </th>\n            <th class=\"sticky-top bg-white\">\n                Administrátor\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" formControlName=\"isAdministrator\">\n                </div>\n            </th>\n            <th class=\"sticky-top bg-white text-nowrap\">\n                <small class=\"text-muted font-weight-normal text-center d-block pb-1\">{{changesText}}</small>\n                <button [class.invisible]=\"!hasChanges\" [disabled]=\"!isAllValid\" class=\"btn btn-sm btn-success mr-1\"\n                    (click)=\"saveAll()\">Uložit</button>\n                <button [class.invisible]=\"!hasChanges\" class=\"btn btn-sm btn-danger ml-1\"\n                    (click)=\"discardAll()\">Zahodit</button>\n            </th>\n            <th class=\"sticky-top bg-white\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of users\"\n            [class.table-warning]=\"(user.isChanged || user.original === null) && user !== newUser\">\n            <td class=\"table-column-id align-middle\">\n                <ng-container *ngIf=\"user.original !== null\">{{user.original.id}}</ng-container>\n                <i *ngIf=\"user.original === null\" class=\"fas fa-plus\"></i>\n            </td>\n            <td class=\"table-column-fill\">\n                <input [class.is-invalid]=\"!user.isUserNameValid && user !== newUser\"\n                    class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newUserName\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input [class.is-invalid]=\"!user.isPasswordValid && user !== newUser\"\n                    class=\"form-control form-control-sm editable-cell\"\n                    [placeholder]=\"user.original === null ? 'Nevyplněno' : 'Nezměněno'\" type=\"password\"\n                    [(ngModel)]=\"user.newPassword\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newFirstName\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newLastName\">\n            </td>\n            <td class=\"table-column-fill\">\n                <input [class.is-invalid]=\"!user.isEmailValid && user !== newUser\"\n                    class=\"form-control form-control-sm editable-cell\" placeholder=\"Nevyplněno\" type=\"text\"\n                    [(ngModel)]=\"user.newEmail\">\n            </td>\n            <td>\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" [(ngModel)]=\"user.newIsLibrarian\">\n                </div>\n            </td>\n            <td>\n                <div class=\"form-check text-center\">\n                    <input style=\"width: 18px; height: 19px; cursor: pointer;\" class=\"form-check-input position-static\"\n                        type=\"checkbox\" [(ngModel)]=\"user.newIsAdministrator\">\n                </div>\n            </td>\n            <td class=\"pr-0 text-nowrap\">\n                <button [class.invisible]=\"!user.isChanged && user.original !== null || user === newUser\"\n                    [disabled]=\"!user.isValid\" class=\"btn btn-sm btn-success mr-1\" (click)=\"save(user)\">Uložit</button>\n                <button [class.invisible]=\"!user.isChanged && user.original !== null || user === newUser\"\n                    class=\"btn btn-sm btn-danger ml-1\" (click)=\"discard(user)\">Zahodit</button>\n            </td>\n            <td>\n                <i *ngIf=\"user.original !== null\" class=\"fas fa-trash fa-2x cursor-pointer text-muted\"\n                    style=\"font-size: 1.5em\" (click)=\"remove(user)\"></i>\n            </td>\n        </tr>\n    </tbody>\n</table>\n<div *ngIf=\"users === undefined\" class=\"flex-grow-1 d-flex justify-content-center align-items-center\">\n    <div class=\"spinner-border\" role=\"status\">\n        <span class=\"sr-only\">Načítání...</span>\n    </div>\n</div>\n<div *ngIf=\"users !== undefined && users.length === 1 && !isFiltred\" class=\"flex-grow-1 d-flex justify-content-center align-items-center\">\n    <span class=\"text-muted\">Databáze neobsahuje žádné záznamy.</span>\n</div>\n<div *ngIf=\"users !== undefined && users.length === 0 && isFiltred\" class=\"flex-grow-1 d-flex justify-content-center align-items-center\">\n    <span class=\"text-muted\">Podle zadaných kritérií nebyly nalezeny žádné záznamy.</span>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/alerts/alert-type.ts":
  /*!**************************************!*\
    !*** ./src/app/alerts/alert-type.ts ***!
    \**************************************/

  /*! exports provided: AlertType */

  /***/
  function srcAppAlertsAlertTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AlertType;

    (function (AlertType) {
      AlertType[AlertType["info"] = 0] = "info";
      AlertType[AlertType["warning"] = 1] = "warning";
      AlertType[AlertType["error"] = 2] = "error";
    })(AlertType || (AlertType = {}));
    /***/

  },

  /***/
  "./src/app/alerts/alert-view/alert-view.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/alerts/alert-view/alert-view.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlertsAlertViewAlertViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0cy9hbGVydC12aWV3L2FsZXJ0LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/alerts/alert-view/alert-view.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/alerts/alert-view/alert-view.component.ts ***!
    \***********************************************************/

  /*! exports provided: AlertViewComponent */

  /***/
  function srcAppAlertsAlertViewAlertViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertViewComponent", function () {
      return AlertViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../alert.service */
    "./src/app/alerts/alert.service.ts");
    /* harmony import */


    var _alert_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../alert-type */
    "./src/app/alerts/alert-type.ts");

    var AlertViewComponent =
    /*#__PURE__*/
    function () {
      function AlertViewComponent(alertService) {
        _classCallCheck(this, AlertViewComponent);

        this.alertService = alertService;
      }

      _createClass(AlertViewComponent, [{
        key: "getAlertClass",
        value: function getAlertClass(alert) {
          switch (alert.type) {
            case _alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].warning:
              return "alert-warning";

            case _alert_type__WEBPACK_IMPORTED_MODULE_3__["AlertType"].error:
              return "alert-danger";

            default:
              return "alert-info";
          }
        }
      }, {
        key: "activeAlerts",
        get: function get() {
          return this.alertService.active;
        }
      }]);

      return AlertViewComponent;
    }();

    AlertViewComponent.ctorParameters = function () {
      return [{
        type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    AlertViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alerts/alert-view/alert-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alert-view.component.scss */
      "./src/app/alerts/alert-view/alert-view.component.scss")).default]
    })], AlertViewComponent);
    /***/
  },

  /***/
  "./src/app/alerts/alert.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/alerts/alert.service.ts ***!
    \*****************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppAlertsAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _alert_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alert-type */
    "./src/app/alerts/alert-type.ts");
    /* harmony import */


    var _alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert */
    "./src/app/alerts/alert.ts");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.active = [];
      }

      _createClass(AlertService, [{
        key: "show",
        value: function show(message) {
          var _this = this;

          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _alert_type__WEBPACK_IMPORTED_MODULE_2__["AlertType"].info;
          var alert = new _alert__WEBPACK_IMPORTED_MODULE_3__["Alert"](message, type);
          this.active.push(alert);
          setTimeout(function () {
            return _this.active.shift();
          }, 2000);
        }
      }]);

      return AlertService;
    }();

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/alerts/alert.ts":
  /*!*********************************!*\
    !*** ./src/app/alerts/alert.ts ***!
    \*********************************/

  /*! exports provided: Alert */

  /***/
  function srcAppAlertsAlertTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Alert = function Alert(message, type) {
      _classCallCheck(this, Alert);

      this.message = message;
      this.type = type;
    };
    /***/

  },

  /***/
  "./src/app/app-initialize.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/app-initialize.service.ts ***!
    \*******************************************/

  /*! exports provided: AppInitializeService */

  /***/
  function srcAppAppInitializeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInitializeService", function () {
      return AppInitializeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/users/user.service */
    "./src/app/core/users/user.service.ts");
    /* harmony import */


    var _core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/sign-in/sign-in.service */
    "./src/app/core/sign-in/sign-in.service.ts");

    var AppInitializeService =
    /*#__PURE__*/
    function () {
      function AppInitializeService(userService, signInService) {
        _classCallCheck(this, AppInitializeService);

        this.userService = userService;
        this.signInService = signInService;
      }

      _createClass(AppInitializeService, [{
        key: "intialize",
        value: function intialize() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.userService.getSignedIn().toPromise();

                  case 2:
                    user = _context.sent;
                    if (user !== null) this.signInService.signIn(user);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppInitializeService;
    }();

    AppInitializeService.ctorParameters = function () {
      return [{
        type: _core_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["SignInService"]
      }];
    };

    AppInitializeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppInitializeService);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createAppInitializer, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createAppInitializer", function () {
      return createAppInitializer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./routing/app-routing.module */
    "./src/app/routing/app-routing.module.ts");
    /* harmony import */


    var _pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/app/app.component */
    "./src/app/pages/app/app.component.ts");
    /* harmony import */


    var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/users/users.component */
    "./src/app/pages/users/users.component.ts");
    /* harmony import */


    var _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/app/main-navigation/main-navigation.component */
    "./src/app/pages/app/main-navigation/main-navigation.component.ts");
    /* harmony import */


    var _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./alerts/alert-view/alert-view.component */
    "./src/app/alerts/alert-view/alert-view.component.ts");
    /* harmony import */


    var _core_api_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/api/api */
    "./src/app/core/api/api.ts");
    /* harmony import */


    var _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialogs/confirm-dialog/confirm-dialog.component */
    "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts");
    /* harmony import */


    var _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/app/main-footer/main-footer.component */
    "./src/app/pages/app/main-footer/main-footer.component.ts");
    /* harmony import */


    var _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./routing/can-activates/signed-in-can-activate */
    "./src/app/routing/can-activates/signed-in-can-activate.ts");
    /* harmony import */


    var _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./http-interceptors/with-credentials-http-interceptor */
    "./src/app/http-interceptors/with-credentials-http-interceptor.ts");
    /* harmony import */


    var _app_initialize_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-initialize.service */
    "./src/app/app-initialize.service.ts");

    function createAppInitializer(appInitializeService) {
      var _this2 = this;

      return function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return appInitializeService.intialize();

                case 2:
                  return _context2.abrupt("return", _context2.sent);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
      };
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _pages_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["MainNavigationComponent"], _alerts_alert_view_alert_view_component__WEBPACK_IMPORTED_MODULE_9__["AlertViewComponent"], _dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], _pages_app_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_12__["MainFooterComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _http_interceptors_with_credentials_http_interceptor__WEBPACK_IMPORTED_MODULE_14__["WithCredentialsHttpInterceptor"],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["APP_INITIALIZER"],
        useFactory: createAppInitializer,
        deps: [_app_initialize_service__WEBPACK_IMPORTED_MODULE_15__["AppInitializeService"]],
        multi: true
      }, {
        provide: _core_api_api__WEBPACK_IMPORTED_MODULE_10__["API_URL"],
        useValue: "/knihovna/sysadmin/api"
      }, {
        provide: _routing_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_13__["SIGN_IN_URL"],
        useValue: "/knihovna/authentication/signIn.php"
      }, {
        provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["SIGN_OUT_URL"],
        useValue: "/knihovna/authentication/signOut.php"
      }, {
        provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["USER_MODULE_URL"],
        useValue: "/knihovna/uzivatel"
      }, {
        provide: _pages_app_main_navigation_main_navigation_component__WEBPACK_IMPORTED_MODULE_8__["LIBRARIAN_MODULE_URL"],
        useValue: "/knihovna/knihovnik"
      }],
      entryComponents: [_dialogs_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"]],
      bootstrap: [_pages_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/api/api.ts":
  /*!*********************************!*\
    !*** ./src/app/core/api/api.ts ***!
    \*********************************/

  /*! exports provided: API_URL */

  /***/
  function srcAppCoreApiApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Url of api root.");
    /***/
  },

  /***/
  "./src/app/core/sign-in/sign-in.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/sign-in/sign-in.service.ts ***!
    \*************************************************/

  /*! exports provided: SignInService */

  /***/
  function srcAppCoreSignInSignInServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInService", function () {
      return SignInService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignInService =
    /*#__PURE__*/
    function () {
      function SignInService() {
        _classCallCheck(this, SignInService);

        this.signedUserChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._signedUser = null;
      }

      _createClass(SignInService, [{
        key: "signIn",
        value: function signIn(user) {
          this._signedUser = user;
          this.signedUserChanged.emit();
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this._signedUser = null;
          this.signedUserChanged.emit();
        }
      }, {
        key: "signedUser",
        get: function get() {
          return this._signedUser;
        }
      }]);

      return SignInService;
    }();

    SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SignInService);
    /***/
  },

  /***/
  "./src/app/core/users/user-has-active-borrows-error.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/users/user-has-active-borrows-error.ts ***!
    \*************************************************************/

  /*! exports provided: UserHasActiveBorrowsError */

  /***/
  function srcAppCoreUsersUserHasActiveBorrowsErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserHasActiveBorrowsError", function () {
      return UserHasActiveBorrowsError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserHasActiveBorrowsError =
    /*#__PURE__*/
    function (_Error) {
      _inherits(UserHasActiveBorrowsError, _Error);

      function UserHasActiveBorrowsError() {
        _classCallCheck(this, UserHasActiveBorrowsError);

        return _possibleConstructorReturn(this, _getPrototypeOf(UserHasActiveBorrowsError).apply(this, arguments));
      }

      return UserHasActiveBorrowsError;
    }(_wrapNativeSuper(Error));
    /***/

  },

  /***/
  "./src/app/core/users/user-name-already-used-error.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/users/user-name-already-used-error.ts ***!
    \************************************************************/

  /*! exports provided: UserNameAlreadyUsedError */

  /***/
  function srcAppCoreUsersUserNameAlreadyUsedErrorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNameAlreadyUsedError", function () {
      return UserNameAlreadyUsedError;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserNameAlreadyUsedError =
    /*#__PURE__*/
    function (_Error2) {
      _inherits(UserNameAlreadyUsedError, _Error2);

      function UserNameAlreadyUsedError() {
        _classCallCheck(this, UserNameAlreadyUsedError);

        return _possibleConstructorReturn(this, _getPrototypeOf(UserNameAlreadyUsedError).apply(this, arguments));
      }

      return UserNameAlreadyUsedError;
    }(_wrapNativeSuper(Error));
    /***/

  },

  /***/
  "./src/app/core/users/user.service.ts":
  /*!********************************************!*\
    !*** ./src/app/core/users/user.service.ts ***!
    \********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppCoreUsersUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user */
    "./src/app/core/users/user.ts");
    /* harmony import */


    var _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-name-already-used-error */
    "./src/app/core/users/user-name-already-used-error.ts");
    /* harmony import */


    var _api_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../api/api */
    "./src/app/core/api/api.ts");
    /* harmony import */


    var _user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-has-active-borrows-error */
    "./src/app/core/users/user-has-active-borrows-error.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(httpClient, apiUrl) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this.apiUrl = apiUrl;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var parameters = Object.assign({}, options.idFilter !== undefined && {
            "id-filter": options.idFilter.toString()
          }, options.userNameFilter !== undefined && {
            "user-name-filter": options.userNameFilter
          }, options.firstNameFilter !== undefined && {
            "first-name-filter": options.firstNameFilter
          }, options.lastNameFilter !== undefined && {
            "last-name-filter": options.lastNameFilter
          }, options.emailFilter !== undefined && {
            "email-filter": options.emailFilter
          }, options.isLibrarianFilter !== undefined && {
            "is-librarian-filter": options.isLibrarianFilter.toString()
          }, options.isAdministratorFilter !== undefined && {
            "is-administrator-filter": options.isAdministratorFilter.toString()
          });
          return this.httpClient.get("".concat(this.apiUrl, "/users/index.php"), {
            params: parameters
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) {
            return u.map(function (u) {
              return new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
            });
          }));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.httpClient.get("".concat(this.apiUrl, "/users/index.php?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) {
            return new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
          }));
        }
      }, {
        key: "getSignedIn",
        value: function getSignedIn() {
          return this.httpClient.get("".concat(this.apiUrl, "/users/index.php?id=")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return e.status === 401 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) {
            return u === null ? null : new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
          }));
        }
      }, {
        key: "add",
        value: function add(user, password) {
          var id = user.id,
              withoutId = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](user, ["id"]);
          var withPassword = Object.assign({}, withoutId, {
            password: password
          });
          return this.httpClient.post("".concat(this.apiUrl, "/users/index.php"), withPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_6__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) {
            return new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
          }));
        }
      }, {
        key: "update",
        value: function update(user, password) {
          var userData = password === undefined ? user : Object.assign({}, user, {
            password: password
          });
          return this.httpClient.put("".concat(this.apiUrl, "/users/index.php?id=").concat(user.id), userData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _user_name_already_used_error__WEBPACK_IMPORTED_MODULE_6__["UserNameAlreadyUsedError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (u) {
            return new _user__WEBPACK_IMPORTED_MODULE_5__["User"](u.id, u.userName, u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
          }));
        }
      }, {
        key: "remove",
        value: function remove(user) {
          return this.httpClient.delete("".concat(this.apiUrl, "/users/index.php?id=").concat(user.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return e.status === 409 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new _user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_8__["UserHasActiveBorrowsError"]()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_api_api__WEBPACK_IMPORTED_MODULE_7__["API_URL"]]
        }]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_api_api__WEBPACK_IMPORTED_MODULE_7__["API_URL"]))], UserService);
    /***/
  },

  /***/
  "./src/app/core/users/user.ts":
  /*!************************************!*\
    !*** ./src/app/core/users/user.ts ***!
    \************************************/

  /*! exports provided: User */

  /***/
  function srcAppCoreUsersUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(id, userName, firstName, lastName, email, isLibrarian, isAdministrator) {
      _classCallCheck(this, User);

      this.id = id;
      this.userName = userName;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.isLibrarian = isLibrarian;
      this.isAdministrator = isAdministrator;
    };
    /***/

  },

  /***/
  "./src/app/dialogs/confirm-dialog/confirm-dialog.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogsConfirmDialogConfirmDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dialogs/confirm-dialog/confirm-dialog.component.ts ***!
    \********************************************************************/

  /*! exports provided: ConfirmDialogComponent */

  /***/
  function srcAppDialogsConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
      return ConfirmDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConfirmDialogComponent =
    /*#__PURE__*/
    function () {
      function ConfirmDialogComponent() {
        _classCallCheck(this, ConfirmDialogComponent);

        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirmed = false;
      }

      _createClass(ConfirmDialogComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          // @ts-ignore
          var modalElement = $(this.modal.nativeElement);
          modalElement.modal({});
          modalElement.on("hidden.bs.modal", function () {
            return _this3.close.emit(_this3.confirmed);
          });
        }
      }]);

      return ConfirmDialogComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConfirmDialogComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ConfirmDialogComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modal", {
      static: true
    })], ConfirmDialogComponent.prototype, "modal", void 0);
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirm-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirm-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialogs/confirm-dialog/confirm-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirm-dialog.component.scss */
      "./src/app/dialogs/confirm-dialog/confirm-dialog.component.scss")).default]
    })], ConfirmDialogComponent);
    /***/
  },

  /***/
  "./src/app/http-interceptors/with-credentials-http-interceptor.ts":
  /*!************************************************************************!*\
    !*** ./src/app/http-interceptors/with-credentials-http-interceptor.ts ***!
    \************************************************************************/

  /*! exports provided: WithCredentialsHttpInterceptor */

  /***/
  function srcAppHttpInterceptorsWithCredentialsHttpInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithCredentialsHttpInterceptor", function () {
      return WithCredentialsHttpInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WithCredentialsHttpInterceptor =
    /*#__PURE__*/
    function () {
      function WithCredentialsHttpInterceptor() {
        _classCallCheck(this, WithCredentialsHttpInterceptor);
      }

      _createClass(WithCredentialsHttpInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var requestWithCredentials = request.clone({
            withCredentials: true
          });
          return next.handle(requestWithCredentials);
        }
      }]);

      return WithCredentialsHttpInterceptor;
    }();

    WithCredentialsHttpInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], WithCredentialsHttpInterceptor);
    /***/
  },

  /***/
  "./src/app/pages/app/app.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/app/app.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n}\n\n.alert-view-container {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwL0M6XFxVc2Vyc1xcc2Vua3lyXFxPbmVEcml2ZVxcU291cmNlXFxwcm9qZWt0eVxcdHJpZGEtNGVwXFxwcm9qZWt0LTRlcFxcc3JjXFxzeXNhZG1pblxcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWxlcnQtdmlldy1jb250YWluZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWxlcnQtdmlldy1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/app/app.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/app/app.component.ts ***!
    \********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppPagesAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/pages/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/pages/app/main-footer/main-footer.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/app/main-footer/main-footer.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppMainFooterMainFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9tYWluLWZvb3Rlci9tYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/app/main-footer/main-footer.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/app/main-footer/main-footer.component.ts ***!
    \****************************************************************/

  /*! exports provided: MainFooterComponent */

  /***/
  function srcAppPagesAppMainFooterMainFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function () {
      return MainFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainFooterComponent = function MainFooterComponent() {
      _classCallCheck(this, MainFooterComponent);
    };

    MainFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-footer/main-footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-footer.component.scss */
      "./src/app/pages/app/main-footer/main-footer.component.scss")).default]
    })], MainFooterComponent);
    /***/
  },

  /***/
  "./src/app/pages/app/main-navigation/main-navigation.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/app/main-navigation/main-navigation.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAppMainNavigationMainNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9tYWluLW5hdmlnYXRpb24vbWFpbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/app/main-navigation/main-navigation.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/app/main-navigation/main-navigation.component.ts ***!
    \************************************************************************/

  /*! exports provided: SIGN_OUT_URL, USER_MODULE_URL, LIBRARIAN_MODULE_URL, MainNavigationComponent */

  /***/
  function srcAppPagesAppMainNavigationMainNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIGN_OUT_URL", function () {
      return SIGN_OUT_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USER_MODULE_URL", function () {
      return USER_MODULE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LIBRARIAN_MODULE_URL", function () {
      return LIBRARIAN_MODULE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainNavigationComponent", function () {
      return MainNavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/sign-in/sign-in.service */
    "./src/app/core/sign-in/sign-in.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SIGN_OUT_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Sign out page url.");
    var USER_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("User module root page url.");
    var LIBRARIAN_MODULE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Librarian module root page url.");

    var MainNavigationComponent =
    /*#__PURE__*/
    function () {
      function MainNavigationComponent(signInService, signOutUrl, userModuleUrl, librarianModuleUrl, location) {
        _classCallCheck(this, MainNavigationComponent);

        this.signInService = signInService;
        this.signOutUrl = signOutUrl;
        this.userModuleUrl = userModuleUrl;
        this.librarianModuleUrl = librarianModuleUrl;
        this.location = location;
      }

      _createClass(MainNavigationComponent, [{
        key: "signOut",
        value: function signOut() {
          this.signInService.signOut();
          window.location.href = this.signOutUrl + "?redirectUrl=" + this.userModuleUrl;
        }
      }, {
        key: "signedUser",
        get: function get() {
          return this.signInService.signedUser;
        }
      }]);

      return MainNavigationComponent;
    }();

    MainNavigationComponent.ctorParameters = function () {
      return [{
        type: src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [SIGN_OUT_URL]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [USER_MODULE_URL]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [LIBRARIAN_MODULE_URL]
        }]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    MainNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/main-navigation/main-navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-navigation.component.scss */
      "./src/app/pages/app/main-navigation/main-navigation.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SIGN_OUT_URL)), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(USER_MODULE_URL)), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LIBRARIAN_MODULE_URL))], MainNavigationComponent);
    /***/
  },

  /***/
  "./src/app/pages/users/user-view-model.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/users/user-view-model.ts ***!
    \************************************************/

  /*! exports provided: UserViewModel */

  /***/
  function srcAppPagesUsersUserViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserViewModel", function () {
      return UserViewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var UserViewModel =
    /*#__PURE__*/
    function () {
      function UserViewModel(original, newUserName, newPassword, newFirstName, newLastName, newEmail, newIsLibrarian, newIsAdministrator) {
        _classCallCheck(this, UserViewModel);

        this.original = original;
        this.newUserName = newUserName;
        this.newPassword = newPassword;
        this.newFirstName = newFirstName;
        this.newLastName = newLastName;
        this.newEmail = newEmail;
        this.newIsLibrarian = newIsLibrarian;
        this.newIsAdministrator = newIsAdministrator;
      }

      _createClass(UserViewModel, [{
        key: "resetToOriginal",
        value: function resetToOriginal() {
          if (this.original !== null) {
            this.newUserName = this.original.userName;
            this.newPassword = "";
            this.newFirstName = this.original.firstName;
            this.newLastName = this.original.lastName;
            this.newEmail = this.original.email;
            this.newIsLibrarian = this.original.isLibrarian;
            this.newIsAdministrator = this.original.isAdministrator;
          } else {
            this.newUserName = "";
            this.newPassword = "";
            this.newFirstName = "";
            this.newLastName = "";
            this.newEmail = "";
            this.newIsLibrarian = false;
            this.newIsAdministrator = false;
          }
        }
      }, {
        key: "isChanged",
        get: function get() {
          if (this.original == null) {
            return this.newUserName !== "" || this.newPassword !== "" || this.newFirstName !== "" || this.newLastName !== "" || this.newEmail !== "" || this.newIsLibrarian !== false || this.newIsAdministrator !== false;
          } else {
            return this.newUserName !== this.original.userName || this.newPassword !== "" || this.newFirstName !== this.original.firstName || this.newLastName !== this.original.lastName || this.newEmail !== this.original.email || this.newIsLibrarian !== this.original.isLibrarian || this.newIsAdministrator !== this.original.isAdministrator;
          }
        }
      }, {
        key: "isUserNameValid",
        get: function get() {
          return this.newUserName.length > 0;
        }
      }, {
        key: "isPasswordValid",
        get: function get() {
          return this.newPassword.length >= 8 || this.original !== null && this.newPassword === "";
        }
      }, {
        key: "isEmailValid",
        get: function get() {
          return this.newEmail === "" || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.newEmail);
        }
      }, {
        key: "isValid",
        get: function get() {
          return this.isUserNameValid && this.isPasswordValid && this.isEmailValid;
        }
      }]);

      return UserViewModel;
    }();
    /***/

  },

  /***/
  "./src/app/pages/users/users.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/users/users.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.editable-cell {\n  background: initial;\n  border: none;\n  box-shadow: none !important;\n}\n\n.editable-cell.is-invalid {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::-webkit-input-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::-moz-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::-ms-input-placeholder {\n  color: #dc3545;\n}\n\n.editable-cell.is-invalid::placeholder {\n  color: #dc3545;\n}\n\n.table-column-fill {\n  width: calc(100% / 5);\n}\n\n.table-column-id {\n  min-width: 70px;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.text-nowrap {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlcnMvQzpcXFVzZXJzXFxzZW5reXJcXE9uZURyaXZlXFxTb3VyY2VcXHByb2pla3R5XFx0cmlkYS00ZXBcXHByb2pla3QtNGVwXFxzcmNcXHN5c2FkbWluXFxjbGllbnQvc3JjXFxhcHBcXHBhZ2VzXFx1c2Vyc1xcdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREZBO0VBQ0ksY0FBQTtBQ0NKOztBREZBO0VBQ0ksY0FBQTtBQ0NKOztBREZBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lZGl0YWJsZS1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbn1cblxuLmVkaXRhYmxlLWNlbGwuaXMtaW52YWxpZCB7XG4gICAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5lZGl0YWJsZS1jZWxsLmlzLWludmFsaWQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLnRhYmxlLWNvbHVtbi1maWxsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG59XG5cbi50YWJsZS1jb2x1bW4taWQge1xuICAgIG1pbi13aWR0aDogNzBweDtcbn1cblxuLmN1cnNvci1wb2ludGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5lZGl0YWJsZS1jZWxsIHtcbiAgYmFja2dyb3VuZDogaW5pdGlhbDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0YWJsZS1jZWxsLmlzLWludmFsaWQge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLmVkaXRhYmxlLWNlbGwuaXMtaW52YWxpZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLnRhYmxlLWNvbHVtbi1maWxsIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xufVxuXG4udGFibGUtY29sdW1uLWlkIHtcbiAgbWluLXdpZHRoOiA3MHB4O1xufVxuXG4uY3Vyc29yLXBvaW50ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZXh0LW5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/users/users.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/users/users.component.ts ***!
    \************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppPagesUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/users/user.service */
    "./src/app/core/users/user.service.ts");
    /* harmony import */


    var src_app_core_users_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/users/user */
    "./src/app/core/users/user.ts");
    /* harmony import */


    var _user_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-view-model */
    "./src/app/pages/users/user-view-model.ts");
    /* harmony import */


    var src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/alerts/alert.service */
    "./src/app/alerts/alert.service.ts");
    /* harmony import */


    var src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/alerts/alert-type */
    "./src/app/alerts/alert-type.ts");
    /* harmony import */


    var src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/users/user-name-already-used-error */
    "./src/app/core/users/user-name-already-used-error.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_users_user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/core/users/user-has-active-borrows-error */
    "./src/app/core/users/user-has-active-borrows-error.ts");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(userService, alertService) {
        var _this4 = this;

        _classCallCheck(this, UsersComponent);

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
        this.filterForm.valueChanges.subscribe(function () {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.users = undefined;
                    _context3.next = 3;
                    return this.refreshUsers();

                  case 3:
                    if (!this.isFiltred) this.addNewUser();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        });
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.refreshUsers();

                  case 2:
                    this.addNewUser();

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.newUser != undefined && this.newUser.isChanged) this.addNewUser();
          if (this.hasChanges) this.filterForm.disable({
            emitEvent: false
          });else this.filterForm.enable({
            emitEvent: false
          });
        }
      }, {
        key: "refreshUsers",
        value: function refreshUsers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var idFilterControl, idFilter, userNameFilter, firstNameFilter, lastNameFilter, emailFilter, isLibrarianFilter, isAdministratorFilter, options;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    idFilterControl = this.filterForm.get("id");
                    idFilter = idFilterControl.value;
                    userNameFilter = this.filterForm.get("userName").value;
                    firstNameFilter = this.filterForm.get("firstName").value;
                    lastNameFilter = this.filterForm.get("lastName").value;
                    emailFilter = this.filterForm.get("email").value;
                    isLibrarianFilter = this.filterForm.get("isLibrarian").value;
                    isAdministratorFilter = this.filterForm.get("isAdministrator").value;
                    options = Object.assign({}, idFilter !== "" && !idFilterControl.invalid && {
                      idFilter: parseInt(idFilter)
                    }, userNameFilter !== "" && {
                      userNameFilter: userNameFilter
                    }, firstNameFilter !== "" && {
                      firstNameFilter: firstNameFilter
                    }, lastNameFilter !== "" && {
                      lastNameFilter: lastNameFilter
                    }, emailFilter !== "" && {
                      emailFilter: emailFilter
                    }, isLibrarianFilter !== false && {
                      isLibrarianFilter: isLibrarianFilter
                    }, isAdministratorFilter !== false && {
                      isAdministratorFilter: isAdministratorFilter
                    });
                    _context5.next = 11;
                    return this.userService.getAll(options).toPromise();

                  case 11:
                    _context5.t0 = function (u) {
                      return new _user_view_model__WEBPACK_IMPORTED_MODULE_4__["UserViewModel"](u, u.userName, "", u.firstName, u.lastName, u.email, u.isLibrarian, u.isAdministrator);
                    };

                    this.users = _context5.sent.map(_context5.t0);

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "addNewUser",
        value: function addNewUser() {
          this.newUser = new _user_view_model__WEBPACK_IMPORTED_MODULE_4__["UserViewModel"](null, "", "", "", "", "", false, false);
          this.users.unshift(this.newUser);
        }
      }, {
        key: "save",
        value: function save(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var newUser, u, newPassword, _u;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(user.original != null)) {
                      _context6.next = 17;
                      break;
                    }

                    u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_3__["User"](user.original.id, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                    newPassword = user.newPassword === "" ? undefined : user.newPassword;
                    _context6.prev = 3;
                    _context6.next = 6;
                    return this.userService.update(u, newPassword).toPromise();

                  case 6:
                    newUser = _context6.sent;
                    _context6.next = 15;
                    break;

                  case 9:
                    _context6.prev = 9;
                    _context6.t0 = _context6["catch"](3);

                    if (!(_context6.t0 instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_7__["UserNameAlreadyUsedError"])) {
                      _context6.next = 14;
                      break;
                    }

                    this.alertService.show("U\u017Eivatelsk\xE9 jm\xE9no '".concat(u.userName, "' ji\u017E pou\u017E\xEDv\xE1 n\u011Bkdo jin\xFD."), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__["AlertType"].error);
                    return _context6.abrupt("return");

                  case 14:
                    throw _context6.t0;

                  case 15:
                    _context6.next = 30;
                    break;

                  case 17:
                    _u = new src_app_core_users_user__WEBPACK_IMPORTED_MODULE_3__["User"](0, user.newUserName, user.newFirstName, user.newLastName, user.newEmail, user.newIsLibrarian, user.newIsAdministrator);
                    _context6.prev = 18;
                    _context6.next = 21;
                    return this.userService.add(_u, user.newPassword).toPromise();

                  case 21:
                    newUser = _context6.sent;
                    _context6.next = 30;
                    break;

                  case 24:
                    _context6.prev = 24;
                    _context6.t1 = _context6["catch"](18);

                    if (!(_context6.t1 instanceof src_app_core_users_user_name_already_used_error__WEBPACK_IMPORTED_MODULE_7__["UserNameAlreadyUsedError"])) {
                      _context6.next = 29;
                      break;
                    }

                    this.alertService.show("U\u017Eivatelsk\xE9 jm\xE9no '".concat(_u.userName, "' ji\u017E pou\u017E\xEDv\xE1 n\u011Bkdo jin\xFD."), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__["AlertType"].error);
                    return _context6.abrupt("return");

                  case 29:
                    throw _context6.t1;

                  case 30:
                    user.original = newUser;
                    user.resetToOriginal();

                  case 32:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[3, 9], [18, 24]]);
          }));
        }
      }, {
        key: "discard",
        value: function discard(user) {
          if (user.original == null) this.users.splice(this.users.indexOf(user), 1);else user.resetToOriginal();
        }
      }, {
        key: "remove",
        value: function remove(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return this.userService.remove(user.original).toPromise();

                  case 3:
                    this.users.splice(this.users.indexOf(user), 1);
                    _context7.next = 12;
                    break;

                  case 6:
                    _context7.prev = 6;
                    _context7.t0 = _context7["catch"](0);

                    if (!(_context7.t0 instanceof src_app_core_users_user_has_active_borrows_error__WEBPACK_IMPORTED_MODULE_9__["UserHasActiveBorrowsError"])) {
                      _context7.next = 11;
                      break;
                    }

                    this.alertService.show("Nelze smazat uživatele s aktivními výpůjčkami.", src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__["AlertType"].error);
                    return _context7.abrupt("return");

                  case 11:
                    throw _context7.t0;

                  case 12:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[0, 6]]);
          }));
        }
      }, {
        key: "saveAll",
        value: function saveAll() {
          var _this5 = this;

          this.users.filter(function (u) {
            return u.isChanged;
          }).forEach(function (u) {
            return _this5.save(u);
          });
        }
      }, {
        key: "discardAll",
        value: function discardAll() {
          var _this6 = this;

          this.users.filter(function (u) {
            return u.isChanged || u.original === null && u !== _this6.newUser;
          }).forEach(function (u) {
            return _this6.discard(u);
          });
        }
      }, {
        key: "idFilterValidator",
        value: function idFilterValidator(control) {
          if (/^(0|(-?[1-9][0-9]*)|)$/.test(control.value)) return null;else return {
            invalidId: true
          };
        }
      }, {
        key: "import",
        value: function _import() {
          var _this7 = this;

          var kontrola = 0;
          var validniRadky = [];
          var element = document.createElement("input");
          element.type = "file";
          element.addEventListener("change", function () {
            var file = element.files[0];
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");

            reader.onload = function () {
              var soubor = reader.result;
              var radky = soubor.split(/\r\n?|\n/);

              for (var i = 0; i < radky.length; i++) {
                var atributyUsera = radky[i].split(",");

                if (atributyUsera.length != 7 || atributyUsera[5] != "true" && atributyUsera[5] != "false" || atributyUsera[6] != "true" && atributyUsera[6] != "false") {
                  _this7.alertService.show("Chyba na řádku " + (i + 1), src_app_alerts_alert_type__WEBPACK_IMPORTED_MODULE_6__["AlertType"].error);

                  kontrola++;
                } else {
                  validniRadky.push(atributyUsera);
                }
              }

              if (kontrola == 0) {
                for (var _i = 0; _i < radky.length; _i++) {
                  var validniRadek = validniRadky.pop();
                  var uzivatel = new _user_view_model__WEBPACK_IMPORTED_MODULE_4__["UserViewModel"](null, validniRadek[0], validniRadek[1], validniRadek[2], validniRadek[3], validniRadek[4], validniRadek[5] === "true", validniRadek[6] === "true");

                  _this7.users.unshift(uzivatel);
                }
              }
            };
          });
          element.click();
        }
      }, {
        key: "export",
        value: function _export() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var soubor, uzivatele, i, uzivatel;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    soubor = "";
                    _context8.next = 3;
                    return this.userService.getAll().toPromise();

                  case 3:
                    uzivatele = _context8.sent;

                    for (i = 0; i < uzivatele.length; i++) {
                      uzivatel = uzivatele[i];
                      if (i != 0) soubor += "\n";
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

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "downloadBlob",
        value: function downloadBlob(fileName, blob) {
          var url = URL.createObjectURL(blob);
          var linkElement = document.createElement("a");
          linkElement.download = fileName;
          linkElement.href = url;
          linkElement.click();
          URL.revokeObjectURL(url);
        }
      }, {
        key: "hasChanges",
        get: function get() {
          var _this8 = this;

          return this.users !== undefined && this.users.some(function (u) {
            return (u.isChanged || u.original === null) && u !== _this8.newUser;
          });
        }
      }, {
        key: "isAllValid",
        get: function get() {
          var _this9 = this;

          return this.users === undefined || this.users.every(function (u) {
            return u.isValid || u === _this9.newUser;
          });
        }
      }, {
        key: "isFiltred",
        get: function get() {
          return this.filterForm.get("id").value != "" || this.filterForm.get("userName").value != "" || this.filterForm.get("firstName").value != "" || this.filterForm.get("lastName").value != "" || this.filterForm.get("email").value != "" || this.filterForm.get("isLibrarian").value != false || this.filterForm.get("isAdministrator").value != false;
        }
      }, {
        key: "isIdFilterValid",
        get: function get() {
          return !this.filterForm.get("id").invalid;
        }
      }, {
        key: "changesText",
        get: function get() {
          if (this.users === undefined) return "";
          var changesCount = this.users.filter(function (u) {
            return u.isChanged;
          }).length;
          if (changesCount === 0) return "";else if (changesCount === 1) return "".concat(changesCount, " zm\u011Bna.");else if (changesCount > 1 && changesCount < 5) return "".concat(changesCount, " zm\u011Bny.");else return "".concat(changesCount, " zm\u011Bn.");
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: src_app_core_users_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_alerts_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }];
    };

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/pages/users/users.component.scss")).default]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/app/routing/app-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/routing/app-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pages/users/users.component */
    "./src/app/pages/users/users.component.ts");
    /* harmony import */


    var _can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./can-activates/signed-in-can-activate */
    "./src/app/routing/can-activates/signed-in-can-activate.ts");

    var routes = [{
      path: "users",
      component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
      canActivate: [_can_activates_signed_in_can_activate__WEBPACK_IMPORTED_MODULE_4__["SignedInCanActivate"]]
    }, {
      path: "**",
      redirectTo: "users"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/routing/can-activates/signed-in-can-activate.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/routing/can-activates/signed-in-can-activate.ts ***!
    \*****************************************************************/

  /*! exports provided: SIGN_IN_URL, SignedInCanActivate */

  /***/
  function srcAppRoutingCanActivatesSignedInCanActivateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIGN_IN_URL", function () {
      return SIGN_IN_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignedInCanActivate", function () {
      return SignedInCanActivate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/sign-in/sign-in.service */
    "./src/app/core/sign-in/sign-in.service.ts");

    var SIGN_IN_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("Sign in page url.");

    var SignedInCanActivate =
    /*#__PURE__*/
    function () {
      function SignedInCanActivate(signInService, signInUrl) {
        _classCallCheck(this, SignedInCanActivate);

        this.signInService = signInService;
        this.signInUrl = signInUrl;
      }

      _createClass(SignedInCanActivate, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var signedIn = this.signInService.signedUser !== null;
          if (!signedIn) window.location.href = this.signInUrl + "?redirectUrl=" + window.location.href;
          return signedIn;
        }
      }]);

      return SignedInCanActivate;
    }();

    SignedInCanActivate.ctorParameters = function () {
      return [{
        type: src_app_core_sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [SIGN_IN_URL]
        }]
      }];
    };

    SignedInCanActivate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(SIGN_IN_URL))], SignedInCanActivate);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\senkyr\OneDrive\Source\projekty\trida-4ep\projekt-4ep\src\sysadmin\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map