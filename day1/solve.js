var fs = require('fs');
var readline = require('readline');
const path = require('path');


module.exports.countIncreases = (dataArray) => {

    let res = dataArray.reduce((accumulator, currValue, currIndex, array) => {

        let currentValueNum = new Number(currValue);
        let lastValueNum = new Number(array[currIndex-1]);

        if(currIndex < 1){
            return accumulator;
        }

        if(currentValueNum > lastValueNum)
            return accumulator+1;

        
        return accumulator;
    }, 0)

    return res;
}

module.exports.readData = async (dataFile) => {

    return new Promise((resolve, reject) => {

        const filePath = path.join(__dirname, dataFile);

        let rs = fs.createReadStream(filePath);
        rs.on('error', error => reject(error.message));

        let readLineInterface = readline.createInterface({
            input: rs,
            console: false
        })

        let inputList = new Array();

        readLineInterface.on("error", error => {
            reject(error);
        })

        readLineInterface.on("line", line => {
            inputList.push(line.trim());
        })
        
        readLineInterface.on("close", ()=>{
            resolve(inputList);
        })
    });
}