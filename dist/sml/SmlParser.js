"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlDocument_1 = __importDefault(require("./SmlDocument"));
const SmlElement_1 = __importDefault(require("./SmlElement"));
const SmlEmptyNode_1 = __importDefault(require("./SmlEmptyNode"));
const SmlParserException_1 = __importDefault(require("./SmlParserException"));
const StringUtil_1 = __importDefault(require("./StringUtil"));
const WsvDocument_1 = __importDefault(require("./WsvDocument"));
const WsvDocumentLineIterator_1 = __importDefault(require("./WsvDocumentLineIterator"));
class SmlParser {
    static parseDocument(content) {
        const wsvDocument = WsvDocument_1.default.parse(content);
        const endKeyword = SmlParser.getEndKeyword(wsvDocument);
        const iterator = new WsvDocumentLineIterator_1.default(wsvDocument, endKeyword);
        const document = new SmlDocument_1.default();
        document.setEndKeyword(endKeyword);
        const rootElement = SmlParser.readRootElement(iterator, document.emptyNodesBefore);
        document.setRoot(rootElement);
        SmlParser.readElementContent(iterator, rootElement);
        // readEmptyNodes(document.EmptyNodesAfter, iterator);
        // return document;
        return null;
    }
    static readRootElement(iterator, emptyNodesBefore) {
        SmlParser.readEmptyNodes(emptyNodesBefore, iterator);
        if (!iterator.hasLine()) {
            throw new SmlParserException_1.default("Root element expected");
        }
        const rootStartLine = iterator.getLine();
        if (!rootStartLine.hasValues() || rootStartLine.getValues().length !== 1 ||
            StringUtil_1.default.equalsIgnoreCase(rootStartLine.getValues()[0], iterator.getEndKeyword())) {
            throw new SmlParserException_1.default("Invalid root element start");
        }
        const rootElementName = rootStartLine.getValues()[0];
        const rootElement = new SmlElement_1.default(rootElementName);
        rootElement.setWhitespacesAndComment(rootStartLine.getWhitespaces(), rootStartLine.getComment());
        return rootElement;
    }
    static readElementContent(iterator, element) {
        while (true) {
            if (!iterator.hasLine()) {
                throw new SmlParserException_1.default("Element not closed");
            }
            const node = SmlParser.readNode(iterator, element);
            if (node == null) {
                break;
            }
            element.add(node);
        }
    }
    static readEmptyNodes(nodes, iterator) {
        while (iterator.isEmptyLine()) {
            const emptyNode = SmlParser.readEmptyNode(iterator);
            nodes.push(emptyNode);
        }
    }
    static readEmptyNode(iterator) {
        const line = iterator.getLine();
        const emptyNode = new SmlEmptyNode_1.default();
        emptyNode.setWhitespacesAndComment(line.getWhitespaces(), line.getComment());
        return emptyNode;
    }
    static getEndKeyword(wsvDocument) {
        for (let i = wsvDocument.getLines().length - 1; i >= 0; i--) {
            const values = wsvDocument.getLine(i).getValues();
            if (values !== null) {
                if (values.length === 1) {
                    return values[0];
                }
                else if (values.length > 1) {
                    break;
                }
            }
        }
        throw new SmlParserException_1.default("End keyword could not be detected");
    }
}
exports.default = SmlParser;
//# sourceMappingURL=SmlParser.js.map