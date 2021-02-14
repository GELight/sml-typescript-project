"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvLine_1 = __importDefault(require("./WsvLine"));
class WsvDocument {
    constructor() {
        this.lines = [];
        return this;
    }
    addLine(...args) {
        const line = new WsvLine_1.default();
        for (const arg of args) {
            line.addValue(arg);
        }
        this.lines.push(line);
    }
    getLines() {
        return this.lines;
    }
    toString() {
        return this.lines.join("\n");
    }
    save(filePath) {
        return this;
    }
}
exports.default = WsvDocument;
//# sourceMappingURL=WsvDocument.js.map