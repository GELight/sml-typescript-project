"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmlParserException extends Error {
    constructor(message, lineIndex, linePosition, ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SmlParserException);
        }
        this.name = "SmlParserException";
        this.message = `${message}:${lineIndex + 1}:${linePosition}`;
        if (lineIndex) {
            this.lineIndex = lineIndex;
        }
        if (linePosition) {
            this.linePosition = linePosition;
        }
    }
}
exports.default = SmlParserException;
//# sourceMappingURL=SmlParserException.js.map