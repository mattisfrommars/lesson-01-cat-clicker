import Cat from "../src/Cat";
import {describe, it, beforeEach} from "mocha";
import assert from "assert";

describe("A Cat", function () {
    var cat;
    beforeEach(function () {
        cat = new Cat();
    });
    it("has clicks", function () {
        var expected = 0;
        var actual = cat.clicks;
        assert.equal(expected, actual);
    });
});