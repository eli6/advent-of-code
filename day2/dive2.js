

module.exports.driveSubmarine = (movementData) => {

    let aim = 0;

    let position = {
        horizontal: 0,
        depth: 0
    }

    movementData.forEach(data => {
        let currentDirectionArray = data.split(' ');
        if(currentDirectionArray[0] === "forward")
        {
            position.horizontal += Number(currentDirectionArray[1]);
            position.depth += Number(currentDirectionArray[1])*aim;
        }
        if(currentDirectionArray[0] === "up")
            aim-= Number(currentDirectionArray[1]);

        if(currentDirectionArray[0] === "down")
            aim+=Number(currentDirectionArray[1]);
    })

    if(position.depth < 0)
        throw new Error("Submarine can't leave the water!");

    return position;
}

module.exports.createPositionProduct = position => position.depth*position.horizontal;