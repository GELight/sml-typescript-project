
// APPROVED
export default class StringUtil {

    public static doubleQuote = '"'.codePointAt(0);
    public static lineBreak = "\n".codePointAt(0);
    public static slash = "/".codePointAt(0);
    public static hash = "#".codePointAt(0);
    public static minus = "-".codePointAt(0);

    public static getSubstr(chars: number[], startIndex: number, len: number): string {
        const sub = chars.slice(startIndex, (startIndex + len));
        return sub.map((char) => {
            return String.fromCodePoint(char);
        }).join("");
    }

    public static stringToCodePoints(text: string): number[] {
        const chars: number[] = [];
        for (const codePoint of text) {
            chars.push(codePoint.codePointAt(0));
        }
        return chars;
    }

    public static codePointsToString(codePoints: number[]): string {
        const chars = codePoints.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }

}
