var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var cog2_1 = require('cog2/cog2');
var Pong = (function (_super) {
    __extends(Pong, _super);
    function Pong() {
        _super.apply(this, arguments);
    }
    Pong = __decorate([
        app({
            world: PongWorld,
            scene: PongScene,
            renderers: [cog2_1.ThreeRenderer],
            systems: []
        }), 
        __metadata('design:paramtypes', [])
    ], Pong);
    return Pong;
})(cog2_1.App);
exports.Pong = Pong;
var PongWorld = (function (_super) {
    __extends(PongWorld, _super);
    function PongWorld() {
        _super.apply(this, arguments);
    }
    PongWorld = __decorate([
        world({
            stateClass: PongState
        }), 
        __metadata('design:paramtypes', [])
    ], PongWorld);
    return PongWorld;
})(cog2_1.World);
exports.PongWorld = PongWorld;
var PongState = (function (_super) {
    __extends(PongState, _super);
    function PongState() {
        _super.apply(this, arguments);
        this.player1Score = 0;
        this.player2Score = 0;
    }
    return PongState;
})(cog2_1.State);
exports.PongState = PongState;
///////////////////
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball() {
        _super.apply(this, arguments);
    }
    Ball = __decorate([
        entity({
            tag: 'ball',
            components: []
        }), 
        __metadata('design:paramtypes', [])
    ], Ball);
    return Ball;
})(cog2_1.Entity);
exports.Ball = Ball;
var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle() {
        _super.apply(this, arguments);
    }
    Paddle = __decorate([
        entity({
            tag: 'paddle',
            components: []
        }), 
        __metadata('design:paramtypes', [])
    ], Paddle);
    return Paddle;
})(cog2_1.Entity);
exports.Paddle = Paddle;
/////////////////////
var PlayerPaddleController = (function (_super) {
    __extends(PlayerPaddleController, _super);
    function PlayerPaddleController() {
        _super.apply(this, arguments);
    }
    return PlayerPaddleController;
})(cog2_1.Controller);
exports.PlayerPaddleController = PlayerPaddleController;
var AIPaddleController = (function (_super) {
    __extends(AIPaddleController, _super);
    function AIPaddleController() {
        _super.apply(this, arguments);
    }
    return AIPaddleController;
})(cog2_1.Controller);
exports.AIPaddleController = AIPaddleController;
/////////////////////
var PongScene = (function (_super) {
    __extends(PongScene, _super);
    function PongScene() {
        _super.apply(this, arguments);
    }
    return PongScene;
})(cog2_1.ThreeScene);
exports.PongScene = PongScene;
var BallMesh = (function (_super) {
    __extends(BallMesh, _super);
    function BallMesh() {
        _super.apply(this, arguments);
    }
    return BallMesh;
})(cog2_1.ThreeMesh);
exports.BallMesh = BallMesh;
var PaddleMesh = (function (_super) {
    __extends(PaddleMesh, _super);
    function PaddleMesh() {
        _super.apply(this, arguments);
    }
    return PaddleMesh;
})(cog2_1.ThreeMesh);
exports.PaddleMesh = PaddleMesh;
//# sourceMappingURL=pong.js.map