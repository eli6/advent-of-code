const solve = require('./solve');
let dataFile = "testdata.txt";
let dataFile2 = "testdata2.txt";

const path = require('path');


test('countIncreases counts number of increases correctly in first test data', async () => {

    let dataArray = await solve.readData(path.join(__dirname, dataFile));
    expect(solve.countIncreases(dataArray)).toBe(7);
});

test('countIncreases counts number of increases correctly in second test data', async () => {

    let dataArray = await solve.readData(path.join(__dirname, dataFile2)); 
    expect(solve.countIncreases(dataArray)).toBe(2);
});


