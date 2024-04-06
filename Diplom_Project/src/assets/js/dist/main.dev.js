"use strict";

$(function () {
  var slider = $('#mySlider').lightSlider({
    item: 3,
    slideMargin: 30,
    loop: true,
    controls: false,
    responsive: [{
      breakpoint: 1120,
      settings: {
        item: 2,
        slideMargin: 34,
        loop: true,
        controls: false
      }
    }, {
      breakpoint: 660,
      settings: {
        item: 1,
        slideMargin: 40,
        loop: true,
        controls: false
      }
    }]
  });
  $("#myPrevSl").on('click', function () {
    slider.goToPrevSlide();
  });
  $("#myNextSl").on('click', function () {
    slider.goToNextSlide();
  });
});
$(function () {
  var slider = $('#myNextSlider').lightSlider({
    item: 3,
    slideMargin: 30,
    loop: true,
    controls: false,
    responsive: [{
      breakpoint: 1120,
      settings: {
        item: 2,
        slideMargin: 34,
        loop: true,
        controls: false
      }
    }, {
      breakpoint: 660,
      settings: {
        item: 1,
        slideMargin: 40,
        loop: true,
        controls: false
      }
    }]
  });
  $("#myLeftSl").on('click', function () {
    slider.goToPrevSlide();
  });
  $("#myRightSl").on('click', function () {
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
$(document).ready(function () {
  $('.accordion-list > li > .answer').hide();
  $('.accordion-list > li').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }

    return false;
  });
});