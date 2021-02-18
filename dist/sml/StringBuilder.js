"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringBuilder {
    constructor() {
        // ...
    }
    clear() {
        this.codePoints = [];
    }
    toString() {
        const chars = this.codePoints.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }
    appendCodePoint(codePoint) {
        this.codePoints.push(codePoint);
    }
    append(str) {
        this.codePoints.push(str.codePointAt(0));
    }
}
exports.default = StringBuilder;
//# sourceMappingURL=StringBuilder.js.map