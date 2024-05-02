import p5 from "https://cdn.skypack.dev/p5";

new p5((p) => {
	p.setup = () => {
		p.createCanvas(500, 500);
		p.angleMode(p.DEGREES);
	};

	p.draw = () => {
		p.background(220);
		p.beginShape();
		p.vertex(100, 50);
		p.vertex(400, 100);
		p.vertex(450, 300);
		p.vertex(200, 450);
		p.vertex(50, 350);
		p.vertex(150, 200);
		p.endShape(p.CLOSE);
		p.rect(150, 150, 200, 200);
		p.rect(200, 200, 200, 200);
		p.rect(150, 50, 200, 100);
		p.triangle(250, 150, 400, 400, 100, 400);
		p.arc(250, 250, 400, 400, -45, 45);
		p.arc(250, 250, 300, 300, 0, 90);
		p.arc(250, 250, 200, 200, 45, 135);
		p.arc(250, 250, 100, 100, 90, 180);
	};
});
