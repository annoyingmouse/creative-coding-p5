export class Ball {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.r = radius;
		this.d = r * 2;
		this.xVelocity = -4;
		this.yVelocity = -3;
	}

	show(p5) {
		p5.color(255);
		p5.ellipse(this.x, this.y, this.d, this.d);
	}

	move(p5) {
		this.x += this.xVelocity;
		this.y += this.yVelocity;
		this.bounce(p5);
	}
	bounce(p5) {
		if (this.x <= this.r || this.x >= p5.width - this.r) {
			this.xVelocity *= -1;
		}
		if (this.y <= this.r || this.y >= p5.height - this.r) {
			this.yVelocity *= -1;
		}
	}
}
