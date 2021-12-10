let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./syntaxError.js')

test('the total syntax error score for the test data should be 26397', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let result = solution.getTotalSyntaxErrorScore(dataArray);
    expect(result).toBe(26397);

});

test('there should be 5 corrupted lines in the test data', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let result = solution.getCorruptedLinesFrom(dataArray);
    expect(result.length).toBe(5);

});