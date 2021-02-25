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
    getLength() {
        return this.codePoints.length;
    }
    setLength(from, until) {
        if (from !== undefined && until !== undefined) {
            this.codePoints = this.codePoints.slice(from, until);
        }
        else {
            this.codePoints = this.codePoints.slice(from);
        }
        return this.getLength();
    }
}
exports.default = StringBuilder;
//# sourceMappingURL=StringBuilder.js.map