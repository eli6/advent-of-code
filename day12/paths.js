let clone = require('clone');
let Graph = require('./graph').Graph;
let SmallNode = require('./node').SmallNode;
let BigNode = require('./node').BigNode;

let createGraph = inputArray => {

    let edges = inputArray.map(line => {
        return line.trim().split('-');
    })
    let graph = new Graph();
    edges.forEach(edgeLine => {
        graph.addEdge(edgeLine[0], edgeLine[1])
    })
    return graph;
}

let findPaths = (graph, nodeName, destName, pathStack, allPaths) => {

    let node = graph.addNode(nodeName);    
    node.discovered = true;
    pathStack += node.name + ",";

    if(node.name === destName){
        allPaths.push(pathStack);
        return;
    }
    
    if(node instanceof SmallNode){
        node.visited = true;
    }

    for(let neighbor of node.adjacent){
        if(neighbor.name === "start")
            continue;
        if(neighbor instanceof BigNode || (neighbor instanceof SmallNode && !neighbor.visited)){
            let newPath = pathStack;
            let graphCopy = clone(graph);
            findPaths(graphCopy, neighbor.name, destName, newPath, allPaths);
        }
    }
  
}

module.exports.getNumberOfPaths = inputArray => {

    let graph = createGraph(inputArray);
    let pathStack = [];
    let paths = [];
    findPaths(graph, "start", "end", pathStack, paths);
    return paths.length;
}


module.exports.title = "Paths";
module.exports.day = 12;
module.exports.resultMessage = "Total number of paths are: "