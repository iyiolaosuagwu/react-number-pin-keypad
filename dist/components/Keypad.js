"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keypad = Keypad;
var jsx_runtime_1 = require("react/jsx-runtime");
var class_name_1 = require("../utils/class-name");
var lucide_react_1 = require("lucide-react");
var Button_1 = require("./Button");
var HiddenInput_1 = require("./HiddenInput");
function Keypad(_a) {
    var onKeyPress = _a.onKeyPress, onBackspace = _a.onBackspace, className = _a.className, _b = _a.input, input = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? 'default' : _c, _d = _a.maxLength, maxLength = _d === void 0 ? 4 : _d, hiddenInputClassName = _a.hiddenInputClassName, hiddenInputDotClassName = _a.hiddenInputDotClassName;
    var keys = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        type === 'pin' ? '' : '.',
        '0',
        'backspace',
    ];
    var handleKeyPress = function (key) {
        if (key === 'backspace') {
            onBackspace();
        }
        else if (type === 'pin' && input.length >= maxLength) {
            return;
        }
        else {
            onKeyPress(key);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [type === 'pin' && ((0, jsx_runtime_1.jsx)(HiddenInput_1.HiddenInput, { length: input.length, maxLength: maxLength, className: hiddenInputClassName, dotClassName: hiddenInputDotClassName })), (0, jsx_runtime_1.jsx)("div", { className: (0, class_name_1.cn)('grid grid-cols-3 gap-2', className), children: keys.map(function (key) { return ((0, jsx_runtime_1.jsx)(Button_1.Button, { variant: "ghost", size: "lg", onClick: function () { return handleKeyPress(key); }, className: (0, class_name_1.cn)('h-14 text-xl font-medium rounded-xl hover:bg-transparent flex items-center justify-center', key === 'backspace' ? 'text-base' : ''), children: key === 'backspace' ? (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeft, { size: 20, strokeWidth: 3 }) : key }, key)); }) })] }));
}
