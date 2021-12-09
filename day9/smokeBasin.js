
let createHeightMapFromData = dataArray => {
    let heightmap = dataArray.map((line) => {
        return dataArray.toString().trim().split('');
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
        if(i+1 <= thisRow.length && cell>= thisRow[i+1])
            lowerThanRight = false;

        if(i-1 >= 0 && cell >= thisRow[i-1])
            lowerThanLeft = false;

        //check vertically (subtract and add from row index);
        if(rowIndex-1 >= 0 && cell >= matrix[rowIndex-1][i])
            lowerThanAbove = false;

        if(rowIndex+1 <= matrix.length && cell >= matrix[rowIndex+1][i])
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
    return lowPointsArray.reduce(x, y => x+y);
}

module.exports.getRiskLevelSum = (dataArray)=> {
    
    let heightmap = createHeightMapFromData(dataArray);

    let lowPoints = findLowPointsIn(heightmap);

    let sum = getSumOf(lowPoints);

    return sum;

}