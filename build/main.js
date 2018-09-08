var WS;
(function (WS) {
    var glContext;
    var Utils = (function () {
        function Utils() {
        }
        Utils.createCanvas = function () {
            var canvas = document.createElement("canvas");
            canvas.id = "game-canvas";
            glContext = canvas.getContext("webgl2");
            if (!glContext) {
                glContext = canvas.getContext("webgl");
                if (!glContext) {
                    console.log("%c NO WEBGL AVAILABLE", "color: #bada55");
                }
                else {
                    console.log("%c WEBGL", "color: #bada55");
                }
            }
            else {
                console.log("%c WEBGL2", "color: #bada55");
            }
        };
        return Utils;
    }());
    WS.Utils = Utils;
})(WS || (WS = {}));
var WS;
(function (WS) {
    var Engine = (function () {
        function Engine() {
        }
        Engine.prototype.initialise = function () {
            WS.Utils.createCanvas();
            requestAnimationFrame(this.update.bind(this));
        };
        Engine.prototype.update = function () {
            requestAnimationFrame(this.update.bind(this));
        };
        return Engine;
    }());
    WS.Engine = Engine;
})(WS || (WS = {}));
window.onload = function () {
    console.log("CREATING ENGINE");
    var engine = new WS.Engine();
    engine.initialise();
    console.log("ENGINE CREATED");
};
//# sourceMappingURL=main.js.map