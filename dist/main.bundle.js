webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-public></app-public>-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        //router.navigate(['public']);
        if (localStorage.getItem('currentUser')) {
            if (localStorage.getItem('currentRoute')) {
                var routePath = localStorage.getItem('currentRoute');
                this.router.navigate([routePath]);
            }
            else {
                this.router.navigate(['public']);
            }
        }
        else {
            this.router.navigate(['public']);
        }
        // not logged in so redirect to login page with the return url and return false
        //this.router.navigate(['/public'], { queryParams: { returnUrl: state.url }});
        //return false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_shareobject_routeinfo_service__ = __webpack_require__("../../../../../src/app/services/shareobject/routeinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__public_public_component__ = __webpack_require__("../../../../../src/app/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__control_messages_control_messages_component__ = __webpack_require__("../../../../../src/app/control-messages/control-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__public_nav_public_nav_component__ = __webpack_require__("../../../../../src/app/public-nav/public-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__private_nav_private_nav_component__ = __webpack_require__("../../../../../src/app/private-nav/private-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_area_profile_area_component__ = __webpack_require__("../../../../../src/app/profile-area/profile-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tile_menu_tile_menu_component__ = __webpack_require__("../../../../../src/app/tile-menu/tile-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__chat_panel_chat_panel_component__ = __webpack_require__("../../../../../src/app/chat-panel/chat-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__info_panel_info_panel_component__ = __webpack_require__("../../../../../src/app/info-panel/info-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_result_list_item_search_result_list_item_component__ = __webpack_require__("../../../../../src/app/search-result-list-item/search-result-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__coverpic_coverpic_component__ = __webpack_require__("../../../../../src/app/coverpic/coverpic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__image_cropper_image_cropper_component__ = __webpack_require__("../../../../../src/app/image-cropper/image-cropper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__capture_pic_capture_pic_component__ = __webpack_require__("../../../../../src/app/capture-pic/capture-pic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__friend_request_pending_list_friend_request_pending_list_component__ = __webpack_require__("../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__public_public_component__["a" /* PublicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__control_messages_control_messages_component__["a" /* ControlMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__public_nav_public_nav_component__["a" /* PublicNavComponent */],
            __WEBPACK_IMPORTED_MODULE_16__private_nav_private_nav_component__["a" /* PrivateNavComponent */],
            __WEBPACK_IMPORTED_MODULE_17__profile_area_profile_area_component__["a" /* ProfileAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_18__tile_menu_tile_menu_component__["a" /* TileMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_19__chat_panel_chat_panel_component__["a" /* ChatPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_20__info_panel_info_panel_component__["a" /* InfoPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_21__search_result_list_item_search_result_list_item_component__["a" /* SearchResultListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__coverpic_coverpic_component__["a" /* CoverpicComponent */],
            __WEBPACK_IMPORTED_MODULE_24__modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_26__image_cropper_image_cropper_component__["a" /* ImageCropperComponent */],
            __WEBPACK_IMPORTED_MODULE_27__capture_pic_capture_pic_component__["a" /* CapturePicComponent */],
            __WEBPACK_IMPORTED_MODULE_28__friend_request_pending_list_friend_request_pending_list_component__["a" /* FriendRequestPendingListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_25_ngx_image_cropper__["a" /* ImageCropperModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: 'public',
                    component: __WEBPACK_IMPORTED_MODULE_10__public_public_component__["a" /* PublicComponent */]
                },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'profile/:id',
                    component: __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */]
                }
            ], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */], __WEBPACK_IMPORTED_MODULE_8_app_modal_modal_service__["a" /* ModalService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/capture-pic/capture-pic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profilePicVideo{\n\twidth: 100%;\n}\n#profilePicCanvas{\n\tdisplay: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/capture-pic/capture-pic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-margin crop-contents auto-margin\" ng-show=\"isProfilePicCamShow\">\n\t<video id=\"profilePicVideo\" autoplay></video>\n\t<canvas id=\"profilePicCanvas\"></canvas>\n\t<div>\t\t\t\n\t\t<button type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"capture()\">\n\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/capture-pic/capture-pic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapturePicComponent = (function () {
    function CapturePicComponent() {
        this.onCapturePic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onCamRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CapturePicComponent.prototype.ngOnInit = function () {
    };
    CapturePicComponent.prototype.ngAfterViewInit = function () {
        this.onCamRender.emit('rendered');
    };
    CapturePicComponent.prototype.ngAfterContentInit = function () {
    };
    CapturePicComponent.prototype.ngAfterContentChecked = function () {
    };
    CapturePicComponent.prototype.capture = function () {
        this.onCapturePic.emit('captured');
    };
    return CapturePicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CapturePicComponent.prototype, "onCapturePic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], CapturePicComponent.prototype, "onCamRender", void 0);
CapturePicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-capture-pic',
        template: __webpack_require__("../../../../../src/app/capture-pic/capture-pic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/capture-pic/capture-pic.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CapturePicComponent);

var _a, _b;
//# sourceMappingURL=capture-pic.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-panel/chat-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-panel/chat-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  chat-panel works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/chat-panel/chat-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatPanelComponent = (function () {
    function ChatPanelComponent() {
    }
    ChatPanelComponent.prototype.ngOnInit = function () {
    };
    return ChatPanelComponent;
}());
ChatPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat-panel',
        template: __webpack_require__("../../../../../src/app/chat-panel/chat-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-panel/chat-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatPanelComponent);

//# sourceMappingURL=chat-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/control-messages/control-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-message{color: red;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control-messages/control-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    ControlMessagesComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlMessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) === "function" && _a || Object)
], ControlMessagesComponent.prototype, "control", void 0);
ControlMessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-control-messages',
        template: '<div class="error-message" *ngIf="errorMessage !== null">{{errorMessage}}</div>',
        styles: [__webpack_require__("../../../../../src/app/control-messages/control-messages.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ControlMessagesComponent);

var _a;
//# sourceMappingURL=control-messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/coverpic/coverpic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover-pic{\n\tbackground-size: cover !important;\n}\n.edit-cover-pic{\n\tposition: absolute;\n    margin: -275px 0px 0px 20px;\n}\n.edit-cover-pic i{\n\tbackground: #fff;\n    padding: 1px 1px 0px 2px;\n    border-radius: 3px;\n    border: 1px solid #2b90d9;\n}\n\n.edit-cover-pic i:hover{\n\tborder: 1px solid #007bff;\n\tbackground: rgba(255, 255, 255, 0.5);\n}\n\n.edit-cover-pic-items{\n\twidth: 100px;\n}\n.add-friend-controls, .save-coverpic-controls{\n\tfloat: right;\n    margin: -45px 15px;\t\n}\n.save-btn{\n\tmargin-right: 6px;\n    float: left;\n    line-height: 16px;\n    padding-left: 15px !important;\n}\n.file-input-container{\n\tdisplay: none;\n\theight: 0px;\n\twidth: 0px;\n}\n\n.preview-cover-pic img{\n\twidth: 100%;\n}\n.pending-btn{\n\tpadding-left: 15px !important;\n}\n.msg-btn{\n\tpadding-left: 15px !important;\n}\n.add-btn{\n\tpadding-left: 17px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coverpic/coverpic.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"coverPic\" #coverPic class=\"cover-pic\" (mousedown)=\"canvasMouseDown()\"\n[ngStyle]=\"{'background': 'url(' + coverPicURL+ ')', \n\t\t\t'cursor':' '+ mouseCursor +'', \n\t\t\t'background-repeat': 'no-repeat', 'height':' '+ coverPicHeight +'px', 'width':' '+ coverPicWidth +'px', 'background-size': ' '+ bgSize +' ',\n\t\t\t'background-position-x':' '+ posX +'px', \n\t\t\t'background-position-y':' '+ posY +'px'}\" \n(mouseup)=\"canvasMouseUp()\"></div>\n<div *ngIf=\"isMyProfile === 'true'; then editCoverPicControls\"></div>\n<ng-template #editCoverPicControls>\n    <app-modal [modalTitle]=\"'Cover Pic Preview'\" [blocking]='false' [modalId]='modalId' #previewPicModal>\n    \t<div class=\"preview-cover-pic\"><img src=\"{{encodedImage}}\"/></div>\n      \t<div>\t\t\t\n    \t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"ok()\">\n\t\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n    </app-modal>\n\t<div class=\"file-input-container\">\n\t\t<form [formGroup]=\"coverPicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<div class=\"form-group\" [formGroup]=\"coverPicGroup\">\n\t  \t\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t  \t\t</div>\n\t\t</form>\n\t</div>\n\t<div class=\"edit-cover-pic\" (click)=\"clickedInside($event)\">\n\t\t<i class=\"fa fa-pencil-square-o fa-2x blue-fonts cursor-pointer\" aria-hidden=\"true\"  (click)=\"editCoverPicClick($event)\">\n\t\t</i>\n\t\t<div *ngIf=\"isEditCoverPic; then editCoverPicItems\"></div>\n\t\t<ng-template #editCoverPicItems>\n\t\t\t<div class=\"list-items edit-cover-pic-items\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"moveClick($event)\">Move</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"changeClick(); fileInput.value = ''; fileInput.click()\"><span>Change</span></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"selectClick($event)\">Select</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"defaultClick($event)\">Default</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n</ng-template>\n\n<div *ngIf=\"isSaveCoverPic; then saveCoverPicControls\"></div>\n<ng-template #saveCoverPicControls>\n\t<div class=\"save-coverpic-controls\">\n\t\t<div class=\"row no-margin\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center save-btn\" (click)=\"save()\">\n\t\t\t\t<span class=\"pull-left\">Save</span>\n\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"cancel()\">\n\t\t\t\t<i class=\"fa fa-times pull-left\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"pull-left\">Cancel</span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</ng-template>\t\n\n\n\n<div class=\"add-friend-controls\">\n\t<div class=\"row no-margin\">\n\t\t<div *ngIf=\"isAddFriend; then addFriendControls\"></div>\n\t\t<ng-template #addFriendControls>\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center add-btn\" (click)=\"addFriend()\">\n\t\t\t\t<span class=\"pull-left\">Add</span>\n\t\t\t\t<i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isRequestPending; then pendingControls\"></div>\n\t\t<ng-template #pendingControls>\n\t\t\t<div class=\"pull-left btn-div\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary large-btn pending-btn\">\n\t\t\t\t\t<span class=\"pull-left\">Request Pending</span>\n\t\t\t\t\t<i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isMyProfile === 'false'; then sendMsgBtn\"></div>\n\t\t<ng-template #sendMsgBtn>\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center med-btn msg-btn\" (click)=\"sendMEssage()\">\n\t\t\t\t<span class=\"pull-left\">Message</span>\n\t\t\t\t<i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t</div>\n</div>\n\t\n\t\t\t\t<!--<div class=\"row btn-div-container\" ng-show=\"isProfileBtnShow\" id=\"friendsBtnContainer\">\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"addFriendBtn\" data=\"{{profileIdOnAddBtn}}\" ng-click=\"onAddBtnClick($event)\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Add\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"pendingFriendBtn\" style=\"display : none;\" data=\"{{profileIdOnAddBtn}}\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Request Pending\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"respondFriendBtn\" style=\"display : none;\" data=\"{{profileIdOnAddBtn}}\" ng-click=\"onConfirmFriendBtnClick($event);\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Respond Request\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"confirmedFriendBtn\" style=\"display : none;\" data=\"{{profileID}}\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Friend\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"msgBtn\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Message\"><i class=\"fa fa-pencil-square-o\"></i></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t-->\n\n<div class=\"profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')', 'height': profilePicHeight, 'width': profilePicWidth}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/coverpic/coverpic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverpicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__ = __webpack_require__("../../../../../src/app/services/data/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__ = __webpack_require__("../../../../../src/app/services/data/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CoverpicComponent = (function () {
    function CoverpicComponent(formBuilder, elementRef, route, modalService, uploadService, configurationService, friendsService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.elementRef = elementRef;
        this.route = route;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.configurationService = configurationService;
        this.friendsService = friendsService;
        this.modalId = 'appModal';
        this.bgSize = 'cover';
        this.posX = 0;
        this.posY = 0;
        this.coverPicHeight = 300;
        this.coverPicWidth = 756;
        this.isMyProfile = 'false';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = false;
        this.isUploadCoverPic = false;
        this.isAddFriend = false;
        this.isRequestPending = false;
        this.mouseCursor = 'default';
        this.coverPicURL = '';
        this.userId = '';
        this.friendId = '';
        //private scene: Scene;
        this.mouseDown = false;
        var self = this;
        this.route.params.subscribe(function (val) {
            _this.isMyProfile = localStorage.getItem('isMyProfile');
            if (_this.isMyProfile === 'true') {
                //this.mouseCursor = 'move';
                //this.isAddFriend = false;
            }
            else {
                //this.mouseCursor = 'default';
                //let postObj = {'userid': (this.posX+'x'+this.posY, )};
                //this.configurationService.saveCoverPicPos(postObj).subscribe(data => this.afterCoverPicPosSaved(data));
            }
        });
        this.coverPicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.coverPicGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
        //this.coverPicURL = AppSettingsService.API_ENDPOINT("local")+'/'+JSON.parse(localStorage.getItem('loginData')).wallpicpath;
        this.self = this;
    }
    CoverpicComponent.prototype.onMouseup = function (event) {
        this.mouseDown = false;
    };
    CoverpicComponent.prototype.onMousemove = function (event) {
        if (this.mouseDown) {
            if (this.mouseCursor === 'move') {
                this.differenceX = this.startX - event.pageX;
                this.differenceY = this.startY - event.pageY;
                this.posX = 0;
                var diff = this.initialY - this.differenceY;
                if (diff < 0) {
                    this.posY = diff;
                }
                else {
                    this.posY = 0;
                }
                console.log(this.posY);
                var scalableDiff = this.coverPicHeight - this.scalableHeight;
                if (this.posY <= scalableDiff) {
                    this.posY = scalableDiff;
                }
                var styles = getComputedStyle(this.coverPic.nativeElement);
            }
        }
    };
    CoverpicComponent.prototype.onMousedown = function (event) {
        this.mouseDown = true;
        this.startX = event.pageX;
        this.startY = event.pageY;
        this.initialX = this.posX;
        this.initialY = this.posY;
    };
    CoverpicComponent.prototype.ngOnInit = function () {
    };
    CoverpicComponent.prototype.ngAfterViewInit = function () {
        //this.drawImage(0, 0);
    };
    CoverpicComponent.prototype.updateCoverPicSettings = function (coverPicSettings) {
        var self = this;
        var actualImage = new Image();
        var styles = getComputedStyle(this.coverPic.nativeElement);
        actualImage.src = this.coverPicURL.replace(/"/g, "").replace(/url\(|\)$/ig, "");
        actualImage.onload = function () {
            console.log(actualImage.width + ',' + actualImage.height);
            self.scalableHeight = (self.coverPicWidth / actualImage.width) * actualImage.height;
        };
        this.posX = __WEBPACK_IMPORTED_MODULE_8_app_services_utility_utility_service__["a" /* UtilityService */].getPicPosition(coverPicSettings.wallpicpos).position.x;
        this.posY = __WEBPACK_IMPORTED_MODULE_8_app_services_utility_utility_service__["a" /* UtilityService */].getPicPosition(coverPicSettings.wallpicpos).position.y;
    };
    CoverpicComponent.prototype.canvasMouseDown = function () {
        //this.mousePressed = true;
    };
    CoverpicComponent.prototype.canvasMouseUp = function () {
        //this.mousePressed = false;
        //this.dragging = false;
    };
    CoverpicComponent.prototype.triggerFalseFileClick = function () {
        this.coverPicFileInput.nativeElement.click();
        //el.click();
    };
    CoverpicComponent.prototype.editCoverPicClick = function (event) {
        if (!this.isEditCoverPic) {
            this.isEditCoverPic = true;
        }
        else {
            this.isEditCoverPic = false;
        }
    };
    CoverpicComponent.prototype.clickedOutside = function ($event) {
        this.isEditCoverPic = false;
        //this.searchValue = '';
    };
    CoverpicComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    CoverpicComponent.prototype.moveClick = function (event) {
        this.mouseCursor = 'move';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.changeClick = function () {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        //let element: HTMLElement = document.getElementsByClassName('file-input')[0] as HTMLElement;
        //element.click();
        //fileInput.click();
    };
    CoverpicComponent.prototype.selectClick = function (event) {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.defaultClick = function (event) {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.cancel = function (event) {
        this.mouseCursor = 'default';
        this.isSaveCoverPic = false;
    };
    CoverpicComponent.prototype.save = function () {
        if (this.isUploadCoverPic) {
            this.uploadCoverPic();
            this.mouseCursor = 'default';
        }
        if (this.mouseCursor == 'move') {
            this.saveCoverPicPos();
            this.mouseCursor = 'default';
        }
        this.isUploadCoverPic = false;
        this.isSaveCoverPic = false;
    };
    CoverpicComponent.prototype.openAppModal = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    CoverpicComponent.prototype.ok = function () {
        this.coverPicURL = this.encodedImage;
        this.bgSize = 'cover';
        this.mouseCursor = 'move';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
        this.isUploadCoverPic = true;
        this.previewPicModal.close();
    };
    CoverpicComponent.prototype.fileChangeEvent = function (event) {
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //$('#preview').attr('src', e.target.result);
                self.encodedImage = e.target.result;
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    CoverpicComponent.prototype.saveCoverPicPos = function () {
        var _this = this;
        var postObj = { 'coverpicpos': (this.posX + 'x' + this.posY) };
        this.configurationService.saveCoverPicPos(postObj).subscribe(function (data) { return _this.afterCoverPicPosSaved(data); });
    };
    CoverpicComponent.prototype.afterCoverPicPosSaved = function (result) {
        alert(result.message);
    };
    CoverpicComponent.prototype.updateFriendsControlsSettings = function (data) {
        switch (data.status) {
            case '!friend':
                this.isAddFriend = true;
                this.isRequestPending = false;
                break;
            case 'pending':
                this.isAddFriend = false;
                this.isRequestPending = true;
                break;
            default:
        }
    };
    CoverpicComponent.prototype.addFriend = function () {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.setFriendInfo(postObj).subscribe(function (data) { return _this.afterSetFriendInfo(data); });
    };
    CoverpicComponent.prototype.afterSetFriendInfo = function (result) {
        if (result.status === "sent") {
            this.isAddFriend = false;
            this.isRequestPending = true;
        }
    };
    CoverpicComponent.prototype.uploadCoverPic = function () {
        //FILL FormData WITH FILE DETAILS.
        var formData = new FormData();
        var file = this.files;
        formData.append('uploadfile', file);
        var coverPicPos = this.posX + 'x' + this.posY;
        formData.append('coverpicpos', coverPicPos);
        var xhr = new XMLHttpRequest();
        xhr.open('post', __WEBPACK_IMPORTED_MODULE_5_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/api/uploadCoverPic', true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                var percentage = (e.loaded / e.total) * 100;
                console.log(percentage);
                //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                //$('div.progress div').html(percentage.toFixed(0) + '%');
            }
        };
        xhr.onerror = function (e) {
            alert('An error occurred while submitting the form. Maybe your file is too big');
        };
        xhr.onload = function () {
            /*let file = xhr.responseText;
            $('div.progress div').css('width','0%');
            $('div.progress').hide();
            showMsg("alert alert-success", "File uploaded successfully!");
            $('#myFile').val('');*/
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText); // Another callback here
            }
        };
        function callback(responseText) {
            if (JSON.parse(responseText).status === 'sessionExpired') {
                alert('Session Expired, Please Login Again');
            }
            var loginData = JSON.parse(localStorage.getItem('loginData'));
            loginData.wallpicpath = JSON.parse(responseText).wallpicpath;
            localStorage.setItem('loginData', JSON.stringify(loginData));
        }
        xhr.send(formData);
        return false;
    };
    // UPDATE PROGRESS BAR.
    CoverpicComponent.prototype.updateProgress = function (e) {
        if (e.lengthComputable) {
            document.getElementById('pro').setAttribute('value', e.loaded);
            document.getElementById('pro').setAttribute('max', e.total);
        }
    };
    // CONFIRMATION.
    CoverpicComponent.prototype.transferComplete = function (e) {
        alert("Files uploaded successfully.");
    };
    return CoverpicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('coverPic'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], CoverpicComponent.prototype, "coverPic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('coverPicFileInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], CoverpicComponent.prototype, "coverPicFileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('previewPicModal'),
    __metadata("design:type", Object)
], CoverpicComponent.prototype, "previewPicModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], CoverpicComponent.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CoverpicComponent.prototype, "sharedList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "onMouseup", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "onMousemove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "onMousedown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "clickedOutside", null);
CoverpicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-coverpic',
        template: __webpack_require__("../../../../../src/app/coverpic/coverpic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/coverpic/coverpic.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__["a" /* UploadService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__["a" /* ConfigurationService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _j || Object])
], CoverpicComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=coverpic.component.js.map

/***/ }),

/***/ "../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-row{\n\twidth: 300px;\n\tpadding-right: 5px;\n\tborder-bottom: 1px solid #e6e6e6;\n}\n\n.item-row:hover{\n\tbackground: #f5f8fa;\n}\n.btn-group{\n\tmargin-top: 5px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row\">\n\t<div class=\"profile-pic-medium pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-left\">{{fullName}}</div> \n\t<div class=\"row no-margin pull-right btn-group\">\n\t\t<button type=\"button\" class=\"btn btn-primary text-center save-btn\" (click)=\"confirm()\">\n\t\t\t<span class=\"pull-left\">Confirm</span>\n\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"ignore()\">\n\t\t\t<i class=\"fa fa-times pull-left\" aria-hidden=\"true\"></i>\n\t\t\t<span class=\"pull-left\">Ignore</span>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRequestPendingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendRequestPendingListComponent = (function () {
    function FriendRequestPendingListComponent(friendsService) {
        this.friendsService = friendsService;
        this.onFriendConfirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    FriendRequestPendingListComponent.prototype.ngOnInit = function () {
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.friendId = this.item.username;
        this.userId = localStorage.getItem('currentUser');
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    FriendRequestPendingListComponent.prototype.confirm = function (event) {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.confirmFriendReq(postObj).subscribe(function (data) { return _this.afterConfirmFriendReq(data); });
    };
    FriendRequestPendingListComponent.prototype.afterConfirmFriendReq = function (data) {
        if (data.status === 'confirmed') {
            this.onFriendConfirmed.emit({ data: data });
        }
    };
    return FriendRequestPendingListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FriendRequestPendingListComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], FriendRequestPendingListComponent.prototype, "onFriendConfirmed", void 0);
FriendRequestPendingListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friend-request-pending-list',
        template: __webpack_require__("../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _b || Object])
], FriendRequestPendingListComponent);

var _a, _b;
//# sourceMappingURL=friend-request-pending-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 575px) {\n\t.tile-menu-container{\n\t\tpadding: 15px !important;\n\t}\n\t.info-panel{\n\t\tmargin-bottom: 15px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding tile-menu-container\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-tile-menu></app-tile-menu>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 info-panel\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-info-panel></app-info-panel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__ = __webpack_require__("../../../../../src/app/services/shareobject/routeinfo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    /*get loginData(): any {
        return this.routeinfoService.routeData;
    }
    set loginData(value: any) {
        this.routeinfoService.routeData = value;
    }*/
    function HomeComponent(router, route, routeinfoService) {
        this.router = router;
        this.route = route;
        this.routeinfoService = routeinfoService;
        this.info = undefined;
        this.routeInfo = undefined;
        if (!localStorage.getItem('currentUser')) {
            this.router.navigate(['public']);
        }
        else {
            localStorage.setItem('currentRoute', 'home');
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        /*if(localStorage.getItem('loginData')) {
            this.loginData = localStorage.getItem('loginData');
        }else{
            localStorage.setItem('loginData', this.loginData);
        }*/
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-cropper/image-cropper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageCropperComponent = (function () {
    function ImageCropperComponent(elementRef) {
        this.elementRef = elementRef;
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 1000,
            y2: 1000
        };
        this.imageVisible = false;
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.resizeToWidth = 128;
        this.imageCropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.imageLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loadImageFailed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ImageCropperComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ImageCropperComponent.prototype, "imageChangedEvent", {
        set: function (event) {
            if (event && event.target && event.target.files) {
                this.loadImage(event);
            }
        },
        enumerable: true,
        configurable: true
    });
    ImageCropperComponent.prototype.loadImage = function (event) {
        var _this = this;
        this.imageVisible = false;
        this.originalImage = new Image();
        this.originalImage.onload = function () {
            _this.originalSize.width = _this.originalImage.width;
            _this.originalSize.height = _this.originalImage.height;
        };
        var fileReader = new FileReader();
        var blank = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
        fileReader.onload = function (ev) {
            if (event.target.files[0].type === 'image/jpeg' ||
                event.target.files[0].type === 'image/jpg' ||
                event.target.files[0].type === 'image/png' ||
                event.target.files[0].type === 'image/gif') {
                _this.imgDataUrl = ev.target.result;
                _this.originalImage.src = ev.target.result;
                _this.imageLoaded.emit();
                setTimeout(function () {
                    var displayedImage = _this.elementRef.nativeElement.querySelector('.source-image');
                    var maxSize = displayedImage.offsetHeight > displayedImage.offsetWidth ? displayedImage.offsetWidth : displayedImage.offsetHeight;
                    _this.cropper.x1 = Math.floor(displayedImage.offsetWidth / 2 - maxSize / 2);
                    _this.cropper.y1 = Math.floor(displayedImage.offsetHeight / 2 - maxSize / 2);
                    _this.cropper.x2 = _this.cropper.x1 + maxSize;
                    _this.cropper.y2 = _this.cropper.y1 + maxSize;
                    _this.crop();
                    _this.imageVisible = true;
                }, 0);
            }
            else {
                _this.imgDataUrl = blank;
                _this.originalImage.src = blank;
                _this.loadImageFailed.emit();
            }
        };
        fileReader.readAsDataURL(event.target.files[0]);
    };
    ImageCropperComponent.prototype.startMove = function (event, moveType, position) {
        if (position === void 0) { position = null; }
        this.moveStart.active = true;
        this.moveStart.type = moveType;
        this.moveStart.position = position;
        this.moveStart.clientX = event.clientX;
        this.moveStart.clientY = event.clientY;
        this.moveStart.x1 = this.cropper.x1;
        this.moveStart.y1 = this.cropper.y1;
        this.moveStart.x2 = this.cropper.x2;
        this.moveStart.y2 = this.cropper.y2;
    };
    ImageCropperComponent.prototype.moveImg = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.moveStart.active) {
            var el = this.elementRef.nativeElement.querySelector('.source-image');
            this.maxSize.width = el.offsetWidth;
            this.maxSize.height = el.offsetHeight;
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCoordinates(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCoordinates(false);
            }
        }
    };
    ImageCropperComponent.prototype.checkCoordinates = function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    ImageCropperComponent.prototype.moveStop = function () {
        this.moveStart.active = false;
        this.crop();
    };
    ImageCropperComponent.prototype.move = function (event) {
        var diffX = (event.clientX - this.moveStart.clientX);
        var diffY = (event.clientY - this.moveStart.clientY);
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    ImageCropperComponent.prototype.resize = function (event) {
        var diffX = (event.clientX - this.moveStart.clientX);
        var diffY = (event.clientY - this.moveStart.clientY);
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    ImageCropperComponent.prototype.checkAspectRatio = function () {
        var overflowX = 0;
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
        }
    };
    ImageCropperComponent.prototype.crop = function () {
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (displayedImage) {
            var ratio = this.originalSize.width / displayedImage.offsetWidth;
            var left = Math.round(this.cropper.x1 * ratio);
            var top = Math.round(this.cropper.y1 * ratio);
            var width = Math.round((this.cropper.x2 - this.cropper.x1) * ratio);
            var height = Math.round((this.cropper.y2 - this.cropper.y1) * ratio);
            var resizeRatio = this.resizeToWidth / width;
            var cropCanvas = document.createElement('canvas');
            cropCanvas.width = width * resizeRatio;
            cropCanvas.height = height * resizeRatio;
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(this.originalImage, left, top, width, height, 0, 0, width * resizeRatio, height * resizeRatio);
                this.croppedImage = cropCanvas.toDataURL('image/' + this.format);
                if (this.croppedImage.length > 10) {
                    this.imageCropped.emit(this.croppedImage);
                }
                console.log(width + '////' + height);
            }
        }
    };
    return ImageCropperComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ImageCropperComponent.prototype, "imageChangedEvent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "format", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "maintainAspectRatio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "resizeToWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "imageCropped", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "imageLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "loadImageFailed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:mousemove', ['$event']),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touchmove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImageCropperComponent.prototype, "moveImg", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:mouseup', ['$event']),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touchend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageCropperComponent.prototype, "moveStop", null);
ImageCropperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-cropper',
        template: "\n    <div>\n    <img\n        *ngIf=\"imgDataUrl\"\n        [src]=\"imgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        class=\"source-image\"\n        style=\"width: 100%\"\n    />\n    <div class=\"cropper\"\n        [style.top.px]=\"cropper.y1\"\n        [style.left.px]=\"cropper.x1\"\n        [style.width.px]=\"cropper.x2 - cropper.x1\"\n        [style.height.px]=\"cropper.y2 - cropper.y1\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\">\n        <div\n            (mousedown)=\"startMove($event, 'move')\"\n            class=\"move\"\n        >&nbsp;</div>\n        <span\n            class=\"resize topleft\"\n            (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n        ></span>\n        <span\n            class=\"resize top\"\n        ></span>\n        <span\n            class=\"resize topright\"\n            (mousedown)=\"startMove($event, 'resize', 'topright')\"\n        ></span>\n        <span\n            class=\"resize right\"\n        ></span>\n        <span\n            class=\"resize bottomright\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n        ></span>\n        <span\n            class=\"resize bottom\"\n        ></span>\n        <span\n            class=\"resize bottomleft\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n        ></span>\n        <span\n            class=\"resize left\"\n        ></span>\n        <span\n            class=\"resize-bar top\"\n            (mousedown)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n            class=\"resize-bar right\"\n            (mousedown)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n            class=\"resize-bar bottom\"\n            (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n            class=\"resize-bar left\"\n            (mousedown)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
        styles: ["\n    :host {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: 5px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n:host > div {\n  position: relative;\n}\n:host .cropper {\n  position: absolute;\n  display: flex;\n  color: #53535C !important;\n  background: transparent !important;\n  outline-color: rgba(255, 255, 255, 0.3);\n  outline-width: 1000px;\n  outline-style: solid;\n}\n:host .cropper img {\n  width: inherit;\n  height: inherit;\n  cursor: move;\n}\n:host .cropper:after {\n  position: absolute;\n  content: '';\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  border: dashed 1px;\n  opacity: .75;\n  color: inherit;\n  z-index: 1;\n}\n:host .cropper .move {\n  width: 100%;\n  cursor: move;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n:host .cropper .resize {\n  position: absolute;\n  background: #53535C;\n}\n:host .cropper .resize.topleft {\n  top: -5px;\n  left: -5px;\n  cursor: nw-resize;\n}\n:host .cropper .resize.top {\n  top: -5px;\n  left: calc(50% - 5px);\n  cursor: n-resize;\n}\n:host .cropper .resize.topright {\n  top: -5px;\n  right: 5px;\n  cursor: ne-resize;\n}\n:host .cropper .resize.right {\n  top: calc(50% - 5px);\n  right: 5px;\n  cursor: e-resize;\n}\n:host .cropper .resize.bottomright {\n  bottom: 5px;\n  right: 5px;\n  cursor: se-resize;\n}\n:host .cropper .resize.bottom {\n  bottom: 5px;\n  left: calc(50% - 5px);\n  cursor: s-resize;\n}\n:host .cropper .resize.bottomleft {\n  bottom: 5px;\n  left: -5px;\n  cursor: sw-resize;\n}\n:host .cropper .resize.left {\n  top: calc(50% - 5px);\n  left: -5px;\n  cursor: w-resize;\n}\n:host .cropper .resize:after {\n  position: absolute;\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  content: '';\n  width: 8px;\n  height: 8px;\n  margin: auto;\n  opacity: .85;\n  z-index: 1;\n}\n:host .cropper .resize-bar {\n  position: absolute;\n  z-index: 1;\n}\n:host .cropper .resize-bar.top {\n  top: -5px;\n  left: 5px;\n  width: calc(100% - 10px);\n  height: 10px;\n  cursor: n-resize;\n}\n:host .cropper .resize-bar.right {\n  top: 5px;\n  right: -5px;\n  height: calc(100% - 10px);\n  width: 10px;\n  cursor: e-resize;\n}\n:host .cropper .resize-bar.bottom {\n  bottom: -5px;\n  left: 5px;\n  width: calc(100% - 10px);\n  height: 10px;\n  cursor: s-resize;\n}\n:host .cropper .resize-bar.left {\n  top: 5px;\n  left: -5px;\n  height: calc(100% - 10px);\n  width: 10px;\n  cursor: w-resize;\n}\n"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], ImageCropperComponent);

var _a;
//# sourceMappingURL=image-cropper.component.js.map

/***/ }),

/***/ "../../../../../src/app/info-panel/info-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info-panel/info-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  info-panel works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/info-panel/info-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoPanelComponent = (function () {
    function InfoPanelComponent() {
    }
    InfoPanelComponent.prototype.ngOnInit = function () {
    };
    return InfoPanelComponent;
}());
InfoPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info-panel',
        template: __webpack_require__("../../../../../src/app/info-panel/info-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/info-panel/info-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoPanelComponent);

//# sourceMappingURL=info-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blue-fonts\"><h4 class=\"text-center\">Please Login</h4></div>\n<form [formGroup]=\"loginForm\">\n\t<div class=\"form-group\">\n\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t<app-control-messages [control]=\"loginForm.controls.email\"></app-control-messages>\n\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n\t\t<app-control-messages [control]=\"loginForm.controls.password\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"showSignUp()\">\n\t\t\t<i class=\"fa fa-sign-in rotate-left\" aria-hidden=\"true\">\n\t\t\t</i><span>Sign Up</span>\n\t\t</button>\n\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" (click)=\"logIn()\">\n\t\t\t<span>Log in</span>\n\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n\t\t<div class=\"server-msg text-center\">{{serverMessage}}</div>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__ = __webpack_require__("../../../../../src/app/services/shareobject/routeinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__ = __webpack_require__("../../../../../src/app/services/data/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    /* get loginData(): any {
       return this.routeinfoService.routeData;
     }
     set loginData(value: any) {
       this.routeinfoService.routeData = value;
     }*/
    function LoginComponent(formBuilder, registrationService, routeinfoService) {
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.routeinfoService = routeinfoService;
        this.renderSignUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goHome = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.serverMessage = '';
        this.isError = false;
        this.isStatus = false;
        this.loginForm = this.formBuilder.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3_app_services_validators_validation_service__["a" /* ValidationService */].emailValidator]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8)]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.ngAfterContentInit = function () {
    };
    LoginComponent.prototype.ngAfterContentChecked = function () {
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        if (this.loginForm.dirty && this.loginForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'email': this.loginForm.value.email,
                'password': this.loginForm.value.password };
            this.registrationService.logIn(postObj).subscribe(function (data) { return _this.afterLogIn(data); });
        }
    };
    LoginComponent.prototype.afterLogIn = function (result) {
        if (result.status === 'failure') {
            this.isError = true;
            this.isStatus = false;
            this.serverMessage = result.message;
        }
        else {
            this.isError = false;
            this.isStatus = true;
            this.serverMessage = result.message + '. Redirecting to Home.';
            localStorage.setItem('currentUser', result.info.username);
            //setTimeout(()=>{ this.goHome.emit(result.status);}, 4000)
            localStorage.setItem('loginData', JSON.stringify(result.info));
            this.goHome.emit(result);
        }
    };
    LoginComponent.prototype.showSignUp = function () {
        this.renderSignUp.emit('complete');
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "renderSignUp", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__["a" /* RegistrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__["a" /* RegistrationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-overlay { background-color: rgba(0, 0, 0, 0.4); bottom: 0; left: 0; position: fixed; right: 0; top: 0; z-index: 1000; } .closed .modal { top: -100%; display: none;} .closed .modal-overlay { display: none; } .modal {  padding: 5px; display: block; box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.22), 0 17px 20px 0 rgba(0, 0, 0, 0.12); left: calc(50% - 300px); max-height: calc(100% - 10em); overflow-y: auto; position: fixed; top: 5em; width: 640px; z-index: 1100; transition: all .5s ease; } .modal .title { background-color: #2b90d9; text-align: center; color: white; line-height: 30px; } .modal .title .right-align { position: absolute; right: 9px; } .modal .title .right-align, .modal .title .right-align i { line-height: 30px; } .modal .title .right-align:hover { cursor: pointer; -webkit-transform: scale(1.1); transform: scale(1.1); } .modal .body { padding: 0em; } ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'closed': !isOpen}\">\n\t<div class=\"modal-overlay\" (click)=\"close(true)\"></div>\n\t<div class=\"modal opaque-bg\">\n\t  <div class=\"title\" *ngIf=\"modalTitle\">\n\t    <span class=\"title-text\">{{ modalTitle }}</span>\n\t    <span class=\"right-align\" (click)=\"close(true)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>\n\t  </div>\n\t  <div class=\"body\">\n\t    <ng-content></ng-content>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.onModalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.blocking = false;
        this.isOpen = false;
    }
    ModalComponent.prototype.onMouseEnter = function (event) {
        this.keyup(event);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.registerModal(this);
    };
    ModalComponent.prototype.close = function (checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        this.onModalClose.emit('close');
        this.modalService.close(this.modalId, checkBlocking);
    };
    ModalComponent.prototype.keyup = function (event) {
        if (event.keyCode === 27) {
            this.modalService.close(this.modalId, true);
        }
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ModalComponent.prototype, "onModalClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "blocking", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('keyup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalComponent.prototype, "onMouseEnter", null);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modal',
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")],
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */]) === "function" && _b || Object])
], ModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.registerModal = function (newModal) {
        var modal = this.findModal(newModal.modalId);
        // Delete existing to replace the modal
        if (modal) {
            this.modals.splice(this.modals.indexOf(modal));
        }
        this.modals.push(newModal);
    };
    ModalService.prototype.open = function (modalId) {
        var modal = this.findModal(modalId);
        if (modal) {
            modal.isOpen = true;
        }
    };
    ModalService.prototype.close = function (modalId, checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        var modal = this.findModal(modalId);
        if (modal) {
            if (checkBlocking && modal.blocking) {
                return;
            }
            modal.isOpen = false;
        }
    };
    ModalService.prototype.findModal = function (modalId) {
        for (var _i = 0, _a = this.modals; _i < _a.length; _i++) {
            var modal = _a[_i];
            if (modal.modalId === modalId) {
                return modal;
            }
        }
        return null;
    };
    return ModalService;
}());
ModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModalService);

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/private-nav/private-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-box:hover, .setting-btn:hover, .logout-btn:hover{\n\tborder: none;\n}\n.setting-btn, .logout-btn{\n\twidth: 15px;\n    margin: 0px 5px;\n\n}\n.search-box{\n    background-color: #f5f8fa;\n    border-radius: 2px;\n    box-sizing: border-box;\n    color: #14171a;\n    display: block;\n    font-size: 12px;\n    height: 25px;\n    line-height: 16px;\n    width: 180px;\n    margin-top: 15px;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    margin-left: 2px;\n}\n\n.fa-search{\n\tfloat: right;\n\tcolor: #2b90d9 !important;\n\tfont-size: 15px;\n\tline-height: 25px;\n}\n.fa-search:hover{\n\tcolor: #1da1f2;\n}\n.search-result-contents{\n    position: absolute;\n    width: 180px;\n    top: 34px;\n    z-index: 1000;\n    background: #fff;\n\n}\n\n.friend-request-pending-list{\n    position: absolute;\n    width: 301px;\n    top: 34px;\n    z-index: 1000;\n    background: #fff;\n}\n\napp-search-result-list-item{\n    width: 179px;\n    line-height: 30px;\n}\napp-friend-request-pending-list{\n    width: 300px;\n    line-height: 40px;\n}\n\n.add-border{\n    border: 1px solid #e6e6e6;\n    border-bottom: none;\n}\n.request-count{\n    position: absolute;\n    height: 15px;\n    width: auto;\n    background: red;\n    margin-top: 0px;\n    margin-left: 12px;\n    border: 1px solid white;\n    color: white;\n    padding: 0px 3px 1px 1px;\n}\n.request-count:hover{\n    background: #E74C3C;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/private-nav/private-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\" (window:resize)=\"onResize($event)\">\n  <button (click)=\"toggleNav()\" class=\"navbar-toggler navbar-toggler-right fa fa-bars\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  </button>\n  <div [ngClass]=\"('navbar-collapse ' + (active ? 'collapse' : ''))\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">\n          <i class=\"fa fa-users\" aria-hidden=\"true\">\n            <ng-container *ngIf=\"isFriendRequestPendingDisplay\">\n              <div class=\"request-count\" (click)='requestCountClick($event)'>{{friendRequestCount}}</div>\n            </ng-container>\n          </i><span>Friends</span></a>\n          <div class='friend-request-pending-list' [ngClass]=\"(isFriendReuestBorder ? 'add-border' : '')\" (click)=\"clickedInside($event)\">\n            <app-friend-request-pending-list (onFriendConfirmed)='onFriendConfirmed($event)'  class=\"in-line\" *ngFor=\"let item of friendRequestPendingList\" [item]=\"item\" >\n            </app-friend-request-pending-list>\n          </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>Messages</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i><span>Notifications</span></a>\n      </li>\n      <li class=\"nav-item search-box\">\n        <div>\n          <input class=\"search-input pull-left blue-fonts\" type=\"text\" id=\"search-query\" placeholder=\"Search Wefrenz\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [value]=\"searchValue\" (input)=\"querySearch($event.target.value)\"/>\n          <i class=\"fa fa-search pull-right cursor-pointer\" aria-hidden=\"true\"></i>\n        </div>\n        <div class='search-result-contents' [ngClass]=\"(isBorder ? 'add-border' : '')\" (click)=\"clickedInside($event)\">\n          <app-search-result-list-item  class=\"in-line\" *ngFor=\"let item of searchResultList\" [item]=\"item\">\n          </app-search-result-list-item>\n        </div>\n      </li>\n      <li class=\"nav-item setting-btn\">\n        <span class=\"nav-link\"><i class=\"fa fa-cog cursor-pointer\" aria-hidden=\"true\"></i></span>\n      </li>\n      <li class=\"nav-item logout-btn\" >\n        <span class=\"nav-link\">\n          <i class=\"fa fa-sign-out cursor-pointer\" aria-hidden=\"true\" (click)=\"logOut()\"></i>\n        </span>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/private-nav/private-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_search_service__ = __webpack_require__("../../../../../src/app/services/data/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrivateNavComponent = (function () {
    function PrivateNavComponent(router, searchService, friendsService) {
        this.router = router;
        this.searchService = searchService;
        this.friendsService = friendsService;
        this.active = false;
        this.innerWidth = 0;
        this.searchResultList = undefined;
        this.friendRequestPendingList = undefined;
        this.reqArr = undefined;
        this.isBorder = false;
        this.isFriendReuestBorder = false;
        this.searchValue = '';
        this.friendRequestCount = 0;
        this.isFriendRequestPendingDisplay = false;
        this.userId = '';
        this.userId = localStorage.getItem('currentUser');
    }
    PrivateNavComponent.prototype.ngOnInit = function () {
        this.checkInnerWidth();
        //this.instance.removeSearchResult.subscribe((data) => this.removeSearchResult(data));
    };
    PrivateNavComponent.prototype.ngAfterViewInit = function () {
        this.pullNotifications();
        this.subscribeToNotifications();
    };
    PrivateNavComponent.prototype.removeSearchResult = function (event) {
        alert('removeSearchResult plz');
    };
    PrivateNavComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('loginData');
        this.router.navigate(['public']);
    };
    PrivateNavComponent.prototype.onResize = function (event) {
        this.checkInnerWidth();
    };
    PrivateNavComponent.prototype.checkInnerWidth = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PrivateNavComponent.prototype.toggleNav = function (event) {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PrivateNavComponent.prototype.querySearch = function (searchQuery) {
        var _this = this;
        var postObj = { 'searchparam': searchQuery };
        this.searchService.querySearch(postObj).subscribe(function (data) { return _this.afterSearch(data); });
    };
    PrivateNavComponent.prototype.afterSearch = function (data) {
        this.searchResultList = data;
        if (this.searchResultList.length > 0) {
            this.isBorder = true;
        }
        else {
            this.isBorder = false;
        }
    };
    PrivateNavComponent.prototype.clickedOutside = function ($event) {
        this.searchResultList = [];
        this.friendRequestPendingList = [];
        this.isFriendReuestBorder = false;
    };
    PrivateNavComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
        this.searchResultList = [];
        //this.friendRequestPendingList = [];
    };
    PrivateNavComponent.prototype.requestCountClick = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.isFriendRequestPendingDisplay = false;
        this.friendRequestCount = 0;
        var postObj = { 'reqarr': this.reqArr };
        this.friendsService.getRequestDetails(postObj).subscribe(function (data) { return _this.afterGetRequestDetails(data); });
    };
    PrivateNavComponent.prototype.afterGetRequestDetails = function (data) {
        if (data.length > 0) {
            this.isFriendReuestBorder = true;
            this.friendRequestPendingList = data;
        }
        else {
            this.isFriendReuestBorder = false;
        }
    };
    PrivateNavComponent.prototype.subscribeToNotifications = function () {
        var _this = this;
        setInterval(function () { _this.pullNotifications(); }, 1000 * 5);
    };
    //Pulling notifications in every 5 seconds
    PrivateNavComponent.prototype.pullNotifications = function () {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.friendsService.getFriendReq(postObj).subscribe(function (data) { return _this.afterGetFriendReq(data); });
    };
    //Keeping the requester userid in array to query from userinfo collection
    PrivateNavComponent.prototype.afterGetFriendReq = function (data) {
        this.friendRequestCount = data.length;
        this.reqArr = [];
        if (this.friendRequestCount > 0) {
            this.isFriendRequestPendingDisplay = true;
            for (var obj in data) {
                this.reqArr.push(data[obj].requester);
            }
        }
    };
    //Removing the confirmed friend from the list
    PrivateNavComponent.prototype.onFriendConfirmed = function (event) {
        for (var i in this.friendRequestPendingList) {
            if (event.data.requester === this.friendRequestPendingList[i].username) {
                this.friendRequestPendingList.splice(i, 1);
                if (this.friendRequestPendingList.length === 0) {
                    this.isFriendReuestBorder = false;
                }
            }
        }
    };
    return PrivateNavComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PrivateNavComponent.prototype, "clickedOutside", null);
PrivateNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-private-nav',
        template: __webpack_require__("../../../../../src/app/private-nav/private-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/private-nav/private-nav.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_data_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__["a" /* FriendsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_search_service__["a" /* SearchService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _c || Object])
], PrivateNavComponent);

var _a, _b, _c;
//# sourceMappingURL=private-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-area/profile-area.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-pic{\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tborder: 1px solid #e6e6e6;\n}\n.user-info .full-name, .user-info .email-id{\n\tword-break: break-all;\n\tpadding-left: 5px;\n}\n.profile-card{\n\tmargin: 5px;\n}\n\n.email-id:hover a, .full-name:hover{\n\tcolor:  #1da1f2 !important;\n}\n.profile-card .title-bar{\n    background: rgba(0,0,0, 0.6);\n    margin-top: 57px;\n    height: 15px;\n    width: 100%;\n    height: 18px;\n}\n.title-bar .cam-icon{\n\tmargin: 0px 5px 0px 2px;\n}\n.title-bar .cam-icon i:hover, .title-bar .upload-icon i:hover{\n\tcolor: #1da1f2;\n}\n.file-input-container{\n\tdisplay: none;\n\theight: 0px;\n\twidth: 0px;\n}\n\n.preview-profile-pic img{\n\twidth: 100%;\n}\napp-image-cropper {\n  max-width: 640px;\n  margin-bottom: 25px;\n}\n.cropped-preview-img{\n\tdisplay: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-area/profile-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row profile-card\">\n    <app-modal [modalTitle]=\"'Profile Pic Preview'\" [blocking]='false' [modalId]='modalId' #previewPicModal \n    (onModalClose)=\"onModalClosed()\">\n    \t<div *ngIf=\"isProfilePicControls;then profilePicControls else profilePicCam\"></div>\n    \t<ng-template #profilePicControls>\n\t    \t<div class=\"preview-profile-pic\">\n\t    \t\t<!--<img id=\"previewProfilePic\" src=\"{{encodedImage}}\"/>-->\n\t\t\t    <app-image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [resizeToWidth]=\"150\" format=\"jpeg\" \n\t\t\t    (imageCropped)=\"imageCropped($event)\"></app-image-cropper>\n\t    \t</div>\n\t    \t<img class=\"cropped-preview-img\" [src]=\"croppedImage\" (load)=\"computeCroppedImage()\"/>\n\t      \t<div>\t\t\t\n\t    \t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"ok()\">\n\t\t\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #profilePicCam >\n\t\t\t<app-capture-pic (onCapturePic)=\"onPicCaptured()\" (onCamRender)=\"onCamRendered()\"></app-capture-pic>\n\t\t</ng-template>\n    </app-modal>\n\t<div class=\"file-input-container\">\n\t\t<!--<form [formGroup]=\"profilePicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<div class=\"form-group\" [formGroup]=\"profilePicGroup\">\n\t  \t\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t  \t\t</div>\n\t\t</form>-->\n\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t</div>\n\t<div class=\"profile-pic col-xs-12 col-sm-4 col-md-12 col-lg-4 col-xl-4 no-padding\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')', 'height': 'auto', 'width': profilePicWidth}\">\n\t\t<div class=\"title-bar\">\n\t\t\t<div class=\"pull-left cam-icon\">\n\t\t\t\t<i class=\"fa fa-camera white-fonts hand-cursor\" aria-hidden=\"true\" (click)=\"camInputClick()\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"upload-icon\"><i class=\"fa fa-upload white-fonts hand-cursor\" aria-hidden=\"true\" \n\t\t\t(click)=\"fileInput.value = ''; fileInput.click()\"></i></div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-xs-12 col-sm-8 col-md-12 col-lg-8 col-xl-8 no-padding user-info\">\n\t\t<div class=\"row no-margin blue-fonts full-name hand-cursor\" (click)=\"navigateToMyProfile($event);\">{{fullName}}</div>\n\t\t<div class=\"row no-margin email-id\"><a href=\"mailto:\" class=\"no-text-decoration blue-fonts\">{{email}}</a></div>\n\t<div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile-area/profile-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__ = __webpack_require__("../../../../../src/app/services/data/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileAreaComponent = (function () {
    function ProfileAreaComponent(router, formBuilder, modalService, uploadService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.modalId = 'appModal';
        this.loginData = undefined;
        this.isProfilePicControls = true;
        this.localStream = null;
        this.isCamRendered = false;
        this.profilePicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.profilePicGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    }
    ProfileAreaComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.fullName = this.loginData.fullname;
        this.email = this.loginData.username;
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.height + 'px';
    };
    ProfileAreaComponent.prototype.navigateToMyProfile = function (event) {
        this.router.navigate(['profile', this.email]);
    };
    ProfileAreaComponent.prototype.openAppModal = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    /*fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }*/
    ProfileAreaComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    ProfileAreaComponent.prototype.computeCroppedImage = function () {
        var elem = document.querySelector('#croppedPreviewImg');
    };
    ProfileAreaComponent.prototype.fileChangeEvent = function (event) {
        this.isProfilePicControls = true;
        this.imageChangedEvent = event;
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.encodedImage = e.target.result;
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        /*var files = fileInput.srcElement.files;
        console.log(files);
        this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
          console.log('sent');
        });*/
    };
    ProfileAreaComponent.prototype.camInputClick = function () {
        this.isProfilePicControls = false;
        this.openAppModal();
        if (this.isCamRendered) {
            this.onCamRendered();
        }
    };
    ProfileAreaComponent.prototype.uploadEncodedProfilePic = function (encodedImage) {
        var _this = this;
        var postObj = { 'previewpicdimension': (150 + 'x' + 150), 'profilepicdimension': (75 + 'x' + 75), 'imagebuffer': encodedImage };
        this.uploadService.uploadEncodedProfilePic(postObj).subscribe(function (data) { return _this.afterProfilePicUploaded(data); });
    };
    ProfileAreaComponent.prototype.ok = function () {
        this.uploadEncodedProfilePic(this.croppedImage);
    };
    ProfileAreaComponent.prototype.capture = function () {
        var canvas = document.getElementById('profilePicCanvas');
        var dataURI = canvas.toDataURL('image/jpeg', 1.0);
        this.uploadEncodedProfilePic(dataURI);
    };
    ProfileAreaComponent.prototype.onPicCaptured = function () {
        this.capture();
    };
    ProfileAreaComponent.prototype.onCamRendered = function () {
        this.isCamRendered = true;
        if (!this.isProfilePicControls) {
            var _self_1 = this;
            var video_1 = document.getElementById('profilePicVideo');
            var canvas_1 = document.getElementById('profilePicCanvas');
            var ctx_1 = canvas_1.getContext('2d');
            navigator.getUserMedia = navigator.getUserMedia;
            var errorCallback = function (e) {
                console.log('Rejected!', e);
            };
            video_1.addEventListener('play', function () {
                canvas_1.width = video_1.videoWidth;
                canvas_1.height = video_1.videoHeight;
                var self = this; //cache
                (function loop() {
                    if (!self.paused && !self.ended) {
                        ctx_1.drawImage(self, 0, 0, canvas_1.width, canvas_1.height);
                        setTimeout(loop, 1000 / 30); // drawing at 30fps
                    }
                })();
            }, false);
            if (navigator.getUserMedia) {
                navigator.getUserMedia({ audio: false, video: true }, function (stream) {
                    //this._self.localStream = stream;
                    _self_1.localStream = stream;
                    video_1.src = window.URL.createObjectURL(stream);
                }, errorCallback);
            }
            else {
                alert("Your Browser does not support Camera");
                //video.src = 'somevideo.webm'; // fallback.
            }
        }
    };
    ProfileAreaComponent.prototype.afterProfilePicUploaded = function (result) {
        //alert(result.message);
        if (result.status === 'success') {
            this.profilePic = result.info.profilepic.imageBuffer;
            localStorage.setItem('loginData', JSON.stringify(result.info));
            this.previewPicModal.close();
        }
    };
    ProfileAreaComponent.prototype.onModalClosed = function () {
        if (this.localStream != null) {
            //localStream.stop();
            var track = this.localStream.getTracks()[0]; // if only one media track
            track.stop();
        }
    };
    return ProfileAreaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('croppedPreviewImg'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ProfileAreaComponent.prototype, "croppedPreviewImg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('previewPicModal'),
    __metadata("design:type", Object)
], ProfileAreaComponent.prototype, "previewPicModal", void 0);
ProfileAreaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile-area',
        template: __webpack_require__("../../../../../src/app/profile-area/profile-area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-area/profile-area.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__["a" /* UploadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__["a" /* ModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__["a" /* UploadService */]) === "function" && _e || Object])
], ProfileAreaComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover-pic-area{\n\tpadding: 5px !important;\n\twidth: 768px;\n}\n.cover-profile-pic{\n\tbackground-size: cover;\n    margin: -125px 0px 0px 20px;\n    height: 150px;\n    width: 150px;\n    position: absolute;\n    border: 3px solid rgba(255, 255, 255, 0.8);\n}\n\n.cover-profile-pic .title-bar{\n\tposition: absolute;\n    bottom: 0px;\n    background: rgba(0,0,0, 0.6);\n    width: 144px;\n    margin-left: 0px !important;\n    padding: 5px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container\">\n\t<div class=\"opaque-bg cover-pic-area top-margin\">\n\t\t<app-coverpic #appCoverPic ></app-coverpic>\n\t</div>\n\t<div class=\"cover-profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\">\n\t\t<div class='title-bar row no-margin white-fonts full-name'>{{fullName}}</div> \n\t\t<ng-container *ngIf=\"isMyProfile\">\n\t\t\t<b>Its me</b>\n\t\t</ng-container>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__ = __webpack_require__("../../../../../src/app/services/data/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(route, router, profileService, friendsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.profileService = profileService;
        this.friendsService = friendsService;
        this.routeSwitch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.profilePic = '';
        this.profilePicHeight = '';
        this.profilePicWidth = '';
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            var obj = { 'userid': currentUser, 'friendid': id };
            _this.sharedList = obj;
            if (!currentUser) {
                _this.router.navigate(['public']);
                return;
            }
            else {
                localStorage.setItem('currentRoute', 'profile/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                _this.friendsService.getFriendInfo(postObj).subscribe(function (data) { return _this.afterFriendInfo(data); });
            }
            //this.routeSwitch.emit(this.isMyProfile);
            _this.getProfileInfo(id);
        });
    }
    ProfileComponent.prototype.onPopState = function (event) {
        localStorage.removeItem('currentRoute');
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.afterFriendInfo = function (result) {
        this.appCoverPic.updateFriendsControlsSettings(result);
    };
    ProfileComponent.prototype.getProfileInfo = function (profileId) {
        var _this = this;
        var postObj = JSON.stringify({ profileid: profileId });
        this.profileService.profileInfo(postObj).subscribe(function (data) { return _this.afterProfileInfo(data); });
    };
    ProfileComponent.prototype.afterProfileInfo = function (result) {
        if (this.isMyProfile) {
            this.appCoverPic.isAddFriend = false;
            this.appCoverPic.isRequestPending = false;
        }
        else {
            this.appCoverPic.userId = this.userId;
            this.appCoverPic.friendId = this.friendId;
        }
        if (result.status === 'failure') {
            alert('Error fetching profile info');
        }
        else {
            this.profilePic = result.profilepic.imageBuffer;
            this.appCoverPic.coverPicURL = __WEBPACK_IMPORTED_MODULE_4_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/' + result.wallpicpath;
            this.appCoverPic.updateCoverPicSettings(result);
            //this.profilePicWidth = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.width + 'px';
            //this.profilePicHeight = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.height + 'px';
            this.fullName = result.fullname;
        }
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('appCoverPic'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "appCoverPic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ProfileComponent.prototype, "routeSwitch", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:popstate', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileComponent.prototype, "onPopState", null);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__["a" /* FriendsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__["a" /* ProfileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/public-nav/public-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-nav/public-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\" (window:resize)=\"onResize($event)\" >\n  <button (click)=\"toggleNav()\" class=\"navbar-toggler navbar-toggler-right fa fa-bars\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  </button>\n  <div [ngClass]=\"('navbar-collapse ' + (active ? 'collapse' : ''))\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i><span>Services</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i><span>Testimonials</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i><span>Blog</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-cc-discover\" aria-hidden=\"true\"></i><span>About</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i><span>Contact</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/public-nav/public-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicNavComponent = (function () {
    function PublicNavComponent() {
        this.active = false;
        this.innerWidth = 0;
    }
    PublicNavComponent.prototype.ngOnInit = function () {
        this.checkInnerWidth();
    };
    PublicNavComponent.prototype.onResize = function (event) {
        this.checkInnerWidth();
    };
    PublicNavComponent.prototype.checkInnerWidth = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PublicNavComponent.prototype.toggleNav = function (event) {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    return PublicNavComponent;
}());
PublicNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public-nav',
        template: __webpack_require__("../../../../../src/app/public-nav/public-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/public-nav/public-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PublicNavComponent);

//# sourceMappingURL=public-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/public/public.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.search-form{\n\twidth: 300px;\n\tfloat: left;\n}*/\n.login-signup{\n    width: 280px;\n    margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<app-public-nav></app-public-nav>\n<div class=\"container h-100 login-signup opaque-bg\">\n  <div class=\"row no-margin h-100 justify-content-center align-items-center\">\n    <!--<app-login></app-login>\n    <app-signup></app-signup>-->\n    <div #loginSignUp></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicComponent = (function () {
    function PublicComponent(componentFactoryResolver, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        if (localStorage.getItem('currentUser')) {
            if (localStorage.getItem('currentRoute')) {
                var routePath = localStorage.getItem('currentRoute');
                this.router.navigate([routePath]);
            }
            /*this.router.events.pairwise().subscribe((e) => {
                console.log("eeeeeee"+e);
            });*/
        }
    }
    PublicComponent.prototype.ngAfterContentInit = function () {
        this.createLoginPanel();
    };
    PublicComponent.prototype.ngAfterContentChecked = function () {
    };
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent.prototype.createLoginPanel = function () {
        var _this = this;
        if (this.signupRef) {
            this.signupRef.instance.renderLogin.unsubscribe(function (data) { return _this.callLogin(data); });
            this.signupRef.instance.accountCreated.unsubscribe(function (data) { return _this.accountCreated(data); });
            this.signupRef.destroy();
        }
        this.loginComponent = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]);
        this.loginRef = this.loginSignUp.createComponent(this.loginComponent);
        this.loginRef.instance.renderSignUp.subscribe(function (data) { return _this.callSignUp(data); });
        this.loginRef.instance.goHome.subscribe(function (data) { return _this.goHome(data); });
    };
    PublicComponent.prototype.createSignupPanel = function () {
        var _this = this;
        this.signupComponent = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */]);
        this.loginRef.instance.renderSignUp.unsubscribe(function (data) { return _this.callSignUp(data); });
        this.loginRef.instance.goHome.unsubscribe(function (data) { return _this.goHome(data); });
        this.loginRef.destroy();
        this.signupRef = this.loginSignUp.createComponent(this.signupComponent);
        this.signupRef.instance.renderLogin.subscribe(function (data) { return _this.callLogin(data); });
        this.signupRef.instance.accountCreated.subscribe(function (data) { return _this.accountCreated(data); });
    };
    PublicComponent.prototype.ngAfterViewInit = function () {
        //this.createLoginPanel();
    };
    PublicComponent.prototype.callSignUp = function (data) {
        this.createSignupPanel();
    };
    PublicComponent.prototype.goHome = function (data) {
        this.router.navigate(['home']);
    };
    PublicComponent.prototype.callLogin = function (data) {
        this.createLoginPanel();
    };
    PublicComponent.prototype.accountCreated = function (data) {
        if (data === 'success') {
            this.createLoginPanel();
        }
    };
    return PublicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loginSignUp', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object)
], PublicComponent.prototype, "loginSignUp", void 0);
PublicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public',
        template: __webpack_require__("../../../../../src/app/public/public.component.html"),
        styles: [__webpack_require__("../../../../../src/app/public/public.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PublicComponent);

var _a, _b, _c;
//# sourceMappingURL=public.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-result-list-item/search-result-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-row{\n\twidth: 178px;\n\tpadding-right: 5px;\n\tborder-bottom: 1px solid #e6e6e6;\n}\n\n.item-row:hover{\n\tbackground: #f5f8fa;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-result-list-item/search-result-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row\" (click)=\"searchListItemClick($event)\">\n\t<div class=\"profile-pic-small pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-right\">{{fullName}}</div> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-result-list-item/search-result-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultListItemComponent = (function () {
    function SearchResultListItemComponent(router) {
        this.router = router;
        this.isSearchResult = false;
    }
    SearchResultListItemComponent.prototype.ngOnInit = function () {
        //this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.email = this.item.username;
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    SearchResultListItemComponent.prototype.searchListItemClick = function (event) {
        //if(this.router.url === '/home'){
        this.router.navigate(['profile', this.email]);
        //}else{
        //}
    };
    return SearchResultListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchResultListItemComponent.prototype, "item", void 0);
SearchResultListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-result-list-item',
        template: __webpack_require__("../../../../../src/app/search-result-list-item/search-result-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-result-list-item/search-result-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], SearchResultListItemComponent);

var _a;
//# sourceMappingURL=search-result-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationService = (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.saveCoverPicPos = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/saveCoverPicPos", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return ConfigurationService;
}());
ConfigurationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigurationService);

var _a;
//# sourceMappingURL=configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/friends.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendsService = (function () {
    function FriendsService(http) {
        this.http = http;
    }
    FriendsService.prototype.setFriendInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/setFriendInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getFriendInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getFriendInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getFriendReq = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getFriendReq", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getAllFriendReq = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getAllFriendReq", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getRequestDetails = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getRequestDetails", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.confirmFriendReq = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/confirmFriendReq", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return FriendsService;
}());
FriendsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FriendsService);

var _a;
//# sourceMappingURL=friends.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.profileInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/profileInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationService = (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.signUp = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/signUp", postObj, options)
            .map(function (res) { return res.json(); });
    };
    RegistrationService.prototype.logIn = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/logIn", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegistrationService);

var _a;
//# sourceMappingURL=registration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.querySearch = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/querySearch", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Observable } from 'rxjs/Rx';
var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
        /*this.progress = Observable.create(observer => {
            this.progressObserver = observer
        }).share();*/
    }
    /*public makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);

                //this.progressObserver.next(this.progress);
            };

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }*/
    UploadService.prototype.uploadEncodedProfilePic = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/uploadEncodedProfilePic", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings/app-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsService; });
var port = 3000;
var AppSettingsService = (function () {
    function AppSettingsService() {
    }
    AppSettingsService.API_ENDPOINT = function (environment) {
        switch (environment) {
            case "local":
                return "https://localhost:" + port;
            case "dev":
                return "https://www.dev-wefrenz.com:" + port;
            case "prod":
                return "https://www.wefrenz.com" + port;
        }
    };
    return AppSettingsService;
}());

//# sourceMappingURL=app-settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shareobject/routeinfo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteinfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouteinfoService = (function () {
    function RouteinfoService() {
    }
    return RouteinfoService;
}());
RouteinfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RouteinfoService);

//# sourceMappingURL=routeinfo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utility/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var UtilityService = (function () {
    function UtilityService() {
    }
    UtilityService.getPicDimension = function (dimension) {
        var width = dimension.split('x')[0];
        var height = dimension.split('x')[1];
        return { 'dimension': { 'width': width, 'height': height } };
    };
    UtilityService.getPicPosition = function (position) {
        var x = position.split('x')[0];
        var y = position.split('x')[1];
        return { 'position': { 'x': x, 'y': y } };
    };
    return UtilityService;
}());

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validators/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 8 characters long, and contain a number.',
            'minlength': 'Minimum length ' + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blue-fonts\"><h4 class=\"text-center\">Please Sign Up</h4></div>\n<form [formGroup]=\"signupForm\">\n\t<div class=\"form-group\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"fullName\" id=\"fullName\">\n\t\t<app-control-messages [control]=\"signupForm.controls.fullName\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t<app-control-messages [control]=\"signupForm.controls.email\"></app-control-messages>\n\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n\t\t<app-control-messages [control]=\"signupForm.controls.password\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"showLogin()\">\n\t\t\t<i class=\"fa fa-sign-in rotate-left\" aria-hidden=\"true\"></i>\n\t\t\t<span>Login</span>\n\t\t</button>\n\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!signupForm.valid\" (click)=\"signUp()\">\n\t\t\t<span>Sign Up</span>\n\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\"><div class=\"server-msg text-center\">{{serverMessage}}</div></div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__ = __webpack_require__("../../../../../src/app/services/data/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(formBuilder, registrationService) {
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.renderLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.accountCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.serverMessage = '';
        this.isError = false;
        this.isStatus = false;
        this.signupForm = this.formBuilder.group({
            'fullName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].emailValidator]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8)]]
        });
    }
    SignupComponent.prototype.ngAfterViewInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (this.signupForm.dirty && this.signupForm.valid) {
            var postObj = { 'fullname': this.signupForm.value.fullName,
                'email': this.signupForm.value.email,
                'password': this.signupForm.value.password };
            this.registrationService.signUp(postObj).subscribe(function (data) { return _this.afterSignUp(data); });
            ;
        }
    };
    SignupComponent.prototype.afterSignUp = function (result) {
        if (result.status === 'failure') {
            this.isError = true;
            this.isStatus = false;
            this.serverMessage = result.message;
        }
        else {
            this.isError = false;
            this.isStatus = true;
            this.serverMessage = result.message + ' Redirecting to Login.';
            //setTimeout(()=>{ this.accountCreated.emit(result.status);}, 4000)
            this.accountCreated.emit(result.status);
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.showLogin = function () {
        this.renderLogin.emit('complete');
    };
    return SignupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "renderLogin", void 0);
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__["a" /* RegistrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__["a" /* RegistrationService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/tile-menu/tile-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stories-tile{\n    margin: 5px;\n}\n.entertainment-tile{\n\tmargin: 5px 5px 0px 0px;\n}\n.people-tile{\n\tmargin: 0px 5px;\n}\n.market-tile{\n\tmargin: 0px 5px 0px 0px;\n}\n.tile-name{\n\tcolor: #2b90d9;\n\tfont-size: 15px;\n\tmargin-left: 5px;\n}\n.tile-info{\n\tcolor: #2b90d9;\t\n}\n.tile-thumb:hover{\n\tborder: 1px solid #1da1f2;\n}\n.tile-thumb:hover .tile-name, .tile-thumb:hover .tile-info, .tile-thumb:hover i{\n\tcolor: #1da1f2;\n} \n.high-light-border{\n\tborder: 1px solid #1da1f2 !important;\n}\n\n.low-light-border{\n\tborder: 1px solid ##2b90d9 !important;\n}\n.tile-thumb, .tile-thumb *{\n\tcursor: pointer;\n}\n.tile-thumb{\n\tmin-height: 105px;\n}\n\n@media only screen and (max-width: 991px) {\n\t.tile-thumb{\n\t\tmin-height: 150px;\n\t}\n   .entertainment-tile{\n   \t\tmargin: 5px 5px 5px 0px;\n   \t} \n   \t.market-tile{\n   \t\tmargin: 0px 5px 0px 0px;\n   \t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.entertainment-tile{\n    \tmargin: 0px 5px 5px 5px;\n    }\n    .market-tile{\n    \tmargin: 5px 5px 0px 5px;\n\t}\n}\t", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tile-menu/tile-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb stories-tile\">\n\t\t\t\t<i class=\"fa fa-book fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">Stories</span>\n\t\t\t\t<div class=\"tile-info\">Check what stories, photos, music, videos people posted.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\"><div class=\"opaque-bg inner-padding tile-thumb entertainment-tile\">\n\t\t\t<i class=\"fa fa-television fa-3x\" aria-hidden=\"true\"></i><span class=\"tile-name\">Entertainment</span>\n\t\t\t<div class=\"tile-info\">View & upload photos, music, videos.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb people-tile\">\n\t\t\t\t<i class=\"fa fa-users fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">People</span>\n\t\t\t\t<div class=\"tile-info\">Find people from your locality or any where across the world.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb market-tile\">\n\t\t\t\t<i class=\"fa fa-shopping-bag fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">Market</span>\n\t\t\t\t<div class=\"tile-info\">Buy, sale, advertise any item.</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tile-menu/tile-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TileMenuComponent = (function () {
    function TileMenuComponent() {
        this.activeHighLight = false;
        this.activeHighLightStories = false;
    }
    TileMenuComponent.prototype.ngOnInit = function () {
    };
    return TileMenuComponent;
}());
TileMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tile-menu',
        template: __webpack_require__("../../../../../src/app/tile-menu/tile-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tile-menu/tile-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TileMenuComponent);

//# sourceMappingURL=tile-menu.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map