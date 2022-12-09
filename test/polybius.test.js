const { expect } = require("chai");
const { polybius } = require("../src/polybius");// Write your tests here!


describe("polybiusModule", () => {
    describe("encode a message", ()=>{
        it("should encode a message by translating each letter to number pairs", () => {
            const message = "secret";
            const actual = polybius(message);
            const expected = "345131245144"

            expect(actual).to.equal(expected);

        });
        it("should translate both 'i' and 'j' to 42", () => {
            const message = "jinx";
            const actual = polybius(message);
            const expected = "42423335"

            expect(actual).to.equal(expected);

        });
        it("should leave spaces as is", () => {
            const message = "secret santa";
            const actual = polybius(message);
            const expected = "345131245144 3411334411"

            expect(actual).to.equal(expected);

        });

    })
    describe("decode a message", ()=>{
        it("should decode a message by translating each pair of numbers into a letter", () =>{
            const message = "345131245144";
            const actual = polybius(message, false);
            const expected = "secret"

            expect(actual).to.equal(expected);

        });
        it("should translate 42 to both 'i' and 'j'", () => {
            const message = "42423335";
            const actual = polybius(message, false);


            expect(actual).to.include("i");
            expect(actual).to.include("j");

        });
        it("should leave spaces as is", () => {
            const message = "345131245144 3411334411";
            const actual = polybius(message, false);
            const expected = "secret santa"

            expect(actual).to.equal(expected);

        });
        it("should return false if the length of all numbers is odd", () => {
            const message = "345131245144 341133441";
            const actual = polybius(message, false);

            expect(actual).to.be.false;

        });        
    });
});