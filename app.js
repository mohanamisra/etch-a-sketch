let container = document.getElementById("container");
let button = document.getElementById("button");
let userInput = document.getElementById("set-grid");

function makeGrid(cellNum) {
    for(i = 0; i < cellNum; i++) {
        for(j = 0; j < cellNum; j++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "cell";
            container.style.gridTemplateColumns = `repeat(${cellNum}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${cellNum}, 1fr)`;
        }
    }
    let cells = document.getElementsByClassName("cell");

    for(const cell of cells) {
        cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    });
}
for(const cell of cells) {
    cell.addEventListener("touchmove", function (e) {
        e.preventDefault();
        let myLocation = e.changedTouches[0];
        let realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        if(realTarget.classList.contains("cell")) {
            realTarget.style.backgroundColor = "black";
        }
    })
} 
}

let cells = document.getElementsByClassName("cell");

makeGrid(16);

userInput.addEventListener("change", () => {
    container.innerHTML = "";
    if((userInput.value > 100) || (userInput.value < 1 )) {
        alert("Enter a number between 1 and 100!")
        userInput.value = 16;
    }
    makeGrid(userInput.value);
});

button.addEventListener("click", () => {
    for(const cell of cells) {
        cell.style.backgroundColor = "white";
    }
});

let random = document.getElementById("colour-button");
random.addEventListener("click", draw);

let colourButtons = document.getElementsByClassName("colours");
for(const colourButton of colourButtons) {
    colourButton.addEventListener("click", () => {
        let cells = document.getElementsByClassName("cell");
        for(const cell of cells) {
            cell.addEventListener("mouseover", () => {
                let drawColour = colourButton.getAttribute("id");
                cell.style.backgroundColor = `${drawColour}`;
            })
        }
        for(const cell of cells) {
            cell.addEventListener("touchmove", function (e) {
                e.preventDefault();
                let myLocation = e.changedTouches[0];
                let realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
                if(realTarget.classList.contains("cell")) {
                    let drawColour = colourButton.getAttribute("id");
                    realTarget.style.backgroundColor = `${drawColour}`;
                }
            })
        }    
    })
}


function draw(){
    let cells = document.getElementsByClassName("cell");

    for(const cell of cells) {
        cell.addEventListener("mouseover", () => {
        let randomColour = generateRandomColour();
        cell.style.backgroundColor = randomColour;
    });
}
for(const cell of cells) {
    cell.addEventListener("touchmove", function (e) {
        e.preventDefault();
        let myLocation = e.changedTouches[0];
        let realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        if(realTarget.classList.contains("cell")) {
            let randomColour = generateRandomColour();
            realTarget.style.backgroundColor = randomColour;
        }
    })
}
    
}

function generateRandomColour () {
    let letters = "0123456789ABCDEF";
    let colour = "#";
    for(i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

//Following is the support for touch-compatible devices

