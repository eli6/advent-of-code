const Board = require('./board');
const BoardRow = require('./boardRow')

module.exports.performDiagnostic = ()=> {
    
    let diagnostic = {
        gamma: 0,
        epsilon: 0
    }

    return diagnostic;
}


module.exports.getDrawnNumbers = (dataArray) => {

    let drawnArray = String(dataArray[0]).split(",");
    let drawnNumbers = drawnArray.map((element)=> {
        return parseInt(element, 10);
    })

    return drawnNumbers;
}

function getValueMarkedObject(values){
    let splitData = values.split(/\s+/)
    return splitData.map((number) => {
        let obj = {};
        obj.value = number;
        obj.marked = false;
        return obj;
    })
}

module.exports.getBoards = (dataArray) => {

    let boards = new Array();
    let rowArray = new Array();

    for(let i = 2; i < dataArray.length; i++){

        if(dataArray[i]==='') {    //board finished, push finished board to boards array
            boards.push(new Board(rowArray));
            rowArray = new Array();

        } else if(i===dataArray.length-1){ //last row of all boards arrays, read last line then finish.

            let extendedObject = getValueMarkedObject(dataArray[i]);
            rowArray.push(new BoardRow(extendedObject));
            boards.push(new Board(rowArray));
            rowArray = new Array();

        } else { //start or middle row of board
            let extendedObject = getValueMarkedObject(dataArray[i]);
            rowArray.push(new BoardRow(extendedObject));
        }
    }
    return boards;
}


module.exports.playBingo = (boards, draws) => {

    let victoryData = {
        rowScore: 0,
        finalScore: 0,
    }

    for(let draw of draws){
        for(let board of boards){
            let completeRow = board.markAll(draw);
            if(completeRow){
                console.log("Winner found!");
                victoryData.rowScore = board.getSumOfUnmarked();
                victoryData.finalScore = victoryData.rowScore*draw;
                return victoryData;
            }
        }
    }

    return victoryData;

}


