var arr = [
  {
    dp: "https://images.unsplash.com/photo-1705162005861-607698ffbaa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    storey:
      "https://images.unsplash.com/photo-1704949834515-e9d11a0ceb9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1705078368218-6252bc56a644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    storey:
      "https://images.unsplash.com/photo-1704774802940-ac9542e90544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1705155843858-4d7ddb7e9dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    storey:
      "https://images.unsplash.com/photo-1704986528748-bf7ac93bd0d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var storiyan = document.querySelector(".storiyan");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="stories">
<img id ="${idx}" src="${elem.dp}">
    </div>`;
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
  document.querySelector(".full-screen").style.display = "block";
  document.querySelector(".full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].storey
  })`;
  setTimeout(function () {
    document.querySelector(".full-screen").style.display = "none";
  }, 3000);
});
