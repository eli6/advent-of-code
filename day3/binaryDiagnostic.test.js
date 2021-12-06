let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const binaryDiagnostic = require('./binaryDiagnostic')

test('the input data should yield a gamma bit rate of 10110', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let diagnostic = binaryDiagnostic.performDiagnostic(dataArray);
    expect(diagnostic.gamma).toBe(22);

});

test('the input data should yield an epsilon bit rate of 01001', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let diagnostic = binaryDiagnostic.performDiagnostic(dataArray);
    expect(diagnostic.epsilon).toBe(9);

});

test('the factor of both number should be 198 ', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    let diagnostic = binaryDiagnostic.getDiagnosticsResult(dataArray);
    expect(diagnostic).toBe(198);

});