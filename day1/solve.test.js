const solve = require('./solve');
let dataFile = "testdata.txt";
let dataFile2 = "testdata2.txt";

test('countIncreases counts number of increases in data series', async () => {

    let dataArray = await solve.readData(dataFile); 
    expect(solve.countIncreases(dataArray)).toBe(7);
});

test('countIncreases counts number of increases in data series', async () => {

    let dataArray = await solve.readData(dataFile2); 
    expect(solve.countIncreases(dataArray)).toBe(2);
});


test('readFile creates an array with 10 entries from the testfile', async () => {

    let solutionArray = await solve.readData(dataFile);
    expect(solutionArray.length).toBe(10);
});