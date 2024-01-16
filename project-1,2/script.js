//project -1
// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");
// var flag = 0;
// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "yellow";
//
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//
//     flag = 0;
//   }
// });
// var h = document.querySelectorAll("h1");
// h.forEach(function (e) {
//   console.log(e);
// });

//project-2

var h = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    h.innerHTML = "friends";
    h.style.color = "green";
    btn.innerHTML = "remove friend";
    check = 1;
  } else {
    h.innerHTML = "stranger";
    h.style.color = "red";
    btn.innerHTML = "add friend";
    check = 0;
  }
});
