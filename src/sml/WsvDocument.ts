import ReliableTxtEncoding from "./ReliableTxtEncoding";
import WsvLine from "./WsvLine";
import WsvParser from "./WsvParser";
import WsvSerializer from "./WsvSerializer";

export default class WsvDocument {

    public lines: WsvLine[] = [];

    constructor(...args: string[]) {
        // for (const lineStr of args) {
        //     const lines = new WsvParser().parseDocument(lineStr);
        //     const firstLine = lines[0];
        //     const newLine: WsvLine = new WsvLine(...firstLine);
        //     this.lines.push(newLine);
        // }
        // return this;
    }

    public addWsvLine(...args: WsvLine[]): WsvLine[] {
        for (const arg of args) {
            this.lines.push(arg);
        }
        return this.getLines();
    }

    public addWsvLineByValues(...args: string[]): WsvLine[] {
        const line: WsvLine = new WsvLine();
        for (const arg of args) {
            line.addValue(arg);
        }
        this.lines.push(line);
        return this.getLines();
    }

    public addWsvLineBySet(values: string[], whitespaces: string[], comment: string): WsvDocument {
        this.addWsvLine(new WsvLine().set(values, whitespaces, comment));
        return this;
    }

    public getLines(): WsvLine[] {
        return this.lines;
    }

    public getLine(index: number): WsvLine {
        return this.lines[index];
    }

    public toArray(): string[][] {
        const array: string[][] = [];
        for (let i = 0; i < this.lines.length; i++) {
            array[i] = this.lines[i].getValues();
        }
        return array;
    }

    public toString(): string {
        return new WsvSerializer().serializeDocument(this);
    }

    public parse(content: string): WsvDocument {
        // return new WsvParser().parseDocument(content);
        return null;
    }

}
