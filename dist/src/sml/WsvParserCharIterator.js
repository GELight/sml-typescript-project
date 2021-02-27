"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvChar_1 = __importDefault(require("./WsvChar"));
const WsvParserException_1 = __importDefault(require("./WsvParserException"));
class WsvParserCharIterator {
    constructor(str, lineIndex) {
        WsvParserCharIterator.chars = Array.from(str).map((v) => v.codePointAt(0));
        WsvParserCharIterator.lineIndex = lineIndex;
    }
    static isEnd() {
        return WsvParserCharIterator.index >= WsvParserCharIterator.chars.length;
    }
    static is(c) {
        return WsvParserCharIterator.chars[WsvParserCharIterator.index] === c.codePointAt(0);
    }
    static isWhitespace() {
        return new WsvChar_1.default().isWhitespace(WsvParserCharIterator.chars[WsvParserCharIterator.index]);
    }
    static next() {
        WsvParserCharIterator.index++;
        return !WsvParserCharIterator.isEnd();
    }
    static get() {
        return WsvParserCharIterator.chars[WsvParserCharIterator.index];
    }
    static getByIndex(index) {
        const len = WsvParserCharIterator.index - index;
        const chars = WsvParserCharIterator.chars.map((c) => {
            return String.fromCodePoint(c);
        }).join("");
        return `${chars.substr(index, len)}`;
    }
    static getIndex() {
        return WsvParserCharIterator.index;
    }
    getException(message) {
        return new WsvParserException_1.default(message, WsvParserCharIterator.lineIndex, WsvParserCharIterator.index);
    }
}
exports.default = WsvParserCharIterator;
WsvParserCharIterator.index = 0;
WsvParserCharIterator.lineIndex = 0;
//# sourceMappingURL=WsvParserCharIterator.js.map