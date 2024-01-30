
const playList = [
    '{ LED ZEPPELIN : "STAIRWAY TO HEAVEN" }',
    '{LYNYRD SKYNYRD : "FREE BIRD" }',
    '{ DEEP PURPLE : "SMOKE ON THE WATER" }',
    '{JIMI HENDRIX : "ALL ALONG THE WATCHTOWER" }',
    '{AC/DC : "BACK IN BLACK" }',
    '{QUEEN : "WE WILL ROCK YOU" }',
    '{METALLICA : "ENTER SANDMAN" }'
  ];


const page = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerText = 'Плейлист';
const ol = document.createElement('ol');
const a = document.createElement('a');
a.innerText = 'Task2';
a.href = '../07-DOM-JS/index1.html';
a.target = 'blank';

const liMaster = document.createElement('li');
liMaster.classList.add('sing-item');

playList.forEach((item)=> {
    const li = liMaster.cloneNode();
    li.innerText = item;
    ol.append(li)
})
page.prepend(h1)
page.append(ol)
page.append(a)

document.body.prepend(page)