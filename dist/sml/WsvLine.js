"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
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
        return new WsvSerializer_1.default().toString(this.getValues(), " ");
    }
    parse(args) {
        for (const arg of args) {
            this.values.push(arg);
        }
        return this.getValues();
    }
}
exports.default = WsvLine;
//# sourceMappingURL=WsvLine.js.map