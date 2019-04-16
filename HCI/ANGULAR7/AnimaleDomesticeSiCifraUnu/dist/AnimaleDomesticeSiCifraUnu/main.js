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

/***/ "./src/app/animal/animal.component.html":
/*!**********************************************!*\
  !*** ./src/app/animal/animal.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"body\">\n  <audio src = \"../../assets/audios/Andrei.mp3\" type=\"audio/mpeg\"  autoplay>\n  </audio>\n<div *ngFor=\"let animal of animals\">\n  <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" (click)=\"onSelect(animal)\" alt=\"{{animal.id}}\">\n \n</div>\n\n<nav>\n<a routerLink=\"/games\"><img id=\"gamesPage\" src=\"../../assets/images/arrow.png\" alt=\"play\"></a></nav>\n\n</div>"

/***/ }),

/***/ "./src/app/animal/animal.component.scss":
/*!**********************************************!*\
  !*** ./src/app/animal/animal.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#andrei {\n  position: absolute;\n  top: 27vh;\n  left: 43vw; }\n\n#porc {\n  position: absolute;\n  top: 70vh;\n  left: 76vw; }\n\n#vaca {\n  position: absolute;\n  top: 60vh;\n  left: 12vw;\n  width: 280px;\n  height: 300px; }\n\n#hen {\n  position: absolute;\n  top: 65vh;\n  left: 45vw; }\n\n#dog {\n  position: absolute;\n  top: 50vh;\n  left: 60vw;\n  width: 200px;\n  height: 200px; }\n\n#cat {\n  position: absolute;\n  top: 50vh;\n  left: 30vw;\n  width: 200px;\n  height: 200px; }\n\n#gamesPage {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 160px;\n  height: 160px; }\n\n#body {\n  background: url('background.jpg') no-repeat center center fixed;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5pbWFsL0M6XFxVc2Vyc1xcUmFsdWNhXFxEb2N1bWVudHNcXEhDSVxcSENJXFxBbmltYWxlRG9tZXN0aWNlU2lDaWZyYVVudS9zcmNcXGFwcFxcYW5pbWFsXFxhbmltYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVcsRUFDZDs7QUFDRDtFQUVJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVSxFQUNiOztBQUNEO0VBRUksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBQ0Q7RUFFSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVUsRUFDYjs7QUFDRDtFQUVJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBQ2hCOztBQUNEO0VBRUksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBQ0Q7RUFHSSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFHRDtFQUlJLGdFQUFpRjtFQUlqRix1QkFBc0I7RUFDdEIsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxZQUFVO0VBQ1YsYUFBWSxFQUlmIiwiZmlsZSI6InNyYy9hcHAvYW5pbWFsL2FuaW1hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhbmRyZWlcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyN3ZoO1xyXG4gICAgbGVmdDogIDQzdnc7XHJcbn1cclxuI3BvcmNcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3MHZoO1xyXG4gICAgbGVmdDogNzZ2dztcclxufVxyXG4jdmFjYVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYwdmg7XHJcbiAgICBsZWZ0OiAxMnZ3O1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4jaGVuXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjV2aDtcclxuICAgIGxlZnQ6IDQ1dnc7XHJcbn1cclxuI2RvZ1xyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwdmg7XHJcbiAgICBsZWZ0OiA2MHZ3O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4jY2F0XHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTB2aDtcclxuICAgIGxlZnQ6IDMwdnc7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiNnYW1lc1BhZ2Vcclxue1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG5cclxuI2JvZHkge1xyXG4gXHJcbiAgXHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/animal/animal.component.ts":
/*!********************************************!*\
  !*** ./src/app/animal/animal.component.ts ***!
  \********************************************/
/*! exports provided: AnimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalComponent", function() { return AnimalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_animal_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/animal.source */ "./src/app/model/animal.source.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnimalComponent = /** @class */ (function () {
    function AnimalComponent() {
        this.animals = _model_animal_source__WEBPACK_IMPORTED_MODULE_1__["ANIMALS"];
        router: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"];
    }
    AnimalComponent.prototype.ngOnInit = function () {
    };
    AnimalComponent.prototype.onSelect = function (a) {
        var audio = new Audio(a.audioPath);
        console.log(audio);
        audio.play();
    };
    AnimalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animal',
            template: __webpack_require__(/*! ./animal.component.html */ "./src/app/animal/animal.component.html"),
            styles: [__webpack_require__(/*! ./animal.component.scss */ "./src/app/animal/animal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimalComponent);
    return AnimalComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animal_animal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animal/animal.component */ "./src/app/animal/animal.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _game1_game1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game1/game1.component */ "./src/app/game1/game1.component.ts");
/* harmony import */ var _game2_game2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game2/game2.component */ "./src/app/game2/game2.component.ts");
/* harmony import */ var _game3_game3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game3/game3.component */ "./src/app/game3/game3.component.ts");
/* harmony import */ var _game4_game4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game4/game4.component */ "./src/app/game4/game4.component.ts");
/* harmony import */ var _game5_game5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game5/game5.component */ "./src/app/game5/game5.component.ts");
/* harmony import */ var _game6_game6_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game6/game6.component */ "./src/app/game6/game6.component.ts");
/* harmony import */ var _game7_game7_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game7/game7.component */ "./src/app/game7/game7.component.ts");
/* harmony import */ var _game8_game8_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game8/game8.component */ "./src/app/game8/game8.component.ts");
/* harmony import */ var _game9_game9_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game9/game9.component */ "./src/app/game9/game9.component.ts");
/* harmony import */ var _game10_game10_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game10/game10.component */ "./src/app/game10/game10.component.ts");
/* harmony import */ var _game11_game11_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game11/game11.component */ "./src/app/game11/game11.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: 'home',
        component: _animal_animal_component__WEBPACK_IMPORTED_MODULE_2__["AnimalComponent"]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"] },
    { path: 'games/game1', component: _game1_game1_component__WEBPACK_IMPORTED_MODULE_4__["Game1Component"] },
    { path: 'games/game2', component: _game2_game2_component__WEBPACK_IMPORTED_MODULE_5__["Game2Component"] },
    { path: 'games/game3', component: _game3_game3_component__WEBPACK_IMPORTED_MODULE_6__["Game3Component"] },
    { path: 'games/game4', component: _game4_game4_component__WEBPACK_IMPORTED_MODULE_7__["Game4Component"] },
    { path: 'games/game5', component: _game5_game5_component__WEBPACK_IMPORTED_MODULE_8__["Game5Component"] },
    { path: 'games/game6', component: _game6_game6_component__WEBPACK_IMPORTED_MODULE_9__["Game6Component"] },
    { path: 'games/game7', component: _game7_game7_component__WEBPACK_IMPORTED_MODULE_10__["Game7Component"] },
    { path: 'games/game8', component: _game8_game8_component__WEBPACK_IMPORTED_MODULE_11__["Game8Component"] },
    { path: 'games/game9', component: _game9_game9_component__WEBPACK_IMPORTED_MODULE_12__["Game9Component"] },
    { path: 'games/game10', component: _game10_game10_component__WEBPACK_IMPORTED_MODULE_13__["Game10Component"] },
    { path: 'games/game11', component: _game11_game11_component__WEBPACK_IMPORTED_MODULE_14__["Game11Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AnimaleDomesticeSiCifraUnu';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _animal_animal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animal/animal.component */ "./src/app/animal/animal.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _game1_game1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game1/game1.component */ "./src/app/game1/game1.component.ts");
/* harmony import */ var _game2_game2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game2/game2.component */ "./src/app/game2/game2.component.ts");
/* harmony import */ var _game3_game3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game3/game3.component */ "./src/app/game3/game3.component.ts");
/* harmony import */ var _game4_game4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game4/game4.component */ "./src/app/game4/game4.component.ts");
/* harmony import */ var _game5_game5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game5/game5.component */ "./src/app/game5/game5.component.ts");
/* harmony import */ var _game6_game6_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game6/game6.component */ "./src/app/game6/game6.component.ts");
/* harmony import */ var _game7_game7_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game7/game7.component */ "./src/app/game7/game7.component.ts");
/* harmony import */ var _game8_game8_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game8/game8.component */ "./src/app/game8/game8.component.ts");
/* harmony import */ var _game9_game9_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game9/game9.component */ "./src/app/game9/game9.component.ts");
/* harmony import */ var _game10_game10_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game10/game10.component */ "./src/app/game10/game10.component.ts");
/* harmony import */ var _game11_game11_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game11/game11.component */ "./src/app/game11/game11.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _animal_animal_component__WEBPACK_IMPORTED_MODULE_4__["AnimalComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"],
                _game1_game1_component__WEBPACK_IMPORTED_MODULE_6__["Game1Component"],
                _game2_game2_component__WEBPACK_IMPORTED_MODULE_7__["Game2Component"],
                _game3_game3_component__WEBPACK_IMPORTED_MODULE_8__["Game3Component"],
                _game4_game4_component__WEBPACK_IMPORTED_MODULE_9__["Game4Component"],
                _game5_game5_component__WEBPACK_IMPORTED_MODULE_10__["Game5Component"],
                _game6_game6_component__WEBPACK_IMPORTED_MODULE_11__["Game6Component"],
                _game7_game7_component__WEBPACK_IMPORTED_MODULE_12__["Game7Component"],
                _game8_game8_component__WEBPACK_IMPORTED_MODULE_13__["Game8Component"],
                _game9_game9_component__WEBPACK_IMPORTED_MODULE_14__["Game9Component"],
                _game10_game10_component__WEBPACK_IMPORTED_MODULE_15__["Game10Component"],
                _game11_game11_component__WEBPACK_IMPORTED_MODULE_16__["Game11Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game1/game1.component.html":
/*!********************************************!*\
  !*** ./src/app/game1/game1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body1\">\n  <div id=\"unu1\"></div>\n  <div id=\"bigDiv\">\n    <audio src = \"../../assets/audios/Cerinta1.mp3\" type=\"audio/mpeg\"  autoplay>\n    </audio>\n  <div id=\"row\">\n  <div id=\"column\" *ngFor=\"let animal of animal1\">\n      <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" (click)=\"onSelect(animal)\" alt=\"{{animal.id}}\">\n    </div>\n  </div>\n  <div id=\"row\">\n  <div id=\"column\" *ngFor=\"let folos of folos1\">\n    <img id=\"{{folos.id}}\" src=\"{{folos.imagePath}}\" (click)=\"onSelect(folos)\" alt=\"{{folos.id}}\">\n\n</div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/game1/game1.component.scss":
/*!********************************************!*\
  !*** ./src/app/game1/game1.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gaina1 {\n  width: 50%;\n  height: 60%; }\n\n#gaina1transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#gaina2 {\n  width: 50%;\n  height: 60%; }\n\n#gaina2transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#porc1 {\n  width: 50%;\n  height: 60%; }\n\n#porc1transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#porc2 {\n  width: 50%;\n  height: 60%; }\n\n#porc2transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#vaca1 {\n  width: 50%;\n  height: 60%; }\n\n#vaca1transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#vaca2 {\n  width: 50%;\n  height: 60%; }\n\n#vaca2transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#bigDiv {\n  margin: auto;\n  width: 50%;\n  padding: 40px; }\n\n#row {\n  display: flex;\n  padding-top: 100px; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\n#body1 {\n  background: url('bg1.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n#unu2 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n#unu1 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTEvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lMVxcZ2FtZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxXQUFVO0VBQ1YsWUFBVyxFQUNkOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRSxXQUFVO0VBQ1YsWUFBVyxFQUNaOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0UsV0FBVTtFQUNWLFlBQVc7RUFDVCxZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFFSSxhQUFZO0VBQ1osV0FBVTtFQUNWLGNBQWEsRUFFaEI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsbUJBQWlCLEVBQ3BCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUlJLHlEQUEwRTtFQUMxRSw0QkFBMkI7RUFDM0IsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUU1QixtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULFlBQVU7RUFDVixhQUFZLEVBSWY7O0FBQ0Q7RUFHSSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixXQUFVLEVBRWI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixXQUFVLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9nYW1lMS9nYW1lMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnYWluYTFcclxue1xyXG4gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIC8vIGxlZnQ6IDMwcHg7XHJcbiAgIC8vIHRvcDogMTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcbiNnYWluYTF0cmFuc3BhcmVudFxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogMzBweDtcclxuICAgLy8gdG9wOiAxMCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuI2dhaW5hMlxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vbGVmdDogMzclO1xyXG4gIC8vICB0b3A6IDU1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG59XHJcbiNnYWluYTJ0cmFuc3BhcmVudFxyXG57XHJcbiAgLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogMzclO1xyXG4gICAvLyB0b3A6IDU1JTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG4jcG9yYzFcclxue1xyXG4gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIC8vIGxlZnQ6IDMwJTtcclxuICAgLy8gdG9wOiAxMCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG59XHJcbiNwb3JjMXRyYW5zcGFyZW50XHJcbntcclxuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAvLyBsZWZ0OiAzMCU7XHJcbiAgIC8vIHRvcDogMTAlO1xyXG4gICB3aWR0aDogNTAlO1xyXG4gICBoZWlnaHQ6IDYwJTtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcbiNwb3JjMlxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogNTUlO1xyXG4gICAvLyB0b3A6IDU1JTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuI3BvcmMydHJhbnNwYXJlbnRcclxue1xyXG4gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIC8vIGxlZnQ6IDU1JTtcclxuICAgLy8gdG9wOiA1NSU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuI3ZhY2ExXHJcbntcclxuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAvLyBsZWZ0OiA1MCU7XHJcbiAgIC8vIHRvcDogMTAlO1xyXG4gICB3aWR0aDogNTAlO1xyXG4gICBoZWlnaHQ6IDYwJTtcclxufVxyXG4jdmFjYTF0cmFuc3BhcmVudFxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogNTAlO1xyXG4gIC8vICB0b3A6IDEwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuI3ZhY2EyXHJcbntcclxuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAvLyBsZWZ0OiA4JTtcclxuICAgLy8gdG9wOiA1MCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG59XHJcbiN2YWNhMnRyYW5zcGFyZW50XHJcbntcclxuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAvLyBsZWZ0OiA4JTtcclxuICAgLy8gdG9wOiA1MCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuI2JpZ0RpdlxyXG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIFxyXG59XHJcbiNyb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7IFxyXG59XHJcblxyXG4jY29sdW1uXHJcbntcclxuICAgIGZsZXg6MzMuMzMlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiNib2R5MSB7XHJcbiBcclxuICBcclxuICBcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuXHJcbn1cclxuI3VudTJ7XHJcbiAgIC8vIHdpZHRoOjEwMHB4O1xyXG4gICAvLyBoZWlnaHQ6MjAwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuXHJcbn1cclxuI3VudTF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game1/game1.component.ts":
/*!******************************************!*\
  !*** ./src/app/game1/game1.component.ts ***!
  \******************************************/
/*! exports provided: Game1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game1Component", function() { return Game1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_game1_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/game1.source */ "./src/app/model/game1.source.ts");
/* harmony import */ var _model_folos_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/folos.source */ "./src/app/model/folos.source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Game1Component = /** @class */ (function () {
    function Game1Component(router) {
        this.router = router;
        this.animal1 = _model_game1_source__WEBPACK_IMPORTED_MODULE_2__["ANIMALS1"];
        this.folos1 = _model_folos_source__WEBPACK_IMPORTED_MODULE_3__["FOLOS1"];
        this.lastSelected = null;
        this.gainaDone = false;
        this.vacaDone = false;
        this.porcDone = false;
        this.ok = 0;
    }
    Game1Component.prototype.ngOnInit = function () {
    };
    Game1Component.prototype.CheckWin = function () {
        var _this = this;
        this.ok += 1;
        if (this.ok == 3) {
            var audio = new Audio("../../assets/audios/Bravo.mp3");
            audio.play();
            this.animal1.forEach(function (contact) {
                contact.id = contact.id.replace("transparent", "");
            });
            this.folos1.forEach(function (contact) {
                contact.id = contact.id.replace("transparent", "");
            });
            setTimeout(function () {
                _this.router.navigate(['../games']);
            }, 5000);
        }
    };
    Game1Component.prototype.onSelect = function (a) {
        if (a.id == "gaina1transparent" || a.id == "gaina2transparent" || a.id == "porc1transparent" || a.id == "porc2transparent" || a.id == "vaca1transparent" || a.id == "vaca2transparent") {
            //daca animalutul a fost deja reunit cu puiul/mama, nu se intampla nimic
        } //daca nu, se verifica
        else if (this.lastSelected == null) {
            //daca nu e selectat nimic, e marcat animalul curent ca selectie
            this.lastSelected = a;
            //  let audio = new Audio('../../assets/audios/MaiIncearca.mp3');
            // console.log(audio);
            // audio.play();
        }
        else {
            //daca exista animal selectat, se verifica daca e pereche cu animalul curent
            //daca se gaseste o pereche, se executa fucntia correct, se demarcheaza selectia si se seteaza perechea ca fiind gasita
            if ((this.lastSelected.id == "gaina1" && a.id == "gaina2") || (this.lastSelected.id == "gaina2" && a.id == "gaina1")) {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.gainaDone = true;
                var image_1 = new Image();
                image_1.src = "../../assets/images/unu.png";
                image_1.id = "unu2";
                document.getElementById("unu1").appendChild(image_1);
                setTimeout(function () {
                    document.getElementById("unu1").removeChild(image_1);
                }, 4000);
                console.log(document.getElementById("unu1"));
                this.CheckWin();
            } /* else
            if (this.lastSelected.id == "gaina2" && a.id == "gaina1") {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.gainaDone = true;
            } */
            else if ((this.lastSelected.id == "porc1" && a.id == "porc2") || (this.lastSelected.id == "porc2" && a.id == "porc1")) {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.porcDone = true;
                var image_2 = new Image();
                image_2.src = "../../assets/images/unu.png";
                image_2.id = "unu2";
                document.getElementById("unu1").appendChild(image_2);
                setTimeout(function () {
                    document.getElementById("unu1").removeChild(image_2);
                }, 4000);
                console.log(document.getElementById("unu1"));
                this.CheckWin();
            } /*else
            if (this.lastSelected.id == "porc2" && a.id == "porc1") {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.porcDone = true;
            }*/
            else if ((this.lastSelected.id == "vaca1" && a.id == "vaca2") || (this.lastSelected.id == "vaca2" && a.id == "vaca1")) {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.vacaDone = true;
                var image_3 = new Image();
                image_3.src = "../../assets/images/unu.png";
                image_3.id = "unu2";
                document.getElementById("unu1").appendChild(image_3);
                setTimeout(function () {
                    document.getElementById("unu1").removeChild(image_3);
                }, 4000);
                console.log(document.getElementById("unu1"));
                this.CheckWin();
            } /*else
            if (this.lastSelected.id == "vaca2" && a.id == "vaca1") {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.vacaDone = true;
            }*/
            else {
                //daca selectia si animalul curent nu sunt pereche, se deselecteaza selectia
                this.lastSelected = null;
                var audio = new Audio('../../assets/audios/MaiIncearca.mp3');
                console.log(audio);
                audio.play();
            }
        }
    };
    Game1Component.prototype.correct = function (a, b) {
        //cele doua animale sunt facute transparent (se adauga "transparent" la id pt. folosirea css-ului transparent)
        a.id = a.id + "transparent";
        b.id = b.id + "transparent";
        //let audio = new Audio('../../assets/audios/correct.wav');
        //console.log(audio);
        // audio.play();
    };
    Game1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game1',
            template: __webpack_require__(/*! ./game1.component.html */ "./src/app/game1/game1.component.html"),
            styles: [__webpack_require__(/*! ./game1.component.scss */ "./src/app/game1/game1.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Game1Component);
    return Game1Component;
}());



/***/ }),

/***/ "./src/app/game10/game10.component.html":
/*!**********************************************!*\
  !*** ./src/app/game10/game10.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"body10\">\n                <audio src = \"../../assets/audios/GhicitoareCaine.mp3\" type=\"audio/mpeg\"  autoplay>  \n                </audio>\n        \n                <div id=\"row\"> <div id=\"column\" *ngFor=\"let animal of animals10\">\n                    <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" (click)=\"onSelect(animal)\" alt=\"{{animal.id}}\">\n                  </div>\n                </div>\n              </div>\n                    \n          \n          \n          \n             \n"

/***/ }),

/***/ "./src/app/game10/game10.component.scss":
/*!**********************************************!*\
  !*** ./src/app/game10/game10.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\nimg {\n  width: 200px;\n  height: 300px; }\n\n#oaie {\n  position: absolute;\n  top: 50vh;\n  left: 20vw;\n  width: 200px;\n  height: 200px; }\n\n#gasca {\n  position: absolute;\n  top: 50vh;\n  left: 40vw;\n  width: 200px;\n  height: 200px; }\n\n#caine {\n  position: absolute;\n  top: 50vh;\n  left: 60vw;\n  width: 200px;\n  height: 200px; }\n\n#body10 {\n  background: url('bg10.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTEwL0M6XFxVc2Vyc1xcUmFsdWNhXFxEb2N1bWVudHNcXEhDSVxcSENJXFxBbmltYWxlRG9tZXN0aWNlU2lDaWZyYVVudS9zcmNcXGFwcFxcZ2FtZTEwXFxnYW1lMTAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBRWhCOztBQUVEO0VBSUksMERBQTJFO0VBQzNFLDRCQUEyQjtFQUMzQiwyQkFBMEI7RUFDMUIsNkJBQTRCO0VBRTVCLG1CQUFrQjtFQUNsQixPQUFLO0VBQ0wsUUFBTztFQUNQLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVTtFQUNWLGFBQVksRUFJZiIsImZpbGUiOiJzcmMvYXBwL2dhbWUxMC9nYW1lMTAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNjb2x1bW5cclxue1xyXG4gICAgZmxleDozMy4zMyU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuI29haWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwdmg7XHJcbiAgICBsZWZ0OiAyMHZ3O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuI2dhc2Nhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHZoO1xyXG4gICAgbGVmdDogNDB2dztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbiNjYWluZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTB2aDtcclxuICAgIGxlZnQ6IDYwdnc7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxufVxyXG5cclxuI2JvZHkxMCB7XHJcbiBcclxuICBcclxuICBcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMTAucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/game10/game10.component.ts":
/*!********************************************!*\
  !*** ./src/app/game10/game10.component.ts ***!
  \********************************************/
/*! exports provided: Game10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game10Component", function() { return Game10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_game10_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/game10.source */ "./src/app/model/game10.source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Game10Component = /** @class */ (function () {
    function Game10Component(router) {
        this.router = router;
        this.animals10 = _model_game10_source__WEBPACK_IMPORTED_MODULE_2__["ANIMALS10"];
    }
    Game10Component.prototype.ngOnInit = function () {
    };
    Game10Component.prototype.onSelect = function (a) {
        var _this = this;
        var audio = new Audio(a.audioPath);
        console.log(audio);
        audio.play();
        if (a.id == "caine")
            setTimeout(function () {
                _this.router.navigate(['../games/game11']);
            }, 5000);
    };
    Game10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game10',
            template: __webpack_require__(/*! ./game10.component.html */ "./src/app/game10/game10.component.html"),
            styles: [__webpack_require__(/*! ./game10.component.scss */ "./src/app/game10/game10.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Game10Component);
    return Game10Component;
}());



/***/ }),

/***/ "./src/app/game11/game11.component.html":
/*!**********************************************!*\
  !*** ./src/app/game11/game11.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body11\">\n                <audio src = \"../../assets/audios/GhicitoareGaina.mp3\" type=\"audio/mpeg\"  autoplay>  \n                </audio>\n        \n                <div id=\"row\"> <div id=\"column\" *ngFor=\"let animal of animals11\">\n                    <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" (click)=\"onSelect(animal)\" alt=\"{{animal.id}}\">\n                   </div>\n                    \n             </div>\n            </div>"

/***/ }),

/***/ "./src/app/game11/game11.component.scss":
/*!**********************************************!*\
  !*** ./src/app/game11/game11.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\nimg {\n  width: 200px;\n  height: 300px; }\n\n#iepure {\n  position: absolute;\n  top: 50vh;\n  left: 20vw;\n  width: 200px;\n  height: 200px; }\n\n#gaina {\n  position: absolute;\n  top: 50vh;\n  left: 40vw;\n  width: 200px;\n  height: 200px; }\n\n#magar {\n  position: absolute;\n  top: 50vh;\n  left: 60vw;\n  width: 200px;\n  height: 200px; }\n\n#body11 {\n  background: url('bg11.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTExL0M6XFxVc2Vyc1xcUmFsdWNhXFxEb2N1bWVudHNcXEhDSVxcSENJXFxBbmltYWxlRG9tZXN0aWNlU2lDaWZyYVVudS9zcmNcXGFwcFxcZ2FtZTExXFxnYW1lMTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBRWhCOztBQUNEO0VBSUksMERBQTJFO0VBQzNFLDRCQUEyQjtFQUMzQiwyQkFBMEI7RUFDMUIsNkJBQTRCO0VBRTVCLG1CQUFrQjtFQUNsQixPQUFLO0VBQ0wsUUFBTztFQUNQLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVTtFQUNWLGFBQVksRUFJZiIsImZpbGUiOiJzcmMvYXBwL2dhbWUxMS9nYW1lMTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNjb2x1bW5cclxue1xyXG4gICAgZmxleDozMy4zMyU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuI2llcHVyZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTB2aDtcclxuICAgIGxlZnQ6IDIwdnc7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jZ2FpbmF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwdmg7XHJcbiAgICBsZWZ0OiA0MHZ3O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuI21hZ2Fye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHZoO1xyXG4gICAgbGVmdDogNjB2dztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG59XHJcbiNib2R5MTEge1xyXG4gXHJcbiAgXHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzExLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/game11/game11.component.ts":
/*!********************************************!*\
  !*** ./src/app/game11/game11.component.ts ***!
  \********************************************/
/*! exports provided: Game11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game11Component", function() { return Game11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_game11_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game11.source */ "./src/app/model/game11.source.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Game11Component = /** @class */ (function () {
    function Game11Component(router) {
        this.router = router;
        this.animals11 = _model_game11_source__WEBPACK_IMPORTED_MODULE_1__["ANIMALS11"];
    }
    Game11Component.prototype.ngOnInit = function () {
    };
    Game11Component.prototype.onSelect = function (a) {
        var _this = this;
        var audio = new Audio(a.audioPath);
        console.log(audio);
        audio.play();
        if (a.id == "gaina")
            setTimeout(function () {
                _this.router.navigate(['../games']);
            }, 5000);
    };
    Game11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game11',
            template: __webpack_require__(/*! ./game11.component.html */ "./src/app/game11/game11.component.html"),
            styles: [__webpack_require__(/*! ./game11.component.scss */ "./src/app/game11/game11.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Game11Component);
    return Game11Component;
}());



/***/ }),

/***/ "./src/app/game2/game2.component.html":
/*!********************************************!*\
  !*** ./src/app/game2/game2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body2\">\n    <div id=\"unu1\"></div>\n    <div id=\"bigDiv\">\n        <audio src = \"../../assets/audios/Cerinta2.mp3\" type=\"audio/mpeg\"  autoplay>\n        </audio>\n    <div id=\"row\">\n    <div id=\"column\" *ngFor=\"let animal of animal2\">\n        <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" (click)=\"onSelect(animal)\" alt=\"{{animal.id}}\">\n      </div>\n    </div>\n    <div id=\"row\">\n    <div id=\"column\" *ngFor=\"let pui of pui2\">\n      <img id=\"{{pui.id}}\" src=\"{{pui.imagePath}}\" (click)=\"onSelect(pui)\" alt=\"{{pui.id}}\">\n  \n  </div>\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/game2/game2.component.scss":
/*!********************************************!*\
  !*** ./src/app/game2/game2.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#gaina1 {\n  width: 50%;\n  height: 60%; }\n\n#gaina1transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#gaina2 {\n  width: 50%;\n  height: 60%; }\n\n#gaina2transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#pisica1 {\n  width: 50%;\n  height: 60%; }\n\n#pisica1transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#pisica2 {\n  width: 50%;\n  height: 60%; }\n\n#pisica2transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#caine1 {\n  width: 50%;\n  height: 60%; }\n\n#caine1transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#caine2 {\n  width: 50%;\n  height: 60%; }\n\n#caine2transparent {\n  width: 50%;\n  height: 60%;\n  opacity: .5; }\n\n#bigDiv {\n  margin: auto;\n  width: 50%;\n  padding: 40px; }\n\n#row {\n  display: flex;\n  padding-top: 100px; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\n#unu2 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n#unu1 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n#body2 {\n  background: url('bg4.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTIvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lMlxcZ2FtZTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxXQUFVO0VBQ1YsWUFBVyxFQUNkOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRSxXQUFVO0VBQ1YsWUFBVyxFQUNaOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0UsV0FBVTtFQUNWLFlBQVc7RUFDVCxZQUFXLEVBQ2Q7O0FBQ0Q7RUFLRyxXQUFVO0VBQ1YsWUFBVyxFQUNiOztBQUNEO0VBS0csV0FBVTtFQUNWLFlBQVc7RUFDVixZQUFXLEVBQ2Q7O0FBQ0Q7RUFFSSxhQUFZO0VBQ1osV0FBVTtFQUNWLGNBQWEsRUFFaEI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsbUJBQWlCLEVBQ3BCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUdLLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFdBQVUsRUFFYjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFdBQVUsRUFDYjs7QUFDRDtFQUlHLHlEQUEwRTtFQUMxRSw0QkFBMkI7RUFDM0IsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUU1QixtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULFlBQVU7RUFDVixhQUFZLEVBSWYiLCJmaWxlIjoic3JjL2FwcC9nYW1lMi9nYW1lMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNnYWluYTFcclxue1xyXG4gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIC8vIGxlZnQ6IDMwcHg7XHJcbiAgIC8vIHRvcDogMTAlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG59XHJcbiNnYWluYTF0cmFuc3BhcmVudFxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogMzBweDtcclxuICAgLy8gdG9wOiAxMCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuI2dhaW5hMlxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vbGVmdDogMzclO1xyXG4gIC8vICB0b3A6IDU1JTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG59XHJcbiNnYWluYTJ0cmFuc3BhcmVudFxyXG57XHJcbiAgLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogMzclO1xyXG4gICAvLyB0b3A6IDU1JTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG4jcGlzaWNhMVxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogMzAlO1xyXG4gICAvLyB0b3A6IDEwJTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuI3Bpc2ljYTF0cmFuc3BhcmVudFxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogMzAlO1xyXG4gICAvLyB0b3A6IDEwJTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG4jcGlzaWNhMlxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogNTUlO1xyXG4gICAvLyB0b3A6IDU1JTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuI3Bpc2ljYTJ0cmFuc3BhcmVudFxyXG57XHJcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgLy8gbGVmdDogNTUlO1xyXG4gICAvLyB0b3A6IDU1JTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG4jY2FpbmUxXHJcbntcclxuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAvLyBsZWZ0OiA1MCU7XHJcbiAgIC8vIHRvcDogMTAlO1xyXG4gICB3aWR0aDogNTAlO1xyXG4gICBoZWlnaHQ6IDYwJTtcclxufVxyXG4jY2FpbmUxdHJhbnNwYXJlbnRcclxue1xyXG4gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIC8vIGxlZnQ6IDUwJTtcclxuICAvLyAgdG9wOiAxMCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDYwJTtcclxuICAgIG9wYWNpdHk6IC41O1xyXG59XHJcbiNjYWluZTJcclxue1xyXG4gICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIC8vIGxlZnQ6IDglO1xyXG4gICAvLyB0b3A6IDUwJTtcclxuICAgd2lkdGg6IDUwJTtcclxuICAgaGVpZ2h0OiA2MCU7XHJcbn1cclxuI2NhaW5lMnRyYW5zcGFyZW50XHJcbntcclxuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAvLyBsZWZ0OiA4JTtcclxuICAgLy8gdG9wOiA1MCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbiAgIGhlaWdodDogNjAlO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbn1cclxuI2JpZ0RpdlxyXG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIFxyXG59XHJcbiNyb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7IFxyXG59XHJcblxyXG4jY29sdW1uXHJcbntcclxuICAgIGZsZXg6MzMuMzMlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiN1bnUye1xyXG4gICAgLy8gd2lkdGg6MTAwcHg7XHJcbiAgICAvLyBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgIHdpZHRoOiA1MCU7XHJcbiBcclxuIH1cclxuICN1bnUxe1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICB3aWR0aDogNTAlO1xyXG4gfVxyXG4gI2JvZHkyIHtcclxuIFxyXG4gIFxyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmc0LnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game2/game2.component.ts":
/*!******************************************!*\
  !*** ./src/app/game2/game2.component.ts ***!
  \******************************************/
/*! exports provided: Game2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game2Component", function() { return Game2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_pui_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/pui.source */ "./src/app/model/pui.source.ts");
/* harmony import */ var _model_game2_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/game2.source */ "./src/app/model/game2.source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Game2Component = /** @class */ (function () {
    function Game2Component(router) {
        this.router = router;
        this.animal2 = _model_game2_source__WEBPACK_IMPORTED_MODULE_3__["ANIMALS2"];
        this.pui2 = _model_pui_source__WEBPACK_IMPORTED_MODULE_2__["PUI1"];
        this.lastSelected = null;
        this.gainaDone = false;
        this.vacaDone = false;
        this.porcDone = false;
        this.ok = 0;
    }
    Game2Component.prototype.ngOnInit = function () {
    };
    Game2Component.prototype.CheckWin = function () {
        var _this = this;
        this.ok += 1;
        if (this.ok == 3) {
            var audio = new Audio("../../assets/audios/Bravo.mp3");
            audio.play();
            this.animal2.forEach(function (contact) {
                contact.id = contact.id.replace("transparent", "");
            });
            this.pui2.forEach(function (contact) {
                contact.id = contact.id.replace("transparent", "");
            });
            setTimeout(function () {
                _this.router.navigate(['../games']);
            }, 5000);
        }
    };
    Game2Component.prototype.onSelect = function (a) {
        if (a.id == "gaina1transparent" || a.id == "gaina2transparent" || a.id == "pisica1transparent" || a.id == "pisica2transparent" || a.id == "caine1transparent" || a.id == "caine2transparent") {
            //daca animalutul a fost deja reunit cu puiul/mama, nu se intampla nimic
        } //daca nu, se verifica
        else if (this.lastSelected == null) {
            //daca nu e selectat nimic, e marcat animalul curent ca selectie
            this.lastSelected = a;
            //  let audio = new Audio('../../assets/audios/MaiIncearca.mp3');
            // console.log(audio);
            // audio.play();
        }
        else {
            //daca exista animal selectat, se verifica daca e pereche cu animalul curent
            //daca se gaseste o pereche, se executa fucntia correct, se demarcheaza selectia si se seteaza perechea ca fiind gasita
            if ((this.lastSelected.id == "gaina1" && a.id == "gaina2") || (this.lastSelected.id == "gaina2" && a.id == "gaina1")) {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.gainaDone = true;
                var image_1 = new Image();
                image_1.src = "../../assets/images/unu.png";
                image_1.id = "unu2";
                document.getElementById("unu1").appendChild(image_1);
                setTimeout(function () {
                    document.getElementById("unu1").removeChild(image_1);
                }, 4000);
                console.log(document.getElementById("unu1"));
                this.CheckWin();
            } /* else
            if (this.lastSelected.id == "gaina2" && a.id == "gaina1") {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.gainaDone = true;
            } */
            else if ((this.lastSelected.id == "pisica1" && a.id == "pisica2") || (this.lastSelected.id == "pisica2" && a.id == "pisica1")) {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.porcDone = true;
                var image_2 = new Image();
                image_2.src = "../../assets/images/unu.png";
                image_2.id = "unu2";
                document.getElementById("unu1").appendChild(image_2);
                setTimeout(function () {
                    document.getElementById("unu1").removeChild(image_2);
                }, 4000);
                console.log(document.getElementById("unu1"));
                this.CheckWin();
            } /*else
            if (this.lastSelected.id == "porc2" && a.id == "porc1") {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.porcDone = true;
            }*/
            else if ((this.lastSelected.id == "caine1" && a.id == "caine2") || (this.lastSelected.id == "caine2" && a.id == "caine1")) {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.vacaDone = true;
                var image_3 = new Image();
                image_3.src = "../../assets/images/unu.png";
                image_3.id = "unu2";
                document.getElementById("unu1").appendChild(image_3);
                setTimeout(function () {
                    document.getElementById("unu1").removeChild(image_3);
                }, 4000);
                console.log(document.getElementById("unu1"));
                this.CheckWin();
            } /*else
            if (this.lastSelected.id == "vaca2" && a.id == "vaca1") {
                this.correct(a, this.lastSelected);
                this.lastSelected = null;
                this.vacaDone = true;
            }*/
            else {
                //daca selectia si animalul curent nu sunt pereche, se deselecteaza selectia
                this.lastSelected = null;
                var audio = new Audio('../../assets/audios/MaiIncearca.mp3');
                console.log(audio);
                audio.play();
            }
        }
    };
    Game2Component.prototype.correct = function (a, b) {
        //cele doua animale sunt facute transparent (se adauga "transparent" la id pt. folosirea css-ului transparent)
        a.id = a.id + "transparent";
        b.id = b.id + "transparent";
        // let audio = new Audio('../../assets/audios/correct.wav');
        // console.log(audio);
        // audio.play();
    };
    Game2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game2',
            template: __webpack_require__(/*! ./game2.component.html */ "./src/app/game2/game2.component.html"),
            styles: [__webpack_require__(/*! ./game2.component.scss */ "./src/app/game2/game2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Game2Component);
    return Game2Component;
}());



/***/ }),

/***/ "./src/app/game3/game3.component.html":
/*!********************************************!*\
  !*** ./src/app/game3/game3.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body3\"><audio src = \"../../assets/audios/Cerinta3.mp3\" type=\"audio/mpeg\"  autoplay>\n</audio>\n<div id=\"row\"><div id=\"column\" *ngFor=\"let animal of animals3\" >\n    <img class=\"idA\" id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" alt=\"{{animal.id}}\">\n   \n  </div>\n</div>\n<div id=\"row\">\n    <div id=\"column\" (drop)=\"dropIepure($event)\" (dragover)=\"allowDrop($event)\">\n    \n    </div>\n    <div id=\"column\" (drop)=\"dropRata($event)\" (dragover)=\"allowDrop($event)\">\n    \n    </div>\n    <div id=\"column\" (drop)=\"dropCaine($event)\" (dragover)=\"allowDrop($event)\">\n    \n    </div>\n    </div>\n<div id=\"row\">\n  <div id=\"column\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" *ngFor=\"let mancare of mancare\" >\n    <img class=\"{{mancare.id}}\" id=\"{{mancare.id}}\" src=\"{{mancare.imagePath}}\" graggable=\"true\" (dragstart)=\"drag($event)\" alt=\"{{mancare.id}}\">\n   \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/game3/game3.component.scss":
/*!********************************************!*\
  !*** ./src/app/game3/game3.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px;\n  margin: 5px;\n  padding: 10px;\n  border: 1px solid black;\n  height: 200px; }\n\n#iepure {\n  widows: 160px;\n  height: 160px; }\n\n#caine {\n  widows: 160px;\n  height: 160px; }\n\n#rata {\n  widows: 160px;\n  height: 160px; }\n\n#cucuruz {\n  widows: 160px;\n  height: 160px; }\n\n#morcov {\n  widows: 160px;\n  height: 160px; }\n\n#os {\n  widows: 160px;\n  height: 160px; }\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n#body3 {\n  background: url('bg3.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTMvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lM1xcZ2FtZTMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUVYLGFBQVk7RUFFWixZQUFXO0VBQ1gsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixjQUFZLEVBR2Y7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGNBQWE7RUFDYixjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGNBQWE7RUFDYixjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUVuQjs7QUFDRDtFQUlFLHlEQUEwRTtFQUMxRSw0QkFBMkI7RUFDM0IsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUU1QixtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULFlBQVU7RUFDVixhQUFZLEVBSWYiLCJmaWxlIjoic3JjL2FwcC9nYW1lMy9nYW1lMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY29sdW1uXHJcbntcclxuICAgIGZsZXg6MzMuMzMlO1xyXG4gICBcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgXHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDoyMDBweDtcclxuIFxyXG4gICBcclxufVxyXG5cclxuI2llcHVyZXtcclxuICAgIHdpZG93czogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcbiNjYWluZXtcclxuICAgIHdpZG93czogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcbiNyYXRhe1xyXG4gICAgd2lkb3dzOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuI2N1Y3VydXp7XHJcbiAgICB3aWRvd3M6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG4jbW9yY292e1xyXG4gICAgd2lkb3dzOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuI29ze1xyXG4gICAgd2lkb3dzOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBcclxuICB9XHJcbiAgI2JvZHkzIHtcclxuIFxyXG4gIFxyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmczLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game3/game3.component.ts":
/*!******************************************!*\
  !*** ./src/app/game3/game3.component.ts ***!
  \******************************************/
/*! exports provided: Game3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game3Component", function() { return Game3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_mancare_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/mancare.source */ "./src/app/model/mancare.source.ts");
/* harmony import */ var _model_game3_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/game3.source */ "./src/app/model/game3.source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Game3Component = /** @class */ (function () {
    function Game3Component(router) {
        this.router = router;
        this.animals3 = _model_game3_source__WEBPACK_IMPORTED_MODULE_3__["ANIMALS3"];
        this.mancare = _model_mancare_source__WEBPACK_IMPORTED_MODULE_2__["MANCARE"];
        this.ok = 0;
    }
    Game3Component.prototype.ngOnInit = function () {
    };
    Game3Component.prototype.CheckWin = function () {
        var _this = this;
        this.ok += 1;
        if (this.ok == 3) {
            var audio = new Audio("../../assets/audios/Bravo.mp3");
            audio.play();
            setTimeout(function () {
                _this.router.navigate(['../games']);
            }, 5000);
        }
    };
    Game3Component.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    Game3Component.prototype.drag = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };
    Game3Component.prototype.dropCaine = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (data == "os") {
            this.CheckWin();
            ev.target.appendChild(document.getElementById(data));
        }
        else {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
        }
    };
    Game3Component.prototype.dropRata = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (data == "cucuruz") {
            ev.target.appendChild(document.getElementById(data));
            this.CheckWin();
        }
        else {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
        }
    };
    Game3Component.prototype.dropIepure = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (data == "morcov") {
            ev.target.appendChild(document.getElementById(data));
            this.CheckWin();
        }
        else {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
        }
    };
    Game3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game3',
            template: __webpack_require__(/*! ./game3.component.html */ "./src/app/game3/game3.component.html"),
            styles: [__webpack_require__(/*! ./game3.component.scss */ "./src/app/game3/game3.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Game3Component);
    return Game3Component;
}());



/***/ }),

/***/ "./src/app/game4/game4.component.html":
/*!********************************************!*\
  !*** ./src/app/game4/game4.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body4\"><audio src = \"../../assets/audios/Cerinta4.mp3\" type=\"audio/mpeg\"  autoplay>\n</audio>\n<div id=\"row\"><div id=\"column\" *ngFor=\"let animal of animals4\" >\n    <img class=\"idA\" id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" alt=\"{{animal.id}}\">\n   \n  </div>\n</div>\n<div id=\"row\">\n    <div id=\"column\" (drop)=\"dropPisica($event)\" (dragover)=\"allowDrop($event)\">\n    \n    </div>\n    <div id=\"column\" (drop)=\"dropPorc($event)\" (dragover)=\"allowDrop($event)\">\n    \n    </div>\n    <div id=\"column\" (drop)=\"dropVaca($event)\" (dragover)=\"allowDrop($event)\">\n    \n    </div>\n    </div>\n  <div id=\"row\">\n  <div id=\"column\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" *ngFor=\"let codita of codite\" >\n    <img class=\"{{codita.id}}\" id=\"{{codita.id}}\" src=\"{{codita.imagePath}}\" graggable=\"true\" (dragstart)=\"drag($event)\" alt=\"{{codita.id}}\">\n   \n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/game4/game4.component.scss":
/*!********************************************!*\
  !*** ./src/app/game4/game4.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px;\n  margin: 5px;\n  padding: 10px;\n  border: 1px solid black;\n  height: 200px; }\n\n#pisica {\n  widows: 160px;\n  height: 160px; }\n\n#vaca {\n  widows: 160px;\n  height: 160px; }\n\n#porc {\n  widows: 160px;\n  height: 160px; }\n\n#coditaPorc {\n  widows: 160px;\n  height: 160px; }\n\n#coditaVaca {\n  widows: 160px;\n  height: 160px; }\n\n#coditaPisica {\n  widows: 160px;\n  height: 160px; }\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n#body4 {\n  background: url('bg2.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTQvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lNFxcZ2FtZTQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUVYLGFBQVk7RUFFWixZQUFXO0VBQ1gsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixjQUFZLEVBR2Y7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGNBQWE7RUFDYixjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsY0FBYSxFQUNoQjs7QUFDRDtFQUNJLGNBQWE7RUFDYixjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUVuQjs7QUFDRDtFQUlFLHlEQUEwRTtFQUMxRSw0QkFBMkI7RUFDM0IsMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUU1QixtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUztFQUNULFlBQVU7RUFDVixhQUFZLEVBSWYiLCJmaWxlIjoic3JjL2FwcC9nYW1lNC9nYW1lNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY29sdW1uXHJcbntcclxuICAgIGZsZXg6MzMuMzMlO1xyXG4gICBcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgXHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDoyMDBweDtcclxuIFxyXG4gICBcclxufVxyXG5cclxuI3Bpc2ljYXtcclxuICAgIHdpZG93czogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcbiN2YWNhe1xyXG4gICAgd2lkb3dzOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuI3BvcmN7XHJcbiAgICB3aWRvd3M6IDE2MHB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG4jY29kaXRhUG9yY3tcclxuICAgIHdpZG93czogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcbiNjb2RpdGFWYWNhe1xyXG4gICAgd2lkb3dzOiAxNjBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbn1cclxuI2NvZGl0YVBpc2ljYXtcclxuICAgIHdpZG93czogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcbmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgXHJcbiAgfVxyXG4gICNib2R5NCB7XHJcbiBcclxuICBcclxuICBcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMi5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game4/game4.component.ts":
/*!******************************************!*\
  !*** ./src/app/game4/game4.component.ts ***!
  \******************************************/
/*! exports provided: Game4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game4Component", function() { return Game4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_coada_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/coada.source */ "./src/app/model/coada.source.ts");
/* harmony import */ var _model_game4_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/game4.source */ "./src/app/model/game4.source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Game4Component = /** @class */ (function () {
    function Game4Component(router) {
        this.router = router;
        this.animals4 = _model_game4_source__WEBPACK_IMPORTED_MODULE_3__["ANIMALS4"];
        this.codite = _model_coada_source__WEBPACK_IMPORTED_MODULE_2__["CODITE"];
        this.ok = 0;
    }
    Game4Component.prototype.ngOnInit = function () {
    };
    Game4Component.prototype.CheckWin = function () {
        var _this = this;
        this.ok += 1;
        if (this.ok == 3) {
            var audio = new Audio("../../assets/audios/Bravo.mp3");
            audio.play();
            setTimeout(function () {
                _this.router.navigate(['../games']);
            }, 5000);
        }
    };
    Game4Component.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    Game4Component.prototype.drag = function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    };
    Game4Component.prototype.dropVaca = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        if (data == "coditaVaca") {
            this.CheckWin();
            ev.target.appendChild(document.getElementById(data));
        }
        else {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
        }
    };
    Game4Component.prototype.dropPorc = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data);
        if (data == "coditaPorc") {
            ev.target.appendChild(document.getElementById(data));
            this.CheckWin();
        }
        else {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
        }
    };
    Game4Component.prototype.dropPisica = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data);
        if (data == "coditaPisica") {
            ev.target.appendChild(document.getElementById(data));
            this.CheckWin();
        }
        else {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
        }
    };
    Game4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game4',
            template: __webpack_require__(/*! ./game4.component.html */ "./src/app/game4/game4.component.html"),
            styles: [__webpack_require__(/*! ./game4.component.scss */ "./src/app/game4/game4.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Game4Component);
    return Game4Component;
}());



/***/ }),

/***/ "./src/app/game5/game5.component.html":
/*!********************************************!*\
  !*** ./src/app/game5/game5.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body5\"><audio src = \"../../assets/audios/Cerinta5.mp3\" type=\"audio/mpeg\"  autoplay>\n</audio>\n        <div id=\"row\"> <div id=\"column\" *ngFor=\"let animal of animals5\">\n            <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" alt=\"{{animal.id}}\">\n           </div>\n            \n     </div>\n  <div id=\"center\">\n    <input id=\"1Txt\" type=\"text\" maxlength=\"1\" (keyup)=\"verify1($event)\"  autocomplete=\"off\">\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/game5/game5.component.scss":
/*!********************************************!*\
  !*** ./src/app/game5/game5.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\n#center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px;\n  width: 15%; }\n\n#body5 {\n  background: url('bg3.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\ninput {\n  height: 100px;\n  font-size: 14pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTUvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lNVxcZ2FtZTUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixXQUFVLEVBQ1g7O0FBQ0Q7RUFJRSx5REFBMEU7RUFDMUUsNEJBQTJCO0VBQzNCLDJCQUEwQjtFQUMxQiw2QkFBNEI7RUFFNUIsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxZQUFVO0VBQ1YsYUFBWSxFQUlmOztBQUNEO0VBQ0ksY0FBWTtFQUNaLGdCQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZTUvZ2FtZTUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI2NvbHVtblxyXG57XHJcbiAgICBmbGV4OjMzLjMzJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4jY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gICNib2R5NSB7XHJcbiBcclxuICBcclxuICBcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMy5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuXHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBmb250LXNpemU6MTRwdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game5/game5.component.ts":
/*!******************************************!*\
  !*** ./src/app/game5/game5.component.ts ***!
  \******************************************/
/*! exports provided: Game5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game5Component", function() { return Game5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_game5_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/game5.source */ "./src/app/model/game5.source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Game5Component = /** @class */ (function () {
    function Game5Component(router) {
        this.router = router;
        this.animals5 = _model_game5_source__WEBPACK_IMPORTED_MODULE_2__["ANIMALS5"];
        this.ok = 0;
    }
    Game5Component.prototype.ngOnInit = function () {
    };
    Game5Component.prototype.verify1 = function (event) {
        var _this = this;
        console.log(event.target.value);
        if (event.target.value != "1") {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
            setTimeout(function () {
                event.target.value = "";
            }, 3000);
        }
        else {
            var audio = new Audio("../../assets/audios/Bravo.mp3");
            audio.play();
            setTimeout(function () {
                _this.router.navigate(['../games/game6']);
            }, 5000);
        }
    };
    Game5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game5',
            template: __webpack_require__(/*! ./game5.component.html */ "./src/app/game5/game5.component.html"),
            styles: [__webpack_require__(/*! ./game5.component.scss */ "./src/app/game5/game5.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Game5Component);
    return Game5Component;
}());



/***/ }),

/***/ "./src/app/game6/game6.component.html":
/*!********************************************!*\
  !*** ./src/app/game6/game6.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body6\"><audio src = \"../../assets/audios/Cerinta6.mp3\" type=\"audio/mpeg\"  autoplay>\n</audio>\n        <div id=\"row\"> <div id=\"column\" *ngFor=\"let animal of animals6\">\n            <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" alt=\"{{animal.id}}\">\n           </div>\n            \n     </div>\n  <div id=\"center\">\n    <input id=\"1Txt\" type=\"text\" maxlength=\"1\" (keyup)=\"verify1($event)\" autocomplete=\"off\">\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/game6/game6.component.scss":
/*!********************************************!*\
  !*** ./src/app/game6/game6.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\n#center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px;\n  width: 15%; }\n\n#body6 {\n  background: url('bg2.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n#soarece {\n  position: absolute;\n  top: -25vh;\n  left: 30vw; }\n\ninput {\n  height: 100px;\n  font-size: 14pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTYvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lNlxcZ2FtZTYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixXQUFVLEVBQ1g7O0FBQ0Q7RUFJRSx5REFBMEU7RUFDMUUsNEJBQTJCO0VBQzNCLDJCQUEwQjtFQUMxQiw2QkFBNEI7RUFFNUIsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxZQUFVO0VBQ1YsYUFBWSxFQUlmOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixXQUFVLEVBQ2I7O0FBQ0Q7RUFDSSxjQUFZO0VBQ1osZ0JBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9nYW1lNi9nYW1lNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY29sdW1uXHJcbntcclxuICAgIGZsZXg6MzMuMzMlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiNjZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiAgI2JvZHk2IHtcclxuIFxyXG4gIFxyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcyLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG5cclxufVxyXG4jc29hcmVjZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTI1dmg7XHJcbiAgICBsZWZ0OiAzMHZ3O1xyXG59XHJcbmlucHV0e1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgZm9udC1zaXplOjE0cHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game6/game6.component.ts":
/*!******************************************!*\
  !*** ./src/app/game6/game6.component.ts ***!
  \******************************************/
/*! exports provided: Game6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game6Component", function() { return Game6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_game6_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game6.source */ "./src/app/model/game6.source.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Game6Component = /** @class */ (function () {
    function Game6Component(router) {
        this.router = router;
        this.animals6 = _model_game6_source__WEBPACK_IMPORTED_MODULE_1__["ANIMALS6"];
        this.ok = 0;
    }
    Game6Component.prototype.ngOnInit = function () {
    };
    Game6Component.prototype.verify1 = function (event) {
        var _this = this;
        console.log(event.target.value);
        if (event.target.value != "1") {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
            setTimeout(function () {
                event.target.value = "";
            }, 3000);
        }
        else {
            var audio = new Audio("../../assets/audios/Bravo.mp3");
            audio.play();
            setTimeout(function () {
                _this.router.navigate(['../games/game7']);
            }, 5000);
        }
    };
    Game6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game6',
            template: __webpack_require__(/*! ./game6.component.html */ "./src/app/game6/game6.component.html"),
            styles: [__webpack_require__(/*! ./game6.component.scss */ "./src/app/game6/game6.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Game6Component);
    return Game6Component;
}());



/***/ }),

/***/ "./src/app/game7/game7.component.html":
/*!********************************************!*\
  !*** ./src/app/game7/game7.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body7\"><audio src = \"../../assets/audios/Cerinta7.mp3\" type=\"audio/mpeg\"  autoplay>\n</audio>\n        <div id=\"row\"> <div id=\"column\" *ngFor=\"let animal of animals7\">\n            <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" alt=\"{{animal.id}}\">\n           </div>\n            \n     </div>\n  <div id=\"center\">\n    <input id=\"1Txt\" type=\"text\" maxlength=\"1\" (keyup)=\"verify1($event)\" autocomplete=\"off\">\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/game7/game7.component.scss":
/*!********************************************!*\
  !*** ./src/app/game7/game7.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\n#center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 10px;\n  width: 15%; }\n\n#body7 {\n  background: url('bg3.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\ninput {\n  height: 100px;\n  font-size: 14pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTcvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lN1xcZ2FtZTcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixXQUFVLEVBQ1g7O0FBQ0Q7RUFJRSx5REFBMEU7RUFDMUUsNEJBQTJCO0VBQzNCLDJCQUEwQjtFQUMxQiw2QkFBNEI7RUFFNUIsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxZQUFVO0VBQ1YsYUFBWSxFQUlmOztBQUNEO0VBQ0ksY0FBWTtFQUNaLGdCQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZTcvZ2FtZTcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI2NvbHVtblxyXG57XHJcbiAgICBmbGV4OjMzLjMzJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4jY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gICNib2R5NyB7XHJcbiBcclxuICBcclxuICBcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2JnMy5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuXHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBmb250LXNpemU6MTRwdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game7/game7.component.ts":
/*!******************************************!*\
  !*** ./src/app/game7/game7.component.ts ***!
  \******************************************/
/*! exports provided: Game7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game7Component", function() { return Game7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_game7_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/game7.source */ "./src/app/model/game7.source.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Game7Component = /** @class */ (function () {
    function Game7Component(router) {
        this.router = router;
        this.animals7 = _model_game7_source__WEBPACK_IMPORTED_MODULE_2__["ANIMALS7"];
        this.ok = 0;
    }
    Game7Component.prototype.ngOnInit = function () {
    };
    Game7Component.prototype.verify1 = function (event) {
        var _this = this;
        console.log(event.target.value);
        if (event.target.value != "1") {
            var audio = new Audio("../../assets/audios/MaiIncearca.mp3");
            audio.play();
            setTimeout(function () {
                event.target.value = "";
            }, 3000);
        }
        else {
            var audio = new Audio("../../assets/audios/Bravo.mp3");
            audio.play();
            setTimeout(function () {
                _this.router.navigate(['../games']);
            }, 5000);
        }
    };
    Game7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game7',
            template: __webpack_require__(/*! ./game7.component.html */ "./src/app/game7/game7.component.html"),
            styles: [__webpack_require__(/*! ./game7.component.scss */ "./src/app/game7/game7.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Game7Component);
    return Game7Component;
}());



/***/ }),

/***/ "./src/app/game8/game8.component.html":
/*!********************************************!*\
  !*** ./src/app/game8/game8.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"body8\">\n    <audio src = \"../../assets/audios/GhicitoarePorc.mp3\" type=\"audio/mpeg\"  autoplay>  \n    </audio>\n\n    <div id=\"row\"> <div id=\"column\" *ngFor=\"let animal of animals8\">\n        <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" (click)=\"onSelect(animal)\" alt=\"{{animal.id}}\">\n       </div>\n        \n </div>\n</div>"

/***/ }),

/***/ "./src/app/game8/game8.component.scss":
/*!********************************************!*\
  !*** ./src/app/game8/game8.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\nimg {\n  width: 200px;\n  height: 300px; }\n\n#cocos {\n  position: absolute;\n  top: 50vh;\n  left: 20vw;\n  width: 200px;\n  height: 200px; }\n\n#porc {\n  position: absolute;\n  top: 50vh;\n  left: 40vw;\n  width: 200px;\n  height: 200px; }\n\n#soarece {\n  position: absolute;\n  top: 38vh;\n  left: 60vw;\n  width: 300px;\n  height: 300px; }\n\n#body8 {\n  background: url('bg8.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTgvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lOFxcZ2FtZTguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBRWhCOztBQUNEO0VBSUkseURBQTBFO0VBQzFFLDRCQUEyQjtFQUMzQiwyQkFBMEI7RUFDMUIsNkJBQTRCO0VBRTVCLG1CQUFrQjtFQUNsQixPQUFLO0VBQ0wsUUFBTztFQUNQLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVTtFQUNWLGFBQVksRUFJZiIsImZpbGUiOiJzcmMvYXBwL2dhbWU4L2dhbWU4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNyb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY29sdW1uXHJcbntcclxuICAgIGZsZXg6MzMuMzMlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbiNjb2Nvc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTB2aDtcclxuICAgIGxlZnQ6IDIwdnc7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jcG9yY3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTB2aDtcclxuICAgIGxlZnQ6IDQwdnc7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jc29hcmVjZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzh2aDtcclxuICAgIGxlZnQ6IDYwdnc7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxufVxyXG4jYm9keTgge1xyXG4gXHJcbiAgXHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9iZzgucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/game8/game8.component.ts":
/*!******************************************!*\
  !*** ./src/app/game8/game8.component.ts ***!
  \******************************************/
/*! exports provided: Game8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game8Component", function() { return Game8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_game8_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game8.source */ "./src/app/model/game8.source.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Game8Component = /** @class */ (function () {
    function Game8Component(router) {
        this.router = router;
        this.animals8 = _model_game8_source__WEBPACK_IMPORTED_MODULE_1__["ANIMALS8"];
    }
    Game8Component.prototype.ngOnInit = function () {
    };
    Game8Component.prototype.onSelect = function (a) {
        var _this = this;
        var audio = new Audio(a.audioPath);
        console.log(audio);
        audio.play();
        if (a.id == "porc")
            setTimeout(function () {
                _this.router.navigate(['../games/game9']);
            }, 5000);
    };
    Game8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game8',
            template: __webpack_require__(/*! ./game8.component.html */ "./src/app/game8/game8.component.html"),
            styles: [__webpack_require__(/*! ./game8.component.scss */ "./src/app/game8/game8.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Game8Component);
    return Game8Component;
}());



/***/ }),

/***/ "./src/app/game9/game9.component.html":
/*!********************************************!*\
  !*** ./src/app/game9/game9.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body9\">\n           <audio src = \"../../assets/audios/GhicitoarePisica.mp3\" type=\"audio/mpeg\"  autoplay>  \n           </audio>\n   \n           <div id=\"row\"> <div id=\"column\" *ngFor=\"let animal of animals9\">\n              <img id=\"{{animal.id}}\" src=\"{{animal.imagePath}}\" (click)=\"onSelect(animal)\" alt=\"{{animal.id}}\">\n             </div>\n              \n       </div>\n      </div>"

/***/ }),

/***/ "./src/app/game9/game9.component.scss":
/*!********************************************!*\
  !*** ./src/app/game9/game9.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\nimg {\n  width: 200px;\n  height: 300px; }\n\n#pisica {\n  position: absolute;\n  top: 50vh;\n  left: 20vw;\n  width: 200px;\n  height: 200px; }\n\n#vaca {\n  position: absolute;\n  top: 50vh;\n  left: 40vw;\n  width: 200px;\n  height: 200px; }\n\n#rata {\n  position: absolute;\n  top: 50vh;\n  left: 60vw;\n  width: 200px;\n  height: 200px; }\n\n#body9 {\n  background: url('bg9.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZTkvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lOVxcZ2FtZTkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBRUksYUFBVztFQUNYLGFBQVksRUFDZjs7QUFFRDtFQUNJLGFBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhLEVBRWhCOztBQUNEO0VBSUkseURBQTBFO0VBQzFFLDRCQUEyQjtFQUMzQiwyQkFBMEI7RUFDMUIsNkJBQTRCO0VBRTVCLG1CQUFrQjtFQUNsQixPQUFLO0VBQ0wsUUFBTztFQUNQLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVTtFQUNWLGFBQVksRUFJZiIsImZpbGUiOiJzcmMvYXBwL2dhbWU5L2dhbWU5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNyb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY29sdW1uXHJcbntcclxuICAgIGZsZXg6MzMuMzMlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbiNwaXNpY2F7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwdmg7XHJcbiAgICBsZWZ0OiAyMHZ3O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuI3ZhY2F7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwdmg7XHJcbiAgICBsZWZ0OiA0MHZ3O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuI3JhdGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwdmg7XHJcbiAgICBsZWZ0OiA2MHZ3O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbn1cclxuI2JvZHk5IHtcclxuIFxyXG4gIFxyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmc5LnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game9/game9.component.ts":
/*!******************************************!*\
  !*** ./src/app/game9/game9.component.ts ***!
  \******************************************/
/*! exports provided: Game9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game9Component", function() { return Game9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_game9_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/game9.source */ "./src/app/model/game9.source.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Game9Component = /** @class */ (function () {
    function Game9Component(router) {
        this.router = router;
        this.animals9 = _model_game9_source__WEBPACK_IMPORTED_MODULE_1__["ANIMALS9"];
    }
    Game9Component.prototype.ngOnInit = function () {
    };
    Game9Component.prototype.onSelect = function (a) {
        var _this = this;
        var audio = new Audio(a.audioPath);
        console.log(audio);
        audio.play();
        if (a.id == "pisica")
            setTimeout(function () {
                _this.router.navigate(['../games/game10']);
            }, 5000);
    };
    Game9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game9',
            template: __webpack_require__(/*! ./game9.component.html */ "./src/app/game9/game9.component.html"),
            styles: [__webpack_require__(/*! ./game9.component.scss */ "./src/app/game9/game9.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Game9Component);
    return Game9Component;
}());



/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bodys\">\n    <div id=\"body\">\n        <audio src = \"../../assets/audios/games.mp3\" type=\"audio/mpeg\"  autoplay>\n        </audio>\n    <nav>\n        <a routerLink=\"/home\"><img id=\"homePage\" src=\"../../assets/images/arrowB.png\" alt=\"back\"></a></nav>\n        \n        \n      \n  <div id=\"row\">\n  <div id=\"column\">\n  <nav>\n    <a routerLink=\"/games/game1\"><img id=\"gPage\" src=\"../../assets/images/g1.png\" alt=\"joc1\"></a>\n  </nav>\n  </div>\n  <div id=\"column\">\n  <nav>\n    <a routerLink=\"/games/game2\"><img id=\"gPage\" src=\"../../assets/images/g2.png\" alt=\"joc2\"></a>\n  </nav>\n  </div>\n  <div id=\"column\">\n  <nav>\n    <a routerLink=\"/games/game3\"><img id=\"gPage\" src=\"../../assets/images/g3.png\" alt=\"joc3\"></a>\n  </nav>\n  </div>\n  </div>\n  <div id=\"row\">\n  <div id=\"column\">\n  <nav>\n    <a routerLink=\"/games/game4\"><img id=\"gPage\" src=\"../../assets/images/g4.png\" alt=\"joc4\"></a>\n  </nav>\n  </div>\n  <div id=\"column\">\n  <nav>\n    <a routerLink=\"/games/game5\"><img id=\"gPage\" src=\"../../assets/images/g5.png\" alt=\"joc5\"></a>\n  </nav>\n  </div>\n  <div id=\"column\">\n  <nav>\n    <a routerLink=\"/games/game8\"><img id=\"gPage\" src=\"../../assets/images/g6.png\" alt=\"joc6\"></a>\n  </nav>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/games/games.component.scss":
/*!********************************************!*\
  !*** ./src/app/games/games.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#row {\n  display: flex;\n  padding-top: 150px;\n  padding-left: 100px; }\n\n#column {\n  flex: 33.33%;\n  padding: 5px; }\n\n#bodys {\n  background: url('bgG.png') no-repeat center center fixed;\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%; }\n\n#homePage {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 160px;\n  height: 160px; }\n\nimg {\n  width: 200px;\n  height: 200px; }\n\n#gPage {\n  border: 10px solid #82d11b; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvQzpcXFVzZXJzXFxSYWx1Y2FcXERvY3VtZW50c1xcSENJXFxIQ0lcXEFuaW1hbGVEb21lc3RpY2VTaUNpZnJhVW51L3NyY1xcYXBwXFxnYW1lc1xcZ2FtZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUVJLGFBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBQ0Q7RUFJSSx5REFBMEU7RUFLMUUsNEJBQTJCO0VBQzNCLDJCQUEwQjtFQUMxQiw2QkFBNEI7RUFFNUIsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsU0FBUTtFQUNSLFVBQVM7RUFDVCxZQUFVO0VBQ1YsYUFBWSxFQUlmOztBQUNEO0VBR0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsYUFBWTtFQUNaLGNBQWEsRUFFaEI7O0FBQ0Q7RUFDSSxhQUFZO0VBQ1osY0FBWSxFQUdmOztBQUNEO0VBQ0ksMkJBQW9DLEVBRXZDIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvZ2FtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbiNjb2x1bW5cclxue1xyXG4gICAgZmxleDozMy4zMyU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuI2JvZHlzIHtcclxuIFxyXG4gIFxyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdHLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgLy8td2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLy1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgLy8gLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG5cclxuXHJcbn1cclxuI2hvbWVQYWdlXHJcbntcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICBcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgIFxyXG5cclxufVxyXG4jZ1BhZ2V7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgcmdiKDEzMCwgMjA5LCAyNyk7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.scss */ "./src/app/games/games.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/model/animal.source.ts":
/*!****************************************!*\
  !*** ./src/app/model/animal.source.ts ***!
  \****************************************/
/*! exports provided: ANIMALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS", function() { return ANIMALS; });
var ANIMALS = [
    { id: "andrei", name: "andrei", audioPath: "../../assets/audios/Andrei.mp3", imagePath: "../../assets/images/Andrei.png" },
    { id: "vaca", name: "vaca", audioPath: "../../assets/audios/Bumba.m4a", imagePath: "../../assets/images/vaca.png" },
    { id: "porc", name: "porc", audioPath: "../../../assets/audios/Ghita.m4a", imagePath: "../../assets/images/pig.png" },
    { id: "hen", name: "gaina", audioPath: "../../../assets/audios/Fifi.m4a", imagePath: "../../assets/images/hen11.png" },
    { id: "cat", name: "pisica", audioPath: "../../../assets/audios/Mieunita.m4a", imagePath: "../../assets/images/cat2.png" },
    { id: "dog", name: "caine", audioPath: "../../../assets/audios/Azorel.m4a", imagePath: "../../assets/images/dogo.png" }
];


/***/ }),

/***/ "./src/app/model/coada.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/coada.source.ts ***!
  \***************************************/
/*! exports provided: CODITE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CODITE", function() { return CODITE; });
var CODITE = [
    { id: "coditaPorc", name: "coditaPorc", audioPath: " ", imagePath: "../../assets/images/coadaPorc.png" },
    { id: "coditaVaca", name: "coditaVaca", audioPath: " ", imagePath: "../../assets/images/coadaVaca.png" },
    { id: "coditaPisica", name: "coditaPisica", audioPath: " ", imagePath: "../../assets/images/coadaPisica.png" }
];


/***/ }),

/***/ "./src/app/model/folos.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/folos.source.ts ***!
  \***************************************/
/*! exports provided: FOLOS1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLOS1", function() { return FOLOS1; });
var FOLOS1 = [
    { id: "porc2", name: "carnati", audioPath: " ", imagePath: "../../assets/images/carnati.png" },
    { id: "gaina2", name: "ou", audioPath: " ", imagePath: "../../assets/images/ou.png" },
    { id: "vaca2", name: "lapte", audioPath: " ", imagePath: "../../assets/images/lapte.png" }
];


/***/ }),

/***/ "./src/app/model/game1.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game1.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS1", function() { return ANIMALS1; });
var ANIMALS1 = [
    { id: "gaina1", name: "Closca", audioPath: " ", imagePath: "../../assets/images/gaina.png" },
    { id: "vaca1", name: "Caine", audioPath: " ", imagePath: "../../assets/images/vacaCorp.png" },
    { id: "porc1", name: "Pisica Mama", audioPath: " ", imagePath: "../../assets/images/Porc.png" }
];


/***/ }),

/***/ "./src/app/model/game10.source.ts":
/*!****************************************!*\
  !*** ./src/app/model/game10.source.ts ***!
  \****************************************/
/*! exports provided: ANIMALS10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS10", function() { return ANIMALS10; });
var ANIMALS10 = [
    { id: "oaie", name: "oaie", audioPath: "../../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/oita2.png" },
    { id: "gasca", name: "gasca", audioPath: "../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/gasca.png" },
    { id: "caine", name: "caine", audioPath: "../../../assets/audios/Bravo.mp3", imagePath: "../../assets/images/catelus.png" },
];


/***/ }),

/***/ "./src/app/model/game11.source.ts":
/*!****************************************!*\
  !*** ./src/app/model/game11.source.ts ***!
  \****************************************/
/*! exports provided: ANIMALS11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS11", function() { return ANIMALS11; });
var ANIMALS11 = [
    { id: "iepure", name: "iepure", audioPath: "../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/iepurasCuCorpSiMustati.png" },
    { id: "gaina", name: "gaina", audioPath: "../../assets/audios/Bravo.mp3", imagePath: "../../assets/images/gaina.png" },
    { id: "magar", name: "magar", audioPath: "../../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/magarCorp.png" },
];


/***/ }),

/***/ "./src/app/model/game2.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game2.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS2", function() { return ANIMALS2; });
var ANIMALS2 = [
    { id: "gaina1", name: "Closca", audioPath: " ", imagePath: "../../assets/images/gaina.png" },
    { id: "pisica1", name: "Caine", audioPath: " ", imagePath: "../../assets/images/pisicutaCorp.png" },
    { id: "caine1", name: "Pisica Mama", audioPath: " ", imagePath: "../../assets/images/catelus.png" }
];


/***/ }),

/***/ "./src/app/model/game3.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game3.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS3", function() { return ANIMALS3; });
var ANIMALS3 = [
    { id: "iepure", name: "iepure", audioPath: " ", imagePath: "../../assets/images/iepurila.png" },
    { id: "rata", name: "rata", audioPath: " ", imagePath: "../../assets/images/rataCap.png" },
    { id: "caine", name: "caine", audioPath: " ", imagePath: "../../assets/images/caineCap2.png" }
];


/***/ }),

/***/ "./src/app/model/game4.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game4.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS4", function() { return ANIMALS4; });
var ANIMALS4 = [
    { id: "pisica", name: "pisica", audioPath: " ", imagePath: "../../assets/images/capPisicuta.png" },
    { id: "porc", name: "porc", audioPath: " ", imagePath: "../../assets/images/capPorc.png" },
    { id: "vaca", name: "vaca", audioPath: " ", imagePath: "../../assets/images/capVaca.png" }
];


/***/ }),

/***/ "./src/app/model/game5.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game5.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS5", function() { return ANIMALS5; });
var ANIMALS5 = [
    { id: "gainaRoscata", name: "gainaRoscata", audioPath: "", imagePath: "../../assets/images/gaina.png" },
    { id: "gainaGri", name: "gainaGri", audioPath: "", imagePath: "../../assets/images/gainaGri.png" },
    { id: "gainaGalbena", name: "gainaGalbena", audioPath: "", imagePath: "../../assets/images/gainaGalbena.png" },
];


/***/ }),

/***/ "./src/app/model/game6.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game6.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS6", function() { return ANIMALS6; });
var ANIMALS6 = [
    { id: "pisica", name: "pisica", audioPath: "", imagePath: "../../assets/images/pisicutaCorp.png" },
    { id: "soarece", name: "soarece", audioPath: "", imagePath: "../../assets/images/soareceIntreg.png" },
    { id: "caine", name: "caine", audioPath: "", imagePath: "../../assets/images/catelus.png" },
];


/***/ }),

/***/ "./src/app/model/game7.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game7.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS7", function() { return ANIMALS7; });
var ANIMALS7 = [
    { id: "rata", name: "rata", audioPath: "", imagePath: "../../assets/images/ratusca.png" },
    { id: "iepure", name: "iepure", audioPath: "", imagePath: "../../assets/images/iepurasCuCorpSiMustati.png" },
    { id: "oita", name: "oita", audioPath: "", imagePath: "../../assets/images/oita2.png" },
];


/***/ }),

/***/ "./src/app/model/game8.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game8.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS8", function() { return ANIMALS8; });
var ANIMALS8 = [
    { id: "cocos", name: "cocos", audioPath: "../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/cocosCorp.png" },
    { id: "porc", name: "porc", audioPath: "../../assets/audios/Bravo.mp3", imagePath: "../../assets/images/Porc.png" },
    { id: "soarece", name: "soarece", audioPath: "../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/soareceIntreg.png" }
];


/***/ }),

/***/ "./src/app/model/game9.source.ts":
/*!***************************************!*\
  !*** ./src/app/model/game9.source.ts ***!
  \***************************************/
/*! exports provided: ANIMALS9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMALS9", function() { return ANIMALS9; });
var ANIMALS9 = [
    { id: "pisica", name: "pisica", audioPath: "../../assets/audios/Bravo.mp3", imagePath: "../../assets/images/pisicutaCorp.png" },
    { id: "vaca", name: "vaca", audioPath: "../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/vacaCorp.png" },
    { id: "rata", name: "rata", audioPath: "../../../assets/audios/MaiIncearca.mp3", imagePath: "../../assets/images/ratusca.png" },
];


/***/ }),

/***/ "./src/app/model/mancare.source.ts":
/*!*****************************************!*\
  !*** ./src/app/model/mancare.source.ts ***!
  \*****************************************/
/*! exports provided: MANCARE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANCARE", function() { return MANCARE; });
var MANCARE = [
    { id: "cucuruz", name: "cucuruz", audioPath: " ", imagePath: "../../assets/images/cucuruz.png" },
    { id: "os", name: "os", audioPath: " ", imagePath: "../../assets/images/os.png" },
    { id: "morcov", name: "morcov", audioPath: " ", imagePath: "../../assets/images/morcov.png" }
];


/***/ }),

/***/ "./src/app/model/pui.source.ts":
/*!*************************************!*\
  !*** ./src/app/model/pui.source.ts ***!
  \*************************************/
/*! exports provided: PUI1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUI1", function() { return PUI1; });
var PUI1 = [
    { id: "pisica2", name: "pisica", audioPath: " ", imagePath: "../../assets/images/puiPisica.png" },
    { id: "gaina2", name: "gaina", audioPath: " ", imagePath: "../../assets/images/puiGaina.png" },
    { id: "caine2", name: "caine", audioPath: " ", imagePath: "../../assets/images/puiCaine.png" }
];


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

module.exports = __webpack_require__(/*! C:\Users\Raluca\Documents\HCI\HCI\AnimaleDomesticeSiCifraUnu\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map