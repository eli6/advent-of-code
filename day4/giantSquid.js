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

module.exports.getBoards = (dataArray) => {

   // let drawnArray = String(dataArray[0]).split(",");
    let boards = new Array();

    let oneBoard = new Array();
    for(let i = 2; i < dataArray.length; i++){
        if(dataArray[i]==='') {

            boards.push(oneBoard);
            oneBoard = new Array();

        } else if(i===dataArray.length-1){

            let splitData = dataArray[i].split(/\s+/)
            let mappedSplit = splitData.map((number) => {
                let obj = {};
                obj.number = number;
                obj.marked = false;
                return obj;
            })

            let obj = {
                numbers: mappedSplit,
                rowMarks: 0
            };
            oneBoard.push(obj);

            oneBoard.push(obj);
            boards.push(oneBoard);
        
            oneBoard = new Array();

        } else { //just push one more row.

            let rowString = dataArray[i].split(/\s+/)
            let mappedSplit = rowString.map((number) => {
                let obj = {};
                obj.number = number;
                obj.marked = false;
                return obj;
            })
            let obj = {
                numbers: mappedSplit,
                rowMarks: 0
            };
            oneBoard.push(obj);
        }
    }
    return boards;
}


module.exports.playBingo = (boards, draws) => {

    let victoryData = {
        rowScore: 0,
        finalScore: 0,
    }

    return victoryData;

}


