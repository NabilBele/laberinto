addEventListener("load", () => {
  var check1 = false;
  var keysCount = 0;
  var keysCountDiv = document.querySelector(".keys");
  var score = document.querySelector(".score");

  function checkingTop() {
    let walls = document.querySelectorAll(".wall");
    let minion = document.querySelector(".minion");
    for (let i = 0; i < walls.length; i++) {
      const wall = walls[i];
      const rect2 = wall.getBoundingClientRect();
      const rect = minion.getBoundingClientRect();
      if (
        rect.top == rect2.bottom &&
        (rect.right == rect2.left + 20 ||
          rect.right == rect2.left + 10 ||
          rect.left == rect2.right - 20 ||
          rect.left == rect2.right - 10 ||
          rect.left == rect2.left - 10)
      ) {
        check1 = false;
        break; // Exit the loop when the condition is met
      } else {
        check1 = true;
      }
    }
  }
  function checkingBottom() {
    let walls = document.querySelectorAll(".wall");
    let minion = document.querySelector(".minion");

    for (let i = 0; i < walls.length; i++) {
      const wall = walls[i];
      const rect2 = wall.getBoundingClientRect();
      const rect = minion.getBoundingClientRect();

      if (
        rect.bottom == rect2.top &&
        (rect.right == rect2.left + 20 ||
          rect.right == rect2.left + 10 ||
          rect.left == rect2.right - 20 ||
          rect.left == rect2.right - 10 ||
          rect.left == rect2.left - 10)
      ) {
        check1 = false;
        break; // Exit the loop when the condition is met
      } else {
        check1 = true;
      }
    }
  }
  function checkingRight() {
    let walls = document.querySelectorAll(".wall");
    let minion = document.querySelector(".minion");

    for (let i = 0; i < walls.length; i++) {
      const wall = walls[i];
      const rect2 = wall.getBoundingClientRect();
      const rect = minion.getBoundingClientRect();

      if (
        rect.right == rect2.left &&
        (rect.top == rect2.bottom - 10 ||
          rect.top == rect2.top ||
          rect.top == rect2.top - 10 ||
          rect.bottom == rect2.top + 10 ||
          rect.bottom == rect2.bottom + 10)
      ) {
        check1 = false;
        break; // Exit the loop when the condition is met
      } else {
        check1 = true;
      }
    }
  }
  function checkingLeft() {
    let walls = document.querySelectorAll(".wall");
    let minion = document.querySelector(".minion");

    for (let i = 0; i < walls.length; i++) {
      const wall = walls[i];
      const rect2 = wall.getBoundingClientRect();
      const rect = minion.getBoundingClientRect();

      if (
        rect.left == rect2.right &&
        (rect.top == rect2.bottom - 10 ||
          rect.top == rect2.top ||
          rect.top == rect2.top - 10 ||
          rect.bottom == rect2.top + 10 ||
          rect.bottom == rect2.bottom + 10)
      ) {
        check1 = false;
        break; // Exit the loop when the condition is met
      } else {
        check1 = true;
      }
    }
  }
  function GetKey() {
    var keys = document.querySelectorAll("ion-icon");
    keys.forEach((e) => {
      var minion = document.querySelector(".minion");
      const rect = minion.getBoundingClientRect();
      const rect2 = e.getBoundingClientRect();
      if (
        (rect.left == rect2.left || rect.right == rect2.right - 10) &&
        (rect.bottom == rect2.bottom || rect.top == rect2.top)
      ) {
        e.style.display = "none";
        keysCount += 1;
        keysCountDiv.textContent = keysCount;
        score.innerHTML = parseInt(score.innerHTML) + 100;
      } else {
        score.innerHTML -= 1;
      }
    });
  }
  //////open door function
  function openDoor() {
    var door = document.querySelectorAll(".exit");
    door.forEach((e) => {
      if (keysCount == 3) {
        e.classList.remove("wall");
        e.classList.add("opened");
      }
    });
  }
  /////finishing
  function Final() {
    if (parseInt(score.innerHTML) <= 0) {
      alert("Game Over");
    }
  }
  ///////to win
  function Win() {
    var finalWay = document.querySelectorAll(".opened");
    finalWay.forEach((e) => {
      var minion = document.querySelector(".minion");
      const rect = minion.getBoundingClientRect();
      const rect2 = e.getBoundingClientRect();
      if (rect.left == rect2.right) {
        alert("youWin");
      }
    });
  }
  ////////
  $(document).keydown(function (e) {
    var position = $(".minion").position();
    var top = position.top;
    var left = position.left;
    var step = 10;

    switch (e.keyCode) {
      case 37: // Left arrow key
        checkingLeft();
        if (check1) {
          $(".minion").css("left", left - step);
        }
        GetKey();
        openDoor();
        Final();
        break;
      case 38: // Up arrow key
        checkingTop();
        if (check1) {
          $(".minion").css("top", top - step);
        }
        GetKey();
        openDoor();
        Final();
        break;
      case 39: // Right arrow key
        checkingRight();
        if (check1) {
          $(".minion").css("left", left + step);
        }
        GetKey();
        openDoor();
        Final();
        Win();
        break;
      case 40: // Down arrow key
        checkingBottom();
        if (check1) {
          $(".minion").css("top", top + step);
        }
        GetKey();
        openDoor();
        Final();
        break;
    }
  });
});
//////////
