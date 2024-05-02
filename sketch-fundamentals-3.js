import p5 from "https://cdn.skypack.dev/p5";

new p5((p) => {
	p.setup = () => {
		p.createCanvas(500, 500);
		p.angleMode(p.DEGREES);
	};

	p.draw = () => {
		p.background(220);
		p.strokeWeight(6);
		p.triangle(250, 150, 400, 400, 100, 400);
	};
});
