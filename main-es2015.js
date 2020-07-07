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

/***/ "./src/app/adkar/adkar.component.ts":
/*!******************************************!*\
  !*** ./src/app/adkar/adkar.component.ts ***!
  \******************************************/
/*! exports provided: AdkarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdkarComponent", function() { return AdkarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _infoadkars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infoadkars.service */ "./src/app/infoadkars.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AdkarComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdkarComponent_div_12_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.FunctionAdkar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const infoadkar_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", infoadkar_r1.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](infoadkar_r1.TITLE);
} }
;
class AdkarComponent {
    constructor(infoadkarss) {
        this.infoadkarss = infoadkarss;
        this.infoadkars = null;
    }
    Functiondates(id, info) {
        const url = 'http://www.mp3quran.net/api/husn/ar/' + id + '.json';
        const http = new XMLHttpRequest();
        http.open('GET', url);
        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const results = JSON.parse((this.responseText));
                jquery__WEBPACK_IMPORTED_MODULE_1__('#Title').remove();
                jquery__WEBPACK_IMPORTED_MODULE_1__('.Text').remove();
                jquery__WEBPACK_IMPORTED_MODULE_1__('AUDIO').remove();
                // tslint:disable-next-line: forin
                for (const key1 in results) {
                    const arrayres = results[key1];
                    const newH1 = document.createElement('h1');
                    newH1.setAttribute('style', 'font-size: 50px;border-width:5px;border-bottom-style:solid');
                    const newContent = document.createTextNode(key1);
                    newH1.appendChild(newContent);
                    const Audio = document.createElement('AUDIO');
                    Audio.setAttribute('controls', 'controls');
                    const source = document.createElement('source');
                    // tslint:disable-next-line: prefer-for-of
                    var numid = id;
                    const res = info;
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < res.length; i++) {
                        if (numid == res[i].ID) {
                            source.setAttribute('src', res[i].AUDIO_URL);
                        }
                    }
                    source.setAttribute('type', 'audio/mpeg');
                    Audio.appendChild(source);
                    const att = document.createAttribute('id');
                    att.value = 'Title';
                    newH1.setAttributeNode(att);
                    const currentDiv = document.getElementById('general');
                    currentDiv.appendChild(newH1);
                    currentDiv.appendChild(Audio);
                    // tslint:disable-next-line: prefer-for-of
                    for (let index = 0; index < arrayres.length; index++) {
                        const newp = document.createElement('p');
                        const newContent2 = document.createTextNode(arrayres[index].Text);
                        newp.appendChild(newContent2);
                        const att2 = document.createAttribute('class');
                        att2.value = 'Text pb-3 pt-3 pr-1 pl-1';
                        newp.setAttribute('style', 'border:1px black solid');
                        newp.setAttributeNode(att2);
                        currentDiv.appendChild(newp);
                    }
                }
            }
        };
        http.send();
        jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({ scrollTop: 0 }, 'slow');
    }
    FunctionAdkar(event) {
        const id = event.target.attributes.id.value;
        this.infoadkars = this.infoadkarss.retornar();
        this.Functiondates(id, this.infoadkars);
    }
    SearchBar() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            }
            else {
                li[i].style.display = "none";
            }
        }
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#first').remove();
        this.infoadkars = this.infoadkarss.retornar();
        this.Functiondates(27, this.infoadkars);
    }
}
AdkarComponent.ɵfac = function AdkarComponent_Factory(t) { return new (t || AdkarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_infoadkars_service__WEBPACK_IMPORTED_MODULE_2__["InfoadkarsService"])); };
AdkarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdkarComponent, selectors: [["app-adkar"]], decls: 13, vars: 1, consts: [[1, "row", "mt-5", "ml-5", "mr-5", "mb-5"], [1, "col-sm-8", "mt-3", "mb-3"], [1, "card"], ["id", "general", 1, "card-body", "text-center", "general"], [1, "col-sm-4", "mt-3", "mb-3"], [1, "card-body", "text-center"], [1, "card-title"], [1, "md-form", "active-pink", "active-pink-2", "mt-4", "mr-3", "ml-3", "mb-4"], ["type", "text", "placeholder", " ... \u0627\u0644\u0628\u062D\u062B", "aria-label", "Search", "id", "myInput", 1, "form-control", "text-right", 3, "keyup"], ["id", "myUL", 1, "list-group"], [4, "ngFor", "ngForOf"], [1, "list-group-item", "mb-1"], ["type", "button", 1, "btn", "btn-info", "btn-lg", "btn-block", 3, "id", "click"]], template: function AdkarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ":\u0627\u0644\u0641\u0647\u0631\u0633");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdkarComponent_Template_input_keyup_10_listener() { return ctx.SearchBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdkarComponent_div_12_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infoadkars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".general[_ngcontent-%COMP%]{\r\n      font-family:adobe arabic;\r\n      font-size:22px;\r\n      direction:rtl;\r\n      color: black;\r\n      background-color: rgb(219, 219, 219);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRrYXIvYWRrYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLHdCQUF3QjtNQUN4QixjQUFjO01BQ2QsYUFBYTtNQUNiLFlBQVk7TUFDWixvQ0FBb0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9hZGthci9hZGthci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbmVyYWx7XHJcbiAgICAgIGZvbnQtZmFtaWx5OmFkb2JlIGFyYWJpYztcclxuICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICAgIGRpcmVjdGlvbjpydGw7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdkarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adkar',
                templateUrl: './adkar.component.html',
                styleUrls: ['./adkar.component.css']
            }]
    }], function () { return [{ type: _infoadkars_service__WEBPACK_IMPORTED_MODULE_2__["InfoadkarsService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["adkar"]; };
const _c1 = function () { return ["quran-al-karim"]; };
const _c2 = function () { return ["salat"]; };
class AppComponent {
    constructor() {
        this.title = 'infoinslam';
    }
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 39, vars: 6, consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", "integrity", "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-secondary", "text-dark", "static-top"], [1, "container"], ["href", "/", 1, "navbar-brand"], ["src", "assets/LOGO/Infoislamlogo.png", "alt", "logo", "width", "140px", "height", "160px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "sr-only"], ["id", "first"], ["id", "page-container", 1, "content"], [1, "killer", "pb-5"], [1, "container", "conte", "mt-5"], [1, "row", "mt-5"], [1, "col", "mt-5", "animacion", "center-block"], [1, "globe", "center-block"], ["src", "https://images.unsplash.com/photo-1544685472-cca59893ac0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80", "alt", "Responsive image", 1, "img-fluid"], [1, "col", "text-center", "enter", "align-items-center", "pt-3", "mt-5"], [1, "mt-5", "arabe"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u062D\u0635\u0646 \u0627\u0644\u0645\u0633\u0644\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0627\u0644\u0642\u0631\u0627\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0627\u0648\u0642\u0627\u062A \u0627\u0644\u0635\u0644\u0627\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "InfoIslam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u0647\u0648 \u0639\u0628\u0627\u0631\u0629 \u0639\u0646 \u062A\u0637\u0628\u064A\u0642 \u0648\u064A\u0628 \u064A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639 \u0627\u0644\u0649 \u0627\u0644\u0642\u0631\u0627\u0646 \u0627\u0644\u0643\u0631\u064A\u0645 \u0628\u0635\u0648\u062A \u0623\u0634\u0647\u0631 \u0627\u0644\u0642\u0631\u0627\u0621 \u0648\u0645\u0639\u0631\u0641\u0629 \u0627\u0648\u0642\u0627\u062A \u0635\u0644\u0627\u0629 \u0648 \u0643\u0630\u0627\u0644\u0643 \u0627\u0644\u0627\u0633\u062A\u0645\u0627\u0639 \u0648 \u0642\u0631\u0627\u0621\u0629 \u062D\u0635\u0646 \u0627\u0644\u0645\u0633\u0644\u0645 . ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  background-image: linear-gradient(currentColor, currentColor);\r\n  background-position: 0% 100%;\r\n  background-repeat: no-repeat;\r\n  background-size: 0% 2px;\r\n  transition: background-size .3s;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n  background-size: 100% 2px;\r\n}\r\n\r\n.arabe[_ngcontent-%COMP%]{\r\n  font-family:adobe arabic;\r\n  font-size:22px;\r\n  direction:rtl;\r\n  color: black;\r\n  background-color: rgb(219, 219, 219);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNkRBQTZEO0VBQzdELDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoY3VycmVudENvbG9yLCBjdXJyZW50Q29sb3IpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDAlIDJweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXNpemUgLjNzO1xyXG59XHJcblxyXG5hOmhvdmVye1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAycHg7XHJcbn1cclxuXHJcbi5hcmFiZXtcclxuICBmb250LWZhbWlseTphZG9iZSBhcmFiaWM7XHJcbiAgZm9udC1zaXplOjIycHg7XHJcbiAgZGlyZWN0aW9uOnJ0bDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _adkar_adkar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adkar/adkar.component */ "./src/app/adkar/adkar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _quran_al_karim_quran_al_karim_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quran-al-karim/quran-al-karim.component */ "./src/app/quran-al-karim/quran-al-karim.component.ts");
/* harmony import */ var _infoadkars_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./infoadkars.service */ "./src/app/infoadkars.service.ts");
/* harmony import */ var _salat_salat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./salat/salat.component */ "./src/app/salat/salat.component.ts");











const routes = [
    {
        path: 'adkar', component: _adkar_adkar_component__WEBPACK_IMPORTED_MODULE_3__["AdkarComponent"]
    },
    {
        path: 'quran-al-karim', component: _quran_al_karim_quran_al_karim_component__WEBPACK_IMPORTED_MODULE_6__["QuranAlKarimComponent"]
    },
    {
        path: 'salat', component: _salat_salat_component__WEBPACK_IMPORTED_MODULE_8__["SalatComponent"]
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_infoadkars_service__WEBPACK_IMPORTED_MODULE_7__["InfoadkarsService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
                anchorScrolling: 'enabled',
            })]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _adkar_adkar_component__WEBPACK_IMPORTED_MODULE_3__["AdkarComponent"],
        _quran_al_karim_quran_al_karim_component__WEBPACK_IMPORTED_MODULE_6__["QuranAlKarimComponent"],
        _salat_salat_component__WEBPACK_IMPORTED_MODULE_8__["SalatComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _adkar_adkar_component__WEBPACK_IMPORTED_MODULE_3__["AdkarComponent"],
                    _quran_al_karim_quran_al_karim_component__WEBPACK_IMPORTED_MODULE_6__["QuranAlKarimComponent"],
                    _salat_salat_component__WEBPACK_IMPORTED_MODULE_8__["SalatComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, {
                        anchorScrolling: 'enabled',
                    })],
                providers: [_infoadkars_service__WEBPACK_IMPORTED_MODULE_7__["InfoadkarsService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/infoadkars.service.ts":
/*!***************************************!*\
  !*** ./src/app/infoadkars.service.ts ***!
  \***************************************/
/*! exports provided: InfoadkarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoadkarsService", function() { return InfoadkarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InfoadkarsService {
    constructor() {
    }
    retornar() {
        return [
            {
                "ID": 27,
                "TITLE": "أذكار الصباح والمساء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_028.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/27.json"
            },
            {
                "ID": 28,
                "TITLE": "أذكار النوم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_029.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/28.json"
            },
            {
                "ID": 1,
                "TITLE": "أذكار الاستيقاظ من النوم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_002.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/1.json"
            },
            {
                "ID": 6,
                "TITLE": "دعاء دخول الخلاء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_007.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/6.json"
            },
            {
                "ID": 7,
                "TITLE": "دعاء الخروج من الخلاء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_008.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/7.json"
            },
            {
                "ID": 8,
                "TITLE": "الذكر قبل الوضوء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_009.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/8.json"
            },
            {
                "ID": 9,
                "TITLE": "الذكر بعد الفراغ من الوضوء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_010.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/9.json"
            },
            {
                "ID": 10,
                "TITLE": "الذكر عند الخروج من المنزل",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_011.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/10.json"
            },
            {
                "ID": 11,
                "TITLE": "الذكر عند دخول المنزل",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_012.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/11.json"
            },
            {
                "ID": 12,
                "TITLE": "دعاء الذهاب إلى المسجد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_013.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/12.json"
            },
            {
                "ID": 13,
                "TITLE": "دعاء دخول المسجد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_014.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/13.json"
            },
            {
                "ID": 14,
                "TITLE": "دعاء الخروج من المسجد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_015.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/14.json"
            },
            {
                "ID": 15,
                "TITLE": "أذكار الآذان",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_016.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/15.json"
            },
            {
                "ID": 2,
                "TITLE": "دعاء ُلبْس الثوب",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_003.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/2.json"
            },
            {
                "ID": 3,
                "TITLE": "دعاء ُلبْس الثوب الجديد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_004.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/3.json"
            },
            {
                "ID": 4,
                "TITLE": "الدعاء لمن لبس ثوبا جديدا",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_005.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/4.json"
            },
            {
                "ID": 5,
                "TITLE": "ما يقول إذا وضع ثوبه",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_006.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/5.json"
            },
            {
                "ID": 16,
                "TITLE": "دعاء الاستفتاح",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_017.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/16.json"
            },
            {
                "ID": 17,
                "TITLE": "دعاء الركوع",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_018.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/17.json"
            },
            {
                "ID": 18,
                "TITLE": "دعاء الرفع من الركوع",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_019.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/18.json"
            },
            {
                "ID": 19,
                "TITLE": "دعاء السجود",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_020.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/19.json"
            },
            {
                "ID": 20,
                "TITLE": "دعاء الجلسة بين السجدتين",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_021.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/20.json"
            },
            {
                "ID": 21,
                "TITLE": "دعاء سجود التلاوة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_022.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/21.json"
            },
            {
                "ID": 22,
                "TITLE": "التشهد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_023.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/22.json"
            },
            {
                "ID": 23,
                "TITLE": "الصلاة على النبي بعد التشهد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_024.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/23.json"
            },
            {
                "ID": 24,
                "TITLE": "الدعاء بعد التشهد الأخير قبل السلام",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_025.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/24.json"
            },
            {
                "ID": 25,
                "TITLE": "الأذكار بعد السلام من الصلاة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_026.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/25.json"
            },
            {
                "ID": 26,
                "TITLE": "دعاء صلاة الاستخارة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_027.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/26.json"
            },
            {
                "ID": 29,
                "TITLE": "الدعاء إذا تقلب ليلا",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_030.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/29.json"
            },
            {
                "ID": 30,
                "TITLE": "دعاء الفزع في النوم و من بُلِيَ بالوحشة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_031.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/30.json"
            },
            {
                "ID": 31,
                "TITLE": "ما يفعل من رأى الرؤيا أو الحلم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_032.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/31.json"
            },
            {
                "ID": 32,
                "TITLE": "دعاء قنوت الوتر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_033.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/32.json"
            },
            {
                "ID": 33,
                "TITLE": "الذكر عقب السلام من الوتر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_034.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/33.json"
            },
            {
                "ID": 34,
                "TITLE": "دعاء الهم والحزن",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_035.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/34.json"
            },
            {
                "ID": 35,
                "TITLE": "دعاء الكرب",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_036.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/35.json"
            },
            {
                "ID": 36,
                "TITLE": "دعاء لقاء العدو و ذي السلطان",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_037.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/36.json"
            },
            {
                "ID": 37,
                "TITLE": "دعاء من خاف ظلم السلطان",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_038.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/37.json"
            },
            {
                "ID": 38,
                "TITLE": "الدعاء على العدو",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_039.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/38.json"
            },
            {
                "ID": 39,
                "TITLE": "ما يقول من خاف قوما",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_040.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/39.json"
            },
            {
                "ID": 40,
                "TITLE": "دعاء من أصابه وسوسة في الإيمان",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_041.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/40.json"
            },
            {
                "ID": 41,
                "TITLE": "دعاء قضاء الدين",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_042.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/41.json"
            },
            {
                "ID": 42,
                "TITLE": "دعاء الوسوسة في الصلاة و القراءة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_043.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/42.json"
            },
            {
                "ID": 43,
                "TITLE": "دعاء من استصعب عليه أمر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_044.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/43.json"
            },
            {
                "ID": 44,
                "TITLE": "ما يقول ويفعل من أذنب ذنبا",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_045.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/44.json"
            },
            {
                "ID": 45,
                "TITLE": "دعاء طرد الشيطان و وساوسه",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_046.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/45.json"
            },
            {
                "ID": 46,
                "TITLE": "الدعاء حينما يقع ما لا يرضاه أو ُ غلب على أمره",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_047.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/46.json"
            },
            {
                "ID": 47,
                "TITLE": "ﺗﻬنئة المولود له وجوابه",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_048.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/47.json"
            },
            {
                "ID": 48,
                "TITLE": "ما يعوذ به الأولاد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_049.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/48.json"
            },
            {
                "ID": 49,
                "TITLE": "الدعاء للمريض في عيادته",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_050.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/49.json"
            },
            {
                "ID": 50,
                "TITLE": "فضل عيادة المريض",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_051.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/50.json"
            },
            {
                "ID": 51,
                "TITLE": "دعاء المريض الذي يئس من حياته",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_052.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/51.json"
            },
            {
                "ID": 52,
                "TITLE": "تلقين المحتضر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_053.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/52.json"
            },
            {
                "ID": 53,
                "TITLE": "دعاء من أصيب بمصيبة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_054.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/53.json"
            },
            {
                "ID": 54,
                "TITLE": "الدعاء عند إغماض الميت",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_055.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/54.json"
            },
            {
                "ID": 55,
                "TITLE": "الدعاء للميت في الصلاة عليه",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_056.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/55.json"
            },
            {
                "ID": 56,
                "TITLE": "الدعاء للفرط في الصلاة عليه",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_057.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/56.json"
            },
            {
                "ID": 57,
                "TITLE": "دعاء التعزية",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_058.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/57.json"
            },
            {
                "ID": 58,
                "TITLE": "الدعاء عند إدخال الميت القبر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_059.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/58.json"
            },
            {
                "ID": 59,
                "TITLE": "الدعاء بعد دفن الميت",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_060.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/59.json"
            },
            {
                "ID": 60,
                "TITLE": "دعاء زيارة القبور",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_061.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/60.json"
            },
            {
                "ID": 61,
                "TITLE": "دعاء الريح",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_062.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/61.json"
            },
            {
                "ID": 62,
                "TITLE": "دعاء الرعد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_063.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/62.json"
            },
            {
                "ID": 63,
                "TITLE": "من أدعية الاستسقاء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_064.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/63.json"
            },
            {
                "ID": 64,
                "TITLE": "الدعاء إذا نزل المطر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_065.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/64.json"
            },
            {
                "ID": 65,
                "TITLE": "الذكر بعد نزول المطر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_066.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/65.json"
            },
            {
                "ID": 66,
                "TITLE": "من أدعية الاستصحاء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_067.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/66.json"
            },
            {
                "ID": 67,
                "TITLE": "دعاء رؤية الهلال",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_068.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/67.json"
            },
            {
                "ID": 68,
                "TITLE": "الدعاء عند إفطار الصائم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_069.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/68.json"
            },
            {
                "ID": 69,
                "TITLE": "الدعاء قبل الطعام",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_070.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/69.json"
            },
            {
                "ID": 70,
                "TITLE": "الدعاء عند الفراغ من الطعام",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_071.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/70.json"
            },
            {
                "ID": 71,
                "TITLE": "دعاء الضيف لصاحب الطعام",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_072.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/71.json"
            },
            {
                "ID": 72,
                "TITLE": "التعريض بالدعاء لطلب الطعام أو الشراب",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_073.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/72.json"
            },
            {
                "ID": 73,
                "TITLE": "الدعاء إذا أفطر عند أهل بيت",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_074.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/73.json"
            },
            {
                "ID": 74,
                "TITLE": "دعاء الصائم إذا حضر الطعام ولم يفطر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_075.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/74.json"
            },
            {
                "ID": 75,
                "TITLE": "ما يقول الصائم إذا سابه أحد",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_076.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/75.json"
            },
            {
                "ID": 76,
                "TITLE": "الدعاء عند رؤية باكورة الثمر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_077.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/76.json"
            },
            {
                "ID": 77,
                "TITLE": "دعاء العطاس",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_078.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/77.json"
            },
            {
                "ID": 78,
                "TITLE": "ما يقال للكافر إذا عطس فحمد الله",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_079.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/78.json"
            },
            {
                "ID": 79,
                "TITLE": "الدعاء للمتزوج",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_080.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/79.json"
            },
            {
                "ID": 80,
                "TITLE": "دعاء المتزوج و شراء الدابة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_081.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/80.json"
            },
            {
                "ID": 81,
                "TITLE": "الدعاء قبل إتيان الزوجة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_082.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/81.json"
            },
            {
                "ID": 82,
                "TITLE": "دعاء الغضب",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_083.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/82.json"
            },
            {
                "ID": 83,
                "TITLE": "دعاء من رأى مبتلى",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_084.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/83.json"
            },
            {
                "ID": 84,
                "TITLE": "ما يقال في اﻟﻤﺠلس",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_085.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/84.json"
            },
            {
                "ID": 85,
                "TITLE": "كفارة اﻟﻤﺠلس",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_086.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/85.json"
            },
            {
                "ID": 86,
                "TITLE": "الدعاء لمن قال غفر الله لك",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_087.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/87.json"
            },
            {
                "ID": 87,
                "TITLE": "الدعاء لمن صنع إليك معروفا",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_088.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/87.json"
            },
            {
                "ID": 88,
                "TITLE": "ما يعصم الله به من الدجال",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_089.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/88.json"
            },
            {
                "ID": 89,
                "TITLE": "الدعاء لمن قال إني أحبك في الله",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_090.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/89.json"
            },
            {
                "ID": 90,
                "TITLE": "الدعاء لمن عرض عليك ماله",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_091.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/90.json"
            },
            {
                "ID": 91,
                "TITLE": "الدعاء لمن أقرض عند القضاء",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_091.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/91.json"
            },
            {
                "ID": 92,
                "TITLE": "دعاء الخوف من الشرك",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_092.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/92.json"
            },
            {
                "ID": 93,
                "TITLE": "الدعاء لمن قال بارك الله فيك",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_094.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/93.json"
            },
            {
                "ID": 94,
                "TITLE": "دعاء كراهية الطيرة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_095.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/94.json"
            },
            {
                "ID": 95,
                "TITLE": "دعاء الركوب",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_096.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/95.json"
            },
            {
                "ID": 96,
                "TITLE": "دعاء السفر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_097.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/96.json"
            },
            {
                "ID": 97,
                "TITLE": "دعاء دخول القرية أو البلدة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_098.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/97.json"
            },
            {
                "ID": 98,
                "TITLE": "دعاء دخول السوق",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_099.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/98.json"
            },
            {
                "ID": 99,
                "TITLE": "الدعاء إذا تعس المركوب",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_100.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/99.json"
            },
            {
                "ID": 100,
                "TITLE": "دعاء المسافر للمقيم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_101.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/100.json"
            },
            {
                "ID": 101,
                "TITLE": "دعاء المقيم للمسافر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_102.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/101.json"
            },
            {
                "ID": 102,
                "TITLE": "التكبير و التسبيح في سير السفر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_103.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/102.json"
            },
            {
                "ID": 103,
                "TITLE": "دعاء المسافر إذا أسحر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_104.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/103.json"
            },
            {
                "ID": 104,
                "TITLE": "الدعاء إذا نزل مترلا في سفر أو غيره",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_105.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/104.json"
            },
            {
                "ID": 105,
                "TITLE": "ذكر الرجوع من السفر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_106.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/105.json"
            },
            {
                "ID": 106,
                "TITLE": "ما يقول من أتاه أمر يسره أو يكرهه",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_107.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/106.json"
            },
            {
                "ID": 107,
                "TITLE": "فضل الصلاة على النبي صلى الله عليه و سلم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_108.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/107.json"
            },
            {
                "ID": 108,
                "TITLE": "إفشاء السلام",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_109.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/108.json"
            },
            {
                "ID": 109,
                "TITLE": "كيف يرد السلام على الكافر إذا سلم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_110.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/109.json"
            },
            {
                "ID": 110,
                "TITLE": "الدُّعاءُ عِنْدَ سَمَاعِ صِياحِ الدِّيكِ ونَهِيقِ الْحِمَارِ",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_111.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/110.json"
            },
            {
                "ID": 111,
                "TITLE": "دعاء نباح الكلاب بالليل",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_112.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/111.json"
            },
            {
                "ID": 112,
                "TITLE": "الدعاء لمن سببته",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_113.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/112.json"
            },
            {
                "ID": 113,
                "TITLE": "ما يقول المسلم إذا مدح المسلم",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_114.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/113.json"
            },
            {
                "ID": 114,
                "TITLE": "ما يقول المسلم إذا زكي ",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_115.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/114.json"
            },
            {
                "ID": 115,
                "TITLE": "كيف يلبي المحرم في الحج أو العمرة ؟",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_116.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/115.json"
            },
            {
                "ID": 116,
                "TITLE": "التكبير إذا أتى الركن الأسود",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_117.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/116.json"
            },
            {
                "ID": 117,
                "TITLE": "الدعاء بين الركن اليماني والحجر الأسود",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_118.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/117.json"
            },
            {
                "ID": 118,
                "TITLE": "دعاء الوقوف على الصفا والمروة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_119.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/118.json"
            },
            {
                "ID": 119,
                "TITLE": "الدعاء يوم عرفة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_120.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/119.json"
            },
            {
                "ID": 120,
                "TITLE": "الذكر عند المشعر الحرام",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_121.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/120.json"
            },
            {
                "ID": 121,
                "TITLE": "التكبير عند رمي الجمار مع كل حصاة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_122.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/121.json"
            },
            {
                "ID": 122,
                "TITLE": "دعاء التعجب والأمر السار",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_123.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/122.json"
            },
            {
                "ID": 123,
                "TITLE": "ما يفعل من أتاه أمر يسره",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_124.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/123.json"
            },
            {
                "ID": 124,
                "TITLE": "ما يقول من أحس وجعا في جسده",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_125.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/124.json"
            },
            {
                "ID": 125,
                "TITLE": "دعاء من خشي أن يصيب شيئا بعينه",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_126.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/125.json"
            },
            {
                "ID": 126,
                "TITLE": "ما يقال عند الفزع",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_127.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/126.json"
            },
            {
                "ID": 127,
                "TITLE": "ما يقول عند الذبح أو النحر",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_128.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/127.json"
            },
            {
                "ID": 128,
                "TITLE": "ما يقول لرد كيد مردة الشياطين",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_129.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/128.json"
            },
            {
                "ID": 129,
                "TITLE": "الاستغفار و التوبة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_130.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/129.json"
            },
            {
                "ID": 130,
                "TITLE": "فضل التسبيح و التحميد، و التهليل، و التكبير",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_131.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/130.json"
            },
            {
                "ID": 131,
                "TITLE": "كيف كان النبي يسبح؟",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_132.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/131.json"
            },
            {
                "ID": 132,
                "TITLE": "من أنواع الخير والآداب الجامعة",
                "AUDIO_URL": "http://www.hisnmuslim.com/audio/ar/ar_7esn_AlMoslem_by_Doors_133.mp3",
                "TEXT": "http://www.hisnmuslim.com/api/ar/132.json"
            }
        ];
    }
}
InfoadkarsService.ɵfac = function InfoadkarsService_Factory(t) { return new (t || InfoadkarsService)(); };
InfoadkarsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InfoadkarsService, factory: InfoadkarsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoadkarsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/quran-al-karim/quran-al-karim.component.ts":
/*!************************************************************!*\
  !*** ./src/app/quran-al-karim/quran-al-karim.component.ts ***!
  \************************************************************/
/*! exports provided: QuranAlKarimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuranAlKarimComponent", function() { return QuranAlKarimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function QuranAlKarimComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", r_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r6);
} }
function QuranAlKarimComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuranAlKarimComponent_div_13_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.Functionsorat($event, i_r7.Server, i_r7.name, i_r7.rewaya); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r7.name);
} }
class QuranAlKarimComponent {
    constructor() {
        this.info = null;
        this.rewaya = null;
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__('#first').remove();
        const rewaya = [];
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://beta.mp3quran.net//api//_arabic.json')
            .then(resp => {
            const data = resp.data.reciters;
            // tslint:disable-next-line: prefer-for-of
            this.info = data;
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < data.length; index++) {
                rewaya.push(data[index].rewaya);
            }
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }
            const unique = rewaya.filter(onlyUnique);
            this.rewaya = unique;
        })
            .catch(error => {
            console.log(error);
        });
    }
    Functionsorat(event, link, name, rewaya) {
        const id = event.target.attributes.id.value;
        console.log(id + ' ' + link + ' ' + name + ' ' + rewaya);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#myUL').remove();
        let Arraysorat = ['الفاتحة', 'البقرة', 'آل عمران', 'النساء', 'المائدة', 'الأنعام', 'الأعراف', 'الأنفال', 'التوبة', 'يونس', 'هود', 'يوسف',
            'الرعد', 'إبراهيم', 'الحجر', 'النحل', 'الإسراء', 'الكهف', 'مريم', 'طه', 'الأنبياء', 'الحج', 'المؤمنون', 'النور', 'الفرقان',
            'الشعراء', 'النمل', 'القصص', 'العنكبوت', 'الروم', 'لقمان', 'السجدة', 'سورة الأحزاب', 'سبأ', 'فاطر', 'يس', 'الصافات', 'ص', 'الزمر',
            'غافر', 'فصلت', 'الشورى', 'الزخرف', 'الدخان', 'الجاثية', 'الأحقاف', 'محمد', 'الفتح', 'الحجرات', 'ق', 'الذاريات', 'الطور', 'النجم',
            'القمر', 'الرحمن', 'الواقعة', 'الحديد', 'المجادلة', 'الحشر', 'الممتحنة', 'الصف', 'الجمعة', 'المنافقون', '	التغابن', 'الطلاق', 'التحريم',
            'الملك', 'القلم', 'الحاقة', 'المعارج', 'نوح', 'الجن', 'المزمل', 'المدثر', 'القيامة', 'الإنسان', 'المرسلات',
            'النبأ', 'النازعات', 'عبس', 'التكوير', 'الإنفطار', 'المطففين', 'الإنشقاق', 'البروج', 'الطارق', 'الأعلى', 'الغاشية', 'الفجر', 'البلد',
            'الشمس', 'الليل', 'الضحى', 'الشرح', 'التين', 'العلق', 'القدر', 'البينة', 'الزلزلة', 'العاديات', 'القارعة', 'التكاثر', 'العصر',
            'الهمزة', 'الفيل', 'قريش', 'الماعون', 'الكوثر', 'الكافرون', 'النصر', 'المسد', 'الإخلاص', 'الفلق', 'الناس'];
        console.log(Arraysorat.length);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(link)
            .then(resp => {
            for (let index = 1; index < 115; index++) {
                const num = index.toString().length;
                let Link = null;
                if (num === 1) {
                    Link = resp.request.responseURL + '00' + (index) + '.mp3';
                }
                else if (num === 2) {
                    Link = resp.request.responseURL + '0' + (index) + '.mp3';
                }
                else {
                    Link = resp.request.responseURL + (index) + '.mp3';
                }
                // console.log(Arraysorat[index]);
                console.log(Arraysorat[index - 1]);
                console.log(Link);
                const Audio = document.createElement('AUDIO');
                Audio.setAttribute('controls', 'controls');
                const source = document.createElement('source');
                source.setAttribute('src', Link);
                source.setAttribute('type', 'audio/mpeg');
                Audio.appendChild(source);
                const currentDiv = document.getElementById('text');
                currentDiv.appendChild(Audio);
            }
        })
            .catch(error => {
            console.log(error);
        });
    }
}
QuranAlKarimComponent.ɵfac = function QuranAlKarimComponent_Factory(t) { return new (t || QuranAlKarimComponent)(); };
QuranAlKarimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuranAlKarimComponent, selectors: [["app-quran-al-karim"]], decls: 14, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col", "align-self-center"], ["dir", "rtl", 1, "custom-select", "custom-select-lg", "mb-3", "mt-3"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["dir", "rtl", "type", "text", "placeholder", "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0642\u0627\u0631\u0626", "aria-label", "Search", 1, "form-control"], [1, "row", "justify-content-md-center", "mt-5"], [1, "col-sm-10"], [1, "card"], ["id", "text", 1, "card-body", "text-center"], ["id", "myUL", 1, "list-group", "flex-md-row", "nav"], [4, "ngFor", "ngForOf"], [3, "value"], [1, "mb-1", 2, "width", "200px"], ["type", "button", 1, "btn", "btn-info", "btn", "btn-block", 3, "id", "click"]], template: function QuranAlKarimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0631\u0648\u0627\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuranAlKarimComponent_option_6_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuranAlKarimComponent_div_13_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rewaya);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".nav[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  text-align: center;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 20px;\r\n  padding: 20px;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  font-family:adobe arabic;\r\n  font-size:22px;\r\n  direction:rtl;\r\n  color: black;\r\n  background-color: rgb(219, 219, 219);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVyYW4tYWwta2FyaW0vcXVyYW4tYWwta2FyaW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvcXVyYW4tYWwta2FyaW0vcXVyYW4tYWwta2FyaW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubmF2IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6YWRvYmUgYXJhYmljO1xyXG4gIGZvbnQtc2l6ZToyMnB4O1xyXG4gIGRpcmVjdGlvbjpydGw7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuranAlKarimComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quran-al-karim',
                templateUrl: './quran-al-karim.component.html',
                styleUrls: ['./quran-al-karim.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/salat/salat.component.ts":
/*!******************************************!*\
  !*** ./src/app/salat/salat.component.ts ***!
  \******************************************/
/*! exports provided: SalatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalatComponent", function() { return SalatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class SalatComponent {
    constructor() {
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#first').remove();
        var userLang = navigator.language;
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const url = 'https://api.pray.zone/v2/times/today.json?city=figueres';
        const http = new XMLHttpRequest();
        http.open("GET", url);
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var prayer_results = JSON.parse(this.responseText);
                console.log(JSON.stringify(prayer_results.results.location.local_offset));
                var prayer_date = new Date(prayer_results.results.datetime[0].date.gregorian);
                var local_offset = prayer_results.results.location.local_offset;
                document.getElementById("prayer_city").innerHTML = prayer_results.results.location.city;
                document.getElementById("prayer_date").innerHTML = prayer_date.toLocaleDateString(userLang, options);
                document.getElementById("Imsak").innerHTML = prayer_results.results.datetime[0].times.Imsak;
                document.getElementById("Fajr").innerHTML = prayer_results.results.datetime[0].times.Fajr;
                document.getElementById("Dhuhr").innerHTML = prayer_results.results.datetime[0].times.Dhuhr;
                document.getElementById("Asr").innerHTML = prayer_results.results.datetime[0].times.Asr;
                document.getElementById("Maghrib").innerHTML = prayer_results.results.datetime[0].times.Maghrib;
                document.getElementById("Isha").innerHTML = prayer_results.results.datetime[0].times.Isha;
            }
        };
        http.send();
    }
}
SalatComponent.ɵfac = function SalatComponent_Factory(t) { return new (t || SalatComponent)(); };
SalatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalatComponent, selectors: [["app-salat"]], decls: 33, vars: 0, consts: [[1, "container", "mt-5"], ["id", "prayer-container", 2, "margin", "auto", "border", "1px solid #c0c0c0"], [1, "prayer_time"], ["id", "prayer_city"], ["id", "prayer_date"], ["id", "prayer_clock"], ["id", "Imsak"], ["id", "Fajr"], ["id", "Dhuhr"], ["id", "Asr"], ["id", "Maghrib"], ["id", "Isha"]], template: function SalatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Horarios Salat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Imsak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fajr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dhuhr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Asr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Maghrib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Isha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#prayer-container[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  text-align: center;\r\n}\r\n.prayer_time[_ngcontent-%COMP%] {\r\n  font-size: 1.6em;\r\n  font-weight: 800;\r\n}\r\n#prayer-container[_ngcontent-%COMP%]   #prayer_city[_ngcontent-%COMP%] {\r\n  font-size: 1.2em;\r\n  font-weight: 800;\r\n}\r\n#prayer-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\r\n  width: 100%\r\n}\r\n#prayer-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\r\n  background-color: #f3f3f3;\r\n}\r\n#prayer-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n}\r\n#prayer-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\r\n  text-align: left;\r\n}\r\n#prayer-container[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n  text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2FsYXQvc2FsYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NhbGF0L3NhbGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJheWVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJheWVyX3RpbWUge1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4jcHJheWVyLWNvbnRhaW5lciAjcHJheWVyX2NpdHkge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4jcHJheWVyLWNvbnRhaW5lciB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG4jcHJheWVyLWNvbnRhaW5lciB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG4jcHJheWVyLWNvbnRhaW5lciB0Ym9keSB0ZCB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG59XHJcbiNwcmF5ZXItY29udGFpbmVyIHRib2R5IHRkOm50aC1jaGlsZCgxKSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4jcHJheWVyLWNvbnRhaW5lciB0Ym9keSB0ZDpudGgtY2hpbGQoMikge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-salat',
                templateUrl: './salat.component.html',
                styleUrls: ['./salat.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\soulaimane\Desktop\infoislam\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map