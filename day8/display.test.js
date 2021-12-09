let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const display = require('./display')

test('there should be 26 easy numbers in the test data ', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let overlaps = display.getEasyNumberCount(dataArray);
    expect(overlaps).toBe(26);

});

