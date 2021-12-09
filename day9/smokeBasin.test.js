let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./smokeBasin')

test('the risk level of the test heightmap should be 15', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let riskLevel = solution.getRiskLevelSum(dataArray);
    expect(riskLevel).toBe(15);

});