const MAX_GRID = 960;
const INIT_GRID = 16;
const mainBox = document.querySelector("div");

function CreateGrid(gridSize) {
    let size = MAX_GRID/gridSize;
    
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let grid = document.createElement("div");
            grid.style.width = `${size}px`;
            grid.style.height = `${size}px`;
            grid.classList.add("grid-box");
            mainBox.appendChild(grid);
            grid.addEventListener("mouseenter",() => {grid.style.backgroundColor = "green";});
        }
    }
}

function topBtnFunc() {
    let grid_size = INIT_GRID;
    let prmpt = prompt("whats the size of the grid: ");
    grid_size = parseInt(prmpt);
    if(grid_size > 100){
        grid_size = 100;
    }
    let prevGrid = document.querySelectorAll(".grid-box");
    prevGrid.forEach((ele,num,parentNode) => {ele.remove()})
    CreateGrid(grid_size);
}

const topBtn = document.querySelector("button");
topBtn.addEventListener("click",topBtnFunc);