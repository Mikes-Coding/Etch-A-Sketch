const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    row.appendChild(cell);

    cell.addEventListener('mouseover', function() {
      cell.style.backgroundColor = 'black';
    });
  }
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(function(cell) {
    cell.style.backgroundColor = 'white';
  });
});

const addCellsButton = document.getElementById('add-cells-button');
addCellsButton.addEventListener('click', function() {
  const numCells = document.getElementById('num-cells').value;
  if (numCells >= 0 && numCells <= 100) {
    const container = document.querySelector('.container');
    for (let i = 0; i < numCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      container.appendChild(cell);
    }
  } else {
    alert('Please enter a number between 0 and 100');
  }
});