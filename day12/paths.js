
class Node {
    constructor(newName){
        this.name = newName;
        this.adjacent = new Array();
    }

    addAdjacent(node){
        this.adjacent.push(node);
    }
}

class SmallNode extends Node {
    constructor(newName){
        super(newName);
        this.visited = false;
    }
}

class BigNode extends Node {
    constructor(newName){
        super(newName);
    }
}

class Graph {
    constructor(){
        this.nodes = new Map();
    }

    addNode(nodeValue){
        if(this.nodes.has(nodeValue)){
            return this.nodes.get(nodeValue);
        } else {
            let newNode = null;
            if (nodeValue == nodeValue.toUpperCase()) {
                newNode = new BigNode(nodeValue);
            } else {
                newNode = new SmallNode(nodeValue);
            }
            this.nodes.set(nodeValue, newNode);
            return newNode;
        }
    }

    addEdge(node1, node2){
        let firstNode = this.addNode(node1);
        let secondNode = this.addNode(node2);

        firstNode.addAdjacent(secondNode);
        secondNode.addAdjacent(firstNode);
    }
}


let createGraph = inputArray => {

    let edges = inputArray.map(line => {
        return line.trim().split('-');
    })

    let graph = new Graph();

    edges.forEach(edgeLine => {
        graph.addEdge(edgeLine[0], edgeLine[1])
    })

    let hej = 45;
}


module.exports.getNumberOfPaths = inputArray => {

    let graph = createGraph(inputArray);
    let r = 45;

}
