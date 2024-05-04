import p5 from "https://cdn.skypack.dev/p5";

new p5((p) => {
	p.setup = () => {
		p.createCanvas(500, 500);
		p.angleMode(p.DEGREES);
	};

	p.draw = () => {
		p.background("#edede9");
		p.noStroke();
		p.fill("#d6ccc2");
		p.rect(50, 50, 200, 400);
		p.fill("#f5ebe0");
		p.rect(250, 50, 200, 200);
		p.fill("#e3d5ca");
		p.rect(250, 250, 200, 200);
		p.fill("#d5bdaf");
		p.rect(350, 350, 100, 100);
		p.rect(250, 250, 100, 100);
	};
});
