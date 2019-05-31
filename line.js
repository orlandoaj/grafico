
import Point from './point.js';

export default class Line extends Point {

	constructor(x, y, z, x2, y2, thickness, rgb) {
		super(x, y, z, thickness, rgb);
    }

    // Prepares the variables to generate the points positions
	genPos() {

		// Delta of exact value and rounded value of the dependent variable
		this.d = 0;

		this.dx = Math.abs(this.x2 - this.x); // Delta X
		this.dy = Math.abs(this.y2 - this.y); // Delta Y

		this.dx2 = 2 * this.dx; // Slope scaling factors to
		this.dy2 = 2 * this.dy; // avoid floating point

		this.ix = this.x < this.x2 ? 1 : -1; // Increment direction
		this.iy = this.y < this.y2 ? 1 : -1;

		if (this.dx >= this.dy)
			otherDegrees();
		else
			ninetyDegrees();
	}

    // Adds the positions of the points if the line is through
	// first, fourth, fifth and eighth octets
	otherDegrees() {

		while (this.x != this.x2) {
			plot(this.x, this.y);
			this.x += this.ix;
			this.d += this.dy2;
			if (this.d > this.dx) {
				this.y += this.iy;
				this.d -= this.dx2;
			}
		}
	}

	// Adds the positions of the points if the line is through
	// second, third, sixth and seventh octets
	ninetyDegrees() {

		while (this.y != this.y2) {
			plot(this.x, this.y);
			this.y += this.iy;
			this.d += this.dx2;
			if (this.d > this.dy) {
				this.x += this.ix;
				this.d -= this.dy2;
			}
		}
	}

	// Updates the positions
	update() { genPos(); }

    // Returns the array of positions
    draw() {  getPos(); }

}