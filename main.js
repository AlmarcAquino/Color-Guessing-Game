// Globals
const controlButtons = document.querySelectorAll('.control');
const colorValueEl = document.querySelector('#current__color');
const colorsContainerEl = document.querySelector('.colors__container');
const colorBlockEl = document.querySelectorAll('.color__block');
let numberOfBlocks = colorBlockEl.length;

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
  let lastBlock = colorBlockEl[numberOfBlocks - 1];
  lastBlock.remove();
  numberOfBlocks -= 1;
  console.log(colorBlockEl.length);
  return;
}

// Add one color block (max 6)
function addColorBlock() {}
