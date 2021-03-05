# SML
## Simple Markup Language

* Easy and fast to type (touch typing)
* minimal number of special characters
* line-based
* 100% reliable encoding and decoding
* Human-friendly and multi-language support

## Development

### Setup
First install all needed dependencies.
```
npm install
```

### Development
Start the `dev` script. The file watcher will build your project automatically by any changes.
```
npm run dev
```
Alternatively you can build your project without file watcher.
```
npm run build
```

## Rework Status

* [x] ReliableTxtDocument
* [x] ReliableTxtDocumentServer
* [x] ReliableTxtEncoding
* [x] - ReliableTxtFile
* [X] ReliableTxtException
* [ ] ReliableTxtStreamReader
* [ ] ReliableTxtStreamWriter

* [x] SmlAttribute
* [x] SmlDocument
* [x] SmlDocumentServer
* [x] SmlElement
* [x] SmlNamedNode
* [x] SmlNode
* [x] SmlEmptyNode
* [x] - SmlParser
* [ ] SmlParserException (line number not implemented)
* [x] - SmlSerializer

* [x] - StringBuilder
* [x] StringUtil

* [x] WsvChar
* [x] WsvLine
* [X] WsvDocument
* [x] - WsvDocumentLineIterator
* [x] WsvDocumentServer
* [x] - WsvLineIterator
* [x] - WsvParser
* [x] - WsvParserCharIterator
* [x] WsvParserException
* [x] - WsvSerializer
* [ ] WsvStreamReader
* [ ] - WsvStreamLineIterator
* [ ] WsvStreamWriter

## Test
```js
// ------------------
//
// import WsvParser from "./sml/WsvParser";

// console.log(">>> WsvParser");
// console.log(WsvParser.parseLine("a b c"));
// console.log(WsvParser.parseLine("a b c #ein comment"));
// const parsedDocument = WsvParser.parseDocument("a b c #ein comment\n d  e");
// console.log(parsedDocument.getLines());

// ------------------
//
// import WsvDocument from "./sml/WsvDocument";
// import WsvSerializer from "./sml/WsvSerializer";

// console.log(">>> WsvDocument / WsvSerializer");
// console.log(WsvSerializer.containsSpecialChars("abc"));
// console.log(WsvSerializer.containsSpecialChars("ab c"));

// const documentString = "a b c #ein comment\n d  e";
// const document = WsvDocument.parse(documentString);
// console.log(document.toString());
// console.log((document.toString() === documentString));

// ------------------
//
// import SmlDocument from "./sml/SmlDocument";
// import SmlParser from "./sml/SmlParser";

// console.log(">>> SmlParser");
// console.log(SmlParser.parseDocument("The\nEnd"));
// console.log(SmlParser.parseDocument("The\nAttribut 123\nAttribut 456\nAttribut 789\nEnd"));
// const document = SmlDocument.parse("The\nAttribut 123\nAttribut 456\nAttribut 789\nEnd");
// console.log(document.toString());

// // ------------------
// //
// import SmlAttribute from "./sml/SmlAttribute";
// console.log(">>> SmlAttribute");

// console.log(new SmlAttribute("muh", ["test1", "test2"]).getValues());
// console.log(new SmlAttribute("muh", [1, 2, 3, 4, 5]).getValues());
// console.log(new SmlAttribute("muh", [1.23, 2.3, 3.45, 4.6786, 5.6785334]).getValues());
// console.log(new SmlAttribute("muh", [true, false, true, true]).getValues());

// ------------------
//
// import SmlAttribute from "./sml/SmlAttribute";
// import SmlDocument from "./sml/SmlDocument";
// import SmlElement from "./sml/SmlElement";
// console.log(">>> SmlElement");

// const attr = new SmlAttribute("test", ["123", "34432"]);
// const element = new SmlElement("elm-name");
// element.add(attr);
// console.log(element);
// const doc = SmlDocument.parse(`
// LinearLayout
//   LayoutWidth MatchParent
//   LayoutHeight MatchParent
//   Orientation               Vertical
//   Children
//     TextView
//       ID @+id/text
//       Text "Hello World"
//     End
//     Button
//       ... ...
//     End
//   End
// End
// `);
// const values = doc.getRoot().getAttribute("Orientation");
// console.log(values);

// ------------------
//
// console.log(">>> ReliableTxtFile");
// import ReliableTxtDocumentServer from "./sml/ReliableTxtDocumentServer";

// new ReliableTxtDocumentServer("ab").save("ReliableTxtDocumentServer-TEST.txt");
// const doc = ReliableTxtDocumentServer.load("ReliableTxtDocumentServer-TEST.txt");
// console.log(doc);

// ------------------
//
// console.log(">>> WsvDocumentServer");
// import WsvDocumentServer from "./sml/WsvDocumentServer";

// // (WsvDocumentServer.parse("a b\nc d") as WsvDocumentServer).save("WsvDocumentServer-TEST.wsv");
// const doc = WsvDocumentServer.load("WsvDocumentServer-TEST.wsv");
// console.log(doc);

// ------------------
//
// console.log(">>> SmlDocumentServer");
// import SmlDocumentServer from "./sml/SmlDocumentServer";

// // (SmlDocumentServer.parse("Hallo\nAttribut 1 2 3\nEnd") as SmlDocumentServer).save("SmlDocumentServer-TEST.sml");
// const doc = SmlDocumentServer.load("SmlDocumentServer-TEST.sml");
// console.log(doc.toString());
```