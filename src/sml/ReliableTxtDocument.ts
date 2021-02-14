import { readFileSync, writeFileSync } from "fs";
import ReliableTxtEncoding from "./ReliableTxtEncoding";

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

    public setEncoding(encoding: ReliableTxtEncoding) {
        this.encoding = encoding;
        return this;
    }

    public getLines() {
        return this.lines;
    }

    public save(filePath: string) {
        try {
            writeFileSync(filePath, this.toString(), this.encoding);
        } catch (err) {
            console.log(`Error writing '${filePath}'`, err);
        }
        return this;
    }

    public load(filePath: string) {
        try {
            const data: string[] = readFileSync(filePath, Object.assign({
                encoding: this.encoding,
                flag: "r"
            })).toString().split("\n");
            this.parse(data);
        } catch (err) {
            console.log(`Error reading '${filePath}'`, err);
        }
        return this;
    }

    public toString() {
        return this.lines.join("\n");
    }

    private parse(args: string[]) {
        for (const arg of args) {
            let argumentParts: string[];
            argumentParts = [...arg.split("\n")];
            this.lines = [...this.lines, ...argumentParts];
        }
    }

}
