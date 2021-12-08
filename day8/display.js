module.exports.getEasyNumberCount = (dataArray, eventEmitter) => {
    
    let numberCount = 0;

    dataArray.forEach(line => {

        let digits = line.trim().split("|");
        let combinations = digits[0].trim().split(/\s+/);
        let output = digits[1].trim().split(/\s+/);
        let hej = 45;

        let filterFunc = (entryToCount)=> {
            return function(element){
                return entryToCount.length === element.length;
            }
        }

        let findSame = (entryToSearch)=> {
            return function(element){
                return entryToSearch === element;
            }
        }

        let uniqueLengthEntries = new Array();

        combinations.forEach(combination=> {
            let allOfSameLength = combinations.filter(filterFunc(combination));
            if(allOfSameLength.length === 1){
                uniqueLengthEntries.push(allOfSameLength);
            }
        })

        let sortedCombinations = uniqueLengthEntries.map(entry => { return entry.toString().split('').sort().join('')});
        
        let sortedOutput = output.map(entry => { return entry.toString().split('').sort().join('')});

        let numberOfCombinationsInOutput = sortedCombinations.forEach(combination => {
            let sameCount = sortedOutput.filter(findSame(combination)).length;

            if(sameCount > 0){
                numberCount+=sameCount;
            }

        })
        let hej4 = 45;
    })

    return numberCount;
}