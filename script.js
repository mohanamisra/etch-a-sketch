let grid = document.createElement("div");
grid.className = "grid";

function createGrid(cellNum){
    for(let i = 1; i <= cellNum; i++){
        let column = document.createElement("div");
        column.className = "column";
        for(let j = 1; j <= cellNum; j++){
            let box = document.createElement("div");
            box.className = "box";
            column.appendChild(box);
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);
}

createGrid(3);