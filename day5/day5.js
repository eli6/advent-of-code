const readInput = require('../lib/readInput')
const hydrothermal = require('./hydrothermal')
let dataFile = "data.txt";
const path = require('path');

const EventEmitter = require('events');

(async () => {
    try {

      

        console.log(`************************************`);
        console.log(`***  DAY 5: HYDROTHERMAL VENTS  ****`);
        console.log(`************************************`);
        console.log("Calculating overlaps.");
        console.log("Progress: ");

        let counter = 0;
        const eventEmitter = new EventEmitter();
        eventEmitter.on('fivepercent', () => {
            counter += 1;
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(counter + "%");
            //process.stdout.write("\n"); // end the line
          });


        let dataArray = await readInput.readData(path.join(__dirname, dataFile)); 
        let overlaps = hydrothermal.findDoubleOverlaps(dataArray, eventEmitter);

        process.stdout.write("\n");
        console.log(`Finished. Number of overlaps: ${overlaps}`);  
        console.log(`************************************`)

    } catch(e)
    {
        console.log(`Hydrothermal vents overlaps analysis failed.`, e);
    }
   
})();