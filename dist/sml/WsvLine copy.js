"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvLine {
    constructor(...args) {
        this.values = [];
        this.values = [...args];
        return this;
    }
    getLines() {
        return this.values;
    }
    toString() {
        return this.values.join(" ");
    }
}
exports.default = WsvLine;
//# sourceMappingURL=WsvLine copy.js.map