"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlNamedNode_1 = __importDefault(require("./SmlNamedNode"));
class SmlAttribute extends SmlNamedNode_1.default {
    constructor(name, values) {
        super(name);
    }
    setValues(...values) {
        if (values === null || values.length === 0) {
            throw new Error("Values must contain at least one value");
        }
        this.values = values;
    }
    getValues() {
        return this.values;
    }
    getString(index) {
        return this.values[index];
    }
    setString(value) {
        this.values = [value];
    }
    toString() {
        // return SmlSerializer.serializeAttribute(this);
        return null;
    }
    toWsvLines(document, level, defaultIndentation, endKeyword) {
        // SmlSerializer.serializeAttribute(this, document, level, defaultIndentation);
    }
}
exports.default = SmlAttribute;
//# sourceMappingURL=SmlAttribute.js.map