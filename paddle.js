const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

export const paddle = {
    replaceX: 0,
    replaceY: 0,
    x :  250,
    //  window.innerWidth/2 - window.innerWidth*0.15, //left
    y: 470, 
    // window.innerHeight*0.93 ,    //down
    width: 200, 
    // window.innerWidth*0.3,
    height: 30,
    // window.innerWidth*0.06,
    fillStyle: 'blue', 
    drow: function () {
        this.x += this.replaceX ;
        context.fillStyle = this.fillStyle;
        context.fillRect(this.x, this.y, this.width, this.height);
    },

};

