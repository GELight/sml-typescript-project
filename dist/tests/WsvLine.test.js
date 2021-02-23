"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WsvLine_1 = __importDefault(require("../src/sml/WsvLine"));
describe("WsvLine", () => {
    it("Add values per constructor", () => {
        const line = new WsvLine_1.default("Value 1");
        expect(line.getValues().length).toBe(1);
        expect(line.getValues()[0]).toBe("Value 1");
    });
});
//# sourceMappingURL=WsvLine.test.js.map