const readInput = require('../lib/readInput')
const solution = require('./trenchmap')
let dataFile = "data.txt";
//5326
const path = require('path');

(async () => {
    try {
        console.log(`************************************`);
        console.log(`** DAY ${solution.day}:  ${solution.title}  **`);
        console.log(`************************************`); 
        
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let height = solution.getNrOfLitPixels(dataArray,50);

       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`${solution.resultMessage} ${height}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Analysis failed.`, e);
    }
   
})();