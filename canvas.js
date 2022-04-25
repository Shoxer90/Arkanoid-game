import { drowBrick} from "./bricks.js";
import { ball } from "./ball.js";
import {paddle} from "./paddle.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function update() {
    // drowBrick(25);
    
    if(paddle.x + paddle.width > canvas.width|| paddle.x < 0  ) {           //limit for paddle
        paddle.replaceX = 0;
    }
    if(ball.y + ball.width > canvas.height || ball.x + ball.width > canvas.height || ball.y < 0 || ball.x < 0  || ball.y + ball.width > paddle.y  ) {  
        console.log("hi")          
        ball.replaceY = -5
        ball.replaceX = -5
    }
    
}; 

function lifeCicle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    paddle.drow();
    ball.drow();
    update();
    requestAnimationFrame(lifeCicle);
    // context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

};
lifeCicle();




document.addEventListener("keyup", (evt) => {
    if(evt.code === "ArrowRight") {
        paddle.replaceX = 5;
    }
    else if(evt.code === "ArrowLeft") {
        paddle.replaceX = -5;
    }
    else if(evt.code === "Space") {
        ball.replaceX=5;
        ball.replaceY=5
        lifeCicle();
        // if(   ball.replaceX == = 5 &&  ball.replaceY === 5){
        //     ball.replaceX = 0;
        //     ball.replaceY = 0;
        // }
        // ball.replaceX = 5;
        // ball.replaceY = 5;
    };
    ball.x+=ball.replaceX;
    ball.y+=ball.replaceY;


});
