var fs = require('fs');
var readline = require('readline');
const path = require('path');
const { resolve } = require('path');


module.exports.countIncreases = (dataArray) => {

    let res = dataArray.reduce((accumulator, currValue, currIndex, array) => {
        if(currIndex > 0 && currValue > array[currIndex-1])
            return accumulator+1;
        
        return accumulator;
    }, 0)

    return res;
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
        }).on("error", error => {
            reject(new Array());
        }).on("close", ()=>{
            resolve(inputList);
        })
    });
}