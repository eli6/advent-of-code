module.exports.findDoubleOverlaps = (dataArray, eventEmitter) => {
    
    let overlaps = 0;

    let linesDrawn = 0;
    let numberOfLines = dataArray.length;
    let fivepercent = Math.floor(numberOfLines*0.01);

    let coordinates = Array();

    for(let i = 0; i < 1000; i++){
        for(let j = 0; j < 1000; j++){
            let coordinate = {
                x: i,
                y: j,
                count: 0
            }

            coordinates.push(coordinate);
        }
    }

    let coordinatePairs = dataArray.map(entry => {
        let line = String(entry).split('->').map(coordinate => coordinate.trim());
        return line;
    })

    coordinatePairs.forEach(line => {

        if(linesDrawn % fivepercent == 0){
            eventEmitter.emit("fivepercent");
        }

        //ex 0,9, 5,9
        let point1 = line[0].split(',');
        let point2 = line[1].split(',');

        let xStartOfLine = parseInt(point1[0],10);
        let xEndOfLine = parseInt(point2[0],10);

        let yStartOfLine = parseInt(point1[1],10);
        let yEndOfLine = parseInt(point2[1],10);

        if(xStartOfLine === xEndOfLine || yStartOfLine === yEndOfLine)
        {

            //reverse negative x direction
            if(xStartOfLine > xEndOfLine){
                let copy = Number(xStartOfLine);
                xStartOfLine = xEndOfLine;
                xEndOfLine = copy;
            }

            //reverse negative y direction
            if(yStartOfLine > yEndOfLine){
                let copy = Number(yStartOfLine);
                yStartOfLine = yEndOfLine;
                yEndOfLine = copy;
            }

            //get the length
            let lineLengthX = Math.abs(xEndOfLine-xStartOfLine+1);
            let lineLengthY = Math.abs(yEndOfLine-yStartOfLine+1);

           
            let allCoordinatesToMark = new Array();

            //generate all coordinates to mark from the current line
            for(let i = 0; i < Math.max(lineLengthX, lineLengthY); i++){
                let thisCoord = {
                    x: xStartOfLine,
                    y: yStartOfLine
                }
                allCoordinatesToMark.push(thisCoord);

                if(xStartOfLine < xEndOfLine)
                    xStartOfLine++;
                
                if(yStartOfLine < yEndOfLine)
                    yStartOfLine++;
            }

            //mark the coordinates
            allCoordinatesToMark.forEach(coordinatePair => {
                let startIndex = coordinates.findIndex(coordinate => {
                    return coordinate.x === coordinatePair.x && coordinate.y === coordinatePair.y;
                })
                coordinates[startIndex].count += 1;
            })
            
        }

        linesDrawn+=1;

    })

    //lastly count the overlaps.
    coordinates.forEach(coordinate => {
        if(coordinate.count > 1)
            overlaps += 1;
    })

    return overlaps;
}