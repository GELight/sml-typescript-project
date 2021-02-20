import WsvLine from "./WsvLine";
import WsvParser from "./WsvParser";
import WsvSerializer from "./WsvSerializer";

export default class WsvDocument {

    private lines: WsvLine[] = [];

    constructor(...args: string[]) {
        for (const lineStr of args) {
            const lines = new WsvParser().parseDocument(lineStr);
            const firstLine = lines[0];
            const newLine: WsvLine = new WsvLine(...firstLine);
            this.lines.push(newLine);
        }
        return this;
    }

    public addLine(...args: WsvLine[]): WsvLine[] {
        for (const arg of args) {
            this.lines.push(arg);
        }
        return this.getLines();
    }

    public addLineByValues(...args: string[]): WsvLine[] {
        const line: WsvLine = new WsvLine();
        for (const arg of args) {
            line.addValue(arg);
        }
        this.lines.push(line);
        return this.getLines();
    }

    public getLines(): WsvLine[] {
        return this.lines;
    }

    public toString() {
        const serializedValues: string[] = [];
        for (const item of this.getLines()) {
            serializedValues.push(new WsvSerializer().serializeLine(item.getValues()));
        }
        return serializedValues.join("\n");
    }

    public parse(content: string): WsvLine[] {
        const lines = new WsvParser().parseDocument(content);
        for (const line of lines) {
            const newLine: WsvLine = new WsvLine(...line);
            this.lines.push(newLine);
        }
        return this.getLines();
    }

}
