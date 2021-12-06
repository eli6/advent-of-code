module.exports.performDiagnostic = (dataArray)=> {
    
    

    let diagnostic = {
        gamma: '',
        epsilon: ''
    }

    let resultArray = new Array();

    for(let i = 0; i < dataArray[0].length; i++)
    {
        let positionArray = new Array();
        //for every number
        dataArray.forEach(binary => {
            //put character in position array
            positionArray.push(binary[i])
        });

        let counts = {};

        for(const num of positionArray){
            counts[num] = counts[num] ? counts[num]+1 : 1;
        }

        if(counts["1"]> counts["0"]){
            diagnostic.gamma += "1";
            diagnostic.epsilon +="0";
        } else {
            diagnostic.gamma += "0";
            diagnostic.epsilon +="1";
        }

       //reverse geht auch?
      

    }

    //convert to integers.
    diagnostic.gamma = parseInt(diagnostic.gamma, 2);
    diagnostic.epsilon = parseInt(diagnostic.epsilon,2);

    return diagnostic;
}


module.exports.getDiagnosticsResult = (dataArray)=>{
    let diagnostic = this.performDiagnostic(dataArray);
    console.log(diagnostic);
    return diagnostic.gamma*diagnostic.epsilon;
}