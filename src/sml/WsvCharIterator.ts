import StringBuilder from "./StringBuilder";
import WsvChar from "./WsvChar";
import WsvParserException from "./WsvParserException";

export default class WsvCharIterator {

    private sb: StringBuilder = new StringBuilder();
    private chars: number[];
    private index: number;

    constructor(text: string) {
        for (const codePoint of text) {
            codePoint.codePointAt(0);
        }
    }

    public getText(): string {
        const chars = this.chars.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }

    public getLineInfoString(): string {
        const lineInfo: number[] = this.getLineInfo();
        return `(${lineInfo[1] + 1}, ${lineInfo[2] + 1})`;
    }

    public getLineInfo(): number[] {
        let lineIndex: number = 0;
        let linePosition: number = 0;
        for (let i = 0; i < this.index; i++) {
            if (String.fromCodePoint(this.chars[i]) === "\n") {
                lineIndex++;
                linePosition = 0;
            } else {
                linePosition++;
            }
        }
        const a: number[] = [this.index, lineIndex, linePosition];
        return a;
    }

    public isEndOfText(): boolean {
        return this.index >= this.chars.length;
    }

    public isChar(c: number): boolean {
        if (this.isEndOfText()) {
            return false;
        }
        return (this.chars[this.index] === c);
    }

    public tryReadChar(c: number): boolean {
        if (!this.isChar(c)) {
            return false;
        }
        this.index++;
        return true;
    }

    public readCommentText(): string {
        const startIndex: number = this.index;
        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            if (String.fromCodePoint(this.index) === "\n") {
                break;
            }
            this.index++;
        }

        return this.getText().substring(startIndex, (this.index - startIndex));
    }

    public readWhitespaceOrNull(): string {
        const startIndex: number = this.index;
        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            const c: number = this.chars[this.index];
            if (String.fromCodePoint(c) === "\n") {
                break;
            }
            if (!new WsvChar().isWhitespace(c)) {
                break;
            }
            this.index++;
        }
        if (this.index === startIndex) {
            return null;
        }

        return this.getText().substring(startIndex, (this.index - startIndex));
    }

    public readString(): string {
        this.sb.clear();

        const doubleQuote = '"'.codePointAt(0);
        const lineBreak = "\n".codePointAt(0);
        const slash = "/".codePointAt(0);

        while (true) {
            if (this.isEndOfText()) {
                throw new WsvParserException("String not closed");
            }
            const c: number = this.chars[this.index];
            if (c === lineBreak) {
                throw new WsvParserException("String not closed in starting line");
            } else if (c === doubleQuote) {
                this.index++;
                if (this.tryReadChar(doubleQuote)) {
                    this.sb.appendCodePoint(doubleQuote);
                } else if (this.tryReadChar(slash)) {
                    if (!this.tryReadChar(doubleQuote)) {
                        throw new WsvParserException("String expected after linebreak slash");
                    }
                    this.sb.appendCodePoint(lineBreak);
                } else {
                    break;
                }
            } else {
                this.sb.appendCodePoint(c);
                this.index++;
            }
        }
        return this.sb.toString();
    }

    public readValue(): string {
        const startIndex: number = this.index;
        const rhombus = "#".codePointAt(0);

        while (true) {
            if (this.isEndOfText()) {
                break;
            }
            const c: number = this.chars[this.index];
            if (new WsvChar().isWhitespace(c) || c === rhombus) {
                break;
            }
            if (String.fromCodePoint(c) === '\"') {
                throw new WsvParserException("String starting in value");
            }
            this.index++;
        }
        if (this.index === startIndex) {
            throw new WsvParserException("Invalid value");
        }

        return this.getText().substring(startIndex, (this.index - startIndex));
    }

}
