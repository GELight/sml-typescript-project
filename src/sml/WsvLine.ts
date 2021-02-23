import WsvSerializer from "./WsvSerializer";

export default class WsvLine {

    private values: string[] = [];

    constructor(...args: string[]) {
        for (const arg of args) {
            this.addValue(arg);
        }
        return this;
    }

    public addValue(value: string) {
        this.values.push(value);
    }

    public getValues(): string[] {
        return this.values;
    }

    public toString(): string {
        return new WsvSerializer().serializeLine(this.getValues());
    }

}
