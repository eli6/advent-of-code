const readInput = require('../lib/readInput')
const giantSquid = require('./giantSquid')
let dataFile = "data.txt";
const path = require('path');


(async () => {
    try {
        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        // let diagnostic = giantSquid.performDiagnostic(dataArray);
        let drawnNumbers = giantSquid.getDrawnNumbers(dataArray);
        let boards = giantSquid.getBoards(dataArray);
        let victoryData = giantSquid.playBingo(boards, drawnNumbers);
      
        console.log(`************************************`);
        console.log(`***      DAY 3: DIAGNOSTICS     ****`);
        console.log(`************************************`); 
       // console.log(`PRODUCT is: horizontal ${position.horizontal}, vertical ${position.depth}`);
        console.log(`The final score is ${victoryData.finalScore}`);  
        console.log(`************************************`)  
    } catch(e)
    {
        console.log(`Diagnostics failed.`, e);
    }
   
})();