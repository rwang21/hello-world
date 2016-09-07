var fs = require('fs');

function readFile(name, encoding) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(name, encoding, function (err, contents) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(contents);
            });
        }
    );
}

var p = readFile('file.txt', 'utf8');
p.then(
    (val) => {
        return 3;
    }
).then(
    (val) => {
        console.log(val);  // 3
        return 5;
    }
).then(
    (val) => {
        console.log(val);  // 5
    }
).catch(
    (err) => {
        console.log(err);
        // handle all possible problems
    }
);