const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

export const paddle = { 
    replaceX: 5,
    replaceY: 0,
    x : window.innerWidth/2 - window.innerWidth*0.15, //left
    y: 600 ,    //down
    width: window.innerWidth*0.3,
    height:window.innerWidth*0.06,
    fillStyle: 'blue', 
}

export function drowPaddle() {
    context.fillStyle = paddle.fillStyle;
    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}