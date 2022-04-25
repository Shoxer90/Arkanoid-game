const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


export const ball = {
    replaceX: 0,
    replaceY: 0,
    x: 350,
    //  window.innerWidth/2,
    y :  440,
    //  window.innerHeight*0.93 - window.innerWidth*0.025,
    width : 25,
    //  window.innerWidth*0.025,
    height : 0,
    id : "ball",   
    pi : Math.PI*2,
    fillStyle : 'red',
    drow : function(){
        this.x+=this.replaceX;
        this.y+=this.replaceY;
        context.fillStyle = this.fillStyle;
        context.arc(this.x, this.y, this.width, this.height, this.pi, this.id );
        // context.clearRect(0,0,canvas.width, canvas.height)
        context.fill();
    }
};



