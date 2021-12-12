module.exports.Octopus = class {
    constructor(value){
        this.value = value;
        this.flashed = false;
    };

    flash(){
        this.flashed = true;
    }

    reset() {
        this.value = 0;
        this.flashed = false;
    }
}