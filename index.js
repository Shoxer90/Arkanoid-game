const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
// const ball =
// const bricks = []



 function repeat(){
     requestAnimationFrame(repeat)
    //  stateChanges()
    events()
     drow()
 }
// start the game
const events = () => {
    document.addEventListener('keydown' , (evt) => {
        console.log(evt.code)
        if(evt.code === 'Space') {
            repeat()
            // let eventOrient = -1
            // eventOrient *= -1
            // if(eventOrient > 0)repeat()
            // else{
            //     stop() // need wright function vor stoping game
            // }
        }
        if(evt.code === 'ArrowRight') {
            // drow()
            // repeat()
            context.clearRect(paddle.x, paddle.y, paddle.width, paddle.height)
            if(paddle.x+paddle.width === window.innerWidth || paddle.x === 0 ){
                paddle.replaceX += 1
            }
        }
      })
      document.addEventListener('keyup' , (evt) => {
      })
}
events()
