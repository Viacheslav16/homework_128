$(function(){
     const mainSlider = $("#mainSlider").lightSlider({
      item: 1,
      slideMove: 1,
      loop: true,
      controls: false,
      vertical: true,
      verticalHeight: 800
    })
    $("#nextSl").on('click', function(){
      mainSlider.goToNextSlide()
    })
    
});
$(function(){
  const slider = $('#mySlider');
  let width = $(window).width();

  function setupSlider() {
    let newWidth = $(window).width();

    if(newWidth <= 660) {
      slider.lightSlider({
        item: 1,
        slideMargin: 40,
        loop: true,
        controls: false
      });
    }else if (newWidth >= 661 && newWidth <= 970) {
      slider.lightSlider({
        item: 2,
        slideMargin: 34,
        loop: true,
        controls: false,
      });
    } else {
      slider.lightSlider({
        item: 3,
        slideMargin: 30,
        loop: true,
        controls: false
      });
    }

    width = newWidth;
    slider.refresh(); 
  }

  setupSlider(); 

  $(window).resize(function() {
    setupSlider(); 
  });

  $("#myPrevSl").on('click', function(){
    slider.goToPrevSlide();
  });

  $("#myNextSl").on('click', function(){
    slider.goToNextSlide();
  });
});

lightGallery(document.getElementById('aniimated-thumbnials'), {
  thumbnail:true
});

function myMap(link) {
  link.remove();
  const map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('Your location is here');
};

window.new_hamb.addEventListener("click", function () {
  document.body.classList.toggle("open_mobile_menu");
  window.new_hamb.classList.toggle("is-active");
});

window.hamb_btn_mobile.addEventListener("click", function () {
  document.body.classList.toggle("open_mobile_menu");
  window.new_hamb.classList.toggle("is-active");
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      document.getElementById("myHeader").style.height = "80px"; 
      document.getElementById("myHeader").style.background = "linear-gradient(270deg, rgba(26, 101, 241, 0.35) 50%, rgba(26, 101, 241, 0.4) 54.1%, rgba(26, 101, 241, 0.4) 77.19%), rgba(26, 101, 241, 0.42)"; 
      document.getElementById("headerChange").style.margin = "15px 0 0"; 
      document.getElementById("headerChange").style.transition = "all .7s ease"; 
  } else if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200) {
      document.getElementById("myHeader").style.height = "160px";
      document.getElementById("myHeader").style.background = "linear-gradient(270deg, rgba(206, 205, 205, 0.3) 50%, rgba(255, 255, 255, 0.4) 54.1%, rgba(255, 255, 255, 0.00) 77.19%), rgba(255, 255, 255, 0.02)"; 
      document.getElementById("headerChange").style.margin = "53px 0 0";  
      document.getElementById("headerChange").style.transition = "all .7s ease"; 
  }
};

const window1 = document.getElementById('myChangeIndex');
const window2 = document.getElementById('myForm');
// Додати обробник подій для кліку на window1
window1.addEventListener('click', function() {
  // Встановити вікно window2 вище за window1, змінивши його стиль zIndex
  window2.style.zIndex = '1';
});


