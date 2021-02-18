import StringBuilder from "./StringBuilder";
import WsvParserCharIterator from "./WsvParserCharIterator";

export default class WsvParser {

    private lines: string[];
    private result: string[][] = [];

    constructor() {
        // ...
    }

    public parseDocument(content: string): string[][] {
        this.lines = content.split("\n");
        for (const line of this.lines) {
            this.result.push(this.parseLine(line));
        }
        return this.result;
    }

    private parseLine(str: string): string[] {
        const iterator: WsvParserCharIterator = new WsvParserCharIterator(str);
        const values: string[] = [];
        const sb: StringBuilder = new StringBuilder();

        while (true) {
            this.skipWhitespace(iterator);
            if (iterator.isEnd()) {
                break;
            }
            if (iterator.is("#")) {
                break;
            }
            sb.clear();
            let curValue: string = "";
            if (iterator.is('"')) {
                this.parseDoubleQuoteValue(iterator, sb);
                curValue = sb.toString();
            } else {
                this.parseValue(iterator, sb);
                curValue = sb.toString();
                if (curValue === "-") {
                    curValue = null;
                }
            }
            values.push(curValue);
        }
        return [...values];
    }

    private parseDoubleQuoteValue(iterator: WsvParserCharIterator, sb: StringBuilder): void {
        while (true) {
            if (!iterator.next()) {
                throw new Error("String not closed");
            }
            if (iterator.is('"')) {
                if (!iterator.next()) {
                    break;
                }
                if (iterator.is('"')) {
                    sb.append('"');
                } else if (iterator.is("/")) {
                    if (!(iterator.next() && iterator.is('"'))) {
                        throw new Error("Invalid line break");
                    }
                    sb.append("\n");
                } else if (iterator.isWhitespace() || iterator.is("#")) {
                    break;
                } else {
                    throw new Error("Invalid character after string");
                }
            } else {
                sb.appendCodePoint(iterator.get());
            }
        }
    }

    private parseValue(iterator: WsvParserCharIterator, sb: StringBuilder): void {
        while (true) {
            sb.appendCodePoint(iterator.get());
            if (!iterator.next()) {
                break;
            }
            if (iterator.isWhitespace() || iterator.is("#")) {
                break;
            } else if (iterator.is('"')) {
                throw new Error("Invalid double quote");
            }
        }
    }

    private skipWhitespace(iterator: WsvParserCharIterator): void {
        if (iterator.isEnd()) {
            return;
        }
        do {
            if (!iterator.isWhitespace()) {
                break;
            }
        } while (iterator.next());
    }

}
