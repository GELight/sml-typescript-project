import ReliableTxtDocument from "./ReliableTxtDocument";
import ReliableTxtEncoding from "./ReliableTxtEncoding";
import ReliableTxtFile from "./ReliableTxtFile";

export default class ReliableTxtDocumentServer extends ReliableTxtDocument {

    public encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(...args: string[]) {
        super(...args);
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): ReliableTxtDocument {
        this.encoding = encoding;
        return this;
    }

    public save(filePath: string): ReliableTxtDocument {
        new ReliableTxtFile(this.encoding).save(filePath, this.text);
        return this;
    }

    public load(filePath: string): string {
        this.text = new ReliableTxtFile(this.encoding).load(filePath);
        return this.text;
    }
}