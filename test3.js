function foo() {
   console.log(this);
   var me = this;
    function bar() {
        console.log(me);
    }
}

var x = foo();
