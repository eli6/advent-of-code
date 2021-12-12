let dataFile = "testdata.txt";
const coordinates = require('./coordinates');
const Coordinate = require('./coordinates').Coordinate;
const path = require('path');


test('getting coordinates above the middle should give coordinates {1,0}', async () => {

    //[1][2][3]
    //[4][5][6]
    //[7][8][9]

    let array = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    //we start with coordinate 5 {x: 1, y: 1}

    let coordsUp = coordinates.getValueWithDelta(new Coordinate(1,1), array, coordinates.coordinates("up"));

    expect(coordsUp.x).toBe(1);
    expect(coordsUp.y).toBe(0);
});


test('getting coordinates left from 0,0 should give {-1,0}', async () => {

    //[1][2][3]
    //[4][5][6]
    //[7][8][9]

    let array = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    //we start with coordinate 5 {x: 1, y: 1}

    let coordsUp = coordinates.getValueWithDelta(new Coordinate(0,0), array, coordinates.coordinates("left"));

    expect(coordsUp.x).toBe(-1);
    expect(coordsUp.y).toBe(0);
});