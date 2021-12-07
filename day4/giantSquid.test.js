let testData = "./testdata.txt";
const path = require('path');
const readInput = require('../lib/readInput')
const giantSquid = require('./giantSquid')

test('the drawn numbers should have first value 7 and last value 1', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    // let diagnostic = giantSquid.performDiagnostic(dataArray);
    let drawnArray = giantSquid.getDrawnNumbers(dataArray);
    expect(drawnArray[0]).toBe(7);
    expect(drawnArray[drawnArray.length-1]).toBe(1);

});

test('the boards array should have a length of 3', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    // let diagnostic = giantSquid.performDiagnostic(dataArray);
    let boards = giantSquid.getBoards(dataArray);
    expect(boards.length).toBe(3);
 

});

test('a board should have a length of 5', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    // let diagnostic = giantSquid.performDiagnostic(dataArray);
    let boards = giantSquid.getBoards(dataArray);
    expect(boards[0].length).toBe(5);
 
});


test('when bingo is played, the winning scores should be right', async () => {

    let dataArray = await readInput.readData(path.join(__dirname, testData)); 
    // let diagnostic = giantSquid.performDiagnostic(dataArray);
    let drawnNumbers = giantSquid.getDrawnNumbers(dataArray);
    let boards = giantSquid.getBoards(dataArray);
    let victoryData = giantSquid.playBingo(boards, drawnNumbers);
    expect(victoryData.rowScore).toBe(188);
    expect(victoryData.finalScore).toBe(4512);
 
});