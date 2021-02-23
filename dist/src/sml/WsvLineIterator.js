"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SmlParserException_1 = __importDefault(require("./SmlParserException"));
const WsvParser_1 = __importDefault(require("./WsvParser"));
class WsvLineIterator {
    constructor(content) {
        this.lines = [];
        this.lines = new WsvParser_1.default().parseDocument(content);
        this.detectEndKeyword();
    }
    getEndKeyword() {
        return this.endKeyword;
    }
    hasLine() {
        return this.index < this.lines.length;
    }
    isEmptyLine() {
        return this.hasLine() && (this.lines[this.index] == null || this.lines[this.index].length === 0);
    }
    getLine() {
        const line = this.lines[this.index];
        this.index++;
        return line;
    }
    getException(message) {
        return new SmlParserException_1.default(message, this.index);
    }
    detectEndKeyword() {
        let index = 0;
        for (let i = this.lines.length - 1; i >= 0; i--) {
            index = i;
            const values = this.lines[i];
            if (values.length === 1) {
                this.endKeyword = values[0];
                return;
            }
            else if (values.length > 1) {
                break;
            }
        }
        throw new SmlParserException_1.default("End keyword could not be detected", index);
    }
}
exports.default = WsvLineIterator;
//# sourceMappingURL=WsvLineIterator.js.map