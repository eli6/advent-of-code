const readInput = require('../lib/readInput')
const solution = require('./smokeBasin')
let dataFile = "data.txt";
const path = require('path');

(async () => {
    try {

        let counter = 0;

        console.log(`************************************`);
        console.log(`*****  DAY 9:  HEIGHTMAP  *****`);
        console.log(`************************************`); 

        
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let result = solution.getRiskLevelSum(dataArray);

      
       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`Risk level: ${result}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Display analysis failed.`, e);
    }
   
})();