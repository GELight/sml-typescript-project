import ReliableTxtEncoding from "./ReliableTxtEncoding";
import SmlFile from "./SmlFile";

interface IReadFileSyncOptions {
    encoding?: ReliableTxtEncoding;
    flag?: "r";
}

export default class ReliableTxtDocument {

    private lines: string[] = [];
    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(...args: string[]) {
        this.parse(args);
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): ReliableTxtDocument {
        this.encoding = encoding;
        return this;
    }

    public getLines(): string[] {
        return this.lines;
    }

    public save(filePath: string): ReliableTxtDocument {
        new SmlFile(this.encoding).save(filePath, this.toString());
        return this;
    }

    public load(filePath: string): string[] {
        const data: string[] = new SmlFile(this.encoding).load(filePath);
        return this.parse(data);
    }

    public toString(): string {
        return this.lines.join("\n");
    }

    private parse(args: string[]): string[] {
        for (const arg of args) {
            let argumentParts: string[];
            argumentParts = [...arg.split("\n")];
            this.lines = [...this.lines, ...argumentParts];
        }
        return this.lines;
    }

}
