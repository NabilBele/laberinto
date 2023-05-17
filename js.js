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
  let way = document.querySelectorAll(".cell");

  way.forEach((e, index) => {
    if (index < 30) {
      e.classList.add("wall");
    }
    //
    if (index >= 870 && index <= 900) {
      e.classList.add("wall");
    }
    //
    if (index > 330 && index < 335) {
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
    for (let i = 124; i <= 304; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 125; i <= 128; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 132; i <= 252; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 248; i <= 251; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 278; i <= 758; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 630; i <= 634; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 754; i <= 757; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 454; i <= 457; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 484; i <= 604; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 46; i <= 376; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 372; i <= 380; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 402; i <= 762; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 763; i <= 766; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 646; i <= 736; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 647; i <= 654; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 684; i <= 774; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 770; i <= 860; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 496; i <= 509; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 145; i <= 475; i += 30) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 260; i <= 264; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
    for (let i = 137; i <= 141; i += 1) {
      if (index == i) {
        e.classList.add("wall");
      }
    }
    //
  });
});
