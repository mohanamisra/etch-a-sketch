// Miscellaneous global variables that several functions need access to.
let column;
let box;
let gridSize;
let colourName;
let blue = true;
let red;
let multicolour;
let mouseDown = false;

//variables for functioning of the page
let grid = document.getElementsByClassName("grid")[0];
let resizeButton = document.getElementById("resize-button");
let clearButton = document.getElementById("clear-button");
let input = document.getElementsByClassName("input-grid-size")[0];

// Getting the buttons
let blueButton = document.getElementById("blue-button-light-mode");
let redButton = document.getElementById("red-button-light-mode");
let multicolourButton = document.getElementById("multi-colour-button");

blueButton.addEventListener('click', ()=>{
    blue = true;
    red = false;
    multicolour = false;
});

redButton.addEventListener('click', ()=>{
    blue = false;
    red = true;
    multicolour = false;
});

multicolourButton.addEventListener('click', () => {
    blue = false;
    red = false;
    multicolour = true;
})

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
            box.classList.add("box-light-mode");
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
    let boxes = document.getElementsByClassName("box-light-mode");
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
                if (realTarget.classList.contains("box-light-mode"))
                    colour(realTarget);
        });
    }
}

function colour(boxToColour){
    if(blue){
        boxToColour.style.backgroundColor = "";
        boxToColour.classList.add("colour-blue");
        boxToColour.classList.remove("colour-red");
    }
    else if(red){
        boxToColour.style.backgroundColor = "";
        boxToColour.classList.remove("colour-blue");
        boxToColour.classList.add("colour-red");
    }
    else if(multicolour){
        boxToColour.classList.remove("colour-blue");
        boxToColour.classList.remove("colour-red");
        boxToColour.style.backgroundColor = `rgb(${colourGenerate()})`;
        boxToColour.classList.add("multi-colour");
    }
}

function colourGenerate(){
    let rValue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let gValue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let bValue = Math.floor(Math.random() * (255 - 155 + 1) + 155);
    
    return `${rValue}, ${gValue}, ${bValue}`;
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