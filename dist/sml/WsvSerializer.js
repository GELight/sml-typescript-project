"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvSerializer {
    constructor() {
        console.log(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`);
        console.log(this.serializeValue(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`));
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