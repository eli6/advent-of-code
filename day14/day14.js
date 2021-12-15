const readInput = require('../lib/readInput')
const solution = require('./polymerization2')
let dataFile = "data.txt";
const path = require('path');

(async () => {
    try {
        console.log(`************************************`);
        console.log(`** DAY ${solution.day}:  ${solution.title}  **`);
        console.log(`************************************`); 

        
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let letterCounts = solution.polymerize(dataArray, 40);
        let mostCommonCount = solution.getMostCommonCount(letterCounts);
        let leastCommonCount = solution.getLeastCommonCount(letterCounts);
        let endresult = mostCommonCount-leastCommonCount;

      
       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`${solution.resultMessage} ${endresult}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Analysis failed.`, e);
    }
   
})();