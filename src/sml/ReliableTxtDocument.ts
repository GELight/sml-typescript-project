export default class ReliableTxtDocument {

    public text: string = "";

    constructor(...args: string[]) {
        this.text = args.join("\n");
        return this;
    }

    public getLines(): string[] {
        return this.text.split("\n");
    }

    public toString(): string {
        return this.text;
    }

}
