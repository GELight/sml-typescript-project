import ReliableTxtDocument from "./sml/ReliableTxtDocument";
import ReliableTxtEncoding from "./sml/ReliableTxtEncoding";
import WsvDocument from "./sml/WsvDocument";
import WsvLine from "./sml/WsvLine";

console.log("---- SAVE -----------------------------------");

const saveDoc: ReliableTxtDocument = new ReliableTxtDocument(
    "Line 1", "Line 2", "मूर्खहस्ते न मां दद्यादिति वदति पुस्तकम्", "Line 4\nLine 5\nLine 6", "日本の保育園"
);
saveDoc.setEncoding(ReliableTxtEncoding.UTF8);
saveDoc.save("Example-ReliableTxtDocument.txt");

console.log("---- LOAD -----------------------------------");

const loadDoc: ReliableTxtDocument = new ReliableTxtDocument();
const data = loadDoc.load("Example-ReliableTxtDocument.txt");

console.log("");
console.log("ReliableTxtDocument > loaded >>>", data);

// console.log("");
// console.log("---- WsvLine -----------------------------------");

// const line: WsvLine = new WsvLine("Value 1", "Value2", "Value 3");
// line.addValue("Value 4");

// console.log("");
// console.log("line >>>", line.toString());

// console.log("");
// console.log("---- WsvDocument -----------------------------------");

// const wsvDocument: WsvDocument = new WsvDocument();
// wsvDocument.addLine("Row1_Value1", "Row1 Value2", "Row1_Value3");
// wsvDocument.addLine("Row2 Value1", "Row2_Value2");

// console.log("");
// console.log("wsvDocument >>>", wsvDocument.toString());
