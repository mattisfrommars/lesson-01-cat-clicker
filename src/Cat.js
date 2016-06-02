// class definition
function Cat () {
    // private properties
    var clicks = 0;
    Object.defineProperties(this, {
        "clicks": {
            enumerable: true,
            get () {
                return clicks;
            }
        },
        "increment": {
            value: function () {
                clicks += 1;
                return this;
            }
        }
    });
}
// factory methods e.g. createCatWithFooBarBaz(foo,bar,baz)
function createCat () {
    return new Cat();
}

export {createCat}