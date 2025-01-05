"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = exports.Button = exports.Keypad = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = require("./components/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
var class_name_1 = require("./utils/class-name");
Object.defineProperty(exports, "cn", { enumerable: true, get: function () { return class_name_1.cn; } });
var Keypad_1 = require("./components/Keypad");
Object.defineProperty(exports, "Keypad", { enumerable: true, get: function () { return Keypad_1.Keypad; } });
var App = function () {
    var _a = (0, react_1.useState)(''), input = _a[0], setInput = _a[1];
    var handleKeyPress = function (key) {
        setInput(function (prevInput) { return prevInput + key; });
    };
    var handleBackspace = function () {
        setInput(function (prevInput) { return prevInput.slice(0, -1); });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen bg-gray-100 flex items-center justify-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-8 rounded-xl shadow-lg space-y-6 max-w-md w-full", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold text-center text-gray-800", children: "Keypad Demo" }), (0, jsx_runtime_1.jsx)("div", { className: "text-2xl text-center bg-gray-50 p-4 rounded-lg min-h-[60px]", children: input || 'Enter a number' }), (0, jsx_runtime_1.jsx)(Keypad_1.Keypad, { onKeyPress: handleKeyPress, onBackspace: handleBackspace, className: "mx-auto", input: input, hiddenInputClassName: "", hiddenInputDotClassName: "", type: "pin", maxLength: 5 }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setInput(''); }, className: "w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors", children: "Clear" })] }) }));
};
exports.default = App;
