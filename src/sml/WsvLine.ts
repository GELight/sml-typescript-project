import WsvSerializer from "./WsvSerializer";

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
        return new WsvSerializer().toString(this.getValues(), " ");
    }

    private parse(args: string[]): string[] {
        for (const arg of args) {
            this.values.push(arg);
        }

        return this.getValues();
    }

}
