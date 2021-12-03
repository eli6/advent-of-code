let dataFile = "testdata.txt";
const readInput = require('./readInput');
const path = require('path');


test('readFile creates an array with 10 entries from the first testfile', async () => {

    let solutionArray = await readInput.readData(path.join(__dirname, dataFile));
    expect(solutionArray.length).toBe(10);
});