const dive = require('./dive');
const solve = require('../day1/solve')
let testData = "./testdata_dive.txt";
const path = require('path');


test('after dive operation with test data, horizontal position should be 15', async () => {

    let dataArray = await solve.readData(path.join(__dirname, testData)); 
    let position = dive.driveSubmarine(dataArray);
    expect(position.horizontal).toBe(15);

});


test('after dive operation with test data, depth should be 10', async () => {

    let dataArray = await solve.readData(path.join(__dirname, testData)); 
    let position = dive.driveSubmarine(dataArray);
    expect(position.depth).toBe(10);

});