let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const giantSquid = require('./giantSquid')

test('the drawn numbers should have first value 7 and last value 1', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    // let diagnostic = giantSquid.performDiagnostic(dataArray);
    let drawnArray = giantSquid.getDrawnNumbers(dataArray);

    expect(drawnArray[0]).toBe(7);
    expect(drawnArray[drawnArray.length-1]).toBe(1);

});