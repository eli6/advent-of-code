let lib = require('../lib/coordinates');
let Coordinate = require('../lib/coordinates').Coordinate;


module.exports.sendProbeWithVelocity = (inputArray , velocity) => {

    
    let deltaX = x => {
        if(x === 0)
            return x;
        return x > 0 ? x-1 : x+1;
    }
    let deltaY = y => y-1;

    let currentDeltaX = velocity[0];
    let currentDeltaY = velocity[1];

    let accumX = currentDeltaX;
    let accumY = currentDeltaY;

    let trajectoryPoints = [];
    trajectoryPoints.push([0,0]);
    trajectoryPoints.push([accumX, accumY])

    let hit = false;
    let stillPossible = true;
    while(!hit && stillPossible)
    {
        currentDeltaX = deltaX(currentDeltaX);    
        currentDeltaY = deltaY(currentDeltaY);
        accumX+=currentDeltaX;
        accumY+=currentDeltaY;

        trajectoryPoints.push([accumX, accumY]);
        
        if(accumX > 19 && accumX < 31 && (accumY > -11 && accumY < -4))
        {
            hit = true;

            return true;
            //stillPossible = false;
        }


    }


    for(let i = 0; i < 50; i++)
    {
        for(let j = 0; j < 50; j++)
        {
            if(trajectoryPoints.findIndex(point => point[0] == j && point[1] == i)!==-1)
            {
                process.stdout.write("#");
            } else {
                process.stdout.write(".");
            }
           
        }

        process.stdout.write("\n");

    }

    // const directions = ["up", "down", "right", "left"];

    // directions.forEach(direction => {
    //     let neighborDelta = coordinateLib.coordinates(direction);
    //     let neighborCoords = lib.getValueWithDelta(firstNode.coordinates, priorityQueue, neighborDelta);
        
    // })
  


}




module.exports.title = "Polymerization";
module.exports.day = 14;
module.exports.resultMessage = "Result is: "