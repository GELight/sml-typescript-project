"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
class SmlFile {
    constructor(encoding) {
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        this.setEncoding(encoding);
        return this;
    }
    save(filePath, content, encoding) {
        this.setEncoding(encoding);
        try {
            if (fs_1.existsSync(filePath)) {
                fs_1.writeFileSync(filePath, content, this.encoding);
            }
            else {
                console.log(`File '${filePath}' could not be written!`);
            }
        }
        catch (e) {
            console.error(e);
        }
        return this;
    }
    load(filePath, encoding) {
        this.setEncoding(encoding);
        try {
            if (fs_1.existsSync(filePath)) {
                return fs_1.readFileSync(filePath, Object.assign({ encoding: this.encoding, flag: "r" })).toString().split("\n");
            }
            else {
                console.log(`File '${filePath}' not found!`);
            }
            return Array();
        }
        catch (e) {
            console.error(e);
            return Array();
        }
    }
    setEncoding(encoding) {
        if (encoding) {
            this.encoding = encoding;
        }
        return this;
    }
}
exports.default = SmlFile;
//# sourceMappingURL=SmlFile.js.map