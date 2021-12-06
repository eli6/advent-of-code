module.exports.performDiagnostic = ()=> {
    
    let diagnostic = {
        gamma: 0,
        epsilon: 0
    }

    return diagnostic;
}


module.exports.getDrawnNumbers = (dataArray) => {

    let drawnArray = String(dataArray[0]).split(",");
    let drawnNumbers = drawnArray.map((element)=> {
        return parseInt(element, 10);
    })

    return drawnNumbers;
}

