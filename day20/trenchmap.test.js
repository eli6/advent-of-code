let testData = "./testdata.txt";
let otherData = "./otherData.txt"
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./trenchmap.js')


test('after two enhancements, 35 pixels should be lit in the test data', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let litPixels = solution.getNrOfLitPixels(dataArray, 2);
    expect(litPixels).toBe(35);

});


test('after two enhancements, 5326  pixels should be lit in the larger test data', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, otherData)); 
    let litPixels = solution.getNrOfLitPixels(dataArray, 2);
    expect(litPixels).toBe(5326);

});
