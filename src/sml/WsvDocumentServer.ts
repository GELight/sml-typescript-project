import ReliableTxtEncoding from "./ReliableTxtEncoding";
import ReliableTxtFile from "./ReliableTxtFile";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";

export default class WsvDocumentServer extends WsvDocument {

    private encoding: ReliableTxtEncoding = ReliableTxtEncoding.UTF8;

    constructor(...args: string[]) {
        super(...args);
        return this;
    }

    public setEncoding(encoding: ReliableTxtEncoding): WsvDocument {
        this.encoding = encoding;
        return this;
    }

    public getEncoding(): ReliableTxtEncoding {
        return this.encoding;
    }

    public save(filePath: string): WsvDocument {
        new ReliableTxtFile(this.encoding).save(filePath, this.toString());
        return this;
    }

    public load(filePath: string): WsvDocument {
        const content: string = new ReliableTxtFile(this.encoding).load(filePath);
        return this.parse(content);
    }

}
