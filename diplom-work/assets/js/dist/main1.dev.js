"use strict";

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