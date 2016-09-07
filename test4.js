function foo() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
            (function () {
                var j = i;
                arr.push(function() {
                    console.log(j);
                });
            }());
    }

    return arr;

}

var fs = foo();
for (var f of fs) {
    f();
}