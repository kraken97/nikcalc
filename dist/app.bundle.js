webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var platform_browser_dynamic_1 = __webpack_require__(97);
	var app_component_1 = __webpack_require__(280);
	var TilesList_1 = __webpack_require__(282);
	var game_start_1 = __webpack_require__(284);
	var States_1 = __webpack_require__(283);
	var desk_1 = __webpack_require__(285);
	var end_game_1 = __webpack_require__(286);
	var MainApp = (function () {
	    function MainApp(tiles) {
	        this.tiles = tiles;
	        this.begin = this.tiles.state == States_1.GAME_BEGIN;
	        this.started = this.tiles.state === States_1.GAME_STARTED;
	        this.row = "row";
	        console.log(tiles.state);
	    }
	    MainApp.prototype.isBegin = function () {
	        this.tiles.state === States_1.GAME_BEGIN;
	    };
	    MainApp.prototype.ngOnInit = function () {
	        console.log(this.tiles.state);
	    };
	    MainApp.prototype.ngOnChanges = function () {
	        this.begin = this.tiles.state == States_1.GAME_BEGIN;
	        this.started = this.tiles.state === States_1.GAME_STARTED;
	        console.log(this.tiles.state);
	    };
	    MainApp = __decorate([
	        core_1.Component({
	            selector: "app",
	            directives: [app_component_1.Tile, game_start_1.GameStartComponent, desk_1.Desk, end_game_1.GameEndComponent],
	            styles: ["\n    .row{\n        display:flex;\n    }\n    "],
	            template: "\n    <div>\n<h1>\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0418\u0449\u0435\u043D\u043A\u043E \u041D\u0438\u043A\u0438\u0442\u043E\u0439</h1>\n\n<end *ngIf=\"tiles.state===1\" [winner]=\"tiles.winner\"></end>\n<start *ngIf=\"tiles.state===0\"></start> \n     <desk [tiles]=\"tiles\" *ngIf=\"tiles.state===2\"></desk>\n   \n    </div>"
	        }), 
	        __metadata('design:paramtypes', [TilesList_1.TileList])
	    ], MainApp);
	    return MainApp;
	}());
	platform_browser_dynamic_1.bootstrap(MainApp, [TilesList_1.TileList]);


/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TileModel_1 = __webpack_require__(281);
	var TilesList_1 = __webpack_require__(282);
	var Tile = (function () {
	    function Tile(tiles) {
	        this.tiles = tiles;
	    }
	    Tile.prototype.onClick = function () {
	        this.tile_model.click();
	        console.log();
	        if (this.tile_model.checkIFhasChains(5)) {
	            console.log("winner is" + this.tile_model.status);
	            this.tiles.endGame(this.tile_model.status);
	        }
	        if (this.tiles.checkN()) {
	            this.tiles.endGame("NOBODY");
	        }
	    };
	    Tile.prototype.ngOnInit = function () {
	        console.log(this.tile_model);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', TileModel_1.default)
	    ], Tile.prototype, "tile_model", void 0);
	    Tile = __decorate([
	        core_1.Component({
	            selector: 'tile',
	            template: '<div (click)="onClick()" [ngClass]="tile_model.status"><div>'
	        }), 
	        __metadata('design:paramtypes', [TilesList_1.TileList])
	    ], Tile);
	    return Tile;
	}());
	exports.Tile = Tile;


/***/ },

/***/ 281:
/***/ function(module, exports) {

	"use strict";
	var TileModel = (function () {
	    function TileModel(param) {
	        this.status = "none";
	        this.top = null;
	        this.bot = null;
	        this.left = null;
	        this.right = null;
	        this.left = param.left;
	        this.right = param.right;
	        this.bot = param.bot;
	        this.top = param.top;
	    }
	    TileModel.prototype.click = function () {
	        if (this.status === "none") {
	            this.status = TileModel.type ? "crest" : "circle";
	            TileModel.type = !TileModel.type;
	        }
	    };
	    TileModel.prototype.checkIFhasChains = function (num) {
	        if (this.check("left") + this.check("right") - 1 > num)
	            return true;
	        if (this.check("top") + this.check("bot") - 1 > num)
	            return true;
	        return false;
	    };
	    TileModel.prototype.check = function (param) {
	        var node = this.getNode(param, this);
	        for (var i = 0; node && node.status == this.status; i++) {
	            i++;
	            node = this.getNode(param, node);
	        }
	        return i;
	    };
	    TileModel.prototype.getNode = function (param, model) {
	        var node;
	        switch (param) {
	            case "left":
	                return node = model.left;
	            case "right":
	                return node = model.right;
	            case "top":
	                return node = model.top;
	            case "bot":
	                return node = model.bot;
	            default:
	                return null;
	        }
	    };
	    TileModel.type = false;
	    return TileModel;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TileModel;


/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TileModel_1 = __webpack_require__(281);
	var States_1 = __webpack_require__(283);
	var TileList = (function () {
	    function TileList() {
	        this.state = States_1.GAME_BEGIN;
	    }
	    TileList.prototype.endGame = function (winner) {
	        this.winner = winner;
	        this.state = States_1.GAME_END;
	    };
	    TileList.prototype.startGame = function (num) {
	        this.createTiles(num);
	        this.state = States_1.GAME_STARTED;
	    };
	    TileList.prototype.checkN = function () {
	        for (var i = 0; i < this.tiles.length; i++) {
	            for (var j = 0; j < this.tiles.length; j++) {
	                if (this.tiles[i][j].status === 'none')
	                    return false;
	            }
	        }
	        return true;
	    };
	    TileList.prototype.createTiles = function (num) {
	        this.tiles = new Array();
	        for (var i = 0; i < num; i++) {
	            this.tiles[i] = new Array();
	            for (var j = 0; j < num; j++)
	                this.tiles[i][j] = new TileModel_1.default({});
	        }
	        for (var i = 0; i < num; i++) {
	            for (var j = 0; j < num; j++) {
	                this.tiles[i][j].bot = j + 1 >= num ? null : this.tiles[i][j + 1];
	                this.tiles[i][j].top = j - 1 < 0 ? null : this.tiles[i][j - 1];
	                this.tiles[i][j].left = i - 1 < 0 ? null : this.tiles[i - 1][j];
	                this.tiles[i][j].right = i + 1 >= num ? null : this.tiles[i + 1][j];
	            }
	        }
	    };
	    TileList = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], TileList);
	    return TileList;
	}());
	exports.TileList = TileList;


/***/ },

/***/ 283:
/***/ function(module, exports) {

	"use strict";
	exports.GAME_BEGIN = 0;
	exports.GAME_END = 1;
	exports.GAME_STARTED = 2;


/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TilesList_1 = __webpack_require__(282);
	var GameStartComponent = (function () {
	    function GameStartComponent(tiles) {
	        this.tiles = tiles;
	    }
	    GameStartComponent.prototype.ngOnInit = function () { };
	    GameStartComponent.prototype.onSubmit = function () {
	        this.tiles.startGame(this.row_number);
	    };
	    GameStartComponent = __decorate([
	        core_1.Component({
	            selector: 'start',
	            template: "<div>\n     <h1>Start game </h1>\n<h3>enter number of rows and cols</h3>\n    <form (submit)=\"onSubmit()\">\n        <input type=\"number\" [(ngModel)]=\"row_number\"/>\n    </form>\n</div>\n   "
	        }), 
	        __metadata('design:paramtypes', [TilesList_1.TileList])
	    ], GameStartComponent);
	    return GameStartComponent;
	}());
	exports.GameStartComponent = GameStartComponent;


/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var app_component_1 = __webpack_require__(280);
	var Desk = (function () {
	    function Desk() {
	        this.row = "row";
	    }
	    Desk.prototype.ngOnInit = function () {
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], Desk.prototype, "tiles", void 0);
	    Desk = __decorate([
	        core_1.Component({
	            selector: "desk",
	            directives: [app_component_1.Tile],
	            styles: ["\n    .row{\n        display:flex;\n    }\n    "],
	            template: "\n    <ul>\n\n    <li  [ngClass]=\"row\" *ngFor=\"let tileRow of tiles.tiles\" >\n\n           <div *ngFor=\"let tile of tileRow\">\n            <tile [tile_model]=\"tile\"></tile>\n           </div>\n    </li>\n    </ul>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Desk);
	    return Desk;
	}());
	exports.Desk = Desk;


/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var TilesList_1 = __webpack_require__(282);
	var GameEndComponent = (function () {
	    function GameEndComponent(tiles) {
	        this.tiles = tiles;
	    }
	    GameEndComponent.prototype.ngOnInit = function () { };
	    GameEndComponent.prototype.onSubmit = function () {
	        this.tiles.startGame(this.row_number);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], GameEndComponent.prototype, "winner", void 0);
	    GameEndComponent = __decorate([
	        core_1.Component({
	            selector: 'end',
	            template: "<div>\n        <h1>Winner is {{winner}}</h1>\n     <h2>Start game again </h2>\n<h3>enter number of rows and cols</h3>\n    <form (submit)=\"onSubmit()\">\n        <input type=\"number\" [(ngModel)]=\"row_number\"/>\n    </form>\n</div>\n   "
	        }), 
	        __metadata('design:paramtypes', [TilesList_1.TileList])
	    ], GameEndComponent);
	    return GameEndComponent;
	}());
	exports.GameEndComponent = GameEndComponent;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map