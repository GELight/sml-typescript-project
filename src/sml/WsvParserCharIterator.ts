import WsvChar from "./WsvChar";
import WsvParserException from "./WsvParserException";

export default class WsvParserCharIterator {

    private chars: number[];
    private index: number = 0;
    private lineIndex: number = 0;

    constructor(str: string, lineIndex: number) {
        this.chars = Array.from(str).map((v) => v.codePointAt(0));
        this.lineIndex = lineIndex;
    }

    public isEnd(): boolean {
        return this.index >= this.chars.length;
    }

    public is(c: string): boolean {
        return this.chars[this.index] === c.codePointAt(0);
    }

    public isWhitespace(): boolean {
        return new WsvChar().isWhitespace(this.chars[this.index]);
    }

    public next(): boolean {
        this.index++;
        return !this.isEnd();
    }

    public get(): number {
        return this.chars[this.index];
    }

    public getByIndex(index: number): string {
        const len: number = this.index - index;
        const chars = this.chars.map((c) => {
            return String.fromCodePoint(c);
        }).join("");
        return `${chars.substr(index, len)}`;
    }

    public getIndex(): number {
        return this.index;
    }

    public getException(message: string): WsvParserException {
        return new WsvParserException(message, this.lineIndex, this.index);
    }
}
