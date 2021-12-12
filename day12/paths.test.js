let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./paths.js')


test('there are 10 paths through the test tree', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let result = solution.getNumberOfPaths(dataArray);
    expect(result).toBe(10);

});

