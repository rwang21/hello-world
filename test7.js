
//read a file that is a list of words
//split the string by line into an array
//sorts the words alphabetically
//write the sorted wordss to another file

var fs = require('fs');
var os = require("os");   
var crlf = os.EOL;

fs.readFile('file.txt', 'utf8', function(err, contents) {
    if (err) {
        console.log(err);
        return;
    }

    var arr = contents.split(crlf);

    arr.sort();
    fs.writeFile("./output.txt", arr.join(crlf), function(err) {
        if(err) {
                console.log(err);
        } 
        else {
            console.log("Output saved to /output.txt.");
        }
        });

})
