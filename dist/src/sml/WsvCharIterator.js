"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
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
}
exports.default = WsvCharIterator;
//# sourceMappingURL=WsvCharIterator.js.map