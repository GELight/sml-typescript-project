"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvLine {
    constructor(...args) {
        this.values = [];
        this.values = [...this.values, ...args];
        return this;
    }
    addValue(value) {
        this.values.push(value);
    }
    getValues() {
        return this.values;
    }
    toString() {
        return this.values.join(" ");
    }
}
exports.default = WsvLine;
//# sourceMappingURL=WsvLine.js.map