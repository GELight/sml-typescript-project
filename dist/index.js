"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReliableTxtDocument_1 = __importDefault(require("./sml/ReliableTxtDocument"));
// const doc: ReliableTxtDocument = new ReliableTxtDocument("Line 1", "Line 2", "मूर्खहस्ते न मां दद्यादिति वदति पुस्तकम्", "Line 4\nLine 5\nLine 6", "日本の保育園");
// doc.setEncoding(ReliableTxtEncoding.UTF8);
// console.log(doc);
// doc.save("Example-ReliableTxtDocument.txt");
console.log("---- LOAD -----------------------------------");
const doc = new ReliableTxtDocument_1.default();
const data = doc.load("Example-ReliableTxtDocument.txt");
console.log("");
console.log("loaded >>>", data);
//# sourceMappingURL=index.js.map