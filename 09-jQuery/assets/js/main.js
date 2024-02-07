$(function(){
  const mySlider = $("#mySlider").lightSlider({
    item: 5,
    slideMargin: 20,
    loop: true,
    controls: false
   })
   $("#myPrevSl").on('click', function(){
    mySlider.goToPrevSlide()
   })
   $("#myNextSl").on('click', function(){
    mySlider.goToNextSlide()
   })
}),
$(function(){
  const orgSlider = $("#compSlider").lightSlider({
    item: 9,
    slideMargin: 20,
    loop: true,
    controls: false,
    adaptiveHeight: true
   })
   $("#myPrevl").on('click', function(){
    orgSlider.goToPrevSlide()
   })
   $("#myNextl").on('click', function(){
    orgSlider.goToNextSlide()
   })
}),
$(function(){
     $("#myPic").lightSlider({
      item: 1,
      slideMargin: 20,
      loop: true,
      controls: false
     })
  });

  const openButton = document.getElementById('myPrevSl');
  const closeButton = document.getElementById('myPrevTwo');
  openButton.onclick = function() {
    closeButton.style.display = "flex";
    openButton.style.display = "none";
  }
  const openNewButton = document.getElementById('myNextSl');
  const closeNewButton = document.getElementById('myNextTwo');
  openNewButton.onclick = function() {
    closeNewButton.style.display = "flex";
    openNewButton.style.display = "none";
  }
  const changeButton = document.getElementById('soldButton');
  const openMyButton = document.getElementById('soldGoods');
  const closeMyButton = document.getElementById('checkGoods');
  changeButton.onclick = function() {
    openMyButton.style.display = "flex";
    closeMyButton.style.display = "none";
  }

  