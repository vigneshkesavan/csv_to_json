const csvjson = require('csvjson');
const readFile = require('fs').readFile;
var fs = require('fs');
readFile('./g2_input.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
    const jsonObj = csvjson.toObject(fileContent);
    console.log(jsonObj);
	fs.writeFile ("myjsonfile.json", JSON.stringify(jsonObj,null,2), function(err) {
    if (err) throw err;
    console.log('complete');
    }
	);
});
