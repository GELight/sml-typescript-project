import ReliableTxtDocument from "./sml/ReliableTxtDocument";
import ReliableTxtEncoding from "./sml/ReliableTxtEncoding";
import ReliableTxtFile from "./sml/ReliableTxtFile";
import WsvDocument from "./sml/WsvDocument";
import WsvLine from "./sml/WsvLine";
import WsvParser from "./sml/WsvParser";
import WsvSerializer from "./sml/WsvSerializer";

export {
    ReliableTxtDocument,
    ReliableTxtEncoding,
    ReliableTxtFile,
    WsvDocument,
    WsvLine,
    WsvParser,
    WsvSerializer
};

// console.log("---- Parser -----------------------------------");
// console.log("");

// const parsedLines = new WsvParser().parse([
//     `"hello ""world""!" "" "-" - "Line1"/"Line2"`,
//     "\"hello\" abc",
//     "#My doc",
//     " #Doc\nR1_1 R1_2",
//     " R2_1 R2_2 ",
//     "R3_1 #",
//     "",
//     "\"hello \"\"world\"\"!\" \"\" \"-\" - \"Line1\"/\"Line2\""
// ].join("\n"));

// console.log(parsedLines);
// console.log("");

// console.log("");
// console.log("---- SAVE WsvDocument -----------------------------------");

// const saveWsvDocument: WsvDocument = new WsvDocument(
//     `"hello ""world""!" "" "-" - "Line1"/"Line2"`,
//     "\"hello\" abc",
//     "#My doc",
//     " #Doc",
//     "R1_1 R1_2",
//     " R2_1 R2_2 ",
//     "R3_1 #",
//     "",
//     "\"hello \"\"world\"\"!\" \"\" \"-\" - \"Line1\"/\"Line2\""
// );
// saveWsvDocument.addLineByValues("Row1_1", "Row1 2", "Row1_3");
// saveWsvDocument.addLine(new WsvLine("Row2_Value1", "Row2_Value2", "Row2 Value3"));
// saveWsvDocument.addLineByValues("Row3_Val1", "Row3_Val2");
// saveWsvDocument.save("Example-WsvDocument.wsv");
// console.log("");
// console.log(saveWsvDocument.getLines());
// console.log("");

// console.log("---- LOAD WsvDocument -----------------------------------");

// const loadWsvDocument: WsvDocument = new WsvDocument();
// const loadWsvDocumentData = loadWsvDocument.load("Example-WsvDocument.wsv");
// console.log(loadWsvDocumentData);
// console.log("");

// console.log("---- PARSE WsvDocument -----------------------------------");

// const parseWsvDocument: WsvDocument = new WsvDocument("Value11 Value12\nValue 13", "Value14 Value15\nValue 16");
// console.log(parseWsvDocument.getLines());

// console.log("---- ReliableTxtFile -----------------------------------");
// new ReliableTxtFile().parse(`Row2_Value1 "Row 2_"/"Va""l""ue""2"""     "Row2 Value3"   Row2_Value4`);

// console.log("---- SERIALIZER -----------------------------------");

// const serializer: WsvSerializer = new WsvSerializer();
// console.log(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`);
// console.log(serializer.serialize(`Irgend ein "kleiner" Text\nmit einem Umbruch und einem # Kommentar`));

// console.log("---- SAVE -----------------------------------");

// const saveDoc: ReliableTxtDocument = new ReliableTxtDocument(
//     "Line 1", "Line 2", "मूर्खहस्ते न मां दद्यादिति वदति पुस्तकम्", "Line 4\nLine 5\nLine 6", "日本の保育園"
// );
// saveDoc.setEncoding(ReliableTxtEncoding.UTF8);
// saveDoc.save("Example-ReliableTxtDocument.txt");

// console.log("---- ReliableTxtDocument - LOAD -----------------------------------");

// const loadDoc: ReliableTxtDocument = new ReliableTxtDocument();
// const loadDocData = loadDoc.load("Example-ReliableTxtDocument.txt");

// console.log("");
// console.log("ReliableTxtDocument > loaded >>>", loadDocData);

// console.log("---- ReliableTxtDocument - PARSE ----------------------------------");
// console.log("");

// const parseData = "\"hello \"\"world\"\"!\" \"\" \"-\" - \"Line1\"/\"Line2\"";
// const reliableTxtDocument: ReliableTxtDocument = new ReliableTxtDocument(parseData);
// console.log(parseData);
// console.log(reliableTxtDocument.getParsedDocument());
// console.log("");

// console.log("");
// console.log("---- WsvLine -----------------------------------");

// const line: WsvLine = new WsvLine(
//     "R1_1",
//     "R1_2",
//     "R3_1 #",
//     ""
// );
// line.addValue("Value 5");

// console.log("");
// console.log(line.getValues());
// console.log(line.toString());
