import SmlNamedNode from "./SmlNamedNode";
import SmlSerializer from "./SmlSerializer";
import WsvDocument from "./WsvDocument";

export default class SmlAttribute extends SmlNamedNode {

    private values: string[] = [];

    constructor(name: string, values: string[]) {
        super(name);
        this.setValues(...values);
    }

    public setValues(...values: string[]): void {
        if (values === null || values.length === 0) {
            throw new Error("Values must contain at least one value");
        }
        this.values = values;
    }

    public getValues(): string[] {
        return this.values;
    }

    public getString(index: number): string {
        return this.values[index];
    }

    public setString(value: string): void {
        this.values = [value];
    }

    public toString(): string {
        return SmlSerializer.serializeAttribute(this);
    }

    public toWsvLines(document: WsvDocument, level: number, defaultIndentation: string, endKeyword: string): void {
        SmlSerializer.serializeAttributeInternal(this, document, level, defaultIndentation);
    }

}
