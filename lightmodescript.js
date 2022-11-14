// Miscellaneous global variables that several functions need access to.
let column;
let box;
let gridSize;
let colourName;
let blue;
let red;
let mouseDown = false;

//variables for functioning of the page
let grid = document.getElementsByClassName("grid")[0];
let resizeButton = document.getElementById("resize-button");
let clearButton = document.getElementById("clear-button");
let input = document.getElementsByClassName("input-grid-size")[0];

// Getting the buttons
let blueButton = document.getElementById("blue-button");
let redButton = document.getElementById("red-button");

blueButton.addEventListener('click', ()=>{
    blue = true;
    red = false;
});

redButton.addEventListener('click', ()=>{
    blue = false;
    red = true;
});

createGrid(16); //This is the default grid size when the page loads
addEventListeners();

//grid resizing according to user input
resizeButton.addEventListener('click', () =>{
    gridSize = input.value;
    if(gridSize > 100 || gridSize < 1){
        alert("Invalid Input: Please enter a size between 1 and 100")
    }
    else if(isNaN(gridSize)){
        alert("Invalid Input: Please enter a size!");
    }
    else{
        grid.innerHTML = ""; //Otherwise previous grids remain and clutter
        createGrid(gridSize);
        addEventListeners();
    }
});


//grid resizing/creating function
function createGrid(gridSize){
    for(let i = 1; i <= gridSize; i++){
        column = document.createElement("div");
        column.classList.add("column");
        for(let j = 1; j <= gridSize; j++){
            box = document.createElement("div");
            box.classList.add("box");
            column.appendChild(box);
        }
        grid.appendChild(column);
    }
}

// CLEAR BUTTON FUNCTIONALITY
clearButton.addEventListener('click', ()=>{
    grid.innerHTML = "";
    if(isNaN(gridSize))
        createGrid(16);
    else
        createGrid(gridSize);
    addEventListeners();
});


function addEventListeners(){
    let boxes = document.getElementsByClassName("box");
    for(let eachBox of boxes){
        eachBox.addEventListener('mousedown', (e)=>{
            e.preventDefault();
            mouseDown = true;
        });
        eachBox.addEventListener('mouseenter', (e) => {
            if(mouseDown){
                let boxToColour = e.target;
                colour(boxToColour);
            }
        });
        eachBox.addEventListener('mouseup', (e)=>{
            mouseDown = false;
        });
        eachBox.addEventListener('click', (e)=>{
            let boxToColour = e.target;
            colour(boxToColour);
        });
        eachBox.addEventListener('touchmove', (e)=>{
            e.preventDefault();
            let myLocation = e.changedTouches[0];
                let realTarget = document.elementFromPoint(
                myLocation.clientX,
                myLocation.clientY
                );
                if (realTarget.classList.contains("box"))
                    colour(realTarget);
        });
    }
}

function colour(boxToColour){
    if(blue){
        boxToColour.classList.add("colour-blue");
        boxToColour.classList.remove("colour-red");
    }
    else if(red){
        boxToColour.classList.remove("colour-blue");
        boxToColour.classList.add("colour-red");
    }
}






//THIS IS CODE FOR TOUCH (NOT MINE)
//----------------------------------
// pixelContainer.addEventListener("touchmove", function (e) {
//     e.preventDefault();
//     let myLocation = e.changedTouches[0];
//     let realTarget = document.elementFromPoint(
//       myLocation.clientX,
//       myLocation.clientY
//     );
//     if (realTarget.classList.contains("sqr")) colorChange(realTarget);
//   });
//----------------------------------