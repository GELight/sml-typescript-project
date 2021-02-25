export default class StringBuilder {

    private codePoints: number[];

    constructor() {
        // ...
    }

    public clear(): void {
        this.codePoints = [];
    }

    public toString(): string {
        const chars = this.codePoints.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }

    public appendCodePoint(codePoint: number) {
        this.codePoints.push(codePoint);
    }

    public append(str: string) {
        this.codePoints.push(str.codePointAt(0));
    }

    public getLength(): number {
        return this.codePoints.length;
    }

    public setLength(from: number, until?: number): number {
        if (from !== undefined && until !== undefined) {
            this.codePoints = this.codePoints.slice(from, until);
        } else {
            this.codePoints = this.codePoints.slice(from);
        }
        return this.getLength();
    }
}