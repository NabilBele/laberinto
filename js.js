// Define the size of the maze
const numRows = 30;
const numCols = 30;

// Get the maze container
const mazeContainer = document.querySelector(".maze");

// Generate the maze cells
for (let i = 0; i < numRows * numCols; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.classList.add(`cell${i}`);
  mazeContainer.appendChild(cell);
}
addEventListener("load", () => {
  let option = [true, false];
  let way = document.querySelectorAll(".cell");
  console.log(way.length);
  way.forEach((e, index) => {
    if (index < 30) {
      e.classList.add("wall");
    }
    //
    if (index >= 870 && index <= 900) {
      e.classList.add("wall");
    }
    //
    if (index > 330 && index < 336) {
      e.classList.add("wall");
    }
    //
    for (let i = 0; i <= 450; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 660; i <= 840; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 59; i <= 329; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 539; i <= 869; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 155; i <= 305; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 156; i <= 160; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
  });
});
