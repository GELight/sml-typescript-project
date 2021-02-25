"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const WsvLine_1 = __importDefault(require("./WsvLine"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
class WsvDocument {
    constructor(...args) {
        this.lines = [];
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        for (const lineStr of args) {
            const lines = new WsvParser_1.default().parseDocument(lineStr);
            const firstLine = lines[0];
            const newLine = new WsvLine_1.default(...firstLine);
            this.lines.push(newLine);
        }
        return this;
    }
    setEncoding(encoding) {
        this.encoding = encoding;
        return this;
    }
    getEncoding() {
        return this.encoding;
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
    getLines() {
        return this.lines;
    }
    toString() {
        const serializedValues = [];
        for (const item of this.getLines()) {
            serializedValues.push(new WsvSerializer_1.default().serializeLine(item.getValues()));
        }
        return serializedValues.join("\n");
    }
    parse(content) {
        const lines = new WsvParser_1.default().parseDocument(content);
        for (const line of lines) {
            const newLine = new WsvLine_1.default(...line);
            this.lines.push(newLine);
        }
        return this.getLines();
    }
}
exports.default = WsvDocument;
//# sourceMappingURL=WsvDocument.js.map