let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./folds.js')


test('after one fold, only 17 dots should be visible', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let result = solution.getDotsFromFolding(dataArray, 1);
    expect(result).toBe(17);

});

test('after two folds, 16 dots should be visible', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let result = solution.getDotsFromFolding(dataArray, 2);
    expect(result).toBe(16);

});

