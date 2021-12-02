

module.exports.driveSubmarine = (movementData) => {

    let position = {
        horizontal: 0,
        depth: 0
    }

    position.horizontal = movementData.reduce((accumulator, currValue, currIndex, array)=> {
        let currentDirectionArray = currValue.split(' ');
        if(currentDirectionArray[0] === "forward")
            return accumulator+Number(currentDirectionArray[1]);
        
        return accumulator;
    }, 0);

    position.depth = movementData.reduce((accumulator, currValue, currIndex, array)=> {
        let currentDirectionArray = currValue.split(' ');
        if(currentDirectionArray[0] === "up")
            return accumulator-Number(currentDirectionArray[1]);

        if(currentDirectionArray[0] === "down")
            return accumulator+Number(currentDirectionArray[1]);

        return accumulator;
    }, 0);

    if(position.depth < 0)
        throw new Error("Submarine can't leave the water!");

    return position;
}

module.exports.createPositionProduct = position => position.depth*position.horizontal;