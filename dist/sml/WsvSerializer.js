"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvSerializer {
    constructor() {
        return this;
    }
    toString(items, separator) {
        const serializedValues = [];
        for (const item of items) {
            serializedValues.push(this.serialize(item));
        }
        return serializedValues.join(separator);
    }
    serialize(str) {
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