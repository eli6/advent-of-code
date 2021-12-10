let characterIsOpeningCharacter = (char, openingCharList) => {
    let isOpening = openingCharList.includes(char);
    return isOpening;
}

let getAllOpeningCharactersFrom = pairs => {
    return pairs.map(pair => pair.open);
}


let findSyntaxPairFor = openingChar => {
    return function(pair) {
        return pair.open === openingChar
    }
}



// let findInArray = toSearchFor => {
//     let find = '';
//     find = array.find(element => element === toSearchFor);
//     return find;
// }

let getFirstCorruptedCharacter = line => {

    let matchingPairs = [
        {open: "(", close: ")"}, 
        {open: "[", close: "]"},
        {open: "{", close: "}"},
        {open: "<", close: ">"}
    ]

    let openingCharacters = getAllOpeningCharactersFrom(matchingPairs);
    let lineArray = line.trim().split('');
    let firstCorrupted = '';
    let stack = new Array();

    for(let i = 0; i < line.length; i++){

        let thisChar = line[i];
        let isOpening = characterIsOpeningCharacter(line[i], openingCharacters)

        if(characterIsOpeningCharacter(thisChar, openingCharacters))
        {
            stack.push(line[i]);
        } else {
            let lastOpening = stack.pop();
            let correspondingPair = matchingPairs.filter(findSyntaxPairFor(lastOpening));
            if(thisChar === correspondingPair[0].close){
                console.log("right closing!");
            } else {
                console.log("wrong closing");
                return thisChar;
            }
        } 

    }

    return firstCorrupted;
    

}


let getFirstCorrupted = line => {
   
    let firstCorruptedCharacter = '';
    firstCorruptedCharacter = getFirstCorruptedCharacter(line);
    return firstCorruptedCharacter;

}

module.exports.getCorruptedLinesScore = dataArray => {
    let score = 0;

    const scores = [
        { char: ")", score: 3},
        { char: "]", score: 57},
        { char: "}", score: 1197},
        { char: ">", score: 25137}
    ]

    //replace with filter+
    dataArray.forEach(line=>{
        let character = getFirstCorrupted(line);
        let index = scores.findIndex(obj => obj.char === character);
        if(index > -1){
            let lineScore = scores[index].score;
            score+=lineScore;
        }
       
    });

    return score;
}


module.exports.getTotalSyntaxErrorScore = (dataArray)=> {
    
    let score = this.getCorruptedLinesScore(dataArray);
    return score;

}

module.exports.title = "Syntax Errors";
module.exports.day = 10;
module.exports.resultMessage = "The total syntax error score is: "