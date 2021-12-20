let Coordinate = require('../lib/coordinates').Coordinate

let isCoordinate = (toSearchFor) => (element) => {
    return element.coordinate.y === toSearchFor.y && element.coordinate.x === toSearchFor.x;
}

let getFoldsFrom = inputArray => {

    let part1End = inputArray.indexOf('');
    let foldPart = inputArray.splice(part1End+1, inputArray.length-part1End);

    return foldPart.map(line => {
        let instruction = line.split(' ').splice(2, 1);
        let axisAndValue = instruction[0].split('=');
        return {axis: axisAndValue[0], value: axisAndValue[1]};
    })
}

let createPaper = inputArray => {

    let emptyLineIndex = inputArray.indexOf('');
    let firstPart = inputArray.splice(0, emptyLineIndex);

    let dots = firstPart.map(line => {
        let coords = line.trim().split(',');
        let coordinate = new Coordinate(parseInt(coords[0],10), parseInt(coords[1],10));
        return coordinate;
    })

    let maxX = dots.reduce(function(a, b) {
        return Math.max(a, b.x);
    }, 0);

    let maxY = dots.reduce(function(a, b) {
        return Math.max(a, b.y);
    }, 0);

    let coords = [];

    for(let y = 0; y <= maxY; y++){
        for(let x = 0; x <= maxX; x++)
        {
            let newCoord = new Coordinate(x,y);
            coords.push({coordinate: newCoord, marked: false});
        }
    }

    dots.forEach(dot => {
        let index = coords.findIndex(isCoordinate(dot));
        coords[index].marked = true;
    })

    return coords;
}

let foldAlongAxis = (axisName, axisValue, paper) => {

    paper.forEach(coord=> {
        if(coord.marked && (coord.coordinate[axisName] > axisValue))
        {
            let mirrored = 2*axisValue-coord.coordinate[axisName];

            if(axisName === "y")
                mirrorCoord = {x: coord.coordinate.x, y: mirrored}
            if(axisName === "x")
                mirrorCoord = {x: mirrored, y: coord.coordinate.y}

            let index = paper.findIndex(isCoordinate(mirrorCoord));
            paper[index].marked = true;
        }
    })

    let smallerArray = paper.filter(coord=> {
        if(coord.coordinate[axisName] < axisValue)
            return coord;
    })

    return smallerArray;
}

let fold = (paper, fold) => {

    let axis = fold.axis;
    return foldAlongAxis(axis, fold.value, paper);
}

let print = paper => {
    
    let maxX = paper.reduce(function(a, b) {
        return Math.max(a, b.coordinate.x);
    }, 0);

    paper.forEach(pos => {
        if(pos.marked)
            process.stdout.write('#')
        if(!pos.marked)
            process.stdout.write('.')
        if(pos.coordinate.x === maxX)
            process.stdout.write('\n');
        })

}

module.exports.getDotsFromFolding = (inputArray, nrFolds) => {

    let paper = createPaper(inputArray);
    let folds = getFoldsFrom(inputArray);

    let countAfterAllFolds = 0;
    
    for(let i = 0; i < nrFolds; i++){
        let thisFold = folds[i];
        paper = fold(paper, thisFold);

        let dotsCount = paper.reduce((acc, curr) => {
            if(curr.marked)
            {
                return acc+1; 
            }
            return acc;
        }, 0);

        countAfterAllFolds = dotsCount;
       // print(paper);
    }

  
    return countAfterAllFolds;
}


module.exports.title = "Folds";
module.exports.day = 13;
module.exports.resultMessage = "Number of dots are: "