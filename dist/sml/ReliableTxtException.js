"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReliableTxtException extends Error {
    constructor(message, lineIndex, linePosition, ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ReliableTxtException);
        }
        this.name = "ReliableTxtException";
        this.message = `${message}:${lineIndex + 1}:${linePosition}`;
        if (lineIndex) {
            this.lineIndex = lineIndex;
        }
        if (linePosition) {
            this.linePosition = linePosition;
        }
    }
}
exports.default = ReliableTxtException;
//# sourceMappingURL=ReliableTxtException.js.map