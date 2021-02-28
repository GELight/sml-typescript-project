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
// import WsvParserCharIterator from "./sml/WsvParserCharIterator";

// console.log(">>> WsvParserCharIterator");
// console.log(new WsvParserCharIterator("Einfacher Text").getText());
// console.log(new WsvParserCharIterator("Einfacher Text").getLineInfoString());
// console.log(new WsvParserCharIterator("Abc\nMuh").readCommentText());
// console.log(new WsvParserCharIterator("Abc\nMuh").getLineInfo());
// console.log(new WsvParserCharIterator("").readWhitespaceOrNull());
// console.log(new WsvParserCharIterator(" ").readWhitespaceOrNull());
// console.log(new WsvParserCharIterator(" abc").readWhitespaceOrNull());
// console.log(new WsvParserCharIterator(" \n").readWhitespaceOrNull());
// console.log(new WsvParserCharIterator("abc\"").readString());
// console.log(`_${new WsvParserCharIterator("abc\"\"\"").readString()}_`);
// console.log(`_${new WsvParserCharIterator("abc\"/\"\"").readString()}_`);
// console.log(`_${new WsvParserCharIterator("abc ").readValue()}_`);

// console.log(">>> WsvParser");
// console.log(WsvParser.parseLine("a b c"));
// console.log(WsvParser.parseLine("a b c #ein comment"));
