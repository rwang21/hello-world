var fs = require('fs');
var os = require("os");   
var crlf = os.EOL;

function readFile(name, encoding) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('file.txt', 'utf8', function(err, contents) {
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
       console.log(val);
       return 3;
    },

    (err) => {
        console.log(err);
    }

).then(

    (val) => {
       console.log(val);
       return 5;
    },

    (err) => {
        console.log(err);
    }

).then(

    (val) => {
        console.log(val);
    },

    (err) => {
        console.log(err);
    }

);
