"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
class ReliableTxtFile {
    constructor(encoding) {
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        this.setEncoding(encoding);
        return this;
    }
    save(filePath, content, encoding) {
        this.setEncoding(encoding);
        try {
            fs_1.writeFileSync(filePath, content, this.encoding);
        }
        catch (e) {
            console.error(e);
        }
        return this;
    }
    load(filePath, encoding) {
        this.setEncoding(encoding);
        try {
            return fs_1.readFileSync(filePath, Object.assign({ encoding: this.encoding, flag: "r" })).toString();
        }
        catch (e) {
            console.error(e);
            return "";
        }
    }
    setEncoding(encoding) {
        if (encoding) {
            this.encoding = encoding;
        }
        return this;
    }
}
exports.default = ReliableTxtFile;
//# sourceMappingURL=ReliableTxtFile.js.map