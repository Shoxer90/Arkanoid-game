
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

export function BrickCreator (x,y,width,height,fillStyle){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.id = Math.random();   //timeless
    this.fillStyle = fillStyle;
    this.render = function(){
        context.fillStyle = "#" + Math.floor(Math.random()*10**6);
        context.fillRect(this.x, this.y, this.width, this.height);
    };

};

export function drowBrick(quantity){
    let w = window.innerWidth /12;
    let h = w * 0.6;
    let oneRowQuant = Math.floor(window.innerWidth/w)
    let bricket = [];
    for(let i = 0; i < quantity/oneRowQuant; i++ ){
        let bricketDown = i * h
        for(let j = 0; j < oneRowQuant; j++) {
            let bricketOverlook = w * j;
            bricket.push (new BrickCreator (bricketOverlook, bricketDown, w, h, Math.random()))
        }
    };
    bricket.forEach((item) =>{ 
        item.render();
    })
};














