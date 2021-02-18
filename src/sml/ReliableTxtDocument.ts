import ReliableTxtEncoding from "./ReliableTxtEncoding";
import SmlFile from "./SmlFile";
import WsvSerializer from "./WsvSerializer";
import WsvParser from "./WsvParser";

export default class ReliableTxtDocument {

    private lines: string[] = [];
    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;
    private parsedDocument: string[][] = [];

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

    public load(filePath: string): string[][] {
        const data: string[] = new SmlFile(this.encoding).load(filePath);
        return this.parse(data);
    }

    public toString(): string {
        return new WsvSerializer().toString(this.getLines(), "\n");
    }

    public getParsedDocument(): string[][] {
        return this.parsedDocument;
    }

    public parse(lines: string[]): string[][] {
        this.parsedDocument = new WsvParser().parseDocument(lines.join("\n"));
        return this.parsedDocument;
    }

}
