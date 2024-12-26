var b = document.getElementById("car");
var move = 10;
window.onload = () => {
  b.style.top = 0;
  b.style.left = 0;
};

window.onkeydown = (e) => {
  switch (e.code) {
    case "ArrowUp":
      b.style.top = parseInt(b.style.top) - move + "px";
      break;
    case "ArrowDown":
      b.style.top = parseInt(b.style.top) + move + "px";
      break;
    case "ArrowLeft":
      b.style.left = parseInt(b.style.left) - move + "px";
      break;
    case "ArrowRight":
      b.style.left = parseInt(b.style.left) + move + "px";
      break;
  }
};
