const readInput = require('../lib/readInput')
const hydrothermal = require('./hydrothermal')
let dataFile = "data.txt";
const path = require('path');


(async () => {
    try {

        console.log(`************************************`);
        console.log(`***  DAY 5: HYDROTHERMAL VENTS  ****`);
        console.log(`************************************`); 

        
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let overlaps = hydrothermal.findDoubleOverlaps(dataArray);

      
       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`Number of overlaps: ${overlaps}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Hydrothermal vents overlaps analysis failed.`, e);
    }
   
})();