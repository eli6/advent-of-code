const solve = require('../day1/solve');
const dive = require('./dive2');
let dataFile = "diveData.txt";
const path = require('path');


(async () => {
    try {
        let dataArray = await solve.readData(path.join(__dirname, dataFile)); 
        let position = dive.driveSubmarine(dataArray);
        let product = dive.createPositionProduct(position);
        console.log(`************************************`);
        console.log(`***     DAY 2: DIVE - part 2   ****`);
        console.log(`************************************`); 
        console.log(`Position is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`This yields a produt of ${product}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Sonar sweep failed.`, e);
    }
   
})();