import ReliableTxtEncoding from "./ReliableTxtEncoding";
import SmlFile from "./SmlFile";
import WsvLine from "./WsvLine";
import WsvParser from "./WsvParser";
import WsvSerializer from "./WsvSerializer";

export default class WsvDocument {

    private lines: WsvLine[] = [];
    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(...args: string[]) {
        this.parse(args);
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): WsvDocument {
        this.encoding = encoding;
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
            serializedValues.push(new WsvSerializer().toString(item.getValues(), " "));
        }
        return serializedValues.join("\n");
    }

    public save(filePath: string): WsvDocument {
        new SmlFile(this.encoding).save(filePath, this.toString());
        return this;
    }

    public load(filePath: string): WsvLine[] {
        const lines: string[] = new SmlFile(this.encoding).load(filePath);
        return this.parse(lines);
    }

    public parse(lines: string[]): WsvLine[] {
        for (const l of lines) {
            const line = new WsvParser().parse(l);
            const newLine: WsvLine = new WsvLine(line.join(" "));
            this.lines.push(newLine);
        }
        return this.getLines();
    }

}
