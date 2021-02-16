"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvParser {
    constructor(content) {
        if (content) {
            this.parse(content);
        }
    }
    parse(content) {
        const result = [];
        const lines = content.split("\n");
        for (const line of lines) {
            this.parseLine(line);
        }
        return result;
    }
    parseLine(line) {
        console.log(line);
        const chars = [...line];
        const values = [];
        console.log(chars);
        return [];
    }
}
exports.default = WsvParser;
//# sourceMappingURL=WsvParser.js.map