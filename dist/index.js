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
// import ReliableTxtDocument from "./sml/ReliableTxtDocument";
const ReliableTxtDocumentServer_1 = __importDefault(require("./sml/ReliableTxtDocumentServer"));
const ReliableTxtEncoding_1 = __importDefault(require("./sml/ReliableTxtEncoding"));
// import WsvDocument from "./sml/WsvDocument";
const WsvDocumentServer_1 = __importDefault(require("./sml/WsvDocumentServer"));
const WsvLine_1 = __importDefault(require("./sml/WsvLine"));
const WsvParser_1 = __importDefault(require("./sml/WsvParser"));
const WsvSerializer_1 = __importDefault(require("./sml/WsvSerializer"));
console.log("---- Parser -----------------------------------");
console.log("");
const parsedLines = new WsvParser_1.default().parseDocument([
    `"hello ""world""!" "" "-" - "Line1"/"Line2"`,
    "\"hello\" abc",
    "#My doc",
    " #Doc\nR1_1 R1_2",
    " R2_1 R2_2 ",
    "R3_1 #",
    "",
    "\"hello \"\"world\"\"!\" \"\" \"-\" - \"Line1\"/\"Line2\""
].join("\n"));
console.log(parsedLines);
console.log("");
console.log("");
console.log("---- SAVE WsvDocument -----------------------------------");
const saveWsvDocument = new WsvDocumentServer_1.default(`"hello ""world""!" "" "-" - "Line1"/"Line2"`, "\"hello\" abc", "#My doc", " #Doc", "R1_1 R1_2", " R2_1 R2_2 ", "R3_1 #", "", "\"hello \"\"world\"\"!\" \"\" \"-\" - \"Line1\"/\"Line2\"");
saveWsvDocument.addLineByValues("Row1_1", "Row1 2", "Row1_3");
saveWsvDocument.addLine(new WsvLine_1.default("Row2_Value1", "Row2_Value2", "Row2 Value3"));
saveWsvDocument.addLineByValues("Row3_Val1", "Row3_Val2");
saveWsvDocument.save("Example-WsvDocument.wsv");
console.log("");
console.log(saveWsvDocument.getLines());
console.log("");
console.log("---- LOAD WsvDocument -----------------------------------");
const loadWsvDocument = new WsvDocumentServer_1.default();
const loadWsvDocumentData = loadWsvDocument.load("Example-WsvDocument.wsv");
console.log(loadWsvDocumentData);
console.log("");
console.log("---- PARSE WsvDocument -----------------------------------");
const parseWsvDocument = new WsvDocumentServer_1.default("Value11 Value12\nValue 13", "Value14 Value15\nValue 16");
console.log(parseWsvDocument.getLines());
console.log("---- SERIALIZER -----------------------------------");
const serializer = new WsvSerializer_1.default();
console.log(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`);
console.log(serializer.serializeValue(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`));
console.log("---- SAVE -----------------------------------");
const saveDoc = new ReliableTxtDocumentServer_1.default("Line 1", "Line 2", "मूर्खहस्ते न मां दद्यादिति वदति पुस्तकम्", "Line 4\nLine 5\nLine 6", "日本の保育園");
saveDoc.setEncoding(ReliableTxtEncoding_1.default.UTF8);
saveDoc.save("Example-ReliableTxtDocument.txt");
console.log("---- ReliableTxtDocument - LOAD -----------------------------------");
const loadDoc = new ReliableTxtDocumentServer_1.default();
const loadDocData = loadDoc.load("Example-ReliableTxtDocument.txt");
console.log("");
console.log("ReliableTxtDocument > loaded >>>", loadDocData);
console.log("---- ReliableTxtDocument - PARSE ----------------------------------");
console.log("");
const parseData = "\"hello \"\"world\"\"!\" \"\" \"-\" - \"Line1\"/\"Line2\"";
const reliableTxtDocument = new ReliableTxtDocumentServer_1.default(parseData);
console.log(reliableTxtDocument);
console.log("");
console.log("");
console.log("---- WsvLine -----------------------------------");
const line = new WsvLine_1.default("R1_1", "R1_2", "R3_1 #", "");
line.addValue("Value 5");
console.log("");
console.log(line.getValues());
console.log(line.toString());
//# sourceMappingURL=index.js.map