let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./trickshot.js')


// test('after step 5 the polymer should have length 97', async () => {

//     let dataArray = await readInput.readData(path.join(__dirname, testData)); 
//     let letterCount = solution.polymerize(dataArray, 4);
//     expect(result.length).toBe(97);

// });


// test('after step 10 the polymer should have length 3073', async () => {

//     let dataArray = await readInput.readData(path.join(__dirname, testData)); 
//     let result = solution.polymerize(dataArray, 10);
//     expect(result.length).toBe(3073);

// });

test('an initial velocity that causes the probe to land in the right area of test data is [7,2]', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let hitsTarget = solution.sendProbeWithVelocity(dataArray, [7,2]);
    expect(hitsTarget).toBe(true);

});


test('the highest y value that can be used for the test data is 9', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let hitsTarget = solution.sendProbeWithVelocity(dataArray, [7,2]);
    expect(hitsTarget).toBe(true);

});


