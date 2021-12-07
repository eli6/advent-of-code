let Board = require('./board');
const BoardRow = require('./boardRow');

test('sum of all unmarked should be right', async () => {

    let markableNumbers1 = [{value: 4, marked: true},
        {value: 5, marked: false},
         {value:7, marked: false}];

    let markableNumbers2 = [{value: 4, marked: true},
    {value: 5, marked: false},
        {value:8, marked: false}];

    let boardRows = new Array();
    boardRows.push(new BoardRow(markableNumbers1));
    boardRows.push(new BoardRow(markableNumbers2));

    let board = new Board(boardRows);

    expect(board.getSumOfUnmarked()).toBe(25);
 
});


test('marking all occurencies of 5 should give an unmarked sum of 23', async () => {

    let markableNumbers1 = [{value: 4, marked: false},
        {value: 5, marked: false},
         {value:7, marked: false}];

    let markableNumbers2 = [{value: 4, marked: false},
    {value: 5, marked: false},
        {value:8, marked: false}];

    let boardRows = new Array();
    boardRows.push(new BoardRow(markableNumbers1));
    boardRows.push(new BoardRow(markableNumbers2));

    let board = new Board(boardRows);
    board.markAll(5);

    expect(board.getSumOfUnmarked()).toBe(23);
 
});