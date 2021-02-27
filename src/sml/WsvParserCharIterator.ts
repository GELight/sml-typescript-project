import WsvChar from "./WsvChar";
import WsvParserException from "./WsvParserException";

export default class WsvParserCharIterator {

    public static chars: number[];
    public static index: number = 0;
    public static lineIndex: number = 0;

    public static isEnd(): boolean {
        return WsvParserCharIterator.index >= WsvParserCharIterator.chars.length;
    }

    public static is(c: string): boolean {
        return WsvParserCharIterator.chars[WsvParserCharIterator.index] === c.codePointAt(0);
    }

    public static isWhitespace(): boolean {
        return new WsvChar().isWhitespace(WsvParserCharIterator.chars[WsvParserCharIterator.index]);
    }

    public static next(): boolean {
        WsvParserCharIterator.index++;
        return !WsvParserCharIterator.isEnd();
    }

    public static get(): number {
        return WsvParserCharIterator.chars[WsvParserCharIterator.index];
    }

    public static getByIndex(index: number): string {
        const len: number = WsvParserCharIterator.index - index;
        const chars = WsvParserCharIterator.chars.map((c) => {
            return String.fromCodePoint(c);
        }).join("");
        return `${chars.substr(index, len)}`;
    }

    public static getIndex(): number {
        return WsvParserCharIterator.index;
    }

    constructor(str: string, lineIndex: number) {
        WsvParserCharIterator.chars = Array.from(str).map((v) => v.codePointAt(0));
        WsvParserCharIterator.lineIndex = lineIndex;
    }

    public getException(message: string): WsvParserException {
        return new WsvParserException(message, WsvParserCharIterator.lineIndex, WsvParserCharIterator.index);
    }
}
