"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvChar_1 = __importDefault(require("./WsvChar"));
const WsvParserException_1 = __importDefault(require("./WsvParserException"));
class WsvParserCharIterator {
    constructor(str, lineIndex) {
        this.index = 0;
        this.lineIndex = 0;
        this.chars = Array.from(str).map((v) => v.codePointAt(0));
        this.lineIndex = lineIndex;
    }
    isEnd() {
        return this.index >= this.chars.length;
    }
    is(c) {
        return this.chars[this.index] === c.codePointAt(0);
    }
    isWhitespace() {
        return new WsvChar_1.default().isWhitespace(this.chars[this.index]);
    }
    next() {
        this.index++;
        return !this.isEnd();
    }
    get() {
        return this.chars[this.index];
    }
    getByIndex(index) {
        const len = this.index - index;
        const chars = this.chars.map((c) => {
            return String.fromCodePoint(c);
        }).join("");
        return `${chars.substr(index, len)}`;
    }
    getIndex() {
        return this.index;
    }
    getException(message) {
        return new WsvParserException_1.default(message, this.lineIndex, this.index);
    }
}
exports.default = WsvParserCharIterator;
//# sourceMappingURL=WsvParserCharIterator.js.map