let simpleTestData = "./small_testdata.txt";
let testData = "./testdata.txt";

const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./dumboOctopus.js')


test('there has been 204 flashes after 10 steps', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let result = solution.getFlashesAfterSteps(dataArray, 10);
    expect(result).toBe(204);

});

test('there has been 1656 flashes after 100 steps', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let result = solution.getFlashesAfterSteps(dataArray, 100);
    expect(result).toBe(1656);

});


test('there has been 9 flashes after 2 steps in the simple data', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, simpleTestData)); 
    let result = solution.getFlashesAfterSteps(dataArray, 2);
    expect(result).toBe(9);

});