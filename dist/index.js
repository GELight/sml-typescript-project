"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvDocument_1 = __importDefault(require("./sml/WsvDocument"));
const WsvLine_1 = __importDefault(require("./sml/WsvLine"));
// console.log("---- SERIALIZER -----------------------------------");
// const serializer = new WsvSerializer();
// console.log(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`);
// console.log(Serializer.serialize(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`));
// console.log("---- SAVE -----------------------------------");
// const saveDoc: ReliableTxtDocument = new ReliableTxtDocument(
//     "Line 1", "Line 2", "मूर्खहस्ते न मां दद्यादिति वदति पुस्तकम्", "Line 4\nLine 5\nLine 6", "日本の保育園"
// );
// saveDoc.setEncoding(ReliableTxtEncoding.UTF8);
// saveDoc.save("Example-ReliableTxtDocument.txt");
// console.log("---- LOAD -----------------------------------");
// const loadDoc: ReliableTxtDocument = new ReliableTxtDocument();
// const loadDocData = loadDoc.load("Example-ReliableTxtDocument.txt");
// console.log("");
// console.log("ReliableTxtDocument > loaded >>>", loadDocData);
// console.log("");
// console.log("---- WsvLine -----------------------------------");
// const line: WsvLine = new WsvLine("Value 1", "Value2", "Value 3 ABC Muh");
// line.addValue("Value 4");
// console.log("");
// console.log("Value 1", "Value2", "Value 3 ABC Muh");
// console.log("line values >>>", line.getValues());
// console.log("line >>>", line.toString());
console.log("");
console.log("---- SAVE WsvDocument -----------------------------------");
const saveWsvDocument = new WsvDocument_1.default();
saveWsvDocument.addLineByValues("Row1_1", "Row1_2", "Row1_3");
saveWsvDocument.addLine(new WsvLine_1.default("Row2_Value1", "Row2_\nValue2", "Row2 Value3", "Row2_Value4"));
saveWsvDocument.addLineByValues("Row3_Val1", "Row3_Val2");
saveWsvDocument.save("Example-WsvDocument.wsv");
console.log("");
console.log("saveWsvDocument >>>", saveWsvDocument.getLines());
// console.log("");
// console.log("---- LOAD WsvDocument -----------------------------------");
// const loadWsvDocument: WsvDocument = new WsvDocument();
// const loadWsvDocumentData = loadWsvDocument.load("Example-WsvDocument.wsv");
// console.log(loadWsvDocumentData);
// console.log("");
// console.log("---- PARSE WsvDocument -----------------------------------");
// const parseWsvDocument: WsvDocument = new WsvDocument("Value11 Value12\nValue 13", "Value14 Value15\nValue 16");
// console.log(parseWsvDocument.getLines());
//# sourceMappingURL=index.js.map