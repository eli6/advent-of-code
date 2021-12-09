
let createHeightMapFromData = dataArray => {
    let heightmap = dataArray.map((line) => {
        let splitline = line.toString().trim().split('');
        return splitline.map(number => {
            return parseInt(number,10);
        })
    })


    return heightmap;

}

let getLowPointsForRowWithIndex = (rowIndex, matrix) => {
    let thisRow = matrix[rowIndex];

    let lowPoints = Array();

    for(let i = 0; i < thisRow.length; i++){
        let cell = thisRow[i];

        let lowerThanRight = true;
        let lowerThanLeft = true;
        let lowerThanAbove = true;
        let lowerThanBelow = true;

        //check horizontally in row (subtract and add to index i).
        if(i+1 <= thisRow.length-1 && cell>= thisRow[i+1])
            lowerThanRight = false;

        if(i-1 >= 0 && cell >= thisRow[i-1])
            lowerThanLeft = false;

        //check vertically (subtract and add from row index);
        if(rowIndex-1 >= 0 && cell >= matrix[rowIndex-1][i])
            lowerThanAbove = false;

        if(rowIndex+1 <= matrix.length-1 && cell >= matrix[rowIndex+1][i])
            lowerThanBelow = false;

        
        if(lowerThanRight && lowerThanLeft && lowerThanBelow && lowerThanAbove)
            lowPoints.push(cell);
    }

    return lowPoints;
}

let getLowPointsForAllRows = (heightmap=>{
    let lowPoints = Array();

    for(let i = 0; i < heightmap.length; i++){
        let rowLowPoints = getLowPointsForRowWithIndex(i, heightmap);
        rowLowPoints.forEach(point => lowPoints.push(point));
    }

    return lowPoints;
})

let findLowPointsIn = (heightmap => {
    //heightmap is of two dimensions element[0][1];
    return getLowPointsForAllRows(heightmap);
})

let getSumOf = lowPointsArray => {
    return lowPointsArray.reduce((x, y) => {return x+y},0);
}

let addOneTo = (points) => {
    return points.map(point => point+1);
}

module.exports.getRiskLevelSum = (dataArray)=> {
    
    let heightmap = createHeightMapFromData(dataArray);

    let lowPoints = findLowPointsIn(heightmap);

    let riskLevels = addOneTo(lowPoints);
    
    let sum = getSumOf(riskLevels);

    return sum;

}

module.exports.title = "Smoke basin";
module.exports.day = 9;