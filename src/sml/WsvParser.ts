import StringBuilder from "./StringBuilder";
import WsvParserCharIterator from "./WsvParserCharIterator";

export default class WsvParser {

    private lines: string[];
    private result: string[][] = [];

    constructor() {
        // ...
    }

    public parse(content: string): string[][] {
        this.lines = content.split("\n");
        this.result = [];

        for (const line of this.lines) {
            const lineIndex = this.lines.indexOf(line);
            this.result.push(this.parseLine(line, lineIndex));
        }

        return this.result;
    }

    private parseLine(str: string, lineIndex: number): string[] {
        const iterator: WsvParserCharIterator = new WsvParserCharIterator(str, lineIndex);
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
            let curValue: string = "";
            if (iterator.is('"')) {
                curValue = this.parseDoubleQuoteValue(iterator, sb);
            } else {
                curValue = this.parseValue(iterator);
                if (curValue === "-") {
                    curValue = null;
                }
            }
            values.push(curValue);
        }
        return [...values];
    }

    private parseDoubleQuoteValue(iterator: WsvParserCharIterator, sb: StringBuilder): string {
        sb.clear();
        while (true) {
            if (!iterator.next()) {
                throw iterator.getException("String not closed");
            }
            if (iterator.is('"')) {
                if (!iterator.next()) {
                    break;
                }
                if (iterator.is('"')) {
                    sb.append('"');
                } else if (iterator.is("/")) {
                    if (!(iterator.next() && iterator.is('"'))) {
                        throw iterator.getException("Invalid line break");
                    }
                    sb.append("\n");
                } else if (iterator.isWhitespace() || iterator.is("#")) {
                    break;
                } else {
                    throw iterator.getException("Invalid character after string");
                }
            } else {
                sb.appendCodePoint(iterator.get());
            }
        }
        return sb.toString();
    }

    private parseValue(iterator: WsvParserCharIterator): string {
        const startIndex: number = iterator.getIndex();
        while (true) {
            if (!iterator.next()) {
                break;
            }
            if (iterator.isWhitespace() || iterator.is("#")) {
                break;
            } else if (iterator.is('"')) {
                throw new Error("Invalid double quote");
            }
        }
        return iterator.getByIndex(startIndex);
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
