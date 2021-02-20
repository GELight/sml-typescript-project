"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReliableTxtDocument {
    constructor(...args) {
        this.text = "";
        this.text = args.join("\n");
        return this;
    }
    getLines() {
        return this.text.split("\n");
    }
    toString() {
        return this.text;
    }
}
exports.default = ReliableTxtDocument;
//# sourceMappingURL=ReliableTxtDocument.js.map