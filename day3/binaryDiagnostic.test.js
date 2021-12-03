let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const binaryDiagnostic = require('./binaryDiagnostic')

test('the input data should yield a gamma bit rate of 10110', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let diagnostic = binaryDiagnostic.performDiagnostic(dataArray);
    expect(diagnostic.gamma).toBe(10110);

});