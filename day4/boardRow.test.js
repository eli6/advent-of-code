let BoardRow = require('./boardRow');

test('sum of the unmarked numbers in a board row should be 12', async () => {

    let markableNumbers = [{value: 4, marked: true},{value: 5, marked: false}, {value:7, marked: false}];
    let boardRow = new BoardRow(markableNumbers);
    expect(boardRow.getSumOfUnmarked()).toBe(12);
 
});