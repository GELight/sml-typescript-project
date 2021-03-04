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
const ReliableTxtFile_1 = __importDefault(require("./sml/ReliableTxtFile"));
const StringUtil_1 = __importDefault(require("./sml/StringUtil"));
console.log(">>> ReliableTxtFile");
// new ReliableTxtDocumentServer("ab").save("ReliableTxtDocumentServer-TEST.txt");
const file = new ReliableTxtFile_1.default().load("ReliableTxtDocumentServer-TEST.txt");
console.log(StringUtil_1.default.stringToCodePoints(file));
//# sourceMappingURL=index.js.map