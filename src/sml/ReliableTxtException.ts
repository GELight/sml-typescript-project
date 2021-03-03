export default class ReliableTxtException extends Error {

    public lineIndex: number;
    public linePosition: number;

    constructor(message: string, lineIndex?: number, linePosition?: number, ...params: string[]) {
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
