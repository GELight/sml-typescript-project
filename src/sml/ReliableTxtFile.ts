import { readFileSync, writeFileSync } from "fs";
import ReliableTxtEncoding from "./ReliableTxtEncoding";

export default class ReliableTxtFile {

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(encoding?: ReliableTxtEncoding) {
        this.setEncoding(encoding);
        return this;
    }

    public save(filePath: string, content: string, encoding?: ReliableTxtEncoding): ReliableTxtFile {
        this.setEncoding(encoding);
        try {
            writeFileSync(filePath, content, this.encoding);
        } catch (e) {
            console.error(e);
        }
        return this;
    }

    public load(filePath: string, encoding?: ReliableTxtEncoding): string {
        this.setEncoding(encoding);
        try {
            return readFileSync(filePath, Object.assign({ encoding: this.encoding, flag: "r" })).toString();
        } catch (e) {
            console.error(e);
            return "";
        }
    }

    private setEncoding(encoding: ReliableTxtEncoding) {
        if (encoding) {
            this.encoding = encoding;
        }
        return this;
    }

}
