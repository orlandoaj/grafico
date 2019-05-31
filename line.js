
import Point from './point.js';

export default class Line extends Point {

    constructor(x, y, z, x2, y2, thickness, rgb) {
		super(x, y, z, thickness, rgb);
    }

    // Prepares the variables to generate the points positions
	genPos() {

		// Delta of exact value and rounded value of the dependent variable
		d = 0;

		dx = Math.abs(x2 - x); // Delta X
		dy = Math.abs(y2 - y); // Delta Y

		dx2 = 2 * dx; // Slope scaling factors to
		dy2 = 2 * dy; // avoid floating point

		ix = x < x2 ? 1 : -1; // Increment direction
		iy = y < y2 ? 1 : -1;

		if (dx >= dy)
			otherDegrees();
		else
			ninetyDegrees();
	}

    // Adds the positions of the points if the line is through
	// first, fourth, fifth and eighth octets
	otherDegrees() {

		while (x != x2) {
			plot(x, y);
			x += ix;
			d += dy2;
			if (d > dx) {
				y += iy;
				d -= dx2;
			}
		}
	}

	// Adds the positions of the points if the line is through
	// second, third, sixth and seventh octets
	ninetyDegrees() {

		while (y != y2) {
			plot(x, y);
			y += iy;
			d += dx2;
			if (d > dy) {
				x += ix;
				d -= dy2;
			}
		}
	}

	// Updates the positions
	update() { genPos(); }

    // Returns the array of positions
    draw() { return getPos(); }

}