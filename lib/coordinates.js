function getValidXCoord(x, twoDimArray){
    if(x < 0)
        return -1;
    
    if(x >= twoDimArray[0].length)
        return -1;

    return x;
    
}

function getValidYCoord(x, twoDimArray){
    if(x < 0)
        return -1;
    
    if(x >= twoDimArray.length)
        return -1;

    return x;
    
}

module.exports.Coordinate = class {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

module.exports.coordinates = (direction) => {
    switch(direction){
        case "left": return new this.Coordinate(-1, 0); break;
        case "right": return new this.Coordinate(1, 0); break;
        case "up": return new this.Coordinate(0,-1); break;
        case "down": return new this.Coordinate(0, 1); break;
        case "upRight": return new this.Coordinate(1,-1); break;
        case "upLeft": return new this.Coordinate(-1,-1); break;
        case "downRight": return new this.Coordinate(1,1); break;
        case "downLeft": return new this.Coordinate(-1,1); break;
    }
}
// const left = new Coordinate(-1, 0);
// const right = new Coordinate(1, 0);
// const up = new Coordinate(0,-1);
// const down = new Coordinate(0, 1);
// const upRight = new Coordinate(1,-1);
// const upLeft = new Coordinate(-1,-1);
// const downRight = new Coordinate(1,1);
// const downLeft = new Coordinate(-1,1);

// let directionDeltas = [
//     {x: -1, y: 0},
//     {x: 1, y: 0},
//     {x: 0, y: 1},
//     {x: 0, y: -1},
//     {x: 1, y: -1},
//     {x: -1: y 1},
//     {x: 1, y: 1},
//     {x: -1, y -1}


module.exports.getValueWithDelta = (theseCoords, twoDimArray, deltaCoords) => {

    let thisX = theseCoords.x;
    let thisY = theseCoords.y;

    let deltaX = deltaCoords.x;
    let deltaY = deltaCoords.y;

    let resultX = getValidXCoord(thisX+deltaX, twoDimArray);
    let resultY = getValidXCoord(thisY+deltaY, twoDimArray);

    let resultCoords = new this.Coordinate(resultX, resultY);
    return resultCoords;

}