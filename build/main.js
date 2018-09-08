var WS;
(function (WS) {
    var Engine = (function () {
        function Engine() {
        }
        return Engine;
    }());
    WS.Engine = Engine;
})(WS || (WS = {}));
window.onload = function () {
    console.log("CREATING ENGINE");
    var engine = new WS.Engine();
    console.log("ENGINE CREATED");
};
//# sourceMappingURL=main.js.map