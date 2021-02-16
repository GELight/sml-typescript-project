import { readFileSync, writeFileSync } from "fs";
import ReliableTxtEncoding from "./ReliableTxtEncoding";
import WsvSerializer from "./WsvSerializer";

export default class SmlFile {

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(encoding?: ReliableTxtEncoding) {
        this.setEncoding(encoding);
        return this;
    }

    public save(filePath: string, content: string, encoding?: ReliableTxtEncoding): SmlFile {
        this.setEncoding(encoding);
        try {
            writeFileSync(filePath, content, this.encoding);
        } catch (e) {
            console.error(e);
        }
        return this;
    }

    public load(filePath: string, encoding?: ReliableTxtEncoding): string[] {
        this.setEncoding(encoding);
        try {
            return readFileSync(filePath, Object.assign({ encoding: this.encoding, flag: "r" })).toString().split("\n");
        } catch (e) {
            console.error(e);
            return Array<string>();
        }
    }

    public parse(data: string): void {
        // TODO ... implementation ...
    }

    private setEncoding(encoding: ReliableTxtEncoding) {
        if (encoding) {
            this.encoding = encoding;
        }
        return this;
    }

}
