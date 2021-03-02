import SmlNamedNode from "./SmlNamedNode";
import SmlSerializer from "./SmlSerializer";
import StringUtil from "./StringUtil";
import WsvDocument from "./WsvDocument";

export default class SmlAttribute extends SmlNamedNode {

    private values: string[] = [];

    // TODO Weiter gehts...!!!
    constructor(name: string, values: any[]) {
        super(name);
        this.setValues(...values.map(String) as string[]);
    }

    public setValues(...values: any[]): void {
        if (values === null || values.length === 0) {
            throw new Error("Values must contain at least one value");
        }
        this.values = values.map(String) as string[];
    }

    public getValues(offset?: number): string[] {
        if (offset) {
            // return (String[]) Arrays.stream(values).skip(offset).toArray();
            return this.values.slice(offset);
        } else {
            return this.values;
        }
    }

    public getNumberValues(offset?: number): number[] {
        if (offset) {
            // return Arrays.stream(values).mapToInt(Integer::parseInt).toArray();
            return this.values.slice(offset).map(Number);
        } else {
            return this.values.map(Number);
        }
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
