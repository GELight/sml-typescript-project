export default class WsvLine {

    private values: string[] = [];

    constructor(...args: string[]) {
        this.values = [...this.values, ...args];
        return this;
    }

    public addValue(value: string) {
        this.values.push(value);
    }

    public getLines() {
        return this.values;
    }

    public toString() {
        return this.values.join(" ");
    }

}
