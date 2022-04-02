const box = document.querySelector('.board-container');
const gridItem = document.createElement('div');
const gridSize = document.getElementById('box-size');
const size = document.querySelector('.size');


/* Grid Size Indicator */
size.textContent = `${gridSize.value} x ${gridSize.value}`;

gridSize.addEventListener('mouseup', () => {size.textContent = `${gridSize.value} x ${gridSize.value}`;});



function createGrid() {
    for (let i = 0; i <= gridSize.value; i++) {
        box.appendChild(gridItem);
    }
}

createGrid()