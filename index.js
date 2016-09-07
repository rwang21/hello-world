var fs = require('fs');
var os = require("os");   
var crlf = os.EOL;

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

function writeFile(name, contents) {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(name, contents, function(err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve('success');
                }
            });
        }
    );
}

var p = readFile('file.txt', 'utf8');
p.then(
    (val) => {
        var arr = val.split(crlf);
        arr.sort();
        return writeFile('output.txt', arr.join(crlf));
    }
).then(
    (val) => {
        console.log(val);
    }
).catch(
    (err) => {
        console.log(err);
        // handle all possible problems
    }
);

exports.writeFile = writeFile;
exports.readFile = readFile;