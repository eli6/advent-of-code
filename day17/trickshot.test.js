let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./trickshot.js')


test('an initial velocity that causes the probe to land in the right area of test data is [7,2]', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let [hitsTarget,height] = solution.sendProbeWithVelocity(dataArray, [7,2]);
    expect(hitsTarget).toBe(true);

});

test('an initial velocity that causes the probe to land in the right area of test data is [6,3]', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let [hitsTarget, height] = solution.sendProbeWithVelocity(dataArray, [6,3]);
    expect(hitsTarget).toBe(true);

});

test('an initial velocity that misses the right area of test data is [17,-4]', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let [hitsTarget, height] = solution.sendProbeWithVelocity(dataArray, [17,-4]);
    expect(hitsTarget).toBe(false);

});

test('max height of test data should be 45', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let height = solution.findMaxY(dataArray);
    expect(height).toBe(45);

});


test('the highest y value that can be used for the test data is 9', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let [hitsTarget, height] = solution.sendProbeWithVelocity(dataArray, [7,2]);
    expect(hitsTarget).toBe(true);

});


