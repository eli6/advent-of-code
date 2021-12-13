const readInput = require('../lib/readInput')
const solution = require('./paths')
let dataFile = "data.txt";
const path = require('path');

(async () => {
    try {
        console.log(`************************************`);
        console.log(`** DAY ${solution.day}:  ${solution.title}  **`);
        console.log(`************************************`); 

        
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let result = solution.getNumberOfPaths(dataArray);

      
       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`${solution.resultMessage} ${result}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Analysis failed.`, e);
    }
   
})();