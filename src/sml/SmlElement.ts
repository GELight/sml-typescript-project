import SmlNamedNode from "./SmlNamedNode";
import SmlNode from "./SmlNode";
import SmlSerializer from "./SmlSerializer";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";

export default class SmlElement extends SmlNamedNode {

    public nodes: SmlNode[] = [];

    private endWhitespaces: string[];
    private endComment: string;

    constructor(name: string) {
        super(name);
    }

    public setEndWhitespaces(...whitespaces): void {
        WsvLine.validateWhitespaces(whitespaces);
        this.endWhitespaces = whitespaces;
    }

    public getEndWhitespaces(): string[] {
        return [...this.endWhitespaces];
    }

    public setEndComment(comment: string): void {
        WsvLine.validateComment(comment);
        this.endComment = comment;
    }

    public getEndComment(): string {
        return this.endComment;
    }

    public setEndWhitespacesAndComment(whitespaces: string[], comment: string): void {
        this.endWhitespaces = whitespaces;
        this.endComment = comment;
    }

    public add(node: SmlNode): SmlNode {
        this.nodes.push(node);
        return node;
    }

    public toString(): string {
        return SmlSerializer.serializeElement(this);
    }

    public toWsvLines(document: WsvDocument, level: number, defaultIndentation: string, endKeyword: string): void {
        SmlSerializer.serializeElementInternal(this, document, level, defaultIndentation, endKeyword);
    }

}
