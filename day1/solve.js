var fs = require('fs');
var readline = require('readline');
const path = require('path');
const { resolve } = require('path');


module.exports.countIncreases = (dataArray) => {
    return 0;
}

module.exports.readData = async (dataFile) => {

    return new Promise((resolve, reject) => {

        const filePath = path.join(__dirname, dataFile);
        let readLineInterface = readline.createInterface({
            input: fs.createReadStream(filePath),
            console: false
        })

        let inputList = new Array();

        readLineInterface.on("line", line => {
            inputList.push(line.trim());
            console.log(line);
        }).on("error", error => {
            console.log(error);
            reject(new Array());
        }).on("close", ()=>{
            resolve(inputList);
        })
    });
}