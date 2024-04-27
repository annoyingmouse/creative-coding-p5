import p5 from "https://cdn.skypack.dev/p5";

new p5((p) => {
	p.setup = () => {
		p.createCanvas(500, 500);
	};

	p.draw = () => {
		p.background(255);
		p.strokeWeight(5);
		p.point(p.width / 2, p.height / 2);
		p.line(100, 100, 100, 400);
		p.line(200, 150, 200, 350);
		p.line(300, 200, 300, 300);
		p.line(100, 100, 400, 250);
		p.line(400, 250, 100, 400);
		p.noFill();
		p.circle(p.width / 2, p.height / 2, 400);
    p.circle(p.width / 2, p.height / 2, 300);
    p.circle(p.width / 2, p.height / 2, 200);
    p.circle(p.width / 2, p.height / 2, 100);
	};
});
