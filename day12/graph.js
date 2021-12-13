let SmallNode = require('./node').SmallNode;
let BigNode = require('./node').BigNode;

module.exports.Graph = class {
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
    
    resetAllVisited(){
        for(let [name, node] of this.nodes){
            if(node instanceof SmallNode){
                node.visited = false;
            }
        }
    }
}