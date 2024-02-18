"use strict";

$(function () {
  var mainSlider = $("#mainSlider").lightSlider({
    item: 1,
    slideMove: 1,
    loop: true,
    controls: false,
    vertical: true,
    verticalHeight: 800
  });
  $("#nextSl").on('click', function () {
    mainSlider.goToNextSlide();
  });
});
$(function () {
  var slider = $('#mySlider');
  var width = $(window).width();

  function setupSlider() {
    var newWidth = $(window).width();

    if (newWidth <= 660) {
      slider.lightSlider({
        item: 1,
        slideMargin: 40,
        loop: true,
        controls: false
      });
    } else if (newWidth >= 661 && newWidth <= 970) {
      slider.lightSlider({
        item: 2,
        slideMargin: 34,
        loop: true,
        controls: false
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
  $(window).resize(function () {
    setupSlider();
  });
  $("#myPrevSl").on('click', function () {
    slider.goToPrevSlide();
  });
  $("#myNextSl").on('click', function () {
    slider.goToNextSlide();
  });
});
lightGallery(document.getElementById('aniimated-thumbnials'), {
  thumbnail: true
});

function myMap(link) {
  link.remove();
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([51.5, -0.09]).addTo(map).bindPopup('Your location is here');
}

;
window.new_hamb.addEventListener("click", function () {
  document.body.classList.toggle("open_mobile_menu");
  window.new_hamb.classList.toggle("is-active");
});
window.hamb_btn_mobile.addEventListener("click", function () {
  document.body.classList.toggle("open_mobile_menu");
  window.new_hamb.classList.toggle("is-active");
});