"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
const WsvChar_1 = __importDefault(require("./WsvChar"));
const WsvParserException_1 = __importDefault(require("./WsvParserException"));
class WsvCharIterator {
    constructor(text) {
        this.sb = new StringBuilder_1.default();
        for (const codePoint of text) {
            codePoint.codePointAt(0);
        }
    }
    getText() {
        const chars = this.chars.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }
    getLineInfoString() {
        const lineInfo = this.getLineInfo();
        return `(${lineInfo[1] + 1}, ${lineInfo[2] + 1})`;
    }
    getLineInfo() {
        let lineIndex = 0;
        let linePosition = 0;
        for (let i = 0; i < this.index; i++) {
            if (String.fromCodePoint(this.chars[i]) === "\n") {
                lineIndex++;
                linePosition = 0;
            }
            else {
                linePosition++;
            }
        }
        const a = [this.index, lineIndex, linePosition];
        return a;
    }
    isEndOfText() {
        return this.index >= this.chars.length;
    }
    isChar(c) {
        if (this.isEndOfText()) {
            return false;
        }
        return (this.chars[this.index] === c);
    }
    tryReadChar(c) {
        if (!this.isChar(c)) {
            return false;
        }
        this.index++;
        return true;
    }
    readCommentText() {
        const startIndex = this.index;
        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            if (String.fromCodePoint(this.index) === "\n") {
                break;
            }
            this.index++;
        }
        return this.getText().substring(startIndex, (this.index - startIndex));
    }
    readWhitespaceOrNull() {
        const startIndex = this.index;
        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            const c = this.chars[this.index];
            if (String.fromCodePoint(c) === "\n") {
                break;
            }
            if (!new WsvChar_1.default().isWhitespace(c)) {
                break;
            }
            this.index++;
        }
        if (this.index === startIndex) {
            return null;
        }
        return this.getText().substring(startIndex, (this.index - startIndex));
    }
    readString() {
        this.sb.clear();
        const doubleQuote = '"'.codePointAt(0);
        const lineBreak = "\n".codePointAt(0);
        const slash = "/".codePointAt(0);
        while (true) {
            if (this.isEndOfText()) {
                throw new WsvParserException_1.default("String not closed");
            }
            const c = this.chars[this.index];
            if (c === lineBreak) {
                throw new WsvParserException_1.default("String not closed in starting line");
            }
            else if (c === doubleQuote) {
                this.index++;
                if (this.tryReadChar(doubleQuote)) {
                    this.sb.appendCodePoint(doubleQuote);
                }
                else if (this.tryReadChar(slash)) {
                    if (!this.tryReadChar(doubleQuote)) {
                        throw new WsvParserException_1.default("String expected after linebreak slash");
                    }
                    this.sb.appendCodePoint(lineBreak);
                }
                else {
                    break;
                }
            }
            else {
                this.sb.appendCodePoint(c);
                this.index++;
            }
        }
        return this.sb.toString();
    }
    readValue() {
        const startIndex = this.index;
        const rhombus = "#".codePointAt(0);
        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            const c = this.chars[this.index];
            if (new WsvChar_1.default().isWhitespace(c) || c === rhombus) {
                break;
            }
            if (String.fromCodePoint(c) === '\"') {
                throw new WsvParserException_1.default("String starting in value");
            }
            this.index++;
        }
        if (this.index === startIndex) {
            throw new WsvParserException_1.default("Invalid value");
        }
        return this.getText().substring(startIndex, (this.index - startIndex));
    }
}
exports.default = WsvCharIterator;
//# sourceMappingURL=WsvCharIterator.js.map