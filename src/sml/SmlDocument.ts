import SmlElement from "./SmlElement";
import SmlEmptyNode from "./SmlEmptyNode";

export default class SmlDocument {

    public emptyNodesBefore: SmlEmptyNode[] = [];
    public emptyNodesAfter: SmlEmptyNode[] = [];

    private root: SmlElement;
    private endKeyword: string = "End";

    constructor(rootElement?: SmlElement) {
        // ...
    }

    public setEndKeyword(endKeyword: string): void {
        this.endKeyword = endKeyword;
    }

    public getEndKeyword(): string {
        return this.endKeyword;
    }

    public getDefaultIndentation(): string {
        return "";
    }

    public getRoot(): SmlElement {
        return this.root;
    }

    public setRoot(root: SmlElement): void {
        this.root = root;
    }

}
