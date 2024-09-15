const containerEl = document.getElementById("container");
const colorInputEl = document.getElementById("colorInput");
const pixelEl = document.getElementsByClassName("pixel");
const gridSizeEl = document.getElementById("gridSize");
// Button
const newCanvasBtnEl = document.getElementById("new-cnvs-btn");
const resetBtnEl = document.getElementById("resetBtn");
const eraseBtnEl = document.getElementById("eraseBtn");
const paintBtnEL = document.getElementById("paintBtn");
const randomBtnEL = document.getElementById("randomBtn");

// Default
let canvasSize = 64;
createCanvas(canvasSize);

resetBtnEl.addEventListener("click", function () {
  for (let i = 0; i < pixelEl.length; ++i) {
    pixelEl[i].style.backgroundColor = "#eeeeee";
  }
});

newCanvasBtnEl.addEventListener("click", function () {
  canvasSize = prompt("Enter grid size: ");

  if (canvasSize > 0 && canvasSize <= 100) {
    clearCanvas();
    createCanvas(canvasSize);
    gridSizeEl.textContent = `${canvasSize} x ${canvasSize}`;
  } else {
    alert("Invalid canvas size, input again.");
  }
});

paintBtnEL.addEventListener("click", addColor);

eraseBtnEl.addEventListener("click", function () {
  for (let i = 0; i < pixelEl.length; ++i) {
    pixelEl[i].addEventListener("mouseover", function () {
      pixelEl[i].style.backgroundColor = "#eeeeee";
    });
  }
});

randomBtnEL.addEventListener("click", function () {
  for (let i = 0; i < pixelEl.length; ++i) {
    pixelEl[i].addEventListener("mouseover", function () {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      pixelEl[i].style.backgroundColor = "#" + randomColor;
    });
  }
});

function createCanvas(numOfRow) {
  for (let i = 0; i < numOfRow; ++i) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < numOfRow; ++i) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      row.appendChild(pixel);
    }

    containerEl.appendChild(row);
  }

  // Hover Color
  addColor();
}

function addColor() {
  for (let i = 0; i < pixelEl.length; ++i) {
    pixelEl[i].addEventListener("mouseover", function () {
      pixelEl[i].style.backgroundColor = colorInputEl.value;
    });
  }
}

function clearCanvas() {
  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }
}
