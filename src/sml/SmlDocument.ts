import SmlElement from "./SmlElement";

export default class SmlDocument {

    constructor(node: SmlElement) {
        // ...
    }

    public setEndKeyword(iterator: string): void {
        // ...
    }

    public getEndKeyword(): string {
        return "";
    }

    public getDefaultIndentation(): string {
        return "";
    }

    public getRoot(): SmlElement {
        return new SmlElement("muh");
    }

}
