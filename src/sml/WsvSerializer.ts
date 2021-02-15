import WsvLine from "./WsvLine";

export default class WsvSerializer {

    constructor() { 
        return this;
    }

    public toString(items: string[], separator: string): string {
        const serializedValues: string[] = [];
        for (const item of items) {
            serializedValues.push(this.serialize(item));
        }
        return serializedValues.join(separator);
    }

    public serialize(str: string): string {
        if (str === null) {
            return "-";
        } else if (str === "") {
            return '""';
        } else if (str === "-") {
            return '"-"';
        } else if (!this.containsSpecialChars(str)) {
            return str;
        }

        let result = "";
        for (const c of str) {
            switch (c) {
                case "\n":
                    result += '"/"';
                    break;
                case '"':
                    result += '""';
                    break;
                default:
                    result += c;
            }
        }

        return `"${result}"`;
    }

    public containsSpecialChars(str: string): boolean {
        const lineBreaksInString: number = (str.match(/\n/g) || []).length;
        const doubleQuoteInString = str.includes('"');
        const spaceInString = /\s/.test(str);
        const commentInString = str.includes("#");

        if (lineBreaksInString || doubleQuoteInString || spaceInString || commentInString) {
            return true;
        }

        return false;
    }

}