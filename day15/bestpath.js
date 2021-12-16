let lib = require('../lib/coordinates');
let Coordinate = require('../lib/coordinates').Coordinate;

let sortQueue = queue => {
    return queue.sort((node, nextNode) => {
        return node.priority < nextNode.priority;
    })
}

module.exports.getPathWeight = (inputArray) => {

    let priorityQueue = [];

    inputArray.forEach((row, index) => {
        let xCoords = row.trim().split('');
        xCoords.forEach((xval,xIndex) => {
            let coord = new Coordinate(xIndex, index);
            if(coord.x === 0 && coord.y === 0)
            {
                priorityQueue.push({coordinates:coord, priority: 0, weight: 0});
            } else 
            {
                priorityQueue.push({coordinates: coord, priority: Infinity, weight: xval});
            }
            
        })
    })

    priorityQueue = sortQueue(priorityQueue);

    let firstNode = priorityQueue.shift();

    const directions = ["up", "down", "right", "left"];

    directions.forEach(direction => {
        let neighborDelta = coordinateLib.coordinates(direction);
        let neighborCoords = lib.getValueWithDelta(firstNode.coordinates, priorityQueue, neighborDelta);
        
    })
  


}




module.exports.title = "Polymerization";
module.exports.day = 14;
module.exports.resultMessage = "Result is: "