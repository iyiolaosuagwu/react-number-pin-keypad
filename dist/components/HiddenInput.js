"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HiddenInput = HiddenInput;
var react_1 = __importDefault(require("react"));
var class_name_1 = require("../utils/class-name");
function HiddenInput(_a) {
    var length = _a.length, maxLength = _a.maxLength, className = _a.className, dotClassName = _a.dotClassName;
    return (react_1.default.createElement("div", { className: (0, class_name_1.cn)('flex justify-center space-x-2 mb-4', className) }, Array.from({ length: maxLength }).map(function (_, index) { return (react_1.default.createElement("div", { key: index, className: (0, class_name_1.cn)('w-4 h-4 rounded-full', index < length ? 'bg-blue-300' : 'bg-gray-300', dotClassName) })); })));
}
