let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const solution = require('./polymerization2.js')


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

test('after step 10 most common element count minus least common should yield 1588', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let counts = solution.polymerize(dataArray, 10);
    let mostCommonCount = solution.getMostCommonCount(counts);
    let leastCommonCount = solution.getLeastCommonCount(counts);
    let endresult = mostCommonCount-leastCommonCount;
    expect(endresult).toBe(1588);

});


