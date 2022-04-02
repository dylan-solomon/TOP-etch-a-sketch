const box = document.querySelector('.board-container');
const resetBtn = document.querySelector('.reset');
const gridSize = document.getElementById('box-size');
const size = document.querySelector('.size');

/* Grid Size Indicator */
size.textContent = `${gridSize.value} x ${gridSize.value}`;

gridSize.addEventListener('mouseup', () => {
    resetGrid();
    createGrid();
});


/* Grid Creation*/
function createGrid() {
    for (let i = 1; i <= (gridSize.value * gridSize.value); i++) {
        const gridItem = document.createElement('div');
        gridItem.className=`grid-item ${i}`;
        gridItem.textContent=" ";
        gridItem.style.border = "1px solid black";
        box.appendChild(gridItem);
    };
    size.textContent = `${gridSize.value} x ${gridSize.value}`;
    box.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
};

/* Grid Reset*/
function resetGrid() {
    while (box.lastChild) {
        box.removeChild(box.lastChild);
    };
};

resetBtn.addEventListener('click', () => {
    resetGrid();
    gridSize.value = 10;
    createGrid();
});


createGrid()

