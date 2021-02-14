"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ReliableTxtEncoding_1 = __importDefault(require("./ReliableTxtEncoding"));
class SmlFile {
    constructor(filePath, encoding) {
        this.encoding = ReliableTxtEncoding_1.default.UTF8;
        try {
            fs_1.writeFileSync(filePath, this.toString(), this.encoding);
        }
        catch (err) {
            console.log(`Error writing '${filePath}'`, err);
        }
        return this;
    }
    save(filePath) {
        try {
            fs_1.writeFileSync(filePath, this.toString(), this.encoding);
        }
        catch (err) {
            console.log(`Error writing '${filePath}'`, err);
        }
        return this;
    }
    load(filePath) {
        try {
            const data = fs_1.readFileSync(filePath, Object.assign({
                encoding: this.encoding,
                flag: "r"
            })).toString().split("\n");
            this.parse(data);
        }
        catch (err) {
            console.log(`Error reading '${filePath}'`, err);
        }
        return this;
    }
}
exports.default = SmlFile;
//# sourceMappingURL=SmlFileWriter.js.map