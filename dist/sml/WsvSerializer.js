"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvSerializer {
    constructor() {
        // ...
    }
    serializeLine(items) {
        const serializedValues = [];
        for (const item of items) {
            serializedValues.push(this.serializeValue(item));
        }
        return serializedValues.join(" ");
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
}
exports.default = WsvSerializer;
//# sourceMappingURL=WsvSerializer.js.map