import WsvParserCharIterator from "../src/sml/WsvParserCharIterator";
import WsvParserException from "../src/sml/WsvParserException";

describe("WsvParserCharIterator", () => {

    it.each([
        ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        ["Lorem ipsum  dolor sit amet", "Lorem ipsum  dolor sit amet"],
        ["Lorem ipsum     dolor sit amet", "Lorem ipsum     dolor sit amet"],
        ["Lorem ipsum/dolor sit amet", "Lorem ipsum/dolor sit amet"],
        ["Lorem ipsum\ndolor sit amet", "Lorem ipsum\ndolor sit amet"],
        [`Lorem ipsum "dolor sit amet`, `Lorem ipsum "dolor sit amet`]
    ])("getText() - Iterator with text %p will returns %p by calling this method",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.getText()).toBe(expected);
        });

    it.each([
        ["Lorem ipsum dolor sit amet", "(1, 1)"],
        [`Lorem ipsum\ndolor sit amet`, "(1, 1)"],
        [`Lorem ipsum dolor\n\n\nsit amet`, "(1, 1)"]
    ])("getLineInfoString() - Iterator with text %p will returns %p by calling this method",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.getLineInfoString()).toBe(expected);
        });

    it.each([
        ["Lorem ipsum\ndolor sit amet", "Lorem ipsum"],
        ["Lorem ipsum # dolor sit amet", "Lorem ipsum # dolor sit amet"],
        ["Lorem ipsum \"dolor sit amet", "Lorem ipsum \"dolor sit amet"]
    ])("readCommentText() - Iterator with text %p will returns %p by calling this method",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.readCommentText()).toBe(expected);
        });

    it.each([
        ["Lorem ipsum dolor sit amet", [0, 0, 0]],
        ["Lorem ipsum\ndolor sit amet", [0, 0, 0]]
    ])("getLineInfo() - Iterator with text %p will returns %p by calling this method",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.getLineInfo()).toStrictEqual(expected);
        });

    it.each([
        ["", null],
        [" ", " "],
        [" abc", " "],
        [" \n", " "]
    ])("readWhitespaceOrNull() - Iterator with text %p will returns %p by calling this method",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.readWhitespaceOrNull()).toStrictEqual(expected);
        });

    it.each([
        ["abc\"", "abc"],
        ["abc\"\"\"", `abc"`],
        ["abc\"/\"\"", `abc\n`],
        ["abc ", "abc"]
    ])("readString() - Iterator with text %p will returns %p by calling this method",
        (text, expected) => {
            // when
            const iterator = new WsvParserCharIterator(text);
            // then
            expect(iterator.readString()).toBe(expected);
        });


    it(`readString() - Iterator with text "abc " will throw a new WsvParserException "String not closed (1, 5)"`,
        () => {
            // when
            const iterator = new WsvParserCharIterator("abc ");
            // then
            expect(iterator.readString()).toThrow("String not closed (1, 5)");
        });

});
