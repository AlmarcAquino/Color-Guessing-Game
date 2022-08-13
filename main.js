// Globals
const controlButtons = document.querySelectorAll('.control');
const colorValueEl = document.querySelector('#current__color');
let colorsContainerEl = document.querySelector('.colors__container');
let colorBlockEl = [...document.querySelectorAll('.color__block')];
let numberOfBlocks = colorBlockEl.length;
let lastBlock = colorBlockEl[numberOfBlocks - 1];
let score = 0;

let updateBlocks = () => {
  colorBlockEl = [...document.querySelectorAll('.color__block')];
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

// Event listeners for when a block is clicked
colorBlockEl.forEach((block) => {
  block.addEventListener('click', () => {
    if (block.classList.contains(`correct`)) {
      console.log('that is the correct block');
      block.classList.remove('correct');
      score++;
      shuffleBlockColors();
    } else {
      console.log('wrong block');
      block.classList.remove('correct');
      score = 0;
      shuffleBlockColors();
    }
  });
});

// Generate random RGB color
function newRandomColor() {
  let rgbArray = [];
  for (let i = 0; i < 3; i++) {
    rgbArray.push(Math.floor(Math.random() * 256) + 1);
  }
  return rgbArray;
}
// call on start
newRandomColor();

// Shuffle block colors
function shuffleBlockColors() {
  // Assign a random color to each block
  console.log(colorBlockEl);
  colorBlockEl.forEach(block, () => {
    let rgbValues = newRandomColor();
    block.style.backgroundColor = `rgb(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]})`;
  });

  let correctBlockRGB = newRandomColor();
  colorValueEl.innerHTML = `RGB (${correctBlockRGB[0]}, ${correctBlockRGB[1]}, ${correctBlockRGB[2]} )`;
  // assign random block 'correct' class and bgc
  let randomBlock = colorBlockEl[Math.floor(Math.random() * numberOfBlocks)];
  randomBlock.classList.add(`correct`);
  randomBlock.style.backgroundColor = `rgb(${correctBlockRGB[0]}, ${correctBlockRGB[1]}, ${correctBlockRGB[2]})`;
}

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

  let newDiv = document.createElement('div');
  newDiv.classList.add(`color__block`, `block-${numberOfBlocks}`);
  newDiv.addEventListener('click', () => {
    if (newDiv.classList.contains(`correct`)) {
      console.log('that is the correct block');
      block.classList.remove('correct');
      score++;
      shuffleBlockColors();
    } else {
      console.log('wrong block');
      block.classList.remove('correct');
      score = 0;
      shuffleBlockColors();
    }
  });

  colorsContainerEl.appendChild(newDiv);
  updateBlocks();
  return;
}
