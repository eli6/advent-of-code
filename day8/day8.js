const readInput = require('../lib/readInput')
const solution = require('./display')
let dataFile = "data.txt";
const path = require('path');

(async () => {
    try {

        let counter = 0;

        console.log(`************************************`);
        console.log(`*****  DAY 8:  BROKEN DISPLAY  *****`);
        console.log(`************************************`); 

        
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let result = solution.getEasyNumberCount(dataArray);

      
       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`Number of easy numbers: ${result}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Display analysis failed.`, e);
    }
   
})();