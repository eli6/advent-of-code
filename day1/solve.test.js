const solve = require('./solve');
const dataFile = "testdata.txt";

test('countIncreases counts number of increases in data series', () => {
  expect(solve.countIncreases(dataFile)).toBe(7);
});


test('readFile creates an array with 10 entries from the testfile', () => {
    expect(solve.readData(dataFile).length).toBe(7);
});