import SmlParserException from "./SmlParserException";
import WsvParser from "./WsvParser";

export default class WsvLineIterator {

    private lines: string[][] = [];
    private endKeyword: string;
    private index: number;

    constructor(content: string) {
        this.lines = new WsvParser().parseDocument(content);
        this.detectEndKeyword();
    }

    public getEndKeyword(): string {
        return this.endKeyword;
    }

    public hasLine(): boolean {
        return this.index < this.lines.length;
    }

    public isEmptyLine(): boolean {
        return this.hasLine() && (this.lines[this.index] == null || this.lines[this.index].length === 0);
    }

    public getLine(): string[] {
        const line: string[] = this.lines[this.index];
        this.index++;
        return line;
    }

    public getException(message: string): SmlParserException {
        return new SmlParserException(message, this.index);
    }

    private detectEndKeyword(): void {
        let index: number = 0;
        for (let i = this.lines.length - 1; i >= 0; i--) {
            index = i;
            const values: string[] = this.lines[i];

            if (values.length === 1) {
                this.endKeyword = values[0];
                return;
            } else if (values.length > 1) {
                break;
            }
        }
        throw new SmlParserException("End keyword could not be detected", index);
    }

}
