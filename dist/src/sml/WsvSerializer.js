"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
class WsvSerializer {
    constructor() {
        // ...
    }
    serializeLine(sb, line) {
        if (line.getWhitespaces().length > 0) {
            serializeValuesWithWhitespace(sb, line);
        }
        else {
            serializeValuesWithoutWhitespace(sb, line);
        }
        if (line.getComment() !== "") {
            sb.append("#");
            sb.append(line.getComment());
        }
    }
    serializeValue(str) {
        if (str === null) {
            return "-";
        }
        else if (str === "") {
            return '""';
        }
        else if (str === "-") {
            return '"-"';
        }
        else if (!this.containsSpecialChars(str)) {
            return str;
        }
        let result = "";
        for (const c of str) {
            switch (c) {
                case "\n":
                    result += '"/"';
                    break;
                case '"':
                    result += '""';
                    break;
                default:
                    result += c;
            }
        }
        return `"${result}"`;
    }
    containsSpecialChars(str) {
        const lineBreaksInString = (str.match(/\n/g) || []).length;
        const doubleQuoteInString = str.includes('"');
        const spaceInString = /\s/.test(str);
        const commentInString = str.includes("#");
        if (lineBreaksInString || doubleQuoteInString || spaceInString || commentInString) {
            return true;
        }
        return false;
    }
    serializeDocument(document) {
        const sb = new StringBuilder_1.default();
        let isFirstLine = true;
        for (const line of document.getLines()) {
            if (!isFirstLine) {
                sb.append("\n");
            }
            else {
                isFirstLine = false;
            }
            this.serializeLine(sb, line);
        }
        return sb.toString();
    }
    serializeWhitespace(sb, whitespace, isRequired) {
        if (whitespace != null && whitespace.length > 0) {
            sb.append(whitespace);
        }
        else if (isRequired) {
            sb.append(" ");
        }
    }
}
exports.default = WsvSerializer;
//# sourceMappingURL=WsvSerializer.js.map