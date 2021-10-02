const grid = document.querySelector('.grid')
const start = document.getElementById('button')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 10

function createGrid (){

    for (let i = 0; i < 100; i++){
        const square = document.createElement('div') //create 100x of square
        square.classList.add('square') //adding class of square (css) to square
        grid.appendChild(square) //putting div 100x into grid
        squares.push(square) //add square into squares array
    }
} 
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))//adding squares into grid

function move(){    //function remove last element+styling + adding first element+styling                   
    let tail = currentSnake.pop() 
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0]+direction)
    squares[currentSnake[0]].classList.add('snake')
}
move()

let timerID = setInterval(move, 1000)   //moving every 1s left-right
clearInterval(timerID)

function control(e){    //function to attach keys (e) means event to access to keys
    if (e.keyCode===39){
        console.log('right arrow')
        direction = 1
    } else if (e.keyCode===38){
        console.log('up arrow')
        direction = -width
    } else if (e.keyCode===37){
        console.log('left arrow')
        direction =-1
    } else if (e.keyCode===40){
        console.log('down arrow')
        direction = +width
    }
}
document.addEventListener('keyup', control)  //assign "click" on buttons
//keyup trigger when push the button and keydown when you release button
