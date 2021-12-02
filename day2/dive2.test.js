const dive = require('./dive2');
const solve = require('../day1/solve')
let testData = "./testdata_dive.txt";
const path = require('path');


test('after dive operation with test data, horizontal position should be 15', async () => {

    let dataArray = await solve.readData(path.join(__dirname, testData)); 
    let position = dive.driveSubmarine(dataArray);
    expect(position.horizontal).toBe(15);

});


test('after dive operation with test data, depth should be 60', async () => {

    let dataArray = await solve.readData(path.join(__dirname, testData)); 
    let position = dive.driveSubmarine(dataArray);
    expect(position.depth).toBe(60);

});

test('after running submarine, multiplying horizontal position with depth should give 900', async () => {

    let dataArray = await solve.readData(path.join(__dirname, testData)); 
    let position = dive.driveSubmarine(dataArray);
    let product = dive.createPositionProduct(position);
    expect(product).toBe(900);

});