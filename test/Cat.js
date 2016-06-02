import {createCat as createCat} from "../src/Cat";
import {describe, it, beforeEach} from "mocha";
import assert from "assert";

describe("A Cat", function () {
    var cat;
    beforeEach(function () {
        cat = createCat();
    });
    it("has clicks", function () {
        var expected = 0;
        var actual = cat.clicks;
        assert.equal(actual, expected, "cat should have 0 clicks");
    });
    it("cannot set clicks directly", function () {
        try {
            cat.clicks = 1;
        } catch (ignored) {}
        var expected = 0;
        var actual = cat.clicks;
        assert.equal(actual, expected, "cat should still have 0 clicks");
    });
    it("can increment the number of clicks", function () {
        cat.increment();
        var expected = 1;
        var actual = cat.clicks;
        assert.equal(actual, expected, "cat should now have 1 click");
        cat.increment();
        cat.increment();
        cat.increment();
        expected = 4;
        actual = cat.clicks;
        assert.equal(actual, expected, "cat should now have 4 clicks");
    });
    it("conforms to a fluent interface", function () {
        var expected = 1;
        var actual = cat.increment().clicks;
        assert.equal(actual, expected, "cat should have 1 click and shouldn't have thrown an exception");
    });
});