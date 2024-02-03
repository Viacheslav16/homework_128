
const playList = [

  {
  
   author: "LED ZEPPELIN",
  
   song:"STAIRWAY TO HEAVEN"
  
  },

  {
  
   author: "QUEEN",
  
   song:"BOHEMIAN RHAPSODY"
  
  },
  
  {
  
   author: "LYNYRD SKYNYRD",
  
   song:"FREE BIRD"
  
  },
  
  {
  
   author: "DEEP PURPLE",
  
   song:"SMOKE ON THE WATER"
  
  },
  
  {
  
   author: "JIMI HENDRIX",
  
   song:"ALL ALONG THE WATCHTOWER"
  
  },
  
  {
  
   author: "AC/DC",
  
   song:"BACK IN BLACK"
  
  },
  
  {
  
   author: "QUEEN",
  
   song:"WE WILL ROCK YOU"
  
  },
  
  {
  
   author: "METALLICA",
  
   song:"ENTER SANDMAN"
  
  }
  
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
const b = document.createElement('b');
const space = document.createTextNode(' ');
const span = document.createElement('span');
liMaster.append(b)
liMaster.append(space)
liMaster.append(span)


playList.forEach((elem)=> {
    const li = liMaster.cloneNode(true);
    li.children[0].innerText = elem.author+":"
    li.children[1].innerText = elem.song
    ol.append(li)
})
page.prepend(h1)
page.append(ol)
page.append(a)

document.body.prepend(page)