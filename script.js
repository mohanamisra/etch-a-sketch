let grid = document.getElementsByClassName("grid")[0];
let box;
function createGrid(boxNum){
    for(let i = 1; i <= boxNum; i++){
        let column = document.createElement("div");
        column.classList.add("column");
        for(let j = 1; j <= boxNum; j++){
            box = document.createElement("div");
            box.classList.add("box");
            column.appendChild(box);
        }
        grid.appendChild(column);
    }
}

createGrid(16);