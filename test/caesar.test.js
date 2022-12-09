// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesarModule", ()=>{
    describe("caesar", () => {
        it("return false if shift is undefined", () => {
            const message = "quite simple";
            const shift = undefined;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;

        });
        it("should return false if shift = 0", () => {
            const message = "quite simple";
            const shift = 0;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
        it("should return false if shift < -25", () => {
            const message = "quite simple";
            const shift = -26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
        it("should return false if shift > 25", () => {
            const message = "quite simple";
            const shift = 26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
    });

    describe("decode a message", () => {
        it("it should decode a message by shifting letters in the opposite direction",() => {
            const message = "wish";
            const shift = 4;
            const actual = caesar(message, shift, false);
            const expected = "seod";

            expect(actual).to.equal(expected)
        });
        it("should leave spaces and other symbols as is",() =>{
            const message = "vibe tribe";
            const shift = 4;
            const actual = caesar(message, shift, false);
            const expected = "rexa pnexa";
            
            expect(actual).to.equal(expected);

        });
        it("ignore capitol letters",() =>{
            const message = "Santa";
            const shift = 4;
            const actual = caesar(message, shift, false);
            const expected = "owjpw";

            expect(actual).to.equal(expected);

        });
        it("should appropriately handle letters at the end of the alphabet",() =>{
            const message = "";
            const shift = 4;
            const actual = caesar(message, shift, false);
            const expected = "";

            expect(actual).to.equal(expected);

        });
        it("should allow for a negative shift that will shift to the left",() =>{
            const message = "santa";
            const shift = -4;
            const actual = caesar(message, shift, false);
            const expected = "werxe";

            expect(actual).to.equal(expected);

        });
    });

    describe ("endcode a message", () => {
        it("should leave spaces and other symbols as is",() =>{
            const message = "vibe tribe";
            const shift = 4;
            const actual = caesar(message, shift, true);
            const expected = "zmfi xvmfi";

            expect(actual).to.equal(expected);

        });
        it("ignore capitol letters",() =>{
            const message = "Santa";
            const shift = 4;
            const actual = caesar(message, shift, true);
            const expected = "werxe";

            expect(actual).to.equal(expected);

        });
        it("should appropriately handle letters at the end of the alphabet",() =>{
            const message = "frozen";
            const shift = 4;
            const actual = caesar(message, shift, true);
            const expected = "jvsdir";

            expect(actual).to.equal(expected);

        });
        it("should allow for a negative shift that will shift to the left",() =>{
            const message = "santa";
            const shift = -4;
            const actual = caesar(message, shift, true);
            const expected = "owjpw";

            expect(actual).to.equal(expected);

        });
    });
})