export default class WsvParser {

    constructor(content?: string) {
        if (content) {
            this.parse(content);
        }
    }

    public parse(content: string): string[] {
        const result: string[] = [];
        const lines = content.split("\n");

        for (const line of lines) {
            this.parseLine(line);
        }

        return result;
    }

    private parseLine(line: string): string[] {
        console.log(line);
        const chars: string[] = [...line];
        const values: string[] = [];

        console.log(chars);

        return [];
    }

}