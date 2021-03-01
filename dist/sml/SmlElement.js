"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlNamedNode_1 = __importDefault(require("./SmlNamedNode"));
const SmlSerializer_1 = __importDefault(require("./SmlSerializer"));
const WsvLine_1 = __importDefault(require("./WsvLine"));
class SmlElement extends SmlNamedNode_1.default {
    constructor(name) {
        super(name);
        this.nodes = [];
    }
    setEndWhitespaces(...whitespaces) {
        WsvLine_1.default.validateWhitespaces(whitespaces);
        this.endWhitespaces = whitespaces;
    }
    getEndWhitespaces() {
        return [...this.endWhitespaces];
    }
    setEndComment(comment) {
        WsvLine_1.default.validateComment(comment);
        this.endComment = comment;
    }
    getEndComment() {
        return this.endComment;
    }
    setEndWhitespacesAndComment(whitespaces, comment) {
        this.endWhitespaces = whitespaces;
        this.endComment = comment;
    }
    add(node) {
        this.nodes.push(node);
        return node;
    }
    toString() {
        return SmlSerializer_1.default.serializeElement(this);
    }
    toWsvLines(document, level, defaultIndentation, endKeyword) {
        SmlSerializer_1.default.serializeElementInternal(this, document, level, defaultIndentation, endKeyword);
    }
}
exports.default = SmlElement;
//# sourceMappingURL=SmlElement.js.map