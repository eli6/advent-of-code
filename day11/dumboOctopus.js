let Coordinate = require('../lib/coordinates').Coordinate
let coordinateLib = require('../lib/coordinates');
let Octopus = require('./octopus').Octopus;


let increaseByOne = line => {
    return line.map(octopus => {
        octopus.value+=1
        return octopus;
    });
}

let increaseAdjacentTo = (coordinate, array) => {
    const directions = ["up", "down", "right", "left", "upRight", "upLeft", "downRight", "downLeft"];
    directions.forEach(neighbor=> {

        let neighborDelta = coordinateLib.coordinates(neighbor);
        let neighborCoords = coordinateLib.getValueWithDelta(coordinate, array, neighborDelta);
       
        //there might not be a neighbor in that direction. check first if coordinates are valid before propagating.
        if(neighborCoords.x !== -1 && neighborCoords.y !== -1){

            let neighborValue = array[neighborCoords.y][neighborCoords.x];

            //increase and propagate from this octopus only if it hasnt already flashed.
            if(neighborValue.flashed !== true){
                array[neighborCoords.y][neighborCoords.x].value+=1;
                flashAndPropagateFrom(neighborCoords, array);
            }
        }
        
    })
}

let flashAndPropagateFrom = (coordinate, array) => {
    
    let octopus = array[coordinate.y][coordinate.x];
    //only propagate from this if it hasnt already flashed.
    if(octopus.value > 9 && octopus.flashed === false){
        octopus.flash();
        increaseAdjacentTo(coordinate, array);
    }
}

let flashOctopusse = octopus2dArray => {

    let flashOccured = false;

    for(let x = 0; x < octopus2dArray.length; x++){
        for(let y = 0; y < octopus2dArray[x].length; y++){
                flashAndPropagateFrom(new Coordinate(x,y), octopus2dArray);
        }
    }
    
    return octopus2dArray;
}

let increaseAllByOne = transformedArray => transformedArray.map((octopusLine)=> {
    return increaseByOne(octopusLine);        
})


module.exports.getFlashesAfterSteps = (dataArray, steps) => {

    let octopus2dArray = dataArray.map(line => {
        let octopusLines =  line.trim().split('').map(character => new Octopus(parseInt(character)));
        return octopusLines;
    })

    let transformedArray = octopus2dArray;

    let nrFlashed = 0;

    for(let i = 0; i < steps; i++){
        
        transformedArray = increaseAllByOne(transformedArray); 

        transformedArray = flashOctopusse(transformedArray);

        transformedArray = transformedArray.map((octopusLine) => {
             return octopusLine.map(octopus => {
                 if(octopus.flashed){
                     octopus.reset();
                     nrFlashed +=1;
                     return octopus;
                 } else {
                     return octopus;
                 }
             })
         })
    }

    return nrFlashed;
}



module.exports.title = "Dumbo Octopus";
module.exports.day = 11;
module.exports.resultMessage = "Total number of flashes are: "