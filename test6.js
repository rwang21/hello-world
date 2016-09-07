function sum(...nums) {
    var sum = 0;

    if (nums.length === 0) {
        return sum;
    }

    if (isNaN(i)) {
           throw new Exception();
    }


    for (var i of nums) {
        sum += i;
    }

    return sum;

}

function sum2() {
    var sum = 0;

    if (arguments.length === 0) {
        return sum;
    }

    for (var i of arguments) {
        sum += arguments[i];
    }

    return sum;

}

console.log(sum(5, -3, 11));
console.log(sum2());

function upperJoin(...strs) {
    var str = '';

    if (strs.length === 0) {
        return str;
    }

    for (var astr of strs) {
        str += astr.toUpperCase();
    }

    return str;

}

console.log(upperJoin("hi",  "bye", "yo"));

