const solve = require('./solve');
let dataFile = "data.txt";
const path = require('path');


(async () => {
    try {
        let dataArray = await solve.readData(path.join(__dirname, dataFile)); 
        let counts = solve.countIncreases(dataArray);
        console.log(`************************************`);
        console.log(`***    WELCOME TO SONAR SWEEP   ****`);
        console.log(`************************************`); 
        console.log(`Found ${counts} depth increases in data`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Sonar sweep failed.`, e);
    }
   
})();