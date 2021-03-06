let characterIsOpeningCharacter = (char, openingCharList) => {
    let isOpening = openingCharList.includes(char);
    return isOpening;
}

let getAllPossibleOpeningCharactersFrom = pairs => {
    return pairs.map(pair => pair.open);
}


let findCompletePairFor = openingChar => {
    return function(pair) {
        return pair.open === openingChar
    }
}

let getFirstCorruptedCharacter = line => {

    let matchingPairs = [
        {open: "(", close: ")"}, 
        {open: "[", close: "]"},
        {open: "{", close: "}"},
        {open: "<", close: ">"}
    ]

    let openingCharacters = getAllPossibleOpeningCharactersFrom(matchingPairs);
    let lineArray = line.trim().split('');
    let stack = new Array();

    for(let i = 0; i < line.length; i++){

        let thisChar = line[i];
        let isOpeningChar = characterIsOpeningCharacter(thisChar, openingCharacters)

        if(isOpeningChar)
        {
            stack.push(line[i]);
        } else {
            let lastOpening = stack.pop();
            let correspondingPair = matchingPairs.filter(findCompletePairFor(lastOpening));
            let expectedClosingCharacter = correspondingPair[0].close;
            if(thisChar !== expectedClosingCharacter){
                return thisChar;
            }
        } 

    }

    //no character found.
    return '';
}

let getCorruptedLinesScore = dataArray => {

    const scores = [
        { char: ")", score: 3},
        { char: "]", score: 57},
        { char: "}", score: 1197},
        { char: ">", score: 25137}
    ]

    return dataArray.reduce((accumulator, line) => {
        let character = getFirstCorruptedCharacter(line);
        let scoreIndex = scores.findIndex(obj => obj.char === character);
        if(scoreIndex > -1){
            let lineScore = scores[scoreIndex].score;
            return accumulator+lineScore;
        }
        return accumulator;
    }, 0)

}

module.exports.getCorruptedLinesIn = dataArray => {
    return dataArray.filter(line => {
        return getFirstCorruptedCharacter(line) != '';
    })
}


module.exports.getTotalSyntaxErrorScore = (dataArray)=> {

    let corruptedLines = this.getCorruptedLinesIn(dataArray);
    let score = getCorruptedLinesScore(corruptedLines);
    return score;
}

module.exports.title = "Syntax Errors";
module.exports.day = 10;
module.exports.resultMessage = "The total syntax error score is: "