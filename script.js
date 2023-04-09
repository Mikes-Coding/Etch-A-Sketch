const container = document.querySelector('.container');
let size = 16;

function createGrid(size) {
  container.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      row.appendChild(cell);

      cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = 'black';
      });
    }
  }
}

createGrid(size);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(function(cell) {
    cell.style.backgroundColor = 'white';
  });
});

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
  const input = document.getElementById('grid-size');
  gridSize = input.value;
  createGrid(size);
});
