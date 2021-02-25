import WsvCharIterator from "./WsvCharIterator";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";
import WsvParserException from "./WsvParserException";

export default class WsvParser {

    constructor() {
        // ...
    }

    public parseLineByString(content: string): WsvLine {
        const iterator: WsvCharIterator = new WsvCharIterator(content);
        const values: string[] = [];
        const whitespaces: string[] = [];

        const lineBreak = "\n".codePointAt(0);

        const newLine: WsvLine = this.parseLine(iterator, values, whitespaces);
        if (iterator.tryReadChar(lineBreak)) {
            throw new WsvParserException("Multiple WSV lines not allowed");
        } else if (!iterator.isEndOfText()) {
            throw new WsvParserException("WSV line not parsed completely");
        }

        return newLine;
    }

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

}
