
export default class Point {

    constructor(x, y, z = 1, thickness = 1, rgb) {

        this.pos = {};
    }

    // Adds the point position in the array of positions
    plot(x, y) {
        this.pos.push({x: x, y: y});
    }

    // Cleanse the array of positions
    erase() {
        this.pos = {};
    }

    // Returns the array of positions
    getPos() { return this.pos; }
}