// Globals
const controlButtons = document.querySelectorAll('.control');
const colorValueEl = document.querySelector('#current__color');
let colorsContainerEl = document.querySelector('.colors__container');
let colorBlockEl = [...document.querySelectorAll('.color__block')];
let numberOfBlocks = colorBlockEl.length;
let lastBlock = colorBlockEl[numberOfBlocks - 1];

let updateBlocks = () => {
  let colorBlockEl = [...document.querySelectorAll('.color__block')];
  lastBlock = colorBlockEl[numberOfBlocks - 1];
  return colorBlockEl;
};

// Reset game or Add or remove blocks based on control button press
controlButtons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.innerHTML) {
      case 'New Game':
        newRandomColor();
        break;
      case '-':
        removeColorBlock();
        break;
      case '+':
        addColorBlock();
        break;
    }
  });
});

// Generate random RGB color
function newRandomColor() {
  let rgbArray = [];
  for (let i = 0; i < 3; i++) {
    rgbArray.push(Math.floor(Math.random() * 256) + 1);
  }
  colorValueEl.innerHTML = `RGB (${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]} )`;
  // needs to assign one random block to the same color
  return;
}
// call on start
newRandomColor();

// Remove one color block (min 2)
function removeColorBlock() {
  if (numberOfBlocks === 2) {
    return;
  }
  numberOfBlocks -= 1;
  lastBlock.remove();
  updateBlocks();
  return;
}

// Add one color block (max 6)
function addColorBlock() {
  if (numberOfBlocks === 6) {
    return;
  }
  numberOfBlocks += 1;
  colorsContainerEl.innerHTML += `<div class="color__block block-${numberOfBlocks}"></div>`;
  updateBlocks();
  return;
}
