function foo() {
    var a = 2;
    function bar() {
        a = a +3;
        return a;
    }

    return bar;
}

var x = foo();
console.log(x());
console.log(x());
console.log(x());

var y = foo();
console.log(y());
console.log(y());
console.log(y());