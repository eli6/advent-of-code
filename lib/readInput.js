var fs = require('fs');
var readline = require('readline');

module.exports.readData = async (dataFile) => {

    return new Promise((resolve, reject) => {

        let rs = fs.createReadStream(dataFile);
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

