"use strict";

var playList = ['{ LED ZEPPELIN : "STAIRWAY TO HEAVEN" }', '{LYNYRD SKYNYRD : "FREE BIRD" }', '{ DEEP PURPLE : "SMOKE ON THE WATER" }', '{JIMI HENDRIX : "ALL ALONG THE WATCHTOWER" }', '{AC/DC : "BACK IN BLACK" }', '{QUEEN : "WE WILL ROCK YOU" }', '{METALLICA : "ENTER SANDMAN" }'];
var page = document.createElement('div');
var h1 = document.createElement('h1');
h1.innerText = 'Плейлист';
var ol = document.createElement('ol');
var a = document.createElement('a');
a.innerText = 'Task2';
a.href = '../07-DOM-JS/index1.html';
a.target = 'blank';
var liMaster = document.createElement('li');
liMaster.classList.add('sing-item');
playList.forEach(function (item) {
  var li = liMaster.cloneNode();
  li.innerText = item;
  ol.append(li);
});
page.prepend(h1);
page.append(ol);
page.append(a);
document.body.prepend(page);