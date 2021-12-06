const readInput = require('../lib/readInput')
const binaryDiagnostic = require('./binaryDiagnostic')
let dataFile = "data.txt";
const path = require('path');


(async () => {
    try {
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let diagnostic = binaryDiagnostic.getDiagnosticsResult(dataArray);
      
        console.log(`************************************`);
        console.log(`***      DAY 3: DIAGNOSTICS     ****`);
        console.log(`************************************`); 
       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`This yields a product of ${diagnostic}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Diagnostics failed.`, e);
    }
   
})();