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

    public getValues() {
        return this.values;
    }

    public toString() {
        return new WsvSerializer().serializeLine(this.getValues());
    }

}
