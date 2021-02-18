"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
const WsvParserCharIterator_1 = __importDefault(require("./WsvParserCharIterator"));
class WsvParser {
    constructor() {
        this.result = [];
        // ...
    }
    parse(content) {
        this.lines = content.split("\n");
        this.result = [];
        for (const line of this.lines) {
            const lineIndex = this.lines.indexOf(line);
            this.result.push(this.parseLine(line, lineIndex));
        }
        return this.result;
    }
    parseLine(str, lineIndex) {
        const iterator = new WsvParserCharIterator_1.default(str, lineIndex);
        const values = [];
        const sb = new StringBuilder_1.default();
        while (true) {
            this.skipWhitespace(iterator);
            if (iterator.isEnd()) {
                break;
            }
            if (iterator.is("#")) {
                break;
            }
            let curValue = "";
            if (iterator.is('"')) {
                curValue = this.parseDoubleQuoteValue(iterator, sb);
            }
            else {
                curValue = this.parseValue(iterator);
                if (curValue === "-") {
                    curValue = null;
                }
            }
            values.push(curValue);
        }
        return [...values];
    }
    parseDoubleQuoteValue(iterator, sb) {
        sb.clear();
        while (true) {
            if (!iterator.next()) {
                throw iterator.getException("String not closed");
            }
            if (iterator.is('"')) {
                if (!iterator.next()) {
                    break;
                }
                if (iterator.is('"')) {
                    sb.append('"');
                }
                else if (iterator.is("/")) {
                    if (!(iterator.next() && iterator.is('"'))) {
                        throw iterator.getException("Invalid line break");
                    }
                    sb.append("\n");
                }
                else if (iterator.isWhitespace() || iterator.is("#")) {
                    break;
                }
                else {
                    throw iterator.getException("Invalid character after string");
                }
            }
            else {
                sb.appendCodePoint(iterator.get());
            }
        }
        return sb.toString();
    }
    parseValue(iterator) {
        const startIndex = iterator.getIndex();
        while (true) {
            if (!iterator.next()) {
                break;
            }
            if (iterator.isWhitespace() || iterator.is("#")) {
                break;
            }
            else if (iterator.is('"')) {
                throw new Error("Invalid double quote");
            }
        }
        return iterator.getByIndex(startIndex);
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