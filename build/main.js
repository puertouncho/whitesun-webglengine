var WS;
(function (WS) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.createCanvas = function (canvasId) {
            var alreadyExist = document.getElementById(canvasId);
            if (alreadyExist && alreadyExist.nodeName !== "canvas") {
                throw "Already exist a non canvas element with the id: " + canvasId;
            }
            var canvas = alreadyExist ? alreadyExist : document.createElement("canvas");
            canvas.id = canvasId ? canvasId : "whitesun-game-canvas";
            WS.glContext = canvas.getContext("webgl2");
            if (!WS.glContext) {
                WS.glContext = canvas.getContext("webgl");
                if (!WS.glContext) {
                    WS.Log.error("NO WEBGL AVAILABLE");
                    return;
                }
                else {
                    WS.Log.success("White Sun Engine - WEBGL");
                }
            }
            else {
                WS.Log.success("White Sun Engine - WEBGL2");
            }
            document.body.appendChild(canvas);
        };
        return Utils;
    }());
    WS.Utils = Utils;
})(WS || (WS = {}));
var WS;
(function (WS) {
    var Log = (function () {
        function Log() {
        }
        Log.error = function (message) {
            if (!this.loggingEnabled) {
                return;
            }
            console.log("%c " + message, "color: #ff0000; font-weight: bold;");
        };
        Log.warn = function (message) {
            if (!this.loggingEnabled) {
                return;
            }
            console.log("%c " + message, "color: #dfdf00; font-weight: bold;");
        };
        Log.success = function (message) {
            if (!this.loggingEnabled) {
                return;
            }
            console.log("%c " + message, "color: #008000; font-weight: bold;");
        };
        Log.info = function (message) {
            if (!this.loggingEnabled) {
                return;
            }
            console.log("%c " + message, "color: #000000; font-weight: bold;");
        };
        Log.loggingEnabled = true;
        return Log;
    }());
    WS.Log = Log;
})(WS || (WS = {}));
var WS;
(function (WS) {
    var Engine = (function () {
        function Engine() {
        }
        Engine.prototype.initialise = function (canvasId) {
            WS.Utils.createCanvas(canvasId);
            WS.glContext.clearColor(0, 0, 0, 1);
            requestAnimationFrame(this.update.bind(this));
        };
        Engine.prototype.update = function () {
            WS.glContext.clear(WS.glContext.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.update.bind(this));
        };
        return Engine;
    }());
    WS.Engine = Engine;
})(WS || (WS = {}));
window.onload = function () {
    WS.Log.info("CREATING ENGINE");
    var engine = new WS.Engine();
    engine.initialise();
    WS.Log.info("ENGINE CREATED");
};
//# sourceMappingURL=main.js.map