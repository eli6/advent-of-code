let BoardRow = require('./boardRow');

class Board{
    constructor(rows){
        this.rows = rows;
    }

    getSumOfUnmarked(){
        let unmarkedSum = this.rows.reduce((accumulator, currentVal)=> {
            return accumulator+currentVal.getSumOfUnmarked();
        }, 0)

        return unmarkedSum;
    }

    markAll(number){
        for(let i = 0; i < this.rows.length; i++){

            //let boardRow = new BoardRow(row);
            let fullRow = this.rows[i].markAll(number);

            if(fullRow){
                return true;
            }
        }
        return false;
    }
}

module.exports = Board;


