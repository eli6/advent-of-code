
module.exports.getCorruptedLinesFrom = dataArray => {
    let corruptedLines = Array();

    //replace with filter+
    // dataArray.forEach(line=>{
    //     if(lineIsCorrupted(line)){
    //         corruptedLines.push(line);
    //     };
    // });

    return corruptedLines;
}


module.exports.getTotalSyntaxErrorScore = (dataArray)=> {
    
    let heightmap = this.getCorruptedLinesFrom(dataArray);

    return 0;

}

module.exports.title = "Syntax Errors";
module.exports.day = 10;
module.exports.resultMessage = "The total syntax error score is: "