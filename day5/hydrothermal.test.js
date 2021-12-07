let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const hydrothermal = require('./hydrothermal')

test('two lines overlap at five points in the test data', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let overlaps = hydrothermal.findDoubleOverlaps(dataArray);
    expect(overlaps).toBe(5);

});