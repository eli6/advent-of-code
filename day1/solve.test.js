const solve = require('./solve');
const dataFile = "testdata.txt";

test('counts number of increases in data series', () => {
  expect(solve.countIncreases(dataFile)).toBe(7);
});