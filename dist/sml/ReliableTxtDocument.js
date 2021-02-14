"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const SmlFile_1 = __importDefault(require("./SmlFile"));
class ReliableTxtDocument {
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
    getLines() {
        return this.lines;
    }
    save(filePath) {
        new SmlFile_1.default(this.encoding).save(filePath, this.toString());
        return this;
    }
    load(filePath) {
        const data = new SmlFile_1.default(this.encoding).load(filePath);
        return this.parse(data);
    }
    toString() {
        return this.lines.join("\n");
    }
    parse(args) {
        for (const arg of args) {
            let argumentParts;
            argumentParts = [...arg.split("\n")];
            this.lines = [...this.lines, ...argumentParts];
        }
        return this.getLines();
    }
}
exports.default = ReliableTxtDocument;
//# sourceMappingURL=ReliableTxtDocument.js.map