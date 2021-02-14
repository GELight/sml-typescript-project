"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvLine {
    constructor(...args) {
        this.values = [];
        this.parse(args);
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
    parse(args) {
        this.values = [...this.values, ...args];
        for (const arg of args) {
            let valueParts;
            valueParts = [...arg.split(" ")];
            for (const value of valueParts) {
                this.values.push(value);
            }
        }
        return this.getValues();
    }
}
exports.default = WsvLine;
//# sourceMappingURL=WsvLine.js.map