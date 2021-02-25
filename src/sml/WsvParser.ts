import StringBuilder from "./StringBuilder";
import WsvCharIterator from "./WsvCharIterator";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";
import WsvParserCharIterator from "./WsvParserCharIterator";
import WsvParserException from "./WsvParserException";

export default class WsvParser {

    private lines: string[];
    private result: string[][] = [];

    constructor() {
        // ...
    }

    // public parseLineByString(content: string): WsvLine {
    //     const iterator: WsvCharIterator = new WsvCharIterator(content);
    //     const values: string[] = [];
    //     const whitespaces: string[] = [];

    //     const newLine: WsvLine = this.parseLine(iterator, values, whitespaces);
    //     if (iterator.tryReadChar('\n')) {
    //         throw new WsvParserException(iterator, "Multiple WSV lines not allowed");
    //     } else if (!iterator.isEndOfText()) {
    //         throw new WsvParserException(iterator, "WSV line not parsed completely");
    //     }

    //     return newLine;
    // }

    public parseDocument(content: string): WsvDocument {
        const document: WsvDocument = new WsvDocument();

        const iterator: WsvCharIterator = new WsvCharIterator(content);
        const values: string[] = [];
        const whitespaces: string[] = [];
        const lineBreak = "\n".codePointAt(0);

        while (true) {
            const newLine: WsvLine = this.parseLine(iterator, values, whitespaces);
            document.addWsvLine(newLine);

            if (iterator.isEndOfText()) {
                break;
            } else if (!iterator.tryReadChar(lineBreak)) {
                throw new WsvParserException("Invalid WSV document");
            }
        }

        if (!iterator.isEndOfText()) {
            throw new WsvParserException("WSV document not parsed completely");
        }

        return document;
    }

    private parseLine(iterator: WsvCharIterator, values: string[], whitespaces: string[]): WsvLine {

        const doubleQuote = '"'.codePointAt(0);
        const lineBreak = "\n".codePointAt(0);
        const slash = "/".codePointAt(0);
        const rhombus = "#".codePointAt(0);
        const minus = "-".codePointAt(0);

        values = [];
        whitespaces = [];

        let whitespace: string = iterator.readWhitespaceOrNull();
        whitespaces.push(whitespace);

        while (!iterator.isChar(lineBreak) && !iterator.isEndOfText()) {
            let value: string = "";
            if (iterator.isChar(rhombus)) {
                break;
            } else if (iterator.tryReadChar(doubleQuote)) {
                value = iterator.readString();
            } else {
                value = iterator.readValue();
                if (value === "-") {
                    value = null;
                }
            }
            values.push(value);

            whitespace = iterator.readWhitespaceOrNull();
            if (whitespace == null) {
                break;
            }
            whitespaces.push(whitespace);
        }

        let comment: string = "";
        if (iterator.tryReadChar(rhombus)) {
            comment = iterator.readCommentText();
            if (whitespace == null) {
                whitespaces.push(null);
            }
        }

        let valueArray: string[] = [`${values.length}`];
        let whitespaceArray: string[] = [`${whitespaces.length}`];
        valueArray = [...valueArray, ...values];
        whitespaceArray = [...whitespaceArray, ...whitespaces];

        const newLine: WsvLine = new WsvLine();
        newLine.set(valueArray, whitespaceArray, comment);
        return newLine;
    }

    // public parseDocument(content: string): string[][] {
    //     this.lines = content.split("\n");
    //     this.result = [];

    //     for (const line of this.lines) {
    //         const lineIndex = this.lines.indexOf(line);
    //         this.result.push(this.parseLine(line, lineIndex));
    //     }

    //     return this.result;
    // }

    // private parseLine(str: string, lineIndex: number): string[] {
    //     const iterator: WsvParserCharIterator = new WsvParserCharIterator(str, lineIndex);
    //     const values: string[] = [];
    //     const sb: StringBuilder = new StringBuilder();

    //     while (true) {
    //         this.skipWhitespace(iterator);
    //         if (iterator.isEnd()) {
    //             break;
    //         }
    //         if (iterator.is("#")) {
    //             break;
    //         }
    //         let curValue: string = "";
    //         if (iterator.is('"')) {
    //             curValue = this.parseDoubleQuoteValue(iterator, sb);
    //         } else {
    //             curValue = this.parseValue(iterator);
    //             if (curValue === "-") {
    //                 curValue = null;
    //             }
    //         }
    //         values.push(curValue);
    //     }
    //     return [...values];
    // }

    // private parseDoubleQuoteValue(iterator: WsvParserCharIterator, sb: StringBuilder): string {
    //     sb.clear();
    //     while (true) {
    //         if (!iterator.next()) {
    //             throw iterator.getException("String not closed");
    //         }
    //         if (iterator.is('"')) {
    //             if (!iterator.next()) {
    //                 break;
    //             }
    //             if (iterator.is('"')) {
    //                 sb.append('"');
    //             } else if (iterator.is("/")) {
    //                 if (!(iterator.next() && iterator.is('"'))) {
    //                     throw iterator.getException("Invalid line break");
    //                 }
    //                 sb.append("\n");
    //             } else if (iterator.isWhitespace() || iterator.is("#")) {
    //                 break;
    //             } else {
    //                 throw iterator.getException("Invalid character after string");
    //             }
    //         } else {
    //             sb.appendCodePoint(iterator.get());
    //         }
    //     }
    //     return sb.toString();
    // }

    // private parseValue(iterator: WsvParserCharIterator): string {
    //     const startIndex: number = iterator.getIndex();
    //     while (true) {
    //         if (!iterator.next()) {
    //             break;
    //         }
    //         if (iterator.isWhitespace() || iterator.is("#")) {
    //             break;
    //         } else if (iterator.is('"')) {
    //             throw new Error("Invalid double quote");
    //         }
    //     }
    //     return iterator.getByIndex(startIndex);
    // }

    // private skipWhitespace(iterator: WsvParserCharIterator): void {
    //     if (iterator.isEnd()) {
    //         return;
    //     }
    //     do {
    //         if (!iterator.isWhitespace()) {
    //             break;
    //         }
    //     } while (iterator.next());
    // }

}
