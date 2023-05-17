$(document).ready(function () {
  $(document).keydown(function (e) {
    var position = $(".minion").position();
    var top = position.top;
    var left = position.left;
    var step = 10;

    switch (e.keyCode) {
      case 37: // Left arrow key
        $(".minion").css("left", left - step);
        break;
      case 38: // Up arrow key
        $(".minion").css("top", top - step);
        break;
      case 39: // Right arrow key
        $(".minion").css("left", left + step);
        break;
      case 40: // Down arrow key
        $(".minion").css("top", top + step);
        break;
    }
  });
  let minion = document.querySelector(".minion");
  let styles = getComputedStyle(minion);

  const rect = minion.getBoundingClientRect();

  console.log("Element's position on the page:");
  console.log("Top:", rect.top);
  console.log("Left:", rect.left);
  console.log("Bottom:", rect.bottom);
  console.log("Right:", rect.right);
});
