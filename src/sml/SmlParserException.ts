export default class SmlParserException extends Error {

    public lineIndex: number;
    public linePosition: number;

    constructor(message: string, lineIndex?: number, linePosition?: number, ...params: string[]) {
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
