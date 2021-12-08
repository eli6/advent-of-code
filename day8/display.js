let getUniqueLengthEntriesIn = (array) => {

    let hasSameLengthAs = (entryToCount)=> {
        return function(element){
            return entryToCount.length === element.length;
        }
    }
    let uniqueLengthEntries = array.filter(entry => {
        let allOfSameLength = array.filter(hasSameLengthAs(entry));
        if(allOfSameLength.length === 1){
            return allOfSameLength;
        }
    })

    return uniqueLengthEntries;
}


module.exports.getEasyNumberCount = (dataArray) => {
    
    let numberCount = dataArray.reduce((acc,line) => {

        //split input in two halves
        let digits = line.trim().split("|");

        //then split the combinations into one array
        let combinations = digits[0].trim().split(/\s+/);

        //and the output sequences into another array
        let output = digits[1].trim().split(/\s+/);


        let hasSameCountAs = (entryToSearch)=> {
            return function(element){
                return entryToSearch === element;
            }
        }

        let uniqueLengthEntries = getUniqueLengthEntriesIn(combinations);
       
        //sort all the letters of each combination
        let sortedCombinations = uniqueLengthEntries.map(entry => { return entry.toString().split('').sort().join('')});
        
        //sort all letters of the output
        let sortedOutput = output.map(entry => { return entry.toString().split('').sort().join('')});

        let numberEasyLettersThisLine = sortedCombinations.reduce((accumulator, currVal)=> {
            let sameCount = sortedOutput.filter(hasSameCountAs(currVal)).length;
            if(sameCount > 0)
                return accumulator+sameCount;

            return accumulator;
        }, 0);

        return acc+numberEasyLettersThisLine;
        
    }, 0)

    return numberCount;

}