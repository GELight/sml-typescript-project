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
    parseDocument(content) {
        this.lines = content.split("\n");
        for (const line of this.lines) {
            this.result.push(this.parseLine(line));
        }
        return this.result;
    }
    parseLine(str) {
        const iterator = new WsvParserCharIterator_1.default(str);
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
            sb.clear();
            let curValue = "";
            if (iterator.is('"')) {
                this.parseDoubleQuoteValue(iterator, sb);
                curValue = sb.toString();
            }
            else {
                this.parseValue(iterator, sb);
                curValue = sb.toString();
                if (curValue === "-") {
                    curValue = null;
                }
            }
            values.push(curValue);
        }
        return [...values];
    }
    parseDoubleQuoteValue(iterator, sb) {
        while (true) {
            if (!iterator.next()) {
                throw new Error("String not closed");
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
                        throw new Error("Invalid line break");
                    }
                    sb.append("\n");
                }
                else if (iterator.isWhitespace() || iterator.is("#")) {
                    break;
                }
                else {
                    throw new Error("Invalid character after string");
                }
            }
            else {
                sb.appendCodePoint(iterator.get());
            }
        }
    }
    parseValue(iterator, sb) {
        while (true) {
            sb.appendCodePoint(iterator.get());
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