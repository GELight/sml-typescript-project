"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const ReliableTxtFile_1 = __importDefault(require("./ReliableTxtFile"));
const SmlDocument_1 = __importDefault(require("./SmlDocument"));
class SmlDocumentServer extends SmlDocument_1.default {
    constructor(rootElement) {
        super(rootElement);
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        return this;
    }
    setEncoding(encoding) {
        this.encoding = encoding;
        return this;
    }
    getEncoding() {
        return this.encoding;
    }
    load(filePath) {
        const content = new ReliableTxtFile_1.default(this.encoding).load(filePath);
        return SmlDocumentServer.parse(content);
    }
    save(filePath) {
        new ReliableTxtFile_1.default(this.encoding).save(filePath, this.toString());
        return this;
    }
}
exports.default = SmlDocumentServer;
//# sourceMappingURL=SmlDocumentServer.js.map