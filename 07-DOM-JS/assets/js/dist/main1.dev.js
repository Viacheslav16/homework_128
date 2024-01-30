"use strict";

var page = document.createElement('div');
var a = document.createElement('a');
a.innerText = 'Task1';
a.href = './index.html';
a.target = 'blank';
var openButton = document.getElementById("open-btn");
var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-btn");
openButton.addEventListener("click", function () {
  modal.style.display = "flex";
});
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
page.append(a);
document.body.prepend(page);