"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvLine_1 = __importDefault(require("./WsvLine"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
class WsvDocument {
    constructor(...args) {
        this.lines = [];
        for (const lineStr of args) {
            const lines = new WsvParser_1.default().parseDocument(lineStr);
            const firstLine = lines[0];
            const newLine = new WsvLine_1.default(...firstLine);
            this.lines.push(newLine);
        }
        return this;
    }
    addWsvLine(...args) {
        for (const arg of args) {
            this.lines.push(arg);
        }
        return this.getLines();
    }
    addWsvLineByValues(...args) {
        const line = new WsvLine_1.default();
        for (const arg of args) {
            line.addValue(arg);
        }
        this.lines.push(line);
        return this.getLines();
    }
    addWsvLineBySet(values, whitespaces, comment) {
        this.addWsvLine(new WsvLine_1.default().set(values, whitespaces, comment));
        return this;
    }
    getLines() {
        return this.lines;
    }
    getLine(index) {
        return this.lines[index];
    }
    toArray() {
        const array = [];
        for (let i = 0; i < this.lines.length; i++) {
            array[i] = this.lines[i].getValues();
        }
        return array;
    }
    toString() {
        return new WsvSerializer_1.default().serializeDocument(this);
    }
    parse(content) {
        return new WsvParser_1.default().parseDocument(content);
    }
}
exports.default = WsvDocument;
//# sourceMappingURL=WsvDocument.js.map