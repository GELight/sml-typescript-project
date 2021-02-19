"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const ReliableTxtFile_1 = __importDefault(require("./ReliableTxtFile"));
class ReliableTxtDocument {
    constructor(...args) {
        this.text = "";
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        this.text = args.join("\n");
        return this;
    }
    setEncoding(encoding) {
        this.encoding = encoding;
        return this;
    }
    getLines() {
        return this.text.split("\n");
    }
    save(filePath) {
        new ReliableTxtFile_1.default(this.encoding).save(filePath, this.text);
        return this;
    }
    load(filePath) {
        this.text = new ReliableTxtFile_1.default(this.encoding).load(filePath);
        return this.text;
    }
    toString() {
        return this.text;
    }
}
exports.default = ReliableTxtDocument;
//# sourceMappingURL=ReliableTxtDocument.js.map