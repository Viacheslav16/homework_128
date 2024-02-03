
const edit = document.getElementById('edit');
const textArea = document.createElement('textarea');
textArea.id = 'textArea';
textArea.style.display = 'none';
textArea.value = edit.innerText;

edit.after(textArea);

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.code === 'KeyE') {
    event.preventDefault();
    edit.style.display = 'none';
    textArea.style.display = 'block';
    textArea.focus();
  }

  if (event.ctrlKey && event.code === 'KeyS') {
    event.preventDefault();
    edit.innerText = textArea.value;
    textArea.style.display = 'none';
    edit.style.display = 'block';
  }
});