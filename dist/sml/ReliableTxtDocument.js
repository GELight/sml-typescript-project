"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const SmlFile_1 = __importDefault(require("./SmlFile"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
class ReliableTxtDocument {
    constructor(...args) {
        this.lines = [];
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        this.parsedDocument = [];
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
        return new WsvSerializer_1.default().toString(this.getLines(), "\n");
    }
    getParsedDocument() {
        return this.parsedDocument;
    }
    parse(lines) {
        this.parsedDocument = new WsvParser_1.default().parse(lines.join("\n"));
        return this.parsedDocument;
    }
}
exports.default = ReliableTxtDocument;
//# sourceMappingURL=ReliableTxtDocument.js.map