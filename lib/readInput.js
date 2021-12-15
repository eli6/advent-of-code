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


module.exports.splitAtEmptyLine = dataArray => {

    let part1End = dataArray.indexOf('');
    let firstPart = dataArray.splice(0, part1End);
    let lastPart = dataArray.splice(1, dataArray.length);

    return [firstPart, lastPart];
}

