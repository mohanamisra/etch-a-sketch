let grid = document.getElementById("grid");
let cellNum = 0;
let mouseDown = false;

function createBox(){
    cell = document.createElement("div");
    cell.className = "box";
    return cell;
}

function createGrid(cellNum){
    for(let i = 1; i <= cellNum; i++){
        let column = document.createElement("div");
        column.className = "column";
        for(let j = 1; j <= cellNum; j++){
            box = createBox();
            column.appendChild(box);
            box.addEventListener('mousedown', (e) => {
                e.preventDefault();
                // This line prevents unexpected behaviour caused due to mousedown's default drag functionality;
                mouseDown = true;
                //tells the document 'pen is down'.
            });
            box.addEventListener('mouseup', (e)=>{
                mouseDown = false;
                //tells the document 'pen is up'.
            });
            box.addEventListener('mouseenter', (e)=>{
                if(isPurple)
                    hoveredPurple(e.target);
                else if(isPink)
                    hoveredPink(e.target);
                else if(isGreen)
                    hoveredGreen(e.target);
                else if(isYellow)
                    hoveredYellow(e.target);
                else if(isRed)
                    hoveredRed(e.target);
                else
                    hoveredWhite(e.target);
                //if the box is hovered over then you pass that div to hovered and colour it. But hovered only colours if    mouseDown is true, i.e., only if th eprevious event listener (of mousedown) was fired on that div.
            });
            box.addEventListener('click', (e)=>{
                if(isPurple)
                    clickedPurple(e.target);
                else if(isPink)
                    clickedPink(e.target);
                else if(isGreen)
                    clickedGreen(e.target);
                else if(isYellow)
                    clickedYellow(e.target);
                else if(isRed)
                    clickedRed(e.target);
                else
                    clickedWhite(e.target);
                //handles colouring of simple clicked div.
            })
        }
        grid.appendChild(column);
    }
    container.appendChild(grid);
}

function hoveredWhite(item){
    if(mouseDown){ //colours only if mouseDown is true, aka mousedown event was fired on target div.
        item.classList.add("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
    }
}

function hoveredPurple(item){
    if(mouseDown){
        item.classList.remove("hoveredWhite");
        item.classList.add("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
    }
}
function hoveredPink(item){
    if(mouseDown){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.add("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
    }
}
function hoveredGreen(item){
    if(mouseDown){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.add("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
    }
}
function hoveredYellow(item){
    if(mouseDown){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.add("hoveredYellow");
        item.classList.remove("hoveredRed");
    }
}
function hoveredRed(item){
    if(mouseDown){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.add("hoveredRed");
    }
}

function clickedWhite(item){
    //colours only if mouseDown is true, aka mousedown event was fired on target div.
        item.classList.add("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
}
function clickedPurple(item){
        item.classList.remove("hoveredWhite");
        item.classList.add("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
}
function clickedPink(item){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.add("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
}
function clickedGreen(item){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.add("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.remove("hoveredRed");
}
function clickedYellow(item){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.add("hoveredYellow");
        item.classList.remove("hoveredRed");
}
function clickedRed(item){
        item.classList.remove("hoveredWhite");
        item.classList.remove("hoveredPurple");
        item.classList.remove("hoveredPink");
        item.classList.remove("hoveredGreen");
        item.classList.remove("hoveredYellow");
        item.classList.add("hoveredRed");
}

//Get the colour buttons
let whiteButton = document.getElementById("white");
let purpleButton = document.getElementById("purple");
let pinkButton = document.getElementById("pink");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let redButton = document.getElementById("red");
let isWhite;
let isPurple;
let isPink;
let isGreen;
let isYellow;
let isRed;


whiteButton.addEventListener('click', ()=>{
    isPurple = false;
    isPink = false;
    isGreen = false;
    isYellow = false;
    isRed = false;
});

purpleButton.addEventListener('click', ()=>{
    isPurple = true;
    isPink = false;
    isGreen = false;
    isYellow = false;
    isRed = false;
});
pinkButton.addEventListener('click', ()=>{
    isPurple = false;
    isPink = true;
    isGreen = false;
    isYellow = false;
    isRed = false;
});
greenButton.addEventListener('click', ()=>{
    isPurple = false;
    isPink = false;
    isGreen = true;
    isYellow = false;
    isRed = false;
});
yellowButton.addEventListener('click', ()=>{
    isPurple = false;
    isPink = false;
    isGreen = false;
    isYellow = true;
    isRed = false;
});
redButton.addEventListener('click', ()=>{
    isPurple = false;
    isPink = false;
    isGreen = false;
    isYellow = false;
    isRed = true;
});

let input = document.getElementById("grid-size");
let resizeButton = document.getElementById("resize-button");
let clearButton = document.getElementById("clear-button");


resizeButton.addEventListener('click', () => {
    gridSize = input.value;
    newGrid(gridSize);
});

clearButton.addEventListener('click', ()=> {
    newGrid(gridSize);
});

function newGrid(gridSize){
    grid.innerHTML = "";
    if(gridSize < 1 || gridSize > 100){
        alert("Input Error: Please enter a size between 1 and 100");
        createGrid(16);
    }
    else
        createGrid(gridSize);
}

createGrid(16);