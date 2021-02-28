// export { default as ReliableTxtDocument } from "./sml/ReliableTxtDocument";
// export { default as ReliableTxtDocumentServer } from "./sml/ReliableTxtDocumentServer";
// export { default as ReliableTxtEncoding } from "./sml/ReliableTxtEncoding";
// export { default as ReliableTxtFile } from "./sml/ReliableTxtFile";
// export { default as WsvDocument } from "./sml/WsvDocument";
// export { default as WsvDocumentServer } from "./sml/WsvDocumentServer";
// export { default as WsvLine } from "./sml/WsvLine";
// export { default as WsvParser } from "./sml/WsvParser";
// export { default as WsvSerializer } from "./sml/WsvSerializer";

// import WsvParser from "./sml/WsvParser";
import WsvDocument from "./sml/WsvDocument";
import WsvSerializer from "./sml/WsvSerializer";

// console.log(">>> WsvParser");
// console.log(WsvParser.parseLine("a b c"));
// console.log(WsvParser.parseLine("a b c #ein comment"));
// const parsedDocument = WsvParser.parseDocument("a b c #ein comment\n d  e");
// console.log(parsedDocument.getLines());

console.log(">>> WsvSerializer");
console.log(WsvSerializer.containsSpecialChars("abc"));
console.log(WsvSerializer.containsSpecialChars("ab c"));

const documentString = "a b c #ein comment\n d  e";
const document = WsvDocument.parse(documentString);
console.log(document.toString());
console.log((document.toString() === documentString));
