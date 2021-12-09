
let findLowPointsIn = (heightmap => {
    
})

module.exports.getRiskLevelSum = (dataArray)=> {
    
    let heightmap = createHeightMapFromData();
    // let heightmap = dataArray.map((line) => {
    //     return dataArray.trim().split('');
    // })

    let lowPoints = findLowPointsIn(heightmap);

    let sum = getSumOf(lowPoints);

    return sum;

}