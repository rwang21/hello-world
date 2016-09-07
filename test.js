function Foo() {
    this.x = 9;
}

Foo.prototype = {
    foo : function() {},
    bar : function() {}
}

f = new Foo();
console.log(f.x);
f.foo();
f.bar();
