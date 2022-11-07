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
            box.addEventListener('mouseover', (e)=>{
                hovered(e.target);
                //if the box is hovered over then you pass that div to hovered and colour it. But hovered only colours if    mouseDown is true, i.e., only if th eprevious event listener (of mousedown) was fired on that div.
            });
            box.addEventListener('click', (e)=>{
                clicked(e.target);
                //handles colouring of simple clicked div.
            })
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);
}

function hovered(item){
    if(mouseDown) //colours only if mouseDown is true, aka mousedown event was fired on target div.
        item.classList.add("hovered");
}

function clicked(item){
    item.classList.add("hovered");
}

let input = document.getElementById("grid-size");
let resizeButton = document.getElementById("resize-button");


resizeButton.addEventListener('click', () => {
    gridSize = input.value;
    newGrid(gridSize);
});

function newGrid(gridSize){
    grid.innerHTML = "";
    createGrid(gridSize);
}

createGrid(5);