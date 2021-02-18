"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WsvParserException extends Error {
    constructor(message, lineIndex, linePosition, ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, WsvParserException);
        }
        this.name = "WsvParserException";
        this.message = `${message}:${lineIndex + 1}:${linePosition}`;
        if (lineIndex) {
            this.lineIndex = lineIndex;
        }
        if (linePosition) {
            this.linePosition = linePosition;
        }
    }
}
exports.default = WsvParserException;
//# sourceMappingURL=WsvParserException.js.map