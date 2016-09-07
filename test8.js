
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

    arr.sort(function (a,b) {
         if (typeof (a) === 'strig' && typeof(b) === 'string') {
             s = a.toLowerCase();
             b = b.toLowerCase();
         }

         if (a > b) {
             return 1;
         }

          if (a < b) {
             return -1;
         }

         if (a === b) {
             return 0;
         }
    })
   fs.writeFile("./output.txt", arr.join(crlf), function(err) {
    if(err) {
            console.log(err);
    } 
    else {
        console.log("Output saved to /output.txt.");
    }
    });

})
