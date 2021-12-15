const lib = require('../lib/readInput');


module.exports.polymerize = (inputArray, insertCount) => {

    let parts = lib.splitAtEmptyLine(inputArray);
    let polymerTemplate = parts[0];
    let pairInsertions = parts[1];

    let pairInsertionMap = new Map();
    pairInsertions.forEach(pair => {
        let replacementPair = pair.trim().split('->').map(string => string.trim());
        pairInsertionMap.set(replacementPair[0], replacementPair[1]);
    })


    let polymerString = polymerTemplate[0];

    let county = new Map();
 
    for(let i = 0; i < insertCount; i++)
    {
        let templateArray = polymerString.split('');
        let pairs = templateArray.map((value, index, array) => {
            if(index < array.length-1)
                return value+array[index+1];
        })

        let temp = [];
        pairs.forEach(pair => {
            if(pairInsertionMap.has(pair))
            {
                let insertionChar = pairInsertionMap.get(pair);
                county.set(pair.slice(0,1) + insertionChar, 1);
                county.set(insertionChar + pair.slice(1), 1);
                temp.push([pair.slice(0,1), insertionChar, pair.slice(1)].join(''));
            }
        
        })

        let mergeReady = temp.map((trio, index, array) => {
            if(index > 0){
                return trio.slice(1);
            } else     {
                return trio;
            }
        })

            
        polymerString = mergeReady.join('');
    
    }
    
    return polymerString;

}

let getCounts = string => {
    let counts = new Map();
    string.split('').forEach(char => {
        counts.get(char) ? counts.set(char, counts.get(char)+1) : counts.set(char, 1); 
    })
    return counts;
}

module.exports.getMostCommonCount = string => {
    let counts = getCounts(string);
    return Math.max(...counts.values());

}

module.exports.getLeastCommonCount = string => {
    let counts = getCounts(string);
    return Math.min(...counts.values());
}


module.exports.title = "Polymerization";
module.exports.day = 14;
module.exports.resultMessage = "Result is: "