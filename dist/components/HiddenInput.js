"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenInput = HiddenInput;
var jsx_runtime_1 = require("react/jsx-runtime");
var class_name_1 = require("../utils/class-name");
function HiddenInput(_a) {
    var length = _a.length, maxLength = _a.maxLength, className = _a.className, dotClassName = _a.dotClassName;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, class_name_1.cn)('flex justify-center space-x-2 mb-4', className), children: Array.from({ length: maxLength }).map(function (_, index) { return ((0, jsx_runtime_1.jsx)("div", { className: (0, class_name_1.cn)('w-4 h-4 rounded-full', index < length ? 'bg-blue-300' : 'bg-gray-300', dotClassName) }, index)); }) }));
}
