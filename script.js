let grid = document.createElement("div");
grid.className = "grid";
let boxToColour;
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
                mouseDown = true;
            });
            box.addEventListener('mouseup', (e)=>{
                mouseDown = false;
            });
            box.addEventListener('mouseover', (e)=>{
                hovered(e.target);
            });
            box.addEventListener('click', (e)=>{
                clicked(e.target);
            })
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);
}

function hovered(item){
    if(mouseDown)
        item.classList.add("hovered");
}

function clicked(item){
    item.classList.add("hovered");
}

function print(num){
    console.log("hello "+num);
}

createGrid(10);