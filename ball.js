const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


export const ball = {
    x : window.innerWidth/2,
    y : window.innerHeight/1.2,
    width : window.innerWidth*0.025,
    height : 0,
    id : "ball",   
    pi : Math.PI*2,
    fillStyle : 'red',
};

export function drowBall(){
 context.fillStyle = ball.fillStyle;
 context.arc(ball.x, ball.y, ball.width, ball.height, ball.pi, ball.id )
 context.fill()
}