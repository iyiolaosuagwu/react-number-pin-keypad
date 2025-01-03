"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keypad = Keypad;
var react_1 = __importDefault(require("react"));
var class_name_1 = require("../utils/class-name");
var lucide_react_1 = require("lucide-react");
var Button_1 = require("./Button");
function Keypad(_a) {
    var onKeyPress = _a.onKeyPress, onBackspace = _a.onBackspace, className = _a.className;
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
        '.',
        '0',
        'backspace',
    ];
    var handleKeyPress = function (key) {
        if (key === 'backspace') {
            onBackspace();
        }
        else {
            onKeyPress(key);
        }
    };
    return (react_1.default.createElement("div", { className: (0, class_name_1.cn)('grid grid-cols-3 gap-2', className) }, keys.map(function (key) { return (react_1.default.createElement(Button_1.Button, { key: key, variant: "ghost", size: "lg", onClick: function () { return handleKeyPress(key); }, className: (0, class_name_1.cn)('h-14 text-xl font-medium rounded-xl hover:bg-gray-100', key === 'backspace' ? 'text-base' : '') }, key === 'backspace' ? (react_1.default.createElement(lucide_react_1.ChevronLeft, { size: 20, strokeWidth: 3 })) : (key))); })));
}
