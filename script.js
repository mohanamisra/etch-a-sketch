// Miscellaneous global variables that several functions need access to.
let column;
let box;
let mouseDown = false;

//variables for functioning of the page
let grid = document.getElementsByClassName("grid")[0];
let resizeButton = document.getElementById("resize-button");

createGrid(16); //This is the default grid size when the page loads

//grid resizing according to user input
resizeButton.addEventListener('click', () =>{
    let input = document.getElementsByClassName("input-grid-size")[0];
    let gridSize = input.value;
    if(gridSize > 100 || gridSize < 1){
        alert("Invalid Input: Please enter a size between 1 and 100")
    }
    else if(isNaN(gridSize)){
        alert("Invalid Input: Please enter a size!");
    }
    else{
        grid.innerHTML = ""; //Otherwise previous grids remain and clutter
        createGrid(gridSize);
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
    })
}

function colour(boxToColour){
    boxToColour.classList.add("colour");
}