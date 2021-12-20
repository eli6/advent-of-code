const Coordinate = require('../lib/coordinates').Coordinate;
const lib = require('../lib/coordinates');

module.exports.title = "Trench Map";
module.exports.day = 20;
module.exports.resultMessage = "Number of lit pixels: " 

module.exports.getNrOfLitPixels = (inputArray , nrEnhancements) => {

    let imageAlgorithm = getImageAlgorithm(inputArray); 
    let inputImage = getInputImage(inputArray);

    let infinitySymbol = ".";
    let infinitySymbolTemp = ".";

    for(let i = 0; i < nrEnhancements; i++){ 

        applyPaddingTo(inputImage, infinitySymbol);
    
        inputImage.forEach((yRow, yIndex) => {
            yRow.forEach((xVal, xIndex) => {

                let thisCoordinate = new Coordinate(xIndex, yIndex);

                let binaryString = '';
                const directions = ["upLeft", "up", "upRight", "left", "self", "right", "downLeft", , "down", "downRight"];
                directions.forEach(neighborDirection=> {

                    binaryString += getNeighborValue(neighborDirection, thisCoordinate, inputImage, infinitySymbol);
        
                })

                let replacement = getReplacementForBinaryString(binaryString, imageAlgorithm);
                inputImage[thisCoordinate.y][thisCoordinate.x].current = replacement; 

                //check the infinity symbol for the next round at a padding location.
                if(thisCoordinate.y === 0 && (binaryString == "000000000" || binaryString === "111111111")){
                    infinitySymbolTemp = replacement;
                }
                    
            
            })
        })

        inputImage = saveBackupOf(inputImage);
        infinitySymbol = infinitySymbolTemp; 
    }

  return getNrOfLit(inputImage);
}


let getImageAlgorithm = input => {
    let algo = input[0].trim().split('');
    return algo;
}


let getInputImage = input => {

    let onlyInputPart = input.slice(2);
    return onlyInputPart.map(line => {
        return line.trim().split('').map(char => { return {current: char, backup: char}});
    })
}

let saveBackupOf = trenchmap => {

    return trenchmap.map((yPos, yIndex, fullArray) => {
        return yPos.map(xPos => {
            let currentValue = xPos.current;
            xPos.backup = currentValue;
            return xPos;
        })
    })

}

let getNrOfLit = trenchmap => {

    return trenchmap.reduce((acc, curr) => {
        return acc+curr.reduce((acc, xVal) => {
            if(xVal.backup === "#"){
                return acc+1;
            }
             return acc;   
        },0)
    },0);
}

let applyPaddingTo = (trenchmap, infinitySymbol) => {

    let xMax = trenchmap[0].length;
    const PADDING_SIZE = 2;

    for(let i = 0; i < PADDING_SIZE; i++)
    {
        trenchmap.unshift(Array.from({ length: xMax }, () => ({current: infinitySymbol, backup: infinitySymbol})));
        trenchmap.push(Array.from({ length: xMax }, () => ({current: infinitySymbol, backup: infinitySymbol})));
    }

    trenchmap.forEach(yRow => {

        for(let i = 0; i < PADDING_SIZE; i++){

            yRow.unshift({current: infinitySymbol, backup: infinitySymbol});
            yRow.push({current: infinitySymbol, backup: infinitySymbol});
        }

    })
}

let getNeighborValue = (neighborDirection, thisCoordinate, inputImage, infinitySymbol) => {

    let neighborCoords = {};
                
    if(neighborDirection === "self")
    {
        neighborCoords = new Coordinate(thisCoordinate.x, thisCoordinate.y);// thisCoordinate;
    } else {
        let neighborDelta = lib.coordinates(neighborDirection);
        neighborCoords = lib.getValueWithDelta(thisCoordinate, inputImage, neighborDelta);
    }

    //-1 means outside of the array:
    if(neighborCoords.y === -1 || neighborCoords.x === -1){
        return infinitySymbol === "#" ? 1 : 0;    
    } else {
        let neighborValue = inputImage[neighborCoords.y][neighborCoords.x]
        return neighborValue.backup === "#" ? 1 : 0;   
    }
}

let getReplacementForBinaryString = (binaryString, imageAlgorithm) => {
    let algorithmIndex = parseInt(binaryString, 2);
    return imageAlgorithm[algorithmIndex];
}

