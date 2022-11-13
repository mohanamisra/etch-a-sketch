let grid = document.getElementsByClassName("grid")[0];
let column;
let box;
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