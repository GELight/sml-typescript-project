"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const SmlFile_1 = __importDefault(require("./SmlFile"));
const WsvLine_1 = __importDefault(require("./WsvLine"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
class WsvDocument {
    constructor(...args) {
        this.lines = [];
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        this.parse(args);
        return this;
    }
    setEncoding(encoding) {
        this.encoding = encoding;
        return this;
    }
    addLine(...args) {
        for (const arg of args) {
            this.lines.push(arg);
        }
        return this.getLines();
    }
    addLineByValues(...args) {
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
            serializedValues.push(new WsvSerializer_1.default().toString(item.getValues(), " "));
        }
        return serializedValues.join("\n");
    }
    save(filePath) {
        new SmlFile_1.default(this.encoding).save(filePath, this.toString());
        return this;
    }
    load(filePath) {
        const lines = new SmlFile_1.default(this.encoding).load(filePath);
        for (const l of lines) {
            const newLine = new WsvLine_1.default();
            const lineValues = l.split(" ");
            for (const value of lineValues) {
                newLine.addValue(value);
            }
            this.lines.push(newLine);
        }
        return this.getLines();
    }
    parse(args) {
        for (const arg of args) {
            let argumentParts;
            argumentParts = [...arg.split("\n")];
            const line = new WsvLine_1.default();
            for (const argument of argumentParts) {
                line.addValue(argument);
            }
            this.lines.push(line);
        }
        return this.getLines();
    }
}
exports.default = WsvDocument;
//# sourceMappingURL=WsvDocument.js.map