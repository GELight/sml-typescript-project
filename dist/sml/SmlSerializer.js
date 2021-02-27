"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringBuilder_1 = __importDefault(require("./StringBuilder"));
class SmlSerializer {
    constructor() {
        // ...
    }
    serializeDocument(document) {
        const sb = new StringBuilder_1.default();
        let defaultIndentation = document.getDefaultIndentation();
        if (defaultIndentation == null) {
            defaultIndentation = "\t";
        }
        this.serializeElement(sb, document.getRoot(), 0, defaultIndentation, document.getEndKeyword());
        // sb.setLength(sb.getLength() - 1);
        return sb.toString();
    }
    serializeElement(sb, element, level, defaultIndentation, endKeyword) {
        this.serializeIndentation(sb, level, defaultIndentation);
        // WsvSerializer.serializeValue(sb, element.Name);
        sb.append("\n");
        const childLevel = level + 1;
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
    serializeIndentation(sb, level, defaultIndentation) {
        const indentStr = defaultIndentation.repeat(level);
        sb.append(indentStr);
    }
}
exports.default = SmlSerializer;
//# sourceMappingURL=SmlSerializer.js.map