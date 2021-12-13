class Node {
    constructor(newName){
        this.name = newName;
        this.adjacent = new Array();
        this.visited = false;
    }

    addAdjacent(node){
        this.adjacent.push(node);
    }
}

module.exports.SmallNode = class extends Node {
    constructor(newName){
        super(newName);
    }
}

module.exports.BigNode = class extends Node {
    constructor(newName){
        super(newName);
    }
}
