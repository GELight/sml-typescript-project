import SmlAttribute from "./SmlAttribute";
import SmlDocument from "./SmlDocument";
import SmlElement from "./SmlElement";
import SmlNode from "./SmlNode";
import SmlParserException from "./SmlParserException";
import WsvLineIterator from "./WsvLineIterator";

export default class SmlParser {

    constructor() {
        // ...
    }

    public parseDocument(content: string): SmlDocument {
        const iterator: WsvLineIterator = new WsvLineIterator(content);

        this.skipEmptyLines(iterator);
        if (!iterator.hasLine()) {
            throw iterator.getException("Root element expected");
        }

        const node: SmlNode = this.readNode(iterator);
        if (!(node instanceof SmlElement)) {
            throw iterator.getException("Invalid root element start");
        }

        this.skipEmptyLines(iterator);
        if (iterator.hasLine()) {
            throw iterator.getException("Only one root element allowed");
        }

        const document: SmlDocument = new SmlDocument(node);
        document.setEndKeyword(iterator.getEndKeyword());
        return document;
    }

    private skipEmptyLines(iterator: WsvLineIterator): void {
        while (iterator.isEmptyLine()) {
            iterator.getLine();
        }
    }

    private readNode(iterator: WsvLineIterator): SmlNode {
        const line: string[] = iterator.getLine();

        const name: string = line[0];
        if (this.equalsIgnoreCase(name, iterator.getEndKeyword())) {
            if (line.length > 1) {
                throw iterator.getException("Attribute with end keyword name is not allowed");
            }
            return null;
        }
        if (line.length === 1) {
            const element: SmlElement = new SmlElement(name);
            this.readElementContent(iterator, element);
            return element;
        } else {
            const values: string[] = line.slice(1, line.length);
            const attribute: SmlAttribute = new SmlAttribute(name, values);
            return attribute;
        }
    }

    private equalsIgnoreCase(str1: string, str2: string): boolean {
        return str1.toLowerCase() === str2.toLowerCase();
    }

    private readElementContent(iterator: WsvLineIterator, element: SmlElement): void {
        while (true) {
            if (!iterator.hasLine()) {
                throw new SmlParserException("Element not closed");
            }
            this.skipEmptyLines(iterator);
            const node: SmlNode = this.readNode(iterator);
            if (node == null) {
                break;
            }
            element.add(node);
        }
    }

}
