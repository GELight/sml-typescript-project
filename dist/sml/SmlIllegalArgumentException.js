"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmlIllegalArgumentException extends Error {
    constructor(message, lineIndex, linePosition, ...params) {
        super(...params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SmlIllegalArgumentException);
        }
        this.name = "SmlIllegalArgumentException";
        this.message = `${message}:${lineIndex + 1}:${linePosition}`;
        if (lineIndex) {
            this.lineIndex = lineIndex;
        }
        if (linePosition) {
            this.linePosition = linePosition;
        }
    }
}
exports.default = SmlIllegalArgumentException;
//# sourceMappingURL=SmlIllegalArgumentException.js.map