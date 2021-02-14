export default class WsvLine {

    private values: string[] = [];

    constructor(...args: string[]) {
        this.parse(args);
        return this;
    }

    public addValue(value: string) {
        this.values.push(value);
    }

    public getValues() {
        return this.values;
    }

    public toString() {
        return this.values.join(" ");
    }

    private parse(args: string[]): string[] {
        for (const arg of args) {
            let valueParts: string[];
            valueParts = [...arg.split(" ")];

            for (const value of valueParts) {
                this.values.push(value);
            }
        }

        return this.getValues();
    }

}
