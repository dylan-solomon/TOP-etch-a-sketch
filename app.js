const box = document.querySelector('.board-container');
const resetBtn = document.querySelector('.reset');
const clearBtn = document.querySelector('.clear');
const gridSize = document.getElementById('box-size');
const gridItems = document.querySelectorAll('.grid-item');
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
        gridItem.style.border = "1px solid grey";
        box.appendChild(gridItem);
    };
    size.textContent = `${gridSize.value} x ${gridSize.value}`;
    box.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`;
};

/* Grid Reset & Clear*/
function resetGrid() {
    while (box.lastChild) {
        box.removeChild(box.lastChild);
    };
};

function clearGrid() {
    let colors = document.getElementsByClassName('color');
    while (colors[0]) {
        colors[0].classList.remove('color');
    };
};

/* Buttons */
resetBtn.addEventListener('click', () => {
    resetGrid();
    gridSize.value = 10;
    createGrid();
});

clearBtn.addEventListener('click', clearGrid);

/* Add color class */
box.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('grid-item')) {
        e.target.classList.add('color');
    };
});


createGrid();