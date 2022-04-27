import { drowBrick} from "./bricks.js";
import { ball } from "./ball.js";
import {paddle} from "./paddle.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

drowBrick(25);
// context.save();
function update() {

    if(paddle.x + paddle.width > canvas.width|| paddle.x < 0  ) {  
        paddle.replaceX = 0;
    }
    if(ball.radius>ball.x){
        ball.replaceY *=-1
        ball.replaceX *= -1
    }
    if(ball.y + ball.radius > canvas.height ){
        ball.replaceY *=-1
        ball.replaceX *= 1
    }
    if(ball.x + ball.radius > canvas.width ){
        ball.replaceY *=1
        ball.replaceX *= -1
    }
    if(ball.y< ball.radius ){
        ball.replaceY *=-1
        ball.replaceX *= 1
    }
    if(ball.x < ball.radius ){
        ball.replaceY *= -1
        ball.replaceX *= 1
    }
   
};  
function multiDrow() {
//ball
ball.x+=ball.replaceX;
ball.y+=ball.replaceY;
context.beginPath();
context.arc(ball.x, ball.y, ball.radius, 0, ball.pi, ball.id );
context.fillStyle = ball.fillStyle;
context.fill();
//paddle
paddle.x += paddle.replaceX ;
context.fillStyle = paddle.fillStyle;
context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
drowBrick(35)
};

function lifeCicle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    multiDrow()
    update();
    requestAnimationFrame(lifeCicle);
};

lifeCicle();

window.addEventListener('load' , () => {
    lifeCicle();
});
document.addEventListener("keydown", (evt) => {
    if(evt.code === "ArrowRight") {
        paddle.replaceX = 5;
    }else if(evt.code === "ArrowLeft") {
        paddle.replaceX = -5;  
    }else if(evt.code === "Space") {
        // lifeCicle();
        ball.replaceX = 2;
        ball.replaceY = 2;
    };
});

