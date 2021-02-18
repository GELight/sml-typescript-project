"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvParserCharIterator {
    constructor(str) {
        this.index = 0;
        this.chars = Array.from(str).map((v) => v.codePointAt(0));
    }
    isEnd() {
        return this.index >= this.chars.length;
    }
    is(c) {
        return this.chars[this.index] === c.codePointAt(0);
    }
    isWhitespace() {
        return (this.chars[this.index] === 0x20);
    }
    next() {
        this.index++;
        return !this.isEnd();
    }
    get() {
        return this.chars[this.index];
    }
}
exports.default = WsvParserCharIterator;
//# sourceMappingURL=WsvParserCharIterator.js.map