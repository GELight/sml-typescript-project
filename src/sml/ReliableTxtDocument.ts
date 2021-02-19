import ReliableTxtEncoding from "./ReliableTxtEncoding";
import ReliableTxtFile from "./ReliableTxtFile";

export default class ReliableTxtDocument {

    private text: string = "";
    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(...args: string[]) {
        this.text = args.join("\n");
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): ReliableTxtDocument {
        this.encoding = encoding;
        return this;
    }

    public getLines(): string[] {
        return this.text.split("\n");
    }

    public save(filePath: string): ReliableTxtDocument {
        new ReliableTxtFile(this.encoding).save(filePath, this.text);
        return this;
    }

    public load(filePath: string): string {
        this.text = new ReliableTxtFile(this.encoding).load(filePath);
        return this.text;
    }

    public toString(): string {
        return this.text;
    }

}
