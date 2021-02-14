import { existsSync, readFileSync, writeFileSync } from "fs";
import ReliableTxtEncoding from "./ReliableTxtEncoding";

export default class SmlFile {

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(encoding?: ReliableTxtEncoding) {
        this.setEncoding(encoding);
        return this;
    }

    public save(filePath: string, content: string, encoding?: ReliableTxtEncoding) {
        this.setEncoding(encoding);
        try {
            if (existsSync(filePath)) {
                writeFileSync(filePath, content, this.encoding);
            } else {
                console.log(`File '${filePath}' could not be written!`);
            }
        } catch (e) {
            console.error(e);
        }
        return this;
    }

    public load(filePath: string, encoding?: ReliableTxtEncoding): string[] {
        this.setEncoding(encoding);
        try {
            if (existsSync(filePath)) {
                return readFileSync(filePath, Object.assign({ encoding: this.encoding, flag: "r" })).toString().split("\n");
            } else {
                console.log(`File '${filePath}' not found!`);
            }
            return Array<string>();
        } catch (e) {
            console.error(e);
            return Array<string>();
        }
    }

    private setEncoding(encoding: ReliableTxtEncoding) {
        if (encoding) {
            this.encoding = encoding;
        }
        return this;
    }

}
