
const page = document.createElement('div');
const a = document.createElement('a');
a.innerText = 'Task1';
a.href = './index.html';
a.target = 'blank';
const openButton = document.getElementById("open-btn");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-btn");

openButton.addEventListener("click", function() {
  modal.style.display = "flex";
});

closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});

page.append(a)
document.body.prepend(page)