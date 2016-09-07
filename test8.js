var fs = require('fs');

fs.readFile('file.txt', 'utf8', function(err, contents) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(contents);

});

console.log('after calling readfile');