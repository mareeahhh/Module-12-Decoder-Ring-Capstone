// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutionModule", () => {
    describe("handle all errors", () => {
        it("should return false if the substitution alphabet is missing", () => {
            const message = "secret";
            const actual = substitution(message);
            
            expect(actual).to.be.false;
        });
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            const message = "secret";
            const alphabet = "grinch";
            const actual = substitution(message, alphabet);
            
            expect(actual).to.be.false;
        });
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            const message = "secret";
            const alphabet = "santa";
            const actual = substitution(message, alphabet);
      
            expect(actual).to.be.false;
        })
    
    })

    describe("encode a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const message = "secret";
            const alphabet = "opqbcwsradgjvzulykhmifetnx";
            const actual = substitution(message, alphabet);
            const expected = "kbqybh";
        });
        it("should work with any kind of key with unique characters", () => {
            const message = "secret";
            const alphabet = "yd!tfexlamgcjbkuspvhiqrznw";
            const actual = substitution(message, alphabet);
            const expected = "pf!sfv";
        });
        it("should preserve spaces", () => {
            const message = "secret santa";
            const alphabet = "opqbcwsradgjvzulykhmifetnx";
            const actual = substitution(message, alphabet);
            const expected = "kbqybh kovho";
        })
    
    })

    describe("decode a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            const message = "hcqkcm";
            const alphabet = "opqbcwsradgjvzulykhmifetnx";
            const actual = substitution(message, alphabet, false);
            const expected = "secret";

            expect(actual).to.equal(expected);
        });
        it("should work with any kind of key with unique characters", () => {
            const message = "vF!pfh";
            const alphabet = "yd!tfexlamgcjbkuspvhiqrznw";
            const actual = substitution(message, alphabet, false);
            const expected = "secret";

            expect(actual).to.equal(expected);
        });
        it("should preserve spaces", () => {
            const message = "hcqkcm hozmo";
            const alphabet = "opqbcwsradgjvzulykhmifetnx";
            const actual = substitution(message, alphabet, false);
            const expected = "secret santa";

      expect(actual).to.equal(expected);
        })
    
    })
})