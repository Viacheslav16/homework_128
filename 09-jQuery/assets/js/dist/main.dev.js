"use strict";

$(function () {
  var mySlider = $("#mySlider").lightSlider({
    item: 5,
    slideMargin: 20,
    loop: true,
    controls: false
  });
  $("#myPrevSl").on('click', function () {
    mySlider.goToPrevSlide();
  });
  $("#myNextSl").on('click', function () {
    mySlider.goToNextSlide();
  });
}), $(function () {
  var orgSlider = $("#compSlider").lightSlider({
    item: 9,
    slideMargin: 20,
    loop: true,
    controls: false,
    adaptiveHeight: true
  });
  $("#myPrevl").on('click', function () {
    orgSlider.goToPrevSlide();
  });
  $("#myNextl").on('click', function () {
    orgSlider.goToNextSlide();
  });
}), $(function () {
  $("#myPic").lightSlider({
    item: 1,
    slideMargin: 20,
    loop: true,
    controls: false
  });
});
var openButton = document.getElementById('myPrevSl');
var closeButton = document.getElementById('myPrevTwo');

openButton.onclick = function () {
  closeButton.style.display = "flex";
  openButton.style.display = "none";
};

var openNewButton = document.getElementById('myNextSl');
var closeNewButton = document.getElementById('myNextTwo');

openNewButton.onclick = function () {
  closeNewButton.style.display = "flex";
  openNewButton.style.display = "none";
};

var changeButton = document.getElementById('soldButton');
var openMyButton = document.getElementById('soldGoods');
var closeMyButton = document.getElementById('checkGoods');

changeButton.onclick = function () {
  openMyButton.style.display = "flex";
  closeMyButton.style.display = "none";
};