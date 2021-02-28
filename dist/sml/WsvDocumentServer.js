"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
const ReliableTxtFile_1 = __importDefault(require("./ReliableTxtFile"));
const WsvDocument_1 = __importDefault(require("./WsvDocument"));
class WsvDocumentServer extends WsvDocument_1.default {
    constructor() {
        super();
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
    save(filePath) {
        new ReliableTxtFile_1.default(this.encoding).save(filePath, this.toString());
        return this;
    }
    load(filePath) {
        const content = new ReliableTxtFile_1.default(this.encoding).load(filePath);
        return WsvDocument_1.default.parse(content);
    }
}
exports.default = WsvDocumentServer;
//# sourceMappingURL=WsvDocumentServer.js.map