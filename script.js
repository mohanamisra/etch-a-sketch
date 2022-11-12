let grid = document.getElementsByClassName("grid")[0];
let box;

for(let i = 1; i <= 16; i++){
    let column = document.createElement("div");
    column.classList.add("column");
    for(let j = 1; j <= 16; j++){
        box = document.createElement("div");
        box.classList.add("box");
        column.appendChild(box);
    }
    grid.appendChild(column);
}