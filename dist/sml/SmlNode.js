"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvLine_1 = __importDefault(require("./WsvLine"));
class SmlNode {
    constructor() {
        this.whitespaces = null;
        this.comment = null;
        // ...
    }
    setWhitespaces(...whitespaces) {
        WsvLine_1.default.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }
    getWhitespaces() {
        return [...this.whitespaces];
    }
    setComment(comment) {
        WsvLine_1.default.validateComment(comment);
        this.comment = comment;
    }
    getComment() {
        return this.comment;
    }
    setWhitespacesAndComment(whitespaces, comment) {
        this.whitespaces = whitespaces;
        this.comment = comment;
    }
    toWsvLines(document, level, defaultIndentation, endKeyword) {
        /**
         * TODO Argument of type 'this' is not assignable to parameter of type 'SmlElement'.
         * Type 'SmlNode' is missing the following properties from type 'SmlElement':
         * nodes, endWhitespaces, endComment, setEndWhitespaces, and 18 more.
         */
        // SmlSerializer.serializeElementInternal(this, document, level, defaultIndentation, endKeyword);
    }
}
exports.default = SmlNode;
//# sourceMappingURL=SmlNode.js.map