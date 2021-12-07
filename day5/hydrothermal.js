module.exports.findDoubleOverlaps = (dataArray) => {
    
    let overlaps = 0;

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
        //ex 0,9, 5,9
        let point1 = line[0].split(',');
        let point2 = line[1].split(',');

        let xStartOfLine = point1[0];
        let xEndOfLine = point2[0];

        let yStartOfLine = point1[1];
        let yEndOfLine = point2[1];

        if(xStartOfLine === xEndOfLine || yStartOfLine === yEndOfLine)
        {

            //reverse negative x direction
            if(xStartOfLine > xEndOfLine){
                let copy = xStartOfLine;
                xStartOfLine = xEndOfLine;
                xEndOfLine = copy;
            }

            //reverse negative y direction
            if(yStartOfLine > yEndOfLine){
                let copy = yStartOfLine;
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
                if(xStartOfLine < lineLengthX)
                    xStartOfLine++;
                
                if(yStartOfLine < lineLengthY)
                    yStartOfLine++;
            }

            //mark the coordinates
            allCoordinatesToMark.forEach(coordinatePair => {
                let startIndex = coordinates.findIndex(coordinate => {
                    return coordinate.x == coordinatePair.x && coordinate.y == coordinatePair.y;
                })
                coordinates[startIndex].count += 1;
            })
            
        }
    })

    //lastly count the overlaps.
    coordinates.forEach(coordinate => {
        if(coordinate.count > 1)
            overlaps += 1;
    })

    return overlaps;
}