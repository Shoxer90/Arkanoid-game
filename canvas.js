import { drowBrick} from "./bricks.js";
import { drowBall } from "./ball.js";
import {drowPaddle} from "./paddle.js";
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



 
drowBrick(35);
drowBall();
drowPaddle();



