"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
// import path from "path";
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
class ReliableTxtDocument {
    constructor(...args) {
        this.lines = [];
        for (const arg of args) {
            let argumentParts;
            argumentParts = [...arg.split("\n")];
            this.lines = [...this.lines, ...argumentParts];
        }
    }
    setEncoding(encoding = ReliableTxtEncoding_1.default.UTF8) {
        this.encoding = encoding;
    }
    getLines() {
        return this.lines;
    }
    save(filePath) {
        try {
            fs_1.writeFileSync(filePath, this.toString(), this.encoding);
            // writeFileSync(path.join(__dirname, filePath), this.toString(), this.encoding);
        }
        catch (err) {
            console.log(`Error writing '${filePath}'`, err);
        }
    }
    toString() {
        return this.lines.join("\n");
    }
}
exports.default = ReliableTxtDocument;
//# sourceMappingURL=ReliableTxtDocument.js.map