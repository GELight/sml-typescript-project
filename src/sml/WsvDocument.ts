import { readFileSync, writeFileSync } from "fs";
import WsvLine from "./WsvLine";

export default class WsvDocument {

    private lines: WsvLine[] = [];

    constructor() {
        return this;
    }

    public addLine(...args: string[]) {
        const line: WsvLine = new WsvLine();
        for (const arg of args) {
            line.addValue(arg);
        }
        this.lines.push(line);
    }

    public getLines() {
        return this.lines;
    }

    public toString() {
        return this.lines.join("\n");
    }

    public save(filePath: string) {

        return this;
    }

}
