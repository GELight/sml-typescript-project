"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlAttribute_1 = __importDefault(require("./SmlAttribute"));
const SmlDocument_1 = __importDefault(require("./SmlDocument"));
const SmlElement_1 = __importDefault(require("./SmlElement"));
const SmlParserException_1 = __importDefault(require("./SmlParserException"));
const WsvLineIterator_1 = __importDefault(require("./WsvLineIterator"));
class SmlParser {
    constructor() {
        // ...
    }
    parseDocument(content) {
        const iterator = new WsvLineIterator_1.default(content);
        this.skipEmptyLines(iterator);
        if (!iterator.hasLine()) {
            throw iterator.getException("Root element expected");
        }
        const node = this.readNode(iterator);
        if (!(node instanceof SmlElement_1.default)) {
            throw iterator.getException("Invalid root element start");
        }
        this.skipEmptyLines(iterator);
        if (iterator.hasLine()) {
            throw iterator.getException("Only one root element allowed");
        }
        const document = new SmlDocument_1.default(node);
        document.setEndKeyword(iterator.getEndKeyword());
        return document;
    }
    skipEmptyLines(iterator) {
        while (iterator.isEmptyLine()) {
            iterator.getLine();
        }
    }
    readNode(iterator) {
        const line = iterator.getLine();
        const name = line[0];
        if (this.equalsIgnoreCase(name, iterator.getEndKeyword())) {
            if (line.length > 1) {
                throw iterator.getException("Attribute with end keyword name is not allowed");
            }
            return null;
        }
        if (line.length === 1) {
            const element = new SmlElement_1.default(name);
            this.readElementContent(iterator, element);
            return element;
        }
        else {
            const values = line.slice(1, line.length);
            const attribute = new SmlAttribute_1.default(name, values);
            return attribute;
        }
    }
    equalsIgnoreCase(str1, str2) {
        return str1.toLowerCase() === str2.toLowerCase();
    }
    readElementContent(iterator, element) {
        while (true) {
            if (!iterator.hasLine()) {
                throw new SmlParserException_1.default("Element not closed");
            }
            this.skipEmptyLines(iterator);
            const node = this.readNode(iterator);
            if (node == null) {
                break;
            }
            element.add(node);
        }
    }
}
exports.default = SmlParser;
//# sourceMappingURL=SmlParser.js.map