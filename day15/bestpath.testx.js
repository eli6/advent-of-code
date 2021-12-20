let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./bestpath.js')

test('the best path through the matrix should be 40', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let lowestRisk = solution.getPathWeight(dataArray);
    expect(lowestRisk).toBe(40);

});


