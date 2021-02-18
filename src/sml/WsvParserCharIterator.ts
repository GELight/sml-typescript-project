export default class WsvParserCharIterator {

    private chars: number[];
    private index: number = 0;

    constructor(str: string) {
        this.chars = Array.from(str).map((v) => v.codePointAt(0));
    }

    public isEnd(): boolean {
        return this.index >= this.chars.length;
    }

    public is(c: string): boolean {
        return this.chars[this.index] === c.codePointAt(0);
    }

    public isWhitespace(): boolean {
        return (this.chars[this.index] === 0x20);
    }

    public next(): boolean {
        this.index++;
        return !this.isEnd();
    }

    public get(): number {
        return this.chars[this.index];
    }
}
