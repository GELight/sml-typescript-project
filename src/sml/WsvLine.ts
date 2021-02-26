import SmlIllegalArgumentException from "./SmlIllegalArgumentException";
import StringBuilder from "./StringBuilder";
import WsvParser from "./WsvParser";
import WsvSerializer from "./WsvSerializer";

export default class WsvLine {

    private values: string[] = [];
    private whitespaces: string[] = [];
    private comment: string = "";

    constructor(...args: string[]) {
        for (const arg of args) {
            this.addValue(arg);
        }

        this.whitespaces = [];
        this.comment = "";

        return this;
    }

    public addValue(value: string) {
        this.values.push(value);
    }

    public getValues(): string[] {
        return this.values;
    }

    public setValues(...args: string[]): void {
        this.values = args;
    }

    public hasValues(): boolean {
        return this.values.length > 0;
    }

    public setWhitespaces(whitespaces: string[]): void {
        this.validateWhitespaces(whitespaces);
        this.whitespaces = whitespaces;
    }

    public validateWhitespaces(whitespaces: string[]): void {
        if (whitespaces.length) {
            for (const whitespace of whitespaces) {
                if (whitespace !== null && whitespace !== "" && whitespace !== " ") {
                    throw new SmlIllegalArgumentException("Whitespace value contains non whitespace character");
                }
            }
        }
    }

    public getWhitespaces(): string[] {
        return [...this.whitespaces];
    }

    public setComment(comment: string): void {
        this.validateComment(comment);
        this.comment = comment;
    }

    public validateComment(comment: string): void {
        if ((this.comment.match(/\n/g) || []).length) {
            throw new SmlIllegalArgumentException("Line break in comment is not allowed");
        }
    }

    public getComment(): string {
        return this.comment;
    }

    public set(values: string[], whitespaces: string[], comment: string): WsvLine {
        this.values = values;
        this.whitespaces = whitespaces;
        this.comment = comment;
        return this;
    }

    public toString(): string {
        const sb: StringBuilder = new StringBuilder();
        const serializedLine = new WsvSerializer().serializeLine(sb, this);
        return sb.toString();
    }

    public parse(content: string): WsvLine {
        return new WsvParser().parseLineByString(content);
    }

}
