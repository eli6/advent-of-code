let MAX_X_TARGET = 259;
let MIN_X_TARGET = 235;

let MAX_Y_TARGET = -118;
let MIN_Y_TARGET = -62;

module.exports.findMaxY = (inputArray) => {
    //loop through possible x vals
    for(let x = 0; x < MAX_X_TARGET; x++)
    {
        //find max y for this x.
        for(let y = 1500; y > 0; y--)
        {
            let tests = [x, y];
            let [hit, max] = this.sendProbeWithVelocity(inputArray, tests);
            if(hit)
            {
                return max;
            }
        }
    }
}

let setLimitsFrom = dataArray => {

    let limitsRow = dataArray[0];
    let valueParts = limitsRow.trim().split(":")[1].split(",");
    let xSpecs = valueParts[0]
    let ySpecs = valueParts[1];

    let xVals = xSpecs.split('=')[1].split('..');
    let yVals = ySpecs.split('=')[1].split('..');
    
    MIN_X_TARGET = parseInt(xVals[0],10);
    MAX_X_TARGET = parseInt(xVals[1], 10);

    MIN_Y_TARGET = parseInt(yVals[1], 10);
    MAX_Y_TARGET = parseInt(yVals[0], 10);

}

module.exports.sendProbeWithVelocity = (inputArray , velocity) => {

    setLimitsFrom(inputArray);
    
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

           //target hit.
           if(accumX >MIN_X_TARGET-1 && accumX < MAX_X_TARGET+1 && (accumY > MAX_Y_TARGET-1 && accumY < MIN_Y_TARGET+1))
           {
               hit = true;
               var max = trajectoryPoints.reduce(function(a, b) {
                return Math.max(a, b[1]);
                }, 0);

               return [true, max];
           }
   
           //falling down beyond target.
           if(accumX > MAX_X_TARGET)
               return [false, null];
   
           //passing below target    
           if(accumY < MAX_Y_TARGET)
               return [false,null];
   
           //falling down before target.
           if(currentDeltaX === 0 && accumX < MIN_X_TARGET)
               return [false, null];

        currentDeltaX = deltaX(currentDeltaX);    
        currentDeltaY = deltaY(currentDeltaY);
        accumX+=currentDeltaX;
        accumY+=currentDeltaY;

        trajectoryPoints.push([accumX, accumY]);
        
     
    }
}


module.exports.title = "Trajectory";
module.exports.day = 17;
module.exports.resultMessage = "Max height is: "