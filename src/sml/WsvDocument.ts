import ReliableTxtEncoding from "./ReliableTxtEncoding";
import SmlFile from "./SmlFile";
import WsvLine from "./WsvLine";

export default class WsvDocument {

    private lines: WsvLine[] = [];
    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor() {
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): WsvDocument {
        this.encoding = encoding;
        return this;
    }

    public addLine(...args: string[]): WsvLine {
        const line: WsvLine = new WsvLine();
        for (const arg of args) {
            line.addValue(arg);
        }
        this.lines.push(line);
        return line;
    }

    public getLines() {
        return this.lines;
    }

    public toString() {
        return this.lines.join("\n");
    }

    public save(filePath: string): WsvDocument {
        new SmlFile(this.encoding).save(filePath, this.toString());
        return this;
    }

    public load(filePath: string): WsvLine[] {
        const lines: string[] = new SmlFile(this.encoding).load(filePath);
        for (const l of lines) {
            const newLine: WsvLine = new WsvLine();

            const lineValues = l.split(" ");
            for (const value of lineValues) {
                newLine.addValue(value);
            }

            this.lines.push(newLine);
        }
        return this.lines;
    }

}
