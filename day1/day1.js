const solve = require('./solve');
let dataFile = "data.txt";

(async () => {
    try {
        let dataArray = await solve.readData(dataFile); 
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