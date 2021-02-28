"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmlDocument {
    constructor(rootElement) {
        this.emptyNodesBefore = [];
        this.emptyNodesAfter = [];
        this.endKeyword = "End";
        // ...
    }
    setEndKeyword(endKeyword) {
        this.endKeyword = endKeyword;
    }
    getEndKeyword() {
        return this.endKeyword;
    }
    getDefaultIndentation() {
        return "";
    }
    getRoot() {
        return this.root;
    }
    setRoot(root) {
        this.root = root;
    }
}
exports.default = SmlDocument;
//# sourceMappingURL=SmlDocument.js.map