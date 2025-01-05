"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var class_name_1 = require("../utils/class-name");
var Button = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.size, size = _c === void 0 ? 'default' : _c, props = __rest(_a, ["children", "className", "variant", "size"]);
    return ((0, jsx_runtime_1.jsx)("button", __assign({ className: (0, class_name_1.cn)('rounded-md font-medium transition-colors', variant === 'default' ? 'bg-blue-500 text-white hover:bg-blue-600' : '', variant === 'ghost' ? 'bg-transparent hover:bg-gray-100' : '', size === 'default' ? 'px-4 py-2 text-sm' : '', size === 'lg' ? 'px-6 py-3 text-base' : '', className) }, props, { children: children })));
};
exports.Button = Button;
