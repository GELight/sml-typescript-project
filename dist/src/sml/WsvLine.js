"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlIllegalArgumentException_1 = __importDefault(require("./SmlIllegalArgumentException"));
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
const WsvSerializer_1 = __importDefault(require("./WsvSerializer"));
class WsvLine {
    constructor(...args) {
        this.values = [];
        this.whitespaces = [];
        this.comment = "";
        for (const arg of args) {
            this.addValue(arg);
        }
        this.whitespaces = [];
        this.comment = "";
        return this;
    }
    addValue(value) {
        this.values.push(value);
    }
    getValues() {
        return this.values;
    }
    setValues(...args) {
        this.values = args;
    }
    hasValues() {
        return this.values.length > 0;
    }
    setWhitespaces(whitespaces) {
        this.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }
    validateWhitespaces(whitespaces) {
        if (whitespaces.length) {
            for (const whitespace of whitespaces) {
                if (whitespace !== null && whitespace !== "" && whitespace !== " ") {
                    throw new SmlIllegalArgumentException_1.default("Whitespace value contains non whitespace character");
                }
            }
        }
    }
    getWhitespaces() {
        return [...this.whitespaces];
    }
    setComment(comment) {
        this.validateComment(comment);
        this.comment = comment;
    }
    validateComment(comment) {
        if ((this.comment.match(/\n/g) || []).length) {
            throw new SmlIllegalArgumentException_1.default("Line break in comment is not allowed");
        }
    }
    getComment() {
        return this.comment;
    }
    set(values, whitespaces, comment) {
        this.values = values;
        this.whitespaces = whitespaces;
        this.comment = comment;
    }
    toString() {
        const sb = new StringBuilder_1.default();
        const serializedLine = new WsvSerializer_1.default().serializeLine(sb, this);
        return sb.toString();
    }
    parse(content) {
        return new WsvParser_1.default().parseLineByString(content);
    }
}
exports.default = WsvLine;
//# sourceMappingURL=WsvLine.js.map