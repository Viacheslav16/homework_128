$(function(){
     $("#mainSlider").lightSlider({
      item: 1,
      slideMove: 1,
      loop: true,
    })
});
$(function(){
  const mySlider = $("#mySlider").lightSlider({
    item: 3,
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
})
		
