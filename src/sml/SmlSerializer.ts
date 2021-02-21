import SmlDocument from "./SmlDocument";
import SmlElement from "./SmlElement";
import StringBuilder from "./StringBuilder";
import WsvSerializer from "./WsvSerializer";

export default class SmlSerializer {

    constructor() {
        // ...
    }

    public serializeDocument(document: SmlDocument): string {
        const sb: StringBuilder = new StringBuilder();
        let defaultIndentation: string = document.getDefaultIndentation();
        if (defaultIndentation == null) {
            defaultIndentation = "\t";
        }
        this.serializeElement(sb, document.getRoot(), 0, defaultIndentation, document.getEndKeyword());
        // sb.setLength(sb.length()-1);
        return sb.toString();
    }

    private serializeElement(
        sb: StringBuilder, element: SmlElement, level: number, defaultIndentation: string, endKeyword: string
    ): void {
        this.serializeIndentation(sb, level, defaultIndentation);
        // WsvSerializer.serializeValue(sb, element.Name);
        sb.append("\n");

        const childLevel: number = level + 1;
        // for (const child of element.Nodes) {
        //     if (child instanceof SmlElement) {
        //         serializeElement(sb, (SmlElement)child, childLevel, defaultIndentation, endKeyword);
        //     } else if (child instanceof SmlAttribute) {
        //         serializeAttribute(sb, (SmlAttribute)child, childLevel, defaultIndentation);
        //     }
        // }

        this.serializeIndentation(sb, level, defaultIndentation);
        // WsvSerializer.serializeValue(sb, endKeyword);
        sb.append("\n");
    }

    private serializeIndentation(sb: StringBuilder, level: number, defaultIndentation: string): void {
        const indentStr: string = defaultIndentation.repeat(level);
        sb.append(indentStr);
    }

}
