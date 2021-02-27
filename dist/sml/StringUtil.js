"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// APPROVED
class StringUtil {
    static getSubstr(chars, startIndex, len) {
        const sub = chars.slice(startIndex, (startIndex + len));
        return sub.map((char) => {
            return String.fromCodePoint(char);
        }).join("");
    }
    static stringToCodePoints(text) {
        const chars = [];
        for (const codePoint of text) {
            chars.push(codePoint.codePointAt(0));
        }
        return chars;
    }
    static codePointsToString(codePoints) {
        const chars = codePoints.map((codePoint) => {
            return String.fromCodePoint(codePoint);
        });
        return chars.join("");
    }
}
exports.default = StringUtil;
StringUtil.doubleQuote = '"'.codePointAt(0);
StringUtil.lineBreak = "\n".codePointAt(0);
StringUtil.slash = "/".codePointAt(0);
StringUtil.hash = "#".codePointAt(0);
StringUtil.minus = "-".codePointAt(0);
//# sourceMappingURL=StringUtil.js.map