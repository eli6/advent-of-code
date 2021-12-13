class Node {
    constructor(newName){
        this.name = newName;
        this.adjacent = new Array();
        this.discovered = false;
        this.visited = false;
    }

    addAdjacent(node){
        this.adjacent.push(node);
    }
}

module.exports.SmallNode = class extends Node {
    constructor(newName){
        super(newName);
        this.visited = false;
    }
}

module.exports.BigNode = class extends Node {
    constructor(newName){
        super(newName);
    }
}
