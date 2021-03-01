"use strict";
// export { default as ReliableTxtDocument } from "./sml/ReliableTxtDocument";
// export { default as ReliableTxtDocumentServer } from "./sml/ReliableTxtDocumentServer";
// export { default as ReliableTxtEncoding } from "./sml/ReliableTxtEncoding";
// export { default as ReliableTxtFile } from "./sml/ReliableTxtFile";
// export { default as WsvDocument } from "./sml/WsvDocument";
// export { default as WsvDocumentServer } from "./sml/WsvDocumentServer";
// export { default as WsvLine } from "./sml/WsvLine";
// export { default as WsvParser } from "./sml/WsvParser";
// export { default as WsvSerializer } from "./sml/WsvSerializer";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import WsvParser from "./sml/WsvParser";
// import WsvDocument from "./sml/WsvDocument";
// import WsvSerializer from "./sml/WsvSerializer";
const SmlDocument_1 = __importDefault(require("./sml/SmlDocument"));
const SmlParser_1 = __importDefault(require("./sml/SmlParser"));
// console.log(">>> WsvParser");
// console.log(WsvParser.parseLine("a b c"));
// console.log(WsvParser.parseLine("a b c #ein comment"));
// const parsedDocument = WsvParser.parseDocument("a b c #ein comment\n d  e");
// console.log(parsedDocument.getLines());
// console.log(">>> WsvDocument / WsvSerializer");
// console.log(WsvSerializer.containsSpecialChars("abc"));
// console.log(WsvSerializer.containsSpecialChars("ab c"));
// const documentString = "a b c #ein comment\n d  e";
// const document = WsvDocument.parse(documentString);
// console.log(document.toString());
// console.log((document.toString() === documentString));
console.log(">>> SmlParser");
console.log(SmlParser_1.default.parseDocument("The\nEnd"));
console.log(SmlParser_1.default.parseDocument("The\nAttribut 123\nAttribut 456\nAttribut 789\nEnd"));
const document = SmlDocument_1.default.parse("The\nAttribut 123\nAttribut 456\nAttribut 789\nEnd");
console.log(document.toString());
//# sourceMappingURL=index.js.map