let testData = "./data2.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const display = require('./display')

test('two lines overlap at five points in the test data', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let overlaps = display.getEasyNumberCount(dataArray);
    expect(overlaps).toBe(26);

});

