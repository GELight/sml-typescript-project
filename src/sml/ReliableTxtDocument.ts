import { writeFileSync } from "fs";
// import path from "path";
import ReliableTxtEncoding from "./ReliableTxtEncoding";

export default class ReliableTxtDocument {

    private lines: string[] = [];
    private encoding: ReliableTxtEncoding;

    constructor(...args: string[]) {
        for (const arg of args) {
            let argumentParts: string[];
            argumentParts = [...arg.split("\n")];
            this.lines = [...this.lines, ...argumentParts];
        }
    }

    public setEncoding(encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8) {
        this.encoding = encoding;
    }

    public getLines() {
        return this.lines;
    }

    public save(filePath: string) {
        try {
            writeFileSync(filePath, this.toString(), this.encoding);
            // writeFileSync(path.join(__dirname, filePath), this.toString(), this.encoding);
        } catch (err) {
            console.log(`Error writing '${filePath}'`, err);
        }
    }

    public toString() {
        return this.lines.join("\n");
    }

}
