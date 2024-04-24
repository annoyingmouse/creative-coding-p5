import p5 from "https://cdn.skypack.dev/p5";

import { Ball } from "./Ball.js";

let ball;

new p5((p) => {
	p.setup = () => {
		p.createCanvas(400, 400);
		ball = new Ball(p, p.width / 2, p.height / 2, 20);
	};

	p.draw = () => {
		p.background(55);
		ball.show(p5);
		ball.move(p5);
	};
});
