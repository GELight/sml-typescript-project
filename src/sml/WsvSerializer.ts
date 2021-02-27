import StringBuilder from "./StringBuilder";
import WsvDocument from "./WsvDocument";
import WsvLine from "./WsvLine";

export default class WsvSerializer {

    constructor() {
        // ...
    }

    public serializeLine(sb: StringBuilder, line: WsvLine): void {
        // if (line.getWhitespaces().length > 0) {
        //     this.serializeValuesWithWhitespace(sb, line);
        // } else {
        //     this.serializeValuesWithoutWhitespace(sb, line);
        // }

        // if (line.getComment() !== "") {
        //     sb.append("#");
        //     sb.append(line.getComment());
        // }
    }

    public serializeValue(str: string): string {
        // if (str === null) {
        //     return "-";
        // } else if (str === "") {
        //     return '""';
        // } else if (str === "-") {
        //     return '"-"';
        // } else if (!this.containsSpecialChars(str)) {
        //     return str;
        // }

        // let result = "";
        // for (const c of str) {
        //     switch (c) {
        //         case "\n":
        //             result += '"/"';
        //             break;
        //         case '"':
        //             result += '""';
        //             break;
        //         default:
        //             result += c;
        //     }
        // }

        // return `"${result}"`;
        return "";
    }

    public containsSpecialChars(str: string): boolean {
        // const lineBreaksInString: number = (str.match(/\n/g) || []).length;
        // const doubleQuoteInString = str.includes('"');
        // const spaceInString = /\s/.test(str);
        // const commentInString = str.includes("#");

        // if (lineBreaksInString || doubleQuoteInString || spaceInString || commentInString) {
        //     return true;
        // }

        // return false;
        return true;
    }

    public serializeDocument(document: WsvDocument): string {
        // const sb: StringBuilder = new StringBuilder();
        // let isFirstLine: boolean = true;
        // for (const line of document.getLines()) {
        //     if (!isFirstLine) {
        //         sb.append("\n");
        //     } else {
        //         isFirstLine = false;
        //     }
        //     this.serializeLine(sb, line);
        // }
        // return sb.toString();
        return "";
    }

    private serializeWhitespace(sb: StringBuilder, whitespace: string, isRequired: boolean): void {
        // if (whitespace != null && whitespace.length > 0) {
        //     sb.append(whitespace);
        // } else if (isRequired) {
        //     sb.append(" ");
        // }
    }
}