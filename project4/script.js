var main = document.querySelector("#main");
var clsr = document.querySelector(".cursor");
main.addEventListener("mousemove", function (dets) {
  clsr.style.left = dets.x + "px";
  clsr.style.top = dets.y + "px";
});
