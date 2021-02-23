"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlElement_1 = __importDefault(require("./SmlElement"));
class SmlDocument {
    constructor(node) {
        // ...
    }
    setEndKeyword(iterator) {
        // ...
    }
    getEndKeyword() {
        return "";
    }
    getDefaultIndentation() {
        return "";
    }
    getRoot() {
        return new SmlElement_1.default("muh");
    }
}
exports.default = SmlDocument;
//# sourceMappingURL=SmlDocument.js.map