const lib = require('../lib/readInput');


let getAllPairsFrom = string => {
    let templateArray = string.split('');
    let pairs = templateArray.map((value, index, array) => {
        if(index < array.length-1)
            return value+array[index+1];
    })
    return pairs;
}

module.exports.polymerize = (inputArray, insertCount) => {

    let parts = lib.splitAtEmptyLine(inputArray);
    let polymerTemplate = parts[0];
    let pairInsertions = parts[1];

    let pairInsertionMap = new Map();

    //get insertion mappings.
    pairInsertions.forEach(pair => {
        let replacementPair = pair.trim().split('->').map(string => string.trim());
        pairInsertionMap.set(replacementPair[0], replacementPair[1]);
    })

    let polymerString = polymerTemplate[0];

    //get all pairs.
    let pairs = getAllPairsFrom(polymerString);

    //initial counting of pairs.
    let county = new Map();
    pairs.forEach(pair => {
        county.get(pair) ? county.set(pair, county.get(pair)+1) : county.set(pair, 1);
    })

    //initial counting of letters
    let letterCount = new Map();
    for(let letter of polymerString){
        letterCount.get(letter) ? letterCount.set(letter, letterCount.get(letter)+1) : letterCount.set(letter, 1);
    }

    //make insertions
    for(let i = 0; i < insertCount; i++)
    {
        let temp = new Map();

       //all this simultaneously
        let countykeys = [...county.keys()]
        countykeys.forEach(pair => {
            if(pairInsertionMap.has(pair))
            {
                let pairCount = county.get(pair);
                let insertionChar = pairInsertionMap.get(pair);
                //count the new character.
                letterCount.get(insertionChar) ? letterCount.set(insertionChar, letterCount.get(insertionChar)+pairCount) : letterCount.set(insertionChar,1);
                
                let firstPair = pair.slice(0,1)+insertionChar;
                let secondPair = insertionChar+pair.slice(1);

                temp.get(firstPair) ? temp.set(firstPair, temp.get(firstPair)+pairCount) : temp.set(firstPair, pairCount);
                temp.get(secondPair) ? temp.set(secondPair, temp.get(secondPair)+pairCount) : temp.set(secondPair, pairCount);
            }
        })

        county = temp;
    }
    
    return letterCount;

}

let getCounts = string => {
    let counts = new Map();
    string.split('').forEach(char => {
        counts.get(char) ? counts.set(char, counts.get(char)+1) : counts.set(char, 1); 
    })
    return counts;
}

module.exports.getMostCommonCount = countsMap => {
    return Math.max(...countsMap.values());

}

module.exports.getLeastCommonCount = countsMap => {
    return Math.min(...countsMap.values());
}


module.exports.title = "Polymerization";
module.exports.day = 14;
module.exports.resultMessage = "Result is: "