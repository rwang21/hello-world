function foo() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
            (() => {
                var j = i;
                arr.push(
                    () => {
                    console.log(j);
                });
            })();
    }

    return arr;

}

var fs = foo();
for (var f of fs) {
    f();
}