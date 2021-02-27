"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvParserCharIterator_1 = __importDefault(require("./WsvParserCharIterator"));
const WsvDocument_1 = __importDefault(require("./WsvDocument"));
const WsvLine_1 = __importDefault(require("./WsvLine"));
const WsvParserException_1 = __importDefault(require("./WsvParserException"));
class WsvParser {
    constructor() {
        // ...
    }
    parseLineByString(content) {
        const iterator = new WsvParserCharIterator_1.default(content);
        const values = [];
        const whitespaces = [];
        const lineBreak = "\n".codePointAt(0);
        const newLine = this.parseLine(iterator, values, whitespaces);
        if (iterator.tryReadChar(lineBreak)) {
            throw new WsvParserException_1.default("Multiple WSV lines not allowed");
        }
        else if (!iterator.isEndOfText()) {
            throw new WsvParserException_1.default("WSV line not parsed completely");
        }
        return newLine;
    }
    parseDocument(content) {
        const document = new WsvDocument_1.default();
        const iterator = new WsvParserCharIterator_1.default(content);
        const values = [];
        const whitespaces = [];
        const lineBreak = "\n".codePointAt(0);
        while (true) {
            const newLine = this.parseLine(iterator, values, whitespaces);
            document.addWsvLine(newLine);
            if (iterator.isEndOfText()) {
                break;
            }
            else if (!iterator.tryReadChar(lineBreak)) {
                throw new WsvParserException_1.default("Invalid WSV document");
            }
        }
        if (!iterator.isEndOfText()) {
            throw new WsvParserException_1.default("WSV document not parsed completely");
        }
        return document;
    }
    parseLine(iterator, values, whitespaces) {
        const doubleQuote = '"'.codePointAt(0);
        const lineBreak = "\n".codePointAt(0);
        const slash = "/".codePointAt(0);
        const rhombus = "#".codePointAt(0);
        const minus = "-".codePointAt(0);
        values = [];
        whitespaces = [];
        let whitespace = iterator.readWhitespaceOrNull();
        whitespaces.push(whitespace);
        while (!iterator.isChar(lineBreak) && !iterator.isEndOfText()) {
            let value = "";
            if (iterator.isChar(rhombus)) {
                break;
            }
            else if (iterator.tryReadChar(doubleQuote)) {
                value = iterator.readString();
            }
            else {
                value = iterator.readValue();
                if (value === "-") {
                    value = null;
                }
            }
            values.push(value);
            whitespace = iterator.readWhitespaceOrNull();
            if (whitespace == null) {
                break;
            }
            whitespaces.push(whitespace);
        }
        let comment = "";
        if (iterator.tryReadChar(rhombus)) {
            comment = iterator.readCommentText();
            if (whitespace == null) {
                whitespaces.push(null);
            }
        }
        let valueArray = [`${values.length}`];
        let whitespaceArray = [`${whitespaces.length}`];
        valueArray = [...valueArray, ...values];
        whitespaceArray = [...whitespaceArray, ...whitespaces];
        const newLine = new WsvLine_1.default();
        newLine.set(valueArray, whitespaceArray, comment);
        return newLine;
    }
    skipWhitespace(iterator) {
        if (iterator.isEnd()) {
            return;
        }
        do {
            if (!iterator.isWhitespace()) {
                break;
            }
        } while (iterator.next());
    }
}
exports.default = WsvParser;
//# sourceMappingURL=WsvParser.js.map