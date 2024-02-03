"use strict";

var page = document.createElement('div');
var a = document.createElement('a');
a.innerText = 'Task1';
a.href = './index.html';
a.target = 'blank';
var openButton = document.createElement('button');
openButton.id = 'open-btn';
openButton.innerText = 'Відкрити';
var modal = document.createElement('div');
modal.id = 'modal';
var modal_content = document.createElement('div');
modal_content.className = 'modal_content';
var modal_two = document.createElement('div');
modal_two.className = 'modal_two';
var span = document.createElement('span');
span.innerText = 'Please,close me => ';
var closeButton = document.createElement('button');
closeButton.id = 'close-btn';
closeButton.innerText = 'Закрити';
openButton.addEventListener("click", function () {
  modal_content.style.display = "flex";
});
closeButton.addEventListener("click", function () {
  modal_content.style.display = "none";
});
modal.append(modal_content);
modal.append(openButton);
modal_content.append(modal_two);
modal_two.append(span);
modal_two.append(closeButton);
page.append(a);
document.body.prepend(modal);
document.body.prepend(page);