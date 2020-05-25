(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_privacyTerms_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/privacyTerms/privacy/privacy.component */ "./src/app/components/privacyTerms/privacy/privacy.component.ts");
/* harmony import */ var _components_privacyTerms_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/privacyTerms/terms-and-conditions/terms-and-conditions.component */ "./src/app/components/privacyTerms/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_pages_SavedJobsPage_saved_jobs_saved_jobs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/SavedJobsPage/saved-jobs/saved-jobs.component */ "./src/app/components/pages/SavedJobsPage/saved-jobs/saved-jobs.component.ts");









var routes = [
    {
        path: "",
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./components/pages/home/home.module */ "./src/app/components/pages/home/home.module.ts")).then(function (module) { return module.HomeModule; });
        },
    },
    {
        path: "jobs",
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./components/pages/jobs.module */ "./src/app/components/pages/jobs.module.ts")).then(function (module) { return module.JobsModule; });
        },
    },
    {
        path: "login",
        component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    },
    {
        path: "privacy",
        component: _components_privacyTerms_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_3__["PrivacyComponent"],
    },
    {
        path: "terms-and-conditions",
        component: _components_privacyTerms_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsComponent"],
    },
    {
        path: "saved-jobs",
        component: _components_pages_SavedJobsPage_saved_jobs_saved_jobs_component__WEBPACK_IMPORTED_MODULE_6__["SavedJobsComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shell/nav-bar/nav-bar.component */ "./src/app/components/shell/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shell/footer/footer.component */ "./src/app/components/shell/footer/footer.component.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "HackerHunter";
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        } }, directives: [_components_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["html[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 160px; \r\n  background-color: #495057;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #025fce !important;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:active {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsYUFBYSxFQUFFLDRDQUE0QztFQUMzRCx5QkFBeUI7QUFDM0I7O0FBRUEsK0JBQStCOztBQUUvQjtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hc3NldHMvc3R5bGVzaGVldHMvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTYwcHg7IC8qIFNldCB0aGUgZml4ZWQgaGVpZ2h0IG9mIHRoZSBmb290ZXIgaGVyZSAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi8qIE92ZXJyaWRlIEJvb3RzdHJhcCBTdHlsaW5nICovXHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjVmY2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzLFxyXG5idXR0b246YWN0aXZlIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["../assets/stylesheets/app.component.css"],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home/home.module */ "./src/app/components/pages/home/home.module.ts");
/* harmony import */ var _components_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shell/nav-bar/nav-bar.component */ "./src/app/components/shell/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shell/footer/footer.component */ "./src/app/components/shell/footer/footer.component.ts");
/* harmony import */ var _service_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service.interceptor */ "./src/app/service.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_privacyTerms_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/privacyTerms/privacy/privacy.component */ "./src/app/components/privacyTerms/privacy/privacy.component.ts");
/* harmony import */ var _components_privacyTerms_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/privacyTerms/terms-and-conditions/terms-and-conditions.component */ "./src/app/components/privacyTerms/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_auth_accept_terms_accept_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/auth/accept-terms/accept-terms.component */ "./src/app/components/auth/accept-terms/accept-terms.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_auth_email_email_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/auth/email/email.component */ "./src/app/components/auth/email/email.component.ts");
/* harmony import */ var _components_auth_accept_terms_checkbox_accept_terms_checkbox_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/auth/accept-terms-checkbox/accept-terms-checkbox.component */ "./src/app/components/auth/accept-terms-checkbox/accept-terms-checkbox.component.ts");
/* harmony import */ var _components_pages_jobs_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/jobs.module */ "./src/app/components/pages/jobs.module.ts");
/* harmony import */ var _components_pages_SavedJobsPage_saved_jobs_saved_jobs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/SavedJobsPage/saved-jobs/saved-jobs.component */ "./src/app/components/pages/SavedJobsPage/saved-jobs/saved-jobs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_8__["ServiceInterceptor"],
                multi: true,
            },
            _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _components_pages_jobs_module__WEBPACK_IMPORTED_MODULE_23__["JobsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase, "jobfinder"),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _components_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _components_privacyTerms_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyComponent"],
        _components_privacyTerms_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_17__["TermsAndConditionsComponent"],
        _components_auth_accept_terms_accept_terms_component__WEBPACK_IMPORTED_MODULE_19__["AcceptTermsComponent"],
        _components_auth_email_email_component__WEBPACK_IMPORTED_MODULE_21__["EmailComponent"],
        _components_auth_accept_terms_checkbox_accept_terms_checkbox_component__WEBPACK_IMPORTED_MODULE_22__["AcceptTermsCheckboxComponent"],
        _components_pages_SavedJobsPage_saved_jobs_saved_jobs_component__WEBPACK_IMPORTED_MODULE_24__["SavedJobsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _components_pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
        _components_pages_jobs_module__WEBPACK_IMPORTED_MODULE_23__["JobsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
        angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                    _components_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _components_privacyTerms_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyComponent"],
                    _components_privacyTerms_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_17__["TermsAndConditionsComponent"],
                    _components_auth_accept_terms_accept_terms_component__WEBPACK_IMPORTED_MODULE_19__["AcceptTermsComponent"],
                    _components_auth_email_email_component__WEBPACK_IMPORTED_MODULE_21__["EmailComponent"],
                    _components_auth_accept_terms_checkbox_accept_terms_checkbox_component__WEBPACK_IMPORTED_MODULE_22__["AcceptTermsCheckboxComponent"],
                    _components_pages_SavedJobsPage_saved_jobs_saved_jobs_component__WEBPACK_IMPORTED_MODULE_24__["SavedJobsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _components_pages_home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                    _components_pages_jobs_module__WEBPACK_IMPORTED_MODULE_23__["JobsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase, "jobfinder"),
                    angularfire2_database__WEBPACK_IMPORTED_MODULE_14__["AngularFireDatabaseModule"],
                    angularfire2_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _service_interceptor__WEBPACK_IMPORTED_MODULE_8__["ServiceInterceptor"],
                        multi: true,
                    },
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                    _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormArrayName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPanelToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDatepickerMonth"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationEllipsis"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTimepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbToastHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbHighlight"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabTitle"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
    _components_shell_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
    _components_shell_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
    _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
    _components_privacyTerms_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyComponent"],
    _components_privacyTerms_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_17__["TermsAndConditionsComponent"],
    _components_auth_accept_terms_accept_terms_component__WEBPACK_IMPORTED_MODULE_19__["AcceptTermsComponent"],
    _components_auth_email_email_component__WEBPACK_IMPORTED_MODULE_21__["EmailComponent"],
    _components_auth_accept_terms_checkbox_accept_terms_checkbox_component__WEBPACK_IMPORTED_MODULE_22__["AcceptTermsCheckboxComponent"],
    _components_pages_SavedJobsPage_saved_jobs_saved_jobs_component__WEBPACK_IMPORTED_MODULE_24__["SavedJobsComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_25__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_25__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/auth/accept-terms-checkbox/accept-terms-checkbox.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/auth/accept-terms-checkbox/accept-terms-checkbox.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AcceptTermsCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptTermsCheckboxComponent", function() { return AcceptTermsCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AcceptTermsCheckboxComponent = /** @class */ (function () {
    function AcceptTermsCheckboxComponent() {
    }
    AcceptTermsCheckboxComponent.prototype.handleCheckbox = function () {
        this.props.acceptTerms();
    };
    AcceptTermsCheckboxComponent.prototype.ngOnInit = function () { };
    AcceptTermsCheckboxComponent.ɵfac = function AcceptTermsCheckboxComponent_Factory(t) { return new (t || AcceptTermsCheckboxComponent)(); };
    AcceptTermsCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcceptTermsCheckboxComponent, selectors: [["app-accept-terms-checkbox"]], inputs: { props: "props" }, decls: 10, vars: 1, consts: [[1, "accept-terms-checkbox"], ["id", "policy-checkbox", "type", "checkbox", "aria-label", "Checkbox for accepting privacy policy and terms and conditions", 3, "value", "change"], [1, "accept-terms-checkbox--text"], ["routerLink", "/terms-and-conditions", "target", "_blank", "rel", "noopener noreferrer"], ["routerLink", "/privacy", "target", "_blank", "rel", "noopener noreferrer"]], template: function AcceptTermsCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AcceptTermsCheckboxComponent_Template_input_change_1_listener() { return ctx.handleCheckbox(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 I agree to the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms & Conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.props.hasAcceptedTerms);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9hY2NlcHQtdGVybXMtY2hlY2tib3gvYWNjZXB0LXRlcm1zLWNoZWNrYm94LmNvbXBvbmVudC5jc3MifQ== */"] });
    return AcceptTermsCheckboxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcceptTermsCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-accept-terms-checkbox",
                templateUrl: "./accept-terms-checkbox.component.html",
                styleUrls: ["./accept-terms-checkbox.component.css"],
            }]
    }], function () { return []; }, { props: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/auth/accept-terms/accept-terms.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/auth/accept-terms/accept-terms.component.ts ***!
  \************************************************************************/
/*! exports provided: AcceptTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptTermsComponent", function() { return AcceptTermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _accept_terms_checkbox_accept_terms_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../accept-terms-checkbox/accept-terms-checkbox.component */ "./src/app/components/auth/accept-terms-checkbox/accept-terms-checkbox.component.ts");





function AcceptTermsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-accept-terms-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx_r0.props);
} }
var AcceptTermsComponent = /** @class */ (function () {
    function AcceptTermsComponent() {
    }
    AcceptTermsComponent.prototype.handleLoginMethodSelection = function (value) {
        this.props.handleLoginMethodSelection(value);
    };
    AcceptTermsComponent.prototype.getValue = function () {
        return this.props.selection;
    };
    AcceptTermsComponent.prototype.ngOnInit = function () { };
    AcceptTermsComponent.ɵfac = function AcceptTermsComponent_Factory(t) { return new (t || AcceptTermsComponent)(); };
    AcceptTermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcceptTermsComponent, selectors: [["app-accept-terms"]], inputs: { props: "props" }, decls: 22, vars: 1, consts: [[1, "row"], [1, "col"], ["ngbDropdown", "", "id", "login-selection-dropdown", 1, "d-inline-block"], ["ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], ["ngbDropdownMenu", "", "aria-labelledby", "login-selection-dropdown"], ["value", "Email", "ngbDropdownItem", "", 1, "dropdown-item", "accept-terms--dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-envelope-open"], ["value", "Twitter", "ngbDropdownItem", "", 1, "dropdown-item", "accept-terms--dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["value", "Facebook", "ngbDropdownItem", "", 1, "dropdown-item", "accept-terms--dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["value", "Github", "ngbDropdownItem", "", 1, "dropdown-item", "accept-terms--dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-github"], ["value", "Google", "ngbDropdownItem", "", 1, "dropdown-item", "accept-terms--dropdown-item", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-google"], ["id", "accept-terms-checkbox-container", 4, "ngIf"], ["id", "accept-terms-checkbox-container"], [3, "props"]], template: function AcceptTermsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Choose your login method ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptTermsComponent_Template_button_click_6_listener($event) { return ctx.handleLoginMethodSelection($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Email \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptTermsComponent_Template_button_click_9_listener($event) { return ctx.handleLoginMethodSelection($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Twitter \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptTermsComponent_Template_button_click_12_listener($event) { return ctx.handleLoginMethodSelection($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Facebook \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptTermsComponent_Template_button_click_15_listener($event) { return ctx.handleLoginMethodSelection($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Github \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptTermsComponent_Template_button_click_18_listener($event) { return ctx.handleLoginMethodSelection($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Google \u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AcceptTermsComponent_div_21_Template, 2, 1, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.selection);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _accept_terms_checkbox_accept_terms_checkbox_component__WEBPACK_IMPORTED_MODULE_3__["AcceptTermsCheckboxComponent"]], styles: [".accept-terms--dropdown-item[_ngcontent-%COMP%] {\n  width: 233px;\n}\n#accept-terms-checkbox-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin-top: 6%;\n  margin-bottom: 4%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2FjY2VwdC10ZXJtcy9hY2NlcHQtdGVybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2FjY2VwdC10ZXJtcy9hY2NlcHQtdGVybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NlcHQtdGVybXMtLWRyb3Bkb3duLWl0ZW0ge1xuICB3aWR0aDogMjMzcHg7XG59XG4jYWNjZXB0LXRlcm1zLWNoZWNrYm94LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNiU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXX0= */"] });
    return AcceptTermsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcceptTermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-accept-terms",
                templateUrl: "./accept-terms.component.html",
                styleUrls: ["./accept-terms.component.css"],
            }]
    }], function () { return []; }, { props: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/auth/email/email.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/email/email.component.ts ***!
  \**********************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");







var EmailComponent = /** @class */ (function () {
    function EmailComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: "",
            password: "",
        };
    }
    EmailComponent.prototype.redirect = function () {
        return this.authService.isLoggedIn() && this.router.navigate(["/"]);
    };
    EmailComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService
            .signInRegular(this.user.email, this.user.password)
            .then(function (res) {
            _this.redirect();
        })
            .catch(function (err) {
            console.log(err.code);
            if (err.code === "auth/wrong-password")
                alert(err.message);
            if (err.code === "auth/user-not-found")
                alert("No user with that username exists.");
        });
    };
    EmailComponent.prototype.ngOnInit = function () { };
    EmailComponent.ɵfac = function EmailComponent_Factory(t) { return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    EmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailComponent, selectors: [["app-email"]], inputs: { props: "props" }, decls: 11, vars: 3, consts: [[1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "exampleInputPassword1"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "buton", 1, "btn", "btn-primary", "btn-block", 2, "margin-bottom", "20px", 3, "disabled", "click"]], template: function EmailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_3_listener($event) { return ctx.user.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailComponent_Template_button_click_9_listener() { return ctx.signInWithEmail(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Login with Email ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.user.email || !ctx.user.password || !ctx.props.hasAcceptedTerms);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9lbWFpbC9lbWFpbC5jb21wb25lbnQuY3NzIn0= */"] });
    return EmailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-email",
                templateUrl: "./email.component.html",
                styleUrls: ["./email.component.css"],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { props: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-email", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx_r1.props);
} }
function LoginComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_13_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.signInWithFacebook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login with Facebook ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.hasAcceptedTerms);
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.signInWithTwitter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login with Twitter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.hasAcceptedTerms);
} }
function LoginComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.signInWithGithub(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login with Github ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.hasAcceptedTerms);
} }
function LoginComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login with Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r5.hasAcceptedTerms);
} }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: "",
            password: "",
        };
        this.selection = "";
        this.hasAcceptedTerms = false;
        this.props = {
            selection: this.selection,
            acceptTerms: this.acceptTerms,
            hasAcceptedTerms: this.hasAcceptedTerms,
            handleLoginMethodSelection: this.handleLoginMethodSelection,
        };
    }
    LoginComponent.prototype.acceptTerms = function () {
        this.hasAcceptedTerms = !this.hasAcceptedTerms;
        console.log(this.hasAcceptedTerms);
    };
    LoginComponent.prototype.handleLoginMethodSelection = function (value) {
        this.selection = value;
    };
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService
            .signInRegular(this.user.email, this.user.password)
            .then(function (res) {
            _this.redirect();
        })
            .catch(function (err) {
            console.log(err.code);
            if (err.code === "auth/wrong-password")
                alert(err.message);
            if (err.code === "auth/user-not-found")
                alert("No user with that username exists.");
        });
    };
    LoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.authService
            .signInWithTwitter()
            .then(function (res) {
            _this.redirect();
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService
            .signInWithFacebook()
            .then(function (res) {
            _this.redirect();
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService
            .signInWithGoogle()
            .then(function (res) {
            _this.redirect();
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.authService
            .signInWithGithub()
            .then(function (res) {
            _this.redirect();
        })
            .catch(function (err) {
            if (err.code === "auth/account-exists-with-different-credential") {
                alert(err.message);
            }
            else {
                alert("Something went wrong");
            }
        });
    };
    LoginComponent.prototype.redirect = function () {
        return this.authService.isLoggedIn() && this.router.navigate(["/"]);
    };
    // redirect after user logs in
    LoginComponent.prototype.ngOnInit = function () {
        this.redirect();
    };
    LoginComponent.prototype.ngOnChanges = function () {
        this.redirect();
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 6, consts: [[1, "container"], [1, "login__page"], [1, "row"], [1, "card", "col"], [1, "login__card"], [1, "card-block"], ["name", "userform", "method", "post"], ["formCtrl", "ngForm"], [3, "props"], [4, "ngIf"], [1, "form-group"], ["type", "buton", 1, "btn", "btn-block", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["type", "button", 1, "btn", "btn-block", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-github"], ["aria-hidden", "true", 1, "fa", "fa-google"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login Below");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-accept-terms", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 4, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 4, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 4, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 4, 1, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.props);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.selection === "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.selection === "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.selection === "Twitter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.selection === "Github");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.selection === "Google");
        } }, styles: [".login__page[_ngcontent-%COMP%] {\n  padding: 6%;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n.login__page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 10% 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9fcGFnZSB7XG4gIHBhZGRpbmc6IDYlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luX19wYWdlIC5jYXJkIHtcbiAgcGFkZGluZzogMTAlIDglO1xufVxuIl19 */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.css"],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/jobs/all-jobs/all-jobs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/jobs/all-jobs/all-jobs.component.ts ***!
  \****************************************************************/
/*! exports provided: AllJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllJobsComponent", function() { return AllJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






function AllJobsComponent_div_3_li_5_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var requirement_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", requirement_r6, " ");
} }
function AllJobsComponent_div_3_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AllJobsComponent_div_3_li_5_li_4_Template, 2, 1, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r3 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.positions[i_r3].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.positions[i_r3].title, " ", ctx_r1.positions[i_r3].salary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.positions[i_r3].requirements);
} }
function AllJobsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Job Listings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllJobsComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.minimize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Minimize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AllJobsComponent_div_3_li_5_Template, 5, 4, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.positions);
} }
var AllJobsComponent = /** @class */ (function () {
    function AllJobsComponent(jobs) {
        this.jobs = jobs;
        this.positions = [];
    }
    AllJobsComponent.prototype.minimize = function () {
        this.positions = [];
    };
    AllJobsComponent.prototype.getAllJobs = function () {
        var _this = this;
        this.jobs.getAllJobs().subscribe(function (data) {
            var positions = data["positions"];
            var results = [];
            for (var key in positions) {
                var value = positions[key];
                results.push({
                    title: value.title,
                    link: value.link,
                    salary: value.salary,
                    requirements: value.requirements,
                });
            }
            _this.positions = results;
        }, function (err) {
            console.log(err);
            alert("Something went wrong ");
        });
    };
    AllJobsComponent.prototype.ngOnInit = function () { };
    AllJobsComponent.ɵfac = function AllJobsComponent_Factory(t) { return new (t || AllJobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"])); };
    AllJobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllJobsComponent, selectors: [["app-all-jobs"]], decls: 5, vars: 1, consts: [[1, "job-card__fetch", 3, "click"], [4, "ngIf"], ["name", "all-jobs"], [3, "click"], [4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function AllJobsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllJobsComponent_Template_button_click_0_listener() { return ctx.getAllJobs(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Get All Jobs\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllJobsComponent_div_3_Template, 6, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.positions && ctx.positions.length >= 1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@media (min-width: 451px) {\n  .all-jobs[_ngcontent-%COMP%] {\n    padding: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2JzL2FsbC1qb2JzL2FsbC1qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9qb2JzL2FsbC1qb2JzL2FsbC1qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNDUxcHgpIHtcbiAgLmFsbC1qb2JzIHtcbiAgICBwYWRkaW5nOiAxMCU7XG4gIH1cbn1cbiJdfQ== */"] });
    return AllJobsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllJobsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-all-jobs",
                templateUrl: "./all-jobs.component.html",
                styleUrls: ["./all-jobs.component.css"],
            }]
    }], function () { return [{ type: _services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/IndeedPage/indeed-pagination/indeed-pagination.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/pages/IndeedPage/indeed-pagination/indeed-pagination.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IndeedPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndeedPaginationComponent", function() { return IndeedPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var IndeedPaginationComponent = /** @class */ (function () {
    function IndeedPaginationComponent() {
    }
    IndeedPaginationComponent.prototype.previousPage = function () {
        this.props.previousPage();
    };
    IndeedPaginationComponent.prototype.nextPage = function () {
        this.props.nextPage();
    };
    IndeedPaginationComponent.prototype.selectPage = function (page) {
        this.props.selectPage(page);
    };
    IndeedPaginationComponent.prototype.getActivePageClass = function (page) {
        var startAt = this.props.query["page"];
        var pageNumber = startAt == 20 ? 1 : String(startAt / 20);
        var result = "";
        if (page == pageNumber) {
            result = "page-item active";
        }
        else {
            result = "page-item";
        }
        // only show 6 page options for mobile
        if (page >= 7) {
            result = result + " mobile-disabled";
        }
        return result;
    };
    IndeedPaginationComponent.prototype.ngOnInit = function () { };
    IndeedPaginationComponent.ɵfac = function IndeedPaginationComponent_Factory(t) { return new (t || IndeedPaginationComponent)(); };
    IndeedPaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndeedPaginationComponent, selectors: [["app-indeed-pagination"]], inputs: { props: "props" }, decls: 37, vars: 20, consts: [[1, "pagination", "justify-content-center"], [1, "page-item"], ["tabindex", "-1", 1, "page-link", 3, "click"], [1, "page-link", 3, "click"], ["tabindex", "+1", 1, "page-link", 3, "click"]], template: function IndeedPaginationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_button_click_2_listener() { return ctx.previousPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Previous ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_5_listener() { return ctx.selectPage(1); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_8_listener() { return ctx.selectPage(2); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_11_listener() { return ctx.selectPage(3); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_14_listener() { return ctx.selectPage(4); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_17_listener() { return ctx.selectPage(5); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_20_listener() { return ctx.selectPage(6); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_23_listener() { return ctx.selectPage(7); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_26_listener() { return ctx.selectPage(8); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "8");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_29_listener() { return ctx.selectPage(9); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_span_click_32_listener() { return ctx.selectPage(10); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedPaginationComponent_Template_button_click_35_listener() { return ctx.nextPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Next ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(4));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(5));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(6));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(7));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(8));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(9));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getActivePageClass(10));
        } }, styles: ["@media (max-width: 450px) {\n  .page-item.mobile-disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9JbmRlZWRQYWdlL2luZGVlZC1wYWdpbmF0aW9uL2luZGVlZC1wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9JbmRlZWRQYWdlL2luZGVlZC1wYWdpbmF0aW9uL2luZGVlZC1wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnBhZ2UtaXRlbS5tb2JpbGUtZGlzYWJsZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"] });
    return IndeedPaginationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndeedPaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-indeed-pagination",
                templateUrl: "./indeed-pagination.component.html",
                styleUrls: ["./indeed-pagination.component.css"],
            }]
    }], function () { return []; }, { props: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/IndeedPage/indeed-result/indeed-result.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/pages/IndeedPage/indeed-result/indeed-result.component.ts ***!
  \**************************************************************************************/
/*! exports provided: IndeedResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndeedResultComponent", function() { return IndeedResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../save-job/save-job.component */ "./src/app/components/save-job/save-job.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




function IndeedResultComponent_div_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var requirement_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", requirement_r2, " ");
} }
function IndeedResultComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndeedResultComponent_div_7_li_1_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.position.requirements);
} }
var IndeedResultComponent = /** @class */ (function () {
    function IndeedResultComponent() {
    }
    IndeedResultComponent.prototype.ngOnInit = function () { };
    IndeedResultComponent.ɵfac = function IndeedResultComponent_Factory(t) { return new (t || IndeedResultComponent)(); };
    IndeedResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndeedResultComponent, selectors: [["app-indeed-result"]], inputs: { position: "position" }, decls: 8, vars: 4, consts: [[1, "card", "indeed__result"], [1, "card-body"], [3, "position"], [3, "href"], [1, "card-title"], [1, "card-text", "requirements"], [4, "ngIf"], ["class", "requirement", 4, "ngFor", "ngForOf"], [1, "requirement"]], template: function IndeedResultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-save-job", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndeedResultComponent_div_7_Template, 2, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", ctx.position);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.position.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.position.title, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.position.requirements.length >= 1);
        } }, directives: [_save_job_save_job_component__WEBPACK_IMPORTED_MODULE_1__["SaveJobComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".indeed__result[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.indeed__result[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 1.3em;\n}\n\n.indeed__result[_ngcontent-%COMP%]   .requirement[_ngcontent-%COMP%] {\n  list-style: none;\n  color: #000000;\n}\n\n.indeed__result[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9JbmRlZWRQYWdlL2luZGVlZC1yZXN1bHQvaW5kZWVkLXJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9JbmRlZWRQYWdlL2luZGVlZC1yZXN1bHQvaW5kZWVkLXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZGVlZF9fcmVzdWx0IHtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5pbmRlZWRfX3Jlc3VsdCAuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4uaW5kZWVkX19yZXN1bHQgLnJlcXVpcmVtZW50IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uaW5kZWVkX19yZXN1bHQgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"] });
    return IndeedResultComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndeedResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-indeed-result",
                templateUrl: "./indeed-result.component.html",
                styleUrls: ["./indeed-result.component.css"],
            }]
    }], function () { return []; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/IndeedPage/indeed/indeed.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/pages/IndeedPage/indeed/indeed.component.ts ***!
  \************************************************************************/
/*! exports provided: IndeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndeedComponent", function() { return IndeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_search_indeed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search-indeed.service */ "./src/app/services/search-indeed.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _indeed_pagination_indeed_pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../indeed-pagination/indeed-pagination.component */ "./src/app/components/pages/IndeedPage/indeed-pagination/indeed-pagination.component.ts");
/* harmony import */ var _indeed_result_indeed_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../indeed-result/indeed-result.component */ "./src/app/components/pages/IndeedPage/indeed-result/indeed-result.component.ts");







function IndeedComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndeedComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-indeed-result", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var position_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", position_r3);
} }
function IndeedComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndeedComponent_div_30_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.positions);
} }
var IndeedComponent = /** @class */ (function () {
    function IndeedComponent(_indeedSearch) {
        this._indeedSearch = _indeedSearch;
        this.query = {
            type: "",
            salary: "",
            city: "",
            province: "",
            page: 20,
        };
        this.isLoading = false;
        this.props = {
            previousPage: this.previousPage,
            nextPage: this.nextPage,
            selectPage: this.selectPage,
            query: this.query,
        };
    }
    IndeedComponent.prototype.getValue = function (value) {
        return this.query[value];
    };
    IndeedComponent.prototype.handleSearchQuery = function (event) {
        var name = event.target.name;
        var value = event.target.value;
        this.query["" + name] = value;
    };
    IndeedComponent.prototype.previousPage = function () {
        this.clearPositions;
        this.isLoading = true;
        this.query["page"] > 20
            ? (this.query["page"] -= 20)
            : (this.query["page"] = 20);
        this.searchJobsFromIndeed(this.query);
    };
    IndeedComponent.prototype.nextPage = function () {
        this.clearPositions;
        this.isLoading = true;
        this.query["page"] += 20;
        this.searchJobsFromIndeed(this.query);
    };
    IndeedComponent.prototype.selectPage = function (page) {
        this.clearPositions;
        this.isLoading = true;
        this.query["page"] = page * 20;
        this.searchJobsFromIndeed(this.query);
    };
    IndeedComponent.prototype.clearPositions = function () {
        this.positions = [];
    };
    IndeedComponent.prototype.searchJobsFromIndeed = function (event) {
        var _this = this;
        event.preventDefault();
        this.isLoading = true;
        var query = this.query;
        this._indeedSearch.searchJobsFromIndeed(query).subscribe(function (data) {
            var positions = data["positions"];
            var last20Positions = positions.slice(positions.length - 20, positions.length - 1);
            _this.positions = last20Positions;
            _this.isLoading = false;
        }, function (err) {
            console.log(err);
        });
    };
    IndeedComponent.prototype.ngOnInit = function () { };
    IndeedComponent.ɵfac = function IndeedComponent_Factory(t) { return new (t || IndeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_search_indeed_service__WEBPACK_IMPORTED_MODULE_1__["SearchIndeedService"])); };
    IndeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndeedComponent, selectors: [["app-indeed"]], decls: 34, vars: 3, consts: [[1, "container", "indeed__page-container"], [1, "indeed__search-form"], [1, "form-group"], [1, "form-row"], [1, "col"], ["for", "Search by title"], ["type", "text", "id", "searchByTitle", "placeholder", "Search By Title...", "name", "type", 1, "form-control", 3, "value", "change"], ["for", "Search by salary"], ["type", "text", "id", "searchBySalary", "placeholder", "Search By Salary...", "name", "salary", 1, "form-control", 3, "value", "change"], [1, "col-4"], ["for", "Search by City"], ["type", "text", "placeholder", "City", "name", "city", 1, "form-control", 3, "change"], ["for", "Search by Province"], ["type", "text", "placeholder", "Province", "name", "province", 1, "form-control", 3, "change"], [1, "col-12"], ["type", "submit", 1, "btn", "btn-outline-success", "indeed__search-btn", 3, "click"], [1, "row"], ["class", "spinner-border text-success indeed__spinner", "role", "status", 4, "ngIf"], [4, "ngIf"], [3, "props"], ["role", "status", 1, "spinner-border", "text-success", "indeed__spinner"], [1, "sr-only"], [4, "ngFor", "ngForOf"], [3, "position"]], template: function IndeedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Indeed for jobs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function IndeedComponent_Template_input_value_9_listener() { return ctx.getValue("type"); })("change", function IndeedComponent_Template_input_change_9_listener($event) { return ctx.handleSearchQuery($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Salary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function IndeedComponent_Template_input_value_13_listener() { return ctx.getValue("type"); })("change", function IndeedComponent_Template_input_change_13_listener($event) { return ctx.handleSearchQuery($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "City");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndeedComponent_Template_input_change_18_listener($event) { return ctx.handleSearchQuery($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Province");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IndeedComponent_Template_input_change_22_listener($event) { return ctx.handleSearchQuery($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndeedComponent_Template_button_click_25_listener($event) { return ctx.searchJobsFromIndeed($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IndeedComponent_div_29_Template, 3, 0, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, IndeedComponent_div_30_Template, 2, 1, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-indeed-pagination", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.positions && ctx.positions.length >= 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("props", ctx.props);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _indeed_pagination_indeed_pagination_component__WEBPACK_IMPORTED_MODULE_3__["IndeedPaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _indeed_result_indeed_result_component__WEBPACK_IMPORTED_MODULE_4__["IndeedResultComponent"]], styles: [".indeed__page-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.indeed__spinner[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  width: 60px;\n  height: 60px;\n}\n\n.indeed__search-form[_ngcontent-%COMP%] {\n  padding: 2% 4% 4% 4%;\n}\n.indeed__search-form[_ngcontent-%COMP%]   .form-row[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n.indeed__search-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9JbmRlZWRQYWdlL2luZGVlZC9pbmRlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBLFNBQVM7QUFDVDtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQSxhQUFhIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9JbmRlZWRQYWdlL2luZGVlZC9pbmRlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmRlZWRfX3BhZ2UtY29udGFpbmVyIGgyIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG4uaW5kZWVkX19zcGlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG4vKiBGb3JtICovXG4uaW5kZWVkX19zZWFyY2gtZm9ybSB7XG4gIHBhZGRpbmc6IDIlIDQlIDQlIDQlO1xufVxuLmluZGVlZF9fc2VhcmNoLWZvcm0gLmZvcm0tcm93IHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuXG4uaW5kZWVkX19zZWFyY2gtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuLyogRW5kIGZvcm0gKi9cbiJdfQ== */"] });
    return IndeedComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-indeed",
                templateUrl: "./indeed.component.html",
                styleUrls: ["./indeed.component.css"],
            }]
    }], function () { return [{ type: src_app_services_search_indeed_service__WEBPACK_IMPORTED_MODULE_1__["SearchIndeedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/SavedJobsPage/saved-jobs/saved-jobs.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/SavedJobsPage/saved-jobs/saved-jobs.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SavedJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavedJobsComponent", function() { return SavedJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_save_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function SavedJobsComponent_div_18_li_2_span_5_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavedJobsComponent_div_18_li_2_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r5.removeJob(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SavedJobsComponent_div_18_li_2_ul_12_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var requirement_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", requirement_r8, " ");
} }
function SavedJobsComponent_div_18_li_2_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SavedJobsComponent_div_18_li_2_ul_12_li_1_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var job_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", job_r2.requirements);
} }
function SavedJobsComponent_div_18_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavedJobsComponent_div_18_li_2_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var job_r2 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.confirmDelete(job_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SavedJobsComponent_div_18_li_2_span_5_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SavedJobsComponent_div_18_li_2_ul_12_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var job_r2 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.confirmedDelete && ctx_r1.jobId === job_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", job_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r2.salary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", job_r2.requirements && job_r2.requirements.length >= 1);
} }
function SavedJobsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SavedJobsComponent_div_18_li_2_Template, 13, 5, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filteredJobs);
} }
var SavedJobsComponent = /** @class */ (function () {
    function SavedJobsComponent(_jobService) {
        this._jobService = _jobService;
        this.confirmedDelete = false;
    }
    SavedJobsComponent.prototype.getSavedJobs = function () {
        var _this = this;
        var jobs = [];
        this._jobService.getSavedJobs().subscribe(function (data) {
            data &&
                Object.keys(data).forEach(function (key) {
                    var item = data[key];
                    item["id"] = key;
                    jobs.push(item);
                });
            _this.allJobs = jobs;
            _this.filteredJobs = jobs;
        }, function (err) { return console.log(err); });
    };
    SavedJobsComponent.prototype.removeJob = function () {
        var _this = this;
        this._jobService.removeJob(this.jobId).subscribe(function (data) {
            _this.getSavedJobs();
            _this.confirmedDelete = false;
        }, function (err) { return console.log(err); });
    };
    SavedJobsComponent.prototype.confirmDelete = function (id) {
        this.confirmedDelete = true;
        this.jobId = id;
    };
    SavedJobsComponent.prototype.filterJobs = function (filter) {
        if (filter === "allJobs") {
            this.filteredJobs = this.allJobs;
        }
        else {
            this.filteredJobs = this.allJobs.filter(function (job) {
                return job["link"].includes(filter);
            });
        }
    };
    SavedJobsComponent.prototype.ngOnInit = function () {
        this.getSavedJobs();
    };
    SavedJobsComponent.ɵfac = function SavedJobsComponent_Factory(t) { return new (t || SavedJobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_save_job_service__WEBPACK_IMPORTED_MODULE_1__["SaveJobService"])); };
    SavedJobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavedJobsComponent, selectors: [["app-saved-jobs"]], decls: 20, vars: 2, consts: [[1, "container-fluid", "saved-jobs-page"], [1, "left-panel"], [1, "card"], [1, "card-body"], [1, "card-body", "job-filter", 3, "click"], [1, "results"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "fa", "fa-heart", "float-right", "secondary-font"], ["class", "btn btn-outline-danger confirm-delete", 3, "click", 4, "ngIf"], [3, "href"], [1, "card-title"], [1, "card-subtitle"], [1, "btn", "btn-outline-danger", "confirm-delete", 3, "click"], [1, "card-text"]], template: function SavedJobsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavedJobsComponent_Template_div_click_6_listener() { return ctx.filterJobs("allJobs"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " All ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavedJobsComponent_Template_div_click_9_listener() { return ctx.filterJobs("remoteok"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Remote Ok ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavedJobsComponent_Template_div_click_12_listener() { return ctx.filterJobs("indeed"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Indeed ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SavedJobsComponent_Template_div_click_15_listener() { return ctx.filterJobs("linkedIn"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Linked In ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SavedJobsComponent_div_18_Template, 3, 1, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.allJobs && ctx.allJobs.length, " jobs saved");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredJobs && ctx.filteredJobs.length >= 1);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".saved-jobs-page[_ngcontent-%COMP%] {\n  display: grid;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 4%;\n  margin-bottom: 3%;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .saved-jobs-page[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   .fa-heart[_ngcontent-%COMP%]:hover {\n  color: #f03935;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   .confirm-delete[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 5% auto;\n}\n.saved-jobs-page[_ngcontent-%COMP%]   .job-filter[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n@media (max-width: 450px) {\n  .saved-jobs-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-top: 5%;\n  }\n  .saved-jobs-page[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .saved-jobs-page[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n    margin-top: 5%;\n  }\n}\n@media (min-width: 451px) {\n  .saved-jobs-page[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 10fr;\n    padding-top: 5%;\n  }\n  .saved-jobs-page[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n  .saved-jobs-page[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9TYXZlZEpvYnNQYWdlL3NhdmVkLWpvYnMvc2F2ZWQtam9icy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGO0FBQ0E7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL1NhdmVkSm9ic1BhZ2Uvc2F2ZWQtam9icy9zYXZlZC1qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZWQtam9icy1wYWdlIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5zYXZlZC1qb2JzLXBhZ2UgLmNhcmQge1xuICBwYWRkaW5nOiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG4uc2F2ZWQtam9icy1wYWdlIC5jYXJkLXRpdGxlLFxuLnNhdmVkLWpvYnMtcGFnZSAuY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufVxuLnNhdmVkLWpvYnMtcGFnZSAuY2FyZCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnNhdmVkLWpvYnMtcGFnZSB1bCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2F2ZWQtam9icy1wYWdlIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zYXZlZC1qb2JzLXBhZ2UgLmZhLWhlYXJ0OmhvdmVyIHtcbiAgY29sb3I6ICNmMDM5MzU7XG59XG4uc2F2ZWQtam9icy1wYWdlIC5jb25maXJtLWRlbGV0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUlIGF1dG87XG59XG4uc2F2ZWQtam9icy1wYWdlIC5qb2ItZmlsdGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5zYXZlZC1qb2JzLXBhZ2Uge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgfVxuICAuc2F2ZWQtam9icy1wYWdlIC5sZWZ0LXBhbmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnNhdmVkLWpvYnMtcGFnZSAucmVzdWx0cyB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NTFweCkge1xuICAuc2F2ZWQtam9icy1wYWdlIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxMGZyO1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgfVxuICAuc2F2ZWQtam9icy1wYWdlIC5sZWZ0LXBhbmVsIHtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgfVxuICAuc2F2ZWQtam9icy1wYWdlIC5yZXN1bHRzIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgfVxufVxuIl19 */"] });
    return SavedJobsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavedJobsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-saved-jobs",
                templateUrl: "./saved-jobs.component.html",
                styleUrls: ["./saved-jobs.component.css"],
            }]
    }], function () { return [{ type: src_app_services_save_job_service__WEBPACK_IMPORTED_MODULE_1__["SaveJobService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/home/home-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/pages/home/home-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/components/pages/home/home.component.ts");





var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return HomeRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [["id", "mainContent"], [1, "container"], [1, "row", "justify-content-center", "py-5"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-search-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"]], styles: ["#mainContent[_ngcontent-%COMP%] {\n  min-height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbkNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbn1cbiJdfQ== */"] });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/home/home.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/pages/home/home.module.ts ***!
  \******************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/components/pages/home/home-routing.module.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]]] });
    return HomeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/pages/jobPage/jobs/jobs.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/jobPage/jobs/jobs.component.ts ***!
  \*****************************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    JobsComponent.ɵfac = function JobsComponent_Factory(t) { return new (t || JobsComponent)(); };
    JobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobsComponent, selectors: [["app-jobs"]], decls: 18, vars: 0, consts: [[1, "all-jobs", "container-fluid"], [1, "job-cards"], ["routerLink", "/jobs/all-jobs"], [1, "job-card"], [1, "title"], ["routerLink", "/jobs/remoteok"], ["routerLink", "/jobs/indeed"], ["routerLink", "/jobs/linked-in"]], template: function JobsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " All Jobs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Remote Ok ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Indeed ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Linked In ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".job-cards[_ngcontent-%COMP%] {\n  display: grid;\n}\n.job-card[_ngcontent-%COMP%] {\n  height: 200px;\n  max-width: 100%;\n  background: #ffffff;\n  border: 0px solid #000000;\n  border-radius: 8px;\n  margin-top: 5%;\n  box-shadow: 1px 5px 8px -2px rgba(0, 0, 0, 0.37);\n}\n.job-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding: 5%;\n  color: #000;\n  font-size: 1.3em;\n  font-weight: 500;\n}\n.job-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: transparent;\n}\n.job-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.job-cards[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n@media (max-width: 789px) {\n  .job-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    padding: 2%;\n  }\n  .job-card[_ngcontent-%COMP%] {\n    margin-left: 4%;\n  }\n}\n@media (min-width: 790px) {\n  .job-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n    padding: 2%;\n  }\n  .job-card[_ngcontent-%COMP%] {\n    margin-left: 4%;\n  }\n}\n@media (max-width: 491px) {\n  .job-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9qb2JQYWdlL2pvYnMvam9icy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFHZCxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxrQ0FBa0M7SUFDbEMsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2pvYlBhZ2Uvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuam9iLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5qb2ItY2FyZCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggNXB4IDhweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDVweCA4cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xuICBib3gtc2hhZG93OiAxcHggNXB4IDhweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XG59XG4uam9iLWNhcmQgLnRpdGxlIHtcbiAgcGFkZGluZzogNSU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmpvYi1jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5qb2ItY2FyZCBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5qb2ItY2FyZHMgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODlweCkge1xuICAuam9iLWNhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cbiAgLmpvYi1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3OTBweCkge1xuICAuam9iLWNhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG4gIC5qb2ItY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDkxcHgpIHtcbiAgLmpvYi1jYXJkcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdfQ== */"] });
    return JobsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-jobs',
                templateUrl: './jobs.component.html',
                styleUrls: ['./jobs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/jobs-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/jobs-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: JobsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsRoutingModule", function() { return JobsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _linkedInPage_linked_in_linked_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkedInPage/linked-in/linked-in.component */ "./src/app/components/pages/linkedInPage/linked-in/linked-in.component.ts");
/* harmony import */ var _jobs_all_jobs_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobs/all-jobs/all-jobs.component */ "./src/app/components/jobs/all-jobs/all-jobs.component.ts");
/* harmony import */ var _jobPage_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobPage/jobs/jobs.component */ "./src/app/components/pages/jobPage/jobs/jobs.component.ts");
/* harmony import */ var _remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remoteokPage/remoteok/remoteok.component */ "./src/app/components/pages/remoteokPage/remoteok/remoteok.component.ts");
/* harmony import */ var _IndeedPage_indeed_indeed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IndeedPage/indeed/indeed.component */ "./src/app/components/pages/IndeedPage/indeed/indeed.component.ts");









var routes = [
    { path: "", component: _jobPage_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_4__["JobsComponent"] },
    {
        path: "jobs/all-jobs",
        component: _jobs_all_jobs_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"],
    },
    {
        path: "jobs/remoteok",
        component: _remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_5__["RemoteokComponent"],
    },
    {
        path: "jobs/indeed",
        component: _IndeedPage_indeed_indeed_component__WEBPACK_IMPORTED_MODULE_6__["IndeedComponent"],
    },
    {
        path: "jobs/linked-in",
        component: _linkedInPage_linked_in_linked_in_component__WEBPACK_IMPORTED_MODULE_2__["LinkedInComponent"],
    },
];
var JobsRoutingModule = /** @class */ (function () {
    function JobsRoutingModule() {
    }
    JobsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JobsRoutingModule });
    JobsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JobsRoutingModule_Factory(t) { return new (t || JobsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return JobsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/pages/jobs.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/pages/jobs.module.ts ***!
  \*************************************************/
/*! exports provided: JobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _jobPage_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jobPage/jobs/jobs.component */ "./src/app/components/pages/jobPage/jobs/jobs.component.ts");
/* harmony import */ var _jobs_all_jobs_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jobs/all-jobs/all-jobs.component */ "./src/app/components/jobs/all-jobs/all-jobs.component.ts");
/* harmony import */ var _remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remoteokPage/remoteok/remoteok.component */ "./src/app/components/pages/remoteokPage/remoteok/remoteok.component.ts");
/* harmony import */ var _remoteokPage_remoteok_form_remoteok_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remoteokPage/remoteok-form/remoteok-form.component */ "./src/app/components/pages/remoteokPage/remoteok-form/remoteok-form.component.ts");
/* harmony import */ var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs-routing.module */ "./src/app/components/pages/jobs-routing.module.ts");
/* harmony import */ var _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../save-job/save-job.component */ "./src/app/components/save-job/save-job.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _search_bar_filter_search_bar_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search-bar-filter/search-bar-filter.component */ "./src/app/components/search-bar-filter/search-bar-filter.component.ts");
/* harmony import */ var _IndeedPage_indeed_indeed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IndeedPage/indeed/indeed.component */ "./src/app/components/pages/IndeedPage/indeed/indeed.component.ts");
/* harmony import */ var _IndeedPage_indeed_pagination_indeed_pagination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./IndeedPage/indeed-pagination/indeed-pagination.component */ "./src/app/components/pages/IndeedPage/indeed-pagination/indeed-pagination.component.ts");
/* harmony import */ var _IndeedPage_indeed_result_indeed_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IndeedPage/indeed-result/indeed-result.component */ "./src/app/components/pages/IndeedPage/indeed-result/indeed-result.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _linkedInPage_linked_in_form_linked_in_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./linkedInPage/linked-in-form/linked-in-form.component */ "./src/app/components/pages/linkedInPage/linked-in-form/linked-in-form.component.ts");
/* harmony import */ var _linkedInPage_linked_in_linked_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./linkedInPage/linked-in/linked-in.component */ "./src/app/components/pages/linkedInPage/linked-in/linked-in.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



















var JobsModule = /** @class */ (function () {
    function JobsModule() {
    }
    JobsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JobsModule });
    JobsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JobsModule_Factory(t) { return new (t || JobsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_6__["JobsRoutingModule"]]] });
    return JobsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JobsModule, { declarations: [_jobPage_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__["JobsComponent"],
        _linkedInPage_linked_in_linked_in_component__WEBPACK_IMPORTED_MODULE_15__["LinkedInComponent"],
        _jobs_all_jobs_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"],
        _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_7__["SaveJobComponent"],
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
        _search_bar_filter_search_bar_filter_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarFilterComponent"],
        _remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_4__["RemoteokComponent"],
        _remoteokPage_remoteok_form_remoteok_form_component__WEBPACK_IMPORTED_MODULE_5__["RemoteokFormComponent"],
        _IndeedPage_indeed_indeed_component__WEBPACK_IMPORTED_MODULE_10__["IndeedComponent"],
        _IndeedPage_indeed_pagination_indeed_pagination_component__WEBPACK_IMPORTED_MODULE_11__["IndeedPaginationComponent"],
        _IndeedPage_indeed_result_indeed_result_component__WEBPACK_IMPORTED_MODULE_12__["IndeedResultComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _linkedInPage_linked_in_form_linked_in_form_component__WEBPACK_IMPORTED_MODULE_14__["LinkedInFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_6__["JobsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _jobPage_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__["JobsComponent"],
                    _linkedInPage_linked_in_linked_in_component__WEBPACK_IMPORTED_MODULE_15__["LinkedInComponent"],
                    _jobs_all_jobs_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"],
                    _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_7__["SaveJobComponent"],
                    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                    _search_bar_filter_search_bar_filter_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarFilterComponent"],
                    _remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_4__["RemoteokComponent"],
                    _remoteokPage_remoteok_form_remoteok_form_component__WEBPACK_IMPORTED_MODULE_5__["RemoteokFormComponent"],
                    _IndeedPage_indeed_indeed_component__WEBPACK_IMPORTED_MODULE_10__["IndeedComponent"],
                    _IndeedPage_indeed_pagination_indeed_pagination_component__WEBPACK_IMPORTED_MODULE_11__["IndeedPaginationComponent"],
                    _IndeedPage_indeed_result_indeed_result_component__WEBPACK_IMPORTED_MODULE_12__["IndeedResultComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                    _linkedInPage_linked_in_form_linked_in_form_component__WEBPACK_IMPORTED_MODULE_14__["LinkedInFormComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_6__["JobsRoutingModule"]],
                exports: [],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_l"], _jobPage_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__["JobsComponent"],
    _linkedInPage_linked_in_linked_in_component__WEBPACK_IMPORTED_MODULE_15__["LinkedInComponent"],
    _jobs_all_jobs_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"],
    _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_7__["SaveJobComponent"],
    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
    _search_bar_filter_search_bar_filter_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarFilterComponent"],
    _remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_4__["RemoteokComponent"],
    _remoteokPage_remoteok_form_remoteok_form_component__WEBPACK_IMPORTED_MODULE_5__["RemoteokFormComponent"],
    _IndeedPage_indeed_indeed_component__WEBPACK_IMPORTED_MODULE_10__["IndeedComponent"],
    _IndeedPage_indeed_pagination_indeed_pagination_component__WEBPACK_IMPORTED_MODULE_11__["IndeedPaginationComponent"],
    _IndeedPage_indeed_result_indeed_result_component__WEBPACK_IMPORTED_MODULE_12__["IndeedResultComponent"],
    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
    _linkedInPage_linked_in_form_linked_in_form_component__WEBPACK_IMPORTED_MODULE_14__["LinkedInFormComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_4__["RemoteokComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_l"], _jobPage_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_2__["JobsComponent"],
    _linkedInPage_linked_in_linked_in_component__WEBPACK_IMPORTED_MODULE_15__["LinkedInComponent"],
    _jobs_all_jobs_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"],
    _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_7__["SaveJobComponent"],
    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
    _search_bar_filter_search_bar_filter_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarFilterComponent"],
    _remoteokPage_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_4__["RemoteokComponent"],
    _remoteokPage_remoteok_form_remoteok_form_component__WEBPACK_IMPORTED_MODULE_5__["RemoteokFormComponent"],
    _IndeedPage_indeed_indeed_component__WEBPACK_IMPORTED_MODULE_10__["IndeedComponent"],
    _IndeedPage_indeed_pagination_indeed_pagination_component__WEBPACK_IMPORTED_MODULE_11__["IndeedPaginationComponent"],
    _IndeedPage_indeed_result_indeed_result_component__WEBPACK_IMPORTED_MODULE_12__["IndeedResultComponent"],
    _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
    _linkedInPage_linked_in_form_linked_in_form_component__WEBPACK_IMPORTED_MODULE_14__["LinkedInFormComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/components/pages/linkedInPage/linked-in-form/linked-in-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/pages/linkedInPage/linked-in-form/linked-in-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: LinkedInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedInFormComponent", function() { return LinkedInFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_search_linked_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search-linked-in.service */ "./src/app/services/search-linked-in.service.ts");




var LinkedInFormComponent = /** @class */ (function () {
    // constructor() {}
    function LinkedInFormComponent(_linkedIn) {
        this._linkedIn = _linkedIn;
        this.query = "";
    }
    LinkedInFormComponent.prototype.handleSearchQuery = function (value) {
        this.query = value;
    };
    LinkedInFormComponent.prototype.searchJobs = function (event) {
        event.preventDefault();
        // this.searchJobsFromLinkedIn(this.query);
    };
    LinkedInFormComponent.prototype.ngOnInit = function () { };
    LinkedInFormComponent.ɵfac = function LinkedInFormComponent_Factory(t) { return new (t || LinkedInFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_search_linked_in_service__WEBPACK_IMPORTED_MODULE_1__["SearchLinkedInService"])); };
    LinkedInFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkedInFormComponent, selectors: [["app-linked-in-form"]], inputs: { searchJobsFromLinkedIn: "searchJobsFromLinkedIn" }, decls: 9, vars: 1, consts: [[1, "container", "linked-in__search-form", 3, "submit"], [1, "form-group"], [1, "form-row"], ["for", "Search by title"], ["type", "text", "id", "searchByTitle", "placeholder", "Search By Title...", "name", "type", 1, "form-control", 3, "value", "change"], ["type", "submit", 1, "btn", "btn-outline-success", "indeed__search-btn", 3, "click"]], template: function LinkedInFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LinkedInFormComponent_Template_form_submit_0_listener($event) { return ctx.searchJobs($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LinkedInFormComponent_Template_input_change_5_listener($event) { return ctx.handleSearchQuery($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkedInFormComponent_Template_button_click_7_listener() { return ctx.searchJobsFromLinkedIn(ctx.query); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.query);
        } }, styles: [".linked-in__search-form[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  padding: 4%;\n}\n.linked-in__search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9saW5rZWRJblBhZ2UvbGlua2VkLWluLWZvcm0vbGlua2VkLWluLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbGlua2VkSW5QYWdlL2xpbmtlZC1pbi1mb3JtL2xpbmtlZC1pbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlua2VkLWluX19zZWFyY2gtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBwYWRkaW5nOiA0JTtcbn1cbi5saW5rZWQtaW5fX3NlYXJjaC1mb3JtIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG4iXX0= */"] });
    return LinkedInFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkedInFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-linked-in-form",
                templateUrl: "./linked-in-form.component.html",
                styleUrls: ["./linked-in-form.component.css"],
            }]
    }], function () { return [{ type: src_app_services_search_linked_in_service__WEBPACK_IMPORTED_MODULE_1__["SearchLinkedInService"] }]; }, { searchJobsFromLinkedIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/linkedInPage/linked-in/linked-in.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/pages/linkedInPage/linked-in/linked-in.component.ts ***!
  \********************************************************************************/
/*! exports provided: LinkedInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedInComponent", function() { return LinkedInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_search_linked_in_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/search-linked-in.service */ "./src/app/services/search-linked-in.service.ts");
/* harmony import */ var _linked_in_form_linked_in_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../linked-in-form/linked-in-form.component */ "./src/app/components/pages/linkedInPage/linked-in-form/linked-in-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../save-job/save-job.component */ "./src/app/components/save-job/save-job.component.ts");







function LinkedInComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LinkedInComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-save-job", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var position_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", position_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", position_r3);
} }
function LinkedInComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LinkedInComponent_div_9_div_1_Template, 7, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.positions);
} }
var LinkedInComponent = /** @class */ (function () {
    function LinkedInComponent(_linkedIn) {
        var _this = this;
        this._linkedIn = _linkedIn;
        this.isLoading = false;
        this.searchJobsFromLinkedIn = function (query) {
            _this.isLoading = true;
            _this._linkedIn.searchJobsFromLinkedIn(query).subscribe(function (data) {
                _this.isLoading = false;
                _this.positions = data["positions"];
            }, function (err) { return console.log(err); });
        };
    }
    LinkedInComponent.prototype.minimize = function () {
        this.positions = [];
    };
    LinkedInComponent.prototype.ngOnInit = function () { };
    LinkedInComponent.ɵfac = function LinkedInComponent_Factory(t) { return new (t || LinkedInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_search_linked_in_service__WEBPACK_IMPORTED_MODULE_1__["SearchLinkedInService"])); };
    LinkedInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkedInComponent, selectors: [["app-linked-in"]], decls: 10, vars: 3, consts: [[1, "container", "linked-in__page-container"], [3, "searchJobsFromLinkedIn"], [1, "row"], [1, "col-12"], ["class", "spinner-border text-success linked-in__spinner", "role", "status", 4, "ngIf"], [4, "ngIf"], ["role", "status", 1, "spinner-border", "text-success", "linked-in__spinner"], [1, "sr-only"], [4, "ngFor", "ngForOf"], [1, "card", "linked-in__result"], [1, "card-body"], [1, "card-title"], ["target", "_blank", "rel", "noopener noreferrer", 1, "primary-font", 3, "href"], [3, "position"]], template: function LinkedInComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search Linked In for Jobs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-linked-in-form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LinkedInComponent_div_6_Template, 3, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LinkedInComponent_div_9_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchJobsFromLinkedIn", ctx.searchJobsFromLinkedIn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.positions && ctx.positions.length >= 1);
        } }, directives: [_linked_in_form_linked_in_form_component__WEBPACK_IMPORTED_MODULE_2__["LinkedInFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _save_job_save_job_component__WEBPACK_IMPORTED_MODULE_4__["SaveJobComponent"]], styles: [".linked-in__page-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 3% auto;\n}\n.linked-in__result[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9saW5rZWRJblBhZ2UvbGlua2VkLWluL2xpbmtlZC1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9saW5rZWRJblBhZ2UvbGlua2VkLWluL2xpbmtlZC1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmtlZC1pbl9fcGFnZS1jb250YWluZXIgaDEge1xuICBtYXJnaW46IDMlIGF1dG87XG59XG4ubGlua2VkLWluX19yZXN1bHQge1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4iXX0= */"] });
    return LinkedInComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinkedInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-linked-in",
                templateUrl: "./linked-in.component.html",
                styleUrls: ["./linked-in.component.css"],
            }]
    }], function () { return [{ type: src_app_services_search_linked_in_service__WEBPACK_IMPORTED_MODULE_1__["SearchLinkedInService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/remoteokPage/remoteok-form/remoteok-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/pages/remoteokPage/remoteok-form/remoteok-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: RemoteokFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteokFormComponent", function() { return RemoteokFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remoteok/remoteok.component */ "./src/app/components/pages/remoteokPage/remoteok/remoteok.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





function RemoteokFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var RemoteokFormComponent = /** @class */ (function () {
    function RemoteokFormComponent(_remoteOk) {
        this._remoteOk = _remoteOk;
        this.isLoading = false;
        this.query = "";
    }
    RemoteokFormComponent.prototype.ngOnInit = function () { };
    RemoteokFormComponent.prototype.handleSearchQuery = function (event) {
        var value = event.target.value;
        this.query = value;
    };
    RemoteokFormComponent.prototype.searchJobsFromRemoteok = function (event, query) {
        event.preventDefault();
        this._remoteOk.searchJobsFromRemoteok(query);
    };
    RemoteokFormComponent.ɵfac = function RemoteokFormComponent_Factory(t) { return new (t || RemoteokFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_1__["RemoteokComponent"])); };
    RemoteokFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteokFormComponent, selectors: [["app-remoteok-form"]], inputs: { isLoading: "isLoading" }, decls: 12, vars: 2, consts: [[1, "container", "remoteok__search-form"], [1, "form-group"], [1, "form-row"], ["for", "Search by title"], ["type", "text", "id", "searchByTitle", "placeholder", "Search By Title...", "name", "type", 1, "form-control", 3, "value", "change"], ["type", "submit", 1, "btn", "btn-outline-success", "indeed__search-btn", 3, "click"], [1, "row"], [1, "col-12"], ["class", "spinner-border text-success remoteok__spinner", "role", "status", 4, "ngIf"], ["role", "status", 1, "spinner-border", "text-success", "remoteok__spinner"], [1, "sr-only"]], template: function RemoteokFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RemoteokFormComponent_Template_input_change_5_listener($event) { return ctx.handleSearchQuery($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteokFormComponent_Template_button_click_7_listener($event) { return ctx.searchJobsFromRemoteok($event, ctx.query); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Search ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RemoteokFormComponent_div_11_Template, 3, 0, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.query);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".remoteok__search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n}\n\n.remoteok__spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9yZW1vdGVva1BhZ2UvcmVtb3Rlb2stZm9ybS9yZW1vdGVvay1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9yZW1vdGVva1BhZ2UvcmVtb3Rlb2stZm9ybS9yZW1vdGVvay1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVtb3Rlb2tfX3NlYXJjaC1mb3JtIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5yZW1vdGVva19fc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */"] });
    return RemoteokFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteokFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-remoteok-form",
                templateUrl: "./remoteok-form.component.html",
                styleUrls: ["./remoteok-form.component.css"],
            }]
    }], function () { return [{ type: _remoteok_remoteok_component__WEBPACK_IMPORTED_MODULE_1__["RemoteokComponent"] }]; }, { isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/remoteokPage/remoteok/remoteok.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/pages/remoteokPage/remoteok/remoteok.component.ts ***!
  \******************************************************************************/
/*! exports provided: RemoteokComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteokComponent", function() { return RemoteokComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");
/* harmony import */ var src_app_services_search_remoteok_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search-remoteok.service */ "./src/app/services/search-remoteok.service.ts");






function RemoteokComponent_div_5_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteokComponent_div_5_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteokComponent_div_5_div_20_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-save-job", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var position_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", position_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", position_r11.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r11.title, " ");
} }
function RemoteokComponent_div_5_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RemoteokComponent_div_5_div_20_li_1_Template, 6, 3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.positions);
} }
function RemoteokComponent_div_5_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteokComponent_div_5_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteokComponent_div_5_div_32_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tag_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r13, " ");
} }
function RemoteokComponent_div_5_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RemoteokComponent_div_5_div_32_li_1_Template, 4, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.tags);
} }
function RemoteokComponent_div_5_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteokComponent_div_5_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteokComponent_div_5_div_44_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var category_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r15, " ");
} }
function RemoteokComponent_div_5_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RemoteokComponent_div_5_div_44_li_1_Template, 4, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.categories);
} }
function RemoteokComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Positions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteokComponent_div_5_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.toggleShowItem("Positions"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RemoteokComponent_div_5_div_17_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RemoteokComponent_div_5_div_18_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RemoteokComponent_div_5_div_20_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tags ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteokComponent_div_5_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.toggleShowItem("Tags"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RemoteokComponent_div_5_div_29_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RemoteokComponent_div_5_div_30_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RemoteokComponent_div_5_div_32_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteokComponent_div_5_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.toggleShowItem("Categories"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RemoteokComponent_div_5_div_41_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RemoteokComponent_div_5_div_42_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RemoteokComponent_div_5_div_44_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.siteName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ( ", ctx_r0.positions.length, " results ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPositions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showPositions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPositions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ( ", ctx_r0.tags.length, " results ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ( ", ctx_r0.categories.length, " results ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showCategories);
} }
var RemoteokComponent = /** @class */ (function () {
    function RemoteokComponent(_jobService, _searchRemote) {
        this._jobService = _jobService;
        this._searchRemote = _searchRemote;
        this.positions = [];
        this.tags = [];
        this.categories = [];
        this.siteName = "";
        this.description = "";
        this.showPositions = false;
        this.showTags = false;
        this.showlocations = false;
        this.showCategories = false;
        this.isLoading = false;
    }
    RemoteokComponent.prototype.minimize = function () {
        this.positions = [];
    };
    RemoteokComponent.prototype.getJobsFromRemoteok = function () {
        var _this = this;
        this._jobService.getAllJobs().subscribe(function (data) {
            _this.positions.push(data["remoteok"]["positions"]);
            _this.tags.push(data["remoteok"]["tags"]);
            _this.categories.push(data["remoteok"]["categories"]);
            _this.siteName = data["remoteok"]["siteName"];
            _this.description = data["remoteok"]["description"];
        }, function (err) {
            console.log(err);
            alert("Something went wrong");
        });
    };
    RemoteokComponent.prototype.searchJobsFromRemoteok = function (query) {
        var _this = this;
        this.isLoading = true;
        this._searchRemote.searchJobsFromRemoteok(query).subscribe(function (data) {
            _this.isLoading = false;
            _this.positions = data["positions"];
            _this.tags = data["tags"];
            _this.categories = data["categories"];
            var sitename = data["siteName"];
            sitename = sitename.slice(0, sitename.indexOf("jobwork") + 3);
            _this.siteName = sitename.replace("®", "® - ");
            _this.description = data["description"];
        }, function (err) { return console.log(err); });
    };
    RemoteokComponent.prototype.toggleShowItem = function (item) {
        this["show" + item] = !this["show" + item];
    };
    RemoteokComponent.prototype.ngOnInit = function () { };
    RemoteokComponent.ɵfac = function RemoteokComponent_Factory(t) { return new (t || RemoteokComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_search_remoteok_service__WEBPACK_IMPORTED_MODULE_2__["SearchRemoteokService"])); };
    RemoteokComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteokComponent, selectors: [["app-remoteok"]], decls: 8, vars: 2, consts: [[1, "container-fluid", "remoteok__page-container"], [1, "row"], [3, "isLoading"], [4, "ngIf"], [1, "col-12"], [1, "text-capitalize", "site-name"], [1, "site-description"], [1, "results-grid-container"], [1, "card"], [1, "card-title"], [1, "result-heading", "primary-font"], [1, "card-subtitle"], [1, "btn", "btn-outline", "show-more-btn", 3, "click"], [1, "grid-item", "results-grid-container--positions"], [1, "grid-item", "results-grid-container--tags"], [1, "grid-item", "results-grid-container--categories"], [1, "fa", "fa-chevron-up"], [1, "fa", "fa-chevron-down"], [4, "ngFor", "ngForOf"], [3, "position"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "card-title", "result-item"]], template: function RemoteokComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Remote OK for jobs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-remoteok-form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RemoteokComponent_div_5_Template, 45, 14, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isLoading", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.positions.length >= 1);
        } }, styles: [".remoteok__page-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10% auto;\n  text-align: center;\n}\n.remoteok__page-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 1%;\n  text-align: center;\n}\n.remoteok__page-container[_ngcontent-%COMP%]   .site-description[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 3%;\n}\n.remoteok__page-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.remoteok__page-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 5%;\n  margin-bottom: 5px;\n}\n.grid-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n@media (max-width: 450px) {\n  .remoteok__page-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    padding: 2%;\n    margin-bottom: 1%;\n  }\n  .remoteok__page-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding: 4%;\n  }\n  .remoteok__page-container[_ngcontent-%COMP%]   .site-description[_ngcontent-%COMP%] {\n    padding: 2%;\n    text-align: center;\n  }\n  .remoteok__page-container[_ngcontent-%COMP%]   .results-grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n}\n@media (min-width: 451px) {\n  .remoteok__page-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 3% auto;\n  }\n  .remoteok__page-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 3% auto;\n    margin-bottom: 1%;\n  }\n  .remoteok__page-container[_ngcontent-%COMP%]   .results-grid-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .results-grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9yZW1vdGVva1BhZ2UvcmVtb3Rlb2svcmVtb3Rlb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBLGlCQUFpQjtBQUNqQjtFQUNFO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0VBQzVCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQztFQUNwQztFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3JlbW90ZW9rUGFnZS9yZW1vdGVvay9yZW1vdGVvay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbW90ZW9rX19wYWdlLWNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZW1vdGVva19fcGFnZS1jb250YWluZXIgaDMge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZW1vdGVva19fcGFnZS1jb250YWluZXIgLnNpdGUtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG4ucmVtb3Rlb2tfX3BhZ2UtY29udGFpbmVyIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5yZW1vdGVva19fcGFnZS1jb250YWluZXIgLmNhcmQge1xuICBwYWRkaW5nOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmdyaWQtaXRlbSB7XG4gIHBhZGRpbmc6IDA7XG59XG4vKiBSZXN1bHRzIGdyaWQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAucmVtb3Rlb2tfX3BhZ2UtY29udGFpbmVyIGgyIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgfVxuICAucmVtb3Rlb2tfX3BhZ2UtY29udGFpbmVyIGgzIHtcbiAgICBwYWRkaW5nOiA0JTtcbiAgfVxuICAucmVtb3Rlb2tfX3BhZ2UtY29udGFpbmVyIC5zaXRlLWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnJlbW90ZW9rX19wYWdlLWNvbnRhaW5lciAucmVzdWx0cy1ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDUxcHgpIHtcbiAgLnJlbW90ZW9rX19wYWdlLWNvbnRhaW5lciBoMiB7XG4gICAgbWFyZ2luOiAzJSBhdXRvO1xuICB9XG4gIC5yZW1vdGVva19fcGFnZS1jb250YWluZXIgaDMge1xuICAgIG1hcmdpbjogMyUgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgfVxuICAucmVtb3Rlb2tfX3BhZ2UtY29udGFpbmVyIC5yZXN1bHRzLWdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIH1cbiAgLnJlc3VsdHMtZ3JpZC1jb250YWluZXIgLmdyaWQtaXRlbSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
    return RemoteokComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteokComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-remoteok",
                templateUrl: "./remoteok.component.html",
                styleUrls: ["./remoteok.component.css"],
            }]
    }], function () { return [{ type: src_app_services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"] }, { type: src_app_services_search_remoteok_service__WEBPACK_IMPORTED_MODULE_2__["SearchRemoteokService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/privacyTerms/privacy/privacy.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/privacyTerms/privacy/privacy.component.ts ***!
  \**********************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



function PrivacyComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Owner and Data Controller ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HackerHunter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Owner contact email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " benaimjacob@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Types of Data collected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookies; Usage Data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Any use of Cookies \u2013 or of other tracking tools \u2013 by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Mode and place of processing the Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Methods of processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Legal basis of processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " The Owner may process Personal Data relating to Users if one of the following applies: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (\u201Copt-out\u201D), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " processing is necessary for compliance with a legal obligation to which the Owner is subject; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Place");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Retention time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Personal Data shall be processed and stored for as long as required by the purpose they have been collected for. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Therefore:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Personal Data collected for the purposes of the Owner\u2019s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "The purposes of processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Analytics, Access to third-party accounts and Registration and authentication. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " For specific information about the Personal Data used for each purpose, the User may refer to the section \u201CDetailed information on the processing of Personal Data\u201D. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Facebook permissions asked by this Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " This Application may ask for some Facebook permissions allowing it to perform actions with the User's Facebook account and to retrieve information, including Personal Data, from it. This service allows this Application to connect with the User's account on the Facebook social network, provided by Facebook Inc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " For more information about the following permissions, refer to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Facebook permissions documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " and to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Facebook privacy policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "The permissions asked are the following:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Basic information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " By default, this includes certain User\u2019s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Provides access to the User's primary email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Detailed information on the processing of Personal Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Personal Data is collected for the following purposes and using the following services: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Access to third-party accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " This type of service allows this Application to access Data from your account on a third-party service and perform actions with it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " These services are not activated automatically, but require explicit authorization by the User. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Facebook account access (this Application)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " This service allows this Application to connect with the User's account on the Facebook social network, provided by Facebook, Inc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Permissions asked: Email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Place of processing: United States \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, ". Privacy Shield participant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " This service allows this Application to connect with the User's account on the Twitter social network, provided by Twitter, Inc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Personal Data processed: various types of Data as specified in the privacy policy of the service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Place of processing: United States \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, ". Privacy Shield participant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Analytics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Google Analytics (Google LLC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " Google Analytics is a web analysis service provided by Google LLC (\u201CGoogle\u201D). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Google may use the Data collected to contextualize and personalize the ads of its own advertising network. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " Personal Data processed: Cookies; Usage Data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Place of processing: United States \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Opt Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, ". Privacy Shield participant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, " Registration and authentication ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " By registering or authenticating, Users allow this Application to identify them and give them access to dedicated services.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Depending on what is described below, third parties may provide registration and authentication services. In this case, this Application will be able to access some Data, stored by these third-party services, for registration or identification purposes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Some of the services listed below may also collect Personal Data for targeting and profiling purposes; to find out more, please refer to the description of each service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Google OAuth (Google LLC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Google OAuth is a registration and authentication service provided by Google LLC and is connected to the Google network. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Personal Data processed: various types of Data as specified in the privacy policy of the service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Place of processing: United States \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, ". Privacy Shield participant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "GitHub OAuth (GitHub Inc.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " GitHub OAuth is a registration and authentication service provided by GitHub Inc. and is connected to the GitHub network. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Personal Data processed: various types of Data as specified in the privacy policy of the service. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Place of processing: United States \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, ". Privacy Shield participant. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "The rights of Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " Users may exercise certain rights regarding their Data processed by the Owner. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "In particular, Users have the right to do the following:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Withdraw their consent at any time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Object to processing of their Data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Access their Data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Verify and seek rectification.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Restrict the processing of their Data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Have their Personal Data deleted or otherwise removed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Receive their Data and have it transferred to another controller.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Lodge a complaint.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " Users have the right to bring a claim before their competent data protection authority. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Details about the right to object to processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, " Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "How to exercise these rights");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Additional information about Data collection and processing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Legal action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Additional information about User's Personal Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "System logs and maintenance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Information not contained in this policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "How \u201CDo Not Track\u201D requests are handled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " This Application does not support \u201CDo Not Track\u201D requests.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "To determine whether any of the third-party services it uses honor the \u201CDo Not Track\u201D requests, please read their privacy policies. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Changes to this privacy policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Should the changes affect processing activities performed on the basis of the User\u2019s consent, the Owner shall collect new consent from the User, where required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Definitions and legal references ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Personal Data (or Data)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " Any information that directly, indirectly, or in connection with other information \u2014 including a personal identification number \u2014 allows for the identification or identifiability of a natural person. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Usage Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " The individual using this Application who, unless otherwise specified, coincides with the Data Subject. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Data Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "The natural person to whom the Personal Data refers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Data Processor (or Data Supervisor)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Data Controller (or Owner)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "This Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " The means by which the Personal Data of the User is collected and processed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " The service provided by this Application as described in the relative terms (if available) and on this site/application. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "European Union (or EU)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Cookies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "Small sets of data stored in the User's device.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Legal information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, " This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, " This privacy policy relates solely to this Application, if not stated otherwise within this document. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " Latest update: May 13, 2020 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "iubenda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " hosts this content and only collects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "the Personal Data strictly necessary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, " for it to be provided. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " Privacy Policy generated with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Generate yours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
        this.showCompletePolicy = false;
    }
    PrivacyComponent.prototype.toggleShowCompletePolicy = function () {
        this.showCompletePolicy = !this.showCompletePolicy;
    };
    PrivacyComponent.prototype.ngOnInit = function () { };
    PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
    PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 78, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], ["href", "https://job-finder-web-scraper.herokuapp.com/"], ["href", "https://www.privacypolicytemplate.net"], ["href", "https://www.disclaimergenerator.org/"], ["href", "https://www.cookieconsent.com/what-are-cookies/"], ["title", "Privacy Policy ", 1, "iubenda-white", "iubenda-embed", 3, "click"], [4, "ngIf"], ["id", "wbars_all"], [1, "iub_container", "iub_base_container"], ["id", "wbars"], [1, "iub_content", "legal_pp"], [1, "one_line_col"], ["id", "owner_of_the_data"], ["id", "types_of_data"], ["id", "place_of_processing"], ["id", "use_collected_data"], ["id", "facebook_permissions"], ["href", "https://developers.facebook.com/docs/facebook-login/permissions", "target", "_blank", "rel", "noopener"], ["href", "https://www.facebook.com/about/privacy/", "target", "_blank", "rel", "noopener"], ["id", "data_processing_detailed_info"], [1, "for_boxes"], [1, "box_primary", "box_10", "expand", "collapsed"], [1, "expand-click", "w_icon_24", "policyicon_purpose_7122352"], [1, "expand-content"], [1, "wrap"], ["href", "https://www.facebook.com/policy.php", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://twitter.com/privacy", "target", "_blank", "rel", "noopener noreferrer"], [1, "box_primary", "box_10"], ["href", "https://policies.google.com/privacy", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://tools.google.com/dlpage/gaoptout?hl=en", "target", "_blank", "rel", "noopener noreferrer"], [1, "box_primary", "box_10", "expand"], ["href", "https://help.github.com/en/articles/github-privacy-statement", "target", "_blank", "rel", "noopener noreferrer"], ["id", "rights_subjects"], ["id", "further_data_processing_info"], [1, "box_primary", "box_10", "definitions", "expand", "collapsed"], ["id", "definitions_and_legal_references", 1, "expand-click", "w_icon_24", "icon_ribbon"], [1, "expand-content", 2, "display", "none"], [1, "iub_footer"], ["target", "_top", "href", "//www.iubenda.com", "title", "iubenda - Privacy Policy generator"], ["target", "_top", "href", "//www.iubenda.com/privacy-policy/65675001"], ["href", "//www.iubenda.com", "title", "iubenda", "target", "_blank", "rel", "noopener", 1, "no_border"], ["alt", "iubenda", "src", "//www.iubenda.com/assets/site/logo_min.png"], ["href", "//www.iubenda.com", "target", "_blank", "rel", "noopener", "title", "Generate a privacy policy", 1, "btn", "iubgreen"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Privacy Policy of HackerHunter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " HackerHunter operates the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "https://job-finder-web-scraper.herokuapp.com/");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " website, which provides the SERVICE. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the HackerHunter website. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "https://job-finder-web-scraper.herokuapp.com/");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ", unless otherwise defined in this Privacy Policy. Our Privacy Policy was created with the help of the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Privacy Policy Template");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " and the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Disclaimer Generator");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Information Collection and Use");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Log Data");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer\u2019s Internet Protocol (\"IP\") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cookies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer\u2019s hard drive. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Our website uses these \"cookies\" to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " For more general information on cookies, please read ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\"What Are Cookies\"");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Service Providers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " We may employ third-party companies and individuals due to the following reasons: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "To facilitate our Service;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "To provide the Service on our behalf;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "To perform Service-related services; or");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "To assist us in analyzing how our Service is used.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Security");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Links to Other Sites");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Children's Privacy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Changes to This Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyComponent_Template_button_click_75_listener() { return ctx.toggleShowCompletePolicy(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Complete Privacy Policy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, PrivacyComponent_div_77_Template, 368, 0, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCompletePolicy);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmFjeVRlcm1zL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuY3NzIn0= */"] });
    return PrivacyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-privacy",
                templateUrl: "./privacy.component.html",
                styleUrls: ["./privacy.component.css"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/privacyTerms/terms-and-conditions/terms-and-conditions.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/privacyTerms/terms-and-conditions/terms-and-conditions.component.ts ***!
  \************************************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) { return new (t || TermsAndConditionsComponent)(); };
    TermsAndConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsAndConditionsComponent, selectors: [["app-terms-and-conditions"]], decls: 160, vars: 0, consts: [[1, "container"], ["href", "https://job-finder-web-scraper.herokuapp.com/"], ["href", "https://www.termsandconditionsgenerator.com"], ["href", "https://www.privacypolicyonline.com/terms-conditions-generator/"]], template: function TermsAndConditionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Terms and Conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to HackerHunter!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " These terms and conditions outline the rules and regulations for the use of HackerHunter's Website, located at ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "https://job-finder-web-scraper.herokuapp.com/");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " By accessing this website we assume you accept these terms and conditions. Do not continue to use HackerHunter if you do not agree to take all of the terms and conditions stated on this page. Our Terms and Conditions were created with the help of the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Terms And Conditions Generator");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " and the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Free Terms & Conditions Generator");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person log on this website and compliant to the Company\u2019s terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client\u2019s needs in respect of provision of the Company\u2019s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cookies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " We employ the use of cookies. By accessing HackerHunter, you agreed to use cookies in agreement with the HackerHunter's Privacy Policy. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Most interactive websites use cookies to let us retrieve the user\u2019s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "License");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Unless otherwise stated, HackerHunter and/or its licensors own the intellectual property rights for all material on HackerHunter. All intellectual property rights are reserved. You may access this from HackerHunter for your own personal use subjected to restrictions set in these terms and conditions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "You must not:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Republish material from HackerHunter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sell, rent or sub-license material from HackerHunter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reproduce, duplicate or copy material from HackerHunter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Redistribute content from HackerHunter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "This Agreement shall begin on the date hereof.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. HackerHunter does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of HackerHunter,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, HackerHunter shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " HackerHunter reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "You warrant and represent that:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " You hereby grant HackerHunter a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Hyperlinking to our Content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " The following organizations may link to our Website without prior written approval: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Government agencies;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Search engines;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "News organizations;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party\u2019s site. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " We may consider and approve other link requests from the following types of organizations: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "commonly-known consumer and/or business information sources;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "dot.com community sites;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "associations or other groups representing charities;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "online directory distributors;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "internet portals;");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "accounting, law and consulting firms; and");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "educational institutions and trade associations.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of HackerHunter; and (d) the link is in the context of general resource information. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party\u2019s site. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to HackerHunter. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Approved organizations may hyperlink to our Website as follows:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "By use of our corporate name; or");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "By use of the uniform resource locator being linked to; or");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party\u2019s site. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " No use of HackerHunter's logo or other artwork will be allowed for linking absent a trademark license agreement. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "iFrames");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Content Liability");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Your Privacy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Please read Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Reservation of Rights");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it\u2019s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Removal of links from our website");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Disclaimer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " limit or exclude our or your liability for death or personal injury; ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " limit or exclude our or your liability for fraud or fraudulent misrepresentation; ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " limit any of our or your liabilities in any way that is not permitted under applicable law; or ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " exclude any of our or your liabilities that may not be excluded under applicable law. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpdmFjeVRlcm1zL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
    return TermsAndConditionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-and-conditions',
                templateUrl: './terms-and-conditions.component.html',
                styleUrls: ['./terms-and-conditions.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/save-job/save-job.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/save-job/save-job.component.ts ***!
  \***********************************************************/
/*! exports provided: SaveJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveJobComponent", function() { return SaveJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_save_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/save-job.service */ "./src/app/services/save-job.service.ts");




var SaveJobComponent = /** @class */ (function () {
    function SaveJobComponent(saveJobService) {
        this.saveJobService = saveJobService;
    }
    SaveJobComponent.prototype.saveJob = function (job) {
        this.saveJobService.saveJob(job).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    SaveJobComponent.prototype.ngOnInit = function () { };
    SaveJobComponent.ɵfac = function SaveJobComponent_Factory(t) { return new (t || SaveJobComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_save_job_service__WEBPACK_IMPORTED_MODULE_1__["SaveJobService"])); };
    SaveJobComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SaveJobComponent, selectors: [["app-save-job"]], inputs: { position: "position" }, decls: 2, vars: 0, consts: [[1, "fa", "fa-heart", "float-right", "secondary-font", 3, "click"]], template: function SaveJobComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SaveJobComponent_Template_i_click_1_listener() { return ctx.saveJob(ctx.position); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2F2ZS1qb2Ivc2F2ZS1qb2IuY29tcG9uZW50LmNzcyJ9 */"] });
    return SaveJobComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveJobComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-save-job",
                templateUrl: "./save-job.component.html",
                styleUrls: ["./save-job.component.css"],
            }]
    }], function () { return [{ type: src_app_services_save_job_service__WEBPACK_IMPORTED_MODULE_1__["SaveJobService"] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/search-bar-filter/search-bar-filter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/search-bar-filter/search-bar-filter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchBarFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarFilterComponent", function() { return SearchBarFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");




var SearchBarFilterComponent = /** @class */ (function () {
    function SearchBarFilterComponent(searchBar) {
        this.searchBar = searchBar;
        this.filter = "";
    }
    SearchBarFilterComponent.prototype.ngOnInit = function () { };
    SearchBarFilterComponent.ɵfac = function SearchBarFilterComponent_Factory(t) { return new (t || SearchBarFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"])); };
    SearchBarFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarFilterComponent, selectors: [["app-search-bar-filter"]], inputs: { filter: "filter" }, decls: 23, vars: 0, consts: [[1, "container", "search-bar-filter__container"], [1, "search-bar-filter-checkboxes"], [1, "form-check", "checkbox-item"], ["type", "checkbox", "name", "positions", "value", "positions", "id", "positionsCheck", 1, "form-check-input", "search-bar-filter-input", 3, "change"], ["for", "positionsCheck", 1, "search-bar-filter-label"], ["type", "checkbox", "name", "locations", "value", "locations", "id", "locationsCheck", 1, "form-check-input", "search-bar-filter-input", 3, "change"], ["for", "locationsCheck", 1, "search-bar-filter-label"], ["type", "checkbox", "name", "categories", "value", "categories", "id", "categoriesCheck", 1, "form-check-input", "search-bar-filter-input", 3, "change"], ["for", "categoriesCheck", 1, "search-bar-filter-label"], ["type", "checkbox", "name", "tags", "value", "tags", "id", "tagsCheck", 1, "form-check-input", "search-bar-filter-input", 3, "change"], ["for", "tagsCheck", 1, "search-bar-filter-label"], [1, "checkbox-item"], ["type", "checkbox", "name", "websites", "value", "websites", "id", "websitesCheck", 1, "search-bar-filter-input", 3, "change"], ["for", "websitesCheck", 1, "search-bar-filter-label"]], template: function SearchBarFilterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchBarFilterComponent_Template_input_change_4_listener($event) { return ctx.searchBar.setFilter($event.target); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Positions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchBarFilterComponent_Template_input_change_8_listener($event) { return ctx.searchBar.setFilter($event.target); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Locations ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchBarFilterComponent_Template_input_change_12_listener($event) { return ctx.searchBar.setFilter($event.target); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Categories ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchBarFilterComponent_Template_input_change_16_listener($event) { return ctx.searchBar.setFilter($event.target); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tags ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SearchBarFilterComponent_Template_input_change_20_listener($event) { return ctx.searchBar.setFilter($event.target); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Websites ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: [".search-bar-filter__container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 4fr 8fr;\n  padding: 4%;\n  position: fixed;\n  left: 0;\n  min-width: 100%;\n}\n.search-bar-filter__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  border: 2px solid #28a745;\n  border-radius: 10px;\n  padding: 7%;\n}\n@media (min-width: 577px) {\n  .search-bar-filter__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    grid-column: 1;\n    width: 65%;\n  }\n}\n@media (min-width: 1108px) {\n  .search-bar-filter__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n.search-bar-filter__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1.2em;\n  height: 1.2em;\n}\n.search-bar-filter__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  margin-left: 4px;\n  margin-top: -2px;\n}\n@media (max-width: 576px) {\n  .search-bar-filter__container[_ngcontent-%COMP%] {\n    min-width: 100%;\n    position: absolute;\n  }\n  .search-bar-filter__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    grid-column: 1 / span 2;\n    padding: 3%;\n  }\n\n  .search-bar-filter-checkboxes[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .search-bar-filter-checkboxes[_ngcontent-%COMP%]:nth-child(-n + 3) {\n    grid-column: 1 / span 3;\n    grid-row: 1;\n  }\n  .search-bar-filter-checkboxes[_ngcontent-%COMP%]:nth-child(n + 3) {\n    grid-row: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyLWZpbHRlci9zZWFyY2gtYmFyLWZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsZUFBZTtFQUNmLE9BQU87RUFDUCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isa0NBQWtDO0VBQ3BDO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci1maWx0ZXIvc2VhcmNoLWJhci1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyLWZpbHRlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgOGZyO1xuICBwYWRkaW5nOiA0JTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4uc2VhcmNoLWJhci1maWx0ZXJfX2NvbnRhaW5lciBmb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzI4YTc0NTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNyU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc3cHgpIHtcbiAgLnNlYXJjaC1iYXItZmlsdGVyX19jb250YWluZXIgZm9ybSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDExMDhweCkge1xuICAuc2VhcmNoLWJhci1maWx0ZXJfX2NvbnRhaW5lciBmb3JtIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5cbi5zZWFyY2gtYmFyLWZpbHRlcl9fY29udGFpbmVyIGZvcm0gaW5wdXQge1xuICB3aWR0aDogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG59XG4uc2VhcmNoLWJhci1maWx0ZXJfX2NvbnRhaW5lciBmb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuc2VhcmNoLWJhci1maWx0ZXJfX2NvbnRhaW5lciB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuc2VhcmNoLWJhci1maWx0ZXJfX2NvbnRhaW5lciBmb3JtIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgfVxuXG4gIC5zZWFyY2gtYmFyLWZpbHRlci1jaGVja2JveGVzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIH1cbiAgLnNlYXJjaC1iYXItZmlsdGVyLWNoZWNrYm94ZXM6bnRoLWNoaWxkKC1uICsgMykge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xuICAgIGdyaWQtcm93OiAxO1xuICB9XG4gIC5zZWFyY2gtYmFyLWZpbHRlci1jaGVja2JveGVzOm50aC1jaGlsZChuICsgMykge1xuICAgIGdyaWQtcm93OiAyO1xuICB9XG59XG4iXX0= */"] });
    return SearchBarFilterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-search-bar-filter",
                templateUrl: "./search-bar-filter.component.html",
                styleUrls: ["./search-bar-filter.component.css"],
            }]
    }], function () { return [{ type: _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__["SearchBarComponent"] }]; }, { filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["filter"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/job.service */ "./src/app/services/job.service.ts");




function SearchBarComponent_div_7_li_2_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tag_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r9, " ");
} }
function SearchBarComponent_div_7_li_2_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchBarComponent_div_7_li_2_ul_8_li_1_Template, 2, 1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var position_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", position_r6.tags);
} }
function SearchBarComponent_div_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-save-job", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchBarComponent_div_7_li_2_ul_8_Template, 2, 1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var position_r6 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", position_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", position_r6.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r6.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.filters["tags"]);
} }
function SearchBarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Job Titles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchBarComponent_div_7_li_2_Template, 9, 4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.results["positionsResults"]);
} }
function SearchBarComponent_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var location_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", location_r12.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r12.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r12.title, " ");
} }
function SearchBarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Locations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchBarComponent_div_8_li_2_Template, 7, 3, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.results["locationsResults"]);
} }
function SearchBarComponent_div_9_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var category_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r14, " ");
} }
function SearchBarComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchBarComponent_div_9_li_1_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.results["categoriesResults"]);
} }
function SearchBarComponent_div_10_li_1_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tag_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r18, " ");
} }
function SearchBarComponent_div_10_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-save-job", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchBarComponent_div_10_li_1_li_5_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var result_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", result_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", result_r16.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", result_r16.tags);
} }
function SearchBarComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchBarComponent_div_10_li_1_Template, 6, 3, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.results["tagsResults"]);
} }
function SearchBarComponent_div_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var website_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", website_r20, " ");
} }
function SearchBarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchBarComponent_div_11_li_1_Template, 2, 1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.results["websitesResults"]);
} }
var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(jobs) {
        var _this = this;
        this.jobs = jobs;
        this.query = "";
        this.allJobs = [];
        this.results = {
            positionsResults: [],
            locationsResults: [],
            categoriesResults: [],
            tagsResults: [],
            websitesResults: [],
        };
        this.filters = {
            positions: false,
            locations: false,
            categories: false,
            tags: false,
            websites: false,
        };
        this.filter = false;
        this.filterResults = function (filters, results) {
            // get active filters
            var activeFilters = [];
            if (activeFilters.length === 0) {
                _this.resetResults();
            }
            var _loop_1 = function (filter) {
                var convertedFilterName = filter + "Results";
                var result = results[convertedFilterName];
                var query = _this.query.toLowerCase();
                // resest filters when checkbox is off
                filters[filter] && activeFilters.push(filters[filter]);
                if (filter === "positions" && filters[filter]) {
                    _this.results[convertedFilterName] = result.filter(function (item) {
                        return item.title.toLowerCase().includes(query);
                    });
                }
                if (filter === "locations" && filters[filter]) {
                    _this.results[convertedFilterName] = result.filter(function (position) {
                        return position.location.toLowerCase().includes(query) &&
                            position.location !== "";
                    });
                }
                if (filter === "categories" && filters[filter]) {
                    _this.results[convertedFilterName] = result.filter(function (category) {
                        return category.toLowerCase().includes(query);
                    });
                }
                if (filter === "tags" && filters[filter]) {
                    var tags = [];
                    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                        var item = result_1[_i];
                        var filteredTags = item.tags.filter(function (tag) { return tag.includes(query); });
                        filteredTags.length >= 1 &&
                            tags.push({ link: item.link, tags: filteredTags });
                    }
                    _this.results[convertedFilterName] = tags;
                }
                if (filter === "websites" && filters[filter]) {
                    _this.results[convertedFilterName] = result.filter(function (siteName) {
                        return siteName.toLowerCase().includes(query);
                    });
                }
            };
            for (var filter in filters) {
                _loop_1(filter);
            }
        };
    }
    SearchBarComponent.prototype.resetResults = function () {
        this.results = {
            positionsResults: [],
            locationsResults: [],
            categoriesResults: [],
            tagsResults: [],
            websitesResults: [],
        };
    };
    SearchBarComponent.prototype.setFilter = function (e) {
        this.filters[e.name] = !this.filters[e.name];
        this.handleSearch(this.query);
    };
    SearchBarComponent.prototype.getFilter = function () {
        return this.filters;
    };
    SearchBarComponent.prototype.handleSearch = function (e) {
        this.query = e.toLowerCase();
        var positions = this.allJobs[0]["positions"];
        var tags = [];
        var locations = [];
        var newPositions = positions.map(function (position) {
            position.location &&
                locations.push({
                    title: position.title,
                    link: position.link,
                    location: position.location,
                });
            position.tags &&
                tags.push({
                    link: position.link,
                    tags: position.tags,
                });
            return position;
        });
        var jobList = {
            positions: newPositions,
            locations: locations,
            categories: this.allJobs[0]["categories"],
            tags: tags,
            websites: this.allJobs[0]["siteNames"],
        };
        for (var filter in this.filters) {
            var r = filter + "Results";
            if (this.filters[filter]) {
                this.results[r] = jobList[filter];
            }
        }
        this.filterResults(this.filters, this.results);
    };
    SearchBarComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobs.getAllJobs().subscribe(function (data) {
            _this.allJobs.push(data);
        }, function (err) {
            console.log(err);
            alert("Something went wrong");
        });
    };
    SearchBarComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"])); };
    SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 12, vars: 5, consts: [[1, "container", "search-bar-container"], [1, "row"], ["type", "search", "placeholder", "Search...", 1, "search-bar", 3, "input"], [1, "row", "search-bar__locations-container"], [1, "search-bar__positions-results-container"], [4, "ngIf"], ["class", "position-result", 4, "ngFor", "ngForOf"], [1, "position-result"], [1, "card"], [1, "card-body"], [3, "position"], [3, "href"], [1, "card-title"], [1, "card-text"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [4, "ngFor", "ngForOf"], [1, "card", "location-card"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchBarComponent_Template_input_input_2_listener($event) { return ctx.handleSearch($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search-bar-filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchBarComponent_div_7_Template, 3, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchBarComponent_div_8_Template, 3, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchBarComponent_div_9_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchBarComponent_div_10_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchBarComponent_div_11_Template, 2, 1, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results["positionsResults"].length >= 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results["locationsResults"].length >= 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results["categoriesResults"].length >= 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results["tagsResults"].length >= 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results["websitesResults"].length >= 1);
        } }, styles: [".search-bar-container[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n}\n.search-bar-container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  text-transform: capitalize;\n}\n.search-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  height: 2em;\n  font-size: 2em;\n  padding: 15px;\n}\n.search-bar__positions-results-container[_ngcontent-%COMP%]   .position-result[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n  list-style: none;\n}\n.search-bar__locations-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 4%;\n}\n.search-bar-container[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%] {\n  min-width: 375px;\n  margin-top: 2%;\n}\n.search-bar-container[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin: 5%;\n}\n@media (max-width: 450px) {\n  .search-bar__positions-results-container[_ngcontent-%COMP%] {\n    margin-top: 33%;\n    padding: 0;\n  }\n  .search-bar__locations-container[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  .search-bar-container[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%] {\n    min-width: 355px;\n    margin-top: 4%;\n  }\n  .search-bar-container[_ngcontent-%COMP%]   .location-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    margin: 5%;\n  }\n}\n@media (min-width: 451px) {\n  .search-bar__positions-results-container[_ngcontent-%COMP%] {\n    margin-left: 10%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhci1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbn1cbi5zZWFyY2gtYmFyLWNvbnRhaW5lciBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnNlYXJjaC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VhcmNoLWJhcl9fcG9zaXRpb25zLXJlc3VsdHMtY29udGFpbmVyIC5wb3NpdGlvbi1yZXN1bHQge1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zZWFyY2gtYmFyX19sb2NhdGlvbnMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuLnNlYXJjaC1iYXItY29udGFpbmVyIC5sb2NhdGlvbi1jYXJkIHtcbiAgbWluLXdpZHRoOiAzNzVweDtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG4uc2VhcmNoLWJhci1jb250YWluZXIgLmxvY2F0aW9uLWNhcmQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW46IDUlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlYXJjaC1iYXJfX3Bvc2l0aW9ucy1yZXN1bHRzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzMlO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnNlYXJjaC1iYXJfX2xvY2F0aW9ucy1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5zZWFyY2gtYmFyLWNvbnRhaW5lciAubG9jYXRpb24tY2FyZCB7XG4gICAgbWluLXdpZHRoOiAzNTVweDtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgfVxuICAuc2VhcmNoLWJhci1jb250YWluZXIgLmxvY2F0aW9uLWNhcmQgLmNhcmQtdGl0bGUge1xuICAgIG1hcmdpbjogNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NTFweCkge1xuICAuc2VhcmNoLWJhcl9fcG9zaXRpb25zLXJlc3VsdHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"] });
    return SearchBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-search-bar",
                templateUrl: "./search-bar.component.html",
                styleUrls: ["./search-bar.component.css"],
            }]
    }], function () { return [{ type: src_app_services_job_service__WEBPACK_IMPORTED_MODULE_1__["JobService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shell/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/shell/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 16, vars: 0, consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-2"], [1, "title"], [1, "row", "privacy-links"], [1, "list-unstyled"], ["routerLink", "/privacy", "title", "Privacy Policy"], ["routerLink", "/terms-and-conditions", "title", "Terms and Conditions"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "HackerHunter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Privacy Policy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u2022");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Terms & Conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".footer[_ngcontent-%COMP%] {\r\n  background-color: #495057;\r\n  padding-top: 2rem;\r\n  padding-bottom: 4rem;\r\n  color: #28a745;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n  color: #28a745;\r\n  margin-left: 2%;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .privacy-links[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 0 5%;\r\n    width: 100%;\r\n    margin-top: 10%;\r\n  }\r\n  .privacy-links[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 0 1%;\r\n    width: 150px;\r\n  }\r\n}\r\n\r\n@media (min-width: 451px) {\r\n  .privacy-links[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 0 5%;\r\n    width: 100%;\r\n    margin-top: 2%;\r\n  }\r\n  .privacy-links[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding: 0 1%;\r\n    width: 180px;\r\n  }\r\n  .privacy-links[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: -4.5%;\r\n  }\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .privacy-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #28a745;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVsbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGVsbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3O1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4uZm9vdGVyIC50aXRsZSB7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAucHJpdmFjeS1saW5rcyAubGlzdC11bnN0eWxlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuICAucHJpdmFjeS1saW5rcyAubGlzdC11bnN0eWxlZCBsaSB7XHJcbiAgICBwYWRkaW5nOiAwIDElO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDUxcHgpIHtcclxuICAucHJpdmFjeS1saW5rcyAubGlzdC11bnN0eWxlZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG4gIC5wcml2YWN5LWxpbmtzIC5saXN0LXVuc3R5bGVkIGxpIHtcclxuICAgIHBhZGRpbmc6IDAgMSU7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgfVxyXG4gIC5wcml2YWN5LWxpbmtzIC5saXN0LXVuc3R5bGVkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00LjUlO1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlciAucHJpdmFjeS1saW5rcyBhIHtcclxuICBjb2xvcjogIzI4YTc0NTtcclxufVxyXG4iXX0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shell/nav-bar/nav-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/shell/nav-bar/nav-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








function NavBarComponent_div_17_p_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_17_p_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.toggleShowAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_17_p_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_div_17_p_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.authService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavBarComponent_div_17_p_1_Template, 3, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_div_17_p_2_Template, 3, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.authService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.isLoggedIn());
} }
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(location, authService) {
        this.location = location;
        this.authService = authService;
        this.showAccount = false;
    }
    NavBarComponent.prototype.toggleShowAccount = function () {
        this.showAccount = !this.showAccount;
    };
    NavBarComponent.prototype.ngOnInit = function () {
        this.skipLinkPath = this.location.path() + "#mainContent";
    };
    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 18, vars: 2, consts: [[1, "skipLink"], ["title", "Skip to Main Content", "aria-label", "Skip to Main Content", 3, "href"], [1, "navbar", "navbar-expand-sm", "border-bottom", "justify-content-between"], ["routerLink", "/", "title", "HackerHunter", "aria-label", "HackerHunter", 1, "navbar-brand"], [1, "navbar-nav"], ["routerLink", "/", "title", "Home", "aria-label", "Home", 1, "nav-item", "nav-link", "active"], ["routerLink", "/jobs", "title", "jobs", "aria-label", "jobs", 1, "nav-item", "nav-link"], ["routerLink", "/saved-jobs", "title", "saved-jobs", "aria-label", "saved-jobs", 1, "nav-item", "nav-link"], [1, "fa", "fa-heart"], [1, "nav-item", "nav-link", 3, "click"], ["class", "auth", 4, "ngIf"], [1, "auth"], ["class", "nav-item nav-link", 4, "ngIf"], [4, "ngIf"], [1, "nav-item", "nav-link"], ["routerLink", "/login", "role", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"], ["href", "", "role", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Skip to Main Content ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hacker Hunter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Jobs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Saved Jobs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_15_listener() { return ctx.toggleShowAccount(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Account ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavBarComponent_div_17_Template, 3, 2, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.skipLinkPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAccount);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\r\n  background: #495057;\r\n}\r\n.nav-item[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%] {\r\n  color: #28a745 !important;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n.skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: -100px;\r\n  top: -100px;\r\n}\r\n.skipLink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  background: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVsbC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hlbGwvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xyXG4gIGJhY2tncm91bmQ6ICM0OTUwNTc7XHJcbn1cclxuLm5hdi1pdGVtLFxyXG4ubmF2LWxpbmssXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiAjMjhhNzQ1ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5za2lwTGluayBhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTEwMHB4O1xyXG4gIHRvcDogLTEwMHB4O1xyXG59XHJcblxyXG4uc2tpcExpbmsgYTpmb2N1cyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcbiJdfQ== */"] });
    return NavBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-nav-bar",
                templateUrl: "./nav-bar.component.html",
                styleUrls: ["./nav-bar.component.css"],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service.interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/service.interceptor.ts ***!
  \****************************************/
/*! exports provided: ServiceInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInterceptor", function() { return ServiceInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ServiceInterceptor = /** @class */ (function () {
    function ServiceInterceptor() {
    }
    ServiceInterceptor.prototype.intercept = function (req, next) {
        // WTS TODO: You can personalize your http interception (token for login, handle errors, redirections, loggers ...)
        // More information in:
        // https://angular.io/api/common/http/HttpInterceptor
        // https://blog.angulartraining.com/http-interceptors-in-angular-61dcf80b6bdd
        return next.handle(req);
    };
    ServiceInterceptor.ɵfac = function ServiceInterceptor_Factory(t) { return new (t || ServiceInterceptor)(); };
    ServiceInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceInterceptor, factory: ServiceInterceptor.ɵfac, providedIn: 'root' });
    return ServiceInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(["/login"]);
            return false;
        }
        return true;
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
    return AuthGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);







var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInWithGithub = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GithubAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        var currentUser = this._firebaseAuth.auth.currentUser;
        if (currentUser) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this._firebaseAuth.auth
            .signOut()
            .then(function (res) { return _this.router.navigate(["/"]); });
    };
    AuthService.prototype.getUser = function () {
        return this._firebaseAuth.auth.currentUser;
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/job.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/job.service.ts ***!
  \*****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var JobService = /** @class */ (function () {
    function JobService(http) {
        this.http = http;
        this.endpoint = !window.location.host.includes("local")
            ? "https://job-finder-web-scraper.herokuapp.com"
            : "http://localhost:3001";
    }
    JobService.prototype.getAllJobs = function () {
        // from backend (scraper)
        return this.http.get(this.endpoint + "/api/jobs");
    };
    JobService.prototype.getJobsFromFirebase = function () {
        // from firebaseDB (liked/saved jobs?)
        return this.http.get("https://jobfinder-95e75.firebaseio.com/jobs.json");
    };
    JobService.prototype.getJobsFromRemoteok = function () {
        // get jobs from remoteok
        return this.http.get(this.endpoint + "/api/jobs/remoteok");
    };
    JobService.prototype.searchJobsFromRemoteok = function (query) {
        // get jobs from remoteok
        return this.http.post(this.endpoint + "/api/jobs/remoteok", { query: query });
    };
    JobService.prototype.getJobsFromLinkedIn = function () {
        return this.http.get(this.endpoint + "/api/jobs/linked-in");
    };
    JobService.ɵfac = function JobService_Factory(t) { return new (t || JobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    JobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobService, factory: JobService.ɵfac, providedIn: "root" });
    return JobService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/save-job.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/save-job.service.ts ***!
  \**********************************************/
/*! exports provided: SaveJobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveJobService", function() { return SaveJobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






var SaveJobService = /** @class */ (function () {
    function SaveJobService(http, _auth) {
        this.http = http;
        this._auth = _auth;
        this.endpoint = "https://jobfinder-95e75.firebaseio.com/";
        this.userId = this._auth.getUser() !== null ? this._auth.getUser().uid : "guest";
    }
    SaveJobService.prototype.saveJob = function (job) {
        // save job to firebase user
        return this.http.post(this.endpoint + "users/" + this.userId + "/savedJobs.json", job);
    };
    SaveJobService.prototype.removeJob = function (id) {
        return this.http.delete(this.endpoint + "users/" + this.userId + "/savedJobs/" + id + ".json");
    };
    SaveJobService.prototype.getSavedJobs = function () {
        return this.http.get(this.endpoint + "users/" + this.userId + "/savedJobs.json");
    };
    SaveJobService.ɵfac = function SaveJobService_Factory(t) { return new (t || SaveJobService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
    SaveJobService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SaveJobService, factory: SaveJobService.ɵfac, providedIn: "root" });
    return SaveJobService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaveJobService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/search-indeed.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search-indeed.service.ts ***!
  \***************************************************/
/*! exports provided: SearchIndeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIndeedService", function() { return SearchIndeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var SearchIndeedService = /** @class */ (function () {
    function SearchIndeedService(http) {
        this.http = http;
        this.endpoint = !window.location.host.includes("local")
            ? "https://job-finder-web-scraper.herokuapp.com"
            : "http://localhost:3001";
    }
    SearchIndeedService.prototype.getJobsFromIndeed = function () {
        return this.http.get(this.endpoint + "/api/jobs/indeed");
    };
    SearchIndeedService.prototype.searchJobsFromIndeed = function (query) {
        return this.http.post(this.endpoint + "/api/jobs/indeed", { query: query });
    };
    SearchIndeedService.ɵfac = function SearchIndeedService_Factory(t) { return new (t || SearchIndeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    SearchIndeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchIndeedService, factory: SearchIndeedService.ɵfac, providedIn: "root" });
    return SearchIndeedService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchIndeedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/search-linked-in.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/search-linked-in.service.ts ***!
  \******************************************************/
/*! exports provided: SearchLinkedInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLinkedInService", function() { return SearchLinkedInService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var SearchLinkedInService = /** @class */ (function () {
    function SearchLinkedInService(http) {
        this.http = http;
        this.endpoint = !window.location.host.includes("local")
            ? "https://job-finder-web-scraper.herokuapp.com"
            : "http://localhost:3001";
    }
    SearchLinkedInService.prototype.getJobsFromLinkedIn = function () {
        return this.http.get(this.endpoint + "/api/jobs/linked-in");
    };
    SearchLinkedInService.prototype.searchJobsFromLinkedIn = function (query) {
        return this.http.post(this.endpoint + "/api/jobs/linked-in", { query: query });
    };
    SearchLinkedInService.ɵfac = function SearchLinkedInService_Factory(t) { return new (t || SearchLinkedInService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    SearchLinkedInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchLinkedInService, factory: SearchLinkedInService.ɵfac, providedIn: "root" });
    return SearchLinkedInService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchLinkedInService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/search-remoteok.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/search-remoteok.service.ts ***!
  \*****************************************************/
/*! exports provided: SearchRemoteokService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRemoteokService", function() { return SearchRemoteokService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var SearchRemoteokService = /** @class */ (function () {
    function SearchRemoteokService(http) {
        this.http = http;
        this.endpoint = !window.location.host.includes("local")
            ? "https://job-finder-web-scraper.herokuapp.com"
            : "http://localhost:3001";
    }
    SearchRemoteokService.prototype.searchJobsFromRemoteok = function (query) {
        // get jobs from remoteok
        return this.http.post(this.endpoint + "/api/jobs/remoteok", { query: query });
    };
    SearchRemoteokService.ɵfac = function SearchRemoteokService_Factory(t) { return new (t || SearchRemoteokService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    SearchRemoteokService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchRemoteokService, factory: SearchRemoteokService.ɵfac, providedIn: "root" });
    return SearchRemoteokService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchRemoteokService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* Features of development mode in Angular include:
 * an additional change detection cycle
 * printing out hints when the HTML sanitizer is stripping content
 * running deep object comparison checks to detect model changes
 */
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAi1LTqYI51oTyzVFgqrr4r9ZvWCBONV0c",
        authDomain: "jobfinder-95e75.firebaseapp.com",
        databaseURL: "https://jobfinder-95e75.firebaseio.com/",
        projectId: "jobfinder-95e75",
        storageBucket: "gs://jobfinder-95e75.appspot.com",
        messagingSenderId: "658909537739",
    },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jay/projects/firebaseDB/JobFinder/JobFinder/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map