let lib = require('../lib/coordinates');
let Coordinate = require('../lib/coordinates').Coordinate;


let getCoordinate = (coordSearched) => (element) => {
    return element.coordinates.y === coordSearched.y && element.coordinates.x === coordSearched.x;
}

let sortQueue = queue => {
    return queue.sort((node, nextNode) => {
        return node.priority - nextNode.priority;
    })  
}

let createPriorityQueueFrom = inputArray => {

    let priorityQueue = new Array();
    inputArray.forEach((row, index) => {
        let xCoords = row.trim().split('');
        xCoords.forEach((xval,xIndex) => {
            let coord = new Coordinate(xIndex, index);
            if(coord.x === 0 && coord.y === 0)
            {
                priorityQueue.push({coordinates:coord, priority: 0, weight: 0});
            } else 
            {
                priorityQueue.push({coordinates: coord, priority: Infinity, weight: parseInt(xval,10)});
            }
        })
    })
    return priorityQueue;
}

let getMaxMinFrom = queue => {
    let maxX = queue.reduce(function(a, b) {
        return Math.max(a, b.coordinates.x);
    }, 0);

    let maxY = queue.reduce(function(a, b) {
        return Math.max(a, b.coordinates.x);
    }, 0);

    return {maxX: maxX, maxY: maxY};
}

let getNeighborNode = (direction, thisNode, priorityQueue) => {

    let neighborDelta = lib.coordinates(direction);
    let neighborCoords = lib.getValueWithDeltaNoValidation(thisNode.coordinates, neighborDelta);
    let index = priorityQueue.findIndex(getCoordinate({x: neighborCoords.x, y: neighborCoords.y}));
    if(index!=-1){ //neighbor has not been visited and exisits in queue.
        let neighbor = priorityQueue.at(index); 
        return neighbor;
    }
    return null;
}

let setPriorityOfNeighbor = (thisNode, neighbor) => {
    if(neighbor!==null){
        let thisPriority = thisNode.priority;
        //set neighbor priority to new value if its higher than my prio+the weight of the edge going to that neighbor
        if(thisPriority+neighbor.weight < neighbor.priority){
            neighbor.priority = thisPriority+neighbor.weight;
        }
    }
}

let bottomCornerReached = (thisNode, maxX, maxY) => {
    return thisNode.coordinates.x === maxX && thisNode.coordinates.y ===maxY;
}

let getFirstInQueue = priorityQueue => {
    return priorityQueue.shift();
}


module.exports.getPathWeight = (inputArray) => {

    let priorityQueue = createPriorityQueueFrom(inputArray);
    let {maxX, maxY} = getMaxMinFrom(priorityQueue);

    //djikstras:
    while(priorityQueue.length > 0){

        priorityQueue = sortQueue(priorityQueue);
        let thisNode = getFirstInQueue(priorityQueue);

        //bottom right corner found, return with the priority value.
        if(bottomCornerReached(thisNode, maxX, maxY)){
            return thisNode.priority;
        }

        const directions = ["up", "down", "right", "left"];
        directions.forEach(direction => { 
            let neighbor = getNeighborNode(direction, thisNode, priorityQueue);
            setPriorityOfNeighbor(thisNode, neighbor);
        })

    }
}

module.exports.title = "Best path";
module.exports.day = 15;
module.exports.resultMessage = "Result is: "