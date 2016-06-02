import Smoo from "../../src/model/Smoo";
import assert from "assert";
import {describe, it} from "mocha";

describe("A Smoo", function () {
    it("exists", function () {
        var expected = "function";
        var actual = typeof Smoo;
        assert.equal(actual, expected, "Smoo should be a function");
    });
});