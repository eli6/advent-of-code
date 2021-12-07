class BoardRow {
    constructor(markableNumbers){
        this.numbers = markableNumbers;
        this.rowMarks = 0;
    }

    getSumOfUnmarked(){


        let unmarkedSum = this.numbers.reduce((accumulator, currentVal)=> {
            if(currentVal.marked === false){
                return accumulator+currentVal.value;
            }
            return accumulator;
        }, 0)

        return unmarkedSum;
    }

    markAll(number){
        for(let markableNumber of this.numbers){
            if(markableNumber.value === number){
                markableNumber.marked = true;
                this.rowMarks += 1;

                if(this.rowMarks === this.numbers.length){
                    return true;
                }
            }
        }

        return false;
    }
}

module.exports = BoardRow;


