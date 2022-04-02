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


/* Grid Creation & Reset*/
function createGrid() {
    for (let i = 0; i <= (gridSize.value * gridSize.value); i++) {
        const gridItem = document.createElement('div');
        gridItem.className=`grid-item ${i}`;
        box.appendChild(gridItem);
    };
    size.textContent = `${gridSize.value} x ${gridSize.value}`;
};

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

