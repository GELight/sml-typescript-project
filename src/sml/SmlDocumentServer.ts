import ReliableTxtEncoding from "./ReliableTxtEncoding";
import ReliableTxtFile from "./ReliableTxtFile";
import SmlDocument from "./SmlDocument";
import SmlElement from "./SmlElement";

export default class SmlDocumentServer extends SmlDocument {

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(rootElement?: SmlElement) {
        super(rootElement);
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): SmlDocumentServer {
        this.encoding = encoding;
        return this;
    }

    public getEncoding(): ReliableTxtEncoding {
        return this.encoding;
    }

    public load(filePath: string): SmlDocument {
        const content: string = new ReliableTxtFile(this.encoding).load(filePath);
        return SmlDocumentServer.parse(content);
    }

    public save(filePath: string): SmlDocument {
        new ReliableTxtFile(this.encoding).save(filePath, this.toString());
        return this;
    }
}
